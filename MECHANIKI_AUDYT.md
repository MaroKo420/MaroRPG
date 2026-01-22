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

### 3. OCENA ARBITRA + URNA — Prosty System (FINALNA WERSJA 2026-01-22)

**INPUT:**
- Kartka z planem od grupy (CO + JAK)
- Stan kraju (zasoby, dyscypliny, technologie)
- Kontekst świata (wydarzenia globalne)

**PROCES W 3 KROKACH:**

```
┌─────────────────────────────────────────────────────────────┐
│  KROK 1: OCENA PLANU (subiektywna, 1-3)                    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Guru czyta plan i ocenia intuicyjnie:                     │
│                                                             │
│  1 = SŁABY     → plan niejasny, bez argumentacji           │
│                  START: 4 zielone tokeny                   │
│                                                             │
│  2 = SOLIDNY   → plan logiczny, podstawowa argumentacja    │
│                  START: 6 zielonych tokenów                │
│                                                             │
│  3 = ŚWIETNY   → plan przemyślany, dobra argumentacja      │
│                  START: 8 zielonych tokenów                │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  KROK 2: MODYFIKATORY (widoczne, +/- tokeny)               │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  BONUSY (dodaj zielone tokeny):                            │
│  +1 → Plan wykorzystuje TECHNOLOGIĘ którą kraj posiada     │
│  +1 → Plan wykorzystuje SILNĄ DYSCYPLINĘ (Lvl 3+)          │
│  +1 → Plan jest szczególnie KREATYWNY/ZASKAKUJĄCY          │
│                                                             │
│  KARY (odejmij zielone tokeny):                            │
│  -1 → Kraj ma AKTYWNY PROBLEM w powiązanej dyscyplinie     │
│  -2 → Kraj jest celem SABOTAŻU innego kraju                │
│  -1 → Plan IGNORUJE oczywiste przeszkody                   │
│                                                             │
│  LIMITY: minimum 2 zielone, maksimum 9 zielonych           │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  KROK 3: PRZYGOTOWANIE URNY (10 tokenów total)             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Urna zawiera zawsze 10 tokenów:                           │
│  • X zielonych (sukces)                                    │
│  • (10-X) czerwonych (porażka)                             │
│                                                             │
│  TOKENY SPECJALNE (opcjonalne):                            │
│  • 1 ZŁOTY zastępuje 1 zielony → ODKRYCIE                  │
│  • 1 CZARNY zastępuje 1 czerwony → KATAKLIZM               │
│                                                             │
│  Guru może pominąć tokeny specjalne przy ocenach 1         │
│  (słabe plany nie zasługują na cuda ani katastrofy)        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**PRZYKŁAD PEŁNEJ OCENY:**

```
Plan: "Badamy fuzję jądrową, wykorzystując naszych naukowców
       z Uniwersytetu Polarnego i reaktor testowy Tier 2"

Ocena Guru: 3 (świetny plan)           → START: 8 zielonych
+ Technologia (reaktor Tier 2)         → +1 = 9 zielonych
+ Silna dyscyplina (NAUKA Lvl 3)       → +1 = 10 → MAX 9
- Brak problemów                       → 0
- Brak sabotażu                        → 0

