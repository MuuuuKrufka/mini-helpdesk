function TicketList({lista}){
    const listaTicketow = lista.map(ticket => 
        // <li key={ticket.id}>
        //     {ticket.tytul} {ticket.opis}
        // </li>
        <tr>
            <td>{ticket.id}</td><td>{ticket.tytul}</td><td>{ticket.opis}</td><td>{ticket.kategoria}</td><td>{ticket.status}</td>
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