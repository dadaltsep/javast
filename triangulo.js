const form = document.querySelector("form")
const resp = document.querySelector("#outResp")
const resp1 = document.querySelector("#outResp1")

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    const LadoA = Number(form.inLadoA.value)
    const LadoB = Number(form.inLadoB.value)
    const LadoC = Number(form.inLadoC.value)

    if((LadoA > LadoB + LadoC) || (LadoB > LadoA + LadoC) || (LadoC > LadoA + LadoB)){
        alert("Essas medias não podem formar um triângulo. Um dos lados não pode ser maior que a soma dos dois lados.")
        form.inLadoA.focus()
        form.inLadoB.focus()
        form.inLadoC.focus()
        return
    }

    resp.innerText = `Lados podem formar um triângulo`

    if(LadoA == LadoB && LadoA == LadoC){
        resp1.innerText = `Tipo: Equilátero`
    }else if((LadoA == LadoB) || (LadoA == LadoC) || (LadoB == LadoC )){
        resp1.innerText = `Tipo: isóceles`
    }else{
        resp1.innerText = `Tipo: Escaleno`
    }
})