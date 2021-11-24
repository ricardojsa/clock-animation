setInterval(executarRelogio, 1000);

const PONTEIROHORA = document.querySelector("#hour");
const PONTEIROMINUTO = document.querySelector("#minute");
const PONTEIROSEGUNDO = document.querySelector("#second");


function executarRelogio(){
    var data = new Date();
    let hr = data.getHours();
    let min = data.getMinutes();
    let seg = data.getSeconds();

    let posicaoHr = (hr/12) + (min/60)/12;
    let posicaoMin = (min/60) + (seg/60)/60;
    let posicaoSeg = seg/60;

    
    executarRotacao(PONTEIROHORA, posicaoHr);
    executarRotacao(PONTEIROMINUTO, posicaoMin);
    executarRotacao(PONTEIROSEGUNDO, posicaoSeg);

    
    // PONTEIROHORA.style.transform = "rotate(" + posicaoHr +"deg)";
    // PONTEIROMINUTO.style.transform =  "rotate(" + posicaoMin +"deg)";
    // PONTEIROSEGUNDO.style.transform = "rotate(" + posicaoSeg +"deg)";
}

function executarRotacao(element,rotacaoProporcional){
    element.style.transform = "rotate(" + rotacaoProporcional * 360 + "deg)";
}

executarRelogio();
