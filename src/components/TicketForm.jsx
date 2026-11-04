function TicketForm({dodajZgloszenie}){
    return(
        <div>
            <div>
                <p style={{display: "flex", justifyContent: "left", marginLeft: "41px", fontWeight: "bold", fontSize: "22px"}}>Dodaj zgłoszenie:</p>
                <hr style={{width: "220px", marginLeft: "22px"}}></hr>
            </div>
            <div style={{ display: "flex", justifyContent: "center", margin: "20px"}}>
                <form method="post" onSubmit={dodajZgloszenie}>
                    <div style={{display: "flex", flexDirection: "row", gap: "20px"}}>
                        <div style={{display: "flex", flexDirection: "column", gap: "5px"}}>
                            <label style={{textAlign: "left"}}>Tytuł zgłoszenia:</label>
                            <input name="tytul" placeholder="Wpisz tytuł..."></input>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", gap: "5px"}}>
                            <label style={{textAlign: "left"}}>Opis zgłoszenia:</label>
                            <input name="opis" placeholder="Wpisz opis..."></input>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", gap: "5px"}}>
                            <label style={{textAlign: "left"}}>Wybierz kategorie:</label>
                            <select name="kategoria">
                                <option value="komputer">Komputer</option>
                                <option value="drukarka">Drukarka</option>
                                <option value="inne">Inne</option>
                            </select>
                        </div>
                        <button type="reset">Wyczyść formularz</button>
                        <button type="submit">Dodaj zgłoszenie</button>
                    </div>
                </form>
            </div>
        </div>

        
    );
}

export default TicketForm;