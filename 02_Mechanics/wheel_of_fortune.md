# 🎰 Koło Fortuny - System Rozstrzygania

## 📐 Podstawy

**Koło Fortuny** to mechanika rozstrzygania akcji graczy. Wprowadza element **nieprzewidywalności**, ale szanse są **modyfikowane przez decyzje graczy**.

> "Równie pasjonujące co przerażające" - jak opisał Maro

---

## 🎯 Jak to Działa?

### Podstawowy Flow:

1. **Arbiter ocenia plan gracza** (scoring)
2. **Arbiter określa bazowe szanse powodzenia**
3. **Gracze kręcą Kołem Fortuny**
4. **Wynik: Sukces / Częściowy Sukces / Porażka**

---

## 🎲 Struktura Koła

### 3 Sekcje:

```
┌────────────────────────────────┐
│    KOŁO FORTUNY (Bazowe)       │
├────────────────────────────────┤
│                                │
│   🟢 SUKCES          50%       │
│   🟡 CZĘŚCIOWY       30%       │
│   🔴 PORAŻKA         20%       │
│                                │
└────────────────────────────────┘
```

**Bazowe szanse (dla standardowej akcji):**
- ✅ **Sukces:** 50% - akcja się udaje w pełni
- ⚠️ **Częściowy Sukces:** 30% - akcja się udaje częściowo
- ❌ **Porażka:** 20% - akcja się nie udaje

---

## 📊 Modyfikatory Szans

### Arbiter modyfikuje bazowe szanse na podstawie:

| Kryterium                           | Modyfikator     | Przykład                                    |
|-------------------------------------|-----------------|---------------------------------------------|
| **POZYTYWNE:**                      |                 |                                             |
| Wykorzystanie technologii           | +10% do +30%    | Użycie Reaktorów Fuzyjnych do produkcji     |
| Informacje wywiadowcze              | +10% do +20%    | Wiedza o planach wroga                      |
| Wykorzystanie silnych stron         | +10% do +20%    | Kraj naukowy buduje technologię             |
| Radzenie sobie z problemami         | +5% do +15%     | Plan naprawy głodu                          |
| Sojusze/współpraca                  | +10% do +20%    | Wspólna akcja z sojusznikiem                |
| Kreatywność planu                   | +5% do +15%     | Innowacyjne rozwiązanie                     |
| Wysoki Lvl Dyscypliny               | +5% za Lvl      | NAUKA Lvl 3 buduje tech (+15%)              |
| **NEGATYWNE:**                      |                 |                                             |
| Brak zasobów                        | -20% do -50%    | Próba budowy bez surowców                   |
| Ignorowanie problemów               | -10% do -30%    | Negatywna Dyscyplina Lvl 3                  |
| Konflikt z silniejszym              | -10% do -40%    | Atak na kraj o przewadze militarnej         |
| Niski Lvl Dyscypliny                | -5% za Lvl diff | MILITARIA Lvl 1 vs Lvl 3 wroga (-10%)       |
| Brak przygotowania                  | -10% do -25%    | Akcja bez planu, improwizacja               |

---

## 🎯 Przykłady Rozstrzygnięć

### Przykład 1: Budowa Technologii (Sukces)

**Akcja:** Federacja Północy buduje Centrum Badawcze (rozwój NAUKA Lvl 1 → 2)

**Ocena Arbitra:**
- ✅ Wykorzystanie technologii: Reaktory Fuzyjne (+20%)
- ✅ Sojusz z Imperium (wymiana danych): (+15%)
- ✅ Wysoki Lvl NAUKA (Lvl 2): (+10%)
- ✅ Kreatywny plan (współpraca międzynarodowa): (+10%)
- ❌ Brak problemów: (0%)

**Bazowe szanse:** 50% Sukces / 30% Częściowy / 20% Porażka
**Po modyfikatorach (+55%):**
- ✅ Sukces: **100%** (cap na 95%)
- ⚠️ Częściowy: 5%
- ❌ Porażka: 0%

**Wynik kręcenia:** ✅ **SUKCES!**
- Centrum Badawcze zbudowane
- NAUKA Lvl 1 → 2
- +20 PP do NAUKA

---

### Przykład 2: Atak Militarny (Porażka)

**Akcja:** Liga Południowa atakuje Federację Północy

**Ocena Arbitra:**
- ❌ MILITARIA (Lvl 1) vs Federacja (Lvl 3): (-40%)
- ❌ Brak informacji wywiadowczych: (-10%)
- ❌ Federacja ma sojusznika (Imperium pomoże): (-20%)
- ✅ Wykorzystanie elementu zaskoczenia: (+10%)
- ❌ Ignorowanie problemów (głód w Lidze): (-15%)