URNA FINALNA: 9 zielonych + 1 czerwony = 90% sukcesu
(+ złoty zastępuje 1 zielony, czarny zastępuje czerwony)
```

**OUTPUT:**
- Gracz losuje 1 token z urny
- 🟢 Zielony/Złoty = SUKCES (złoty = Odkrycie!)
- 🔴 Czerwony/Czarny = PORAŻKA (czarny = Kataklizm!)

**STATUS:** ✅ FINALNA WERSJA

---

### 4. URNA LOSU (zastępuje Koło Fortuny)

**INPUT:**
- Liczba zielonych tokenów (z Kroku 1-2 oceny)
- Decyzja o tokenach specjalnych (złoty/czarny)

**PROCES:**
Guru przygotowuje urnę fizyczną z tokenami.

**4 TYPY WYNIKÓW:**

| Token | Kolor | Opis | Szansa* |
|-------|-------|------|---------|
| 🟢 **SUKCES** | Zielony | Akcja udaje się zgodnie z planem | zależna od oceny |
| 🔴 **PORAŻKA** | Czerwony | Akcja nie udaje się | zależna od oceny |
| 🟡 **ODKRYCIE** | Złoty | Sukces + nieoczekiwany bonus! | ~10% (1/10) |
| ⚫ **KATAKLIZM** | Czarny | Porażka + poważne konsekwencje | ~10% (1/10) |

*Szanse zależą od liczby zielonych tokenów (2-9)

**INTERPRETACJA WYNIKÓW:**

```
🟢 SUKCES:
- Akcja udaje się zgodnie z planem
- Guru opisuje pozytywny efekt
- Punkty postępu przyznane

🔴 PORAŻKA:
- Akcja nie udaje się
- Guru opisuje co poszło nie tak
- Zasoby wydane, ale bez efektu

🟡 ODKRYCIE:
- Sukces + BONUS!
- Guru ciągnie Kartę Przeznaczenia lub improwizuje
- Nieoczekiwany przełom, sojusznik, zasób

⚫ KATAKLIZM:
- Porażka + KONSEKWENCJE!
- Guru ciągnie Kartę Katastrofy lub improwizuje
- Wypadek, zdrada, katastrofa naturalna
```

**OUTPUT:**
- Wynik losowania → Guru interpretuje fabularnie
- Efekt mechaniczny (zasoby, dyscypliny, punkty)
- Aktualizacja stanu świata

**STATUS:** ✅ FINALNA WERSJA

---

#### 🏺 FIZYCZNA URNA — Realizacja Praktyczna

**MATERIAŁY POTRZEBNE:**

```
┌─────────────────────────────────────────────────────────────┐
│  🏺 ZESTAW URNY MaroRPG                                     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  URNA:                                                      │
│  • Nieprzezroczyste pudełko/worek/słoik                    │
│  • Gracz nie może widzieć tokenów w środku                 │
│                                                             │
│  TOKENY (małe, jednakowego rozmiaru):                      │
│  • 9× ZIELONE (sukces) — np. zielone koraliki/żetony      │
│  • 9× CZERWONE (porażka) — np. czerwone koraliki/żetony   │
│  • 1× ZŁOTY (odkrycie) — np. złota moneta/żeton           │
│  • 1× CZARNY (kataklizm) — np. czarny kamień/żeton        │
│                                                             │
│  ŁĄCZNIE: 20 tokenów (używamy 10 na raz)                   │
│                                                             │
│  KOSZT: ~20-30 PLN (sklep z koralikami/Action)             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**PROCEDURA GURU (krok po kroku):**

