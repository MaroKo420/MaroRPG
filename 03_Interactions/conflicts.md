# ⚔️ Konflikty i Wojny - MaroRPG

## 📐 Status

**Wersja:** 0.5 (W Rozwoju)
**Status:** 🔄 AKTYWNY ROZWÓJ
**Ostatnia aktualizacja:** 2026-01-09

---

## 🎯 Filozofia Konfliktów

> *Wojna nie jest celem gry. Wojna jest narzędziem - kosztownym i ryzykownym.*

Kluczowe założenia:
- **Walka NIE jest kluczowa** - gra kieruje graczy ku rozwojowi technologicznemu
- **Wojna jest droga** - wymaga zasobów, osłabia dyscypliny
- **Geografia ma znaczenie** - nie można atakować odległych krajów bez sojuszników
- **Zaskoczenie wymaga technologii** - inaczej atak jest przewidywalny

---

## 🗺️ Geografia i Zasięg

### Mapa Świata

Kraje na mapie mają **sąsiadów**. Atak możliwy jest tylko na:
1. **Bezpośredniego sąsiada** - zawsze
2. **Odległy kraj** - tylko jeśli masz sojusznika graniczącego z celem

```
Przykład:
┌───┐     ┌───┐     ┌───┐
│ A │─────│ B │─────│ C │
└───┘     └───┘     └───┘

A może zaatakować B (sąsiad)
A NIE może zaatakować C (brak wspólnej granicy)
A może zaatakować C JEŚLI ma sojusz z B (przejście wojsk)
```

### Blokada Geograficzna

Jeśli nie masz dostępu do celu:
- Musisz negocjować **prawo przejścia** z krajem pośrednim
- Lub **zdobyć sojusznika** graniczącego z celem
- Lub **rozwinąć technologię** dalekiego zasięgu (lotnictwo, rakiety)

---

## ⚡ Deklaracja Wojny

### Atak z Zaskoczenia

**Wymaga technologii** - np. szybkie jednostki, wywiad, lotnictwo.

Bez technologii zaskoczenia:
1. Gracz **deklaruje wojnę** w Fazie Planowania
2. Atak następuje **w NASTĘPNEJ turze**
3. Obrońca ma turę na przygotowanie

Z technologią zaskoczenia:
1. Gracz **deklaruje atak** w Fazie Planowania
2. Atak następuje **w TEJ SAMEJ turze**
3. Obrońca może tylko reagować

### Wymagania Ataku

| Element | Wymaganie |
|---------|-----------|
| **Dostęp geograficzny** | Wspólna granica lub sojusznik |
| **MILITARIA** | Min. poziom 2 |
| **Zasoby** | Koszt zależy od skali ataku |
| **Deklaracja** | Jawna lub tajna (z technologią) |

---

## 🎲 Rozstrzyganie Konfliktu

### Wzór na SIŁĘ

```
SIŁA = MILITARIA + Technologie + Sojusznicy - Problemy + Koło Fortuny
```

| Element | Opis | Zakres |
|---------|------|--------|
| **MILITARIA** | Poziom dyscypliny (1-10) | +1 do +10 |
| **Technologie** | Bonusy z drzewa tech | +1 do +5 |
| **Sojusznicy** | Pomoc wojskowa sojuszników | +1 do +3 za sojusznika |
| **Problemy** | Negatywne sytuacje (głód, bunty) | -1 do -5 |
| **Koło Fortuny** | Rzut k6 | +1 do +6 |

### Porównanie SIŁ

```
SIŁA Atakującego vs SIŁA Obrońcy

Różnica:
+5 lub więcej → Miażdżące zwycięstwo
+3 do +4      → Wyraźne zwycięstwo
+1 do +2      → Pyrrusowe zwycięstwo (obie strony tracą)
0             → Pat (status quo)
-1 do -2      → Pyrrusowa porażka
-3 lub mniej  → Porażka
```

### Koło Fortuny (k6)

> *Kufufu... Losowość jest przyprawą do strategii. Zbyt dużo - i całość traci smak.*

**Obecnie:** k6 daje +1 do +6

**Do dopracowania:**
- [ ] Czy k6 to odpowiednia skala?
- [ ] Czy obie strony rzucają, czy tylko atakujący?
- [ ] Czy są sytuacje bez Koła Fortuny?

---

## 💀 Efekty Wojny

### Zwycięzca Zyskuje

| Typ zwycięstwa | Zyski |
|----------------|-------|
| **Miażdżące** | Przejęcie terytorium + zasobów + wybór kar dla przegranego |
| **Wyraźne** | Przejęcie zasobów + możliwość wymuszenia traktatu |
| **Pyrrusowe** | Nominalne zwycięstwo, ale duże straty własne |

### Przegrany Traci

| Typ porażki | Straty |
|-------------|--------|
| **Pyrrusowa** | Zasoby, osłabienie MILITARIA |
| **Porażka** | Zasoby + terytorium + wymuszony traktat |
| **Miażdżąca** | Możliwa utrata suwerenności (wchłonięcie) |

### Wpływ na Dyscypliny

Wojna osłabia WSZYSTKIE dyscypliny:

| Dyscyplina | Efekt wojny |
|------------|-------------|
| MILITARIA | -2 po pyrrusowym zwycięstwie/porażce |
| CYWILIZACJA | -1 (zniszczenia infrastruktury) |
| SPOŁECZEŃSTWO | -1 (żałoba, trauma) |
| NAUKA | -1 (naukowcy uciekają) |
| ŚRODOWISKO | -1 (zanieczyszczenie, zniszczenia) |

---

## 🌍 Sytuacja na Świecie

> *Zamiast "wojny jako dyscypliny" - sytuacja na świecie jako tło dla decyzji graczy.*

### Koncepcja

Co turę Arbiter ogłasza **Sytuację na Świecie** - wydarzenia globalne, które wpływają na wszystkie kraje.

| Typ Sytuacji | Przykład | Wpływ |
|--------------|----------|-------|
| **Napięcia** | Zimna wojna między mocarstwami | Presja na MILITARIA |
| **Kryzys** | Pandemia | -1 do SPOŁECZEŃSTWA wszystkim |
| **Okazja** | Odkrycie nowych złóż | Bonus dla NAUKI |
| **Katastrofa** | Erupcja wulkanu | -1 ŚRODOWISKO w regionie |

### Jak Gracze Wpływają

Gracze mogą:
- **Reagować** - dostosowywać strategię do sytuacji
- **Wykorzystywać** - korzystać z okazji
- **Zmieniać** - poprzez działania (np. szczepionki kończą pandemię)
- **Ignorować** - na własne ryzyko

**Do dopracowania:** Dokładna mechanika Sytuacji na Świecie.

---

## 🏳️ Koniec Wojny

### Sposoby Zakończenia

1. **Kapitulacja** - jedna strona poddaje się
2. **Traktat pokojowy** - negocjowany przez obie strony
3. **Mediacja Arbitra** - gdy strony nie mogą się dogadać
4. **Wyczerpanie** - obie strony zbyt słabe by walczyć

### Traktat Pokojowy

Zawiera:
- Kto wygrał (oficjalnie)
- Co przechodzi na zwycięzcę
- Jakie ograniczenia dla przegranego
- Jak długo obowiązuje

---

## 📝 Do Rozwinięcia

- [ ] Dokładna skala Koła Fortuny
- [ ] Mechanika Sytuacji na Świecie
- [ ] Technologie wojskowe (drzewo tech)
- [ ] Obrona - czy jest pasywna czy aktywna?
- [ ] Oblężenie vs bitwa otwarta
- [ ] Partyzantka i opór
