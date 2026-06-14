/* Gerencia a troca de telas ocultando as abas inativas e revelando a aba desejada */
function mostrarPagina(idPagina) {
    /* Coleta e armazena todas as seções que possuem a classe .page */
    const paginas = document.querySelectorAll('.page');
    /* Remove a classe active de todas as abas coletadas para fazê-las sumir da tela */
    paginas.forEach(p => p.classList.remove('active'));

    /* Captura os blocos institucionais do rodapé da tela inicial */
    const secaoSobre = document.getElementById('secao-sobre');
    const secaoContato = document.getElementById('secao-contato');

    /* Verifica se o usuário solicitou o retorno para a tela de entrada */
    if(idPagina === 'principal') {
        /* Adiciona a classe active para tornar a tela inicial visível novamente */
        document.getElementById('pagina-principal').classList.add('active');
        
        /* Torna os blocos do rodapé visíveis novamente na tela principal */
        secaoSobre.style.display = "block";
        secaoContato.style.display = "block";
        
        /* Reseta e reaplica a classe animar-entrada para disparar o efeito fadeIn novamente */
        secaoSobre.classList.remove('animar-entrada');
        secaoContato.classList.remove('animar-entrada');
        void secaoSobre.offsetWidth; /* Força um reflow no navegador para reinicializar as animações CSS */
        secaoSobre.classList.add('animar-entrada');
        secaoContato.classList.add('animar-entrada');

    } else {
        /* Se o usuário estiver mudando para abas secundárias, oculta o rodapé para limpar o visual */
        secaoSobre.style.display = "none";
        secaoContato.style.display = "none";

        /* Ativa especificamente a tela correspondente solicitada nos parâmetros */
        if(idPagina === 'interativo') {
            document.getElementById('pagina-interativo').classList.add('active');
        } else if(idPagina === 'detalhe') {
            document.getElementById('pagina-detalhe').classList.add('active');
        }
    }
    /* Realiza uma rolagem de página automatizada e fluida até o topo da tela */
    window.scrollTo({top: 0, behavior: 'smooth'});
}

/* Injeta os textos científicos nos campos da aba expandida com base na escolha do usuário */
function carregarDetalhe(projetoKey) {
    const tituloElemento = document.getElementById('detalhe-titulo');
    const corpoElemento = document.getElementById('detalhe-corpo');

    /* Banco de dados interno estruturado contendo as strings e links oficiais indexados */
    const bancoProjetos = {
        mandioca: {
            titulo: "Reaproveitamento de Resíduos da Mandioca",
            texto: "<p>A agroindústria da mandioca desempenha um papel socioeconômico crucial no cenário nacional, porém, o processo de extração do polvilho e da farinha resulta na geração da manipueira. Este subproduto líquido residual possui uma carga orgânica extremamente elevada e alta toxicidade inicial devido à presença de compostos cianogênicos, tornando o seu descarte direto na natureza um grave vetor de contaminação hídrica e degradação do solo local.</p><p>A pesquisa científica demonstra que, quando submetida a um manejo controlado de decantação, estabilização e fermentação biológica, a manipueira passa por um processo de detoxificação natural. Após esse período de tratamento, ela se transforma em um biofertilizante líquido de altíssimo valor agronômico, rico em macronutrientes essenciais como potássio, nitrogênio, magnésio e fósforo. A aplicação planejada desse insumo ecológico nas lavouras atua diretamente na recuperação da fertilidade da terra.</p><p>Além de mitigar os impactos ambientais causados pelo descarte inadequado, essa prática promove a economia circular dentro do Agro Forte, reduzindo de forma drástica a dependência do produtor rural em relação aos fertilizantes químicos industriais altamente dispendiosos. O reaproveitamento integral melhora a sustentabilidade do ecossistema e otimiza a rentabilidade financeira da propriedade familiar.</p>",
            linkOficial: "https://www.infoteca.cnptia.embrapa.br/bitstream/doc/912040/1/manipuera.pdf"
        },
        campolimpo: {
            titulo: "Logística Reversa: Sistema Campo Limpo",
            texto: "<p>A utilização de defesas fitossanitárias na agricultura moderna traz consigo o desafio do descarte seguro de seus recipientes plásticos após o uso. O acúmulo inadequado ou a queima dessas embalagens descartáveis no campo representam riscos severos de intoxicação humana, contaminação de lençóis freáticos e poluição atmosférica. Para solucionar esse problema, o Brasil estruturou o Sistema Campo Limpo, um modelo de logística reversa que se tornou referência científica e legal em âmbito mundial.</p><p>O ciclo operacional fundamenta-se na obrigatoriedade da tríplice lavagem por parte do agricultor, processo técnico que remove 99,9% dos resíduos químicos do interior do recipiente, criando segurança no manuseio. Posteriormente, essas embalagens lavadas são devolvidas em centros de recebimento autorizados. Estudos técnicos validam que a grande maioria das embalagens plásticas rígidas comercializadas no país são recuperadas com sucesso e destinadas à reciclagem.</p><p>O material coletado é processado por indústrias especializadas e transformado em mais de 30 novos produtos homologados, como artefatos para a construção civil, dutos para cabos elétricos e novas embalagens industriais. Essa engrenagem reduz a extração de matérias-primas fósseis, diminui significativamente a pegada de carbono do setor agrícola e consolida práticas de desenvolvimento sustentável de alta eficiência na cadeia produtiva.</p>",
            linkOficial: "https://www.redalyc.org/pdf/878/87823354009.pdf"
        },
        cisternas: {
            titulo: "Cisternas Rurais: Manejo e Captação de Água de Chuva",
            texto: "<p>A escassez hídrica sazonal e a necessidade de preservação dos mananciais naturais exigem a adoção de tecnologias de engenharia rural focadas na conservation da água. O sistema de captação de água pluvial baseia-se no aproveitamento das amplas coberturas de galpões rurais, granjas e instalações de maquinários para coletar a precipitação atmosférica por meio de calhas dimensionadas de forma técnica e integradas a condutores verticais.</p><p>A grande inovação prática consiste em associar essa captação à reutilização de recipientes rígidos e bombonas de transporte de insumos que seriam descartados no lixo comum. Após passarem por rigorosa higienização e descontaminação química, esses contêineres plásticos são interligados para atuar como reservatórios modulares de armazenamento. O sistema inclui filtros de sedimentação física para a remoção de quaisquer impurezas sólidas iniciais, garantindo a qualidade da água armazenada.</p><p>Essa água de reuso desempenha um papel estratégico na manutenção diária da propriedade, sendo direcionada para atividades que não exigem potabilidade, tais como a lavagem de tratores, higienização de pisos, instalações de confinamento e sistemas de irrigação subsuperficial. A implementação dessa metodologia científica reduz o estresse sobre os poços artesianos e rios, fornecendo ao produtor segurança hídrica e resiliência contra períodos de seca.</p>",
            linkOficial: "https://seer.ufu.br/index.php/revextensao/article/viewFile/37061/pdf"
        }
    };

    /* Carrega os textos estruturados mapeados na chave recebida por parâmetro */
    const dados = bancoProjetos[projetoKey];

    /* Se a chave for válida e encontrar correspondência no banco de dados, renderiza o bloco */
    if (dados) {
        tituloElemento.innerText = dados.titulo;
        
        /* Insere as strings de texto científicas e cria a tag do link externo configurada para abrir em outra aba */
        corpoElemento.innerHTML = `
            <div style="text-align: justify;">
                ${dados.texto}
            </div>
            <div style="text-align: right; margin-top: 20px;">
                <a href="${dados.linkOficial}" target="_blank" class="link-saiba-mais-externo">Saiba mais:</a>
            </div>
        `;
        
        /* Altera a interface de abas exibindo a tela de detalhes preenchida */
        mostrarPagina('detalhe');
    }
}

