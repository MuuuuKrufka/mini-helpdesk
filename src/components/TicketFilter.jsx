function TicketFilter({szukajOpisTytul, setSzukajOpisTytul, szukajStatus, setSzukajStatus}){
    return(
        <div>
            <p className="section-title">Filtruj zgłoszenia:</p>
            <form>
                <div className="form-row filter-row">
                    <div className="form-field">
                        <label>Według tekstu:</label>
                        <input name="tytul" placeholder="Wpisz tytuł lub opis..." value={szukajOpisTytul} onChange={(e) => setSzukajOpisTytul(e.target.value)}/>
                    </div>

                    <div className="form-field">
                        <label>Status:</label>
                        <select name="status" value={szukajStatus} onChange={(e) => setSzukajStatus(e.target.value)}>
                            <option value="wszystkie">Wszystkie</option>
                            <option value="Nowe">Nowe</option>
                            <option value="W Trakcie">W Trakcie</option>
                            <option value="Zakończony">Zakończony</option>
                        </select>
                    </div>

                    <button type="button" onClick={() => {setSzukajOpisTytul(""); setSzukajStatus("wszystkie");}}>
                        Wyczyść
                    </button>
                </div>
            </form>
        </div>
    );
}

export default TicketFilter;