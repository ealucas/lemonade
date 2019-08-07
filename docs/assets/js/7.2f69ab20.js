(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{223:function(e,a,r){"use strict";r.r(a);var o=r(0),t=Object(o.a)({},function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"regressao-linear"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#regressao-linear","aria-hidden":"true"}},[e._v("#")]),e._v(" Regressão Linear")]),e._v(" "),r("p",[e._v("A operação Regressão Linear tem como objetivo criar um modelo, que é basicamente uma função linear. A ideia desta operação é criar uma linha reta irá minimizar a soma dos quadrados dos "),r("a",{attrs:{href:"#residuos"}},[e._v("resíduos")]),e._v(" entre as respostas observadas na base de dados e as respostas preditas pela aproximação linear. O modelo produzido pela operação Regressão Linear assume que os resíduos seguem uma distribuição Gaussiana.")]),e._v(" "),r("h3",{attrs:{id:"conectores"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#conectores","aria-hidden":"true"}},[e._v("#")]),e._v(" Conectores")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Entrada")]),e._v(" "),r("th",[e._v("Saída")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Dados utilizados para treinar o modelo")]),e._v(" "),r("td",[e._v("Dados de saída e modelo do algoritmo de regressão")])])])]),e._v(" "),r("h3",{attrs:{id:"tarefa"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tarefa","aria-hidden":"true"}},[e._v("#")]),e._v(" Tarefa")]),e._v(" "),r("p",[e._v("Nome da Tarefa")]),e._v(" "),r("h3",{attrs:{id:"aba-execucao"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#aba-execucao","aria-hidden":"true"}},[e._v("#")]),e._v(" Aba Execução")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Parâmetro")]),e._v(" "),r("th",[e._v("Detalhe")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[r("strong",[e._v("Atributo(s) previsor(es)")])]),e._v(" "),r("td",[e._v("Atributo que será usado para treinamento")])]),e._v(" "),r("tr",[r("td",[r("strong",[e._v("Atributo com o rótulo")])]),e._v(" "),r("td",[e._v("Atributo a ser predito")])]),e._v(" "),r("tr",[r("td",[r("strong",[e._v("Atributos com a predição")])]),e._v(" "),r("td",[e._v("Atributo contendo a predição do modelo")])]),e._v(" "),r("tr",[r("td",[r("strong",[e._v("Iterações máximas")])]),e._v(" "),r("td",[e._v("Define o número máximo de iterações para a convergência do algoritmo. O seu valor padrão é 100")])]),e._v(" "),r("tr",[r("td",[r("strong",[e._v("Regularização")])]),e._v(" "),r("td",[e._v("Define o valor para regularizar o ajuste da função de perda do algoritmo. O seu o valor padrão é 0")])]),e._v(" "),r("tr",[r("td",[r("strong",[e._v("Mix. para ElasticNet (entre 0 e 1)")])]),e._v(" "),r("td",[e._v("Parâmetro de ajuste usado para a minimização da função objetivo usando uma combinação de L1 e L2. O seu valor por padrão é 0")])]),e._v(" "),r("tr",[r("td",[r("strong",[e._v("Solucionador (Solver)")])]),e._v(" "),r("td",[e._v("Define o algoritmo para gerar a solução da otimização do problema de regressão. O seu valor padrão é ‘auto’, significando que isso será feito automaticamente pelo algoritmo de regressão linear")])]),e._v(" "),r("tr",[r("td",[r("strong",[e._v("Métrica para validação cruzada")])]),e._v(" "),r("td",[e._v("Define a métrica utilizada dentro da validação cruzada (se aplicável) para avaliar o modelo de classificação dentro das k partições")])]),e._v(" "),r("tr",[r("td",[r("strong",[e._v("Atributo com o número da partição (fold)")])]),e._v(" "),r("td",[e._v("Define o atributo a ter o número da partição para realizar uma validação cruzada (se aplicável)")])])])]),e._v(" "),r("p",[r("router-link",{attrs:{to:"/pt-br/"}},[e._v("Aba Aparência")])],1),e._v(" "),r("p",[r("router-link",{attrs:{to:"/pt-br/"}},[e._v("Aba Resultados")])],1),e._v(" "),r("h2",{attrs:{id:"definicoes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#definicoes","aria-hidden":"true"}},[e._v("#")]),e._v(" Definições")]),e._v(" "),r("h3",{attrs:{id:"residuos"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#residuos","aria-hidden":"true"}},[e._v("#")]),e._v(" Resíduos")]),e._v(" "),r("p",[e._v("É a diferença entre os valores observados na base de dados e as respostas preditas pelo modelo. Por exemplo, se queremos saber/predizer a receita de uma loja em um dia considerando como atributo a temperatura máxima daquele dia, os resíduos seriam:")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Temperatura (Celsius)")]),e._v(" "),r("th",[e._v("Receita (Observado)")]),e._v(" "),r("th",[e._v("Receita (Predito)")]),e._v(" "),r("th",[e._v("Resíduo (Observado - Predito)")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("28.2°C")]),e._v(" "),r("td",[e._v("R$44,00")]),e._v(" "),r("td",[e._v("R$41,00")]),e._v(" "),r("td",[e._v("R$3,00")])]),e._v(" "),r("tr",[r("td",[e._v("21,4°C")]),e._v(" "),r("td",[e._v("R$23,00")]),e._v(" "),r("td",[e._v("R$23,00")]),e._v(" "),r("td",[e._v("R$0,00")])]),e._v(" "),r("tr",[r("td",[e._v("32,9°C")]),e._v(" "),r("td",[e._v("R$43,00")]),e._v(" "),r("td",[e._v("R$54,00")]),e._v(" "),r("td",[e._v("-R$11,00")])]),e._v(" "),r("tr",[r("td",[e._v("24,0°C")]),e._v(" "),r("td",[e._v("R$30,00")]),e._v(" "),r("td",[e._v("R$29,00")]),e._v(" "),r("td",[e._v("R$1,00")])])])]),e._v(" "),r("h2",{attrs:{id:"exemplo-de-utilizacao"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#exemplo-de-utilizacao","aria-hidden":"true"}},[e._v("#")]),e._v(" Exemplo de Utilização")]),e._v(" "),r("p",[r("strong",[e._v("Objetivo:")]),e._v(" Utilizar o modelo construído pela operação Regressão Linear para predizer a qualidade de um vinho."),r("br"),e._v(" "),r("strong",[e._v("Base de Dados:")]),e._v(" Qualidade da Variante Vermelha do Vinho Verde Português - "),r("router-link",{attrs:{to:"/pt-br/"}},[e._v("Wine Red Quality")])],1),e._v(" "),r("p",[r("img",{attrs:{src:"/vuepress/img/spark/aprendizado_de_maquina/regressor_linear/image3.png",alt:"Fluxo - Ler dados"}})]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Leia a base de dados por meio da operação "),r("router-link",{attrs:{to:"/pt-br/"}},[e._v("Ler dados")]),e._v(".")],1)]),e._v(" "),r("li",[r("p",[e._v("Utilize a operação "),r("router-link",{attrs:{to:"/pt-br/"}},[e._v("Divisão percentual")]),e._v(" para dividir a base de dados em treino e teste. No parâmetro "),r("strong",[e._v("Percentual")]),e._v(", calibre-o utilizando 50% dos dados para treinar (1.ª parte) e 50% para testar (2.ª parte).")],1)]),e._v(" "),r("li",[r("p",[e._v("Na Operação "),r("strong",[e._v("Regressão Linear")]),e._v(", selecione "),r("em",[e._v("“alcohol”")]),e._v(", "),r("em",[e._v("“chlorides”")]),e._v(", "),r("em",[e._v("“citric_acid”")]),e._v(", "),r("em",[e._v("“density”")]),e._v(", "),r("em",[e._v("“fixed_acidity”")]),e._v(", "),r("em",[e._v("“free_sulfur_dioxide”")]),e._v(", "),r("em",[e._v("“pH”")]),e._v(", "),r("em",[e._v("“residual_sugar”")]),e._v(", "),r("em",[e._v("“sulphates”")]),e._v(", "),r("em",[e._v("“total_sulfur_dioxide”")]),e._v(" e "),r("em",[e._v("“volatile_acidity”")]),e._v(" no campo "),r("strong",[e._v("Atributo(s) previsor(es)")]),e._v(". Selecione "),r("em",[e._v("“quality”")]),e._v(" no campo  "),r("strong",[e._v("Atributo com o rótulo")]),e._v(" e preencha "),r("em",[e._v("“resultado”")]),e._v(" no campo "),r("strong",[e._v("Atributo com a predição (novo)")]),e._v(". Preencha 100 no campo "),r("strong",[e._v("Iterações máximas")]),e._v(", 0.35 no campo "),r("strong",[e._v("Regularização")]),e._v(" e 0.8 no campo "),r("strong",[e._v("Mix. para ElasticNet")]),e._v(". Deixe os demais parâmetros inalterados."),r("br"),e._v(" "),r("img",{attrs:{src:"/vuepress/img/spark/aprendizado_de_maquina/regressor_linear/image4.png",alt:"Tabela - Regressão linear 1"}}),e._v(" "),r("img",{attrs:{src:"/vuepress/img/spark/aprendizado_de_maquina/regressor_linear/image2.png",alt:"Tabela - Regressão linear 2"}})])]),e._v(" "),r("li",[r("p",[e._v("Na operação "),r("router-link",{attrs:{to:"/pt-br/"}},[e._v("Aplicar Modelo")]),e._v(", selecione "),r("em",[e._v("“alcohol”")]),e._v(", "),r("em",[e._v("“chlorides”")]),e._v(", "),r("em",[e._v("“citric_acid”")]),e._v(", "),r("em",[e._v("“density”")]),e._v(", "),r("em",[e._v("“fixed_acidity”")]),e._v(", "),r("em",[e._v("“free_sulfur_dioxide”")]),e._v(", "),r("em",[e._v("“pH”")]),e._v(", "),r("em",[e._v("“residual_sugar”")]),e._v(", "),r("em",[e._v("“sulphates”")]),e._v(", "),r("em",[e._v("“total_sulfur_dioxide”")]),e._v(" e "),r("em",[e._v("“volatile_acidity”")]),e._v(" no campo "),r("strong",[e._v("Atributo(s) previsor(es)")]),e._v(" e preencha "),r("em",[e._v("“resultado”")]),e._v(" no campo "),r("strong",[e._v("Nome do novo atributo (herdado do modelo)")]),e._v(".")],1)]),e._v(" "),r("li",[r("p",[e._v("Na operação "),r("router-link",{attrs:{to:"/pt-br/"}},[e._v("Avaliar Modelo")]),e._v(", selecione "),r("em",[e._v("“resultado”")]),e._v(" no campo "),r("strong",[e._v("Atributo usado para predição")]),e._v(". Selecione "),r("em",[e._v("“quality”")]),e._v(" no campo "),r("strong",[e._v("Atributo usado como label")]),e._v(" e a métrica "),r("em",[e._v("“Raiz do erro quadrático médio”")]),e._v(" como "),r("strong",[e._v("Métrica para avaliação")]),e._v(".")],1)]),e._v(" "),r("li",[r("p",[e._v("Execute o fluxo e visualize o resultado, que neste caso está de acordo com a raiz do erro quadrático médio "),r("strong",[e._v("(Root Mean Square Error ou RMSE)")]),e._v(":\n"),r("img",{attrs:{src:"/vuepress/img/spark/aprendizado_de_maquina/regressor_linear/image1.png",alt:"Resultado"}})])])]),e._v(" "),r("hr"),e._v(" "),r("p",[e._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])},[],!1,null,null,null);a.default=t.exports}}]);