// Downloads real assets from lumierespa.co.uk into public/
import fs from "node:fs";
import path from "node:path";

const assets = [
  { url: "https://lumierespa.co.uk/wp-content/uploads/2026/07/115d9f_fc8edb2ca29542aab1810a21ba8628b0mv2.avif", dest: "public/images/logo.avif" },
  { url: "https://lumierespa.co.uk/wp-content/uploads/2026/09/Neck-and-back.avif", dest: "public/images/treatment-back-neck-shoulder.avif" },
  { url: "https://lumierespa.co.uk/wp-content/uploads/2026/09/Sweedish.avif", dest: "public/images/treatment-swedish.avif" },
  { url: "https://lumierespa.co.uk/wp-content/uploads/2026/09/Armotherapy.avif", dest: "public/images/treatment-aromatherapy.avif" },
  { url: "https://lumierespa.co.uk/wp-content/uploads/2026/09/Deep-Tissue.avif", dest: "public/images/treatment-deep-tissue.avif" },
  { url: "https://lumierespa.co.uk/wp-content/uploads/2026/07/footer-logo-lumiere.png", dest: "public/images/footer-logo.png" },
  { url: "https://lumierespa.co.uk/wp-content/uploads/2026/07/Westminster-Horizontal-Logo-white-c-1536x512.png", dest: "public/images/westminster-logo.png" },
  { url: "https://lumierespa.co.uk/wp-content/uploads/2026/09/Footer-Image-of-lumiere-1024x768.webp", dest: "public/images/footer-bg.webp" },
  { url: "https://lumierespa.co.uk/wp-content/uploads/2026/09/cropped-Lumiere-Logo-32x32.webp", dest: "public/seo/favicon-32x32.webp" },
  { url: "https://lumierespa.co.uk/wp-content/uploads/2026/09/cropped-Lumiere-Logo-192x192.webp", dest: "public/seo/favicon-192x192.webp" },
  { url: "https://lumierespa.co.uk/wp-content/uploads/2026/09/cropped-Lumiere-Logo-180x180.webp", dest: "public/seo/apple-touch-icon.webp" },

  // Shared page-title banner background (Treatments, Contact Us, Training)
  { url: "https://lumierespa.co.uk/wp-content/uploads/2026/09/header-banner-1.jpeg", dest: "public/images/page-title-bg.jpeg" },

  // About Us page
  { url: "https://lumierespa.co.uk/wp-content/uploads/2026/09/About-Us-c-1024x409.jpg", dest: "public/images/about-hero-bg.jpg" },
  { url: "https://lumierespa.co.uk/wp-content/uploads/2026/07/e37ffc7c-e4bb-4970-a481-7d4ce42c0556.png", dest: "public/images/about-watermark.png" },
  { url: "https://lumierespa.co.uk/wp-content/uploads/2026/09/video-for-lumiere-hero-section-compress.mp4", dest: "public/videos/about-story.mp4" },
  { url: "https://lumierespa.co.uk/wp-content/uploads/2026/09/ChatGPT-Image-Sep-10-2026-08_12_09-AM-2-1024x683.png", dest: "public/images/about-promise.png" },
  { url: "https://lumierespa.co.uk/wp-content/uploads/2026/07/abt-sec-4.0.png", dest: "public/images/about-watermark-2.png" },

  // Treatments page
  { url: "https://lumierespa.co.uk/wp-content/uploads/2026/09/Banner-2.jpg", dest: "public/images/treatments-hero-bg.jpg" },

  // Training page
  { url: "https://lumierespa.co.uk/wp-content/uploads/2026/09/Swedish-massage-2.jpg", dest: "public/images/training-course.jpg" },

  // Gift Voucher page
  { url: "https://lumierespa.co.uk/wp-content/uploads/2026/09/Gift.jpg", dest: "public/images/gift-hero-bg.jpg" },
  { url: "https://lumierespa.co.uk/wp-content/uploads/2026/07/cropped-logo-Copy.png", dest: "public/images/gift-small-logo.png" },
  { url: "https://lumierespa.co.uk/wp-content/uploads/2026/07/download.png", dest: "public/images/gift-step-1.png" },
  { url: "https://lumierespa.co.uk/wp-content/uploads/2026/09/Secure-Pay-1.png", dest: "public/images/gift-step-2.png" },
  { url: "https://lumierespa.co.uk/wp-content/uploads/2026/09/Gift-icon.png", dest: "public/images/gift-step-3.png" },
];

async function downloadOne({ url, dest }) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed ${url}: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, buf);
  console.log(`OK  ${dest}  (${buf.length} bytes)`);
}

async function run() {
  const batchSize = 4;
  for (let i = 0; i < assets.length; i += batchSize) {
    const batch = assets.slice(i, i + batchSize);
    await Promise.all(
      batch.map((a) =>
        downloadOne(a).catch((err) => console.error(`FAIL ${a.url}: ${err.message}`))
      )
    );
  }
}

run();
