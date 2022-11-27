const num1 = 4
const num2 = 8
const saludo = "Saludo desde JavaScript!"
const d = document

console.log(num1 * num2)
console.log(saludo)

// accedo al elemento del DOM que tiene como id "parrafo"
const parrafo = d.getElementById("parrafo")
// lo muestro en consola
console.log("innerHTML: ", parrafo.innerHTML)
console.log(parrafo)

/**** Eventos ****/ 
const hTexto = d.getElementById("h-texto")

console.log(hTexto)

hTexto.addEventListener("cambioTexto", evento => {
    console.log(evento.detail)
    hTexto.innerText = evento.detail.texto
    hTexto.style.color = evento.detail.color
})

function cambiarTexto(nuevoTexto, color) {
    const evento = new CustomEvent("cambioTexto", {
        detail: {
            texto: nuevoTexto,
            color
        }
    })
    hTexto.dispatchEvent(evento)
}