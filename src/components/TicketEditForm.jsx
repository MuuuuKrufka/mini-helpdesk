function TicketEditForm({edytujZgloszenie, edytowaneZgloszenie}){
    if (!edytowaneZgloszenie) {
        return null;
    }

    return(
        <div>
            <p className="section-title">Edytuj zgłoszenie:</p>

            <form method="post" onSubmit={edytujZgloszenie}>
                <div className="form-row">
                    <div className="form-field">
                        <label>Tytuł zgłoszenia:</label>
                        <input name="tytul" defaultValue={edytowaneZgloszenie.tytul} />
                    </div>

                    <div className="form-field">
                        <label>Opis zgłoszenia:</label>
                        <input name="opis" defaultValue={edytowaneZgloszenie.opis}/>
                    </div>

                    <div className="form-field">
                        <label>Wybierz kategorię:</label>
                        <select name="kategoria" defaultValue={edytowaneZgloszenie.kategoria}>
                            <option value="Komputer">Komputer</option>
                            <option value="Drukarka">Drukarka</option>
                            <option value="Inne">Inne</option>
                        </select>
                    </div>

                    <button type="submit">Edytuj zgłoszenie</button>
                </div>
            </form>
        </div>
    );
}

export default TicketEditForm;