import { useState } from 'react'
import './App.css'
import TicketList from './components/TicketList';

function App() {
  const [zgloszenia, setZgloszenia] = useState([
    {"id": "1", "tytul": "Problem z komputerem.", "opis": "Laptop się nie ładuje.", "kategoria": "Komputer", "status": "Nowe"},
    {"id": "2", "tytul": "Drukarka nie działa!", "opis": "Drukarka nie chce drukować!", "kategoria": "Drukarka", "status": "Nowe"},
    {"id": "3", "tytul": "Brak kabli.", "opis": "Zabrakło kabli.", "kategoria": "Inne", "status": "Nowe"},
    {"id": "4", "tytul": "Uszkodzona myszka.", "opis": "Myszka podwójnie klika.", "kategoria": "Komputer", "status": "Nowe"},
    {"id": "5", "tytul": "Drukarka nie ma papieru", "opis": "Skończył się papier.", "kategoria": "Drukarka", "status": "Nowe"}
  ]);

  const usun = (id) =>{  
    if(confirm("Czy napewno chcesz usunąć zdarzenie?") == true){
      setZgloszenia((zgloszenia) => zgloszenia.filter((item) => item.id !== id));
    }
  }

  const zmienStatus = (id, nowyStatus) =>{
    setZgloszenia((zgloszenia) => zgloszenia.map((item) => item.id == id ? {...item, status: nowyStatus} : item));
  }

  return (
    <>
      <h1>MINI HELPDESK</h1>

      <TicketList lista={zgloszenia} usun={usun} zmienStatus={zmienStatus}/>
    </>
  )
}

export default App
