# 📋 PLAN ROZWOJU MARORPG

## 🎯 Cel Projektu

Stworzenie kompletnej, grywalnej gry RPG typu **nation-building** na papierze, łączącej elementy strategii ekonomicznej, dyplomacji i futurystycznej nauki.

---

## 🗓️ Roadmap - 7 Etapów Rozwoju

### ✅ ETAP 1: Fundament i Dokumentacja Koncepcyjna
**Status: 🔄 W TOKU**

**Cel:** Zebranie wizji, określenie core pillars, zdefiniowanie win conditions

**Checklist:**
- [x] Stworzenie struktury projektu
- [x] Określenie podstawowej wizji gry
- [x] Ustalenie struktury graczy (5 krajów × 3 role)
- [x] Ustalenie systemu tur (pory roku)
- [x] Określenie roli Arbitra
- [x] Zdefiniowanie 5 Dyscyplin jako osi rozgrywki
- [ ] **Finalizacja Win Conditions** (w trakcie decyzji projektowych)
- [ ] Dokument: `01_Core_Design/vision.md`
- [ ] Dokument: `01_Core_Design/pillars.md`
- [ ] Dokument: `01_Core_Design/win_conditions.md`

**Kluczowe Ustalenia:**
- Tury = Pory Roku (brak progression przez epoki)
- Guru przyjmuje poufnie plany, ocenia, ogłasza jako "newsy"
- Dyscypliny (nie "sytuacje") to trzewia rozgrywki
- Evolucja Dyscyplin: wykorzystywanie rozwija pozytywne, ale pogłębia negatywne

---

### ✅ ETAP 2: System Mechanik Podstawowych
**Status: ✅ UKOŃCZONY (Lekcja 3.1)**

**Cel:** Zaprojektować kompletny system mechanik rozgrywki

**Checklist:**
- [x] **Struktura Tury** - szczegółowe fazy ✅
  - Faza 0: INAUGURACJA (pierwsza tura — opis świata i frakcji)
  - Faza 1: Planowanie (15 min dla wszystkich grup)
  - Faza 2: Zgłoszenie do Arbitra (poufne)
  - Faza 3: Rozstrzygnięcie Arbitra (Koło Fortuny)
  - Faza 4: Ogłoszenie "newsów"
  - [x] Dokument: `02_Mechanics/turn_structure.md`

- [x] **System Zasobów** ✅
  - 4 zasoby: MAT, EN, PB, LUD
  - Model 3-warstwowy: Technologie → Infrastruktura → Zasoby
  - [x] Dokument: `02_Mechanics/resources.md`

- [x] **Mechanika Ról** ✅
  - Lider: 7 akcji (Edykt, Budowa, Badanie, Inwestycja, Naprawa, Zmiana ścieżki, Przemówienie)
  - Dyplomata: 7 akcji + darmowa tajna wiadomość
  - Generał: 8 akcji (w tym Przetarg na sprzęt)
  - Mechanika głosowania (2 vs 1 mogą przegłosować Lidera)
  - [x] Dokument: `02_Mechanics/roles.md` + `MECHANIKI_AUDYT.md`

- [x] **System Dyscyplin** ✅
  - Szczegółowa mechanika evolucji Dyscyplin
  - Pozytywne: Lvl 1-4 (rozwój)
  - Negatywne: Lvl 1-3 (pogorszenie)
  - Sabotaż wpływa na Koło Fortuny celu
  - [x] Dokument: `02_Mechanics/disciplines.md`

- [x] **Koło Fortuny** ✅ (System Hybrydowy)
  - 7 wyników: Sukces, Porażka, Krytyczny sukces, Krytyczna porażka, Kataklizm, Odkrycie, Random
  - Aplikacja + Karty eventowe (Twist/Discovery/Disaster)
  - Pełna transparentność (gracze widzą % szans)
  - [x] Dokument: `MECHANIKI_AUDYT.md`

**Decyzje Projektowe PODJĘTE:**
- [x] Ocena Arbitra: 1-3 punkty → 40%/60%/80% bazowej szansy
- [x] Każda rola ma 1 akcję/turę (3 akcje na kraj)
- [x] Wszystkie kraje działają jednocześnie
- [x] Transparentność Koła: gracze widzą swoje szanse

---

### ⏳ ETAP 3: System Interakcji Między Krajami
**Status: ⏳ PLANOWANE**

**Cel:** Zaprojektować mechaniki dyplomatyczne, handel, konflikty

**Checklist:**
- [ ] **Mechaniki Dyplomatyczne**
  - Traktaty, sojusze, pakty
  - Jak Dyplomata negocjuje?
  - [ ] Dokument: `03_Interactions/diplomacy.md`

- [ ] **Handel i Wymiana**
  - Jak wygląda handel między krajami?
  - Czy są umowy handlowe?
  - [ ] Dokument: `03_Interactions/trade.md`

