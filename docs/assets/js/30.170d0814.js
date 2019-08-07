(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{223:function(a,o,e){"use strict";e.r(o);var r=e(0),t=Object(r.a)({},function(){var a=this,o=a.$createElement,e=a._self._c||o;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"random-forest-regressor"}},[a._v("Random Forest Regressor")]),a._v(" "),e("p",[a._v("Random Forest (floresta aleatória) é uma generalização da operação "),e("router-link",{attrs:{to:"/pt-br/"}},[a._v("Árvore de Decisão")]),a._v(", em que se utiliza um conjunto de árvores de decisão (aleatórias) a fim de minimizar o sobreajuste ("),e("em",[a._v("overfitting")]),a._v(") de cada modelo individual de árvore gerado para os dados de entrada.")],1),a._v(" "),e("h3",{attrs:{id:"conectores"}},[a._v("Conectores")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("Entrada")]),a._v(" "),e("th",[a._v("Saída")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("Dados utilizados para treinar o modelo")]),a._v(" "),e("td",[a._v("Dados de saída e modelo do algoritmo de regressão")])])])]),a._v(" "),e("h3",{attrs:{id:"tarefa"}},[a._v("Tarefa")]),a._v(" "),e("p",[a._v("Nome da Tarefa")]),a._v(" "),e("h3",{attrs:{id:"aba-execucao"}},[a._v("Aba Execução")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("Parâmetro")]),a._v(" "),e("th",[a._v("Detalhe")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[a._v("Atributo(s) previsor(es)")])]),a._v(" "),e("td",[a._v("Atributo(s) que será(ão) usado(s) para treinamento")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Atributo com o rótulo")])]),a._v(" "),e("td",[a._v("Atributo a ser predito")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Atributos com a predição")])]),a._v(" "),e("td",[a._v("Atributo contendo a predição do modelo")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Profundidade máxima")])]),a._v(" "),e("td",[a._v("Profundidade máxima permitida nas árvores de decisão")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Número de árvores")])]),a._v(" "),e("td",[a._v("O número de árvores na floresta")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Máximo de bins")])]),a._v(" "),e("td",[a._v("Número de bins utilizados para discretizar uma variável contínua")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Estratégia para subconjunto de features")])]),a._v(" "),e("td",[a._v("Define o cálculo usado para definir a quantidade de atributos que será passado para cada árvore")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Ganho de informação (info gain) mínimo")])]),a._v(" "),e("td",[a._v("Define o mínimo de ganho de informação ("),e("em",[a._v("information gain")]),a._v(") para que haja a utilização de uma feature na divisão de um nó")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Iterações máximas")])]),a._v(" "),e("td",[a._v("Define o número máximos de iterações para a convergência do algoritmo. O seu valor padrão é 100")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Regularização")])]),a._v(" "),e("td",[a._v("Define o valor para regularizar o ajuste da função de perda do algoritmo. O seu o valor padrão é 0")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Mix. para ElasticNet (entre 0 e 1)")])]),a._v(" "),e("td",[a._v("Define o parâmetro de ajuste usado para a minimização da função objetivo usando uma combinação de L1 e L2. O seu valor por padrão é 0")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Métrica para validação cruzada")])]),a._v(" "),e("td",[a._v("Define a métrica utilizada dentro da validação cruzada (se aplicável) para avaliar o modelo de classificação dentro das k partições")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Atributo com o número da partição (fold)")])]),a._v(" "),e("td",[a._v("Define o atributo a ter o número da partição para realizar uma validação cruzada (se aplicável)")])])])]),a._v(" "),e("p",[e("router-link",{attrs:{to:"/pt-br/"}},[a._v("Aba Aparência")])],1),a._v(" "),e("p",[e("router-link",{attrs:{to:"/pt-br/"}},[a._v("Aba Resultados")])],1),a._v(" "),e("h2",{attrs:{id:"exemplo-de-utilizacao"}},[a._v("Exemplo de Utilização")]),a._v(" "),e("p",[e("strong",[a._v("Objetivo:")]),a._v(" Utilizar o modelo do Random Forest para predizer a qualidade de um vinho. "),e("br"),a._v(" "),e("strong",[a._v("Base de Dados:")]),a._v(" "),e("router-link",{attrs:{to:"/pt-br/"}},[a._v("Qualidade da Variante Vermelha do Vinho Verde Português")])],1),a._v(" "),e("p",[e("img",{attrs:{src:"/docs/img/spark/aprendizado_de_maquina/regressao_random_forest/image3.png",alt:"Ler dados"}})]),a._v(" "),e("ol",[e("li",[e("p",[a._v("Leia a base de dados por meio da operação "),e("router-link",{attrs:{to:"/pt-br/"}},[a._v("Ler dados")]),a._v(".")],1)]),a._v(" "),e("li",[e("p",[a._v("Utilize a operação "),e("router-link",{attrs:{to:"/pt-br/"}},[a._v("Divisão percentual")]),a._v(" para dividir a base de dados em treino e teste. No parâmetro "),e("strong",[a._v("Percentual")]),a._v(", calibre-o utilizando 50% dos dados para treinar (1.ª parte) e 50% para testar (2.ª parte).")],1)]),a._v(" "),e("li",[e("p",[a._v("Na operação "),e("strong",[a._v("Random Forest Regressor")]),a._v(", selecione "),e("em",[a._v("“alcohol”")]),a._v(", "),e("em",[a._v("“chlorides”")]),a._v(", "),e("em",[a._v("“citric_acid”")]),a._v(", "),e("em",[a._v("“density”")]),a._v(", "),e("em",[a._v("“fixed_acidity”")]),a._v(", "),e("em",[a._v("“free_sulfur_dioxide”")]),a._v(", "),e("em",[a._v("“pH”")]),a._v(", "),e("em",[a._v("“residual_sugar”")]),a._v(", "),e("em",[a._v("“sulphates”")]),a._v(", "),e("em",[a._v("“total_sulfur_dioxide”")]),a._v(" e "),e("em",[a._v("“volatile_acidity”")]),a._v(" no campo "),e("strong",[a._v("Atributo(s) previsor(es)")]),a._v(". Selecione “quality” no campo Atributo com o rótulo e preencha “resultado” no campo "),e("strong",[a._v("Atributo com a predição (novo)")]),a._v(". Preencha 100 no campo "),e("strong",[a._v("Iterações máximas,")]),a._v(" 10 no campo "),e("strong",[a._v("Profundidade máxima")]),a._v(", 50 no campo "),e("strong",[a._v("Número de árvores")]),a._v(", e 0.1 no "),e("strong",[a._v("Ganho de informação")]),a._v(". Deixe os demais parâmetros inalterados."),e("br"),a._v(" "),e("img",{attrs:{src:"/docs/img/spark/aprendizado_de_maquina/regressao_random_forest/image4.png",alt:"Random Forest Regressor - parte 1"}}),a._v(" "),e("img",{attrs:{src:"/docs/img/spark/aprendizado_de_maquina/regressao_random_forest/image2.png",alt:"Random Forest Regressor - parte 2"}})])]),a._v(" "),e("li",[e("p",[a._v("Na operação "),e("router-link",{attrs:{to:"/pt-br/"}},[a._v("Aplicar Modelo")]),a._v(", selecione "),e("em",[a._v("“alcohol”")]),a._v(", "),e("em",[a._v("“chlorides”")]),a._v(", "),e("em",[a._v("“citric_acid”")]),a._v(", "),e("em",[a._v("“density”")]),a._v(", "),e("em",[a._v("“fixed_acidity”")]),a._v(", "),e("em",[a._v("“free_sulfur_dioxide”")]),a._v(", "),e("em",[a._v("“pH”")]),a._v(", "),e("em",[a._v("“residual_sugar”")]),a._v(", "),e("em",[a._v("“sulphates”")]),a._v(", "),e("em",[a._v("“total_sulfur_dioxide”")]),a._v(" e "),e("em",[a._v("“volatile_acidity”")]),a._v(" no campo "),e("strong",[a._v("Atributo(s) previsor(es)")]),a._v(" e preencha "),e("em",[a._v("“resultado”")]),a._v(" no campo "),e("strong",[a._v("Nome do novo atributo (herdado do modelo)")]),a._v(".")],1)]),a._v(" "),e("li",[e("p",[a._v("Na operação "),e("router-link",{attrs:{to:"/pt-br/"}},[a._v("Avaliar Modelo")]),a._v(", selecione "),e("em",[a._v("“resultado”")]),a._v(" no campo "),e("strong",[a._v("Atributo usado para predição")]),a._v(". Selecione "),e("em",[a._v("“quality”")]),a._v(" no campo "),e("strong",[a._v("Atributo usado como label")]),a._v(" e a métrica "),e("em",[a._v("“Raiz do erro quadrático médio”")]),a._v(" como "),e("strong",[a._v("Métrica para avaliação")]),a._v(".")],1)]),a._v(" "),e("li",[e("p",[a._v("Execute o fluxo e visualize o resultado, que neste caso está de acordo com a raiz do erro quadrático médio ("),e("strong",[a._v("Root Mean Square Error")]),a._v(" ou "),e("strong",[a._v("RMSE")]),a._v("):"),e("br"),a._v(" "),e("img",{attrs:{src:"/docs/img/spark/aprendizado_de_maquina/regressao_random_forest/image1.png",alt:"Resultado"}})])])]),a._v(" "),e("hr"),a._v(" "),e("p",[a._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])},[],!1,null,null,null);o.default=t.exports}}]);