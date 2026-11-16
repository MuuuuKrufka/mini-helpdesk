# Mini-Helpdesk

Aplikacja Mini-Helpdesk służy do zapisywania problemów ze sprzętem. Ułatwia śledzenie obenych błedów oraz progresu ich rozwiązania.

# Funkcje

Aplikacja aktualnie zawiera funkcje:

- Dodawania nowych zgłoszeń.
- Edycji statusu dodanych zgłoszeń.
- Wyświetlania zgłoszeń.
- Filtowania zgłoszeć według teksu w tytule i opisie, statusie lub priorytecie.
- Usuwania zgłoszeń z listy.
- Zapisywanie listy.
- Resetowanie listy do przykładowych danych.
- Ustawianie priorytetu zgłoszeń.

# Ograniczenia

Ograniczenia aplikacji:

- Tytuł od 3 do 80 znaków.
- Opis do 500.

# Jak uruchomić

1. Pobierz projekt na swój komputer.
2. Otwórz terminal w folderze projektu.
3. Zainstaluj zależności komendą: npm install
4. Uruchom aplikacje komendą: npm run dev
5. Otwórz adres wyświetlony w terminalu.

# Reszta

Użyta wersja Node.js : v24.21.0
Wersja npm: 11.19.0
npm install
npm run dev
npm run lint

> mini-helpdesk@0.0.0 lint
> oxlint


  ⚠ react(set-state-in-effect): Calling setState synchronously within an effect can trigger cascading renders
    ╭─[src/App.jsx:58:7]
 55 │ 
 56 │   useEffect(() => {
    ·   ────┬────
    ·       ╰── This is the containing effect
 57 │     if(reset){
 58 │       setZgloszenia(przykladoweZgloszenia);
    ·       ──────┬──────
    ·             ╰── Avoid calling setState() directly within an effect
 59 │       localStorage.setItem("zgloszenia", JSON.stringify(przykladoweZgloszenia));
    ╰────
  help: Effects should synchronize React with external systems. Calling setState synchronously inside an effect starts another render and is usually unnecessary. Derive the value during render, initialize state directly, or update it from the event that caused the change. Use an effect only when synchronizing with an external system.
  note: React Compiler skipped optimizing this component or hook. Additional guidance: https://react.dev/reference/eslint-plugin-react-hooks/lints/set-state-in-effect

  ⚠ react-hooks(exhaustive-deps): React Hook useEffect has a missing dependency: 'zgloszenia'
    ╭─[src/App.jsx:54:6]
 51 │     if(zapisz){
 52 │       localStorage.setItem("zgloszenia", JSON.stringify(zgloszenia));
    ·                                                         ─────┬────
    ·                                                              ╰── useEffect uses `zgloszenia` here
 53 │     }
 54 │   }, [zapisz]);
    ·      ────────
 55 │ 
    ╰────
  help: Either include it or remove the dependency array.

  ⚠ react-hooks(exhaustive-deps): React Hook useEffect has a missing dependency: 'przykladoweZgloszenia'
    ╭─[src/App.jsx:61:6]
 57 │     if(reset){
 58 │       setZgloszenia(przykladoweZgloszenia);
    ·                     ──────────┬──────────
    ·                               ╰── useEffect uses `przykladoweZgloszenia` here
 59 │       localStorage.setItem("zgloszenia", JSON.stringify(przykladoweZgloszenia));
 60 │     }
 61 │   }, [reset]);
    ·      ───────
 62 │ 
    ╰────
  help: Either include it or remove the dependency array.

Found 3 warnings and 0 errors.
Finished in 41ms on 7 files with 104 rules using 16 threads.

npm run build

> mini-helpdesk@0.0.0 build
> vite build

vite v8.3.5 building client environment for production...
✓ 21 modules transformed.
computing gzip size...
dist/index.html                   0.47 kB │ gzip:  0.30 kB
dist/assets/index-DWLLF-Zo.css    4.21 kB │ gzip:  1.51 kB
dist/assets/index-D6zTPcYw.js   229.39 kB │ gzip: 70.87 kB

✓ built in 631ms