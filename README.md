# Mini-Helpdesk

Aplikacja Mini-Helpdesk służy do zapisywania problemów ze sprzętem. Ułatwia śledzenie obenych błedów oraz progresu ich rozwiązania.

# Funkcje

Aplikacja aktualnie zawiera funkcje:

- Dodawania nowych zgłoszeń.
- Edycji statusu dodanych zgłoszeń.
- Wyświetlania zgłoszeń.
- Filtowania zgłoszeć według teksu w tytule i opisie lub statusie.
- Usuwania zgłoszeń z listy.

# Ograniczenia

Ograniczenia aplikacji:

- Tytuł od 3 do 80 znaków
- Opis do 500
- Dane nie przetrwają odświeżenia

# Reszta

Użyta wersja Node.js : v24.21.0
Wersja npm: 11.19.0
npm install
npm run dev
npm run lint     

> mini-helpdesk@0.0.0 lint
> oxlint

Found 0 warnings and 0 errors.
Finished in 13ms on 6 files with 104 rules using 16 threads.

npm run build

> mini-helpdesk@0.0.0 build
> vite build

vite v8.3.5 building client environment for production...
✓ 20 modules transformed.
computing gzip size...
dist/index.html                   0.47 kB │ gzip:  0.30 kB
dist/assets/index-Cx_F95Mo.css    3.42 kB │ gzip:  1.34 kB
dist/assets/index-DU9TWsjq.js   224.20 kB │ gzip: 70.00 kB

✓ built in 109ms