var message = "Hola, benvido á miña aplicacion do tempo"
alert(message);



async function obterDatos(lat, lon) {
    const APIKEY = "0dc971c7c372ac340edd7a3994719452"
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&lang=gl&units=metric`;

    try {

        const response = await fetch(apiUrl);

        return await response.json();
    }
    catch (error) {

        console.error("Non hai datos dispoñibles", error)
    }
}

async function actualizarDatos(lat,lon) {

    const data = await obterDatos(lat,lon);

    console.log(data)

    if (data) {
        document.getElementById("weatherToday").textContent = data.weather[0].description;
        document.getElementById("gifImg").src = `./assets/img/${data.weather[0].icon}.gif`;
        document.getElementById("temperatureToday").textContent = `${data.main.temp} ºC de Temperatura`;
        document.getElementById("tempmax").textContent = `${data.main.temp_max}ºC de Temp. Máxima`;
        document.getElementById("tempmin").textContent = `${data.main.temp_min}ºC de Temp. Mínima`;
        document.getElementById("humidade").textContent = `${data.main.humidity}% de Humidade`;
        document.getElementById("sensaciontermica").textContent = `${data.main.feels_like}ºC de Sensacion Térmica`;
        document.getElementById("location").textContent = data.name;





// Data actual
const dataActualTimeStamp = data.dt * 1000;
const dataActual = new Date(dataActualTimeStamp);
console.log(dataActual);
const options = {
    weekday:"long",
    year:"numeric",
    month:"long",
    day:"numeric",
};

document.getElementById("data").textContent = dataActual.toLocaleDateString("es-ES", options);

//Amanecer 

const amanecerTimestamp = data.sys.sunrise * 1000;

const amanecer = new Date(amanecerTimestamp);
const amanecerHora = amanecer.getHours();
const amanecerMinutos = amanecer.getMinutes();

const amanecerCompleto = ` Amanecer: ${amanecerHora}:${amanecerMinutos}h AM`

document.getElementById("amanecer").textContent = amanecerCompleto;

// anoitecer

const anoitecerTimestamp = data.sys.sunset * 1000;
const anoitecer = new Date(anoitecerTimestamp);
const anoitecerHora = anoitecer.getHours();
const anoitecerMinutos = anoitecer.getMinutes();

const anoitecerCompleto = ` Solpor: ${anoitecerHora}:${anoitecerMinutos}h PM`

document.getElementById("anoitecer").textContent = anoitecerCompleto;


    }


}


actualizarDatos(42.61, -8.79)


function cambiarCidade(cidade) {

    switch (cidade) {
        case "Madrid":
                        document.getElementById("webcam").innerHTML = `<a href="https://www.skylinewebcams.com/es/webcam/espana/comunidad-de-madrid/madrid/puerta-del-sol-tio-pepe.html" target="_blank"><img src="https://embed.skylinewebcams.com/img/519.jpg" alt="【LIVE】 Puerta del Sol - Tío Pepe | SkylineWebcams"></a>`
            document.getElementById("cidadeImg").src = "assets/img/madrid.jpg"
            actualizarDatos(40.43, -3.99)

            break;

        case "Roma":
            document.getElementById("webcam").innerHTML = `<a href="https://www.skylinewebcams.com/es/webcam/italia/lazio/roma/fontana-di-trevi.html" target="_blank"><img src="https://embed.skylinewebcams.com/img/286.jpg" alt="【LIVE】 Fontana de Trevi - Roma | SkylineWebcams"></a>`
            document.getElementById("cidadeImg").src = "assets/img/roma.jpg"
        actualizarDatos(41.91,12.37)
            break;

            case "Atenas":
                document.getElementById("webcam".innerHTML = `<a href="https://www.skylinewebcams.com/es/webcam/ellada/atiki/athina/athens.html" target="_blank"><img src="https://embed.skylinewebcams.com/img/1251.jpg" alt="【LIVE】 Atenas | SkylineWebcams"></a>`)
            document.getElementById("cidadeImg").src = "./assets/img/atenas.jpg"
        actualizarDatos(37.99,23.69)
            break;

        case "Berlin":
            document.getElementById("webcam").innerHTML = `<a href="https://www.skylinewebcams.com/es/webcam/deutschland/hauptstadtregion-berlin-brandenburg/berlin/olympic-stadium.html" target="_blank"><img src="https://embed.skylinewebcams.com/img/3171.jpg" alt="【LIVE】 Berlín - Estadio Olímpico | SkylineWebcams"></a>`
            document.getElementById("cidadeImg").src = "./assets/img/berliin.jpg"
        actualizarDatos(52.50,13.09)
            break;

        case "Londres":
            document.getElementById("webcam").innerHTML = `<a href="https://www.skylinewebcams.com/es/webcam/united-kingdom/england/london/walworth-road.html" target="_blank"><img src="https://embed.skylinewebcams.com/img/5830.jpg" alt="【LIVE】 Londres - Walworth Road | SkylineWebcams"></a>`
            document.getElementById("cidadeImg").src = "./assets/img/londres.jpg"
        actualizarDatos(51.52,-0.43)
            break;

        case"Lisboa":
        document.getElementById("webcam").innerHTML = `<a href="https://www.skylinewebcams.com/es/webcam/portugal/lisboa/lisbon/panorama.html" target="_blank"><img src="https://embed.skylinewebcams.com/img/2602.jpg" alt="【LIVE】 Panorama de Lisboa | SkylineWebcams"></a>`
        document.getElementById("cidadeImg").src = "./assets/img/lisboa.jpg"
        break;

        case"Berna":
        document.getElementById("webcam").innerHTML = `<a href="https://www.skylinewebcams.com/es/webcam/schweiz/canton-of-bern/oberland/interlaken.html" target="_blank"><img src="https://embed.skylinewebcams.com/img/5727.jpg" alt="【LIVE】 Interlaken - Suiza | SkylineWebcams"></a>`
        document.getElementById("cidadeImg").src = "./assets/img/berna.jpg"
        break;

        case"Bruselas":
        document.getElementById("webcam").innerHTML = `<a href="https://www.brussels.be/webcam-grand-place></a>`
        document.getElementById("cidadeImg").src = "./assets/img/bruselas.jpg"
        break;

        case"Amsterdam":
        document.getElementById("webcam").innerHTML = `<a href="https://www.skylinewebcams.com/es/webcam/netherlands/north-holland/amsterdam/amsterdam-dam-square.html" target="_blank"><img src="https://embed.skylinewebcams.com/img/1794.jpg" alt="【LIVE】 Amsterdam - Plaza Dam | SkylineWebcams"></a>`
        document.getElementById("cidadeImg").src = "./assets/img/amsterdam.jpg"
        break;  

        case"Viena":
        document.getElementById("webcam").innerHTML = `<a href="https://www.skylinewebcams.com/es/webcam/austria/vienna/vienna/kohlmarkt.html" target="_blank"><img src="https://embed.skylinewebcams.com/img/2988.jpg" alt="【LIVE】 Viena - Kohlmarkt | SkylineWebcams"></a>`
        document.getElementById("cidadeImg").src = "./assets/img/viena.jpg"
        break;

        default:

            break;
    }

}