- [ ] **System Konfliktów**
  - Jak rozstrzygane są wojny/konflikty?
  - Rola Generała w konfliktach
  - [ ] Dokument: `03_Interactions/conflicts.md`

- [ ] **Szpiegostwo i Wywiad**
  - Jak zbiera się informacje wywiadowcze?
  - Jak wpływają na ocenę Arbitra?
  - [ ] Dokument: `03_Interactions/espionage.md`

---

### ⏳ ETAP 4: System Progresji i Rozwoju
**Status: ⏳ PLANOWANE**

**Cel:** Zaprojektować drzewo technologii i elementy futurystyczne

**Checklist:**
- [ ] **Drzewo Technologii**
  - Jakie technologie istnieją?
  - Jak się je zdobywa?
  - Jak wpływają na rozgrywkę?
  - [ ] Dokument: `04_Progression/tech_tree.md`

- [ ] **Elementy Futurystyczne**
  - Co oznacza "futurystyczny" w kontekście gry?
  - Jakie technologie? (AI, kosmiczne podróże, terraformacja?)
  - [ ] Dokument: `04_Progression/futuristic_elements.md`

- [ ] **Evolucja Dyscyplin**
  - Szczegółowe ścieżki evolucji dla każdej Dyscypliny
  - Tabele progresji (pozytywne i negatywne)
  - [ ] Dokument: `04_Progression/discipline_evolution.md`

**Decyzje Projektowe do Podjęcia:**
- Jak wygląda drzewo technologii dla Misji na Marsa?
  - Źródło energii (fuzja? reaktory? energia słoneczna?)
  - Transport kosmiczny (rakiety? portale? silniki warp?)
  - Terraformacja (jak zmienić środowisko Marsa?)

---

### ⏳ ETAP 5: Balansowanie i Definicje Krajów
**Status: ⏳ PLANOWANE**

**Cel:** Stworzyć 5 unikalnych krajów ze zbalansowanymi startowymi Dyscyplinami

**Checklist:**
- [ ] **Szablon Kraju**
  - Struktura definicji kraju
  - Nazwa, tło, kultura
  - [ ] Dokument: `05_Nations/nation_template.md`

- [ ] **Startowe Dyscypliny**
  - Logika przypisywania Dyscyplin do krajów
  - Balansowanie (2+ problemy, 3- przewagi)
  - [ ] Dokument: `05_Nations/starting_disciplines.md`

- [ ] **Definicje 5 Krajów**
  - Kraj 1: [Nazwa] - [Specjalizacja]
  - Kraj 2: [Nazwa] - [Specjalizacja]
  - Kraj 3: [Nazwa] - [Specjalizacja]
  - Kraj 4: [Nazwa] - [Specjalizacja]
  - Kraj 5: [Nazwa] - [Specjalizacja]
  - [ ] Dokumenty: `05_Nations/nation_1.md` ... `nation_5.md`

**Decyzje Projektowe do Podjęcia:**
- Jakie są specjalizacje krajów? (militarna, naukowa, dyplomatyczna?)
- Czy kraje mają unikalne zdolności/bonusy?

---

### ⏳ ETAP 6: Materiały dla Arbitra i Graczy
**Status: ⏳ PLANOWANE**

**Cel:** Stworzyć kompletne materiały do przeprowadzenia gry

**Checklist:**
- [ ] **Przewodnik Arbitra**
  - Jak przygotować grę?
  - Jak prowadzić turę?
  - [ ] Dokument: `06_Guru/arbiter_guide.md`

- [ ] **System Oceny**
  - Tabele ocen dla Arbitra
  - Jak oceniać plany graczy?
  - [ ] Dokument: `06_Guru/evaluation_system.md`

- [ ] **Ogłaszanie Newsów**
  - Jak pisać reportaże?
  - Przykłady newsów
  - [ ] Dokument: `06_Guru/news_reporting.md`

- [ ] **Rulebook (Księga Zasad)**
  - Kompletne zasady dla graczy
  - Przejrzyste, przystępne
  - [ ] Dokument: `07_Player_Materials/rulebook.md`

- [ ] **Pomoce dla Graczy**
  - Karty referencyjne
  - Szablony planowania
  - Arkusze krajów
  - [ ] Dokument: `07_Player_Materials/player_aids.md`

---

### ⏳ ETAP 7: Playtesting i Iteracja
**Status: ⏳ PLANOWANE**

**Cel:** Przetestować grę, zebrać feedback, dopracować mechaniki

**Checklist:**
- [ ] **Plan Testów**
  - Kogo zaangażować?
  - Ile sesji?
  - [ ] Dokument: `08_Playtesting/test_sessions.md`

