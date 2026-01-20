# 🔍 AUDYT MECHANIK — MaroRPG

## 📐 Status

**🔄 DOKUMENT W TOKU — Lekcja 3.1**

Audyt Input/Process/Output dla wszystkich mechanik gry.

**Ostatnia aktualizacja:** 2026-01-20

---

## 📋 LISTA MECHANIK (Zatwierdzona)

### CORE (używane co turę) — 8 mechanik

| # | Mechanika | Status I/P/O | Kompletność |
|---|-----------|--------------|-------------|
| 1 | Struktura tury (4 fazy) | ✅ Zmapowana | ✅ Kompletna |
| 2 | Planowanie akcji | ✅ Zmapowana | ✅ Kompletna (z listą akcji) |
| 3 | Ocena Arbitra (1-3 punkty) | ✅ Zmapowana | ✅ Kompletna |
| 4 | Koło Fortuny | ✅ Zmapowana | ✅ Kompletna (system hybrydowy) |
| 5 | Produkcja zasobów (MAT/EN/PB/LUD) | ✅ Zmapowana | ✅ Kompletna (resources.md) |
| 6 | System Dyscyplin (Lvl 1-4) | ✅ Zmapowana | ✅ Kompletna (disciplines.md) |
| 7 | System Punktów Postępu | ✅ Zmapowana | ✅ Kompletna |
| 8 | Edykt Lidera | ✅ Zmapowana | ✅ Kompletna (7 typów) |

### POMOCNICZE (używane często) — 7 mechanik

| # | Mechanika | Status I/P/O |
|---|-----------|--------------|
| 9 | Budowa infrastruktury | ⏳ |
| 10 | Badanie technologii | ⏳ |
| 11 | Naprawa dyscyplin | ⏳ |
| 12 | Rozwój dyscyplin (Prestiż) | ⏳ |
| 13 | Dyplomacja/Traktaty | ⏳ |
| 14 | Handel | ⏳ |
| 15 | Role (Lider/Dyplomata/Generał) | ⏳ |

### OPCJONALNE (używane rzadko) — 4 mechaniki

| # | Mechanika | Status I/P/O |
|---|-----------|--------------|
| 16 | Konflikt/Wojna | ⏳ |
| 17 | Wywiad/Szpiegostwo | ⏳ |
| 18 | Sabotaż | ⏳ |
| 19 | Sezonowe modyfikatory | ⏳ |

---

## 🎯 MAPOWANIE I/P/O — MECHANIKI CORE

---

### 1. STRUKTURA TURY (4 fazy)

#### 📍 TURA 0 — Pierwsza tura w grze (INAUGURACJA)

**INPUT:**
- Guru przygotowuje materiały startowe
- Gracze przydzieleni do krajów i ról
- Arkusze krajów z wartościami początkowymi

**PROCES:**
```
FAZA 0: INAUGURACJA (20-30 min)
├── Guru przedstawia świat (setting, era, napięcia globalne)
├── Guru opisuje każdą frakcję (powierzchowne info — wiedza ogólna)
│   ├── Nazwa kraju, położenie geograficzne
│   ├── Charakterystyka (militarny/naukowy/handlowy/etc.)
│   ├── Znane problemy i przewagi (publiczne)
│   └── Relacje z innymi krajami (historia, konflikty, sojusze)
├── Gracze otrzymują szczegółowe arkusze swoich krajów (tajne)
├── Guru nadaje ton rozgrywce (dramatyczny, komediowy, realistyczny)
└── Przejście do normalnej Fazy 1: Planowanie
```

**OUTPUT:**
- Gracze rozumieją świat i kontekst
- Każdy kraj zna swoje sekrety (pełne arkusze)
- Każdy kraj zna innych powierzchownie (wiedza ogólna)
- Atmosfera i ton rozgrywki ustalone

---

#### 📍 TURA 1+ — Każda kolejna tura

**INPUT:**
- Guru ogłasza nowy sezon (Wiosna/Lato/Jesień/Zima)
- **WYDARZENIA GLOBALNE** — skutki poprzedniej tury:
  - Zanieczyszczenie dotykające wiele krajów
  - Kryzysy międzynarodowe
  - Zmiany geopolityczne
  - Plotki i wieści (informacje częściowe)
