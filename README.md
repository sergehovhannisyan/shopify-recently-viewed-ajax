# shopify-recently-viewed-ajax
High-performance 'Recently Viewed' products section for Shopify Dawn theme with AJAX fetching, LocalStorage, and Zero Layout Shift (CLS) optimization.

This project provides a professional-grade 'Recently Viewed' section for Shopify stores. Unlike standard implementations, this version uses the Shopify Section Rendering API to fetch product data asynchronously, ensuring it doesn't slow down the initial page load. It specifically addresses Cumulative Layout Shift (CLS) by using CSS-based skeleton screens that precisely match the product card dimensions."

🛠 How to Use
Follow these steps to integrate this section into your Shopify theme:

Step 1: Create the API Endpoint
Go to your Shopify Admin -> Online Store -> Themes -> Edit Code.

Under the Sections folder, click Add a new section.

Name it api-product-card.liquid.

Paste the code from sections/api-product-card.liquid into this file and save.

Step 2: Create the Main Section
Under the Sections folder, click Add a new section.

Name it recently-viewed.liquid.

Paste the code from sections/recently-viewed.liquid and save.

Step 3: Add Assets
Under the Assets folder, click Add a new asset.

Create recently-viewed.js and paste the JS code.

Create recently-viewed.css and paste the CSS code.

Step 4: Configure the Product Card (Important)
Open sections/api-product-card.liquid and ensure the render tag matches your theme's product card snippet name.

Example for Dawn theme: {% render 'card-product', ... %}.

Example for other themes: {% render 'product-card', ... %} or {% render 'product-grid-item', ... %}.

Step 5: Add to Theme Editor
Open the Theme Customizer.

Navigate to any Product page.

Click Add section in the sidebar and select Recently Viewed.

Choose your preferred Image Aspect Ratio (Square or Portrait) to match your store's design.