**Bazowe szanse:** 50% Sukces / 30% Częściowy / 20% Porażka
**Po modyfikatorach (-75%):**
- ✅ Sukces: 0%
- ⚠️ Częściowy: 15%
- ❌ Porażka: **85%**

**Wynik kręcenia:** ❌ **PORAŻKA!**
- Atak odparty
- Liga traci 20 jednostek broni
- -10 PP do MILITARIA (degradacja)
- SPOŁECZEŃSTWO Ligi: Lvl 2 → 3 (zamieszki po przegranej)

---

### Przykład 3: Naprawa Kryzysu (Częściowy Sukces)

**Akcja:** Republika Zachodnia próbuje naprawić Głód (SPOŁECZEŃSTWO Lvl 2 → 1)

**Ocena Arbitra:**
- ✅ Import żywności z sojusznika: (+15%)
- ✅ Wykorzystanie zasobów (50 jednostek): (+10%)
- ❌ Brak technologii (produkcja żywności): (-10%)
- ❌ Słaba CYWILIZACJA (Lvl 1) - trudności z dystrybucją: (-5%)
- ✅ Wsparcie Dyplomaty (negocjacje): (+10%)

**Bazowe szanse:** 50% Sukces / 30% Częściowy / 20% Porażka
**Po modyfikatorach (+20%):**
- ✅ Sukces: **70%**
- ⚠️ Częściowy: 25%
- ❌ Porażka: 5%

**Wynik kręcenia:** ⚠️ **CZĘŚCIOWY SUKCES**
- Głód lekko złagodzony, ale nie rozwiązany
- SPOŁECZEŃSTWO: Lvl 2 (pozostaje, ale stabilizacja - nie degraduje przez 2 tury)
- Koszt: 50 zasobów (wydane)
- Arbiter: "Żywność dotarła, ale chaos w dystrybucji. Ludzie nadal głodni, ale sytuacja się poprawia."

---

## 🎲 Fizyczna Implementacja

### Opcja A: Koło Fizyczne (Spinner)

**Opis:**
- Fizyczne koło z 3 sekcjami (Sukces/Częściowy/Porażka)
- Sekcje są różnej wielkości (zgodnie z modyfikatorami)
- Arbiter zmienia rozmiary sekcji przed kręceniem

**Plusy:**
- ✅ Bardzo teatralne, ekscytujące
- ✅ Namacalne - gracze widzą szanse

**Minusy:**
- ⚠️ Wymaga fizycznego koła
- ⚠️ Trudne do zmiany modyfikatorów (trzeba rysować nowe koło?)

---

### Opcja B: Kostka d100 (Percentile Dice)

**Opis:**
- Rzut 2 kostkami d10 (dziesiętne + jedności) = wynik 1-100
- Arbiter określa przedziały:
  - Przykład: 1-70 = Sukces, 71-95 = Częściowy, 96-100 = Porażka

**Plusy:**
- ✅ Łatwe do implementacji (tylko kostki)
- ✅ Precyzyjne modyfikatory
- ✅ Szybkie

**Minusy:**
- ⚠️ Mniej teatralne niż koło
- ⚠️ Abstrakcyjne (liczby, nie wizualne)

---

### Opcja C: Karty (Deck)

**Opis:**
- Talia 100 kart: 50 Sukces, 30 Częściowy, 20 Porażka (bazowo)
- Arbiter dodaje/usuwa karty na podstawie modyfikatorów
- Gracz losuje 1 kartę

**Plusy:**
- ✅ Wizualne
- ✅ Łatwo modyfikować (dodać/usunąć karty)

**Minusy:**
- ⚠️ Wymaga dużo kart (100+)
- ⚠️ Czasochłonne (tasowanie, modyfikowanie)

---

### Opcja D: Aplikacja/Digital

**Opis:**
- Aplikacja mobilna lub web
- Arbiter wprowadza modyfikatory
- Gracze klikają "Kręć" - animacja koła

**Plusy:**
- ✅✅ Najłatwiejsze (automatyczne liczenie)
- ✅ Teatralne (animacja)
- ✅ Szybkie

**Minusy:**
- ⚠️ Wymaga urządzenia (telefon/tablet)
- ⚠️ Może zepsuć immersję (gra papierowa)

---

## 🎯 Rekomendacja

**Proponuję OPCJĘ B (d100) + wizualizacja na papierze:**

1. **Arbiter rzuca d100** (lub gracze rzucają)
2. **Przed rzutem** - Arbiter pokazuje przedziały na kartce:
   ```
   1-70  : ✅ SUKCES
   71-95 : ⚠️ CZĘŚCIOWY
   96-100: ❌ PORAŻKA
   ```
3. **Gracze widzą swoje szanse** (transparentność)
4. **Rzut!** - napięcie, ekscytacja