- [ ] **Sesje Testowe**
  - Sesja 1: Test mechanik podstawowych
  - Sesja 2: Test balansowania Dyscyplin
  - Sesja 3: Test interakcji między krajami
  - Sesja 4: Pełna rozgrywka

- [ ] **Zbieranie Feedbacku**
  - Co działa?
  - Co nie działa?
  - Co jest niejasne?
  - [ ] Dokument: `08_Playtesting/feedback.md`

- [ ] **Iteracja i Refinement**
  - Poprawki mechanik
  - Balansowanie
  - Uproszczenia

- [ ] **Finalna Wersja**
  - Gotowa do gry!

---

## 🔥 Bieżące Priorytety

### Ukończone:
1. ✅ Stworzyć strukturę projektu
2. ✅ Określić Win Conditions (5 ścieżek zwycięstwa)
3. ✅ Zdefiniować Pillars (5 filarów)
4. ✅ **ETAP 2 UKOŃCZONY** (Lekcja 3.1 — Audyt Mechanik)

### Teraz (ETAP 3):
1. ⏳ Mechaniki dyplomatyczne (traktaty, sojusze)
2. ⏳ System konfliktów
3. ⏳ Szpiegostwo i wywiad

### Do zrobienia później:
1. Stworzyć aplikację Koła Fortuny (HTML/JS)
2. Zaprojektować 35 kart eventowych (Twist/Discovery/Disaster)
3. Definicje 5 krajów

---

## 🎲 Kluczowe Decyzje do Podjęcia

### Wysokiego Priorytetu:
- [ ] **Win Conditions** - jaka jest ścieżka do zwycięstwa?
  - Misja na Marsa?
  - Punkty zwycięstwa?
  - Inne opcje?

- [ ] **System Oceny Arbitra** - jak dokładnie oceniane są plany graczy?
  - Tabele punktowe?
  - Subiektywna ocena?
  - Modyfikatory?

- [ ] **Czas Tury** - ile zajmuje pełna tura?
  - Planowanie: 15 min
  - Analiza Arbitra: ? min
  - Ogłoszenie: ? min

### Średniego Priorytetu:
- [ ] **System Zasobów** - jakie zasoby istnieją w grze?
- [ ] **Technologie Futurystyczne** - co dokładnie?
- [ ] **Specjalizacje Krajów** - jakie są różnice?

### Niskiego Priorytetu:
- [ ] Grafiki i wizualizacje
- [ ] Muzyka/soundtracki (jeśli potrzebne)
- [ ] Wersja digitalna?

---

## 📊 Metryki Sukcesu

Projekt uznajemy za udany, gdy:
- ✅ Wszystkie 7 etapów ukończone
- ✅ Przeprowadzono min. 4 sesje playtestingowe
- ✅ Gra jest zbalansowana i grywalna
- ✅ Rulebook jest kompletny i zrozumiały
- ✅ Materiały dla Arbitra są kompletne
- ✅ Gracze dobrze się bawią podczas gry!

---

## 🔄 Metodologia Pracy

### Zasady Współpracy:
1. **Kontekstowe dostarczanie informacji** - Maro dostarcza informacje na bieżąco, w kontekście dyskusji
2. **Iteracyjne podejście** - nie przeskakujemy etapów, budujemy solidny fundament
3. **Decyzje projektowe** - Maro podejmuje kluczowe decyzje, Claude proponuje opcje i analizuje
4. **Dokumentacja** - wszystko jest zapisywane w plikach MD
5. **Ultrathink** - głębokie przemyślenie każdego aspektu przed implementacją

---

## 📝 Historia Zmian

**2026-01-03:**
- ✅ Utworzono strukturę projektu (8 modułów)
- ✅ Stworzono README.md jako entry point
- ✅ Stworzono PLAN.md z roadmapem i checklistą
- 🔄 Rozpoczęto ETAP 1

**2026-01-07:**
- ✅ System 5 Ścieżek Zwycięstwa
- ✅ Struktura 3 Aktów
- ✅ Nowy balans startowy (2 problemy + 2 przewagi + 1 stabilna)

**2026-01-20:**
- ✅ **LEKCJA 3.1: Audyt Mechanik** — KOMPLETNY!
- ✅ Stworzono `MECHANIKI_AUDYT.md` z pełnym mapowaniem I/P/O
- ✅ 8 mechanik CORE zmapowanych
- ✅ 22 akcje dla 3 ról (Lider/Dyplomata/Generał)
- ✅ Koło Fortuny: 7 wyników, system hybrydowy (app + karty)
- ✅ Poradnik pierwszej tury dla Guru
- ✅ Decyzja: pełna transparentność Koła (gracze widzą %)
- ✅ ETAP 2 zakończony!

---

**Ostatnia aktualizacja:** 2026-01-20
**Następny krok:** ETAP 3 — System Interakcji Między Krajami
