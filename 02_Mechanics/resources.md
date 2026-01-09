# 💰 System Zasobów - MaroRPG

## 📐 Status

**✅ DOKUMENT KOMPLETNY**

System zasobów oparty na modelu 3-warstwowym z automatyczną produkcją per-turę.

---

## 🎯 Filozofia Systemu

### 3-Warstwowy Model

```
┌─────────────────────────────────────┐
│ WARSTWA 1: TECHNOLOGIE              │
│ (Stałe, raz odblokowywane)          │
│ "Energia Słoneczna" = odblokowuje   │
│ możliwość budowania elektrowni      │
└─────────────────────────────────────┘
           ↓ wymaga
┌─────────────────────────────────────┐
│ WARSTWA 2: INFRASTRUKTURA           │
│ (Budynki/jednostki produkcyjne)     │
│ "Elektrownia Słoneczna" = budynek   │
│ który produkuje +5 Energii/turę     │
└─────────────────────────────────────┘
           ↓ produkuje
┌─────────────────────────────────────┐
│ WARSTWA 3: ZASOBY                   │
│ (Konsumowalne, per-tura)            │
│ "10 jednostek Energii" = zasób      │
│ zużywany do akcji                   │
└─────────────────────────────────────┘
```

**Przykład w grze:**
- **Tura 1:** Gracz bada technologię "Energia Słoneczna" (koszt: 50 PB, 2 tury)
- **Tura 3:** Tech odblokowała! Teraz może zbudować "Elektrownię Słoneczną"
- **Tura 4:** Buduje elektrownię (koszt: 100 MAT, 50 LUD, 30 EN)
- **Tura 5+:** Elektrownia automatycznie produkuje +5 EN każdą turę

---

## 🧱 4 Podstawowe Zasoby

### 1️⃣ MATERIAŁY (MAT)

```
┌──────────────────────────────────────────────────────────┐
│  🔨 MATERIAŁY (MAT) - surowce fizyczne                   │
├──────────────────────────────────────────────────────────┤
│  Do czego:                                               │
│  • Budowa infrastruktury (budynki, elektrownie)         │
│  • Naprawa zniszczeń                                     │
│  • Produkcja broni i sprzętu                            │
│  • Akcje wymagające zasobów fizycznych                  │
│                                                          │
│  Produkcja bazowa: +10 MAT/turę                         │
│                                                          │
│  Modyfikatory:                                           │
│  • ŚRODOWISKO +2: +5 MAT/turę (bogate zasoby)          │
│  • CYWILIZACJA +2: +5 MAT/turę (dobra logistyka)       │
│  • Kopalnia: +7 MAT/turę                                │
│  • Problem "Smog": -10 MAT/turę                         │
└──────────────────────────────────────────────────────────┘
```

**Reprezentuje:** Drewno, metal, beton, minerały, plastik, komponenty

**Przykładowe użycie:**
- Zbuduj Elektrownię Słoneczną: 100 MAT
- Zbuduj Uniwersytet: 150 MAT
- Zrekrutuj 10 żołnierzy: 20 MAT (broń, mundury)
- Napraw zniszczoną infrastrukturę: 50 MAT

---

### 2️⃣ ENERGIA (EN)

```
┌──────────────────────────────────────────────────────────┐
│  ⚡ ENERGIA (EN) - moc, prąd                             │
├──────────────────────────────────────────────────────────┤
│  Do czego:                                               │
│  • Zaawansowana produkcja                               │
│  • Badania naukowe                                       │
│  • Operacje militarne (drony, egzoszkielety)            │
│  • Budowa futurystycznych technologii                   │
│                                                          │
│  Produkcja bazowa: +5 EN/turę                           │
│                                                          │
│  Modyfikatory:                                           │
│  • NAUKA +2: +3 EN/turę (efektywność energetyczna)     │
│  • Elektrownia Słoneczna: +5 EN/turę                    │
│  • Reaktor Fuzyjny: +15 EN/turę                         │
│  • Problem "Zapaść Energetyczna": ×0.5 (połowa!)       │
└──────────────────────────────────────────────────────────┘
```

**Reprezentuje:** Prąd elektryczny, paliwo, energia jądrowa, energia odnawialna

**Przykładowe użycie:**
- Badaj technologię Tier 2: 30 EN
- Operuj dronami bojowymi: 15 EN/turę
- Zbuduj Centrum Badawcze: 50 EN
- Uruchom Komputer Kwantowy: 40 EN

---