**Dlaczego to działa:**
- Proste (tylko kostki)
- Transparentne (gracze widzą szanse)
- Teatralne (moment rzutu jest ekscytujący)
- Elastyczne (łatwo modyfikować przedziały)

---

## 📊 Tabela Referenczyjna dla Arbitra

### Szybka Ocena Akcji:

| Jakość Planu    | Bazowe Szanse (Sukces/Częściowy/Porażka) |
|-----------------|------------------------------------------|
| Doskonały       | 80% / 15% / 5%                           |
| Dobry           | 70% / 25% / 5%                           |
| Standardowy     | 50% / 30% / 20%                          |
| Słaby           | 30% / 40% / 30%                          |
| Bardzo Słaby    | 10% / 30% / 60%                          |
| Niemożliwy      | 0% / 10% / 90%                           |

---

## 🎲 Specjalne Przypadki

### 🔒 Akcje Gwarantowane (100% Sukces)

Niektóre akcje NIE wymagają Koła Fortuny:
- Podstawowa produkcja zasobów (automatyczna)
- Proste negocjacje (nie ma konfliktu)
- Akcje wspierane przez bardzo wysokie modyfikatory (+95%)

**Arbiter decyduje:** Jeśli szanse Sukcesu > 95% → automatyczny sukces

---

### 💀 Akcje Niemożliwe (Automatyczna Porażka)

Niektóre akcje są niemożliwe:
- Brak zasobów do budowy (-100%)
- Technologia jeszcze nie odkryta
- Fizycznie niemożliwe (np. lot na Marsa bez statku)

**Arbiter decyduje:** Akcja odrzucona przed kręceniem

---

### 🎯 Akcje Krytyczne (Re-roll)

**Edykt Lidera** (1× na 3 tury):
- Gracz może **ponownie** rzucić kostką
- Wybiera lepszy wynik z 2 rzutów

**Przykład:**
- Pierwszy rzut: 85 (Częściowy)
- Używa Edyktu → drugi rzut: 45 (Sukces!)
- Wynik: SUKCES ✅

---

## 📝 Checklist dla Arbitra - Rozstrzyganie Akcji

**Przed kręceniem:**
- [ ] Przeczytaj plan gracza
- [ ] Oceń jakość planu (Doskonały/Dobry/Standardowy/Słaby)
- [ ] Sprawdź modyfikatory:
  - [ ] Technologie (+%)
  - [ ] Wywiad (+%)
  - [ ] Silne strony (+%)
  - [ ] Sojusze (+%)
  - [ ] Brak zasobów (-%)
  - [ ] Problemy w Dyscyplinach (-%)
- [ ] Policz łączne modyfikatory
- [ ] Określ przedziały (1-X Sukces, X-Y Częściowy, Y-100 Porażka)
- [ ] Pokaż graczom przedziały (transparentność!)

**Kręcenie:**
- [ ] Gracz rzuca d100 (lub Arbiter)
- [ ] Odczytaj wynik
- [ ] Ogłoś: Sukces / Częściowy / Porażka

**Po kręceniu:**
- [ ] Opisz efekty (narracyjnie!)
- [ ] Zaktualizuj stan gry:
  - [ ] Dyscypliny
  - [ ] Zasoby
  - [ ] Technologie
  - [ ] Morale

---

## 🎯 Przykłady Narracji Arbitra

### ✅ Sukces:
> "Centrum Badawcze stanęło w rekordowym tempie! Współpraca z Imperium Wschodu przyniosła nieoczekiwane przełomy. Naukowcy Federacji są podekscytowani - to nowa era dla nauki!"

### ⚠️ Częściowy Sukces:
> "Centrum Badawcze zostało ukończone, ale... budowa kosztowała więcej niż planowano. Niektóre laboratoria są jeszcze niedokończone. To krok naprzód, ale nie taki wielki jak oczekiwano."

### ❌ Porażka:
> "Katastrofa! Podczas budowy Centrum doszło do pożaru. Plany zniszczone, fundusze stracone. Naukowcy są zdemoralizowani. Federacja musi zacząć od nowa."

---

## 📝 Status Dokumentu

**Wersja:** 0.1 (Draft)
**Status:** 🔄 W toku
**Ostatnia aktualizacja:** 2026-01-03

**Decyzje do podjęcia:**
- [ ] Którą opcję fizycznej implementacji wybrać? (A, B, C, D?)
- [ ] Czy bazowe szanse (50/30/20) są OK?
- [ ] Czy cap na 95% (nie 100%) jest dobry?
- [ ] Czy Edykt Lidera (re-roll) jest zbalansowany?

---

**To kluczowa mechanika - źródło ekscytacji i nieprzewidywalności!** 🎰
