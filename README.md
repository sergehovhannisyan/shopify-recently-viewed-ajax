# High-Performance "Recently Viewed" Section for Shopify

A modern, fast, and UX-optimized "Recently Viewed" products section built for Shopify themes (optimized for Dawn). This solution uses the **Shopify Section Rendering API** and **LocalStorage** to provide a seamless experience with **Zero Layout Shift (CLS)**.

## ✨ Features

- **🚀 Performance:** Fetches product data asynchronously using AJAX, ensuring zero impact on the initial page load speed.
- **🖼️ Zero Layout Shift:** Implements dynamic **Skeleton Loaders** that match the chosen image aspect ratio, preventing page jumping.
- **🛠️ Fully Customizable:** Merchants can choose between **Square**, **Portrait**, or **Adapt** aspect ratios directly from the Shopify Theme Editor.
- **📱 Responsive:** Built to work perfectly with Shopify’s standard grid system (Dawn theme compatible).
- **💾 Efficient Tracking:** Uses `localStorage` to track user history locally without slowing down the server.

---

## 🛠 Installation & Usage

### 1. Create the API Endpoint
1. Go to **Online Store > Themes > Edit Code**.
2. Under the **Sections** folder, click **Add a new section**.
3. Name it `api-product-card.liquid`.
4. Paste the code from `sections/api-product-card.liquid` and save.

### 2. Create the Main Section
1. Under the **Sections** folder, click **Add a new section**.
2. Name it `recently-viewed.liquid`.
3. Paste the code from `sections/recently-viewed.liquid` and save.

### 3. Add Assets
1. Under the **Assets** folder, upload or create `recently-viewed.js`.
2. Under the **Assets** folder, upload or create `recently-viewed.css`.

### 4. Integration Check
Open `sections/api-product-card.liquid` and ensure the `render` tag matches your theme's product card snippet (default is `card-product` for Dawn).

### 5. Add to Theme
1. Open the **Theme Customizer**.
2. Navigate to a **Product Page**.
3. Click **Add Section** and select **Recently Viewed**.
4. Adjust the settings (Heading, Aspect Ratio) in the sidebar.

---

## 📂 Repository Structure



```text
├── assets/
│   ├── recently-viewed.css    # Shimmer animations & skeleton styles
│   └── recently-viewed.js     # AJAX logic & LocalStorage handling
└── sections/
    ├── recently-viewed.liquid # Main section UI & Skeleton structure
    └── api-product-card.liquid # AJAX fragment endpoint
