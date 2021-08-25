
document.querySelector('input').addEventListener('click', () =>{ 

});

document.addEventListener('keyup', (evt) =>{
    if (evt.code == 'enter'){

    }
});

const vaihdateksti = (e) => {
    let tekstaa = document.getElementById("teksti");
    tekstaa.value = e.target.innerHTML;

};

//eventlistenerin funktio joka poistaa popupin
const poista = () => {
    let popup = document.getElementById("ilmestynyt");
    popup.remove("ilmestynyt");
}

const napinehdot = () => {
    let funktioSyote = document.getElementById("inputti").value;
    switch(funktioSyote){
        case '""':
            console.log("anna komento");
            break;
        case "reload":
            location.reload();
            break;
        default:
            console.log("Kirjoitit: " + funktioSyote); 
    }
    //jos input palkki on tyhjä -> tulostetaan konsoliin "anna komento"
    /*if (funktioSyote == "") {
        console.log("anna komento")
    }
    //jos annetaan reload komento -> sivu latautuu uudestaan.
    else if (funktioSyote == "reload") {
        location.reload();
    }
    //jos teksti on mitä vaan muuta niin annettu teskti tulostetaan konsoliin.
    else {
        console.log("Kirjoitit: " + funktioSyote);
    }
    */
}



function App() {

    let syote = document.getElementById("teksti").value;
    //jos kirjoitettu teksti on google, suoritetaan funktio
    if (syote == "google") {
        //luodaan elementint

        let linkki = document.createElement("a");
        linkki.textContent = "Avaa Google"
        linkki.target = "_blank"
        linkki.href = ("https://www.google.fi");
        const siirry = ("Siirrytäänkö googleen?" + "<br>");

        //lopuksi sijoitetetaan elementit
        document.getElementById("oikea").innerHTML = "<br>" + siirry + "<br>";
        document.getElementById("oikea").appendChild(linkki);
        
    }


    //lista suoritettavista komennoista.
    let komennot = ["google","listaa","aaro","1 - 999 ","soita","tee popup","vaihda","funktio","uusiks"];
    //otetaan listan komennot talteen
    let arvot = komennot.values();
    if (syote == "listaa"){
        document.getElementById("vasen").innerHTML = "<br>"+"KOMENNOT: ";
        //tehdään looppi,joka käy arvot-muuttujan alkiot läpi
        for (let i of arvot){
            //listataan arvot vasempaan kolumniin.
           document.getElementById("vasen").innerHTML += ("<p>"+ i +"</>");
           
           //valitaan query selectorilla kaikki p elementit
            const komennot = document.querySelectorAll("p"); 
            //loopataan forEach loopilla kaikille p elementeille eventlistener joka kuuntelee klikkiä
            //klikistä suoritetaan vaihdateksti funktio.
            komennot.forEach(el => el.addEventListener("click",vaihdateksti));
            
        }
    }
        

    //jos teksti = kuva -> toiminto alkaa luomaan elementtejä
    if (syote == "aaro") {

        //luodaan kuva elemenetti
        let kuva = document.createElement("img");

        //annetetaan kuva elementille kuvan lähde
        kuva.src = "./img/lisattavakuva.jpg"

        //annetaan kuvalle id
        kuva.id = "kuva"

        //lisätään kuva oikeaan kolumniin
        document.getElementById("oikea").innerHTML = "<br>"
        document.getElementById("oikea").appendChild(kuva);
        document.getElementById("kuva").style.borderRadius = "10px";


    }


    // jos inputtiin syottää numeron väliltä 1 - 999, loopataan numeroa niin kauan, kunnes se saavuttaa annetun(input numero) numeron
    for (i = 0; i < syote; i++) {
        if (syote >= 1 && syote <= 999) {

            //otetaan talteen loopatut numerot
            let indeksi = (i + 1);

            //tulostetaan loopin indeksin arvo ja perään teksti: generoitua tekstiä
            document.getElementById("oikea").innerHTML += "<br>" + indeksi + " " + "generoitua tekstiä" + " ";
        }
    }

    let aani = new Audio("aani.mp3");
    if (syote == "soita") {
        aani.play();
    }

    if (syote == "tee popup") {
        //luodaan popupikkunan elementit ja annetaan diville Id
        let span = document.createElement('span');
        let divi = document.createElement('div');
        divi.id = "ilmestynyt";
        //annetaan ilmestyvälle diville teksti.
        divi.innerHTML = "Tässä" + " " + '<b>pyydetty</b>' + " " + "popup";
        divi.appendChild(span);
        span.innerHTML = "✖"
        //lisätään luotu popup elementti oikeaan kolumniin
        document.getElementById("oikea").innerHTML = "";
        document.getElementById("oikea").appendChild(divi);
        //luodaan eventlistener -> jos popup ikkunaa klikkaa se suorittaa funktion joka poistaa popup elementin
        document.getElementById("ilmestynyt").addEventListener("click", poista);
    }


    if (syote == "vaihda") {
        //jos inputkenttään syöttää vaihda -> vaihdetaan body elementin tausta
        document.body.style.background = "#4158D0";
        document.body.style.background = "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)";
    }

    if (syote == "funktio") {
        //kun funktio on kutsuttu se luo elementit
        console.log("Funktio toimii");
        let container = document.createElement("div");
        container.id = "container"
        let inputti = document.createElement("input");
        inputti.id = "inputti";
        let suorita = document.createElement("button");
        suorita.id = "suorita";
        suorita.innerHTML = "Suorita"
        container.append(inputti,suorita);
        document.getElementById("oikea").innerHTML = ""
        document.getElementById("oikea").appendChild(container);
        //eventlistener joka suorittaa napilla komentojen tarkistuksen ja suorittaa annetut komennot
        document.getElementById("suorita").addEventListener("click", napinehdot);


    }
}

//funktio joka tarkastaa "FUNKTIO" elementin tekstin ja toimii annettujen ehtojen mukaisesti


//funktio joka tarkistaa yläpalkin input kentästä tekstin
function tarkistakomennot() {
    let syote = document.getElementById("teksti").value;
    // tekstit jotka hyväkystään komennoiksi -> ei ilmoiteta virheellisestä komennosta
    let komennot = ["google", "listaa", "aaro", "soita", "tee popup", "vaihda", "funktio", "uusiks", ""];
    //tarkastaja joka tarkastaa tekstin arvon
    let tarkista = komennot.includes(syote);
    //jos input kentässä on numerot -> tarkista = true(oikea komento)
    if (syote >= 1 && syote <= 999) {
        tarkista = true;
    }
    //jos tarkisa ei sisällä oikeaa komentoa -> tarkistaja false 
    if (tarkista == false) {
        //kun tarkistaja on false luodaan "komentoa ei tunnistettu" teksti ja sijoitetaan se kolumniin.
        let elementti = document.createElement("p");
        elementti.innerHTML = "komentoa ei tunnistettu";

        //document.getElementById("oikea").innerHTML = ""
        document.getElementById("oikea").appendChild(elementti);

    }
}

//sivu latautuu uusiksi 
function uusiks() {
    let syote = document.getElementById("teksti").value;
    if (syote == "uusiks") {
        location.reload();
    }
}