/* Ativa ou remove a classe modificadora dark-mode para gerenciar o modo noturno */
function toggleDarkMode() {
    const body = document.body;
    /* Adiciona a classe se ela não existir na tag body, ou a remove se ela já estiver ativa */
    body.classList.toggle('dark-mode');
    
    const btn = document.getElementById('dark-mode-toggle');
    
    /* ALTERAÇÃO: Removidos os emojis de sol e lua do texto dinâmico para evitar uso de recursos gráficos */
    if (btn) {
        if (body.classList.contains('dark-mode')) {
            btn.innerText = "Modo Claro";
        } else {
            btn.innerText = "Modo Escuro";
        }
    }
}

/* Captura a opção escolhida no simulador e altera o painel de respostas na interface */
function identificarResiduo() {
    const select = document.getElementById('residuo-select');
    const resultadoBox = document.getElementById('resultado-interativo');
    const valor = select.value; /* Armazena o valor do atributo value da opção selecionada */

    const solucaoTxt = document.getElementById('res-solucao');
    const impactoTxt = document.getElementById('res-impacto');

    /* Se o usuário selecionar o campo vazio de instruções, o painel é ocultado novamente */
    if (valor === "") {
        resultadoBox.classList.add('hidden');
        return;
    }

    /* Mapeamento lógico de soluções e impactos sustentáveis da área interativa */
    const bancoSolucoes = {
        pet: {
            solucao: "Transformação em vasos auto-irrigáveis para hortas verticais ou gotejadores de baixo custo instalados direto na raiz da planta.",
            impacto: "Garante economia extrema de água no cultivo e evita o descarte nocivo de plásticos nas lavouras."
        },
        pneu: {
            solucao: "Uso estrutural para criar bacias de prevenção contra erosão em terrenos inclinados ou bebedouros super resistentes para animais.",
            impacto: "Remove de circulação materiais de degradação secular e os reverte em ferramentas úteis à rotina rural."
        },
        palete: {
            solucao: "Construção de caixas organizadoras de ferramentas ou estruturas fechadas para compostagem de resíduos vegetais.",
            impacto: "Estimula o manejo de compostagem limpa, organizando o espaço sem gerar novos custos de compra de madeira."
        },
        organico: {
            solucao: "Tratamento em composteiras para produção de húmus ou aplicação em biodigestores caseiros para obtenção de biogás.",
            impacto: "Substitui fertilizantes químicos caros por adubo orgânico rico e reduz as econômicas e emissões gasosas poluentes no ar."
        }
    };

    /* Injeta os textos de diagnóstico baseados na opção ativa do objeto mapeado */
    solucaoTxt.innerText = bancoSolucoes[valor].solucao;
    impactoTxt.innerText = bancoSolucoes[valor].impacto;

    /* Torna o painel visível removendo a classe hidden de ocultação */
    resultadoBox.classList.remove('hidden');
}
