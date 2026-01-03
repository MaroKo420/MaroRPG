# ⏰ Struktura Tury - MaroRPG

## 📐 Podstawy

**1 Tura = 1 Pora Roku**

Gra toczy się w **sezonach** (wiosna, lato, jesień, zima), a każdy sezon to jedna tura rozgrywki.
- 4 tury = 1 rok
- Planowana długość gry: **12-20 sezonów** (3-5 lat)

---

## 🔄 4 FAZY TURY

Każda tura składa się z 4 faz:

```
FAZA 1: PLANOWANIE (15 minut)
         ▼
FAZA 2: ZGŁOSZENIE (5 minut)
         ▼
FAZA 3: ROZSTRZYGNIĘCIE ARBITRA (10-20 minut)
         ▼
FAZA 4: OGŁOSZENIE WYNIKÓW (5-10 minut)
         ▼
    [Następna tura]
```

**Szacowany czas pełnej tury:** 35-50 minut

---

## 📋 FAZA 1: PLANOWANIE (15 minut)

### Co się dzieje:

**Wszystkie 5 krajów jednocześnie:**
- Dyskutują w swoich 3-osobowych grupach (Lider + Dyplomata + Generał)
- Analizują obecną sytuację:
  - Stan swoich Dyscyplin
  - Dostępne zasoby
  - Relacje z innymi krajami
  - Postęp w technologiach
- Planują akcje do wykonania w tej turze

### Kluczowe pytania, na które grupa odpowiada:

1. **Co chcemy osiągnąć w tej turze?**
   - Rozwinąć Dyscyplinę?
   - Naprawić problem?
   - Zbudować technologię?
   - Zaatakować? Negocjować?

2. **Jak to zrobimy?**
   - Jakie zasoby wykorzystamy?
   - Jakie technologie zastosujemy?
   - Czy potrzebujemy pomocy innych krajów?

3. **Kto co robi?**
   - Lider: Jaką decyzję podejmuję?
   - Dyplomata: Z kim negocjuję?
   - Generał: Co produkuję? Jak się bronię?

### Output Fazy 1:

**Kartka z planem** zawierająca:
- Główna akcja (co chcemy zrobić)
- Metoda (jak to zrobimy)
- Wykorzystane zasoby/technologie
- Akcje poszczególnych ról:
  - Lider: [decyzja]
  - Dyplomata: [negocjacje/interakcje]
  - Generał: [produkcja/obrona]

**Przykład kartki:**
```
KRAJ: Federacja Północy
SEZON: Lato, Rok 2

GŁÓWNA AKCJA: Rozwój Dyscypliny NAUKA (Lvl 1 → 2)

METODA:
- Wykorzystanie technologii: Reaktory Fuzyjne (Tier 2)
- Wsparcie od sojusznika: Imperium Wschodu (wymiana danych)
- Alokacja zasobów: 50 jednostek energii

ROLE:
- Lider: Decyzja o budowie Centrum Badawczego
- Dyplomata: Negocjacje z Imperium Wschodu (wymiana technologii)
- Generał: Produkcja 50 jednostek energii, ochrona obiektów

AKCJE SEKRETNE:
- Wywiad: Sprawdzenie planów Ligi Południowej (Lvl 1)
```

---

## 📥 FAZA 2: ZGŁOSZENIE (5 minut)

### Co się dzieje:

1. **Każdy kraj oddaje swoją kartkę Arbitrowi** (poufnie)
   - Arbiter zbiera wszystkie 5 kartek
   - Inne kraje **nie wiedzą** co zaplanowały inne nacje (chyba że Dyplomaci się porozumieli)

2. **Arbiter pobieżnie czyta wszystkie plany** (szybka lektura)

3. **Gracze mają chwilę przerwy**
   - Mogą kontynuować dyplomatyczne rozmowy
   - Mogą spekulować co zrobią inni

### Output Fazy 2:

- Arbiter ma wszystkie 5 kartek z planami
- Gracze czekają na rozstrzygnięcie

---

## 🎰 FAZA 3: ROZSTRZYGNIĘCIE ARBITRA (10-20 minut)

**⚠️ To WĄSKIE GARDŁO gry - Arbiter potrzebuje czasu na analizę**

### Co robi Arbiter:

1. **Czyta wszystkie plany szczegółowo**
   - Analizuje co każdy kraj chce zrobić
   - Sprawdza czy plany są realistyczne (czy mają zasoby/technologie?)

2. **Określa kolejność działań**
   - Które akcje dzieją się jako pierwsze?
   - Czy jakieś akcje kolidują? (np. dwa kraje atakują ten sam cel)
   - Czy jakieś akcje wpływają na inne? (np. sabotaż blokuje produkcję)

3. **Ocenia jakość zgłoszeń** (scoring)
   - Czy dobrze wykorzystali swoje silne strony?
   - Czy użyli technologii inteligentnie?
   - Czy mają informacje wywiadowcze?
   - Czy radzą sobie z problemami w Dyscyplinach?

