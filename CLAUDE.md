# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Projekt: MaroRPG - Nation-Building Strategy Game

Gra RPG na papierze, gdzie gracze rozwijają całe **nacje** (kraje), nie pojedyncze postacie. Łączy strategię ekonomiczną, dyplomację i futurystyczną naukę w systemie opartym na porach roku.

## Wymagany Workflow Pracy

### 1. ZAWSZE wczytaj pełny kontekst przed pracą

Projekt jest na tyle mały, że **MUSISZ** wczytać wszystkie pliki do kontekstu przed przystąpieniem do jakiejkolwiek pracy. Pozwala to na:
- Spójność z istniejącymi ustaleniami
- Unikanie duplikacji lub sprzeczności
- Świadome decyzje projektowe

**Pliki do wczytania (w kolejności):**
```
# Główne pliki
README.md, PLAN.md, INFOGRAPHIC.md, AKTUALIZACJA_2026-01-07.md

# Core Design
01_Core_Design/vision.md, pillars.md, win_conditions.md

# Mechaniki (kluczowe!)
02_Mechanics/turn_structure.md, resources.md, roles.md, disciplines.md

# Interakcje (szkielety)
03_Interactions/diplomacy.md, trade.md, conflicts.md, espionage.md

# Progression (szkielety)
04_Progression/tech_tree.md, futuristic_elements.md, discipline_evolution.md

# Nations (szkielety)
05_Nations/nation_template.md, starting_disciplines.md

# Arbiter (szkielety)
06_Arbiter/arbiter_guide.md, evaluation_system.md, news_reporting.md

# Player Materials (szkielety)
07_Player_Materials/rulebook.md, player_aids.md

# Playtesting (szkielety)
08_Playtesting/test_sessions.md, feedback.md
```

### 2. Sprawdź status dokumentów

Dokumenty mają oznaczenia statusu:
- **✅ KOMPLETNE** - gotowe do użycia (np. resources.md)
- **🔄 W TOKU** - rozbudowywane aktywnie
- **⚠️ SZKIELET** - placeholder do wypełnienia
- **❓ WYMAGA DECYZJI** - czeka na decyzję projektową

### 3. Aktualizuj PLAN.md po zmianach

Po każdej istotnej zmianie zaktualizuj checklisty w PLAN.md.

## Architektura Projektu

### Struktura 8 Modułów

```
01_Core_Design/     ← Fundament: wizja, filary, warunki zwycięstwa
02_Mechanics/       ← Mechaniki: tury, zasoby, role, dyscypliny
03_Interactions/    ← Interakcje: dyplomacja, handel, wojny, wywiad
04_Progression/     ← Rozwój: technologie, futurystyka, ewolucja
05_Nations/         ← Definicje 5 krajów
06_Arbiter/         ← Materiały dla Arbitra (MG)
07_Player_Materials/← Materiały dla graczy
08_Playtesting/     ← Testy i feedback
```

### Kluczowe Koncepty Gry

**Gracze:** 5 krajów × 3 role (Lider, Dyplomata, Generał) + 1 Arbiter = 16 osób

**Tury:** 1 tura = 1 pora roku, 4 fazy (planowanie → zgłoszenie → rozstrzygnięcie → newsy)

**5 Dyscyplin:** MILITARIA, CYWILIZACJA, SPOŁECZEŃSTWO, NAUKA, ŚRODOWISKO
- Każdy kraj: 2 problemy + 3 przewagi (lub 2+2+1 neutralna)
- Ewolucja: Lvl 1→2→3→4, degradacja przy zaniedbaniu

**4 Zasoby:** MAT (materiały), EN (energia), PB (punkty badawcze), LUD (ludność)

**5 Ścieżek Zwycięstwa:** (AKTUALIZACJA_2026-01-07.md)
1. Hegemonia Naukowa
2. Potęga Ekonomiczna
3. Imperium Militarne
4. Federacja Pokoju
5. Przetrwanie

### Dokumenty Priorytetowe (kompletne/rozbudowane)

1. `02_Mechanics/resources.md` - pełny system zasobów
2. `02_Mechanics/disciplines.md` - system dyscyplin z ewolucją
3. `02_Mechanics/turn_structure.md` - 4 fazy tury
4. `01_Core_Design/pillars.md` - 5 filarów projektowych
5. `INFOGRAPHIC.md` - wizualna mapa całej gry

## Wizualizacja i Diagramy

### Zasada: Wizualizuj koncepty podczas pracy

Przy projektowaniu gry RPG kluczowe jest **wizualne przedstawianie** złożonych mechanik i zależności. Pozwala to:
- Szybciej wychwycić problemy logiczne i niespójności
- Ułatwić zrozumienie skomplikowanych systemów
- Komunikować idee w sposób przystępny
- Testować balans "na papierze" przed playtestingiem

### Co wizualizować:

**Diagramy przepływu (flowcharts):**
- Struktura tury (4 fazy)
- Proces decyzyjny Arbitra
- Ścieżki ewolucji/degradacji Dyscyplin

**Tabele porównawcze:**
- Balans krajów (zasoby startowe, bonusy)
- Koszty vs efekty akcji
- Modyfikatory Koła Fortuny

**Drzewa/grafy:**
- Drzewo technologii (Tier 1→4)
- Zależności między Dyscyplinami
- Ścieżki do zwycięstwa

**Mapy i schematy:**
- Relacje między krajami
- Struktura grupy (Lider/Dyplomata/Generał)
- Flow informacji (gracze → Arbiter → newsy)

### Format wizualizacji:

Używaj **ASCII art** i **markdown tables** w plikach .md - przykład w `INFOGRAPHIC.md`.

```
Przykład diagramu ASCII:
┌─────────┐     ┌─────────┐
│ ELEMENT │────►│ ELEMENT │
└─────────┘     └─────────┘
```

### Kiedy tworzyć wizualizacje:

1. **Nowa mechanika** - zanim ją opiszesz słownie, narysuj schemat
2. **Problem z balansem** - wizualizuj liczby w tabeli
3. **Złożona zależność** - diagram > akapit tekstu
4. **Wyjaśnianie konceptu** - "pokaż, nie mów"

## Decyzje Projektowe w Toku

1. **Drzewo technologii** - szczegółowe Tier 1-4
2. **Definicje 5 krajów** - unikalne profile
3. **Sekcja świata** - opis "Futurystycznej Ziemi"
4. **Sekrety Arbitra** - co MG wie, czego gracze nie wiedzą
