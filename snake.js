/*


class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    showBalance() {
        console.log("solde : " + this.balance + " Euros");
    }
    deposit(amount) {
        console.log("vous avez déposé" + amount + " Euros");
        this.balance += amount;
        this.showBalance();
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("retrait impossible");
        } else {
            console.log("vous avez retiré" + amount + " Euros");
            this.balance -= amount;
            this.showBalance();
        }

    }
}

const newAccount = new BankAccount (
    "Will Alexander",
    500
);

newAccount.withdraw(5);






class connection {
    constructor(owner, accountType) {
        this.owner = owner;
        this.accountType = accountType;
    }
    messageDeConnection() {
        if (this.accountType === "Premium") {
            console.log("Welcome back premium user :" + this.owner + " !");
        } else {
            console.log("Welcome back :" + this.owner + " !");
        }
    }
    
}  
    let mathieu = new connection (
    "Mathieu",
    "Premium"
);

mathieu.messageDeConnection();

let patrick = new connection (
    "Patrick",
    "Premium"
);

patrick.messageDeConnection();

let lea = new connection (
    "Lea",
    "Normal"
);

lea.messageDeConnection();


const getWordCount = (stringToTest) => {
    const wordArray = stringToTest.split(" ");
    return wordArray.length;
  }
  
  const getLetterCount = (stringToTest) => {
    const wordArray = stringToTest.split(" ");
    let totalLetters = 0;
    for (let word of wordArray) {
      word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
      totalLetters += word.length;
    }
    return totalLetters;
  }
  
  const getAverageWordLength = (stringToTest) => {
    return parseFloat((getLetterCount(stringToTest) / getWordCount(stringToTest)).toFixed(2));
  }
  
  const printStringStats = (stringToTest) => {
    console.log({
      wordCount: getWordCount(stringToTest),
      letterCount: getLetterCount(stringToTest),
      averageWordLength: getAverageWordLength(stringToTest)
    })
  }


const binarySearch = (array, thingToFind, start, end) => {
    if (star > end) {
        return false;
    }
    let mid = Math.floor((start + end) / 2 );

    if(array[mid] === thingToFind) {
        return true;
    }
    if(thingToFind < array[mid]) {
        return binarySearch(array,thingToFind, start, mid-1);
    } else {
        return binarySearch(array,thingToFind,mid + 1, end);
    }
}*/























//UKEGFIHEDLBLISDBVLIKSBKBKSBVNLKBKSJDHVGILDBVLBELVUB



//lE WEB




//HUSVDUIKFBEZIVBILSBVLIKDSBLKVBDSLKHVBLHDSIKBVIHLKDSBV






/*








let elt = document.getElementById("main");
elt.innerHTML = "<ul><li>element 1</li><li>element 2</li></ul>";





let elt = document.getElementById('main');
elt.innerHTML = "<ul><li>Elément 1</li><li>Elément 2</li></ul>";

elt.setAttribute("type", "password");   // Change le type de l'input en un type password
elt.setAttribute("name", "my-password");    // Change le nom de l'input en my-password
elt.getAttribute("name");               // Retourne my-password

const newElt = document.createElement("div");
let elt = document.getElementById("main");

elt.appendChild(newElt);


const elt = document.getElementById('mon-lien');    // On récupère l'élément sur lequel on veut détecter le clic
elt.addEventListener('click', function(event) {     // On écoute l'événement click, notre callback prend un paramètre que nous avons appelé event ici
    event.preventDefault();                         // On utilise la fonction preventDefault de notre objet event pour empêcher le comportement par défaut de cet élément lors du clic de la souris
});





let element = document.getElementById("javascript");

element.addEventListener("click", function() {
    element.innerHTML = "c'est cliqué";
});
*/
const canvas = document.getElementById('canvas');

const ctx = canvas.getContext("2d");

ctx.fillStyle = "white";
ctx.strokeStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.strokeRect(0, 0, canvas.width, canvas.height);


vx = 10;

vy = -10;



let snake = [{
    x: 140,
    y: 150
}, {
    x: 130,
    y: 150
}, {
    x: 120,
    y: 150
}, {
    x: 110,
    y: 150
}]

function dessinerLesMorceaux(morceau) {

    ctx.fillStyle = "green";
    ctx.strokeStyle = "black";
    ctx.fillRect(morceau.x, morceau.y, 10, 10);
    ctx.strokeRect(morceau.x, morceau.y, 10, 10);



}

function dessineLeSerpent() {
    snake.forEach(morceau => {
        dessinerLesMorceaux(morceau);
    })
}

dessineLeSerpent();

function faireAvancerSerpent() {
    const head = {
        x: snake[0].x + vx,
        y: snake[0].y + vy
    };
    snake.unshift(head);
    snake.pop();
}



faireAvancerSerpent();


dessineLeSerpent();