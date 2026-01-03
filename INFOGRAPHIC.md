# 📊 INFOGRAFIKA MARORPG

> Wizualna mapa systemu gry - będzie rozwijana wraz z projektem

---

## 🌍 Struktura Świata Gry

```
┌─────────────────────────────────────────────────────────────────┐
│                        ŚWIAT MARORPG                             │
│                   (Futurystyczna Ziemia)                         │
└─────────────────────────────────────────────────────────────────┘
                                 │
                ┌────────────────┼────────────────┐
                │                │                │
          ┌─────▼─────┐    ┌────▼────┐    ┌─────▼─────┐
          │  KRAJ 1   │    │ KRAJ 2  │    │  KRAJ 3   │
          │ [3 osoby] │    │[3 osoby]│    │ [3 osoby] │
          └───────────┘    └─────────┘    └───────────┘
                │                │                │
          ┌─────▼─────┐    ┌────▼────┐
          │  KRAJ 4   │    │ KRAJ 5  │
          │ [3 osoby] │    │[3 osoby]│
          └───────────┘    └─────────┘
                                 │
                        ┌────────▼────────┐
                        │     ARBITER     │
                        │   (Narrator)    │
                        └─────────────────┘
```

---

## 👥 Struktura Grupy (Każdy Kraj)

```
┌──────────────────────────────────────────────────────────┐
│                      KRAJ [X]                            │
├──────────────────────────────────────────────────────────┤
│                                                          │
│   ┌──────────────┐   ┌──────────────┐   ┌────────────┐ │
│   │    LIDER     │   │  DYPLOMATA   │   │  GENERAŁ   │ │
│   ├──────────────┤   ├──────────────┤   ├────────────┤ │
│   │ • Decyzje    │   │ • Relacje    │   │ • Armia    │ │
│   │   strategicz.│   │   z krajami  │   │ • Produkcja│ │
│   │ • Kierunek   │   │ • Negocjacje │   │ • Obrona   │ │
│   │   rozwoju    │   │ • Sojusze    │   │ • Zasoby   │ │
│   └──────────────┘   └──────────────┘   └────────────┘ │
│                                                          │
│              Wspólnie planują ruch w turze              │
└──────────────────────────────────────────────────────────┘
```

---

## 🎯 5 Dyscyplin - Oś Rozgrywki

```
┌─────────────────────────────────────────────────────────────┐
│                    5 DYSCYPLIN                              │
│                 (Każdy kraj: 1 z każdej)                    │
└─────────────────────────────────────────────────────────────┘
         │          │           │           │          │
    ┌────▼───┐ ┌───▼────┐ ┌───▼────┐ ┌────▼────┐ ┌──▼──────┐
    │MILITARIA│ │CYWILIZ.│ │SPOŁECZ.│ │  NAUKA  │ │ŚRODOWIS.│
    ├─────────┤ ├────────┤ ├────────┤ ├─────────┤ ├─────────┤
    │ Armia   │ │Infrast.│ │Ludność │ │Technol. │ │Ekologia │
    │ Broń    │ │Miasta  │ │Kultura │ │Innowacje│ │Zasoby   │
    │ Obrona  │ │Drogi   │ │Morale  │ │Badania  │ │Klimat   │
    └─────────┘ └────────┘ └────────┘ └─────────┘ └─────────┘
         │          │           │           │          │
    ┌────▼──────────▼───────────▼───────────▼──────────▼────┐
    │    Każda Dyscyplina: POZYTYWNA lub NEGATYWNA          │
    │         Min. 2 negatywne na kraj startowo              │
    └────────────────────────────────────────────────────────┘
```

### 📈 Evolucja Dyscyplin

```
POZYTYWNA (np. Zaawansowana Nauka):
────────────────────────────────────
Wykorzystywanie → Rozwój → Większa przewaga
  Lvl 1         →  Lvl 2  →     Lvl 3

Przykład: Fuzja jądrowa → Reaktory fuzyjne → Energia plazmowa


NEGATYWNA (np. Głód):
────────────────────────────────────
Zaniedbanie → Pogłębienie → Katastrofa
   Lvl 1    →    Lvl 2     →   Lvl 3

Przykład: Głód → Zamieszki/Kradzieże → Kanibalizm
```

---

## ⏰ Struktura Tury (1 Pora Roku)