### 3️⃣ PUNKTY BADAWCZE (PB)

```
┌──────────────────────────────────────────────────────────┐
│  🔬 PUNKTY BADAWCZE (PB) - wiedza naukowa                │
├──────────────────────────────────────────────────────────┤
│  Do czego:                                               │
│  • Badanie nowych technologii                           │
│  • Unikalne projekty naukowe                            │
│  • Rozwój Dyscypliny NAUKA                              │
│  • Współpraca międzynarodowa (wymiana wiedzy)           │
│                                                          │
│  Produkcja bazowa: +5 PB/turę                           │
│                                                          │
│  Modyfikatory:                                           │
│  • NAUKA Lvl 1: +5 PB/turę (bazowa)                     │
│  • NAUKA Lvl 2: +15 PB/turę                             │
│  • NAUKA Lvl 3: +30 PB/turę                             │
│  • NAUKA Lvl 4: +50 PB/turę                             │
│  • Uniwersytet: +8 PB/turę                              │
│  • Problem "Stagnacja Naukowa": 0 PB/turę               │
└──────────────────────────────────────────────────────────┘
```

**Reprezentuje:** Wiedza, badania, odkrycia naukowe, innowacje

**Przykładowe użycie:**
- Badaj technologię Tier 1: 20 PB
- Badaj technologię Tier 2: 50 PB
- Badaj technologię Tier 3: 100 PB
- Rozwój NAUKA Lvl 1 → 2: 80 PB (akumulacja)

---

### 4️⃣ LUDNOŚĆ (LUD)

```
┌──────────────────────────────────────────────────────────┐
│  👥 LUDNOŚĆ (LUD) - pracownicy, populacja                │
├──────────────────────────────────────────────────────────┤
│  Do czego:                                               │
│  • Budowanie infrastruktury (pracownicy budowlani)      │
│  • Rekrutacja armii (żołnierze)                         │
│  • Produkcja (robotnicy)                                │
│  • Limit możliwości kraju                               │
│                                                          │
│  Start: 200 LUD (typowy kraj)                           │
│                                                          │
│  Wzrost bazowy: +3% LUD/turę                            │
│                                                          │
│  Modyfikatory:                                           │
│  • SPOŁECZEŃSTWO +2: +2% dodatkowy wzrost               │
│  • Problem "Głód": -5% LUD/turę (spadek!)               │
│  • Problem "Zamieszki": -8% LUD/turę                    │
│  • Rekrutacja armii: -X LUD na stałe                    │
│                                                          │
│  ⚠️ UWAGA: Jedyny zasób który ROŚNIE i MALEJE!          │
└──────────────────────────────────────────────────────────┘
```

**Reprezentuje:** Ludzie, obywatele, pracownicy, populacja

**Ludność ma 3 funkcje:**

#### A) ZASÓB DO WYDANIA
```
Akcja: Zbuduj Elektrownię Słoneczną
Koszt: 100 MAT + 50 LUD + 30 EN
       (50 ludzi = pracownicy budowlani podczas budowy)
```

Po zakończeniu budowy 50 LUD wraca do puli dostępnej.

#### B) OGRANICZNIK PRODUKCJI
```
• Max 5 budynków jednocześnie = wymaga 250 LUD
• Armia 100 żołnierzy = zużywa 100 LUD NA STAŁE
• Brak wolnej LUD = nie możesz budować/rekrutować
```

#### C) DYNAMICZNY ZASÓB (rośnie/maleje)
```
Każda tura:
✅ +3% wzrost (jeśli SPOŁECZEŃSTWO OK)
❌ -5% spadek (jeśli Głód/Zaraza)
⚠️  -X% na stałe (jeśli rekrutujesz armię)
```

**Przykład ewolucji:**
```
Tura 1: Masz 200 LUD
Akcja: Rekrutuj 20 żołnierzy
→ 20 LUD na stałe w armii (zostaje 180)

Tura 2: 180 LUD × 1.03 = 185 LUD (wzrost 3%)
Akcja: Zbuduj kopalnię (koszt 30 LUD tymczasowo)
→ 185 - 30 = 155 LUD (podczas budowy)

Tura 3: Kopalnia gotowa! 30 LUD wraca
→ 185 LUD × 1.03 = 190 LUD

Tura 4: Problem! Głód pojawia się
→ 190 × 0.97 = 184 LUD (spadek -3% netto = +3% wzrost -5% głód)
```

---

## ⚙️ Automatyczna Produkcja Per-Turę

