document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('[id^="recently-viewed-"]');
    if (!container) return;
  
    const grid = container.querySelector('#recently-viewed-grid');
    const aspect = container.getAttribute('data-aspect-ratio');
    
    // A safer way to extract the product handle from the URL
    const currentHandle = window.location.pathname.split('/products/')[1]?.split('/')[0]?.split('?')[0];
  
    let viewed = JSON.parse(localStorage.getItem('recently_viewed_products') || "[]");
  
    if (currentHandle) {
      // Keep up to 10 items to ensure we always have a backup selection
      viewed = [currentHandle, ...viewed.filter(h => h !== currentHandle)].slice(0, 10);
      localStorage.setItem('recently_viewed_products', JSON.stringify(viewed));
    }
  
    // Select the first 4 items that are not the current product
    const toShow = viewed.filter(h => h !== currentHandle).slice(0, 4);
  
    if (toShow.length === 0) {
      container.remove();
      return;
    }
  
    container.style.opacity = '1';
  
    async function loadProducts() {
      const helperDiv = document.createElement('div');
      const encodedAspect = encodeURIComponent(aspect);
  
      const fetchPromises = toShow.map(handle => 
        fetch(`/products/${handle}?section_id=api-product-card&aspect_ratio=${encodedAspect}`)
          .then(res => res.text())
      );
  
      try {
        const results = await Promise.all(fetchPromises);
        const fragment = document.createDocumentFragment();
        
        results.forEach(html => {
          // Check that the response is not empty
          if (html.trim().length > 100) { 
            helperDiv.innerHTML = html.trim();
            const card = helperDiv.querySelector('.card-wrapper');
            if (card) {
              const li = document.createElement('li');
              li.className = 'grid__item recently-viewed-item';
              li.appendChild(card);
              fragment.appendChild(li);
            }
          }
        });
  
        if (fragment.childNodes.length > 0) {
          grid.innerHTML = '';
          grid.appendChild(fragment);
          // Small delay to allow the browser to render CSS transitions
          setTimeout(() => grid.classList.add('is-loaded'), 100);
        }
      } catch (e) {
        console.error("Recently Viewed Error:", e);
      }
    }
  
    loadProducts();
  });