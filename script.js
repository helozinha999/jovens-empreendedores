const story = {
  garagem: {
    zone: "Garagem",
    title: "08:30 — A primeira reunião",
    text: "Heloise, 17, tem uma ideia: transformar resíduos escolares em kits criativos. Laura, 23, sabe que uma boa ideia precisa de validação. Hoje vocês decidem como começar o primeiro negócio.",
    choices: [
      { text: "Pesquisar o público primeiro", next: "pesquisa", trust: 10 },
      { text: "Criar um protótipo rapidamente", next: "prototipo", trust: 5 },
      { text: "Gastar tudo em publicidade", next: "gameover_gasto", trust: -25 }
    ]
  },

  pesquisa: {
    zone: "Mercado",
    title: "A voz dos clientes",
    text: "Uma enquete com 23 jovens revela três problemas: desperdício de materiais, falta de opções acessíveis e poucos espaços criativos.",
    choices: [
      { text: "Entrevistar alunos pessoalmente", next: "entrevistas", trust: 10 },
      { text: "Montar a proposta agora", next: "canvas", trust: 5 },
      { text: "Escolher uma rota longa de testes", next: "longa_1", trust: 15 }
    ]
  },

  prototipo: {
    zone: "Oficina",
    title: "Primeiro kit feito à mão",
    text: "Heloise monta o kit com papel reutilizado e Laura calcula o custo. O protótipo custa 17 reais, mas a equipe ainda não sabe quanto vender.",
    choices: [
      { text: "Testar o preço com amigos", next: "preco", trust: 5 },
      { text: "Buscar fornecedores locais", next: "fornecedor", trust: 10 },
      { text: "Lançar sem testar", next: "gameover_qualidade", trust: -15 }
    ]
  },

  entrevistas: {
    zone: "Escola",
    title: "Oito respostas sinceras",
    text: "Os entrevistados gostam da proposta, mas pedem personalização. Laura sugere um modelo simples; Heloise quer um módulo com mais criatividade.",
    choices: [
      { text: "Criar um modelo básico personalizável", next: "canvas", trust: 15 },
      { text: "Atender cada pedido individualmente", next: "producao", trust: 0 }
    ]
  },

  preco: {
    zone: "Oficina",
    title: "Preço versus valor",
    text: "Algumas pessoas gostariam de pagar 25 reais, outras acham 17 demais. Vocês precisam escolher uma estratégia.",
    choices: [
      { text: "Fazer um teste A/B", next: "teste", trust: 10 },
      { text: "Definir um preço único competitivo", next: "canvas", trust: 5 }
    ]
  },

  fornecedor: {
    zone: "Comercial",
    title: "Um parceiro responsável",
    text: "Um fornecedor oferece desconto em papel reciclado. Em troca, exige um pedido mínimo que pode consumir todo o orçamento.",
    choices: [
      { text: "Negociar uma compra menor", next: "teste", trust: 15 },
      { text: "Aceitar o pedido máximo", next: "gameover_caixa", trust: -20 },
      { text: "Buscar outro fornecedor", next: "canvas", trust: 10 }
    ]
  },

  canvas: {
    zone: "Planejamento",
    title: "A empresa ganha contornos",
    text: "Vocês registram público, proposta de valor e canais de venda. Agora falta encontrar uma forma real de produzir e entregar.",
    choices: [
      { text: "Montar uma operação enxuta", next: "producao", trust: 10 },
      { text: "Simular os custos mensais", next: "custos", trust: 10 },
      { text: "Fazer uma pré-venda", next: "prevenda", trust: 5 }
    ]
  },

  teste: {
    zone: "Validação",
    title: "Dados melhores que suposições",
    text: "Um teste revela que o público prefere kit pequeno por 23 reais. Também surgem pedidos para levar oficinas às escolas.",
    choices: [
      { text: "Validar a oficina como serviço", next: "oficina", trust: 15 },
      { text: "Criar o produto pequeno", next: "producao", trust: 10 }
    ]
  },

  producao: {
    zone: "Produção",
    title: "A primeira fila de pedidos",
    text: "Chegam 39 pedidos para o primeiro lote. A equipe só pode entregar 17 sem ajuda. A pressa ameaça a qualidade.",
    choices: [
      { text: "Contratar ajuda temporária", next: "equipe", trust: 10 },
      { text: "Entregar uma parte e avisar", next: "custos", trust: 15 },
      { text: "Prometer todos para amanhã", next: "gameover_qualidade", trust: -20 }
    ]
  },

  custos: {
    zone: "Finanças",
    title: "A conta da sustentabilidade",
    text: "A margem é pequena, mas repetível. Laura sugere calcular custos fixos e reservas; Heloise prefere investir em divulgação.",
    choices: [
      { text: "Criar reserva de caixa", next: "caixa", trust: 15 },
      { text: "Investir em divulgação", next: "marketing", trust: 5 }
    ]
  },

  prevenda: {
    zone: "Lançamento",
    title: "Dinheiro antes do produto",
    text: "A pré-venda arrecada fundos suficientes para iniciar, mas dez clientes pedem entrega na próxima semana.",
    choices: [
      { text: "Planejar entregas em lotes", next: "producao", trust: 10 },
      { text: "Cancelar e devolver tudo", next: "final_aprendizado", trust: 5 }
    ]
  },

  equipe: {
    zone: "Equipe",
    title: "Liderar também é ouvir",
    text: "Um colega sugere mudar o design. A equipe precisa decidir quem fará o que e como a responsabilidade será dividida.",
    choices: [
      { text: "Definir funções claras", next: "escala", trust: 15 },
      { text: "Tomar todas as decisões", next: "gameover_conflito", trust: -15 }
    ]
  },

  caixa: {
    zone: "Finanças",
    title: "Três meses de segurança",
    text: "A reserva cobre custos básicos e dá tempo para crescer. Agora vocês podem investir em vendas ou em impacto social.",
    choices: [
      { text: "Criar programa escolar", next: "impacto", trust: 15 },
      { text: "Expandir para outras cidades", next: "escala", trust: 10 }
    ]
  },

  marketing: {
    zone: "Marketing",
    title: "A primeira grande divulgação",
    text: "Uma postagem ganha muitas visitas, mas os pedidos chegam mais rápido que a produção. É hora de estruturar o crescimento.",
    choices: [
      { text: "Usar uma lista de espera", next: "escala", trust: 15 },
      { text: "Aceitar todos os pedidos", next: "gameover_operacao", trust: -20 }
    ]
  },

  oficina: {
    zone: "Instituto",
    title: "A ideia vira experiência",
    text: "A oficina testa o kit com uma turma inteira. Os participantes sugerem que o projeto também seja usado em famílias.",
    choices: [
      { text: "Transformar oficina em assinatura", next: "escala", trust: 15 },
      { text: "Lançar kit para famílias", next: "impacto", trust: 10 }
    ]
  },

  escala: {
    zone: "Direção",
    title: "Você cresce, mas escolhe o caminho",
    text: "A empresa tem boa reputação. Três modelos aparecem: comunidade, franquia social ou startup para investidores.",
    choices: [
      { text: "Construir uma rede comunitária", next: "final_comunidade", trust: 20 },
      { text: "Buscar investimento para acelerar", next: "final_investimento", trust: 10 },
      { text: "Criar uma cooperativa liderada por jovens", next: "final_social", trust: 25 },
      { text: "Expandir sem limites", next: "gameover_operacao", trust: -25 }
    ]
  },

  impacto: {
    zone: "Impacto",
    title: "Lucro com propósito",
    text: "O projeto ajuda estudantes e gera renda. Laura propõe medir resultados; Heloise quer incluir mais jovens na criação.",
    choices: [
      { text: "Medir impacto e lucro juntos", next: "final_comunidade", trust: 20 },
      { text: "Priorizar somente crescimento", next: "escala", trust: 5 },
      { text: "Distribuir tudo sem planejar", next: "gameover_caixa", trust: -20 }
    ]
  },

  // Caminho longo: 12 etapas, da garagem até o núcleo da estratégia.
  longa_1: {
    zone: "Laboratório",
    title: "Etapa 1 — Hipóteses",
    text: "Vocês escrevem todas as hipóteses sobre produto, preço e público.",
    choices: [
      { text: "Priorizar a hipótese principal", next: "longa_2", trust: 10 }
    ]
  },

  longa_2: {
    zone: "Laboratório",
    title: "Etapa 2 — Entrevistas",
    text: "Heloise prepara oito perguntas objetivas para ouvir o público.",
    choices: [
      { text: "Ouvir sem tentar convencer", next: "longa_3", trust: 10 },
      { text: "Mudar as respostas do questionário", next: "gameover_qualidade", trust: -15 }
    ]
  },

  longa_3: {
    zone: "Escola",
    title: "Etapa 3 — Dados reais",
    text: "Os dados mostram interesse em oficinas e não apenas em kits.",
    choices: [
      { text: "Testar os dois formatos", next: "longa_4", trust: 15 }
    ]
  },

  longa_4: {
    zone: "Escola",
    title: "Etapa 4 — Experimento",
    text: "A primeira oficina dura 17 minutos de demonstração e 23 de prática.",
    choices: [
      { text: "Coletar feedback ao final", next: "longa_5", trust: 10 },
      { text: "Pular o feedback", next: "producao", trust: 0 }
    ]
  },

  longa_5: {
    zone: "Laboratório",
    title: "Etapa 5 — Custo completo",
    text: "Vocês calculam material, deslocamento, tempo e risco de entrega.",
    choices: [
      { text: "Ajustar o modelo de preços", next: "longa_6", trust: 15 }
    ]
  },

  longa_6: {
    zone: "Finanças",
    title: "Etapa 6 — Reserva",
    text: "Laura cria uma reserva para imprevistos e compra fracionada.",
    choices: [
      { text: "Manter o limite de gastos", next: "longa_7", trust: 15 },
      { text: "Gastar o caixa inteiro", next: "gameover_caixa", trust: -20 }
    ]
  },

  longa_7: {
    zone: "Equipe",
    title: "Etapa 7 — Responsabilidades",
    text: "Cada tarefa recebe uma pessoa responsável e um prazo claro.",
    choices: [
      { text: "Formalizar o acordo", next: "longa_8", trust: 15 }
    ]
  },

  longa_8: {
    zone: "Validação",
    title: "Etapa 8 — Segundo teste",
    text: "O segundo experimento utiliza uma turma maior e um grupo de controle.",
    choices: [
      { text: "Comparar os resultados", next: "longa_9", trust: 15 }
    ]
  },

  longa_9: {
    zone: "Estratégia",
    title: "Etapa 9 — Diferencial",
    text: "Você descobre que o diferencial é a personalização responsável.",
    choices: [
      { text: "Criar regras para personalizar", next: "longa_10", trust: 15 }
    ]
  },

  longa_10: {
    zone: "Estratégia",
    title: "Etapa 10 — Crescimento",
    text: "A equipe decide quais pedidos aceitar e quais não são sustentáveis.",
    choices: [
      { text: "Priorizar qualidade e propósito", next: "longa_11", trust: 20 }
    ]
  },

  longa_11: {
    zone: "Estratégia",
    title: "Etapa 11 — Parceria",
    text: "Uma escola oferece um espaço fixo para oficinas semanais.",
    choices: [
      { text: "Fechar parceria com metas claras", next: "longa_12", trust: 20 }
    ]
  },

  longa_12: {
    zone: "Direção",
    title: "Etapa 12 — Escala consciente",
    text: "Com dados, caixa e equipe alinhados, vocês finalmente têm uma base sólida para crescer.",
    choices: [
      { text: "Criar um modelo comunitário escalável", next: "final_comunidade", trust: 25 },
      { text: "Usar investimento externo", next: "final_investimento", trust: 10 }
    ]
  },

  final_comunidade: {
    final: true,
    zone: "Rede comunitária",
    title: "Final 1 — Negócio que gera futuro",
    text: "Heloise e Laura fundam uma rede de oficinas criativas. Cada unidade vende kits, forma jovens e financia novos projetos. Crescer significa incluir.",
    choices: []
  },

  final_investimento: {
    final: true,
    zone: "Mercado nacional",
    title: "Final 2 — A startup em expansão",
    text: "A proposta atrai investidores que respeitam limites éticos. A empresa cresce para todo o país sem abandonar qualidade, transparência e propósito.",
    choices: []
  },

  final_aprendizado: {
    final: true,
    zone: "Novo ciclo",
    title: "Final 3 — Aprendizado antes do sucesso",
    text: "Heloise e Laura cancelam o lançamento, devolvem os pedidos e registram o que aprenderam. A próxima ideia nasce menor, mas muito mais preparada.",
    choices: []
  },

  final_social: {
    final: true,
    zone: "Projeto coletivo",
    title: "Final secreto — Liderança compartilhada",
    text: "Elas criam uma cooperativa jovem em que lucros são repartidos e decisões têm voto coletivo. O negócio vira uma escola de empreendedorismo.",
    choices: []
  },

  gameover_gasto: {
    gameOver: true,
    zone: "Sem orçamento",
    title: "GAME OVER — Tudo em anúncios",
    text: "A publicidade chama atenção, mas não existe produto suficiente nem caixa para entregas. Sem estrutura, a confiança se perde.",
    choices: []
  },

  gameover_qualidade: {
    gameOver: true,
    zone: "Sem qualidade",
    title: "GAME OVER — Produto antes da validação",
    text: "Pedidos chegam com reclamações sobre falhas e atrasos. O lançamento rápido rompe a confiança antes que o negócio tenha reputação.",
    choices: []
  },

  gameover_caixa: {
    gameOver: true,
    zone: "Caixa vazio",
    title: "GAME OVER — Caixa descontrolado",
    text: "A compra ou o gasto maior que o necessário quebra a operação. Sem reserva, cada imprevisto vira o fim da empresa.",
    choices: []
  },

  gameover_conflito: {
    gameOver: true,
    zone: "Equipe dividida",
    title: "GAME OVER — Liderança sem equipe",
    text: "Nenhuma decisão é compartilhada. Cansados e sem clareza, os parceiros deixam o projeto antes da primeira entrega.",
    choices: []
  },

  gameover_operacao: {
    gameOver: true,
    zone: "Operação sobrecarregada",
    title: "GAME OVER — Crescimento demais",
    text: "Você aceita mais do que o negócio consegue entregar. Produtos atrasam, qualidade cai e a demanda vira uma crise.",
    choices: []
  }
};

