//suorita napissa on onclick event attribuutti, jolle on annettu kaikki tehdyt toiminnot/funktiot
//aina kun nappia painaa se suorittaa tekstin perusteella tarvittavan toiminnon
//body elementissä on onclick event attribuutti joka suorittaa napin klikkauksen aina kun painetaan enter näppäintä.

let syote = document.getElementById("teksti").value;


document.querySelector('input').addEventListener('click', () =>{ 

});

document.addEventListener('keyup', (evt) =>{
    if (evt.code == 'enter'){

    }
});




function siirryGoogle() {
    //otetaan input kentän tekstin arvo talteen
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
}


function Listaa(){
    let syote = document.getElementById("teksti").value;
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
}        

//funktio joka ottaa klikatun elementin tekstin(e.target.innerhtml) talteen
//ja vaihtaa klikatun elementin tekstin input kentän tekstiksi
function vaihdateksti(e){
    let tekstaa = document.getElementById("teksti");
    tekstaa.value = e.target.innerHTML;

}

function lisaaKuva() {
    let syote = document.getElementById("teksti").value;

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
}


function looppaaNumero() {
    let syote = document.getElementById("teksti").value;

    // jos inputtiin syottää numeron väliltä 1 - 999, loopataan numeroa niin kauan, kunnes se saavuttaa annetun(input numero) numeron
    for (i = 0; i < syote; i++) {
        if (syote >= 1 && syote <= 999) {

            //otetaan talteen loopatut numerot
            let indeksi = (i + 1);

            //tulostetaan loopin indeksin arvo ja perään teksti: generoitua tekstiä
            document.getElementById("oikea").innerHTML += "<br>" + indeksi + " " + "generoitua tekstiä" + " ";
        }
    }
}


function Soita() {
    let syote = document.getElementById("teksti").value;
    let aani = new Audio("aani.mp3");
    if (syote == "soita") {
        aani.play();
    }
}


function popUp() {
    let syote = document.getElementById("teksti").value;
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

}

//eventlistenerin funktio joka poistaa popupin
function poista() {
    var popup = document.getElementById("ilmestynyt");
    popup.remove("ilmestynyt");
}


function vaihda() {
    let syote = document.getElementById("teksti").value;
    if (syote == "vaihda") {
        //jos inputkenttään syöttää vaihda -> vaihdetaan body elementin tausta
        document.body.style.background = "#4158D0";
        document.body.style.background = "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)";
    }
}

//funktio joka luo uuden inputkentän ja napin
function funktio() {
    let syote = document.getElementById("teksti").value;
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
function napinehdot() {
    let funktioSyote = document.getElementById("inputti").value;
    //jos input palkki on tyhjä -> tulostetaan konsoliin "anna komento"
    if (funktioSyote == "") {
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
}

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