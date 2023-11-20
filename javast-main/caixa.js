const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

frm.addEventListener("submit" , (e) => {
    e.preventDefault()
    const saque = Number(frm.insaque.value)
    if (saque % 10 != 0) {
        alert("valor invalido para notas disponiveis(10, 50, 100)")
        frm.insaque.focus()
        return
    }

    const notasCem = Math.floor(saque/100)
    let resto = saque % 100 
    const notasCinquenta = Math.floor(resto/50)
    resto = resto %50
    const notasDez = Math.floor(resto/10)

    if (notasCem > 0) {
        resp1.inneText = `Notas de R$100: ${notasCem}`
    }
    if (notasCinquenta > 0) {
        resp2.inneText = `Notas de R$50: ${notasCinquenta}`
    }
    if (notasDez >0) {
        resp3.inneText = `Notas de R$10: ${notasDez}`
    }
})

frm.addEventListener("reset", (e) => {
    resp1.inneText = ""
    resp2.inneText = ""
    resp3.inneText = ""
})