function abrirMadrid() {
           document.getElementById("cidadeImg").src = "././assets/img/madrid.jpg"
            actualizarDatos(40.43, -3.99)
            cambiarCidade("Madrid")
}

function abrirRoma() {
                document.getElementById("cidadeImg").src = "./assets/img/roma.jpg"
        actualizarDatos(41.91,12.37)
        cambiarCidade("Roma")
}

function abrirLondres() {
                document.getElementById("cidadeImg").src = "./assets/img/londres.jpg"
        actualizarDatos(51.52,-0.43)
        cambiarCidade("Londres")
}

function abrirLisboa(){
                document.getElementById("cidadeImg").src = "./assets/img/Lisboa.jpg"
        actualizarDatos(38.74,-9.31)
        cambiarCidade("Lisboa")
}

function abrirAtenas() {
                document.getElementById("cidadeImg").src = "./assets/img/atenas.jpg"
        actualizarDatos(37.99,23.69)
        cambiarCidade("Atenas")
}

function abrirBerlin() {
                document.getElementById("cidadeImg").src = "./assets/img/berlin.jpg"
        actualizarDatos(52.50,13.09)
        cambiarCidade("Berlin")
}

function abrirBruselas() {
                document.getElementById("cidadeImg").src = "./assets/img/bruselas.jpg"
        actualizarDatos(50.85,4.21)
        cambiarCidade("Bruselas")
}

function abrirAmsterdam() {
                document.getElementById("cidadeImg").src = "./assets/img/amsterdam.jpg"
        actualizarDatos(52.35,4.73)
        cambiarCidade("Amsterdam")
}

function abrirBerna() {
                document.getElementById("cidadeImg").src = "./assets/img/berna.jpg"
        actualizarDatos(46.95,7.31)
        cambiarCidade("Berna")
}

function abrirViena() {
                document.getElementById("cidadeImg").src = "./assets/img/viena.jpg"
        actualizarDatos(48.22,16.21)
        cambiarCidade("Viena")
}


function cambiarGif(gif) {

    switch (gif) {
        case "soleado":
            document.getElementById("gifImg").src = "Exercicio60/assets/img/01d.gif"
        
            break;
        case(lluvia):
            document.getElementById("gifImg").src = "Exercicio60/assets/img/10d.gif"
        
        case(viento):
        document.getElementById("gifImg").src = "Exercicio60/assets/img/50d.gif"

        case(Nieve):
        document.getElementById("gifImg").src = "Exercicio60/assets/img/13d.gif"

        case(tormentaElectrica):
        document.getElementById("gifImg").src = "Exercicio60/assets/img/11d.gif"

        case(tormenta):
        document.getElementById("gifImg").src = "Exercicio60/assets/img/11n.gif"


        default:
            break;
    }

}
