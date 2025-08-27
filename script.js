var informaçoes = `{
    "id": 1,
    "nome": "Raposa do Deserto ou Feneco",
    "nomeCientifico": "Nome científico: Vulpes zerda",
    "especie": "",
    "alimentacao": "Alimentação: Onívoro, come invertebrados, pequenos vertebrados, frutas e tubérculos. ",
    "habitat": "Habitat: Desertos arenosos e regiões áridas do norte da África e da Península do Sinai. ",
    "comportamento": "Comportamento: Vive em grupos familiares em tocas complexas no deserto para se proteger do calor. Ela é mais ativa à noite, saindo de suas tocas ao pôr do sol para caçar e evitar o calor extremo do dia. ",
    "imagem": "<img src='img/raposa.jpg' width='300px'>",
    
    "nome2": "Coelho",
    "nomeCientifico2": "Nome científico: Oryctolagus cuniculus",
    "alimentacao2": "Alimentação: É herbívoro, alimentando-se de gramíneas, raízes e cascas de árvores",
    "habitat2": "Habitat: Áreas com tocas, vegetação para esconderijo e alimento, sendo comuns pastagens, bosques, campos e áreas de transição.",
    "comportamento2": "Comportamento: Coelhos são animais sociáveis, amigáveis e territoriais. Eles não são estritamente diurnos, mas sim crepusculares, apresentando picos de atividade no início da manhã e no final da tarde, com períodos de descanso durante o dia e a noite.",
    "imagem2": "<img src='img/coelho.jpg' width='300px'>",
    
    "nome3": "Quokka",
    "nomeCientifico3": "Nome científico: Setonix brachyurus",
    "alimentacao3": "Alimentação: É exclusivamente herbívora, consistindo em gramíneas, folhas, brotos, galhos e cascas de árvores e arbustos.",
    "habitat3": "Habitat: habita o sudoeste da Austrália, com populações principais nas ilhas Rottnest e Bald, e também no continente, principalmente em áreas de matagais, vegetação densa e pântanos ribeirinhos.",
    "comportamento3": "Comportamento: são amigáveis, sociais e curiosos,  podem escalar árvores, subir em arbustos e se esconder em vegetação densa durante o dia. São mais ativos à noite, quando saem para procurar comida.",
    "imagem3": "<img src='img/quokka.png' width='300px'>",
    
    "nome4": "Lobo-Cinzento",
    "nomeCientifico4": "Nome científico: Canis lupus",
    "alimentacao4": "Alimentação: Carnívoro, com uma dieta que varia dependendo da região e da disponibilidade, varia entre grandes mamíferos ungulados como alces, veados, bisões e caribus. Eles também podem caçar animais menores como castores, lebres e coelhos, e ocasionalmente consomem frutas silvestres e peixes.",
    "habitat4": "Habitat: pode ser encontrado em uma variedade de ecossistemas do Hemisfério Norte, como florestas, desertos, pradarias, tundra ártica e picos alpinos.",
    "comportamento4": "Comportamento: é um animal social que vive em matilhas organizadas por uma hierarquia rígida, onde um casal dominante (alfa) é o responsável por reproduzir e guiar o grupo na caça. Não tem um comportamento estritamente diurno, mas é um animal seminoturno, alternando atividades diurnas e noturnas, com picos de atividade para caçar em horários mais dispersos dependendo do ciclo de vida e estação.",
    "imagem4": "<img src='img/lobo.jpg' width='300px'>",
    
    "nome5": "Furão ou Ferret",
    "nomeCientifico5": "Nome científico: Mustela putorius furo",
    "alimentacao5": "Alimentação: a alimentação deve ser à base de carne, pois são carnívoros estritos, necessitando de uma dieta rica em proteínas e gorduras de origem animal; como carnes de pequenos animais, como coelhos, ratos, e outros mamíferos, além de pássaros, peixes, répteis e até insetos",
    "habitat5": "Habitat: O habitat dos furões selvagens varia consoante a espécie, No Brasil, os furões encontram-se em florestas tropicais e savanas, geralmente perto de rios ou áreas de vegetação densa. Geralmente são encontrados em florestas tropicais, florestas decíduas, bosques de arbustos, terra firme e savanas. Também são encontrados perto de rios e banhados. ",
    "comportamento5": "Comportamento: é solitário e um predador ágil, que se alimenta de pequenos animais e ovos, utilizando tocas e buracos como esconderijos e para o nascimento da prole. São mais ativos em certos momentos do dia, não necessariamente um diurno mas mais crepusculares.",
    "imagem5": "<img src='img/furao.png' width='300px'>"
}`

var dados = JSON.parse(informaçoes)

function infoRaposa() {
    document.getElementById("imagem").innerHTML = dados.imagem
    document.getElementById("nome").innerHTML = dados.nome
    document.getElementById("nomeCientifico").innerHTML = dados.nomeCientifico
    document.getElementById("alimentacao").innerHTML = dados.alimentacao
    document.getElementById("habitat").innerHTML = dados.habitat
    document.getElementById("comportamento").innerHTML = dados.comportamento
}

function infoCoelho() {
    document.getElementById("imagem").innerHTML = dados.imagem2
    document.getElementById("nome").innerHTML = dados.nome2
    document.getElementById("nomeCientifico").innerHTML = dados.nomeCientifico2
    document.getElementById("alimentacao").innerHTML = dados.alimentacao2
    document.getElementById("habitat").innerHTML = dados.habitat2
    document.getElementById("comportamento").innerHTML = dados.comportamento2
}

function infoQuokka() {
    document.getElementById("imagem").innerHTML = dados.imagem3
    document.getElementById("nome").innerHTML = dados.nome3
    document.getElementById("nomeCientifico").innerHTML = dados.nomeCientifico3
    document.getElementById("alimentacao").innerHTML = dados.alimentacao3
    document.getElementById("habitat").innerHTML = dados.habitat3
    document.getElementById("comportamento").innerHTML = dados.comportamento3
}

function infoLobo() {
    document.getElementById("imagem").innerHTML = dados.imagem4
    document.getElementById("nome").innerHTML = dados.nome4
    document.getElementById("nomeCientifico").innerHTML = dados.nomeCientifico4
    document.getElementById("alimentacao").innerHTML = dados.alimentacao4
    document.getElementById("habitat").innerHTML = dados.habitat4
    document.getElementById("comportamento").innerHTML = dados.comportamento4
}

function infoFurao() {
    document.getElementById("imagem").innerHTML = dados.imagem5
    document.getElementById("nome").innerHTML = dados.nome5
    document.getElementById("nomeCientifico").innerHTML = dados.nomeCientifico5
    document.getElementById("alimentacao").innerHTML = dados.alimentacao5
    document.getElementById("habitat").innerHTML = dados.habitat5
    document.getElementById("comportamento").innerHTML = dados.comportamento5
}




console.log(dados)