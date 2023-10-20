
const apiUrl = "https://api.quicksell.co/v1/internal/frontend-assignment";
export const fetchTickets = () => {
    return new Promise(async (resolve, reject) => {
        let statusTickets = {};
        let userTickets = {};
        let priorityTickets = {};
        let userHeader = {};
        let statusHeader = {};
        let priorityHeader = {};
        
        try {
            let response = await fetch(apiUrl);
            const data = await response.json();
            const tickets = data.tickets
            const users = data.users;
            tickets.forEach(ticket => {
                statusTickets[ticket.status] = [];
                userTickets[ticket.userId] = [];
                priorityTickets[ticket.priority] = [];
            });
            users.forEach(user => {
                userHeader[user.id] = user;
            })
            tickets.forEach(ticket => {
                statusTickets[ticket.status].push(ticket);
                userTickets[ticket.userId].push(ticket);
                priorityTickets[ticket.priority].push(ticket);
                statusHeader[ticket.status] = { name: ticket.status }
                priorityHeader[ticket.priority] = { name: priorityNameMap[ticket.priority] }
            })
            resolve({ statusTickets, userTickets, priorityTickets, statusHeader, userHeader, priorityHeader })
        } catch (e) {
            reject(e)
        }
    })
}


const priorityNameMap = {
    0: 'No Priority',
    1: 'Low',
    2: 'Medium',
    3: 'High',
    4: 'Urgent'
}