```
┌──────────────────────────────────────────────────────────────┐
│                     TURA = 1 PORA ROKU                       │
└──────────────────────────────────────────────────────────────┘

FAZA 1: PLANOWANIE (15 minut)
┌────────────────────────────────────────────────────┐
│ Wszystkie 5 krajów jednocześnie:                  │
│ • Dyskutują w grupach (Lider + Dyplomata + Gen.)  │
│ • Spisują plan działania na kartce                │
│ • Decydują co chcą osiągnąć w tej turze           │
└────────────────────────────────────────────────────┘
                        ▼
FAZA 2: ZGŁOSZENIE
┌────────────────────────────────────────────────────┐
│ Każdy kraj oddaje plan Arbitrowi (POUFNIE)        │
└────────────────────────────────────────────────────┘
                        ▼
FAZA 3: ROZSTRZYGNIĘCIE ARBITRA
┌────────────────────────────────────────────────────┐
│ Arbiter (w sekrecie):                              │
│ 1. Czyta wszystkie plany                          │
│ 2. Ocenia jakość zgłoszeń:                        │
│    • Wykorzystanie technologii                     │
│    • Informacje wywiadowcze                        │
│    • Silne strony kraju                            │
│    • Radzenie sobie z problemami w Dyscyplinach   │
│ 3. Określa kolejność działań                       │
│ 4. Używa KOŁA FORTUNY do rozstrzygnięcia          │
│                                                    │
│ [Gracze mają coś do roboty w tym czasie]          │
└────────────────────────────────────────────────────┘
                        ▼
FAZA 4: OGŁOSZENIE WYNIKÓW
┌────────────────────────────────────────────────────┐
│ Arbiter ogłasza "NEWSY" publicznie:                │
│ • Reportaż opisujący wydarzenia tury              │
│ • Co się udało, co nie                             │
│ • (Akcje sekretne - NIE ogłaszane)                │
└────────────────────────────────────────────────────┘
                        ▼
             [Następna Pora Roku]
```

---

## 🎰 Koło Fortuny - Rozstrzyganie Akcji

```
┌─────────────────────────────────────────────────┐
│           KOŁO FORTUNY                          │
│                                                 │
│        Sukces    Częściowy   Porażka            │
│          ████      ████        ██               │
│                                                 │
│  Modyfikatory wpływające na szanse:             │
│  ✓ Technologia (+)                              │
│  ✓ Informacje wywiadowcze (+)                   │
│  ✓ Wykorzystanie silnych stron (+)              │
│  ✗ Problemy w Dyscyplinach (-)                  │
│                                                 │
│  Gracze kręcą kołem → Arbiter ogłasza wynik     │
└─────────────────────────────────────────────────┘
```

---

## 🏆 Warunki Zwycięstwa (W FAZIE PROJEKTOWANIA)

```
┌──────────────────────────────────────────────────────────┐
│              OPCJE WIN CONDITIONS                        │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  OPCJA A: MISJA NA MARSA                                │
│  ┌────────────────────────────────────────────┐         │
│  │ Wymaga zebrania 3 technologii:             │         │
│  │ 1. Źródło Energii (fuzja/reaktory?)        │         │
│  │ 2. Transport Kosmiczny (rakiety/portale?)  │         │
│  │ 3. Terraformacja (zmiana klimatu Marsa)    │         │
│  └────────────────────────────────────────────┘         │
│                                                          │
│  OPCJA B: PUNKTY ZWYCIĘSTWA                             │
│  ┌────────────────────────────────────────────┐         │
│  │ Za udane akcje, technologie, rozwój        │         │
│  │ Wykorzystanie technologii i nauki mnoży    │         │
│  │ punkty                                      │         │
│  └────────────────────────────────────────────┘         │
│                                                          │
│  OPCJA C: ALTERNATYWNE CELE                             │
│  ┌────────────────────────────────────────────┐         │
│  │ Różne ścieżki zwycięstwa:                  │         │
│  │ • Dominacja militarna                       │         │
│  │ • Stworzenie czarnej dziury (przypadek?)   │         │
│  │ • Hegemonia dyplomatyczna                   │         │
│  └────────────────────────────────────────────┘         │
│                                                          │
│         [DECYZJA PROJEKTOWA DO PODJĘCIA]                │
└──────────────────────────────────────────────────────────┘
```

---

## 🔄 Interakcje Między Krajami

