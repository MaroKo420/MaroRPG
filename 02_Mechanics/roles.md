# 👥 Role - Lider, Dyplomata, Generał

## 📐 Podstawy

Każdy kraj składa się z **3 graczy**, z których każdy pełni unikalną rolę:

1. **LIDER** - Podejmuje kluczowe decyzje strategiczne
2. **DYPLOMATA** - Zarządza relacjami z innymi krajami
3. **GENERAŁ** - Odpowiada za obronność i produkcję

---

## 👑 LIDER

### Główna Odpowiedzialność:
**Podejmowanie ostatecznych decyzji o kierunku rozwoju kraju**

### Konkretne Zadania:

**W Fazie Planowania:**
- Koordynuje działania Dyplomaty i Generała
- Decyduje o **głównej akcji** tury:
  - Którą Dyscyplinę rozwijać?
  - Którą technologię budować?
  - Czy naprawi problem, czy rozwinie przewagę?
- Ma ostatnie słowo w przypadku sporów w grupie

**Specjalne Akcje Lidera:**
- **Edykt** - może wydać specjalny rozkaz przyspieszający akcję (bonus)
- **Zmiana Kursu** - może zmienić priorytet kraju (np. z rozwoju na obronę)
- **Alokacja Zasobów** - decyduje jak dzielić zasoby między Dyplomatę i Generała

### Mechaniki:

**🔹 Edykt Lidera** (1× na 3 tury)
- Lider może wydać specjalny rozkaz
- Efekt: +20% do szans powodzenia akcji w tej turze
- Cooldown: 3 tury

**🔹 Veto**
- Lider może zawetować propozycje Dyplomaty/Generała
- Ale nadużywanie veta obniża morale (negatywny efekt na SPOŁECZEŃSTWO)

### Przykład Akcji Lidera:
```
LIDER FEDERACJI PÓŁNOCY - Wiosna, Rok 2

GŁÓWNA DECYZJA: Rozwój Dyscypliny NAUKA (priorytet nr 1)

ALOKACJA ZASOBÓW:
- Dyplomata: 20 jednostek (na negocjacje z Imperium)
- Generał: 30 jednostek (produkcja energii dla naukowców)
- Rezerwa: 50 jednostek (na budowę Centrum Badawczego)

EDYKT: "Pełna mobilizacja naukowa!"
→ Bonus +20% do akcji naukowych w tej turze
```

---

## 🤝 DYPLOMATA

### Główna Odpowiedzialność:
**Zarządzanie relacjami z innymi krajami**

### Konkretne Zadania:

**W Fazie Planowania:**
- Rozmawia z Dyplomatami innych krajów
- Negocjuje sojusze, traktaty, umowy handlowe
- Zbiera informacje o planach innych krajów (wywiad)
- Radzi Liderowi o sytuacji międzynarodowej

**Specjalne Akcje Dyplomaty:**
- **Negocjacje** - zawieranie traktatów, sojuszy
- **Wywiad** - zbieranie informacji o innych krajach (sekretne)
- **Propaganda** - wpływanie na opinię publiczną (może pomóc w negocjacjach)

### Mechaniki:

**🔹 Traktat**
- Dyplomata może zawrzeć traktat z innym krajem
- Typy traktatów:
  - **Pakt o Nieagresji** - nie atakujemy się przez X tur
  - **Sojusz** - wspólna obrona, współpraca
  - **Umowa Handlowa** - wymiana zasobów/technologii
  - **Pakt Naukowy** - współpraca w badaniach

**🔹 Akcja Wywiadowcza**
- Dyplomata może wysłać szpiegów (koszt: zasoby)
- Efekty:
  - Lvl 1: Dowiaduje się o głównej akcji kraju (co planują w tej turze)
  - Lvl 2: Dowiaduje się o zasobach kraju
  - Lvl 3: Dowiaduje się o planowanych technologiach

**Modyfikator:** Informacje wywiadowcze dają **+10-20%** do szans powodzenia akcji przeciwko temu krajowi

