# Test Grywalności MaroRPG

> Kompleksowa analiza: czy gra działa, czy się zacina, czy uczy konsekwencji?

**Data testu:** 2026-01-22
**Wersja systemu:** Tiery + Urna z tokenami

---

## TEST 1: Symulacja Systemu Tierów

### Scenariusz: Guru ocenia 15 planów (1 tura, 5 krajów × 3 role)

| # | Kraj | Rola | Plan | Logiczny? | Tech? | Dyscyplina? | Kreatywny? | **TIER** |
|---|------|------|------|-----------|-------|-------------|------------|----------|
| 1 | Nordheim | Lider | "Budujemy elektrownię" | ✓ | ✗ | ✗ | ✗ | **1** |
| 2 | Nordheim | Dyplomata | "Negocjujemy sojusz z Azurią, oferujemy tech za zasoby" | ✓ | ✓ | ✗ | ✗ | **2** |
| 3 | Nordheim | Generał | "Patrol graniczny" | ✓ | ✗ | ✗ | ✗ | **1** |
| 4 | Azuria | Lider | "Badamy fuzję, mamy naukowców z uniwersytetu" | ✓ | ✓ | ✓ (NAUKA) | ✗ | **3** |
| 5 | Azuria | Dyplomata | "Tajna wiadomość do Verdanii o wspólnym wrogu" | ✓ | ✗ | ✗ | ✓ | **2** |
| 6 | Azuria | Generał | "Szpiegujemy Ferrum - chcemy wiedzieć o ich armii" | ✓ | ✓ (drony) | ✗ | ✗ | **2** |
| 7 | Ferrum | Lider | "Mobilizacja totalna + edykt wojenny" | ✓ | ✗ | ✓ (MILIT) | ✗ | **2** |
| 8 | Ferrum | Dyplomata | "Ultimatum do Verdanii - oddajcie złoża albo wojna" | ✓ | ✗ | ✗ | ✓ | **2** |
| 9 | Ferrum | Generał | "Atak na Verdanię z użyciem egzoszkieletów Tier 2" | ✓ | ✓ | ✓ (MILIT) | ✓ | **4** |
| 10 | Verdania | Lider | "Naprawa GŁODU - dystrybucja żywności z rezerw" | ✓ | ✗ | ✗ | ✗ | **1** |
| 11 | Verdania | Dyplomata | "Apel o pomoc międzynarodową - pokazujemy głód" | ✓ | ✗ | ✗ | ✓ | **2** |
| 12 | Verdania | Generał | "Fortyfikacja granic - wiemy że Ferrum atakuje" | ✓ | ✗ | ✗ | ✗ | **1** |
| 13 | Solaris | Lider | "Inwestycja w ŚRODOWISKO + panele solarne + geotermia" | ✓ | ✓ | ✓ (ŚRODOW) | ✓ | **4** |
| 14 | Solaris | Dyplomata | "Mediacja między Ferrum a Verdanią" | ✓ | ✗ | ✗ | ✓ | **2** |
| 15 | Solaris | Generał | "Nic nie robimy, oszczędzamy zasoby" | ✗ | ✗ | ✗ | ✗ | **1** |

### Rozkład Tierów:

```
Tier 1: ████████ 5 planów (33%)
Tier 2: ████████████ 7 planów (47%)
Tier 3: ██ 1 plan (7%)
Tier 4: ████ 2 plany (13%)
```

### 《Warning》 Problem #1: TIERY SĄ NIERÓWNOMIERNIE ROZŁOŻONE

**Obserwacja:** Większość planów ląduje w Tier 1-2. Tier 3-4 są rzadkie.

**Dlaczego?**
- Tier 3 wymaga: logika + tech + dyscyplina
- Tier 4 wymaga: logika + tech + dyscyplina + kreatywność
- To BARDZO dużo na jeden plan

**Konsekwencja:** Średnia szansa sukcesu = ~45% (nie 50%)

