import { useState } from 'react'
import TicketList from './components/TicketList';
import TicketForm from './components/TicketForm';
import TicketFilter from './components/TicketFilter';

function App() {
  const [zgloszenia, setZgloszenia] = useState([
    {"id": 1, "tytul": "Problem z komputerem.", "opis": "Laptop się nie ładuje.", "kategoria": "Komputer", "status": "Nowe"},
    {"id": 2, "tytul": "Drukarka nie działa!", "opis": "Drukarka nie chce drukować!", "kategoria": "Drukarka", "status": "Nowe"},
    {"id": 3, "tytul": "Brak kabli.", "opis": "Zabrakło kabli.", "kategoria": "Inne", "status": "Nowe"},
    {"id": 4, "tytul": "Uszkodzona myszka.", "opis": "Myszka podwójnie klika.", "kategoria": "Komputer", "status": "Nowe"},
    {"id": 5, "tytul": "Drukarka nie ma papieru", "opis": "Skończył się papier.", "kategoria": "Drukarka", "status": "Nowe"}
  ]);

  const [szukajOpisTytul, setSzukajOpisTytul] = useState("");
  const [szukajStatus, setSzukajStatus] = useState("wszystkie");

  const usun = (id) =>{  
    if(confirm("Czy napewno chcesz usunąć zdarzenie?") == true){
      setZgloszenia((zgloszenia) => zgloszenia.filter((item) => item.id !== id));
    }
  }

  const zmienStatus = (id, nowyStatus) =>{
    setZgloszenia((zgloszenia) => zgloszenia.map((item) => item.id == id ? {...item, status: nowyStatus} : item));
  }

  const dodajZgloszenie = (e) =>{
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const tytul = formData.get("tytul");
    const opis = formData.get("opis");
    const kategoria = formData.get("kategoria");
    let id = 1;
    if(zgloszenia.length > 0){
      id = zgloszenia.at(-1).id + 1;
    }
    
    if(tytul.length > 2 && tytul.length < 81 && opis.length < 501){
      const noweZgloszenie = {"id": id, "tytul": tytul, "opis": opis, "kategoria": kategoria, "status": "Nowe"}
      setZgloszenia([...zgloszenia, noweZgloszenie]);
    }else{
      alert("Tytuł powinienn mieć od 3 do 80 znaków! A opis do maksymalnie 500!!");
    }

    e.target.reset();
  }

  const filtrujTablica = zgloszenia.filter((item) => {
    const tekst = szukajOpisTytul.toLowerCase();

    const pasujeTytulCzyOpis = item.tytul.toLowerCase().includes(tekst) || item.opis.toLowerCase().includes(tekst);
    const pasujeStatus = szukajStatus === "wszystkie" || item.status === szukajStatus;

    return pasujeTytulCzyOpis && pasujeStatus;
  });

  return (
    <>
      <h1>MINI HELPDESK</h1>

      <TicketForm dodajZgloszenie={dodajZgloszenie}></TicketForm>

      <TicketFilter szukajOpisTytul={szukajOpisTytul} setSzukajOpisTytul={setSzukajOpisTytul} szukajStatus={szukajStatus} setSzukajStatus={setSzukajStatus}></TicketFilter>

      <TicketList lista={filtrujTablica} usun={usun} zmienStatus={zmienStatus}/>
    </>
  )
}

export default App