### Faza Produkcji (FAZA 1: Planowanie)

Na początku każdej tury, **AUTOMATYCZNIE** każdy kraj produkuje zasoby według wzoru:

```python
# PSEUDO-KOD dla każdego kraju:

def produkcja_per_tura(kraj):
    # === 1. BAZOWA PRODUKCJA ===
    MAT = 10
    EN = 5
    PB = 5
    LUD_wzrost = kraj.ludność_obecna * 0.03  # 3% wzrost

    # === 2. MODYFIKATORY Z DYSCYPLIN ===
    if kraj.ŚRODOWISKO >= 2:
        MAT += 5  # Bonus do surowców

    if kraj.CYWILIZACJA >= 2:
        MAT += 5  # Bonus do logistyki

    if kraj.NAUKA == 1:
        PB += 0  # Już jest w bazowej
    elif kraj.NAUKA == 2:
        PB += 10  # 15 total
    elif kraj.NAUKA == 3:
        PB += 25  # 30 total
    elif kraj.NAUKA == 4:
        PB += 45  # 50 total

    if kraj.SPOŁECZEŃSTWO >= 2:
        LUD_wzrost += kraj.ludność * 0.02  # +2% wzrostu

    # === 3. MODYFIKATORY Z INFRASTRUKTURY ===
    for budynek in kraj.budynki:
        if budynek == "Elektrownia Słoneczna":
            EN += 5
        elif budynek == "Reaktor Fuzyjny":
            EN += 15
        elif budynek == "Uniwersytet":
            PB += 8
        elif budynek == "Kopalnia":
            MAT += 7
        elif budynek == "Centrum Badawcze":
            PB += 12

    # === 4. KARY Z PROBLEMÓW ===
    if kraj.ma_problem("Głód"):
        LUD_wzrost -= kraj.ludność * 0.05  # -5% ludności!
        MAT -= 5

    if kraj.ma_problem("Zapaść Energetyczna"):
        EN = EN * 0.5  # Połowa energii!

    if kraj.ma_problem("Smog"):
        MAT -= 10
        EN -= 3

    if kraj.ma_problem("Stagnacja Naukowa"):
        PB = 0  # Brak produkcji PB!

    # === 5. DODAJ DO ZASOBÓW ===
    kraj.zasoby.MAT += max(0, MAT)  # Minimum 0
    kraj.zasoby.EN += max(0, EN)
    kraj.zasoby.PB += max(0, PB)
    kraj.ludność += LUD_wzrost  # Może być ujemny!

    # === 6. RETURN DLA WYŚWIETLENIA ===
    return {
        "MAT": MAT,
        "EN": EN,
        "PB": PB,
        "LUD": LUD_wzrost
    }
```

### Przykład w Grze

```
┌─────────────────────────────────────────────────┐
│ TURA 5 - FAZA PRODUKCJI (automatyczna)          │
├─────────────────────────────────────────────────┤
│ 🌐 FEDERACJA PÓŁNOCY produkuje:                 │
│                                                 │
│ 🔨 MAT:  +15  (10 bazowa + 5 z ŚRODOWISKO 3/3)  │
│ ⚡ EN:   +18  (5 bazowa + 10 z 2× Elektrownia   │
│                Słoneczna + 3 z paneli)          │
│ 🔬 PB:   +23  (5 bazowa + 10 z NAUKA Lvl 2 +    │
│                8 z Uniwersytetu)                │
│ 👥 LUD:  +6   (200 populacji × 3% wzrost)       │
│                                                 │
│ ⚠️  KARA: -10 MAT (problem: Smog)                │
│                                                 │
│ ══════════════════════════════════════════════  │
│ RAZEM: +5 MAT, +18 EN, +23 PB, +6 LUD          │
│                                                 │
│ 📊 Stan zasobów po produkcji:                   │
│    MAT: 85 → 90                                 │
│    EN:  42 → 60                                 │
│    PB:  15 → 38                                 │
│    LUD: 200 → 206                               │
└─────────────────────────────────────────────────┘
```

---

## 🏭 Infrastruktura - Budynki Produkcyjne

### Lista Przykładowych Budynków

#### Tier 1 (Bazowe)