**🔹 Sabotaż Dyplomatyczny**
- Dyplomata może próbować zerwać sojusz między innymi krajami
- Trudne (niskie szanse), ale jeśli się uda → duży wpływ na grę

### Przykład Akcji Dyplomaty:
```
DYPLOMATA FEDERACJI PÓŁNOCY - Lato, Rok 2

NEGOCJACJE:
- Imperium Wschodu: Pakt Naukowy (wymiana danych o fuzji)
- Liga Południowa: Pakt o Nieagresji (3 tury)

WYWIAD:
- Cel: Republika Zachodnia (podejrzenie przygotowań do wojny)
- Lvl: 2 (sprawdzenie zasobów militarnych)
- Koszt: 10 jednostek

PROPAGANDA:
- Cel: Poprawa wizerunku Federacji na arenie międzynarodowej
- Efekt: +5% do przyszłych negocjacji
```

---

## ⚔️ GENERAŁ

### Główna Odpowiedzialność:
**Obronność kraju i produkcja kluczowych zasobów**

### Konkretne Zadania:

**W Fazie Planowania:**
- Planuje produkcję zasobów
- Zarządza armią i obroną kraju
- Radzi Liderowi o bezpieczeństwie
- Przygotowuje akcje militarne (jeśli potrzebne)

**Specjalne Akcje Generała:**
- **Produkcja** - wytwarzanie zasobów (energia, surowce, broń)
- **Fortyfikacje** - budowa obronnych struktur (zwiększa obronność)
- **Atak Militarny** - inwazja na inny kraj
- **Obrona** - przygotowanie do obrony przed atakiem

### Mechaniki:

**🔹 Produkcja**
- Generał decyduje co produkować w tej turze:
  - Energia (dla naukowców)
  - Surowce (dla budowniczych)
  - Broń (dla armii)
- Produkcja bazowa + bonusy z Dyscyplin

**🔹 Fortyfikacje**
- Generał może zbudować obronę (koszt: zasoby)
- Efekt: +X% do obrony przeciwko atakom
- Lvl 1: Mury (+10% obrony)
- Lvl 2: Bunkry (+20% obrony)
- Lvl 3: Tarcze Energetyczne (+30% obrony)

**🔹 Akcja Militarna**
- Generał może zaatakować inny kraj (wymaga zgody Lidera!)
- Rozstrzygnięcie: Koło Fortuny z modyfikatorami:
  - +X% za przewagę militarną (MILITARIA Lvl 3 vs Lvl 1)
  - +X% za lepszą technologię (Broń Laserowa vs Broń Konwencjonalna)
  - -X% za fortyfikacje wroga
  - -X% za sojusze wroga (inne kraje mogą pomóc w obronie)

**Efekty wygranej wojny:**
- Zdobycie zasobów wroga
- Zmniejszenie Dyscypliny MILITARIA wroga
- Możliwość narzucenia traktatu

**Efekty przegranej wojny:**
- Utrata zasobów
- Zmniejszenie Dyscypliny MILITARIA
- Utrata morale (negatywny wpływ na SPOŁECZEŃSTWO)

### Przykład Akcji Generała:
```
GENERAŁ FEDERACJI PÓŁNOCY - Jesień, Rok 2

PRODUKCJA:
- Energia: 50 jednostek (priorytet - dla naukowców)
- Surowce: 20 jednostek (budowa infrastruktury)
- Broń: 10 jednostek (podstawowa obrona)

FORTYFIKACJE:
- Budowa Bunkrów wokół Centrum Badawczego
- Koszt: 30 jednostek surowców
- Efekt: +20% obrony tego obszaru

OBRONA:
- Przygotowanie na możliwy atak Ligi Południowej (informacje od Dyplomaty)
- Rozmieszczenie wojsk: priorytet - obrona Centrum Badawczego
```

---

## 🔄 Współpraca Między Rolami

### Kluczowe: Role muszą ze sobą współpracować!