4. **Używa Koła Fortuny do rozstrzygnięcia**
   - Dla każdej akcji: kręci kołem (lub gracze kręcą)
   - Wynik: Sukces / Częściowy sukces / Porażka
   - Modyfikuje szanse na podstawie oceny (pkt 3)

5. **Przygotowuje narrację** ("newsy")
   - Pisze krótkie reportaże o wydarzeniach tury
   - Tworzy spójną historię z akcji wszystkich krajów

### Kryteria Oceny Arbitra:

| Kryterium                          | Modyfikator szans | Przykład                                      |
|------------------------------------|-------------------|-----------------------------------------------|
| Wykorzystanie technologii          | +10% do +30%      | Użycie Reaktorów Fuzyjnych do produkcji       |
| Informacje wywiadowcze             | +10% do +20%      | Wiedza o planach wroga przed atakiem          |
| Wykorzystanie silnych stron kraju  | +10% do +20%      | Kraj militarny atakuje, naukowy bada          |
| Radzenie sobie z problemami        | +5% do +15%       | Plan naprawy głodu (negatywna Dyscyplina)     |
| Sojusze/współpraca                 | +10% do +20%      | Wspólna akcja z sojusznikiem                  |
| Kreatywność/innowacyjność planu    | +5% do +15%       | Niestandardowe rozwiązanie problemu           |
| **Negatywne:**                     |                   |                                               |
| Brak zasobów                       | -20% do -50%      | Próba budowy bez wystarczających surowców     |
| Ignorowanie problemów              | -10% do -30%      | Negatywna Dyscyplina Lvl 3 nierozwiązana      |
| Konflikt z silniejszym przeciwnikiem| -10% do -40%     | Atak na kraj o przewadze militarnej           |

### Co robią gracze w tym czasie?

**PROBLEM:** Gracze czekają ~15 minut na rozstrzygnięcie.

**Propozycje aktywności:**
- 🗣️ **Mini-Dyplomacja** - Dyplomaci mogą negocjować na przyszłe tury
- 📊 **Planowanie długoterminowe** - grupy myślą o strategii na kolejne 2-3 tury
- 🎲 **Mini-event** - Arbiter może dać graczom krótkie zadanie/quiz (opcjonalnie)
- ☕ **Przerwa** - po prostu odpoczynek

**⚠️ DO USTALENIA:** Jak rozwiązać problem czasu oczekiwania?

---

## 📢 FAZA 4: OGŁOSZENIE WYNIKÓW (5-10 minut)

### Co się dzieje:

1. **Arbiter ogłasza "newsy" publicznie**
   - Czyta przygotowane reportaże
   - Opowiada o wydarzeniach tury w formie narracyjnej
   - **WYJĄTEK:** Akcje sekretne NIE są ogłaszane publicznie

**Przykład ogłoszenia:**
```
"SEZON: Lato, Rok 2

GŁÓWNE WIADOMOŚCI:

[Polityka]
Federacja Północy i Imperium Wschodu podpisały Pakt Naukowy!
Wymiana technologii między supermocarstwami może zmienić
równowagę sił na świecie.

[Nauka]
Centrum Badawcze w Federacji Północy rozpoczęło pracę!
Naukowcy donoszą o przełomach w dziedzinie fuzji jądrowej.
(Federacja: Dyscyplina NAUKA Lvl 1 → 2) ✅

[Militaria]
Liga Południowa zwiększyła produkcję uzbrojenia.
Obserwatorzy spekulują o możliwej ekspansji terytorialnej.
(Liga: Produkcja 30 jednostek broni) ✅

[Społeczeństwo]
Zamieszki w Republice Zachodniej nasilają się!
Głód przerodził się w kradzieże i przemoc.
(Republika: Dyscyplina SPOŁECZEŃSTWO Lvl 2 → 3 [negatywna]) ⚠️

[Środowisko]
Konfederacja Centralna rozpoczęła program oczyszczania powietrza,
ale efekty są gorsze niż oczekiwano.
(Konfederacja: Częściowy sukces - zanieczyszczenie lekko zredukowane) ⚠️

AKCJE SEKRETNE:
[Arbiter przekazuje wyniki akcji wywiadowczych prywatnie do odpowiednich krajów]
"

2. **Gracze reagują na wyniki**
   - Aktualizują swoje arkusze krajów
   - Zaznaczają zmiany w Dyscyplinach
   - Aktualizują punkty zwycięstwa (jeśli używane)
   - Dodają/odejmują zasoby

3. **Arbiter aktualizuje stan świata**
   - Publiczna tablica z informacjami o:
     - Który sezon/rok
     - Punkty zwycięstwa (jeśli publiczne)
     - Sojusze (jawne)
     - Główne wydarzenia

### Output Fazy 4:

- Wszyscy gracze znają wyniki **publicznych** akcji
- Akcje sekretne znają tylko zainteresowane strony
- Świat się zmienił - nowa sytuacja na następną turę

---

## 🔄 TRANSITION → Następna Tura

Po Fazie 4, gra przechodzi do następnego sezonu:

**Wiosna → Lato → Jesień → Zima** (= 1 rok)

1. Arbiter ogłasza nowy sezon
2. Jeśli to koniec roku (po Zimie) → może być specjalny event roczny
3. Gracze zaczynają FAZĘ 1 dla nowego sezonu

---

## 📊 Diagram Flow Tury

```
START TURY
    │
    ▼