| Budynek             | Koszt                | Produkcja           | Wymaga Tech          |
|---------------------|----------------------|---------------------|----------------------|
| Kopalnia            | 80 MAT, 30 LUD       | +7 MAT/turę         | Brak                 |
| Elektrownia Węglowa | 100 MAT, 50 LUD      | +8 EN/turę          | Brak                 |
| Uniwersytet         | 150 MAT, 40 LUD, 20 EN| +8 PB/turę         | Brak                 |
| Farma               | 60 MAT, 20 LUD       | +5 MAT/turę (żywność)| Brak                |

#### Tier 2 (Zaawansowane)

| Budynek                | Koszt                     | Produkcja            | Wymaga Tech              |
|------------------------|---------------------------|----------------------|--------------------------|
| Elektrownia Słoneczna  | 120 MAT, 50 LUD, 30 EN    | +5 EN/turę (czysta)  | "Energia Słoneczna"      |
| Centrum Badawcze       | 200 MAT, 60 LUD, 50 EN    | +12 PB/turę          | "Komputery Kwantowe"     |
| Rafineria              | 150 MAT, 70 LUD, 40 EN    | +12 MAT/turę         | "Zaawansowana Chemia"    |

#### Tier 3 (Futurystyczne)

| Budynek                | Koszt                     | Produkcja            | Wymaga Tech              |
|------------------------|---------------------------|----------------------|--------------------------|
| Reaktor Fuzyjny        | 300 MAT, 100 LUD, 100 EN  | +15 EN/turę          | "Fuzja Jądrowa"          |
| Instytut AI            | 400 MAT, 80 LUD, 150 EN   | +25 PB/turę          | "Sztuczna Inteligencja"  |

### Czas Budowy

**Każdy budynek wymaga 1-2 tury na zbudowanie:**
- Tier 1: 1 tura
- Tier 2: 2 tury
- Tier 3: 3 tury

**Podczas budowy:**
- Zasoby są zużyte natychmiast (MAT, EN)
- Ludność jest zajęta (nie może być użyta do innych akcji)
- Po zakończeniu ludność wraca, budynek zaczyna produkować

---

## 🎯 Koszty Akcji - Wydawanie Zasobów

### Badanie Technologii

| Tier | Koszt PB | Koszt EN | Czas (tury) | Przykład                      |
|------|----------|----------|-------------|-------------------------------|
| 1    | 20 PB    | 10 EN    | 1 tura      | "Panele Słoneczne"            |
| 2    | 50 PB    | 30 EN    | 2 tury      | "Energia Słoneczna", "Drony"  |
| 3    | 100 PB   | 80 EN    | 3 tury      | "Fuzja Jądrowa", "Teleportacja"|
| 4    | 200 PB   | 150 EN   | 4 tury      | "Terraformacja Marsa"         |

### Akcje Militarne

| Akcja                    | Koszt                        | Efekt                          |
|--------------------------|------------------------------|--------------------------------|
| Rekrutuj 10 żołnierzy    | 20 MAT, 10 LUD (na stałe)    | +10 siły militarnej            |
| Zbuduj drona bojowego    | 30 MAT, 20 EN                | +5 siły, wymaga Tech "Drony"   |
| Operacja militarna       | 15 EN, 10 MAT                | Atak/Obrona (per-tura)         |
| Zbuduj egzoszkielet      | 50 MAT, 40 EN                | +10 siły, wymaga Tech "Egzo"   |

### Naprawa Dyscyplin (Problemów)

| Problem                  | Koszt Naprawy                | Czas     | Koło Fortuny |
|--------------------------|------------------------------|----------|--------------|
| Głód (Lvl 1)             | 30 MAT, 20 EN                | 1 tura   | Tak          |
| Zamieszki (Lvl 2)        | 60 MAT, 40 EN, 20 LUD        | 2 tury   | Tak          |
| Smog (Lvl 1)             | 40 MAT, 30 EN                | 2 tury   | Tak          |
| Stagnacja Naukowa (Lvl 1)| 50 PB, 30 EN                 | 2 tury   | Tak          |
| Zapaść Energetyczna      | 80 MAT, 60 EN, Technologia   | 3 tury   | Tak          |

### Dyplomacja

| Akcja                    | Koszt                        | Efekt                          |
|--------------------------|------------------------------|--------------------------------|
| Wymiana zasobów          | Negocjowane                  | Transfer zasobów               |
| Pakt Naukowy             | 20 PB (obie strony)          | +5 PB/turę dla obu             |
| Sojusz Militarny         | 30 MAT (obie strony)         | Wspólna obrona                 |
| Handel Energią           | 10 EN = 15 MAT (przykład)    | Wymiana                        |

---

