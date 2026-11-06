function TicketForm({dodajZgloszenie}){
    return(
        <div>
            <p className="section-title">Dodaj zgłoszenie:</p>

            <form method="post" onSubmit={dodajZgloszenie}>
                <div className="form-row">
                    <div className="form-field">
                        <label>Tytuł zgłoszenia:</label>
                        <input name="tytul" placeholder="Wpisz tytuł..." />
                    </div>

                    <div className="form-field">
                        <label>Opis zgłoszenia:</label>
                        <input name="opis" placeholder="Wpisz opis..." />
                    </div>

                    <div className="form-field">
                        <label>Wybierz kategorię:</label>
                        <select name="kategoria">
                            <option value="Komputer">Komputer</option>
                            <option value="Drukarka">Drukarka</option>
                            <option value="Inne">Inne</option>
                        </select>
                    </div>

                    <button type="reset">Wyczyść formularz</button>
                    <button type="submit">Dodaj zgłoszenie</button>
                </div>
            </form>
        </div>
    );
}

export default TicketForm;