```
        KRAJ 1                    KRAJ 2
          │                         │
          │◄──── Dyplomacja ───────►│
          │  (traktaty, sojusze)    │
          │                         │
          │◄────── Handel ─────────►│
          │   (zasoby, tech)        │
          │                         │
          │◄───── Wywiad ──────────►│
          │  (informacje)           │
          │                         │
          │◄───── Konflikt ────────►│
          │    (wojna)              │
          │                         │
          ▼                         ▼
    ┌─────────┐               ┌─────────┐
    │ ARBITER │◄──────────────│ ARBITER │
    │rozstrzyga│              │rozstrzyga│
    └─────────┘               └─────────┘
```

---

## 🚀 Progresja i Technologie (FUTURYSTYCZNE)

```
┌──────────────────────────────────────────────────────────┐
│              DRZEWO TECHNOLOGII                          │
│                 (PRZYKŁAD)                               │
└──────────────────────────────────────────────────────────┘

              ENERGIA                  TRANSPORT
         ┌───────┴───────┐         ┌──────┴───────┐
    Węgiel         Energia      Rakiety        Portale
      │            Słoneczna        │              │
   Ropa/Gaz          │          Silniki Ion    Warp Drive
      │          Fuzja Jądrowa      │              │
  Reaktory           │          Statki          Teleport.
   Jądrowe      Plazma/Antym.   Międzyplanet.      │
      │              │              │          Podróże
      └──────────────┴──────────────┴─────► Międzygwiazdowe


            TERRAFORMACJA
         ┌────────┴─────────┐
    Atmosfera          Woda/Gleba
         │                  │
    Generatory O2      Rośliny GMO
         │                  │
    Kopuły ochronne    Ekosystemy
         │                  │
         └─────────┬────────┘
                   │
              Miasta na Marsie
```

---

## 📦 Struktura Projektu - Mapa Folderów

```
MaroRPG/
│
├── README.md ◄────────────────── [START TUTAJ]
├── PLAN.md                       [Roadmap + Checklist]
├── INFOGRAPHIC.md ◄────────────  [TEN PLIK]
│
├── 01_Core_Design/ ◄─────────── [ETAP 1]
│   ├── vision.md                [Wizja gry]
│   ├── pillars.md               [Filary mechanik]
│   └── win_conditions.md        [Warunki zwycięstwa]
│
├── 02_Mechanics/ ◄──────────── [ETAP 2]
│   ├── turn_structure.md        [Fazy tury]
│   ├── resources.md             [Zasoby]
│   ├── roles.md                 [Lider/Dyplomata/Generał]
│   ├── disciplines.md           [5 Dyscyplin]
│   └── wheel_of_fortune.md      [Koło Fortuny]
│
├── 03_Interactions/ ◄──────── [ETAP 3]
│   ├── diplomacy.md             [Dyplomacja]
│   ├── trade.md                 [Handel]
│   ├── conflicts.md             [Konflikty/wojny]
│   └── espionage.md             [Wywiad]
│
├── 04_Progression/ ◄──────────[ETAP 4]
│   ├── tech_tree.md             [Drzewo technologii]
│   ├── futuristic_elements.md   [Sci-fi elementy]
│   └── discipline_evolution.md  [Evolucja Dyscyplin]
│
├── 05_Nations/ ◄──────────────[ETAP 5]
│   ├── nation_template.md       [Szablon kraju]
│   ├── starting_disciplines.md  [Startowe Dyscypliny]
│   ├── nation_1.md              [Kraj 1]
│   ├── nation_2.md              [Kraj 2]
│   ├── nation_3.md              [Kraj 3]
│   ├── nation_4.md              [Kraj 4]
│   └── nation_5.md              [Kraj 5]
│
├── 06_Arbiter/ ◄──────────────[ETAP 6]
│   ├── arbiter_guide.md         [Przewodnik Arbitra]
│   ├── evaluation_system.md     [System oceny]
│   └── news_reporting.md        [Pisanie newsów]
│
├── 07_Player_Materials/ ◄─────[ETAP 6]
│   ├── rulebook.md              [Księga zasad]
│   └── player_aids.md           [Pomoce dla graczy]
│
└── 08_Playtesting/ ◄──────────[ETAP 7]
    ├── test_sessions.md         [Sesje testowe]
    └── feedback.md              [Feedback]
```

---

## 🎯 Filozofia Gry - 3 Filary

