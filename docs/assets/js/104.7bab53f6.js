(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{463:function(a,e,o){"use strict";o.r(e);var t=o(45),r=Object(t.a)({},(function(){var a=this,e=a.$createElement,o=a._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[o("h1",{attrs:{id:"k-means"}},[a._v("K-Means")]),a._v(" "),o("p",[a._v("Método de clusterização k-means.")]),a._v(" "),o("h3",{attrs:{id:"conectores"}},[a._v("Conectores")]),a._v(" "),o("table",[o("thead",[o("tr",[o("th",[a._v("Entrada")]),a._v(" "),o("th",[a._v("Saída")])])]),a._v(" "),o("tbody",[o("tr",[o("td",[a._v("Dados utilizados para treinar o modelo")]),a._v(" "),o("td",[a._v("Dados de saída e Modelo do algoritmo de agrupamento")])])])]),a._v(" "),o("h3",{attrs:{id:"tarefa"}},[a._v("Tarefa")]),a._v(" "),o("p",[a._v("Nome da Tarefa")]),a._v(" "),o("h3",{attrs:{id:"aba-execucao"}},[a._v("Aba Execução")]),a._v(" "),o("table",[o("thead",[o("tr",[o("th",[a._v("Parâmetro")]),a._v(" "),o("th",[a._v("Detalhe")])])]),a._v(" "),o("tbody",[o("tr",[o("td",[o("strong",[a._v("Quantidade de agrupamentos (K)")])]),a._v(" "),o("td",[a._v("Número de clusters a serem formados tal como a quantidade de centróides")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Tolerância")])]),a._v(" "),o("td",[a._v("Tolerância relativa para declarar convergência do algoritmo")])]),a._v(" "),o("tr",[o("td",[o("strong",[o("a",{attrs:{href:"#tipo"}},[a._v("Tipo")])])]),a._v(" "),o("td",[a._v("Tipo de k-means a ser utilizado")])]),a._v(" "),o("tr",[o("td",[o("strong",[o("a",{attrs:{href:"#geracao-dos-centroides-iniciais"}},[a._v("Geração dos centróides iniciais")])])]),a._v(" "),o("td",[a._v("Estratégia a ser utilizada para gerar os centróides iniciais")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Número máx. de iterações")])]),a._v(" "),o("td",[a._v("Quantidade máxima de iterações")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Atributo(s) previsor(es)")])]),a._v(" "),o("td",[a._v("Atributos a ser utilizado para clusterizar as amostras do conjunto de dados")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Atributos com a Predição (novo)")])]),a._v(" "),o("td",[a._v("Nome do novo atributo atribuído criado pelo algoritmo de agrupamento especificado")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Métrica para validação cruzada")])]),a._v(" "),o("td")]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Atributo com o número da partição (fold)")])]),a._v(" "),o("td")])])]),a._v(" "),o("p",[o("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-aparencia.html"}},[a._v("Aba Aparência")])],1),a._v(" "),o("p",[o("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-resultados.html"}},[a._v("Aba Resultados")])],1),a._v(" "),o("h2",{attrs:{id:"definicoes"}},[a._v("Definições")]),a._v(" "),o("h3",{attrs:{id:"tipo"}},[a._v("Tipo")]),a._v(" "),o("p",[a._v("Tipos de k-means:")]),a._v(" "),o("ol",[o("li",[a._v("Tradicional: Frequentemente utilizado para agrupar amostras do conjunto de dados em uma quantidade pré-especificada de grupos.")]),a._v(" "),o("li",[a._v("Bisecting K-Means: Bisecting k-means difere-se do K-means tradicional por ser um agrupamento hierárquico.")])]),a._v(" "),o("h3",{attrs:{id:"geracao-dos-centroides-iniciais"}},[a._v("Geração dos Centróides Iniciais")]),a._v(" "),o("p",[a._v("Tipos:")]),a._v(" "),o("ol",[o("li",[a._v("K-Means || K-Means ++ variant: Versão paralelizada do K-means++ para inicialização dos centróides iniciais. Os centróides iniciais gerados pelo K-means++ possuem uma garantia de aproximação da solução ótima.")]),a._v(" "),o("li",[a._v("Aleatório: Inicialização aleatória dos centróides.")])]),a._v(" "),o("h2",{attrs:{id:"exemplo-de-utilizacao"}},[a._v("Exemplo de Utilização")]),a._v(" "),o("p",[o("strong",[a._v("Objetivo:")]),a._v(" Utilizar o k-means para agrupar as espécies da Íris."),o("br"),a._v(" "),o("strong",[a._v("Base de Dados:")]),a._v(" "),o("a",{attrs:{href:"/pt-br/spark/base-de-dados#iris"}},[a._v("Íris")])]),a._v(" "),o("p",[o("img",{attrs:{src:"/img/spark/aprendizado-de-maquina/agrupamento-k-means/image2.png",alt:"Fluxo de trabalho - Ler dados"}})]),a._v(" "),o("ol",[o("li",[o("p",[a._v("Adicione uma base de dados por meio da operação "),o("RouterLink",{attrs:{to:"/pt-br/spark/entrada-e-saida/ler-dados.html"}},[a._v("Ler dados")]),a._v("."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/aprendizado-de-maquina/agrupamento-k-means/image4.png",alt:"Formulário Ler dados"}})],1)]),a._v(" "),o("li",[o("p",[a._v("Na operação "),o("strong",[a._v("K-means")]),a._v(", preencha "),o("em",[a._v("3")]),a._v(" no campo "),o("strong",[a._v("Quantidade de agrupamentos(k)")]),a._v(", "),o("em",[a._v("0.0001")]),a._v(" no campo "),o("strong",[a._v("Tolerância")]),a._v(", "),o("em",[a._v("“k-Means tradicional”")]),a._v(" no campo "),o("strong",[a._v("Tipo")]),a._v(", "),o("em",[a._v("“K-Means || K-Means ++ variant”")]),a._v(" no campo "),o("strong",[a._v("Geração de centróides iniciais")]),a._v(" e "),o("em",[a._v("50")]),a._v(" no campo "),o("strong",[a._v("Número max. de interações")]),a._v(". Selecione "),o("em",[a._v("“petal_length”")]),a._v(", "),o("em",[a._v("“petal_width”")]),a._v(", "),o("em",[a._v("“sepal_length”")]),a._v(" e "),o("em",[a._v("“sepal_width”")]),a._v(" como "),o("strong",[a._v("Atributo(s) previsor(es)")]),a._v(" e "),o("em",[a._v("“prediction”")]),a._v(" como "),o("strong",[a._v("Atributo com a predição (novo)")]),a._v("."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/aprendizado-de-maquina/agrupamento-k-means/image1.png",alt:"Formulário K-Means"}})])]),a._v(" "),o("li",[o("p",[a._v("Na operação "),o("RouterLink",{attrs:{to:"/pt-br/spark/visualizacao-de-dados/tabela.html"}},[a._v("Tabela")]),a._v(", não preencha nada.")],1)]),a._v(" "),o("li",[o("p",[a._v("Execute o fluxo e visualize o resultado.\n"),o("img",{attrs:{src:"/img/spark/aprendizado-de-maquina/agrupamento-k-means/image3.png",alt:"Resultado"}}),o("br"),a._v("\nCom a execução do modelo a predição de cada um dos três clusteres pode ser obtido visualizando o resultado apresentado pela tabela de visualização.")])])]),a._v(" "),o("hr"),a._v(" "),o("p",[a._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])}),[],!1,null,null,null);e.default=r.exports}}]);