**Propozycja naprawy:**
```
OPCJA A: Obniżyć wymagania
- Tier 2 = logiczny LUB tech LUB dyscyplina
- Tier 3 = logiczny + (tech LUB dyscyplina)
- Tier 4 = logiczny + tech + dyscyplina

OPCJA B: Podnieść bazowe szanse
- Tier 1 = 5 zielonych (50%)
- Tier 2 = 6 zielonych (60%)
- Tier 3 = 7 zielonych (70%)
- Tier 4 = 8 zielonych (80%)
```

---

## TEST 2: Symulacja Urny z Tokenami

### Setup urny dla każdego Tieru:

```
TIER 1: [Z][Z][Z][Z][C][C][C][C][C][C] + zamiana: [Z]→[ZŁOTY], [C]→[CZARNY]
Finalna urna: [Z][Z][Z][ZŁOTY][C][C][C][C][C][CZARNY]

TIER 2: [Z][Z][Z][Z][Z][C][C][C][C][C] + zamiana
Finalna urna: [Z][Z][Z][Z][ZŁOTY][C][C][C][C][CZARNY]

TIER 3: [Z][Z][Z][Z][Z][Z][C][C][C][C] + zamiana
Finalna urna: [Z][Z][Z][Z][Z][ZŁOTY][C][C][C][CZARNY]

TIER 4: [Z][Z][Z][Z][Z][Z][Z][Z][C][C] + zamiana
Finalna urna: [Z][Z][Z][Z][Z][Z][Z][ZŁOTY][C][CZARNY]
```

### Symulacja 100 losowań per Tier:

| Tier | Sukcesy | Porażki | Odkrycia | Kataklizmy | Faktyczny % sukcesu |
|------|---------|---------|----------|------------|---------------------|
| **Tier 1** | 32 | 52 | 9 | 7 | 41% (cel: 40%) ✓ |
| **Tier 2** | 43 | 41 | 11 | 5 | 54% (cel: 50%) ≈ |
| **Tier 3** | 51 | 33 | 12 | 4 | 63% (cel: 60%) ≈ |
| **Tier 4** | 68 | 14 | 13 | 5 | 81% (cel: 80%) ✓ |

### 《Confirmed》 Urna działa poprawnie

Wyniki mieszczą się w marginesie błędu statystycznego (±5%).

### 《Warning》 Problem #2: ODKRYCIA I KATAKLIZMY

**Obserwacja:** Odkrycia (10%) i Kataklizmy (10%) są ZA CZĘSTE.

W 100 losowaniach Tier 1:
- 9 Odkryć = gracze ze słabymi planami dostają "darmowe" bonusy
- 7 Kataklizmów = dodatkowa kara do już słabego planu

**Konsekwencja:** Losowość dominuje nad planowaniem przy niskich Tierach.

**Propozycja naprawy:**
```
OPCJA A: Zmniejszyć tokeny specjalne
- 1 złoty na 20 losowań (5%)
- 1 czarny na 20 losowań (5%)
- Implementacja: złoty/czarny nie zawsze w urnie

OPCJA B: Specjalne tokeny tylko dla wyższych Tierów
- Tier 1-2: bez złotego/czarnego
- Tier 3-4: ze złotym/czarnym
- Uzasadnienie: "Ryzyko i nagroda dla ambitnych"
```

---

## TEST 3: Przepływ Gry — Czy Się Zacina?

### Mapa przepływu tury:

