
const listaOpcoesTela2 = {
    registros:{
        title:"Registros",
        opcoes:[
            "Funcionario",
            "Setor",
            "Cargo",
            "Lotação",
            "Endereço",
            "Contato"
        ]
    },
    pesquisas:{
        title:"Pesquisar",
        opcoes:[
            "Funcionario",
            "Setor",
            "Cargo",
            "Lotação",
            "Endereço",
            "Contato"
        ]
    }
}


const listaDados = {}

function telaRegistro() {
    const listaAlvo = listaOpcoesTela2.registros;
    const elementoAlvo = document.querySelector("div.app > main > div.conteudo");
    
    if (elementoAlvo) {
        elementoAlvo.innerHTML = ``;

        const btnVoltar = document.createElement("a");
        btnVoltar.href = "/app/design/";
        btnVoltar.innerText = "Inicio";
        document.querySelector("div.app > header > div.conteudo").appendChild(btnVoltar);
        
        const tagTitle = document.createElement("h1");
        tagTitle.classList.add("title-registros");
        console.log(listaAlvo);
        tagTitle.innerHTML = `${listaAlvo.title}:`;
        
        const tagListaOpc = document.createElement("div");
        tagListaOpc.classList.add("lista-opcoes");

        elementoAlvo.appendChild(tagTitle);

        for (var i=0; i < listaAlvo.opcoes.length; i++) {
            const tagOpc = document.createElement("button");
            tagOpc.id = listaAlvo.opcoes[i];
            tagOpc.innerText = listaAlvo.opcoes[i];
            tagListaOpc.appendChild(tagOpc);
        }

        elementoAlvo.appendChild(tagListaOpc);
    }

}

function telaPesquisar() {
    const listaAlvo = listaOpcoesTela2.pesquisas;
    const elementoAlvo = document.querySelector("div.app > main > div.conteudo");
    
    if (elementoAlvo) {
        elementoAlvo.innerHTML = ``;

        const btnVoltar = document.createElement("a");
        btnVoltar.href = "/app/design/";
        btnVoltar.innerText = "Inicio";
        document.querySelector("div.app > header > div.conteudo").appendChild(btnVoltar);
        
        const tagTitle = document.createElement("h1");
        tagTitle.classList.add("title-registros");
        console.log(listaAlvo);
        tagTitle.innerHTML = `${listaAlvo.title}:`;
        
        const tagListaOpc = document.createElement("div");
        tagListaOpc.classList.add("lista-opcoes");

        elementoAlvo.appendChild(tagTitle);

        for (var i=0; i < listaAlvo.opcoes.length; i++) {
            const tagOpc = document.createElement("button");
            tagOpc.id = listaAlvo.opcoes[i];
            tagOpc.innerText = listaAlvo.opcoes[i];
            tagListaOpc.appendChild(tagOpc);
        }

        elementoAlvo.appendChild(tagListaOpc);
    }
}


