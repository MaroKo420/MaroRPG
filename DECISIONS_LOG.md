# Rejestr decyzji MaroRPG

Ten plik zbiera decyzje projektowe, ich status i miejsca, których dotyczą. Ma pomagać odróżniać ustalenia od pomysłów oraz wychwytywać sprzeczności między dokumentami.

## Jak korzystać z rejestru

* **Zatwierdzone**: decyzja jest przyjęta i stanowi punkt odniesienia.
* **Robocze**: rozwiązanie jest opisane, ale może się jeszcze zmienić.
* **Do rozstrzygnięcia**: dokumentacja nie daje pewnej odpowiedzi albo zawiera rozbieżności.

Przy zmianie decyzji należy zaktualizować dokument źródłowy i sprawdzić wskazane konsekwencje. Rejestr nie zastępuje zasad gry. W razie konfliktu między dokumentami konflikt należy jawnie rozstrzygnąć, a nie wybierać po cichu jedną wersję.

## Decyzje i kwestie do sprawdzenia

| Temat | Status | Obecny zapis | Źródło | Konsekwencje / następny krok |
|---|---|---|---|---|
| Zasoby podstawowe | Robocze | Dokument mechaniki opisuje MAT, EN, PB i LUD oraz rozdziela zasoby, infrastrukturę i technologię na różne warstwy. | `02_Mechanics/resources.md` | Sprawdzić, czy wszystkie akcje i materiały gracza używają tych samych nazw oraz definicji. |
| Struktura tury i podstawowe mechaniki | Do rozstrzygnięcia | `PLAN.md` oznacza część podstawowych mechanik jako ukończoną, ale jednocześnie etap 1 nadal figuruje jako w toku. | `PLAN.md`, `README.md` | Uzgodnić, co dokładnie jest ukończone i która informacja o etapie projektu jest aktualna. |
| Dyplomacja | Robocze | Istnieje rozbudowany szkic v0.5 obejmujący traktaty i negocjacje. | `03_Interactions/diplomacy.md` | Przed uznaniem za gotowe sprawdzić spójność z konfliktem, handlem i przebiegiem tury. |
| Konflikty | Robocze | Istnieje rozbudowany szkic v0.5 uwzględniający dostęp geograficzny, zaskoczenie i wzór siły konfliktu. | `03_Interactions/conflicts.md` | Zweryfikować wzór, przypadki brzegowe i powiązania z zasobami oraz dyplomacją. |
| Handel | Do rozstrzygnięcia | Dokument jest szkieletem i wymaga opracowania. | `03_Interactions/trade.md` | Nie traktować handlu jako kompletnej, przetestowanej mechaniki. |
| Szpiegostwo | Do rozstrzygnięcia | Dokument jest szkieletem i wymaga opracowania. | `03_Interactions/espionage.md` | Ustalić zakres akcji, koszty, ryzyko wykrycia i skutki. |
| Drzewko technologii | Do rozstrzygnięcia | Dokument zawiera głównie szkielet i przykładowe poziomy. | `04_Progression/tech_tree.md` | Uzgodnić warunki rozwoju oraz powiązania z zasobami i dyscyplinami. |
| Państwa i dyscypliny startowe | Do rozstrzygnięcia | Szablon państwa i dokument dyscyplin startowych wymagają uzupełnienia. | `05_Nations/nation_template.md`, `05_Nations/starting_disciplines.md` | Sprawdzić kompletność i równowagę wszystkich państw przed testem. |
| Instrukcja gracza i pomoce | Do rozstrzygnięcia | Instrukcja i pomoce gracza są szkieletami. | `07_Player_Materials/rulebook.md`, `07_Player_Materials/player_aids.md` | Przygotować materiały dopiero na podstawie uzgodnionych zasad, aby nie utrwalać sprzeczności. |
| Testy | Do rozstrzygnięcia | W pliku sesji testowych nie ma jeszcze opisanych sesji. | `08_Playtesting/test_sessions.md` | Zapisywać scenariusz, przebieg, problemy, zmiany i wynik kolejnego testu. |
| Dokumenty przewodnika Guru | Do sprawdzenia | Wcześniejsze sprawdzenie nie znalazło plików pod ścieżkami `06_Guru/arbiter_guide.md`, `06_Guru/news_reporting.md` i `06_Guru/evaluation_system.md`. | `06_Guru/` | Potwierdzić aktualne nazwy i lokalizacje plików; nie zakładać, że materiały istnieją. |

## Zasada aktualizacji

Nowy wpis dodawaj, gdy decyzja wpływa na więcej niż jeden dokument, zmienia regułę gry albo zamyka wcześniej otwartą kwestię. Po zmianie statusu zaktualizuj również dokument źródłowy i powiązane materiały. Nie oznaczaj mechaniki jako ukończonej wyłącznie dlatego, że istnieje jej szkic.
