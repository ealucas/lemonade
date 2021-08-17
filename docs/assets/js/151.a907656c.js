(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{419:function(a,o,e){"use strict";e.r(o);var r=e(45),t=Object(r.a)({},(function(){var a=this,o=a.$createElement,e=a._self._c||o;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"agrupar-linhas-por-funcao"}},[a._v("Agrupar Linhas por Função")]),a._v(" "),e("p",[a._v("Agrupar Linhas por Função é uma função de "),e("strong",[a._v("Manipulação de dados")]),a._v(" que agrupa os valores de múltiplas linhas em um conjunto. Após utilizar esta operação o conjunto de valores gerado pode ser utilizado em outras funções.")]),a._v(" "),e("h3",{attrs:{id:"conectores"}},[a._v("Conectores")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("Entrada")]),a._v(" "),e("th",[a._v("Saída")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("Uma Fonte de Dados")]),a._v(" "),e("td",[a._v("Múltiplas fontes com os dados modificados")])])])]),a._v(" "),e("h3",{attrs:{id:"aba-execucao"}},[a._v("Aba Execução")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("Parâmetro")]),a._v(" "),e("th",[a._v("Detalhe")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[a._v("Seleção de Atributos")])]),a._v(" "),e("td",[a._v("Define os atributos a serem agregados")])]),a._v(" "),e("tr",[e("td",[e("strong",[e("a",{attrs:{href:"#funcoes-de-agregacao"}},[a._v("Função de Agregação")])])]),a._v(" "),e("td",[a._v("Define a função de agregação a ser usada")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Atributo Usado Como Pivô")])]),a._v(" "),e("td",[a._v("Atributo a ser usado como pivô")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Valores do Pivô")])]),a._v(" "),e("td",[a._v("Nomes dos atributos gerados pela operação de pivô")])])])]),a._v(" "),e("p",[e("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-aparencia.html"}},[a._v("Aba Aparência")])],1),a._v(" "),e("p",[e("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-resultados.html"}},[a._v("Aba Resultados")])],1),a._v(" "),e("h2",{attrs:{id:"definicoes"}},[a._v("Definições")]),a._v(" "),e("h3",{attrs:{id:"funcoes-de-agregacao"}},[a._v("Funções de Agregação")]),a._v(" "),e("p",[e("strong",[e("a",{attrs:{href:"#exemplo-1"}},[a._v("Exemplo 1")])]),e("br"),a._v(" "),e("strong",[a._v("Average (AVG)")]),e("br"),a._v("\nA função "),e("em",[a._v("Average")]),a._v(" (avg) é utilizada para calcular a média do atributo (coluna) selecionada na operação de agregação."),e("br"),a._v("\nO atributo selecionado deve ser do tipo inteiro ou flutuante.")]),a._v(" "),e("p",[e("strong",[a._v("Collect Set")]),e("br"),a._v("\nA função "),e("em",[a._v("Collect Set")]),a._v(" é utilizada para agregar um conjunto de atributos sem que existam duplicatas no conjunto final. Ao utilizar essa função sobre um atributo (coluna), uma lista de valores é criada sem que haja repetições de valores."),e("br"),a._v("\nO atributo selecionado deve ser do tipo "),e("em",[a._v("inteiro")]),a._v(" ou "),e("em",[a._v("flutuante")]),a._v(".")]),a._v(" "),e("p",[e("strong",[a._v("Collect List")]),e("br"),a._v("\nA função "),e("em",[a._v("Collect List")]),a._v(" é utilizada para gerar um conjunto de todos os atributos (possuindo duplicatas, se um valor aparece duas vezes na coluna do atributo).")]),a._v(" "),e("p",[e("strong",[a._v("Count")]),e("br"),a._v("\nA função "),e("em",[a._v("Count")]),a._v(" retorna o número total de valores para o atributo (coluna) selecionado na função de agregação. Em bases de dados muito grandes, essa função pode ser útil para verificar a quantidade de dados existentes nela, se essa quantidade está de acordo com a quantidade de uma base de dados original (quando se conhece o conjunto de dados)."),e("br"),a._v("\nO atributo selecionado deve ser do tipo "),e("em",[a._v("inteiro")]),a._v(" ou "),e("em",[a._v("real (ponto flutuante)")]),a._v(" ou "),e("em",[a._v("cadeias de caracteres (string)")]),a._v(".")]),a._v(" "),e("p",[e("strong",[a._v("First")]),e("br"),a._v("\nA função "),e("em",[a._v("First")]),a._v(" retorna o primeiro elemento obtido da agregação do atributo (coluna) escolhido. O primeiro objeto do grupo gerado é retornado. É útil quando se quer saber qual o valor do atributo do primeiro objeto gerado pela agregação."),e("br"),a._v("\nO atributo selecionado deve ser do tipo "),e("em",[a._v("inteiro")]),a._v(" ou "),e("em",[a._v("real (ponto flutuante)")]),a._v(" ou "),e("em",[a._v("cadeias de caracteres (string)")]),a._v(".")]),a._v(" "),e("p",[e("strong",[a._v("Last")]),e("br"),a._v("\nA função "),e("em",[a._v("Last")]),a._v(" retorna o último elemento obtido através do atributo utilizado para agregação. Ou seja, o último objeto do grupo gerado é retornado. É útil para saber o valor do atributo do último objeto gerado pela função de agregação."),e("br"),a._v("\nO atributo selecionado deve ser do tipo "),e("em",[a._v("inteiro")]),a._v(" ou "),e("em",[a._v("real (ponto flutuante)")]),a._v(" ou "),e("em",[a._v("cadeias de caracteres (string)")]),a._v(".")]),a._v(" "),e("p",[e("strong",[a._v("Maximum (MAX)")]),e("br"),a._v("\nA função "),e("em",[a._v("Maximum")]),a._v(" retorna o maior valor do atributo (coluna) selecionado para a execução da função de agregação."),e("br"),a._v("\nO atributo selecionado deve ser do tipo "),e("em",[a._v("inteiro")]),a._v(" ou "),e("em",[a._v("real (ponto flutuante)")]),a._v(".")]),a._v(" "),e("p",[e("strong",[a._v("Minimum (MIN)")]),e("br"),a._v("\nA função "),e("em",[a._v("Minimum")]),a._v(" retorna o menor valor do atributo (coluna) selecionado para a execução da função de agregação. Retorna o menor valor do atributo de um grupo."),e("br"),a._v("\nO atributo selecionado deve ser do tipo "),e("em",[a._v("inteiro")]),a._v(" ou "),e("em",[a._v("real (ponto flutuante)")]),a._v(".")]),a._v(" "),e("p",[e("strong",[a._v("Sum")]),e("br"),a._v("\nA função "),e("em",[a._v("Sum")]),a._v(" retorna a soma de todos os valores do atributo (coluna) selecionado para cada um dos grupos gerados pelo(s) atributo(s) selecionado(s) para agregação."),e("br"),a._v("\nO atributo selecionado deve ser do tipo "),e("em",[a._v("inteiro")]),a._v(" ou "),e("em",[a._v("real (ponto flutuante)")]),a._v(".")]),a._v(" "),e("h3",{attrs:{id:"atributo-usado-como-pivo"}},[a._v("Atributo Usado como Pivô")]),a._v(" "),e("p",[a._v("Um pivô é um agrupamento em que uma ou mais colunas têm seus valores transpostos em colunas individuais. Portanto, os dados da tabela são reorganizados em torno dos atributos selecionados."),e("br"),a._v(" "),e("strong",[e("a",{attrs:{href:"#exemplo-2"}},[a._v("Exemplo 2")])])]),a._v(" "),e("h2",{attrs:{id:"exemplo-de-utilizacao"}},[a._v("Exemplo de Utilização")]),a._v(" "),e("h3",{attrs:{id:"exemplo-1"}},[a._v("Exemplo 1")]),a._v(" "),e("p",[e("strong",[a._v("Objetivo:")]),a._v(" Descobrir qual é a média dos atributos "),e("em",[a._v("“sepallength”")]),a._v(", "),e("em",[a._v("“sepalwidth”")]),a._v(", "),e("em",[a._v("“petallength”")]),a._v(" e “petalwidth” para as 3 classes de flores existentes."),e("br"),a._v(" "),e("strong",[a._v("Base de Dados:")]),a._v(" "),e("RouterLink",{attrs:{to:"/pt-br/spark/base-de-dados/#iris"}},[a._v("Íris")]),a._v(".")],1),a._v(" "),e("p",[e("img",{attrs:{src:"/img/spark/manipulacao-de-dados/linha-agrupar-por-funcao/image7.png",alt:"Ler dados"}})]),a._v(" "),e("ol",[e("li",[e("p",[a._v("Adicione uma base de dados por meio da operação "),e("RouterLink",{attrs:{to:"/pt-br/spark/entrada-e-saida/ler-dados.html"}},[a._v("Ler dados")]),a._v(".")],1)]),a._v(" "),e("li",[e("p",[a._v("Na operação "),e("strong",[a._v("Agrupar linhas por função")]),a._v(" preencha "),e("em",[a._v("“class”")]),a._v(" no atributo "),e("strong",[a._v("Selecione o(s) atributo(s) para agregação")]),a._v(". "),e("br"),a._v(" "),e("img",{attrs:{src:"/img/spark/manipulacao-de-dados/linha-agrupar-por-funcao/image5.png",alt:"Atributos para agregação"}})])]),a._v(" "),e("li",[e("p",[a._v("Ainda na operação "),e("strong",[a._v("Agrupar linhas por função")]),a._v(", no campo "),e("strong",[a._v("Função de Agrupamento")]),a._v(", clique em "),e("em",[a._v("“Escolha uma opção”")]),a._v("."),e("br"),a._v(" "),e("img",{attrs:{src:"/img/spark/manipulacao-de-dados/linha-agrupar-por-funcao/image2.png",alt:"Atributos para agregação"}})]),a._v(" "),e("h3",{attrs:{id:"teste-com-funcao-average"}},[a._v("Teste com Função Average:")])]),a._v(" "),e("li",[e("p",[a._v("Defina a "),e("strong",[a._v("função de agregação")]),a._v(" a ser usada como a Average e para os atributos selecione "),e("em",[a._v("“sepallength”")]),a._v(", "),e("em",[a._v("“sepalwidth”")]),a._v(", "),e("em",[a._v("“petallength”")]),a._v(" e "),e("em",[a._v("“petalwidth”")]),a._v("."),e("br"),a._v(" "),e("img",{attrs:{src:"/img/spark/manipulacao-de-dados/linha-agrupar-por-funcao/image8.png",alt:"Atributos para agregação"}})])]),a._v(" "),e("li",[e("p",[a._v("Execute e visualize o fluxo.\n"),e("img",{attrs:{src:"/img/spark/manipulacao-de-dados/linha-agrupar-por-funcao/image4.png",alt:"Resultado"}}),e("br"),a._v("\nObserve que ao utilizar essa função de agregação de acordo com o atributo “class”, temos 3 grupos diferentes Iris-virginica, Iris-setosa e Iris-versicolor, pois, no atributo “class” existiam apenas 3 classes diferentes. O restante mostra a média para cada uma dessas classes nos demais atributos "),e("em",[a._v("“sepallength”")]),a._v(", "),e("em",[a._v("“sepalwidth”")]),a._v(", "),e("em",[a._v("“petallength”")]),a._v(", "),e("em",[a._v("“petalwidth”")]),a._v(".")])])]),a._v(" "),e("h3",{attrs:{id:"exemplo-2"}},[a._v("Exemplo 2")]),a._v(" "),e("p",[e("strong",[a._v("Objetivo:")]),a._v(" Descobrir o valor pago pelos tripulantes do sexo masculino e feminino."),e("br"),a._v(" "),e("strong",[a._v("Base de Dados:")]),a._v(" "),e("RouterLink",{attrs:{to:"/pt-br/spark/base-de-dados/#titanic"}},[a._v("Titanic")]),a._v(".")],1),a._v(" "),e("p",[e("img",{attrs:{src:"/img/spark/manipulacao-de-dados/linha-agrupar-por-funcao/image7.png",alt:"Ler dados"}})]),a._v(" "),e("ol",[e("li",[e("p",[a._v("Adicione uma base de dados por meio da operação "),e("RouterLink",{attrs:{to:"/pt-br/spark/entrada-e-saida/ler-dados.html"}},[a._v("Ler dados")]),a._v(".")],1)]),a._v(" "),e("li",[e("p",[a._v("Preencha na operação "),e("strong",[a._v("Agrupar Linhas")]),a._v(" por Função no campo "),e("strong",[a._v("Atributos para Agregação")]),a._v(" o atributo sex. No campo pivô utilize a classe do tripulante."),e("br"),a._v(" "),e("img",{attrs:{src:"/img/spark/manipulacao-de-dados/linha-agrupar-por-funcao/image3.png",alt:"Atributos para agregação"}})])]),a._v(" "),e("li",[e("p",[a._v("Ainda na operação "),e("strong",[a._v("Agrupar linhas por função")]),a._v(", no campo "),e("strong",[a._v("Função de Agrupamento")]),a._v(" clique em "),e("em",[a._v("“Escolha uma opção”")]),a._v(". Preencha o campo "),e("strong",[a._v("Atributos")]),a._v(" com o atributo "),e("em",[a._v("fare")]),a._v(". No campo "),e("strong",[a._v("Função")]),a._v(" selecione "),e("em",[a._v("Maximum")]),a._v(" e no campo "),e("strong",[a._v("Nome novo")]),a._v(" preencha com "),e("em",[a._v("sex")]),a._v("."),e("br"),a._v(" "),e("img",{attrs:{src:"/img/spark/manipulacao-de-dados/linha-agrupar-por-funcao/image6.png",alt:"Agrupamento"}})])]),a._v(" "),e("li",[e("p",[a._v("Execute e visualize o fluxo."),e("br"),a._v(" "),e("img",{attrs:{src:"/img/spark/manipulacao-de-dados/linha-agrupar-por-funcao/image1.png",alt:"Resultado"}}),e("br"),a._v("\nO resultado da operação de agregação nos mostra o valor máximo pago pela tarifa de embarque em cada uma das classes do navio Titanic. Observe que a segunda classe (2nd), mulheres pagam menos que os homens.")])])]),a._v(" "),e("hr"),a._v(" "),e("p",[a._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])}),[],!1,null,null,null);o.default=t.exports}}]);