```
┌──────────────────────────────────────────────────────────┐
│                  3 FILARY MARORPG                        │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  1️⃣  STRATEGIA EKONOMICZNA                              │
│      ├─ Zarządzanie zasobami                            │
│      ├─ Rozwój infrastruktury                           │
│      └─ Balansowanie budżetu                            │
│                                                          │
│  2️⃣  DYPLOMACJA I INTERAKCJE                            │
│      ├─ Negocjacje między graczami                      │
│      ├─ Sojusze i koalicje                              │
│      └─ Wywiad i intrygi                                │
│                                                          │
│  3️⃣  FUTURYSTYCZNA NAUKA                                │
│      ├─ Drzewo technologii                              │
│      ├─ Wyścig kosmiczny                                │
│      └─ Innowacje sci-fi                                │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

## 📊 Flow Informacji w Grze

```
┌─────────────┐
│   GRACZE    │
│ (5 krajów)  │
└──────┬──────┘
       │
       │ [Planują akcje]
       ▼
┌──────────────┐
│  Kartki z    │◄──── Poufne
│   planami    │
└──────┬───────┘
       │
       │ [Zgłoszenie]
       ▼
┌──────────────┐
│   ARBITER    │
│  (ocenia,    │◄──── Sekretne
│  rozstrzyga) │      rozstrzygnięcia
└──────┬───────┘
       │
       │ [Koło Fortuny]
       ▼
┌──────────────┐
│   "NEWSY"    │
│  (reportaż)  │◄──── Publiczne
└──────┬───────┘       ogłoszenie
       │
       │ [Wyniki]
       ▼
┌──────────────┐
│   GRACZE     │
│ (reagują na  │
│   wyniki)    │
└──────────────┘
       │
       └──► [Następna tura]