```
┌─────────────────────────────────────────────────────────────┐
│  KROK 1: Oceń plan (1-3)                                   │
│  ────────────────────                                       │
│  Guru czyta plan i ocenia subiektywnie:                    │
│  1 = słaby, 2 = solidny, 3 = świetny                       │
│                                                             │
│  KROK 2: Oblicz tokeny                                     │
│  ─────────────────────                                      │
│  Bazowe: 1→4, 2→6, 3→8 zielonych                           │
│  + tech pasująca: +1                                       │
│  + dyscyplina 3+: +1                                       │
│  - problem aktywny: -1                                     │
│  - sabotaż: -2                                             │
│  (min 2, max 9)                                            │
│                                                             │
│  KROK 3: Przygotuj urnę PUBLICZNIE                         │
│  ─────────────────────────────────                          │
│  Guru mówi: "Masz 7 zielonych, 3 czerwone"                 │
│  Wkłada tokeny do urny — gracze WIDZĄ ile                  │
│                                                             │
│  KROK 4: Dodaj tokeny specjalne (przy ocenie 2+)           │
│  ───────────────────────────────────────────                │
│  Zamień 1 zielony na ZŁOTY                                 │
│  Zamień 1 czerwony na CZARNY                               │
│                                                             │
│  KROK 5: Losowanie                                         │
│  ─────────────────                                          │
│  Gracz wkłada rękę, wyciąga 1 token                        │
│  DRAMATYCZNA PAUZA... pokazuje wszystkim!                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**WIZUALIZACJA DLA GRACZY (opcjonalna kartka):**

```
┌─────────────────────────────────┐
│  TWOJA URNA:                    │
│                                 │
│  🟢🟢🟢🟢🟢🟢🟡  = 7 sukces    │
│  🔴🔴⚫          = 3 porażka   │
│                                 │
│  Szansa sukcesu: 70%           │
└─────────────────────────────────┘
```

**FLOW GRY Z URNĄ:**

```
1. Guru czyta plan
2. Ogłasza ocenę i modyfikatory
3. Przygotowuje urnę (gracze widzą)
4. Gracz losuje token
5. Guru interpretuje wynik fabularnie
6. Jeśli ZŁOTY/CZARNY → dodatkowy efekt z karty lub improwizacja
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
- Wyniki losowania z Urny
- **Sabotaż innych krajów** → -2 zielone tokeny w urnie celu!
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
2. ~~Podjąć decyzję o transparentności Koła Fortuny~~ ✅ DONE!
3. Zweryfikować listę akcji dla ról (playtest)
4. Stworzyć fizyczny prototyp urny (tokeny)
5. Zaprojektować i wydrukować karty eventowe (30 Kart Przeznaczenia gotowe!)
6. Plan naprawy z priorytetami

---

## 📊 ANALIZA BALANSU (Lekcja 3.2 — ZAKTUALIZOWANA)

**Data analizy:** 2026-01-22
**System:** Prosty System Urny (bez tierów)

---

### 1. Tabela prawdopodobieństw — Prosty System Urny

```
PROSTY SYSTEM URNY (10 tokenów total):

Ocena 1 (słaby):   ████░░░░░░ 40%  (4 zielone bazowo)
Ocena 2 (solidny): ██████░░░░ 60%  (6 zielonych bazowo)
Ocena 3 (świetny): ████████░░ 80%  (8 zielonych bazowo)

MODYFIKATORY (widoczne, +/- tokeny):
+ Technologia pasująca:  +1 zielony
+ Dyscyplina Lvl 3+:     +1 zielony
+ Kreatywny plan:        +1 zielony
- Problem aktywny:       -1 zielony
- Sabotaż:               -2 zielone

LIMITY: min 2, max 9 zielonych
TOKENY SPECJALNE: 1 złoty (odkrycie), 1 czarny (kataklizm)
```

**Interpretacja:**
- Słaby plan (ocena 1) = 40% bazowo, ale modyfikatory mogą podnieść
- Świetny plan z tech i dyscypliną = do 100% (max 9 zielonych = 90%)
- Modyfikatory są WIDOCZNE — gracze rozumieją dlaczego mają takie szanse
- Prostsze dla Guru — ocena 1-3, potem proste +/-

---

### 2. Porównanie opcji — Ścieżki Zwycięstwa

| Ścieżka | Wymagania | Trudność | Uwagi |
|---------|-----------|----------|-------|
| **Hegemonia Naukowa** | NAUKA Lvl 4 + SPOŁECZ. Lvl 3 | Średnia | Wymaga PB i czasu |
| **Potęga Ekonomiczna** | CYWILIZACJA Lvl 4 + ŚRODOWISKO Lvl 3 | Łatwa | Zasoby są kontrolowalne |
| **Imperium Militarne** | MILITARIA Lvl 4 + 2 inne Lvl 2+ | Bardzo trudna | Celowo najtrudniejsza |
| **Federacja Pokoju** | Sojusz 3+ krajów | Zależy od graczy | Wspólne zwycięstwo |
| **Przetrwanie** | 4/5 Dyscyplin Lvl 2+ | Defensywna | Dla ostrożnych graczy |

