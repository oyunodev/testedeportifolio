const frm = document.querySelector("form")
const resp1 = document.querySelector("#valorNome")

frm.addEventListener("submit", (e) => {
    const valNome = frm.inNome.value
    resp1.innerText = `Bem-vindo(a) ${valNome}!`
    e.preventDefault()
})