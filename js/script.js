/* ============================================ */
/*  INTRODUÇÃO E PERGUNTA DE PULAR INTRO         */
/* ============================================ */
alert("POSITIVO MELHOR MARCA DE ELETRONICOS DO MUNDO");

const pular = prompt("Deseja pular a introdução? \nSim \nNão");
const respostaPular = pular ? pular.trim().toLowerCase() : "";
if (respostaPular === "sim") {
    alert("Você pulou a introdução, espero que goste do site e se divirta com o conteudo de alta qualidade que coloquei ai dentro apartir de diversas gambiarras, muito obrigado por existir. Lembre-se, você é amado e importante, e com certeza é a razão da felicidade de outro ser humano, nunca perca seu sorriso.");

} else if (respostaPular === "não" || respostaPular === "nao") {
    alert("Bem Vindo ao site ultra hiper criativo e fantastico, espero que goste do site e se divirta com o conteudo de alta qualidade que coloquei ai dentro apartir de diversas gambiarras, muito obrigado por existir. Lembre-se, você é amado e importante, e com certeza é a razão da felicidade de outro ser humano, nunca perca seu sorriso.");
} else {
    alert("Resposta inválida. Por favor, responda com 'Sim' ou 'Não'.");
}

/* ============================================ */
/*  CADASTRO DO USUÁRIO                         */
/* ============================================ */
if (respostaPular !== "sim") {
    let nome = prompt("Sujeito a ser cadastrado");
    let idade = prompt("Idade do sujeito a ser cadastrado");
    let genero = prompt("Gênero do sujeito: \nMasculino \nFeminino \nOutro");
    let senha_da_conta_do_banco = prompt("Senha da conta do banco do sujeito a ser cadastrado");
    switch (genero ? genero.trim().toLowerCase() : "") {
        case "masculino":
            alert("Bem Vindo ao site ultra hiper criativo e fantastico " + nome + ", espero que goste do site e se divirta com o conteudo de alta qualidade que coloquei ai dentro apartir de diversas gambiarras, muito obrigado por existir. Lembre-se, você é amado e importante, e com certeza é a razão da felicidade de outro ser humano, nunca perca seu sorriso.");
            break;
        case "feminino":
            alert("Bem Vinda ao site ultra hiper criativo e fantastico " + nome + ", espero que goste do site e se divirta com o conteudo de alta qualidade que coloquei ai dentro apartir de diversas gambiarras, muito obrigado por existir. Lembre-se, você é amada e importante, e com certeza é a razão da felicidade de outro ser humano, nunca perca seu sorriso.");
            break;
        case "outro":
            alert("Bem Vinde ao site ultra hiper criativo e fantastico " + nome + ", espero que goste do site e se divirta com o conteudo de alta qualidade que coloquei ai dentro apartir de diversas gambiarras, muito obrigado por existir. Lembre-se, você é amado(a) e importante, e com certeza é a razão da felicidade de outro ser humano, nunca perca seu sorriso.");
            break;
    }
}

/* ============================================ */
/*  PERGUNTA SOBRE OPERAÇÕES MATEMÁTICAS         */
/* ============================================ */
const fazer_somas = prompt("Deseja fazer algumas operações matemáticas? \nSim \nNão");
const respostaFazerSomas = fazer_somas ? fazer_somas.trim().toLowerCase() : "";
if (respostaFazerSomas === "sim") {
    alert("Ótimo! Vamos começar com algumas operações matemáticas básicas.");
} else if (respostaFazerSomas === "não" || respostaFazerSomas === "nao") {
    alert("Tudo bem! Se mudar de ideia, é só recarregar a página e escolher 'Sim'.");
} else {
    alert("Resposta inválida. Por favor, responda com 'Sim' ou 'Não'.");
}

/* ============================================ */
/*  FUNÇÕES MATEMÁTICAS                          */
/* ============================================ */
function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0) {
        return "Não é possível dividir por zero!";
    }
    return a / b;
}

if (respostaFazerSomas === "sim") {
    let num1 = parseFloat(prompt("Digite o primeiro número:"));
    let num2 = parseFloat(prompt("Digite o segundo número:"));

    alert("Soma: " + soma(num1, num2));
    alert("Subtração: " + subtracao(num1, num2));
    alert("Multiplicação: " + multiplicacao(num1, num2));
    alert("Divisão: " + divisao(num1, num2));       

    alert(soma(10, 5)); // Exemplo de uso da função soma
    alert(subtracao(10, 5)); // Exemplo de uso da função subtracao
    alert(multiplicacao(10, 5)); // Exemplo de uso da função multiplicacao
    alert(divisao(10, 5)); // Exemplo de uso da função divisao
}

/* ============================================ */
/*  CONTROLE DE TEMA                             */
/* ============================================ */
function trocarCorDeFundo() {
    document.body.style.backgroundColor = "lightblue";
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-theme");
}