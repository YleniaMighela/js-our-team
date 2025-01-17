// Dato un array di oggetti rappresentate un team di un’azienda, creare una pagina dedicata in cui mostrare una card per ciascun componente.

//  array contenente oggetti che rappresenta un team di un'azienda attraverso proprietà diverse
const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];
// console.log(teamMembers);



// creo un ciclo for per estrapolare dall'array ogni singolo oggetto

for(let i = 0; i < teamMembers.length; i++) {
  
    //  creo una variabile per ricavare la posizione dell'oggetto nell'array
    
    let membro = teamMembers[i];
    console.log(membro);
};



// ad ogni oggetto andrò a ricavarmi le proprietà appartenenti


// creo una variabile inizialmente vuota, che poi attraverso un ciclo for sarà riempita da dall'oggetto contente le varie proprietà


//  mi prendo l'elemento dall'HTML che mi servirà per inserirgli le proprietà
