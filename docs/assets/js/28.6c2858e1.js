(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{206:function(e,a,o){"use strict";o.r(a);var r=o(0),t=Object(r.a)({},function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"gradient-boosted-tree-regressor"}},[e._v("Gradient Boosted Tree Regressor")]),e._v(" "),o("p",[e._v("A operação Gradient-Boosted Trees (GBT) para regressão possui como objetivo criar um modelo baseado em ensembles de "),o("a",{attrs:{href:"/pt-br"}},[e._v("Árvores de decisão")]),e._v(". Para isso, GBT iterativamente treina (a partir de uma base de dados de entrada) um conjunto de árvores de decisão minimizando uma dada função de perda. A ideia do GBT é criar vários modelos (de árvore de decisão) considerados mais simples (ou fracos) a fim de criar um modelo mais poderoso e robusto, por combinar resultados desses vários modelos fracos.")]),e._v(" "),o("h3",{attrs:{id:"conectores"}},[e._v("Conectores")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Entrada")]),e._v(" "),o("th",[e._v("Saída")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("Dados utilizados para treinar o modelo")]),e._v(" "),o("td",[e._v("Dados de saída e modelo do algoritmo de regressão")])])])]),e._v(" "),o("h3",{attrs:{id:"tarefa"}},[e._v("Tarefa")]),e._v(" "),o("p",[e._v("Nome da Tarefa")]),e._v(" "),o("h3",{attrs:{id:"aba-execucao"}},[e._v("Aba Execução")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Parâmetro")]),e._v(" "),o("th",[e._v("Detalhe")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[o("strong",[e._v("Atributo(s) previsor(es)")])]),e._v(" "),o("td",[e._v("Atributo que será usado para treinamento")])]),e._v(" "),o("tr",[o("td",[o("strong",[e._v("Atributo com o rótulo")])]),e._v(" "),o("td",[e._v("Atributo a ser predito")])]),e._v(" "),o("tr",[o("td",[o("strong",[e._v("Atributos com a predição")])]),e._v(" "),o("td",[e._v("Atributo contendo a predição do modelo")])]),e._v(" "),o("tr",[o("td",[o("strong",[e._v("Iterações máximas")])]),e._v(" "),o("td",[e._v("O número máximo de iterações do algoritmo boosting. O seu valor padrão é 100")])]),e._v(" "),o("tr",[o("td",[o("strong",[e._v("Regularização")])]),e._v(" "),o("td",[e._v("Valor para regularizar o ajuste da função de perda do algoritmo. O seu valor padrão é 0.0")])]),e._v(" "),o("tr",[o("td",[o("strong",[e._v("Mix. para ElasticNet (entre 0 e 1)")])]),e._v(" "),o("td",[e._v("Parâmetro de ajuste usado para a minimização da função objetivo usando uma combinação de L1 e L2. O seu valor por padrão é 0")])]),e._v(" "),o("tr",[o("td",[o("strong",[e._v("Profundidade máxima")])]),e._v(" "),o("td",[e._v("Profundidade máxima permitida nas árvores de decisão")])]),e._v(" "),o("tr",[o("td",[o("strong",[e._v("Instâncias mínimas")])]),e._v(" "),o("td",[e._v("O número mínimo de instâncias (exemplos) que precisam estar em um nó folha de cada árvore")])]),e._v(" "),o("tr",[o("td",[o("strong",[e._v("Ganho de informação mínimo")])]),e._v(" "),o("td",[e._v("Mínimo de ganho de informação (information gain) para que haja a utilização de uma feature na divisão de um nó")])]),e._v(" "),o("tr",[o("td",[o("strong",[e._v("Semente (seed)")])]),e._v(" "),o("td",[e._v("Semente pseudo-aleatória para iniciar o modelo do GBT.")])]),e._v(" "),o("tr",[o("td",[o("strong",[e._v("Métrica para validação cruzada")])]),e._v(" "),o("td",[e._v("Define a métrica utilizada dentro da validação cruzada (se aplicável) para avaliar o modelo de classificação dentro das k partições")])]),e._v(" "),o("tr",[o("td",[o("strong",[e._v("Atributo com o número da partição (fold)")])]),e._v(" "),o("td",[e._v("Define o atributo a ter o número da partição para realizar uma validação cruzada (se aplicável)")])])])]),e._v(" "),o("p",[o("a",{attrs:{href:"/pt-br"}},[e._v("Aba Aparência")])]),e._v(" "),o("p",[o("a",{attrs:{href:"/pt-br"}},[e._v("Aba Resultados")])]),e._v(" "),o("h2",{attrs:{id:"exemplo-de-utilizacao"}},[e._v("Exemplo de Utilização")]),e._v(" "),o("p",[o("strong",[e._v("Objetivo:")]),e._v(" Utilizar o modelo do "),o("em",[e._v("Gradient Boosted Tree Regressor")]),e._v(" para predizer a qualidade de um vinho."),o("br"),e._v(" "),o("strong",[e._v("Base de Dados:")]),e._v(" "),o("a",{attrs:{href:"/pt-br"}},[e._v("Qualidade da Variante Vermelha do Vinho Verde Português")])]),e._v(" "),o("p",[o("img",{attrs:{src:"/vuepress/img/spark/aprendizado_de_maquina/regressao_gradient_boosted_tree/image2.png",alt:"Ler dados"}})]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Leia a base de dados por meio da operação "),o("a",{attrs:{href:"/pt-br"}},[e._v("Ler dados")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Utilize a operação "),o("a",{attrs:{href:"/pt-br"}},[e._v("Divisão percentual")]),e._v(" para dividir a base de dados em treino e teste. No parâmetro "),o("strong",[e._v("Percentual")]),e._v(", calibre-o utilizando 50% dos dados para treinar (1.ª parte) e 50% para testar (2.ª parte).")])]),e._v(" "),o("li",[o("p",[e._v("Na Operação "),o("strong",[e._v("Gradient Boosted Tree Regressor")]),e._v(", selecione “alcohol”, “chlorides”, “citric_acid”, “density”, “fixed_acidity”, “free_sulfur_dioxide”, “pH”, “residual_sugar”, “sulphates”, “total_sulfur_dioxide” e “volatile_acidity” no campo "),o("strong",[e._v("Atributo(s) previsor(es)")]),e._v(". Selecione "),o("em",[e._v("“quality”")]),e._v(" no campo "),o("strong",[e._v("Atributo com o rótulo")]),e._v(" e preencha “resultado” no campo "),o("strong",[e._v("Atributo com a predição (novo)")]),e._v(". Preencha 100 no campo "),o("strong",[e._v("Iterações máximas")]),e._v(", 10 no campo "),o("strong",[e._v("Profundidade máxima")]),e._v(", 20 no campo "),o("strong",[e._v("Número de instâncias")]),e._v(" e 0.1 no "),o("strong",[e._v("Ganho de informação")]),e._v(". Deixe os demais parâmetros inalterados."),o("br"),e._v(" "),o("img",{attrs:{src:"/vuepress/img/spark/aprendizado_de_maquina/regressao_gradient_boosted_tree/image3.png",alt:"Formulário Gradient Boosted Tree Regressor - parte 1"}}),e._v(" "),o("img",{attrs:{src:"/vuepress/img/spark/aprendizado_de_maquina/regressao_gradient_boosted_tree/image1.png",alt:"Formulário Gradient Boosted Tree Regressor - parte 1"}})])]),e._v(" "),o("li",[o("p",[e._v("Na operação "),o("a",{attrs:{href:"/pt-br"}},[e._v("Aplicar Modelo")]),e._v(", selecione  “alcohol”, “chlorides”,  “citric_acid”, “density”, “fixed_acidity”, “free_sulfur_dioxide”, “pH”, “residual_sugar”, “sulphates”, “total_sulfur_dioxide” e “volatile_acidity” no campo "),o("strong",[e._v("Atributo(s) previsor(es)")]),e._v(" e preencha “resultado” no campo "),o("strong",[e._v("Nome do novo atributo (herdado do modelo)")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Na operação "),o("a",{attrs:{href:"/pt-br"}},[e._v("Avaliar Modelo")]),e._v(", selecione "),o("em",[e._v("“resultado”")]),e._v(" no campo "),o("strong",[e._v("Atributo usado para predição")]),e._v(". Selecione “quality” no campo "),o("strong",[e._v("Atributo usado como label")]),e._v(" e a métrica "),o("em",[e._v("“Raiz do erro quadrático médio”")]),e._v(" como "),o("strong",[e._v("Métrica para avaliação")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Execute o fluxo e visualize o resultado, que neste caso está de acordo com a raiz do erro quadrático médio ("),o("strong",[e._v("Root Mean Square Error")]),e._v(" ou "),o("strong",[e._v("RMSE")]),e._v("):"),o("br"),e._v(" "),o("img",{attrs:{src:"/vuepress/img/spark/aprendizado_de_maquina/regressao_gradient_boosted_tree/image4.png",alt:"Formulário Gradient Boosted Tree Regressor - parte 1"}})])])]),e._v(" "),o("hr"),e._v(" "),o("p",[e._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])},[],!1,null,null,null);a.default=t.exports}}]);