import { useState, useEffect } from 'react';
import './App.css';
import TicketList from './components/TicketList';
import TicketForm from './components/TicketForm';
import TicketFilter from './components/TicketFilter';
import TicketEditForm from './components/TicketEditForm';


function App() {
  const przykladoweZgloszenia = [
    {"id": 1, "tytul": "Problem z komputerem.", "opis": "Laptop się nie ładuje.", "kategoria": "Komputer", "status": "Nowe", "piorytet": "Niski"},
    {"id": 2, "tytul": "Drukarka nie działa!", "opis": "Drukarka nie chce drukować!", "kategoria": "Drukarka", "status": "Nowe", "piorytet": "Normalny"},
    {"id": 3, "tytul": "Brak kabli.", "opis": "Zabrakło kabli.", "kategoria": "Inne", "status": "Nowe", "piorytet": "Wysoki"},
    {"id": 4, "tytul": "Uszkodzona myszka.", "opis": "Myszka podwójnie klika.", "kategoria": "Komputer", "status": "Nowe", "piorytet": "Niski"},
    {"id": 5, "tytul": "Drukarka nie ma papieru", "opis": "Skończył się papier.", "kategoria": "Drukarka", "status": "Nowe", "piorytet": "Niski"}
  ];

  const [zgloszenia, setZgloszenia] = useState(() => {
    const zapisane = localStorage.getItem("zgloszenia");

    return zapisane !== null ? JSON.parse(zapisane) : przykladoweZgloszenia;
  })

  const [zapisz, setZapisz] = useState(false);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    if(zapisz){
      localStorage.setItem("zgloszenia", JSON.stringify(zgloszenia));
    }
  }, [zapisz]);

  useEffect(() => {
    if(reset){
      setZgloszenia(przykladoweZgloszenia);
      localStorage.setItem("zgloszenia", JSON.stringify(przykladoweZgloszenia));
    }
  }, [reset]);

  const [szukajOpisTytul, setSzukajOpisTytul] = useState("");
  const [szukajStatus, setSzukajStatus] = useState("wszystkie");
  const [szukajPiorytet, setSzukajPiorytet] = useState("wszystkie");
  const [edytowanie, setEdytowanie] = useState(false);
  const [edytowanieId, setEdytowanieId] = useState("");

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
    const piorytet = formData.get("piorytet");
    let id = 1;
    if(zgloszenia.length > 0){
      id = zgloszenia.at(-1).id + 1;
    }
    
    if(tytul.trim().length > 2 && tytul.trim().length < 81 && opis.length < 501){
      const noweZgloszenie = {"id": id, "tytul": tytul, "opis": opis, "kategoria": kategoria, "status": "Nowe", "piorytet": piorytet}
      setZgloszenia([...zgloszenia, noweZgloszenie]);
    }else{
      alert("Tytuł powinienn mieć od 3 do 80 znaków! A opis do maksymalnie 500!!");
    }

    e.target.reset();
  }

  const edytujZgloszenie = (e) =>{
    e.preventDefault();

    const formData = new FormData(e.target);
    const tytul = formData.get("tytul");
    const opis = formData.get("opis");
    const kategoria = formData.get("kategoria");
    const piorytet = formData.get("piorytet");

    if(tytul.trim().length > 2 && tytul.trim().length < 81 && opis.length < 501){
      if(confirm("Czy na pewno chcesz edytować zgłoszenie?")){
        setZgloszenia((zgloszenia) =>
        zgloszenia.map((item) => 
        item.id === Number(edytowanieId) ? {
          ...item, tytul: tytul, opis: opis, kategoria: kategoria, piorytet: piorytet
        } : item))
      }
    } else {
      alert("Tytuł powinienn mieć od 3 do 80 znaków! A opis do maksymalnie 500!!");
    }

  }

  const wszystkieZgloszenia = zgloszenia.length;
  const noweZgloszenia = zgloszenia.filter((item) => item.status === "Nowe").length;
  const wTrakcieZgloszenia = zgloszenia.filter((item) => item.status === "W Trakcie").length;
  const zakonczoneZgloszenia = zgloszenia.filter((item) => item.status === "Zakończony").length;

  const filtrujTablica = zgloszenia.filter((item) => {
    const tekst = szukajOpisTytul.toLowerCase();

    const pasujeTytulCzyOpis = item.tytul.toLowerCase().includes(tekst) || item.opis.toLowerCase().includes(tekst);
    const pasujeStatus = szukajStatus === "wszystkie" || item.status === szukajStatus;
    const pasujePiorytet = szukajPiorytet === "wszystkie" || item.piorytet === szukajPiorytet;

    return pasujeTytulCzyOpis && pasujeStatus && pasujePiorytet;
  });

  return (
    <>
      <h1>MINI HELPDESK</h1>

      <div className='liczniki'>
        <div className='licznik'>
          <h4>Wszystkie zgłoszenia:</h4>
          <p>{wszystkieZgloszenia}</p>
        </div>
        <div className='licznik'>
          <h4>Nowe zgłoszenia:</h4>
          <p>{noweZgloszenia}</p>
        </div>
        <div className='licznik'>
          <h4>Zgłoszenia w trakcie:</h4>
          <p>{wTrakcieZgloszenia}</p>
        </div>
        <div className='licznik'>
          <h4>Zakończone zgłoszenia:</h4>
          <p>{zakonczoneZgloszenia}</p>
        </div>
      </div>

      <div className='menu'>
        <label htmlFor='edycja' className='edycja'>
          Tryb Edycji <input type='checkbox' name='edycja' checked={edytowanie} onChange={(e) => {setEdytowanie(e.target.checked); setEdytowanieId("");}}/>
        </label>
        <button onClick={() => setZapisz(true)}>Zapisz liste</button>
        <button onClick={() => {if(confirm("Czy na pewno chcesz zresetować listę?")){setReset(true);}}}>Resetuj liste</button>
      </div>

      {edytowanie ? (
        <>
          <select value={edytowanieId} className='edycja-select' onChange={(e) => setEdytowanieId(e.target.value)}>
            <option value="">Wybierz zgłoszenie do edycji</option>
              {zgloszenia.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.id} - {item.tytul}
                </option>
              ))}
          </select>
                
          <TicketEditForm edytujZgloszenie={edytujZgloszenie} edytowaneZgloszenie={zgloszenia.find((item) => item.id === Number(edytowanieId))}></TicketEditForm>
        </>
      ) : <TicketForm dodajZgloszenie={dodajZgloszenie}></TicketForm>}
      

      <TicketFilter szukajOpisTytul={szukajOpisTytul} setSzukajOpisTytul={setSzukajOpisTytul} szukajStatus={szukajStatus} setSzukajStatus={setSzukajStatus}
      szukajPiorytet={szukajPiorytet} setSzukajPiorytet={setSzukajPiorytet}></TicketFilter>

      <TicketList lista={filtrujTablica} usun={usun} zmienStatus={zmienStatus}/>
    </>
  )
}

export default App