**Wnioski:**
- Imperium Militarne jest celowo najtrudniejsze (wymaga dominacji)
- Federacja Pokoju może być za łatwa przy kooperacyjnych graczach
- Potęga Ekonomiczna i Przetrwanie nie zostały wybrane w symulacjach — do obserwacji

---

### 3. Wyniki symulacji (3 rozgrywki, 405 losowań)

| Wynik | Ilość | % | Oczekiwane |
|-------|-------|---|------------|
| **Sukces** | 201 | 49.6% | ~50% |
| **Porażka** | 164 | 40.5% | ~40% |
| **Odkrycie** | 21 | 5.2% | ~5% |
| **Kataklizm** | 19 | 4.7% | ~5% |

**Wnioski:**
- System jest zbalansowany (sukcesy ~50%)
- Odkrycia i Kataklizmy występują z podobną częstotliwością
- Styl gry wpływa na wyniki:
  - Ostrożni gracze → 53% sukcesów
  - Agresywni gracze → 46% sukcesów (więcej Kataklizmów!)

---

### 4. Problemy balansowe zidentyfikowane

| Problem | Propozycja naprawy | Priorytet |
|---------|-------------------|-----------|
| Cel gry niejasny na starcie | ✅ Karty Przeznaczenia (30 kart) | Rozwiązany |
| Federacja Pokoju może być za łatwa | Wymóg 4 krajów zamiast 3? | Do obserwacji |
| Nikt nie wybrał Przetrwania w symulacjach | Dodać bonus za defensywną grę? | Niski |
| Bottleneck Guru w Fazie 3 | ✅ System kolejki (patrz niżej) | Rozwiązany |
| Gra zależy od jakości Guru | ✅ Checklist Guru (patrz niżej) | Rozwiązany |
| Nuda przy pasywnych graczach | ✅ Wydarzenia Globalne (patrz niżej) | Rozwiązany |

---

### 4a. NAPRAWA: System Kolejki (Faza 3)

**Problem:** Guru ocenia 15 planów = 20 min, gracze czekają.

**Rozwiązanie:**

```
NOWA FAZA 3 — SYSTEM KOLEJKI ROTACYJNEJ

1. Na początku każdego AKTU Guru losuje kolejność krajów:
   Np. Akt I: Azuria → Ferrum → Nordheim → Solaris → Verdania

2. Kolejność ROTUJE co turę:
   Tura 1: A → F → N → S → V
   Tura 2: F → N → S → V → A
   Tura 3: N → S → V → A → F
   ...

3. Guru rozstrzyga plany PO KOLEI (nie wszystkie naraz):
   - Bierze plan Azurii
   - Ocenia (30s)
   - Azuria losuje z urny (15s)
   - Guru notuje wynik (15s)
   - NASTĘPNY: Ferrum...

4. TYMCZASEM pozostałe kraje mogą:
   - Negocjować między sobą
   - Wysyłać tajne wiadomości
   - Planować następną turę
   - Obserwować losowania innych (publiczne!)

CZAS: 60s × 5 krajów × 3 akcje = 15 min (ale równoległe!)
Efektywny czas: ~6-8 min (gracze nie czekają bezczynnie)
```

---

### 4b. NAPRAWA: Checklist Guru

**Problem:** Guru może być subiektywny lub niespójny.

**Rozwiązanie — Karta Referencyjna dla Guru:**

