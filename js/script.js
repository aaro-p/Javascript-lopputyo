
document.querySelector('#nappi').addEventListener('click', () => {
    App()
});

document.addEventListener('keyup', (evt) => {
    if (evt.code == 'Enter') {
        App()
    }
});

//vaihtaa listalta klikatun tekstin input kenttään
const changeText = (e) => {
    let getTextval = document.getElementById("teksti");
    getTextval.value = e.target.innerHTML;

};

//poistaa popup elementin
const removePopup = () => {
    let popup = document.getElementById("ilmestynyt");
    popup.remove("ilmestynyt");
}

//suorittaa funkio elementin toiminnot napista
const fbutton = () => {
    let functionInput = document.getElementById("fInput").value;
    switch (functionInput) {
        case '':
            console.log("anna komento");
            break;
        case "reload":
            location.reload();
            break;
        default:
            console.log("Kirjoitit: " + functionInput);
    }

}


//suorittaa sovelluksen toiminnot
function App() {

    let input = document.getElementById("teksti").value;
    let commands = ["google", "listaa", "aaro", "1 - 999 ", "soita", "tee popup", "vaihda", "funktio", "uusiks"];
    if (input == "google") {

        let link = document.createElement("a");
        link.textContent = "Avaa Google"
        link.target = "_blank"
        link.href = ("https://www.google.fi");
        let goToGoogle = ("Siirrytäänkö googleen?" + "<br>");

        document.getElementById("oikea").innerHTML = "<br>" + goToGoogle + "<br>";
        document.getElementById("oikea").appendChild(link);

    }


    let commandValues = commands.values();
    if (input == "listaa") {
        document.getElementById("vasen").innerHTML = "<br>" + "komennot: ";
        //tehdään looppi,joka käy commandValues-muuttujan alkiot läpi
        for (let i of commandValues) {
            //listataan commandValues vasempaan kolumniin.
            document.getElementById("vasen").innerHTML += ("<p>" + i + "</>");

            //valitaan query selectorilla kaikki p elementit
            const commands = document.querySelectorAll("p");
            //loopataan forEach loopilla kaikille p elementeille eventlistener joka kuuntelee klikkiä
            //klikistä suoritetaan changeText funktio.
            commands.forEach(el => el.addEventListener("click", changeText));

        }
    }


    //jos teksti = img -> toiminto alkaa luomaan elementtejä
    if (input == "aaro") {

        //luodaan img elemenetti
        let img = document.createElement("img");

        //annetetaan img elementille imgn lähde
        img.src = "./img/lisattavakuva.jpg"

        //annetaan imglle id
        img.id = "img"

        //lisätään img oikeaan kolumniin
        document.getElementById("oikea").innerHTML = "<br>"
        document.getElementById("oikea").appendChild(img);
        document.getElementById("img").style.borderRadius = "10px";


    }


    // jos fInputin syottää numeron väliltä 1 - 999, loopataan numeroa niin kauan, kunnes se saavuttaa annetun(input numero) numeron
    for (i = 0; i < input; i++) {
        if (input >= 1 && input <= 999) {

            //otetaan talteen loopatut numerot
            let index = (i + 1);

            //tulostetaan loopin indexn arvo ja perään teksti: generoitua tekstiä
            document.getElementById("oikea").innerHTML += "<br>" + index + " " + "generoitua tekstiä" + " ";
        }
    }

    let audio = new Audio("audio.mp3");
    if (input == "soita") {
        audio.play();
    }

    if (input == "tee popup") {
        //luodaan popupikkunan elementit ja annetaan divlle Id
        let span = document.createElement('span');
        let div = document.createElement('div');
        div.id = "ilmestynyt";
        //annetaan ilmestyvälle divlle teksti.
        div.innerHTML = "Tässä" + " " + '<b>pyydetty</b>' + " " + "popup";
        div.appendChild(span);
        span.innerHTML = "✖"
        //lisätään luotu popup falseCommand oikeaan kolumniin
        document.getElementById("oikea").innerHTML = "";
        document.getElementById("oikea").appendChild(div);
        //luodaan eventlistener -> jos popup ikkunaa klikkaa se suorittaa funktion joka removePopupa popup elementin
        document.getElementById("ilmestynyt").addEventListener("click", removePopup);
    }


    if (input == "vaihda") {
        //jos inputkenttään syöttää vaihda -> vaihdetaan body elementin tausta
        document.body.style.background = "#4158D0";
        document.body.style.background = "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)";
    }

    if (input == "funktio") {
        //kun funktio on kutsuttu se luo elementit
        console.log("Funktio toimii");
        let container = document.createElement("div");
        container.id = "container"
        let fInput = document.createElement("input");
        fInput.id = "inputti";
        let execute = document.createElement("button");
        execute.id = "suorita";
        execute.innerHTML = "suorita"
        container.append(fInput, execute);
        document.getElementById("oikea").innerHTML = ""
        document.getElementById("oikea").appendChild(container);
        //eventlistener joka suorittaa napilla komentojen tarkistuksen ja suorittaa annetut commands
        document.getElementById("suorita").addEventListener("click", fbutton);


    }

    //tarkastaja joka tarkastaa tekstin arvon
    let verifyInput = commands.includes(input);
    //jos input kentässä on numerot 1-999 -> verifyInput = true
    if (input >= 1 && input <= 999) {
        verifyInput = true;
    }
    //jos input ei ole komento listassa -> verifyInput = false 
    if (verifyInput == false) {
        //kun verifyInput on false luodaan "komentoa ei tunnistettu" teksti ja sijoitetaan se kolumniin.
        let falseCommand = document.createElement("p");
        falseCommand.innerHTML = "komentoa ei tunnistettu";

        document.getElementById("oikea").appendChild(falseCommand);

    }

    if (input == "uusiks") {
        location.reload();
    }
}