
document.querySelector('#nappi').addEventListener('click', () => {
    App();
});

document.addEventListener('keyup', (evt) => {
    if (evt.code === 'Enter') {
        App();
    }
});

//syöttää listalta klikatun tekstin input kenttään
const changeText = (e) => {
    let getText = document.getElementById("teksti");
    getText.value = e.target.innerHTML;
};

//poistaa popup elementin
const removePopup = () => {
    let popup = document.getElementById("ilmestynyt");
    popup.remove();
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
    if (input === "google") {
        let link = document.createElement("a");
        link.textContent = "Avaa Google"
        link.target = "_blank"
        link.href = ("https://www.google.fi");
        let goToGoogle = ("Siirrytäänkö googleen?" + "<br>");
        document.getElementById("oikea").innerHTML = "<br>" + goToGoogle + "<br>";
        document.getElementById("oikea").appendChild(link);
    }

    let commandValues = commands.values();

    //käydään komennot arrayn alkoit läpi, niistä tehdään loopilla p elementit jotka nimeytyy komennon mukaan
    //p elementeille tehdään listään klikin kuuntelut
    if (input === "listaa") {
        document.getElementById("vasen").innerHTML = "<br>" + "komennot: ";
        for (let i of commandValues) {
            document.getElementById("vasen").innerHTML += ("<p>" + i + "</>");
            const commands = document.querySelectorAll("p");
            commands.forEach(el => el.addEventListener("click", changeText));
        }
    }

    //luodaan img elementti ja sijoitetaan oikeaan kolumniin
    if (input === "aaro") {
        let img = document.createElement("img");
        img.src = "./img/lisattavakuva.jpg"
        img.id = "img"
        document.getElementById("oikea").innerHTML = "<br>"
        document.getElementById("oikea").appendChild(img);
        document.getElementById("img").style.borderRadius = "10px";
    }

    // for silmukka, joka tulostaa numerot väliltä x-y inputin perusteella (min:1 max:999)
    for (let i = 0; i < input; i++) {
        if (input >= 1 && input <= 999) {
            //otetaan inkeksi, lisätään indeksiin 1, jotta eka indeksi numero tulostuu numerona 1.
            let index = (i + 1);
            document.getElementById("oikea").innerHTML += "<br>" + index + " " + "generoitua tekstiä" + " ";
        }
    }

    if (input === "soita") {
        let audio = new Audio("aani.mp3");
        audio.play();
    }

    //tekee popup elementin, jonka voi poistaa klikillä
    if (input === "tee popup") {
        let span = document.createElement('span');
        let div = document.createElement('div');
        div.id = "ilmestynyt";
        div.innerHTML = "Tässä" + " " + '<b>pyydetty</b>' + " " + "popup";
        div.appendChild(span);
        span.innerHTML = "✖"
        document.getElementById("oikea").innerHTML = "";
        document.getElementById("oikea").appendChild(div);
        document.getElementById("ilmestynyt").addEventListener("click", removePopup);
    }

    //vaihdetaan taustaväri
    if (input === "vaihda") {
        document.body.style.background = "#4158D0";
        document.body.style.background = "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)";
    }

    //luodaan elementti, joka suorittaa toimintoja, sekä tulostaa syötteen konsoliin
    if (input === "funktio") {
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
        //eventlistener joka suorittaa napilla komentojen tarkistuksen ja suorittaa annetut komennot
        document.getElementById("suorita").addEventListener("click", fbutton);
    }

    //muuttuja, joka tarkistaa onko syöte kommennot arrayssa
    let verifyInput = commands.includes(input);
    //jos inputtin syöttää numerot väliltä 1 - 999, tämä tulkitaan oikeaksi komennoksi, vaikka nämä ei ole arrayssa
    if (input >= 1 && input <= 999) {
        verifyInput = true;
    }

    //jos input ei ole komento listassa -> ilmoitetaan virheellisestä komennosta
    if (verifyInput === false) {
        let falseCommand = document.createElement("p");
        falseCommand.innerHTML = "komentoa ei tunnistettu";
        document.getElementById("oikea").appendChild(falseCommand);
    }

    if (input === "uusiks") {
        location.reload();
    }
}