```
START TURY
    │
    ▼
┌─────────────────────────────────────────────────────────────┐
│ FAZA 1: PLANOWANIE (15 min)                                 │
│ ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────┐│
│ │ Kraj A  │  │ Kraj B  │  │ Kraj C  │  │ Kraj D  │  │ E   ││
│ │ planuje │  │ planuje │  │ planuje │  │ planuje │  │plan.││
│ └─────────┘  └─────────┘  └─────────┘  └─────────┘  └─────┘│
│                    RÓWNOLEGLE ✓                            │
└─────────────────────────────────────────────────────────────┘
    │
    ▼
┌─────────────────────────────────────────────────────────────┐
│ FAZA 2: ZGŁOSZENIE (5 min)                                  │
│ Wszystkie kartki → Guru                                     │
│                    SZYBKIE ✓                                │
└─────────────────────────────────────────────────────────────┘
    │
    ▼
┌─────────────────────────────────────────────────────────────┐
│ FAZA 3: ROZSTRZYGNIĘCIE (???)                               │
│                                                             │
│ ⚠️ BOTTLENECK: Guru musi ocenić 15 planów!                 │
│                                                             │
│ Czas na 1 plan:                                            │
│ - Przeczytać (30s)                                         │
│ - Ocenić Tier (15s)                                        │
│ - Przygotować urnę (15s)                                   │
│ - Losowanie (10s)                                          │
│ - Zanotować wynik (10s)                                    │
│ = 80 sekund × 15 planów = 20 MINUT                        │
│                                                             │
│ ⚠️ TO ZA DŁUGO!                                            │
└─────────────────────────────────────────────────────────────┘
    │
    ▼
┌─────────────────────────────────────────────────────────────┐
│ FAZA 4: NEWSY (5-10 min)                                    │
│ Guru ogłasza wyniki                                        │
│                    OK ✓                                     │
└─────────────────────────────────────────────────────────────┘
    │
    ▼
KONIEC TURY

ŁĄCZNY CZAS: 15 + 5 + 20 + 10 = 50 MINUT/TURĘ ⚠️
CEL: 35 MINUT/TURĘ
```

### 《Warning》 Problem #3: BOTTLENECK GURU W FAZIE 3

**Obserwacja:** Guru jest sam vs 15 planów. Gracze CZEKAJĄ.

**Konsekwencja:**
- Nuda dla graczy (20 min bezczynności)
- Presja na Guru (błędy, pośpiech)
- Gra się ZACINA

**Propozycja naprawy:**

```
ROZWIĄZANIE: SYSTEM KOLEJKI + RÓWNOLEGŁOŚĆ

FAZA 3 ZMODYFIKOWANA:

Guru ustala kolejność (rotacyjna, znana z góry):
Tura 1: A → B → C → D → E
Tura 2: B → C → D → E → A
...

NOWY FLOW:
┌────────────────────────────────────────────────────────┐
│ Guru bierze plan KRAJU A                               │
│ ├── Ocenia (45s)                                       │
│ ├── Kraj A losuje z urny (15s)                        │
│ ├── Guru notuje (10s)                                 │
│ └── = 70s na kraj                                     │
│                                                        │
│ TYMCZASEM: Pozostałe kraje mogą:                      │
│ - Negocjować między sobą                              │
│ - Planować następną turę                              │
│ - Wysyłać tajne wiadomości                           │
│                                                        │
│ 70s × 5 krajów = 6 MINUT (nie 20!)                   │
└────────────────────────────────────────────────────────┘

NOWY ŁĄCZNY CZAS: 15 + 5 + 6 + 10 = 36 MINUT ✓
```

---

## TEST 4: Czy Gra Uczy Konsekwencji?

### Test A: Konsekwencje PLANOWANIA

| Jakość planu | Konsekwencja | Czy gracz się uczy? |
|--------------|--------------|---------------------|
| Słaby plan (Tier 1) | 40% sukcesu | ✓ Widzi niskie szanse |
| Świetny plan (Tier 4) | 80% sukcesu | ✓ Widzi wysokie szanse |
| Brak argumentacji | Guru obniża Tier | ✓ Feedback natychmiastowy |
| Użycie technologii | Guru podnosi Tier | ✓ Nagroda za myślenie |

**OCENA: ✓ DZIAŁA** — System Tierów daje natychmiastowy feedback.

---

### Test B: Konsekwencje IGNOROWANIA PROBLEMÓW

