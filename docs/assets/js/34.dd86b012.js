(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{454:function(o,e,a){"use strict";a.r(e);var t=a(45),r=Object(t.a)({},(function(){var o=this,e=o.$createElement,a=o._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[a("h1",{attrs:{id:"regressao-isotonica"}},[o._v("Regressão Isotônica")]),o._v(" "),a("p",[o._v("A operação Regressão Isotônica tem como objetivo criar um modelo de aprendizado que tenta estimar uma função monótona crescente ou decrescente de forma a minimizar a distância entre esta e os pontos observados.")]),o._v(" "),a("h3",{attrs:{id:"conectores"}},[o._v("Conectores")]),o._v(" "),a("table",[a("thead",[a("tr",[a("th",[o._v("Entrada")]),o._v(" "),a("th",[o._v("Saída")])])]),o._v(" "),a("tbody",[a("tr",[a("td",[o._v("Dados utilizados para treinar o modelo")]),o._v(" "),a("td",[o._v("Dados de saída e modelo do algoritmo de regressão")])])])]),o._v(" "),a("h3",{attrs:{id:"tarefa"}},[o._v("Tarefa")]),o._v(" "),a("p",[o._v("Nome da Tarefa")]),o._v(" "),a("h3",{attrs:{id:"aba-execucao"}},[o._v("Aba Execução")]),o._v(" "),a("table",[a("thead",[a("tr",[a("th",[o._v("Parâmetro")]),o._v(" "),a("th",[o._v("Detalhe")])])]),o._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[o._v("Atributo(s) previsor(es)")])]),o._v(" "),a("td",[o._v("Atributo que será usado para treinamento")])]),o._v(" "),a("tr",[a("td",[a("strong",[o._v("Atributo com o rótulo")])]),o._v(" "),a("td",[o._v("Atributo a ser predito")])]),o._v(" "),a("tr",[a("td",[a("strong",[o._v("Atributos com a predição")])]),o._v(" "),a("td",[o._v("Atributo contendo a predição do modelo")])]),o._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#isotonic"}},[o._v("Isotonic")])]),o._v(" "),a("td",[o._v("Especifica o crescimento da função monótona gerada pela regressão. O seu valor padrão é Isotônica/crescente")])]),o._v(" "),a("tr",[a("td",[a("strong",[o._v("Y min")])]),o._v(" "),a("td",[o._v("Y min.")])]),o._v(" "),a("tr",[a("td",[a("strong",[o._v("Y max")])]),o._v(" "),a("td",[o._v("Y max.")])]),o._v(" "),a("tr",[a("td",[a("strong",[o._v("Out of bounds")])]),o._v(" "),a("td",[o._v("Out of bounds.")])])])]),o._v(" "),a("p",[a("RouterLink",{attrs:{to:"/pt-br/sklearn/documentacao-geral/aba-aparencia.html"}},[o._v("Aba Aparência")])],1),o._v(" "),a("p",[a("RouterLink",{attrs:{to:"/pt-br/sklearn/documentacao-geral/aba-resultados.html"}},[o._v("Aba Resultados")])],1),o._v(" "),a("h2",{attrs:{id:"definicoes"}},[o._v("Definições")]),o._v(" "),a("h3",{attrs:{id:"isotonic"}},[o._v("Isotonic")]),o._v(" "),a("ol",[a("li",[o._v("Isotônica/crescente: A regressão isotônica gera uma função monótona crescente.")]),o._v(" "),a("li",[o._v("Antitônica/decrescente: A regressão isotônica gera uma função monótona decrescente")])]),o._v(" "),a("h2",{attrs:{id:"exemplo-de-utilizacao"}},[o._v("Exemplo de Utilização")]),o._v(" "),a("p",[a("strong",[o._v("Objetivo:")]),o._v(" Utilizar o modelo construído pela operação Regressão Isotônica para predizer a qualidade de um vinho"),a("br"),o._v(" "),a("strong",[o._v("Base de Dados:")]),o._v(" "),a("RouterLink",{attrs:{to:"/pt-br/sklearn/base-de-dados/#wine"}},[o._v("Qualidade da Variante Vermelha do Vinho Verde Português")])],1),o._v(" "),a("p",[a("img",{attrs:{src:"/img/sklearn/aprendizado_de_maquina/regressao_isotonica/image4.png",alt:"Ler dados"}})]),o._v(" "),a("ol",[a("li",[a("p",[o._v("Leia a base de dados por meio da operação "),a("RouterLink",{attrs:{to:"/pt-br/sklearn/entrada-e-saida/ler-dados.html"}},[o._v("Ler dados")]),o._v(".")],1)]),o._v(" "),a("li",[a("p",[o._v("Utilize a operação "),a("RouterLink",{attrs:{to:"/pt-br/sklearn/pre-processamento-de-dados/amostragem-divisao-percentual.html"}},[o._v("Divisão percentual")]),o._v(" para dividir a base de dados em treino e teste. No parâmetro "),a("strong",[o._v("Percentual")]),o._v(", calibre-o utilizando 50% dos dados para treinar (1.ª parte) e 50% para testar (2.ª parte).")],1)]),o._v(" "),a("li",[a("p",[o._v("Na operação "),a("strong",[o._v("Regressão Isotônica")]),o._v(", selecione “alcohol”, “chlorides”, “citric_acid”, “density”, “fixed_acidity”, “free_sulfur_dioxide”, “pH”, “residual_sugar”, “sulphates”, “total_sulfur_dioxide” e “volatile_acidity” no campo "),a("strong",[o._v("Atributo(s) previsor(es)")]),o._v(". Selecione "),a("em",[o._v("“quality”")]),o._v(" no campo "),a("strong",[o._v("Atributo com o rótulo")]),o._v(" e preencha “resultado” no campo "),a("strong",[o._v("Atributo com a predição (novo)")]),o._v("."),a("br"),o._v("\nPreencha 100 no campo "),a("strong",[o._v("Iterações máximas")]),o._v(" e selecione no campo "),a("strong",[o._v("Isotonic")]),o._v(" a função Isotônica/crescente")]),o._v(" "),a("p",[a("img",{attrs:{src:"/img/sklearn/aprendizado_de_maquina/regressao_isotonica/image2.png",alt:"Forumlário regressão isotônica - parte 1"}}),o._v(" "),a("img",{attrs:{src:"/img/sklearn/aprendizado_de_maquina/regressao_isotonica/image3.png",alt:"Forumlário regressão isotônica - parte 2"}})])]),o._v(" "),a("li",[a("p",[o._v("Na operação "),a("RouterLink",{attrs:{to:"/pt-br/sklearn/modelo-e-avaliacao/aplicar-modelo.html"}},[o._v("Aplicar Modelo")]),o._v(", selecione “alcohol”, “chlorides”, “citric_acid”, “density”, “fixed_acidity”, “free_sulfur_dioxide”, “pH”, “residual_sugar”, “sulphates”, “total_sulfur_dioxide” e “volatile_acidity” no campo "),a("strong",[o._v("Atributo(s) previsor(es)")]),o._v(" e preencha "),a("em",[o._v("“resultado”")]),o._v(" no campo "),a("strong",[o._v("Nome do novo atributo (herdado do modelo)")]),o._v(".")],1)]),o._v(" "),a("li",[a("p",[o._v("Na operação "),a("RouterLink",{attrs:{to:"/pt-br/sklearn/modelo-e-avaliacao/avaliar-modelo.html"}},[o._v("Avaliar Modelo")]),o._v(", selecione "),a("em",[o._v("“resultado”")]),o._v(" no campo "),a("strong",[o._v("Atributo usado para predição")]),o._v(". Selecione "),a("em",[o._v("“quality”")]),o._v(" no campo "),a("strong",[o._v("Atributo usado como label")]),o._v(" e a métrica "),a("em",[o._v("“Raiz do erro quadrático médio”")]),o._v(" como "),a("strong",[o._v("Métrica para avaliação")]),o._v(".")],1)]),o._v(" "),a("li",[a("p",[o._v("Execute o fluxo e visualize o resultado, que neste caso está de acordo com a raiz do erro quadrático médio ("),a("strong",[o._v("Root Mean Square Error")]),o._v(" ou "),a("strong",[o._v("RMSE")]),o._v("):"),a("br"),o._v(" "),a("img",{attrs:{src:"/img/sklearn/aprendizado_de_maquina/regressao_isotonica/image1.png",alt:"Resultado"}})])])]),o._v(" "),a("hr"),o._v(" "),a("p",[o._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])}),[],!1,null,null,null);e.default=r.exports}}]);