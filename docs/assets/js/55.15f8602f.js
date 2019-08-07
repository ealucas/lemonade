(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{209:function(o,e,a){"use strict";a.r(e);var t=a(0),r=Object(t.a)({},function(){var o=this,e=o.$createElement,a=o._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[a("h1",{attrs:{id:"aplicar-modelo"}},[o._v("Aplicar Modelo")]),o._v(" "),a("p",[o._v("Aplica o modelo de aprendizado de máquina em um (novo) conjunto de dados (e.g., um conjunto de teste) e retorna o resultado.")]),o._v(" "),a("h3",{attrs:{id:"conectores"}},[o._v("Conectores")]),o._v(" "),a("table",[a("thead",[a("tr",[a("th",[o._v("Entrada")]),o._v(" "),a("th",[o._v("Saída")])])]),o._v(" "),a("tbody",[a("tr",[a("td",[o._v("Dados de teste e modelo de aprendizado")]),o._v(" "),a("td",[o._v("Dados de saída resultantes da aplicação do modelo de aprendizado nos dados de entrada")])])])]),o._v(" "),a("h3",{attrs:{id:"tarefa"}},[o._v("Tarefa")]),o._v(" "),a("p",[o._v("Nome da Tarefa")]),o._v(" "),a("h3",{attrs:{id:"aba-execucao"}},[o._v("Aba Execução")]),o._v(" "),a("table",[a("thead",[a("tr",[a("th",[o._v("Parâmetro")]),o._v(" "),a("th",[o._v("Detalhe")])])]),o._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[o._v("Atributo com Features")])]),o._v(" "),a("td",[o._v("Atributos que devem ser usados na aplicação do modelo de aprendizado")])]),o._v(" "),a("tr",[a("td",[a("strong",[o._v("Nome do novo atributo (herdado do modelo)")])]),o._v(" "),a("td",[o._v("Atributo contendo as predições do modelo nos dados de teste")])])])]),o._v(" "),a("p",[a("router-link",{attrs:{to:"/pt-br/"}},[o._v("Aba Aparência")])],1),o._v(" "),a("p",[a("router-link",{attrs:{to:"/pt-br/"}},[o._v("Aba Resultados")])],1),o._v(" "),a("h2",{attrs:{id:"exemplo-de-utilizacao"}},[o._v("Exemplo de Utilização")]),o._v(" "),a("p",[a("strong",[o._v("Objetivo:")]),o._v(" Aplicar o modelo criado pelo classificador "),a("router-link",{attrs:{to:"/pt-br/"}},[o._v("Random Forest")]),o._v("  em um conjunto de dados não visto no treinamento de tal classificador.")],1),o._v(" "),a("p",[a("strong",[o._v("Base de Dados:")]),o._v(" "),a("router-link",{attrs:{to:"/pt-br/"}},[o._v("Íris")])],1),o._v(" "),a("p",[a("img",{attrs:{src:"/vuepress/img/spark/modelo_e_avaliacao/aplicar_modelo/image4.png",alt:"Ler dados"}})]),o._v(" "),a("ol",[a("li",[a("p",[o._v("Adicione uma base de dados por meio da operação "),a("router-link",{attrs:{to:"/pt-br/"}},[o._v("Ler dados")]),o._v(".")],1)]),o._v(" "),a("li",[a("p",[o._v("Utilize a operação "),a("router-link",{attrs:{to:"/pt-br/"}},[o._v("Converter categórico para numérico")]),o._v(" para converter os valores do atributo classe em valores numéricos. Para isso, utilize "),a("em",[o._v("“class”")]),o._v(" no campo "),a("strong",[o._v("Atributos")]),o._v(", "),a("em",[o._v("String")]),o._v(" como "),a("strong",[o._v("Tipo de indexador")]),o._v(" e "),a("em",[o._v("“class_index”")]),o._v(" como "),a("strong",[o._v("Nome para novo(s) atributos indexados")]),o._v(". \\")],1)]),o._v(" "),a("li",[a("p",[o._v("Utilize a operação "),a("router-link",{attrs:{to:"/pt-br/"}},[o._v("Divisão percentual")]),o._v(" para dividir a base de dados em treino e teste. No parâmetro "),a("strong",[o._v("Pesos")]),o._v(", calibre-o utilizando 50% dos dados para treinar e 50% para testar.")],1)]),o._v(" "),a("li",[a("p",[o._v("Na operação "),a("strong",[o._v("Random Forest")]),o._v(", selecione "),a("em",[o._v("“petal_length”")]),o._v(", "),a("em",[o._v("“petal_width”")]),o._v(", "),a("em",[o._v("“sepal_length”")]),o._v(" e "),a("em",[o._v("“sepal_width”")]),o._v(" no campo "),a("strong",[o._v("Atributo(s) previsor(es)")]),o._v(". Selecione "),a("em",[o._v("“class_index”")]),o._v(" no campo "),a("strong",[o._v("Atributo com o rótulo")]),o._v(" e preencha "),a("em",[o._v("“resultado”")]),o._v(" no campo "),a("strong",[o._v("Atributo com a predição (novo)")]),o._v(". Deixe os demais parâmetros inalterados.")])]),o._v(" "),a("li",[a("p",[o._v("Na operação "),a("router-link",{attrs:{to:"/pt-br/"}},[o._v("Aplicar Modelo")]),o._v(", selecione "),a("em",[o._v("“petal_length”")]),o._v(", "),a("em",[o._v("“petal_width”")]),o._v(", "),a("em",[o._v("“sepal_length”")]),o._v(" e "),a("em",[o._v("“sepal_width”")]),o._v(" no campo "),a("strong",[o._v("Atributo(s) previsor(es)")]),o._v(" e preencha "),a("em",[o._v("“resultado”")]),o._v(" no campo "),a("strong",[o._v("Nome do novo atributo (herdado do modelo)")]),o._v(". Neste exemplo, a operação "),a("strong",[o._v("Aplicar Modelo")]),o._v(" aplica o modelo produzido pelo "),a("router-link",{attrs:{to:"/pt-br/"}},[o._v("Random Forest")]),o._v(" (neste caso, um modelo de classificação) em um conjunto de dados não visto durante o treinamento de tal algoritmo de aprendizado (i.e., em um conjunto de teste). O resultado desta operação é representado por predições feitas em tal conjunto.\n"),a("img",{attrs:{src:"/vuepress/img/spark/modelo_e_avaliacao/aplicar_modelo/image2.png",alt:"Formulário Aplicar Modelo"}})],1)]),o._v(" "),a("li",[a("p",[o._v("Na operação "),a("router-link",{attrs:{to:"/pt-br/"}},[o._v("Avaliar Modelo")]),o._v(", selecione "),a("em",[o._v("“resultado”")]),o._v(" no campo "),a("strong",[o._v("Atributo usado para predição")]),o._v(". Selecione "),a("em",[o._v("“class_index”")]),o._v(" no campo "),a("strong",[o._v("Atributo usado como label")]),o._v(". E selecione a métrica "),a("em",[o._v("“F1”")]),o._v(" como "),a("strong",[o._v("Métrica para avaliação")]),o._v(".")],1)]),o._v(" "),a("li",[a("p",[o._v("Execute o fluxo e visualize o resultado, i.e., a matriz de confusão gerada para as predições do modelo de árvore de decisão e, consequentemente, a tabela representando as métricas de classificação (derivadas da matriz de confusão). "),a("br"),o._v(" "),a("img",{attrs:{src:"/vuepress/img/spark/modelo_e_avaliacao/aplicar_modelo/image1.png",alt:"Gráfico esultado da avaliação"}}),a("br"),o._v(" "),a("img",{attrs:{src:"/vuepress/img/spark/modelo_e_avaliacao/aplicar_modelo/image3.png",alt:"Tabela resultado da avaliação"}})])])]),o._v(" "),a("hr"),o._v(" "),a("p",[o._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])},[],!1,null,null,null);e.default=r.exports}}]);