**Przykład 1: Budowa Technologii**
- **Lider:** Decyduje o budowie Reaktora Fuzyjnego
- **Dyplomata:** Negocjuje wsparcie technologiczne od sojusznika
- **Generał:** Produkuje energię i surowce potrzebne do budowy

**Przykład 2: Wojna**
- **Lider:** Podejmuje decyzję o ataku (lub braku ataku)
- **Dyplomata:** Sprawdza czy wróg ma sojuszników, negocjuje neutralność innych krajów
- **Generał:** Planuje atak, alokuje wojska

**Przykład 3: Naprawa Kryzysu**
- **Lider:** Priorytet - naprawić głód (negatywna Dyscyplina SPOŁECZEŃSTWO)
- **Dyplomata:** Negocjuje import żywności od sojusznika
- **Generał:** Produkuje infrastrukturę dla dystrybucji żywności

---

## ⚖️ Balans Władzy

### Konflikt Ról - Co jeśli się nie zgadzają?

**Scenariusz:**
- Lider chce rozwijać Naukę
- Generał uważa że trzeba zbudować obronę (zagrożenie wojną)
- Dyplomata proponuje negocjacje zamiast budowy armii

**Rozwiązanie:**
1. **Dyskusja** (w Fazie Planowania)
2. **Lider ma ostatnie słowo** (veto)
3. **Ale:** Nadużywanie veta ma negatywne skutki (morale)

**Mechanika:**
- Jeśli Lider 3× pod rząd ignoruje rady Dyplomaty/Generała
- → Negatywny efekt: -1 Lvl w Dyscyplinie SPOŁECZEŃSTWO (brak zaufania w rządzie)

---

## 📊 Macierz Odpowiedzialności

| Zadanie                  | Lider | Dyplomata | Generał |
|--------------------------|-------|-----------|---------|
| Główna decyzja tury      | ✅✅  | ⚠️        | ⚠️      |
| Rozwój Dyscypliny        | ✅    | ⚠️        | ⚠️      |
| Budowa technologii       | ✅    | ⚠️ (pomoc)| ⚠️ (produkcja)|
| Negocjacje z krajami     | ⚠️    | ✅✅      | ❌      |
| Sojusze/traktaty         | ⚠️    | ✅✅      | ❌      |
| Wywiad                   | ⚠️    | ✅✅      | ⚠️      |
| Produkcja zasobów        | ⚠️    | ❌        | ✅✅    |
| Atak militarny           | ✅ (zgoda)| ⚠️ (dyplomacja)| ✅✅ (plan)|
| Obrona kraju             | ⚠️    | ⚠️        | ✅✅    |

**Legenda:**
- ✅✅ = Główna odpowiedzialność
- ✅ = Decyduje
- ⚠️ = Wspiera/doradza
- ❌ = Nie odpowiada

---

## 🎯 Porady dla Graczy

### Dla Lidera:
- Słuchaj rad Dyplomaty i Generała - oni mają więcej informacji
- Nie nadużywaj veta - to obniża morale
- Myśl długoterminowo - nie tylko o tej turze

### Dla Dyplomaty:
- Rozmawiaj z innymi Dyplomatami JUŻ w Fazie Planowania
- Wywiad jest potężnym narzędziem - używaj go strategicznie
- Twoje relacje z innymi krajami mogą wygrać (lub przegrać) grę

### Dla Generała:
- Produkcja to fundament - bez zasobów kraj nie funkcjonuje
- Obrona jest często ważniejsza niż atak
- Współpracuj z Dyplomatą - wojna to nie tylko armia, to też dyplomacja

---

## 📝 Status Dokumentu

**Wersja:** 0.1 (Draft)
**Status:** 🔄 W toku
**Ostatnia aktualizacja:** 2026-01-03

**Decyzje do podjęcia:**
- [ ] Czy mechanika Edyktu Lidera jest zbalansowana?
- [ ] Czy wywiad jest zbyt potężny? (modyfikator +20%)
- [ ] Czy Generał ma wystarczająco dużo do roboty?

---

**Następny krok:** Feedback od Maro + dopracowanie mechanik specjalnych akcji
