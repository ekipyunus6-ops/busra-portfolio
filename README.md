# Büşra Coşgun Personal Website

Next.js App Router, TypeScript, Tailwind CSS ve Framer Motion ile hazırlanmış tek sayfa kişisel uzmanlık sitesi.

## Kurulum

```bash
npm install
npm run dev
```

Tarayıcıda `http://localhost:3000` adresini açın.

## Üretim build

```bash
npm run build
npm run start
```

## Netlify deploy

Bu proje Netlify üzerinde ek plugin pinlemeden deploy edilebilir.

- Framework: `Next.js`
- Build command: `npm run build`
- Publish directory: boş bırakın, Netlify otomatik yönetsin
- Önerilen deploy tipi: Git üzerinden import

Repo içindeki `netlify.toml`, Netlify build komutunu sabitler ve Next.js skew protection ortam değişkenini açar.

## Güncellenmesi beklenen yer tutucular

- `public/profile-placeholder.svg`
- `lib/site-content.ts` içindeki Shopier bağlantıları
- `lib/site-content.ts` içindeki e-posta ve sosyal medya bağlantıları
- Seçili marka sunumu ve metin içerikleri