```
┌─────────────────────────────────────────────────────────────┐
│  📋 CHECKLIST OCENY PLANU                                  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  KROK 1: OCENA BAZOWA (wybierz jedno)                      │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ □ SŁABY (1)   = plan niejasny, brak argumentacji    │   │
│  │               → 4 zielone tokeny                    │   │
│  │                                                     │   │
│  │ □ SOLIDNY (2) = plan logiczny, podstawowa arg.     │   │
│  │               → 6 zielonych tokenów                 │   │
│  │                                                     │   │
│  │ □ ŚWIETNY (3) = plan przemyślany, dobra arg.       │   │
│  │               → 8 zielonych tokenów                 │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  KROK 2: MODYFIKATORY (zaznacz wszystkie pasujące)         │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ □ +1 Tech — plan używa technologii którą kraj MA    │   │
│  │ □ +1 Dysc — plan wykorzystuje dyscyplinę Lvl 3+     │   │
│  │ □ +1 Wow  — plan jest kreatywny/zaskakujący         │   │
│  │ □ -1 Prob — kraj ma AKTYWNY problem (Lvl 1-2)       │   │
│  │ □ -2 Sab  — kraj jest celem sabotażu                │   │
│  │ □ -1 Ign  — plan ignoruje oczywiste przeszkody      │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  KROK 3: OBLICZ FINAŁ                                      │
│  Bazowe _____ + bonusy _____ - kary _____ = _____ tokenów  │
│  (min 2, max 9)                                            │
│                                                             │
│  KROK 4: PRZYGOTUJ URNĘ                                    │
│  □ Włóż zielone tokeny (liczba z Kroku 3)                 │
│  □ Włóż czerwone tokeny (10 minus zielone)                │
│  □ Zamień 1 zielony na ZŁOTY (jeśli ocena 2+)             │
│  □ Zamień 1 czerwony na CZARNY (jeśli ocena 2+)           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

### 4c. NAPRAWA: Wydarzenia Globalne

**Problem:** Gra może być nudna jeśli wszyscy grają pasywnie.

**Rozwiązanie — 5 Wydarzeń Globalnych (Guru używa gdy potrzeba):**

```
┌─────────────────────────────────────────────────────────────┐
│  🌍 WYDARZENIA GLOBALNE (użyj 1-2 na Akt)                  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. ZAGROŻENIE Z KOSMOSU                                   │
│  "Asteroida zbliża się do Ziemi. Tylko wspólna akcja       │
│   może ją zniszczyć. Potrzeba: 50 PB + 30 EN łącznie."    │
│  → Wymusza współpracę LUB ktoś ginie                       │
│                                                             │
│  2. ODKRYCIE ZŁÓŻ                                          │
│  "Na spornym terytorium odkryto złoża [zasób].            │
│   Kto pierwszy zbuduje tam kopalnię — przejmuje."          │
│  → Wymusza wyścig lub konflikt                             │
│                                                             │
│  3. PANDEMIA                                               │
│  "Nowa choroba rozprzestrzenia się. Kto ma szczepionkę    │
│   (NAUKA Lvl 3+) może ją sprzedać lub podarować."         │
│  → Wymusza handel lub dyplomację                           │
│                                                             │
│  4. SYGNAŁ Z KOSMOSU                                       │
│  "Odebrano sygnał z przestrzeni. Kto pierwszy go          │
│   odszyfruje (NAUKA Lvl 4) — zyskuje ogromną przewagę."   │
│  → Wymusza wyścig technologiczny                           │
│                                                             │
│  5. KRYZYS UCHODŹCÓW                                       │
│  "Miliony ludzi uciekają z regionu [X]. Kto ich przyjmie? │
│   +LUD ale -MAT. Kto odmówi — traci reputację."           │
│  → Wymusza decyzje moralne                                 │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Kiedy używać:**
- Gdy gra zwalnia (nikt nic nie robi)
- Na początku Aktu II lub III (eskalacja)
- Gdy gracze potrzebują pretekstu do interakcji

---

### 5. Status balansu

- [x] Tabela prawdopodobieństw stworzona
- [x] Porównanie ścieżek zwycięstwa
- [x] Symulacja przeprowadzona (405 losowań)
- [x] Problemy zidentyfikowane
- [ ] **Do sprawdzenia w playteście**

---

### 6. Rekomendacje przed playtestem

1. **Przetestować prosty system urny** — czy Guru łatwo ocenia plany 1-3?
2. **Obserwować ścieżki zwycięstwa** — czy gracze wybierają różne?
3. **Mierzyć czas tury** — cel: max 35 min/turę
4. **Zbierać feedback** — co jest niejasne?
5. **Testować system kolejki** — czy Faza 3 nie trwa za długo?
