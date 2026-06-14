## Agro Forte, Futuro Sustentável

> **Projeto Científico e Tecnológico: "Do Descartável ao Sustentável: O Futuro do Campo"**

Este repositório contém o código-fonte de um portal web interativo e informativo desenvolvido para conscientização ambiental e difusão de práticas inovadoras no cenário agrícola. O projeto foi estruturado com o objetivo de demonstrar como materiais e subprodutos descartados no dia a dia rural podem ser transformados em soluções ecológicas e ferramentas valiosas, gerando economia para o produtor e preservação para o planeta.

---

## Sobre o Projeto

O portal atua como uma plataforma educacional dividida em três pilares principais:
1. **Manejo de Resíduos (Mandioca):** Explicação científica de como a manipueira (subproduto líquido tóxico) pode ser decantada e estabilizada para se transformar em um biofertilizante rico em potássio, nitrogênio e fósforo.
2. **Logística Reversa (Sistema Campo Limpo):** Apresentação do ciclo de destinação correta, tríplice lavagem e reciclagem de embalagens plásticas rígidas de defensivos fitossanitários.
3. **Captação Hídrica (Cisternas Rurais):** Metodologia de engenharia rural para reaproveitamento de bombonas descartáveis na criação de sistemas modulares de captação de água da chuva.

Além disso, o site conta com um **Simulador Interativo** que gera diagnósticos de sustentabilidade automáticos com base no material descartado selecionado pelo usuário.

---

## Diferenciais do Design e Interface

Por diretrizes de conformidade e respeito a direitos autorais, o projeto foi desenvolvido de forma **100% autônoma, sem dependência de imagens externas ou recursos gráficos de terceiros**:
* **Visual Baseado em Código:** O cabeçalho e os elementos visuais utilizam gradientes CSS modernos combinando tons de verde agrícola (`#1b5e20` e `#4caf50`).
* **Modo Escuro Nativo:** Sistema de troca de tema dinâmico (Light/Dark Mode) gerenciado puramente via variáveis CSS (`:root`) e manipulado por JavaScript.
* **Responsividade Avançada:** Layout totalmente adaptável para dispositivos móveis, tablets e desktops (Mobile-First nas seções críticas).
* **Navegação SPA (Single Page Application):** Transições suaves e carregamento de conteúdo dinâmico sem recarregamento de página.

---

## Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias web puras (Vanilla Architecture), garantindo leveza, performance e facilidade de leitura do código:

* **HTML5:** Estruturação semântica de todas as seções, páginas e formulários seletores.
* **CSS3:** Estilização baseada em Flexbox, variáveis globais, animações de entrada (`@keyframes fadeIn`) e regras de mídia adaptativas.
* **JavaScript (ES6):** Lógica de alternância de temas, controle de exibição de telas e banco de dados indexado para o simulador de resíduos.

---

## Fontes de pesquisa utilizadas

Os conteúdos textuais e conceituais do portal foram construídos de forma 100% autoral a partir das seguintes referências:
* [Brasil Escola (UOL) - Agronegócio](https://brasilescola.uol.com.br/geografia/agronegocio.htm)
* [Brasil Escola (UOL) - O que é Agricultura](https://brasilescola.uol.com.br/o-que-e/geografia/o-que-e-agricultura.htm)
* [Ministério da Agricultura (Gov.br) - Programa Agro Brasil Sustentável](https://www.gov.br/agricultura/pt-br/assuntos/sustentabilidade/programa-agro-brasil-sustentavel)
* [Embrapa - A Transformação Digital no Futuro da Agricultura](https://www.embrapa.br/objetivos-de-desenvolvimento-sustentavel-ods/busca-de-noticias/-/noticia/37159329/artigo---a-transformacao-digital-impulsiona-o-futuro-sustentavel-da-agricultura)
* [FGV (EAESP) - O Futuro Sustentável da Agricultura Global](https://eaesp.fgv.br/administracao-de-empresas/o-futuro-sustentavel-da-agricultura-global)
* [Aegro - Ponto de Equilíbrio Agrícola](https://aegro.com.br/tags/ponto-de-equilibrio-agricola/)

---

## Estrutura do Repositório

```text
├── index.html          # Estrutura e marcação semântica do portal
├── style.css           # Estilização global, variáveis de cor, responsividade e temas
├── script.js          # Lógica do simulador, SPA e controle do Modo Escuro
└── README.md           # Documentação oficial do projeto