```

---

## 🎨 Legenda Statusów

- ✅ **Ukończone** - Element jest gotowy
- 🔄 **W toku** - Obecnie pracujemy nad tym
- ⏳ **Planowane** - Do zrobienia w przyszłości
- ❓ **Do decyzji** - Wymaga podjęcia decyzji projektowych
- 🔥 **Priorytet** - Najważniejsze na teraz

---

## 🎴 GALERIA ELEMENTÓW GRY - Kompletny Przegląd

> **NOWE!** Po playteście #1 (3.01.2026) dodano wizualne karty pomocy dla graczy

### 📋 Materiały Gracza - Kompletny Zestaw

```
╔════════════════════════════════════════════════════════════════════╗
║              🎮 MARORPG - ZESTAW MATERIAŁÓW GRACZA                 ║
╠════════════════════════════════════════════════════════════════════╣
║                                                                    ║
║  📁 PRZED GRĄ (Przygotowanie):                                     ║
║  ┌──────────────────────────────────────────────────────────────┐ ║
║  │ 1. 📖 KARTA ONBOARDING                                       │ ║
║  │    → Wprowadzenie dla nowych graczy                          │ ║
║  │    → 3 ścieżki zwycięstwa                                    │ ║
║  │    → Podstawowe zasady                                       │ ║
║  │                                                              │ ║
║  │ 2. 🏛️ KARTA KRAJU (wypełniona dla twojego kraju)            │ ║
║  │    → 5 Dyscyplin (poziomy, typ, stan)                       │ ║
║  │    → Zasoby (surowce, energia, PB, złoto)                   │ ║
║  │    → Cel długoterminowy                                      │ ║
║  │                                                              │ ║
║  │ 3. 🎯 KARTY DZIEDZIN (5 sztuk - po jednej na dyscyplinę)    │ ║
║  │    → POZYTYWNE: jak rozwijać, co się odblokuje              │ ║
║  │    → NEGATYWNE: jak naprawić, koszty, konsekwencje          │ ║
║  └──────────────────────────────────────────────────────────────┘ ║
║                                                                    ║
║  🎮 PODCZAS GRY (Referencje):                                      ║
║  ┌──────────────────────────────────────────────────────────────┐ ║
║  │ 4. 🎮 KARTA AKCJI                                            │ ║
║  │    → Menu 7 dostępnych akcji                                 │ ║
║  │    → Koszty każdej akcji                                     │ ║
║  │    → Porady strategiczne                                     │ ║
║  │                                                              │ ║
║  │ 5. 🎲 KARTA KOŁA FORTUNY                                     │ ║
║  │    → Modyfikatory (dyscypliny, morale, sojusze)             │ ║
║  │    → Przykładowe obliczenia                                  │ ║
║  │    → Wyniki (1-100 co oznacza)                              │ ║
║  │                                                              │ ║
║  │ 6. 🌳 DRZEWO TECHNOLOGII                                     │ ║
║  │    → Tier 1-4 (mapa progresji)                              │ ║
║  │    → Co jest dostępne/zablokowane                           │ ║
║  │    → Wymagania technologii                                   │ ║
║  │                                                              │ ║
║  │ 7. 🌱 KARTY TECHNOLOGII (na każdą dostępną tech)            │ ║
║  │    → Wymagania (dyscypliny, tech-prereq)                    │ ║
║  │    → Koszt budowy                                            │ ║
║  │    → Efekty po zbudowaniu                                    │ ║
║  │    → Szansa sukcesu                                          │ ║
║  └──────────────────────────────────────────────────────────────┘ ║
║                                                                    ║
║  📝 PLANOWANIE TURY:                                               ║
║  ┌──────────────────────────────────────────────────────────────┐ ║
║  │ 8. 📝 KARTA PLANOWANIA                                       │ ║
║  │    → Formularz do wypełnienia każdej tury                    │ ║
║  │    → Pola: akcja, metoda, koszt, szansa                      │ ║
║  │    → Przypomnienie o prioryteczkach                          │ ║
║  └──────────────────────────────────────────────────────────────┘ ║
║                                                                    ║
║  📍 LOKALIZACJA PLIKÓW:                                            ║
║     • 07_Player_Materials/visual_cards.md ← WSZYSTKIE KARTY       ║
║     • 07_Player_Materials/player_aids.md ← Inne pomoce            ║
║     • 08_Playtesting/feedback.md ← Feedback z testów              ║
║                                                                    ║
╚════════════════════════════════════════════════════════════════════╝
```

---

## 🎯 ONE-PAGE OVERVIEW - Cała Gra w Pigułce

```
╔════════════════════════════════════════════════════════════════════╗
║                    🌍 MARORPG - KOMPLETNY PRZEGLĄD                 ║
╠════════════════════════════════════════════════════════════════════╣
║                                                                    ║
║  🎯 CO TO ZA GRA?                                                  ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ║
║  Strategiczna gra RPG dla 15-20 osób (5 krajów × 3 osoby + arbiter)║
║  Futurystyczna Ziemia - wyścig o dominację lub Misję na Marsa     ║
║  Turowa rozgrywka (1 tura = 1 pora roku)                          ║
║                                                                    ║
║  👥 GRACZE                                                         ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ║
║  Każdy kraj: 3 osoby (Lider, Dyplomata, Generał)                  ║
║  + 1 Arbiter (narrator, rozstrzygający)                            ║
║                                                                    ║
║  🎮 MECHANIKA (CO ROBIĄ GRACZE?)                                   ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ║
║  KAŻDA TURA:                                                       ║
║  1. PLANOWANIE (15 min) - grupa dyskutuje, spisuje plan           ║
║  2. ZGŁOSZENIE - oddanie planu Arbitrowi (poufnie)                ║
║  3. ROZSTRZYGNIĘCIE - Arbiter ocenia, Koło Fortuny                ║
║  4. NEWSY - Arbiter ogłasza wyniki jako reportaż                  ║
║                                                                    ║
║  📊 5 DYSCYPLIN (Serce Gry)                                        ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ║
║  ⚔️  MILITARIA      - armia, broń, obrona                          ║
║  🏗️  CYWILIZACJA    - infrastruktura, miasta                      ║
║  👥 SPOŁECZEŃSTWO   - ludność, morale, kultura                     ║
║  🔬 NAUKA           - technologie, badania                         ║
║  🌍 ŚRODOWISKO      - ekologia, zasoby                             ║
║                                                                    ║
║  Każda: POZYTYWNA (przewaga) lub NEGATYWNA (problem)               ║
║  Start: 2-3 negatywne, 2-3 pozytywne                               ║
║  Evolucja: Lvl 0 → 1 → 2 → 3 → 4                                   ║
║                                                                    ║
║  🎲 KOŁO FORTUNY (Jak rozstrzygać?)                                ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ║
║  Bazowa szansa: 60%                                                ║
║  + Pozytywne dyscypliny (Lvl 1: +10%, ..., Lvl 4: +40%)           ║
║  - Negatywne dyscypliny (Lvl 1: -10%, ..., Lvl 3: -30%)           ║
║  + Morale, Sojusze, Role                                           ║
║  = FINALNA SZANSA (rzut 1-100)                                     ║
║                                                                    ║
║  🚀 JAK WYGRAĆ?                                                    ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ║
║  3 ŚCIEŻKI ZWYCIĘSTWA:                                             ║
║  1. 🚀 MISJA NA MARSA - NAUKA Lvl 4 + 3 technologie               ║
║     (Źródło Energii, Transport, Terraformacja Tier 3)             ║
║  2. ⚔️  DOMINACJA MILITARNA - MILITARIA Lvl 4 + podbicie          ║
║  3. 🌟 UTOPIA - 3 dyscypliny na Lvl 4                             ║
║                                                                    ║
║  🌳 TECHNOLOGIE                                                    ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ║
║  Tier 1: Podstawowe (Energia Słoneczna, Reaktory)                 ║
║  Tier 2: Zaawansowane (Fuzja Jądrowa, Drony Bojowe)               ║
║  Tier 3: Futurystyczne (Reaktory Plazmowe, Terraformacja)         ║
║  Tier 4: Endgame (Misja na Marsa!)                                ║
║                                                                    ║
║  🤝 INTERAKCJE                                                     ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ║
║  • Dyplomacja (traktaty, sojusze)                                 ║
║  • Handel (zasoby, technologie)                                    ║
║  • Wywiad (szpiegostwo, informacje)                                ║
║  • Konflikt (wojna, atak)                                          ║
║                                                                    ║
║  ⚠️ NAJWIĘKSZE WYZWANIA (z playtestu #1)                          ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ║
║  ✗ Gracze nie wiedzieli jakie akcje mogą wykonać                  ║
║  ✗ Brak pewności co do kosztów i efektów                           ║
║  ✗ Niejasny stan kraju i dostępne opcje                            ║
║  ✓ ROZWIĄZANIE: 8 wizualnych kart pomocy! (visual_cards.md)       ║
║                                                                    ║
╚════════════════════════════════════════════════════════════════════╝
```

---

## 🎨 WIZUALIZACJA DLA GRAFIKA - Jak to powinno wyglądać

> Opis dla osoby, która chciałaby stworzyć prawdziwą grafikę/infografikę w Canva, Figma, Photoshop itp.

### 📐 Format i Rozmiar

**Rekomendowany format:**
- **Infografika główna:** Pionowa, A3 (297×420mm) lub 1080×1920px (format Instagram Story)
- **Karty graczy:** A5 (148×210mm) każda, możliwe do wydruku
- **One-pager:** A4 poziomo (landscape)

**Styl wizualny:**
- **Paleta kolorów:**
  - Tło: Ciemny granatowy/czarny (#0a0e27)
  - Akcenty: Cyjan elektryczny (#00d9ff), fioletowy neon (#b537f2)
  - Dyscypliny: każda ma swój kolor:
    - ⚔️ MILITARIA: Czerwony (#ff3838)
    - 🏗️ CYWILIZACJA: Szary (#7f8c8d)
    - 👥 SPOŁECZEŃSTWO: Zielony (#2ecc71)
    - 🔬 NAUKA: Niebieski (#3498db)
    - 🌍 ŚRODOWISKO: Zielony limonkowy (#1abc9c)
  - Ostrzeżenia: Pomarańczowy (#f39c12), Czerwony (#e74c3c)

- **Typografia:**
  - Nagłówki: **Orbitron Bold** lub **Exo 2 Black** (sci-fi font)
  - Treść: **Inter Regular** lub **Roboto** (czytelne, nowoczesne)
  - Akcenty: **Courier New** (monospace, dla liczb i statystyk)

- **Ikony:**
  - Flat design, minimalistyczne
  - Kontur (outline style), nie wypełnione
  - Grubość linii: 2-3px
  - Źródła: Feather Icons, Heroicons, Material Icons

### 🎴 Layout Kart Graczy

**Karta Kraju (A5):**
```
┌─────────────────────────────────────┐
│  🏛️ [NAZWA KRAJU]                   │  ← Duży nagłówek, gradient
│  Motto: [...]                       │  ← Kursywa, mniejszy font
├─────────────────────────────────────┤
│                                     │
│  📊 DYSCYPLINY                      │  ← Sekcja z tabelą
│  ┌─────────┬─────┬─────┬─────────┐ │
│  │ Dyscp.  │ Typ │ Lvl │ Stan    │ │  ← Responsive table
│  ├─────────┼─────┼─────┼─────────┤ │
│  │ ⚔️  MIL │ ✅  │ 2   │ [opis]  │ │  ← Emoji + skrót
│  │         │     │[▓▓░]│ [efekt] │ │  ← Progress bar wizualny
│  └─────────┴─────┴─────┴─────────┘ │
│                                     │
│  📦 ZASOBY                          │  ← Sekcja z ikonkami
│  [icon] Surowce:    120/200        │  ← Progress bar + liczba
│  [icon] Energia:    150/300        │
│  [icon] PB:         45              │
│                                     │
│  🎯 CEL: [...]                      │  ← Wyróżniony box
└─────────────────────────────────────┘
```

**Wizualne elementy:**
- Progress bary: Gradient fill (pusty→pełny)
- Ikony: Kolorowe, konsystentne z paletą
- Tło: Subtelny gradient lub tekstura (futurystyczna)
- Ramki: Zaokrąglone rogi (border-radius: 8-12px)
- Cienie: Box-shadow dla głębi

### 🌳 Drzewo Technologii

**Styl:**
- **Node-based diagram** (jak drzewa talentów w grach)
- Każda technologia = okrągły node z ikoną
- Połączenia: Linie/strzałki pokazujące prereq
- Kolory:
  - ✅ Odblokowane: Zielony glow
  - 🔓 Dostępne: Cyjan glow
  - 🔒 Zablokowane: Szary, dim
  - ❌ Nieodblokowane: Czerwony outline

**Layout:**
```
        TIER 1
     [○] [○] [○]
        ↓   ↓
       TIER 2
      [○] [○]
         ↓
       TIER 3
      [○] [○]
         ↓
       TIER 4
       [MARS!]
```

### 📊 Infografika Flow Gry

**Circular flow** (cykliczny diagram):
```
     PLANOWANIE
         ↓
     ZGŁOSZENIE
         ↓
   ROZSTRZYGNIĘCIE
         ↓
       NEWSY
         ↓
    [następna tura]
```

**Elementy:**
- Każda faza = sekcja z ikoną i opisem
- Strzałki: Animowane (w wersji cyfrowej) lub grube
- Timeline po bokach pokazujący czas (15 min planowanie, etc.)

### 🎯 One-page Overview

**Podział na sekcje:**
```
┌─────────────────────────────────────────┐
│  NAGŁÓWEK (logo, tytuł)                 │
├───────────────┬─────────────────────────┤
│   GRACZE      │   MECHANIKA             │
│   (kto gra?)  │   (jak się gra?)        │
├───────────────┼─────────────────────────┤
│  DYSCYPLINY   │   KOŁO FORTUNY          │
│  (serce gry)  │   (rozstrzyganie)       │
├───────────────┴─────────────────────────┤
│  TECHNOLOGIE (drzewo uproszczone)       │
├─────────────────────────────────────────┤
│  WIN CONDITIONS (3 ścieżki)             │
└─────────────────────────────────────────┘
```

**Layout:** Grid-based, responsive, balansowane proporcje

---

## 📝 Notatki do Rozwoju

Ta infografika będzie rozwijana wraz z projektem. Elementy do dodania:
- [✅] Szczegółowe diagramy Dyscyplin z przykładami evolucji ← DODANE (visual_cards.md)
- [✅] Wizualizacja przykładowej tury krok po kroku ← CZĘŚCIOWO (flow chart)
- [✅] Mapa drzewa technologii (kompletna) ← DODANE (visual_cards.md)
- [✅] Przykłady kart krajów ← DODANE (visual_cards.md)
- [✅] Przykłady kart Dyscyplin ← DODANE (visual_cards.md)
- [ ] Flow chart systemu oceny Arbitra
- [ ] Grafiki i ikony (gdy projekt będzie bardziej zaawansowany)
- [ ] **NOWE:** Wersja graficzna infografiki (Canva/Figma) ← DO ZROBIENIA

**Priorytety po playteście #1:**
- [✅] Wizualne karty pomocy ← UKOŃCZONE (3.01.2026)
- [ ] Testowanie kart w playteście #2
- [ ] Iteracja na podstawie feedbacku

---

**Ostatnia aktualizacja:** 2026-01-03
**Status:** 🔄 Dokument żywy - rozszerzony po playteście #1