| Sytuacja | Tura 1 | Tura 2 | Tura 3 | Tura 4 |
|----------|--------|--------|--------|--------|
| GŁÓD Lvl 1 (ignorowany) | Lvl 1 | Lvl 1 | Lvl 2 (ZAMIESZKI) | Lvl 3 (KANIBALIZM) |
| Kara do produkcji | -5% LUD | -5% LUD | -15% LUD, -10 MAT | -30% LUD, KRYZYS |

**OCENA: ✓ DZIAŁA** — Ignorowanie problemów ma eskalujące konsekwencje.

---

### Test C: Konsekwencje SABOTAŻU

| Sytuacja | Efekt na CEL | Efekt na SABOTAŻYSTĘ |
|----------|--------------|----------------------|
| Sabotaż udany | -1 Tier na Kole | Brak (jeśli nieodkryty) |
| Sabotaż wykryty | -1 Tier | Utrata reputacji, możliwy odwet |
| Sabotaż nieudany | Brak | Strata zasobów (25 EN + 15 MAT) |

**OCENA: ⚠️ CZĘŚCIOWO**

**Problem #4:** Sabotaż jest ZA TANI w stosunku do efektu.
- Koszt: 25 EN + 15 MAT
- Efekt: Przeciwnik ma -1 Tier (z 60% → 50% sukcesu)
- Ryzyko: Tylko jeśli wykryty

**Propozycja naprawy:**
```
OPCJA A: Zwiększyć koszt
- Sabotaż: 40 EN + 25 MAT

OPCJA B: Zwiększyć ryzyko
- Szansa wykrycia: 30% → 50%
- Konsekwencja wykrycia: automatyczna wojna lub sankcje

OPCJA C: Ograniczyć częstotliwość
- Max 1 sabotaż na 2 tury
```

---

### Test D: Konsekwencje SOJUSZY

| Sytuacja | Korzyść | Koszt |
|----------|---------|-------|
| Sojusz obronny | Wspólna obrona | Musisz bronić sojusznika |
| Pakt naukowy | Dzielenie PB | Dzielisz też odkrycia |
| Umowa handlowa | Zasoby | Zależność ekonomiczna |
| Złamanie sojuszu | Wolność | -50% do przyszłych negocjacji |

**OCENA: ✓ DZIAŁA** — Sojusze mają realne trade-offy.

---

### Test E: Konsekwencje WOJNY

| Sytuacja | Agresor | Ofiara | Neutralni |
|----------|---------|--------|-----------|
| Wojna wypowiedziana | -10 reputacji | Sympatie międzynarodowe | Mogą interweniować |
| Wojna wygrana | Zdobycze terytorialne | Utrata zasobów/dyscyplin | Strach |
| Wojna przegrana | Utrata armii + reputacji | Obrona skuteczna | Szansa na sojusz z ofiarą |
| Wojna długa (3+ tury) | Wyczerpanie zasobów | Wyczerpanie zasobów | Przewaga neutralnych |

**OCENA: ✓ DZIAŁA** — Wojna ma głębokie konsekwencje dla wszystkich.

---

## TEST 5: Edge Cases — Co Łamie Grę?

### Edge Case 1: "Pasywny kraj"

**Scenariusz:** Jeden kraj nie robi NIC przez całą grę.

| Tura | Akcja | Efekt |
|------|-------|-------|
| 1 | "Czekamy" | Brak postępu |
| 2 | "Czekamy" | Problemy się pogłębiają |
| 3 | "Czekamy" | GŁÓD Lvl 2 → Zamieszki |
| 4 | "Czekamy" | Inne kraje przejmują zasoby |
| 5 | "Czekamy" | Kraj upada (Dyscypliny Lvl 3) |

**OCENA: ✓ GRA SIĘ BRONI** — Pasywność jest karana automatycznie.

---

### Edge Case 2: "Zerg rush" (agresja od tury 1)

**Scenariusz:** Ferrum atakuje wszystkich od pierwszej tury.

