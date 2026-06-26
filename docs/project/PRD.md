# BeatForge — Ürün Gereksinimleri Dokümanı (PRD)

## Ürün Özeti

**BeatForge**, Spotify'nin evrimsel varyantıdır: bağımsız müzik küratörleri ve playlist yöneticileri için akıllı dinleme oturumu intelligence platformu. Üç kritik mutasyon — taste drift intelligence inbox, dinleme oturumu ısı haritası ve playlist cohesion cascade radar — ile müzik keşif workflow'unu dönüştürür.

## Problem

Küratörler haftada ortalama 5.2 saat playlist triage ve keşif optimizasyonuna harcıyor. Spotify Discover Weekly opak; çoklu playlist mood çakışmaları geç fark ediliyor ve dinleyici kaybı görünmez kalıyor.

## Hedef Kullanıcılar

- 1–50 playlist yöneten bağımsız müzik küratörleri
- Podcast-müzik hibrit creator'lar
- DJ ve etkinlik playlist operatörleri
- Prosumer dinleyici-analistler

## Tasarım Yönü

**Midnight Vinyl & Electric Emerald** — Premium dark glassmorphism tema. Ana arka plan `#0A0E0D`, yüzey `#141A18`, marka vurgusu `#1DB954`. Önceki projelerden (Mediterranean Pearl, Obsidian Stream, Sage Mist) radikal farklılık.

## Temel Özellikler

1. **Playlistler:** Chill Vibes, Workout Energy, Late Night Jazz yönetimi
2. **Parçalar (Tracks):** Dinleme kayıtları, skip akışı, mood etiketleri
3. **Oturum Döngüleri (Sessions):** Tekrarlayen dinleme ve keşif döngüleri
4. **Taste Drift Intelligence Inbox:** Acil skip spike ve mood drift tespiti
5. **Dinleme Oturumu Isı Haritası:** Playlist × oturum grid analitiği
6. **Playlist Cohesion Cascade Radarı:** Parça değişikliği etki grafiği
7. **Kürasyon Seremonileri:** Weekly refresh, feedback, rotation
8. **Monetizasyon Kapıları:** Plan tier limitleri
9. **KVKK Denetim İzi:** Audit log kasası

## Teknik Stack

- Backend: NestJS, Prisma, PostgreSQL (port 5230)
- Frontend: Next.js App Router, Tailwind, shadcn/ui (port 4230)
- Deploy: Railway (backend) + Vercel (frontend)

## Demo

- E-posta: `demo@beatforge.com.tr`
- Şifre: `demo123456`

## Başarı Metrikleri

- Haftalık aktif küratör: 4.500 (Yıl 1)
- Ortalama oturum süresi artışı: %32
- Pro dönüşüm oranı: %12
- NPS: 50+

## Go-to-Market

Product Hunt lansmanı, müzik prodüktör toplulukları, Spotify geçiş karşılaştırma içeriği, Türkçe onboarding.