┌─────────────────────────────────────┐
│  FAZA 1: PLANOWANIE (15 min)        │
│  • Grupy dyskutują                  │
│  • Spisują plany na kartki          │
└──────────────┬──────────────────────┘
               ▼
┌─────────────────────────────────────┐
│  FAZA 2: ZGŁOSZENIE (5 min)         │
│  • Oddanie kartek Arbitrowi         │
│  • Arbiter czyta pobieżnie          │
└──────────────┬──────────────────────┘
               ▼
┌─────────────────────────────────────┐
│  FAZA 3: ROZSTRZYGNIĘCIE (15 min)   │
│  Arbiter:                            │
│  • Analizuje plany                  │
│  • Określa kolejność                │
│  • Ocenia jakość                    │
│  • Kręci Kołem Fortuny              │
│  • Przygotowuje newsy               │
│                                     │
│  Gracze:                            │
│  • Dyplomacja                       │
│  • Planowanie długoterminowe        │
└──────────────┬──────────────────────┘
               ▼
┌─────────────────────────────────────┐
│  FAZA 4: OGŁOSZENIE (10 min)        │
│  • Arbiter czyta newsy              │
│  • Gracze aktualizują arkusze      │
│  • Reakcje na wyniki                │
└──────────────┬──────────────────────┘
               ▼
         NASTĘPNA TURA
```

---

## ⏱️ Timing - Przykładowa Sesja

**Założenia:**
- Gra: 12 sezonów (3 lata)
- Jedna tura: ~45 minut
- **Całkowity czas:** 12 × 45 min = **9 godzin**

**⚠️ To jest za długo!**

### Opcje skrócenia:

1. **Mniej sezonów**
   - 8 sezonów (2 lata) = 6 godzin ✅

2. **Szybsze tury**
   - Planowanie: 10 min (zamiast 15)
   - Rozstrzygnięcie: 10 min (zamiast 15)
   - = ~30 min/turę
   - 12 sezonów × 30 min = 6 godzin ✅

3. **Sesje podzielone**
   - Gra w 2-3 sesjach (np. 3h każda)
   - Między sesjami: Discord/email dla dyplomacji

**⚠️ DO USTALENIA:** Optymalna długość gry i tury

---

## 🎯 Specjalne Typy Tur

### 🌸 Wiosna - "Nowy Początek"
- Bonusy do produkcji zasobów naturalnych
- Łatwiejsze naprawianie Dyscypliny ŚRODOWISKO

### ☀️ Lato - "Szczyt Aktywności"
- Standardowa tura (brak modyfikatorów)

### 🍂 Jesień - "Żniwa"
- Bonusy do zbierania zasobów (plony, surowce)
- Czas przygotowań na zimę

### ❄️ Zima - "Wyzwanie Przetrwania"
- Zwiększone koszty utrzymania
- Trudniejsze akcje militarne (pogoda)
- Koniec roku - podsumowanie roczne

**⚠️ DO USTALENIA:** Czy sezonowe modyfikatory są potrzebne? Czy komplikują grę?

---

## 📝 Checklist dla Arbitra - Przygotowanie Tury

**Przed Fazą 1:**
- [ ] Ogłoś nowy sezon i rok
- [ ] Przypomnij o stanach Dyscyplin
- [ ] Przypomnij o dostępnych zasobach
- [ ] Ustaw timer na 15 minut

**Faza 2:**
- [ ] Zbierz wszystkie 5 kartek
- [ ] Pobieżnie przeczytaj (szybka weryfikacja)
- [ ] Ustaw timer na rozstrzygnięcie

**Faza 3:**
- [ ] Przeczytaj wszystkie plany szczegółowo
- [ ] Określ kolejność działań
- [ ] Oceń każdą akcję (scoring)
- [ ] Kręć Kołem Fortuny dla każdej akcji
- [ ] Napisz newsy (reportaże)

**Faza 4:**
- [ ] Przeczytaj newsy publicznie
- [ ] Przekaż wyniki akcji sekretnych (prywatnie)
- [ ] Aktualizuj tablicę stanu świata
- [ ] Odpowiedz na pytania graczy

---

## 📝 Status Dokumentu

**Wersja:** 0.1 (Draft)
**Status:** 🔄 W toku
**Ostatnia aktualizacja:** 2026-01-03

**Decyzje do podjęcia:**
- [ ] Optymalna długość tury (15 min planowanie OK?)
- [ ] Jak rozwiązać problem czasu oczekiwania w Fazie 3?
- [ ] Czy sezonowe modyfikatory są potrzebne?
- [ ] Ile sezonów powinna trwać gra? (8? 12? 16?)

---

**Następne kroki:** Szczegóły Koła Fortuny (wheel_of_fortune.md) + System Zasobów (resources.md)
