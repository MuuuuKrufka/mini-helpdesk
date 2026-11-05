function TicketList({lista, usun, zmienStatus}){
    const listaTicketow = lista.map(ticket => 
        // <li key={ticket.id}>
        //     {ticket.tytul} {ticket.opis}
        // </li>
        <tr key={ticket.id}>
            <td>{ticket.id}</td><td>{ticket.tytul}</td><td>{ticket.opis}</td><td>{ticket.kategoria}</td>
            <td>
                <select value={ticket.status} onChange={(e) => zmienStatus(ticket.id, e.target.value)}>
                    <option value="Nowe">Nowe</option>
                    <option value="W Trakcie">W Trakcie</option>
                    <option value="Zakończony">Zakończony</option>
                </select>
            </td>
            <td><button onClick={() => usun(ticket.id)}>Usuń</button></td>
        </tr>
    );

    return(
        // <ul style={{listStyle: "none"}}>{listaTicketow}</ul>
        <table>
            <tr>
                <th>ID</th><th>Tytuł</th><th>Opis</th><th>Kategoria</th><th>Status</th>
            </tr>
            {listaTicketow}
        </table>
    );
}

export default TicketList;