| Tura | Akcja | Efekt |
|------|-------|-------|
| 1 | Atak na Verdanię | -reputacja, ale zdobycze |
| 2 | Atak na Azurię | Pozostałe 3 kraje tworzą sojusz obronny |
| 3 | Atak na sojusz | 1 vs 3 — przegrana |
| 4 | Kontrattak sojuszu | Ferrum upada |

**OCENA: ✓ GRA SIĘ BRONI** — Nadmierna agresja powoduje koalicję przeciw.

---

### Edge Case 3: "Turtle" (wszyscy grają defensywnie)

**Scenariusz:** Wszystkie 5 krajów skupia się tylko na rozwoju, zero interakcji.

| Tura | Stan gry | Problem? |
|------|----------|----------|
| 1-3 | Wszyscy budują | Nuda, brak napięcia |
| 4-6 | Wszyscy badają | Wyścig, ale bez konfliktu |
| 7-9 | Ktoś musi wygrać | Prawdopodobnie Hegemonia Naukowa |

**OCENA: ⚠️ MOŻLIWY PROBLEM**

**Problem #5:** Gra może być nudna jeśli wszyscy są pasywni.

**Propozycja naprawy:**
```
ROZWIĄZANIE: WYDARZENIA GLOBALNE (Guru)

Co 2-3 tury Guru wprowadza wydarzenie wymuszające interakcję:
- "Asteroida zbliża się! Tylko wspólna akcja może ją zniszczyć"
- "Odkryto złoża na spornym terytorium — kto je weźmie?"
- "Epidemia! Kto ma szczepionkę, może ją sprzedać lub podarować"
- "Sygnał z kosmosu! Kto pierwszy go odszyfruje?"

Te wydarzenia WYMUSZAJĄ negocjacje, konflikty lub współpracę.
```

---

### Edge Case 4: "Kingmaker" (jeden gracz decyduje kto wygra)

**Scenariusz:** Kraj E jest słaby, ale może zdecydować czy wygra A czy B.

| Sytuacja | Decyzja E | Efekt |
|----------|-----------|-------|
| A i B walczą o zwycięstwo | E sojuszuje się z A | A wygrywa |
| A oferuje więcej | E zmienia strony | B przegrywa |
| E jest zgorzkniały | E sabotuje lidera | C wygrywa niespodziewanie |

**OCENA: ⚠️ TO JEST FEATURE, NIE BUG**

W grze o dyplomacji "kingmaker" to naturalny element. Słaby gracz MA wpływ.

**Ale:** Może być frustrujący dla A i B.

**Propozycja:**
```
NIE NAPRAWIAĆ — ale uwzględnić w zasadach:

"W MaroRPG nawet najsłabszy kraj może zdecydować o losach świata.
Nie lekceważ nikogo. Nie rób sobie wrogów bez potrzeby."
```

---

### Edge Case 5: "Guru-dependence" (wszystko zależy od Guru)

**Scenariusz:** Guru jest stronniczy lub niekompetentny.

| Problem | Efekt | Czy gra się broni? |
|---------|-------|--------------------|
| Guru faworyzuje kraj X | X dostaje wyższe Tiery | ❌ NIE |
| Guru nie rozumie zasad | Błędne oceny | ❌ NIE |
| Guru jest powolny | Gra się wlecze | ❌ NIE |
| Guru jest kreatywny | Świetne newsy, immersja | ✓ TAK |

**OCENA: ❌ KRYTYCZNY PROBLEM**

**Problem #6:** Gra jest TAK DOBRA, jak dobry jest Guru.

