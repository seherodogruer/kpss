# KPSS Defterim

📘 KPSS sınavına hazırlık için interaktif dijital çalışma defteri.

## Özellikler

- 📚 **126 Konu** — Türkçe, Matematik, Tarih, Coğrafya, Vatandaşlık, Güncel
- 🎨 **6 Tema** — Sarı, Beyaz, Krem, Gece, Mavi, Yeşil
- ✏️ **Çizim Sistemi** — Apple Pencil / stylus ile sayfa üzerine çizim
- 🔍 **Tam Metin Arama** — Tüm konularda anlık arama
- 🎯 **Hedef Tahtam** — Haftalık/günlük çalışma planlayıcı
- ✅ **Konu Takibi** — Çalışıldı / Tekrar edilecek durumu
- 📱 **Responsive** — Masaüstü, tablet, mobil uyumlu

## Teknoloji

| Araç | Amaç |
|------|------|
| TypeScript (strict) | Tip güvenliği |
| Vite | Build & dev server |
| Vitest | Unit testler |
| ESLint | Kod kalitesi |
| Prettier | Kod formatlama |

## Kurulum

```bash
npm install
```

## Geliştirme

```bash
npm run dev        # Dev server (http://localhost:5173)
npm run typecheck  # TypeScript type kontrolü
npm run test:unit  # Unit testler
npm run build      # Production build
```

## Mimari

```
src/
├── app/           # Application controller (composition root)
├── core/          # EventBus, Storage, Logger, Errors, Utils
├── content/       # 126 konu (6 kategori TS modülü)
├── drawing/       # Canvas çizim motoru + toolbar
├── features/      # Theme, TopicStatus, Search, Planner, Sidebar
└── styles/        # CSS (original.css — 921 satır korunmuş)
```

### Temel Prensipler

- **Modüler servis mimarisi** — Her özellik bağımsız bir servis
- **EventBus** — Feature'lar arası iletişim (loose coupling)
- **Type-safe storage** — LocalStorageAdapter + IndexedDBAdapter
- **Strict TypeScript** — `noUncheckedIndexedAccess`, `noUnusedLocals`
- **Veri ayrımı** — İçerikler kod mantığından ayrılmış

## Lisans

Tüm hakları saklıdır.