- Produkcja zasobów (automatyczna, patrz mechanika #5)

**PROCES:**
```
FAZA 1: PLANOWANIE (15 min)
├── Grupy dyskutują (Lider + Dyplomata + Generał)
├── Każda rola wybiera SWOJĄ akcję (3 akcje na kraj)
├── Mechanika głosowania (jeśli konflikt w grupie)
└── Wypełnienie szablonu planowania

FAZA 2: ZGŁOSZENIE (5 min)
├── Kartki oddawane Arbitrowi (poufnie)
└── Guru zbiera wszystkie plany

FAZA 3: ROZSTRZYGNIĘCIE (10-20 min)
├── Guru ocenia jakość planów
├── Guru ustala kolejność rozstrzygania
├── Dla każdej akcji:
│   ├── Weryfikacja planu
│   ├── Ustawienie Koła Fortuny (pola sukcesu)
│   ├── Grupa kręci Kołem
│   └── Guru interpretuje wynik jako wydarzenie
└── Guru notuje wszystkie zmiany

FAZA 4: NEWSY (5-10 min)
├── Guru ogłasza publicznie wyniki (reportaż)
├── Akcje jawne — opisane szczegółowo
├── Akcje tajne — NIE ogłaszane (lub mgliście)
└── Gracze aktualizują arkusze
```

**OUTPUT:**
- Świat się zmienia (zasoby, dyscypliny, punkty)
- Gracze znają wyniki (publiczne i swoje tajne)
- Relacje między krajami ewoluują
- Przejście do następnej tury

**STATUS:** ✅ Kompletna

---

### 2. PLANOWANIE AKCJI

**INPUT:**
- Każda ROLA ma **1 akcję na turę** (3 akcje na kraj!)
- Każda rola ma **INNY zestaw możliwych akcji** (nie dublują się)
- **Mechanika GŁOSOWANIA:**
  - Doradcy (Dyplomata, Generał) potrzebują zgody Lidera na swoją akcję
  - ALE: mogą przegłosować Lidera jeśli **OBAJ** się zgodzą (2 vs 1)
  - Lider może zawetować, ale ryzykuje bunt doradców

**PROCES:**
- 15 minut na dyskusję grupową
- **Wypełnienie szablonu — KLUCZOWE:**
  - **CO** chcą zrobić (wybór akcji z listy)
  - **JAK** — argumentacja:
    - Jakie technologie wykorzystują?
    - Jakie zasoby angażują?
    - Jaka logika stoi za planem?
  - Im więcej **sensownych argumentów** → więcej pól sukcesu na Kole Fortuny
- Oddanie kartki Arbitrowi (poufnie)

**OUTPUT:**
- Guru weryfikuje plan (sensowność, koszty, możliwość)
- Guru wraca do grupy z Kołem Fortuny (ustawionym według jakości planu)
- Grupa kręci Kołem
- Guru interpretuje wynik jako **WYDARZENIE** (finalny efekt akcji)

**STATUS:** 🟨 Niekompletna

**PROBLEMY:**
1. ❓ **Decyzja do podjęcia:** Czy gracze widzą ile pól sukcesu mają na Kole?
   - *Opcja A:* Tak — pełna informacja, gracze wiedzą jak dobrze przygotowali plan
   - *Opcja B:* Nie — tajemnica, napięcie, zaskoczenie
   - *Opcja C:* Częściowo — "Wasz plan jest solidny/słaby" bez liczb

---

## 🎭 AKCJE DLA KAŻDEJ ROLI

### 👑 LIDER — Strategia i rozwój kraju

*Lider decyduje o kierunku rozwoju kraju. Jego akcje dotyczą wielkich projektów i długoterminowej wizji.*

| # | Akcja | Opis | Koszt bazowy |
|---|-------|------|--------------|
| L1 | **Edykt Lidera** | Specjalna proklamacja z mocnym efektem (1× na 3 tury) | Zależny od edyktu |
| L2 | **Budowa infrastruktury** | Elektrownie, uniwersytety, kopalnie, fabryki | MAT + LUD + EN |
| L3 | **Badanie technologii** | Rozwój nowej technologii (Tier 1-4) | PB + EN |
| L4 | **Inwestycja w dyscyplinę** | Rozwój pozytywnej dyscypliny (Prestiż → Lvl up) | MAT + EN + PB |
| L5 | **Naprawa dyscypliny** | Rozwiązywanie problemu (negatywna dyscyplina) | MAT + EN (+ czas) |
| L6 | **Zmiana ścieżki zwycięstwa** | Przeorientowanie priorytetów kraju | Brak kosztu, ale reset postępu |
| L7 | **Przemówienie do narodu** | Oficjalne przemówienie budujące morale (+1 Lvl SPOŁECZEŃSTWO na 2 tury LUB +10% Koło Fortuny następna tura) | Brak (1× na 2 tury) |

---

### 🤝 DYPLOMATA — Relacje i wpływy międzynarodowe

*Dyplomata buduje relacje z innymi krajami. Jego akcje dotyczą negocjacji, handlu i soft power.*

| # | Akcja | Opis | Koszt bazowy |
|---|-------|------|--------------|
| D1 | **Negocjuj traktat** | Sojusz obronny, pakt naukowy, umowa handlowa (handel jest CZĘŚCIĄ tej akcji) | Zależny od traktatu |
| D2 | **Wywiad dyplomatyczny** | Legalne zbieranie informacji (ambasady, rozmowy) | 10 EN |
| D3 | **Propaganda** | Wpływ na opinię międzynarodową o swoim kraju | 15 MAT + 10 EN |
| D4 | **Sabotaż dyplomatyczny** | Osłabienie relacji między innymi krajami | 20 EN + ryzyko |
| D5 | **Mediacja** | Rozwiązywanie konfliktów między innymi krajami | 10 PB |
| D6 | **Apel do społeczności** | Prośba o pomoc międzynarodową (przy kryzysie) | Prestiż kraju |
| D7 | **Wizyta dyplomatyczna** | Dyplomata odwiedza inny kraj przez Guru — prywatna rozmowa o współpracy, handlu, sojuszach | Brak (Guru aranżuje) |

#### 📨 Tajna wiadomość (DARMOWA, limitowana)

*Każdy Dyplomata może wysłać 1 krótką tajną wiadomość per tura — BEZ kosztu akcji.*

| Zasada | Opis |
|--------|------|
| **Limit** | Max 2-3 zdania per tura |
| **Kanał** | Przez Guru — Dyplomata daje karteczkę Guru, Guru przekazuje odbiorcy |
| **Anonimowość** | Nadawca decyduje: podpisana lub anonimowa |
| **Koszt** | DARMOWE (nie kosztuje akcji) |
| **Dłuższa wiadomość?** | Jeśli chcesz więcej niż 2-3 zdania → kosztuje pełną akcję |

---

### ⚔️ GENERAŁ — Armia i bezpieczeństwo

*Generał odpowiada za siłę militarną kraju. Jego akcje dotyczą armii, obrony i operacji tajnych.*

| # | Akcja | Opis | Koszt bazowy |
|---|-------|------|--------------|
| G1 | **Rekrutacja wojsk** | Zwiększenie armii (żołnierze, drony, pojazdy) | MAT + LUD (na stałe) |
| G2 | **Operacja militarna** | Atak na inny kraj lub obrona sojusznika | EN + MAT + armia |
| G3 | **Szpiegostwo** | Tajny wywiad — infiltracja, podsłuchy | 20 EN + ryzyko wykrycia |
| G4 | **Sabotaż** | Niszczenie infrastruktury lub dyscyplin wroga | 25 EN + 15 MAT + ryzyko |
| G5 | **Fortyfikacja** | Wzmocnienie obrony kraju (bunkry, tarcze) | 30 MAT + 20 EN |
| G6 | **Produkcja sprzętu** | Budowa broni, dronów, egzoszkieletów | MAT + EN + tech |
| G7 | **Patrol graniczny** | Wykrywanie obcych szpiegów i sabotażystów | 10 EN/turę |
| G8 | **Przetarg na sprzęt** | Ogłoszenie zapotrzebowania na sprzęt wojskowy — CO potrzebujesz i CO oferujesz w zamian (prywatny lub publiczny) | Brak (negocjowane) |

---

## 🎬 PORADNIK PIERWSZEJ TURY DLA GURU

### Przed sesją (przygotowanie)

```
CHECKLIST GURU:
□ Przygotuj opis świata (1-2 strony lub notatki)
□ Przygotuj opisy 5 krajów (publiczne info)
□ Przygotuj szczegółowe arkusze krajów (tajne)
□ Przygotuj Koło Fortuny (fizyczne lub aplikacja)
□ Przygotuj szablony planowania (kartki dla graczy)
□ Przygotuj arkusz Guru (śledzenie zasobów, wydarzeń)
□ Zdecyduj o tonie rozgrywki (poważny/lekki)
```

### FAZA 0: Inauguracja — Jak poprowadzić fabularnie

#### 1. Powitanie i wprowadzenie (5 min)

```
PRZYKŁADOWY TEKST:

"Witajcie w MaroRPG. Za chwilę wcielicie się w przywódców
najpotężniejszych nacji na Ziemi roku 2087.

Świat, który znacie, przeszedł przez Wielki Kryzys Klimatyczny.
Stare mocarstwa upadły. Nowe powstały z popiołów.
Teraz pięć frakcji walczy o przyszłość ludzkości.

Niektórzy chcą podboju. Inni — współpracy.
Są tacy, którzy marzą o gwiazdach.
I tacy, którzy chcą tylko przetrwać.

Jaką drogę wybierze wasz kraj?"
```

#### 2. Prezentacja świata (5-10 min)

```
STRUKTURA OPISU ŚWIATA:

1. ERA I SETTING
   "Rok 2087. Pięćdziesiąt lat po Wielkim Kryzysie..."

2. STAN ZIEMI
   "Klimat się ustabilizował, ale blizny pozostały..."
   "Technologia skoczyła naprzód — fuzja, AI, genetyka..."

3. GEOPOLITYKA
   "Dawne granice przestały mieć znaczenie..."
   "Pięć mocarstw kontroluje większość zasobów..."

4. NAPIĘCIA GLOBALNE
   "Wyścig o Marsa trwa. Kto pierwszy założy kolonię?"
   "Zasoby energetyczne kurczą się. Wojny o wodę już były..."

5. NADCHODZĄCE ZAGROŻENIE (opcjonalne)
   "Astronomowie wykryli coś na obrzeżach układu..."
   "Pierwsze oznaki nowej pandemii pojawiły się w Azji..."
```

#### 3. Prezentacja frakcji (10-15 min)

*Dla każdej frakcji przedstaw PUBLICZNIE (wszyscy słyszą):*

```
SZABLON PREZENTACJI FRAKCJI:

🏛️ [NAZWA KRAJU]
"[Motto lub hasło przewodnie]"

📍 Położenie: [region geograficzny]
👥 Ludność: [przybliżona liczba — duża/średnia/mała]
🎯 Charakterystyka: [1-2 zdania — czym słyną]

💪 Znane przewagi:
• [Przewaga 1 — publiczna wiedza]
• [Przewaga 2 — publiczna wiedza]

⚠️ Znane problemy:
• [Problem 1 — publiczna wiedza]

🤝 Relacje:
• Sojusznik: [kraj]
• Rywal: [kraj]
• Neutralny: [kraje]

---
PRZYKŁAD:

🏛️ FEDERACJA PÓŁNOCY
"Wiedza jest mocą"

📍 Położenie: Skandynawia i północna Europa
👥 Ludność: Średnia (stabilna)
🎯 Charakterystyka: Technologiczny gigant, lider w badaniach AI i fuzji

💪 Znane przewagi:
• Zaawansowana nauka (najlepsze uniwersytety świata)
• Czysta energia (sieci reaktorów fuzyjnych)

⚠️ Znane problemy:
• Starzejące się społeczeństwo (niski przyrost naturalny)

🤝 Relacje:
• Sojusznik: Konfederacja Centralna (pakt naukowy)
• Rywal: Liga Południowa (spór o patenty)
• Neutralny: Imperium Wschodu, Republika Zachodnia
```

#### 4. Rozdanie tajnych arkuszy (5 min)

```
GURU MÓWI:

"Teraz każdy kraj otrzyma swój tajny arkusz.
Znajdziecie tam PEŁNE informacje o waszej frakcji:
- Dokładne poziomy wszystkich Dyscyplin
- Ukryte technologie i sekrety
- Prawdziwy stan zasobów
- Tajne cele i możliwości

Te informacje są TYLKO dla was.
Inni gracze znają tylko to, co właśnie usłyszeli publicznie.

Macie 5 minut na zapoznanie się z arkuszem.
Potem zaczynamy pierwszą turę."
```

#### 5. Przejście do normalnej gry

```
GURU MÓWI:

"Nadchodzi Wiosna, Rok 1.

[Opcjonalnie: krótkie wydarzenie startowe]
'Wiadomość z orbity: teleskop Hubble-7 wykrył anomalię
w pasie asteroid. Naukowcy spekulują o możliwych zasobach...'

Macie 15 minut na zaplanowanie pierwszych działań waszego kraju.
Pamiętajcie:
- Lider wybiera JEDNĄ akcję
- Dyplomata wybiera JEDNĄ akcję
- Generał wybiera JEDNĄ akcję

Zapiszcie na kartce CO robicie i JAK to realizujecie.
Im lepiej uargumentujecie — tym większe szanse sukcesu.

Czas start!"
```

---

### Wskazówki dla Guru — Pierwsza tura

```
✅ DO:
• Bądź cierpliwy — gracze uczą się systemu
• Odpowiadaj na pytania o zasady
• Zachęcaj do kreatywnych planów
• Dawaj feedback po pierwszej turze ("To był świetny plan, bo...")

❌ DON'T:
• Nie karz zbyt surowo za błędy w pierwszej turze
• Nie ujawniaj tajnych informacji innych krajów
• Nie faworyzuj żadnej frakcji
• Nie przerywaj dyskusji grupowych
```

---

## 📊 MECHANIKI CORE 3-8 (Zmapowane)

---

### 3. OCENA ARBITRA (1-3 punkty)

**INPUT:**
- Kartka z planem od grupy (CO + JAK)
- Stan kraju (zasoby, dyscypliny, technologie)
- Kontekst świata (wydarzenia globalne)

**PROCES:**
Guru czyta plan i ocenia:
- Czy wykorzystano dostępne technologie?
- Czy argumentacja jest logiczna i spójna?
- Czy zasoby są wystarczające?
- Czy plan wykorzystuje silne strony kraju?
- Czy plan adresuje problemy kraju?

**OUTPUT:**
| Ocena | Jakość planu | Bazowe % sukcesu na Kole |
|-------|--------------|--------------------------|
| 1 pkt | Słaby/podstawowy | 40% |
| 2 pkt | Solidny/dobry | 60% |
| 3 pkt | Świetny/genialny | 80% |

**STATUS:** ✅ Kompletna

---

### 4. KOŁO FORTUNY

**INPUT:**
- Ocena planu (1-3 punkty) → modyfikator bazowy
- Modyfikatory z dyscyplin
- Modyfikatory z technologii
- Modyfikatory z sojuszy/relacji
- Sabotaż innych krajów (kara dla celu)

---

#### 🧮 ALGORYTM OBLICZANIA WYNIKU

**KROK 1: Oblicz SUMĘ MODYFIKATORÓW**

```
MODYFIKATOR KOŃCOWY = Bazowy (plan) + Dyscypliny + Technologie + Sojusze + Sabotaż
```

**Źródła modyfikatorów:**

| Źródło | Wartość | Przykład |
|--------|---------|----------|
| **PLAN (ocena Arbitra)** | | |
| Plan słaby (1 pkt) | -10 | Brak argumentacji |
| Plan dobry (2 pkt) | +0 | Solidna argumentacja |
| Plan świetny (3 pkt) | +15 | Genialna strategia |
| **DYSCYPLINY POZYTYWNE** | | |
| Lvl 1 | +5 | Podstawowa przewaga |
| Lvl 2 | +10 | Solidna przewaga |
| Lvl 3 | +15 | Silna przewaga |
| Lvl 4 | +20 | Dominacja |
| **DYSCYPLINY NEGATYWNE** | | |
| Lvl 1 (problem) | -5 | Drobny problem |
| Lvl 2 (kryzys) | -10 | Poważny kryzys |
| Lvl 3 (katastrofa) | -20 | Katastrofa |
| **TECHNOLOGIE** | | |
| Tech Tier 1 użyta | +5 | Podstawowa tech |
| Tech Tier 2 użyta | +10 | Zaawansowana tech |
| Tech Tier 3 użyta | +15 | Futurystyczna tech |
| **SOJUSZE** | | |
| Sojusznik pomaga | +5 do +10 | Wsparcie dyplomatyczne |
| Wróg sabotuje | -5 do -15 | Sabotaż |
| **INNE** | | |
| Morale wysokie | +5 | Społeczeństwo zadowolone |
| Morale niskie | -5 | Społeczeństwo niezadowolone |

**KROK 2: Kręć Kołem (aplikacja generuje wynik 1-100)**

**KROK 3: Dodaj modyfikator do wyniku**

```
WYNIK KOŃCOWY = Wynik Koła (1-100) + MODYFIKATOR KOŃCOWY
```

**KROK 4: Sprawdź tabelę wyników**

| Wynik końcowy | Rezultat | Opis |
|---------------|----------|------|
| ≤10 | 🟣 **KATAKLIZM** | Katastrofa! Poważne skutki. Guru ciągnie kartę DISASTER |
| 11-25 | ⚫ **KRYTYCZNA PORAŻKA** | Porażka + dodatkowe konsekwencje negatywne |
| 26-45 | 🔴 **PORAŻKA** | Akcja nie udaje się |
| 46-55 | ⬜ **RANDOM** | Losowe wydarzenie. Guru ciągnie kartę TWIST |
| 56-80 | 🟢 **SUKCES** | Akcja udaje się zgodnie z planem |
| 81-95 | 🟡 **KRYTYCZNY SUKCES** | Sukces + bonus! Lepiej niż planowano |
| ≥96 | 🔵 **ODKRYCIE** | Przełom naukowy! Guru ciągnie kartę DISCOVERY |

---

#### 📊 PRZYKŁADY OBLICZEŃ

**Przykład 1: Dobry plan, kraj w dobrej formie**
```
Kręcenie Koła:           52
+ Plan świetny:      +15
+ NAUKA Lvl 2:       +10
+ Tech Tier 2:       +10
- GŁÓD Lvl 1:        -5
─────────────────────────
WYNIK KOŃCOWY:       82 → 🟡 KRYTYCZNY SUKCES!
```

**Przykład 2: Słaby plan, kraj w kryzysie**
```
Kręcenie Koła:           45
+ Plan słaby:        -10
- SPOŁECZ. Lvl 2:    -10
- Sabotaż wroga:     -10
─────────────────────────
WYNIK KOŃCOWY:       15 → ⚫ KRYTYCZNA PORAŻKA
```

**Przykład 3: Średni plan, neutralny**
```
Kręcenie Koła:           60
+ Plan dobry:        +0
+ MILITARIA Lvl 1:   +5
─────────────────────────
WYNIK KOŃCOWY:       65 → 🟢 SUKCES
```

---

#### 🎯 ZASADY STACKOWANIA MODYFIKATORÓW

1. **Dyscypliny:** Liczy się TYLKO ta dyscyplina, która jest RELEWANTNA dla akcji
   - Akcja militarna → liczy się MILITARIA
   - Badanie technologii → liczy się NAUKA
   - Negocjacje → liczy się SPOŁECZEŃSTWO

2. **Technologie:** Max +15 (nawet jeśli użyjesz wielu technologii)

3. **Sojusze/Sabotaż:** Sumują się (można mieć +10 od sojusznika i -15 od sabotażu = -5 netto)

4. **Limity:**
   - Minimalny wynik końcowy: 1 (zawsze jest szansa na Kataklizm)
   - Maksymalny wynik końcowy: 120 (zawsze jest szansa na Odkrycie przy świetnym rzucie)

---

**OUTPUT:**
- Wynik Koła → Guru interpretuje jako wydarzenie fabularne
- Efekt mechaniczny (zasoby, dyscypliny, punkty postępu)
- Ewentualna karta eventowa (dla Kataklizm/Random/Odkrycie)

**STATUS:** ✅ Kompletna

---

#### 🎰 REALIZACJA KOŁA FORTUNY — System Hybrydowy

**CZĘŚĆ 1: APLIKACJA (na telefonie/tablecie Guru)**

```
┌─────────────────────────────────────────────────┐
│  📱 MARORPG WHEEL APP                           │
├─────────────────────────────────────────────────┤
│                                                 │
│  KROK 1: Guru wpisuje modyfikatory             │
│  ┌─────────────────────────────────────────┐   │
│  │ PLAN (ocena):                           │   │
│  │   ○ Słaby (-10)  ● Dobry (+0)  ○ Świetny (+15) │
│  │                                         │   │
│  │ DYSCYPLINA (relewantna):                │   │
│  │   [NAUKA ▼] Lvl: [2 ▼]         = +10   │   │
│  │                                         │   │
│  │ TECHNOLOGIA użyta:              = +10   │   │
│  │   [Tier 2 ▼]                            │   │
│  │                                         │   │
│  │ PROBLEMY (negatywne dyscypliny):        │   │
│  │   [GŁÓD ▼] Lvl: [1 ▼]          = -5    │   │
│  │                                         │   │
│  │ SABOTAŻ/SOJUSZ:                 = +0    │   │
│  │   [Brak ▼]                              │   │
│  │ ════════════════════════════════════    │   │
│  │ SUMA MODYFIKATORÓW:             = +15   │   │
│  └─────────────────────────────────────────┘   │
│                                                 │
│  KROK 2: Kręcenie Koła + animacja              │
│         ╭─────────────────────────╮             │
│        ╱                           ╲            │
│       │      🎲  [72]  🎲          │           │
│       │                             │           │
│       │      + 15 = 87              │           │
│        ╲                           ╱            │
│         ╰─────────────────────────╯             │
│                                                 │
│  KROK 3: Wynik końcowy                         │
│  ┌─────────────────────────────────────────┐   │
│  │         🟡 KRYTYCZNY SUKCES! 🟡         │   │
│  │              (wynik: 87)                │   │
│  └─────────────────────────────────────────┘   │
│                                                 │
│           [ 🎲 KRĘĆ PONOWNIE ]                 │
│                                                 │
└─────────────────────────────────────────────────┘
```

**CZĘŚĆ 2: KARTY EVENTOWE (fizyczne)**

Dla wyników specjalnych Guru używa talii kart:

```
┌─────────────────────────────────────────────────┐
│  🃏 TALIA EVENTOWA (3 rodzaje)                  │
├─────────────────────────────────────────────────┤
│                                                 │
│  ⬜ KARTY TWIST (dla RANDOM) — 15 kart         │
│  ┌─────────────┐                               │
│  │ ⬜ TWIST    │  Przykłady:                   │
│  │             │  • "Nieoczekiwany sojusznik"  │
│  │  Trzęsienie │  • "Szpieg w szeregach"       │
│  │  ziemi!     │  • "Epidemia grypy"           │
│  │             │  • "Odkryto złoża ropy"       │
│  │  -20 MAT    │  • "Zamach na lidera"         │
│  │  wszystkim  │                               │
│  └─────────────┘                               │
│                                                 │
│  🔵 KARTY DISCOVERY (dla ODKRYCIE) — 10 kart  │
│  ┌─────────────┐                               │
│  │ 🔵 ODKRYCIE │  Przykłady:                   │
│  │             │  • "Przełom w fuzji!"         │
│  │  Nowy       │  • "Szczepionka uniwersalna"  │
│  │  materiał!  │  • "Komunikacja kwantowa"     │
│  │             │  • "Źródło czystej energii"   │
│  │  +1 Tech    │                               │
│  │  GRATIS     │                               │
│  └─────────────┘                               │
│                                                 │
│  🟣 KARTY DISASTER (dla KATAKLIZM) — 10 kart  │
│  ┌─────────────┐                               │
│  │ 🟣 KATAKLIZM│  Przykłady:                   │
│  │             │  • "Wyciek radioaktywny"      │
│  │  Pandemia!  │  • "Cyber-atak globalny"      │
│  │             │  • "Trzęsienie 9.0"           │
│  │  SPOŁECZ.   │  • "Asteroida uderza!"        │
│  │  -1 Lvl     │  • "Bunt AI"                  │
│  │  wszystkim  │                               │
│  └─────────────┘                               │
│                                                 │
└─────────────────────────────────────────────────┘
```

**FLOW GRY:**

```
1. Guru wpisuje modyfikatory do aplikacji
2. Wyświetla ekran (wszyscy patrzą)
3. Przedstawiciel grupy tapuje "KRĘĆ"
4. Koło się kręci z animacją i dźwiękiem
5. Wynik pojawia się na ekranie
6. Jeśli RANDOM/ODKRYCIE/KATAKLIZM → Guru ciągnie kartę
7. Guru interpretuje wynik fabularnie
```

---

### 5. PRODUKCJA ZASOBÓW (MAT/EN/PB/LUD)

**INPUT:**
- Początek tury (automatyczne)
- Stan infrastruktury (kopalnie, elektrownie, uniwersytety)
- Poziomy dyscyplin (modyfikatory)
- Problemy aktywne (kary)

**PROCES:**
```
Bazowa produkcja per-turę:
├── MAT: +10
├── EN:  +5
├── PB:  +5 (+ bonus z NAUKA Lvl)
└── LUD: +3% wzrost populacji

+ Bonusy z infrastruktury (Kopalnia +7 MAT, Elektrownia +5 EN, etc.)
+ Bonusy z dyscyplin pozytywnych
- Kary z dyscyplin negatywnych (Głód: -5% LUD, etc.)
```

**OUTPUT:**
- Zasoby automatycznie dodane do puli kraju
- Guru ogłasza produkcję na początku tury
- Gracze aktualizują arkusze

**STATUS:** ✅ Kompletna (szczegóły w `resources.md`)

---

### 6. SYSTEM DYSCYPLIN (Lvl 1-4)

**INPUT:**
- Akcje gracza (inwestycja, naprawa, zaniedbanie)
- Wyniki Koła Fortuny
- **Sabotaż innych krajów** → wpływa na POLA NA KOLE FORTUNY celu (nie bezpośrednio na dyscypliny!)
- Czas (degradacja przy ignorowaniu przez 2 tury)

**PROCES:**

**DYSCYPLINY POZYTYWNE (Lvl 1-4):**
```
Inwestycja + sukces   → Lvl UP (rozwój)
Wykorzystywanie       → utrzymanie Lvl
Ignorowanie 2+ tury   → ryzyko degradacji
Sabotaż wroga         → MALUS na Kole Fortuny (nie degradacja!)
```

**DYSCYPLINY NEGATYWNE (Lvl 1-3):**
```
Naprawa + sukces      → Lvl DOWN (poprawa!)
Częściowa naprawa     → stabilizacja (bez zmian)
Ignorowanie 2 tury    → Lvl UP (pogorszenie!)
Lvl 3 = KATASTROFA    → poważne skutki fabularne
```

**OUTPUT:**
- Zmiana poziomu dyscypliny (lub brak zmian)
- Nowe modyfikatory do Koła Fortuny i produkcji
- Ewentualne wydarzenia fabularne (przy Lvl 3 negatywnej)

**STATUS:** ✅ Kompletna (szczegóły w `disciplines.md`)

---

### 7. SYSTEM PUNKTÓW POSTĘPU

**INPUT:**
- Akcja zgodna ze ścieżką zwycięstwa kraju
- Jakość planu (ocena Arbitra 1-3)
- Wynik Koła Fortuny

**PROCES:**
```
JAKOŚĆ PLANU → PUNKTY POSTĘPU:
├── Plan 1 pkt (słaby)    → +1 punkt postępu
├── Plan 2 pkt (dobry)    → +2 punkty postępu
└── Plan 3 pkt (świetny)  → +3 punkty postępu

MODYFIKATORY Z KOŁA:
├── Krytyczny sukces  → +1 bonus
├── Sukces            → bez zmian
├── Porażka           → 0 punktów (akcja nieudana)
└── Krytyczna porażka → -1 punkt (cofnięcie!)
```

**OUTPUT:**
- Punkty dodane do ścieżki zwycięstwa kraju
- Aktualizacja scoreboardu (po każdym Akcie)
- **PIERWSZY KRAJ DO 10 PUNKTÓW = WYGRYWA!**

**STATUS:** ✅ Kompletna

---

### 8. EDYKT LIDERA

**INPUT:**
- Decyzja Lidera (wybór typu edyktu)
- Cooldown: można użyć **1× na 3 tury**
- Zasoby (zależne od edyktu)

**PROCES:**
- Lider ogłasza edykt (publicznie lub tajnie — zależy od typu)
- Edykt ma natychmiastowy efekt
- **NIE wymaga Koła Fortuny** (gwarantowany sukces)
- Cooldown aktywowany

**GŁÓWNA MOC:** Edykt może **NEGOWAĆ własne dyscypliny kraju** (pozytywne lub negatywne) na określony czas.

**TYPY EDYKTÓW:**

| Edykt | Efekt | Czas trwania | Koszt |
|-------|-------|--------------|-------|
| **Edykt Mobilizacji** | Ignoruj negatywną dyscyplinę MILITARIA | 2 tury | 20 EN |
| **Edykt Oszczędności** | Ignoruj negatywną dyscyplinę CYWILIZACJA, +20% MAT | 2 tury | -10% morale |
| **Edykt Naukowy** | Ignoruj negatywną dyscyplinę NAUKA, +50% PB | 1 tura | 30 EN |
| **Edykt Jedności** | Ignoruj negatywną dyscyplinę SPOŁECZEŃSTWO | 2 tury | 15 MAT |
| **Edykt Ekologiczny** | Ignoruj negatywną dyscyplinę ŚRODOWISKO | 2 tury | 20 EN |
| **Edykt Wojenny** | +30% do akcji militarnych, ALE ujawnia plany | 2 tury | Brak tajemnicy |
| **Edykt Izolacji** | +25% obrona, ALE blokuje dyplomację | 2 tury | Brak sojuszy |

**OUTPUT:**
- Efekt edyktu aktywowany natychmiast
- Dyscyplina tymczasowo "wyłączona" (nie daje bonusów ani kar)
- Cooldown 3 tury przed następnym edyktem

**STATUS:** ✅ Kompletna

---

## 🚨 PROBLEMY ZIDENTYFIKOWANE

| # | Problem | Priorytet | Status |
|---|---------|-----------|--------|
| 1 | Brak listy akcji dla ról | 🔴 WYSOKI | ✅ Rozwiązany |
| 2 | Transparentność Koła Fortuny | 🟡 ŚREDNI | ✅ Decyzja: pełna transparentność |
| 3 | Poradnik pierwszej tury | 🔴 WYSOKI | ✅ Dodany |
| 4 | Mapowanie I/P/O — 8 mechanik | 🔴 WYSOKI | ✅ Wszystkie zmapowane! |
| 5 | Realizacja Koła Fortuny | 🟡 ŚREDNI | ✅ System hybrydowy (app + karty) |
| 6 | Stworzenie aplikacji Koła | 🟢 NISKI | ⏳ Do zrobienia później |
| 7 | Stworzenie kart eventowych | 🟢 NISKI | ⏳ Do zrobienia później |

---

## 📝 DECYZJE DO PODJĘCIA

### ✅ Decyzja #1: Transparentność Koła Fortuny

**Pytanie:** Czy gracze widzą ile pól sukcesu mają na Kole Fortuny?

**DECYZJA: A) Pełna transparentność**

