// elementos html via DOM

const soma = document.getElementById('soma');
const subtracaoAB = document.getElementById('subtracaoAB');
const subtracaoBA = document.getElementById('subtracaoBA');
const multiplicacacao = document.getElementById('multiplicacao');
const divisaoAB = document.getElementById('divisaoAB');
const divisaoBA = document.getElementById('divisaoBA');
const potenciaAB = document.getElementById('potenciaAB');
const potenciaBA = document.getElementById('potenciaBA');
const raizQuadradaA = document.getElementById('raizQuadradaA');
const raizQuadradaB = document.getElementById('raizQuadradaB');
const fatorialA = document.getElementById('fatorialA');
const fatorialB = document.getElementById('fatorialB');
const porcentaguemAB = document.getElementById('porcentagemAB');
const porcentaguemBA = document.getElementById('porcentagemBA');
const media = document.getElementById('media');

soma.innerHTML = 0;
subtracaoAB.innerHTML = 0;
subtracaoBA.innerHTML = 0;
multiplicacacao.innerHTML = 0;
divisaoAB.innerHTML = 0;
divisaoBA.innerHTML = 0;
potenciaAB.innerHTML = 0;
potenciaBA.innerHTML = 0;
raizQuadradaA.innerHTML = 0;
raizQuadradaB.innerHTML = 0;
fatorialA.innerHTML = 0;
fatorialB.innerHTML = 0;
porcentaguemAB.innerHTML = 0;
porcentaguemBA.innerHTML = 0;
media.innerHTML = 0;

// contruir as funções

function calcularSoma(a, b) {
    return a + b;
}

function calcularSubtracaoAB(a, b) {
    return a - b;
}

function calcularSubtracaoBA(a, b) {
    return b - a;
}

function calcularMultiplicacao(a, b) {
    return a * b;
}

function calcularDivisaoAB(a, b) {
    return a / b;
}

function calcularDivisaoBA(a, b) {
    return b / a;
}

function calcularPotenciaAB(a, b) {
    return a ** b;
}

function calcularPotenciaBA(a, b) {
    return b ** a;
}

function calcularRaizQuadradaA(a) {
    return Math.sqrt(a).toFixed(2);
}

function calcularRaizQuadradaB(b) {
    return Math.sqrt(b).toFixed(2);
}

function calcularFatorialA(a) {
    let r = 1;

    for (var i = a; i > 1; i--) {
        r *= i;
    }
    return r;
}


function calcularFatorialB(b) {
    let r = 1;

    for (var i = b; i > 1; i--) {
        r *= i;
    }
    return r;

}

function calcularPorcentagemAB(a, b) {
    return ((a * 100) / b).toFixed(0) + '%';

}

function calcularPorcentagemBA(a, b) {
    return ((b * 100) / a).toFixed(0) + '%';


}


function calcularMedia(a, b) {
    return (a + b) / 2;
}

// criar função para fazer cálculo

function calcular() {
    const inputA = document.getElementById('primeiroNumero').value;
    const inputB = document.getElementById('segundoNumero').value;

    let a = parseFloat(inputA);
    let b = parseFloat(inputB);

    soma.innerHTML = calcularSoma(a, b);
    subtracaoAB.innerHTML = calcularSubtracaoAB(a, b);
    subtracaoBA.innerHTML = calcularSubtracaoBA(a, b);
    multiplicacacao.innerHTML = calcularMultiplicacao(a, b);
    divisaoAB.innerHTML = calcularDivisaoAB(a, b);
    divisaoBA.innerHTML = calcularDivisaoBA(a, b);
    potenciaAB.innerHTML = calcularPotenciaAB(a, b);
    potenciaBA.innerHTML = calcularPotenciaBA(a, b);
    raizQuadradaA.innerHTML = calcularRaizQuadradaA(a);
    raizQuadradaB.innerHTML = calcularRaizQuadradaB(b);
    fatorialA.innerHTML = calcularFatorialA(a);
    fatorialB.innerHTML = calcularFatorialB(b);
    porcentaguemAB.innerHTML = calcularPorcentagemAB(a, b);
    porcentaguemBA.innerHTML = calcularPorcentagemBA(a, b);
    media.innerHTML = calcularMedia(a, b);

}