## 🌍 Predyspozycje Krajów - Bonusy Startowe

### Zasada:
> Każdy kraj ma **predyspozycje** (bonusy) do pewnych ścieżek zwycięstwa, ALE może wybrać inne (trudniej).

### Przykład: Federacja Północy

```
┌──────────────────────────────────────────────────┐
│ 🌐 FEDERACJA PÓŁNOCY                             │
├──────────────────────────────────────────────────┤
│                                                  │
│ 🌟 HEGEMONIA NAUKOWA [REKOMENDOWANA]            │
│    Bonus: +20% PB per-turę                       │
│    Start: 2 technologie (Panele Słoneczne,      │
│           Komputery Podstawowe)                  │
│    Wymaga: 3 technologie Tier 3                  │
│    Trudność: ⭐ ŁATWA                            │
│                                                  │
│ 💰 POTĘGA EKONOMICZNA [MOŻLIWA]                 │
│    Bonus: +10% MAT per-turę                      │
│    Wymaga: 5 Megaprojektów                      │
│    Trudność: ⭐⭐ ŚREDNIA                        │
│                                                  │
│ ⚔️  TRIUMF MILITARNY [BARDZO TRUDNA]             │
│    Bonus: Brak                                   │
│    Wymaga: Podbój 2 stolic                      │
│    Trudność: ⭐⭐⭐⭐ BARDZO TRUDNA               │
│                                                  │
│ 🌱 SOJUSZ PLANETARNY [TRUDNA]                   │
│    Bonus: +5% do dyplomacji                      │
│    Wymaga: Sojusz 3 krajów + rozwiązanie        │
│             wszystkich problemów ekologicznych   │
│    Trudność: ⭐⭐⭐ TRUDNA                        │
└──────────────────────────────────────────────────┘
```

### Przykład: Liga Południowa

```
┌──────────────────────────────────────────────────┐
│ 🔥 LIGA POŁUDNIOWA                               │
├──────────────────────────────────────────────────┤
│                                                  │
│ ⚔️  TRIUMF MILITARNY [REKOMENDOWANA]             │
│    Bonus: +20% do akcji militarnych              │
│    Start: 50 żołnierzy, technologia "Drony Lvl 1"│
│    Wymaga: Podbój 2 stolic                      │
│    Trudność: ⭐⭐ ŚREDNIA                        │
│                                                  │
│ 💰 POTĘGA EKONOMICZNA [MOŻLIWA]                 │
│    Bonus: +10% MAT per-turę                      │
│    Trudność: ⭐⭐⭐ TRUDNA                        │
│                                                  │
│ 🌟 HEGEMONIA NAUKOWA [BARDZO TRUDNA]            │
│    Bonus: Brak                                   │
│    Trudność: ⭐⭐⭐⭐ BARDZO TRUDNA               │
└──────────────────────────────────────────────────┘
```

### Bonusy Startowe Per Kraj

| Kraj                  | Bonus Główny                  | Start Zasoby            |
|-----------------------|-------------------------------|-------------------------|
| Federacja Północy     | +20% PB, 2 tech Tier 1        | 100 MAT, 50 EN, 30 PB, 200 LUD |
| Imperium Wschodu      | +20% EN, Reaktor Fuzyjny      | 80 MAT, 80 EN, 20 PB, 250 LUD  |
| Liga Południowa       | +20% siła militarna, 50 wojska| 120 MAT, 40 EN, 10 PB, 180 LUD |
| Republika Zachodnia   | +20% MAT, Kopalnia × 2        | 150 MAT, 40 EN, 15 PB, 220 LUD |
| Konfederacja Centralna| +15% do dyplomacji, 2 sojusze | 100 MAT, 50 EN, 25 PB, 200 LUD |

---

## 📊 Limity Magazynowe

### ⚠️ BRAK LIMITÓW!

**Decyzja projektowa:**
- Zasoby mogą być gromadzone **NIEOGRANICZENIE**
- Pozwala na długoterminowe planowanie (np. oszczędzanie na Tier 3 technologię)
- Upraszcza mechanikę (brak micromanagementu "full storage")

**Przykład:**
```
Tura 1: 100 MAT
Tura 2: +15 MAT → 115 MAT
Tura 3: +15 MAT → 130 MAT
Tura 5: Wydaj 100 MAT na budynek → 30 MAT
Tura 10: Zgromadzono 300 MAT (oszczędzanie na Megaprojekt!)
```