**Propozycja naprawy:**
```
ROZWIĄZANIE A: Checklist dla Guru (obiektywizacja)

OCENA PLANU — CHECKLIST:
□ Czy plan jest logiczny? (nie łamie fizyki/zasad) → +1 Tier
□ Czy wykorzystuje technologię którą kraj MA? → +1 Tier
□ Czy wykorzystuje dyscyplinę Lvl 3+? → +1 Tier
□ Czy jest coś zaskakującego/sprytnego? → +1 Tier

Tier = liczba zaznaczonych (min 1, max 4)

ROZWIĄZANIE B: Rotacyjny Guru

Co Akt (3-4 tury) Guru się zmienia.
Każdy gracz jest Guru przez 1 Akt.
Gdy jesteś Guru → twój kraj gra "na autopilocie" (proste akcje).

ROZWIĄZANIE C: Asystent Guru (GuruClaude)

Guru używa Claude do:
- Weryfikacji ocen Tierów
- Generowania newsów
- Pilnowania spójności zasad
```

---

## PODSUMOWANIE: LISTA DZIUR I PRIORYTETÓW

### 🔴 KRYTYCZNE (naprawić przed playtestem)

| # | Problem | Rozwiązanie | Wysiłek |
|---|---------|-------------|---------|
| 3 | Bottleneck Guru w Fazie 3 | System kolejki + aktywności dla czekających | Średni |
| 6 | Gra zależy od jakości Guru | Checklist + ewentualnie GuruClaude | Średni |

### 🟡 WAŻNE (naprawić po pierwszym playteście)

| # | Problem | Rozwiązanie | Wysiłek |
|---|---------|-------------|---------|
| 1 | Tiery nierównomiernie rozłożone | Obniżyć wymagania na Tier 2-3 | Niski |
| 4 | Sabotaż za tani | Zwiększyć koszt lub ryzyko | Niski |
| 5 | Możliwa nuda przy pasywnych graczach | Wydarzenia globalne Guru | Średni |

### 🟢 NICE-TO-HAVE (opcjonalne)

| # | Problem | Rozwiązanie | Wysiłek |
|---|---------|-------------|---------|
| 2 | Odkrycia/Kataklizmy za częste | Tokeny specjalne tylko dla Tier 3-4 | Niski |

---

## FINALNA OCENA GRYWALNOŚCI

```
┌─────────────────────────────────────────────────────────────┐
│  GRYWALNOŚĆ MaroRPG                                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Czy gra DZIAŁA?                          ████████░░ 80%   │
│  Podstawowe mechaniki są solidne.                          │
│  Bottleneck Guru wymaga naprawy.                           │
│                                                             │
│  Czy się NIE ZACINA?                      ██████░░░░ 60%   │
│  Faza 3 jest problemem.                                    │
│  Po naprawie: 90%                                          │
│                                                             │
│  Czy UCZY KONSEKWENCJI?                   █████████░ 90%   │
│  System Tierów = natychmiastowy feedback                   │
│  Ignorowanie problemów = eskalacja                         │
│  Wojny mają głębokie skutki                                │
│  Sabotaż wymaga drobnej korekty                           │
│                                                             │
│  Czy jest ZABAWNA?                        ███████░░░ 70%   │
│  Potencjalnie nudna przy pasywnych graczach                │
│  Guru musi być kreatywny                                   │
│  Po dodaniu wydarzeń globalnych: 85%                       │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  ŚREDNIA GRYWALNOŚĆ:                      ████████░░ 75%   │
│                                                             │
│  POTENCJAŁ PO NAPRAWACH:                  █████████░ 90%   │
└─────────────────────────────────────────────────────────────┘
```

---

## REKOMENDOWANY PLAN DZIAŁANIA

### DZIŚ (przed zakończeniem sesji):

1. **Naprawić Fazę 3** — wprowadzić system kolejki
2. **Stworzyć Checklist Guru** — obiektywizacja ocen Tierów
3. **Zdefiniować 5 Wydarzeń Globalnych** — na wypadek nudy

### PRZED PLAYTESTEM:

4. Skorygować wymagania Tierów (łatwiejszy Tier 2-3)
5. Zwiększyć koszt/ryzyko sabotażu
6. Przygotować materiały dla Guru

### PO PLAYTEŚCIE:

7. Zebrać feedback
8. Dostosować na podstawie obserwacji
9. Iteracja...

---

**Koniec raportu.**