let current = "garagem";
let trust = 50;
let step = 1;

const card = document.getElementById("game");
const title = document.getElementById("story-title");
const text = document.getElementById("story-text");
const kicker = document.getElementById("story-kicker");
const choices = document.getElementById("choices");
const stepCount = document.getElementById("step-count");
const trustCount = document.getElementById("trust-count");
const zoneName = document.getElementById("zone-name");

function render() {
  const scene = story[current];

  card.className = "game-card";
  if (scene.final) card.classList.add("ending");
  if (scene.gameOver) card.classList.add("game-over");

  stepCount.textContent = step;
  trustCount.textContent = `${trust}%`;
  zoneName.textContent = scene.zone;

  kicker.textContent = scene.gameOver
    ? "Fim da empresa"
    : scene.final
      ? "Encerramento"
      : `Etapa ${String(step).padStart(2, "0")} · Decisão`;

  title.textContent = scene.title;
  text.textContent = scene.text;
  choices.replaceChildren();

  if (scene.final) {
    const badge = document.createElement("div");
    badge.className = "choice-button";
    badge.textContent = `✓ Final alcançado · ${step} etapas`;
    choices.appendChild(badge);
  }

  if (scene.gameOver) {
    const badge = document.createElement("div");
    badge.className = "choice-button";
    badge.textContent = "× Empresa encerrada";
    choices.appendChild(badge);
  }

  scene.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `choice-button${index === 0 && !scene.final && !scene.gameOver ? " primary" : ""}`;
    button.textContent = choice.text;
    button.addEventListener("click", () => {
      trust = Math.max(0, Math.min(100, trust + choice.trust));
      current = choice.next;
      step += 1;
      render();
    });
    choices.appendChild(button);
  });

  if (scene.final || scene.gameOver) {
    const restart = document.createElement("button");
    restart.type = "button";
    restart.className = "choice-button";
    restart.textContent = "↻ Jogar novamente";
    restart.addEventListener("click", reset);
    choices.appendChild(restart);
  }
}

function reset() {
  current = "garagem";
  trust = 50;
  step = 1;
  render();
}

document.getElementById("restart-button").addEventListener("click", reset);
render();