**Wyjątek:** Ludność (LUD) ma "naturalny limit" = pojemność społeczeństwa, ale nie jest sztywny cap.

---

## 🎲 Integracja z Kołem Fortuny

### Zasoby wpływają na szanse sukcesu!

**Zasada:**
> Więcej zainwestowanych zasobów = lepsze szanse w Kole Fortuny

**Przykład:**

```
AKCJA: Napraw problem "Głód"

MINIMALNY KOSZT: 30 MAT, 20 EN
→ Bazowa szansa: 50% (Koło: 3 sektory sukces / 6 total)

ZWIĘKSZONY KOSZT: 60 MAT, 40 EN (×2 minimalnego)
→ Szansa: 70% (Koło: 4 sektory sukces / 6 total)
→ Bonus: +20% za podwójne zasoby

MAKSYMALNY KOSZT: 90 MAT, 60 EN (×3 minimalnego)
→ Szansa: 85% (Koło: 5 sektorów sukces / 6 total)
→ Bonus: +35% za potrójne zasoby
```

**Kryteria Arbitra dla modyfikatorów:**

| Inwestycja zasobów         | Modyfikator szans | Przykład                        |
|----------------------------|-------------------|---------------------------------|
| Minimalny koszt (100%)     | +0%               | 30 MAT, 20 EN                   |
| Podwójny koszt (200%)      | +10% do +20%      | 60 MAT, 40 EN                   |
| Potrójny koszt (300%)      | +20% do +35%      | 90 MAT, 60 EN                   |
| Wykorzystanie technologii  | +10% do +30%      | + tech "Rolnictwo Pionowe"      |
| Współpraca z sojusznikiem  | +10% do +20%      | + pomoc Imperium (zasoby)       |

---

## 📋 Checklist dla Arbitra - Faza Produkcji

### FAZA 1: Planowanie (Początek)

**Arbiter wykonuje dla KAŻDEGO kraju:**

- [ ] Ogłoś nowy sezon
- [ ] Oblicz produkcję zasobów (użyj wzoru):
  - [ ] MAT = 10 + modyfikatory
  - [ ] EN = 5 + modyfikatory
  - [ ] PB = 5 + modyfikatory (+ NAUKA Lvl)
  - [ ] LUD = obecna × 3% + modyfikatory
- [ ] Dodaj produkcję do arkuszy krajów
- [ ] Ogłoś publicznie produkcję (lub prywatnie dla tajnych zasobów)
- [ ] Sprawdź problemy (Dyscypliny negatywne):
  - [ ] Głód → -5% LUD
  - [ ] Zapaść Energetyczna → EN × 0.5
  - [ ] Smog → -10 MAT
  - [ ] Stagnacja Naukowa → PB = 0
- [ ] Aktualizuj Ludność (wzrost/spadek)
- [ ] Start Fazy Planowania (15 min timer)

**Przykładowa tablica Arbitra:**

