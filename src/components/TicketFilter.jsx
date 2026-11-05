function TicketFilter({szukajOpisTytul, setSzukajOpisTytul, szukajStatus, setSzukajStatus}){
    return(
        <div>
            <div>
                <p style={{display: "flex", justifyContent: "left", marginLeft: "41px", fontWeight: "bold", fontSize: "22px"}}>Filtruj zgłoszenia:</p>
                <hr style={{width: "220px", marginLeft: "22px"}}></hr>
            </div>
            <div style={{ display: "flex", justifyContent: "center", margin: "20px"}}>
                <form method="post">
                    <div style={{display: "flex", flexDirection: "row", gap: "20px"}}>
                        <div style={{display: "flex", flexDirection: "column", gap: "5px"}}>
                            <label style={{textAlign: "left"}}>Według tekstu:</label>
                            <input name="tytul" placeholder="Wpisz tytuł lub opis..." value={szukajOpisTytul} onChange={(e) => setSzukajOpisTytul(e.target.value)}></input>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", gap: "5px"}}>
                            <label style={{textAlign: "left"}}>status:</label>
                            <select name="status" value={szukajStatus} onChange={(e) => setSzukajStatus(e.target.value)}>
                                <option value="wszystkie">Wszystkie</option>
                                <option value="Nowe">Nowe</option>
                                <option value="W Trakcie">W Trakcie</option>
                                <option value="Zakończony">Zakończony</option>
                            </select>
                        </div>
                        <button type="button" onClick={() => {setSzukajOpisTytul(""); setSzukajStatus("wszystkie")}}>Wyczyść</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TicketFilter;