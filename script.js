const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "Gabriel inicialmente ficou preocupado com os possíveis impactos negativos dessa tecnologia. "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Gabriel ficou fascinado e quis explorar todas as possibilidades da IA no seu dia a dia."
            }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial, uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
                afirmacao: "Gabriel aprendeu a usar a IA como ferramenta de pesquisa, otimizando seu tempo e aprofundando seu conhecimento."
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: "Gabriel preferiu usar seus próprios recursos e conhecimentos, desenvolvendo suas habilidades de pesquisa e análise crítica."
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: "Gabriel se tornou um entusiasta da inovação, buscando constantemente novas formas de integrar IA de maneira ética e produtiva."
            },
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao: "Gabriel desenvolveu uma consciência social e criou um grupo de estudos para discutir o uso ético da IA e a proteção dos trabalhadores."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design tradicional como o Paint ou Photoshop.",
                afirmacao: "Gabriel compartilhou seus conhecimentos de design digital com iniciantes, mostrando que ferramentas tradicionais ainda têm seu valor."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Gabriel dominou as ferramentas de geração de imagem por IA e agora ajuda outras pessoas a expressarem sua criatividade digitalmente."
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
        alternativas: [
            {
                texto: "Aceita usar o texto gerado pela IA como trabalho final, pois foi uma contribuição válida.",
                afirmacao: "Gabriel aprendeu uma lição importante sobre os limites da IA e agora busca equilíbrio entre tecnologia e desenvolvimento pessoal."
            },
            {
                texto: "Revisa o trabalho, adiciona perspectivas pessoais e discute com o grupo sobre a importância do pensamento crítico.",
                afirmacao: "Gabriel se tornou um defensor do uso consciente da IA, sempre revisando e personalizando os resultados gerados pelas máquinas."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "🌟 Em 2049, Gabriel... 🌟";
    textoResultado.textContent = historiaFinal + "\n\n✨ A jornada de Gabriel mostra que o futuro da IA está nas mãos de quem sabe usá-la com sabedoria, ética e criatividade! ✨";
    caixaAlternativas.textContent = "";
    
    // Adiciona um botão para reiniciar o quiz
    const botaoReiniciar = document.createElement("button");
    botaoReiniciar.textContent = "🔄 Recomeçar Jornada";
    botaoReiniciar.style.marginTop = "20px";
    botaoReiniciar.addEventListener("click", () => {
        atual = 0;
        historiaFinal = "";
        mostraPergunta();
        caixaResultado.style.display = "none";
        caixaPerguntas.style.display = "block";
        caixaAlternativas.style.display = "flex";
    });
    caixaAlternativas.appendChild(botaoReiniciar);
    caixaResultado.style.display = "block";
}

// Relógio Digital
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

function atualizarRelogio() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    hr = hr < 10 ? '0' + hr : hr;
    min = min < 10 ? '0' + min : min;
    s = s < 10 ? '0' + s : s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();

// Iniciar o quiz
mostraPergunta();