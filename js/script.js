/* : ! () {} # & | % > < "" @ */

//pegar os inputs cor 1
const red1 = document.querySelector("#r1");
const green1 = document.querySelector("#g1");
const blue1 = document.querySelector("#b1");

//pegar os inputs cor 2
const red2 = document.querySelector("#r2");
const green2 = document.querySelector("#g2");
const blue2 = document.querySelector("#b2");

//divs de cores primarias
const c1 = document.querySelector("#cor1");
const c2 = document.querySelector("#cor2");

const rgb = document.querySelector("#rgb");
const hex = document.querySelector("#hex");
//cria variavel a add evento ao botão
const btn = document.querySelector("button");

btn.addEventListener("click", function(){
    misturar();
});

//mostra o valor do range
function atualizaVal(id, val) {
    document.getElementById(id).innerText = val; 
}

//função para misturar as cores
function misturar() {
    //calcular
    const nRed = Math.round(newColor(red1.valueAsNumber, red2.valueAsNumber));
    const nGreen = Math.round(newColor(green1.valueAsNumber, green2.valueAsNumber));
    const nBlue = Math.round(newColor(blue1.valueAsNumber, blue2.valueAsNumber));
    
    //CODIGO RGB
    const cor = '( ' + nRed.toString() + ', ' + nGreen.toString() + ', ' + nBlue.toString() + ' )';

    let r = Math.round(nRed);

    //mudar bg da divi res
    const res = document.querySelector("#res");
    res.style.background = 'rgb' + cor;
    rgb.innerText = cor;
    hex.innerText = '#' + corHexa(nRed)  + corHexa(nGreen)  + corHexa(nBlue);
    hex.style.cssText = 'text-transform: uppercase';
}

//retorna a novacor
function newColor(n1, n2) {
    return (n1 + n2) / 2;
}

//alteração dinamica das cores primarias de seleção
function paleta(n) {
    switch(n) {
        case 1:
            c1.style.background = 'rgb( '+ red1.value +  ', '+ green1.value + ', '+ blue1.value + ')';
            break;
        case 2:
            c2.style.background = 'rgb( '+ red2.value +  ', '+ green2.value + ', '+ blue2.value + ')';
            break;
    }
}

//impressao hexadecimal com zero
function corHexa(n1) {
    let corHex = n1;
    if(n1 < 16) {
        corHex = '0' + n1.toString(16);
    }else{
        corHex = n1.toString(16);
    }
    return corHex;
}