```
┌─────────────────────────────────────────────────────────┐
│ TURA 5 - WIOSNA, ROK 2                                  │
├─────────────────────────────────────────────────────────┤
│                                                         │
│ 🌐 FEDERACJA PÓŁNOCY                                    │
│    +5 MAT, +18 EN, +23 PB, +6 LUD                       │
│    Stan: 90 MAT, 60 EN, 38 PB, 206 LUD                  │
│                                                         │
│ 🏛️  IMPERIUM WSCHODU                                     │
│    +10 MAT, +25 EN, +15 PB, +8 LUD                      │
│    Stan: 120 MAT, 95 EN, 42 PB, 258 LUD                 │
│                                                         │
│ 🔥 LIGA POŁUDNIOWA                                      │
│    +12 MAT, +8 EN, +5 PB, +5 LUD (⚠️  -3 Głód!)         │
│    Stan: 85 MAT, 35 EN, 18 PB, 178 LUD                  │
│                                                         │
│ 💼 REPUBLIKA ZACHODNIA                                  │
│    +18 MAT, +10 EN, +8 PB, +7 LUD                       │
│    Stan: 145 MAT, 55 EN, 25 PB, 227 LUD                 │
│                                                         │
│ 🌿 KONFEDERACJA CENTRALNA                               │
│    +15 MAT, +12 EN, +12 PB, +6 LUD                      │
│    Stan: 110 MAT, 62 EN, 37 PB, 206 LUD                 │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 🎯 Przykłady Kompleksowe

### Przykład 1: Rozbudowa Naukowa (Federacja Północy)

**TURA 3:**
- Stan: 100 MAT, 50 EN, 30 PB, 200 LUD
- NAUKA Lvl 1 (pozytywna): +5 PB/turę

**Akcja:** Zbuduj Uniwersytet
- Koszt: 150 MAT, 40 LUD, 20 EN
- Czas: 1 tura

**TURA 4 (podczas budowy):**
- Produkcja: +10 MAT, +5 EN, +5 PB, +6 LUD
- Uniwersytet w budowie (40 LUD zajęte)
- Stan: (100-150+10) = -40 MAT ❌ **NIEWYSTARCZAJĄCE ZASOBY!**

**Korekta - gracz musi poczekać:**

**TURA 4:**
- Produkcja: +10 MAT, +5 EN, +5 PB, +6 LUD
- Stan: 110 MAT, 55 EN, 35 PB, 206 LUD
- Akcja: Zbieraj zasoby (wait)

**TURA 5:**
- Produkcja: +10 MAT, +5 EN, +5 PB, +6 LUD
- Stan: 120 MAT, 60 EN, 40 PB, 212 LUD
- Akcja: Zbieraj zasoby (wait)

**TURA 6:**
- Stan: 130 MAT, 65 EN, 45 PB, 218 LUD ✅ Wystarczające!
- Akcja: Zbuduj Uniwersytet (150 MAT, 40 LUD, 20 EN)
- Podczas budowy: 130-150 = -20 MAT... **Wciąż za mało!**

**Korekta - Federacja potrzebuje więcej MAT:**

**TURA 6:**
- Akcja: Handel z Imperium Wschodu
  - Wymiana: 20 PB → 40 MAT (negocjowane)
- Stan po handlu: 130+40 = 170 MAT, 45-20 = 25 PB

**TURA 7:**
- Stan: 170 MAT, 65 EN, 25 PB, 218 LUD ✅
- Akcja: Zbuduj Uniwersytet
  - Koszt: 150 MAT, 40 LUD (tymczasowo), 20 EN
  - Stan podczas budowy: 20 MAT, 45 EN, 25 PB, 178 LUD dostępne

**TURA 8:**
- Uniwersytet GOTOWY! +8 PB/turę
- 40 LUD wraca (218 LUD dostępne)
- Produkcja: +10 MAT, +5 EN, +5 PB (bazowa) +8 PB (Uniwersytet) = +13 PB, +6 LUD
- Stan: 30 MAT, 50 EN, 38 PB, 224 LUD

**TURA 9-12:**
- Każda tura: +13 PB (Uniwersytet działa!)
- Akumulacja PB: 38 → 51 → 64 → 77 → 90 PB

**TURA 12:**
- Stan: 90 PB ✅ Wystarczy na technologię Tier 2!
- Akcja: Badaj "Fuzja Jądrowa" (koszt: 50 PB, 30 EN, 2 tury)

---

### Przykład 2: Kryzys Głodu (Liga Południowa)

**TURA 4:**
- Stan: 80 MAT, 30 EN, 15 PB, 180 LUD
- Problem: SPOŁECZEŃSTWO Lvl 1 (Głód) - negatywna

**Produkcja Tury 4:**
- Bazowa: +10 MAT, +5 EN, +5 PB
- Ludność: 180 × 3% = +5.4 LUD
- **KARA GŁODU:** -180 × 5% = -9 LUD
- **Netto:** +10 MAT, +5 EN, +5 PB, **-3.6 LUD** ⚠️

**Stan po produkcji:** 90 MAT, 35 EN, 20 PB, 176 LUD

**TURA 5 (Liga ignoruje problem):**
- Produkcja: +10 MAT, +5 EN, +5 PB, -3.6 LUD
- Stan: 100 MAT, 40 EN, 25 PB, 172 LUD
- **OSTRZEŻENIE ARBITRA:** "Głód się nasila! 2 tury do eskalacji!"

**TURA 6 (Liga dalej ignoruje):**
- Produkcja: +10 MAT, +5 EN, +5 PB, -3.6 LUD
- Stan: 110 MAT, 45 EN, 30 PB, 168 LUD
- **DEGRADACJA!** SPOŁECZEŃSTWO Lvl 1 → Lvl 2 (Zamieszki!)

**TURA 7 (Zamieszki!):**
- Problem: SPOŁECZEŃSTWO Lvl 2 (Zamieszki) - negatywna
- Efekt: -25% do WSZYSTKICH akcji, -5 zasobów/turę, -8% LUD/turę
- Produkcja: +10 MAT -5 (Zamieszki) = +5 MAT, +5 EN, +5 PB, -8% LUD
- Ludność: 168 × (-5%) = -8.4 LUD
- Stan: 115 MAT, 50 EN, 35 PB, 159 LUD ⚠️⚠️

**TURA 7 - Akcja Ratunkowa:**
- Liga MUSI działać!
- Akcja: Napraw Zamieszki (koszt: 60 MAT, 40 EN, 20 LUD)
- Rzut Kołem Fortuny: SUKCES! ✅
- **SPOŁECZEŃSTWO Lvl 2 → Lvl 1** (Głód, ale już nie Zamieszki)

**TURA 8:**
- Problem: SPOŁECZEŃSTWO Lvl 1 (Głód) - nadal negatywna, ale słabsza
- Produkcja: +10 MAT, +5 EN, +5 PB, -5% LUD
- Stan: 55 MAT, 15 EN, 40 PB, 155 LUD (stabilizacja)

**TURA 9:**
- Akcja: Napraw Głód (koszt: 30 MAT, 20 EN)
- Rzut Kołem Fortuny: SUKCES! ✅
- **SPOŁECZEŃSTWO Lvl 1 (negatywna) → NEUTRALNE**

**TURA 10:**
- Problem rozwiązany!
- Produkcja: +10 MAT, +5 EN, +5 PB, +3% LUD (normalny wzrost)
- Stan: 35 MAT, 0 EN, 45 PB, 160 LUD ✅

**Lekcja:** Ignorowanie problemów prowadzi do kryzysu! Szybka reakcja ratuje kraj.

---

## 📊 Tabela Stanu Zasobów (Template dla Gracza)

```
┌─────────────────────────────────────────────────────────┐
│ KRAJ: _____________________     TURA: ____  ROK: ____   │
├─────────────────────────────────────────────────────────┤
│                                                         │
│ 🔨 MATERIAŁY (MAT):  [ _____ ]                          │
│    Produkcja per-turę: +_____ MAT                       │
│    Źródła:                                              │
│    • Bazowa: +10                                        │
│    • ŚRODOWISKO +X: +____                               │
│    • CYWILIZACJA +X: +____                              │
│    • Kopalnia: +____                                    │
│    • Kary: -____                                        │
│                                                         │
│ ⚡ ENERGIA (EN):     [ _____ ]                          │
│    Produkcja per-turę: +_____ EN                        │
│    Źródła:                                              │
│    • Bazowa: +5                                         │
│    • Elektrownia __________: +____                      │
│    • Kary: -____ / ×____                                │
│                                                         │
│ 🔬 PUNKTY BADAWCZE (PB): [ _____ ]                      │
│    Produkcja per-turę: +_____ PB                        │
│    Źródła:                                              │
│    • NAUKA Lvl __: +____                                │
│    • Uniwersytet: +____                                 │
│    • Centrum Badawcze: +____                            │
│    • Kary: ____                                         │
│                                                         │
│ 👥 LUDNOŚĆ (LUD):    [ _____ ]                          │
│    Wzrost per-turę: +_____% = +_____ LUD                │
│    Źródła:                                              │
│    • Bazowy wzrost: +3%                                 │
│    • SPOŁECZEŃSTWO +X: +____%                           │
│    • Kary: -____%                                       │
│    • Armia (na stałe): -____                            │
│    • W budowie (tymczasowo): -____                      │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 📝 Status Dokumentu

**Wersja:** 1.0 (Kompletna)
**Status:** ✅ GOTOWE
**Ostatnia aktualizacja:** 2026-01-09

**Decyzje podjęte:**
- [x] 4 zasoby: MAT, EN, PB, LUD
- [x] Model 3-warstwowy: Technologie → Infrastruktura → Zasoby
- [x] Automatyczna produkcja per-turę
- [x] Ludność jako dynamiczny zasób (rośnie/maleje)
- [x] Brak limitów magazynowych
- [x] Predyspozycje krajów (bonusy, ale nie zamknięcie)
- [x] Integracja z Kołem Fortuny (zasoby = modyfikatory szans)

**Integracja z innymi dokumentami:**
- `disciplines.md` - Dyscypliny generują modyfikatory zasobów
- `turn_structure.md` - Produkcja w FAZA 1: Planowanie (początek)
- `wheel_of_fortune.md` - Zasoby wpływają na szanse sukcesu

---

**System zasobów jest gotowy do playtestingu! 🚀**