Gracze widzą dokładnie ile pól sukcesu/porażki mają na Kole Fortuny.
- ✅ Gracze uczą się systemu
- ✅ Mogą optymalizować plany
- ✅ Wiedzą jak ich argumentacja wpływa na szanse

**Implementacja:**
- Aplikacja Koła pokazuje wszystkie modyfikatory
- Gracze widzą finalny % przed kręceniem
- Napięcie pochodzi z samego kręcenia, nie z niewiedzy

**Status:** ✅ PODJĘTA (2026-01-20)

---

## 📅 HISTORIA ZMIAN

| Data | Zmiany |
|------|--------|
| 2026-01-20 | Utworzenie dokumentu, mapowanie mechanik #1 i #2, lista akcji dla ról, poradnik pierwszej tury |
| 2026-01-20 | Aktualizacja akcji: L7→Przemówienie, D2 usunięty (handel=część negocjacji), D7→Wizyta dyplomatyczna, Tajna wiadomość (darmowa), G8→Przetarg |
| 2026-01-20 | **KOMPLETNE mapowanie mechanik 3-8!** Koło Fortuny (7 wyników, system hybrydowy), Ocena Arbitra (1-3 → 40/60/80%), Punkty Postępu, Edykt Lidera (7 typów, negowanie dyscyplin) |

---

**Następne kroki:**
1. ~~Zmapować pozostałe 6 mechanik CORE~~ ✅ DONE!
2. Podjąć decyzję o transparentności Koła Fortuny
3. Zweryfikować listę akcji dla ról (playtest)
4. Stworzyć aplikację Koła Fortuny (HTML/JS)
5. Zaprojektować i wydrukować karty eventowe (Twist/Discovery/Disaster)
6. Plan naprawy z priorytetami
