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


// CREO UNA VARIABILE INIZIALMENTE VUOTA, CHE POI ATTRAVERSO IL CICLO FOR SARà RIEMPITA DALL'OGGETTO CONTENENTE LE VARIE PROPRIETà

let proprietàMembro = '';



//CREO UN CICLO FOR PER ESTRAPOLARE DALL'ARRAY OGNI SINGOLO OGGETTO 

for(let i = 0; i < teamMembers.length; i++) {
  
  //  creo una variabile per ricavare la posizione dell'oggetto nell'array
  
  let membroTeam = teamMembers[i];
  // console.log(membroTeam);
  
  
  
  // AD OGNI OGGETTO ANDRò A RICAVARMI LE PROPRIETà APPARTENTENTI
  
  // creo una costante in cui attraverso la DESTRUTTURAZIONE mi estrapola la proprietà dal singolo oggetto
  
  const { name, role, email, img } = membroTeam;  
  // console.log(name, role, email, img);
  




  // richiamo la variabile vuota che attraverso il ciclo for sarà riempita dall'oggetto contento le singole proprietà 
  
  proprietàMembro += `
  
  <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src= "${img/img}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title"> ${name}</h5>
                            <p class="card-text"> ${role}</p>
                            <p class="card-text"><small class="text-body-secondary"> ${email}</small></p>
                        </div>
                    </div>
                </div>
  
  `
  
  console.log(proprietàMembro);
  
  
  
  
  
  
  
  
};

















//  mi prendo l'elemento dall'HTML che mi servirà per inserirgli le proprietà
