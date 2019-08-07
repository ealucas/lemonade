(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{208:function(e,o,a){"use strict";a.r(o);var t=a(0),r=Object(t.a)({},function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"aplicar-modelo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aplicar-modelo","aria-hidden":"true"}},[e._v("#")]),e._v(" Aplicar Modelo")]),e._v(" "),a("p",[e._v("Aplica o modelo de aprendizado de máquina em um (novo) conjunto de dados (e.g., um conjunto de teste) e retorna o resultado.")]),e._v(" "),a("h3",{attrs:{id:"conectores"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conectores","aria-hidden":"true"}},[e._v("#")]),e._v(" Conectores")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Entrada")]),e._v(" "),a("th",[e._v("Saída")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Dados de teste e modelo de aprendizado")]),e._v(" "),a("td",[e._v("Dados de saída resultantes da aplicação do modelo de aprendizado nos dados de entrada")])])])]),e._v(" "),a("h3",{attrs:{id:"tarefa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tarefa","aria-hidden":"true"}},[e._v("#")]),e._v(" Tarefa")]),e._v(" "),a("p",[e._v("Nome da Tarefa")]),e._v(" "),a("h3",{attrs:{id:"aba-execucao"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aba-execucao","aria-hidden":"true"}},[e._v("#")]),e._v(" Aba Execução")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parâmetro")]),e._v(" "),a("th",[e._v("Detalhe")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[e._v("Atributo com Features")])]),e._v(" "),a("td",[e._v("Atributos que devem ser usados na aplicação do modelo de aprendizado")])]),e._v(" "),a("tr",[a("td",[a("strong",[e._v("Nome do novo atributo (herdado do modelo)")])]),e._v(" "),a("td",[e._v("Atributo contendo as predições do modelo nos dados de teste")])])])]),e._v(" "),a("p",[a("router-link",{attrs:{to:"/pt-br/"}},[e._v("Aba Aparência")])],1),e._v(" "),a("p",[a("router-link",{attrs:{to:"/pt-br/"}},[e._v("Aba Resultados")])],1),e._v(" "),a("h2",{attrs:{id:"exemplo-de-utilizacao"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exemplo-de-utilizacao","aria-hidden":"true"}},[e._v("#")]),e._v(" Exemplo de Utilização")]),e._v(" "),a("p",[a("strong",[e._v("Objetivo:")]),e._v(" Aplicar o modelo criado pelo classificador "),a("router-link",{attrs:{to:"/pt-br/"}},[e._v("Random Forest")]),e._v("  em um conjunto de dados não visto no treinamento de tal classificador.")],1),e._v(" "),a("p",[a("strong",[e._v("Base de Dados:")]),e._v(" "),a("router-link",{attrs:{to:"/pt-br/"}},[e._v("Íris")])],1),e._v(" "),a("p",[a("img",{attrs:{src:"/vuepress/img/spark/modelo_e_avaliacao/aplicar_modelo/image4.png",alt:"Ler dados"}})]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Adicione uma base de dados por meio da operação "),a("router-link",{attrs:{to:"/pt-br/"}},[e._v("Ler dados")]),e._v(".")],1)]),e._v(" "),a("li",[a("p",[e._v("Utilize a operação "),a("router-link",{attrs:{to:"/pt-br/"}},[e._v("Converter categórico para numérico")]),e._v(" para converter os valores do atributo classe em valores numéricos. Para isso, utilize "),a("em",[e._v("“class”")]),e._v(" no campo "),a("strong",[e._v("Atributos")]),e._v(", "),a("em",[e._v("String")]),e._v(" como "),a("strong",[e._v("Tipo de indexador")]),e._v(" e "),a("em",[e._v("“class_index”")]),e._v(" como "),a("strong",[e._v("Nome para novo(s) atributos indexados")]),e._v(". \\")],1)]),e._v(" "),a("li",[a("p",[e._v("Utilize a operação "),a("router-link",{attrs:{to:"/pt-br/"}},[e._v("Divisão percentual")]),e._v(" para dividir a base de dados em treino e teste. No parâmetro "),a("strong",[e._v("Pesos")]),e._v(", calibre-o utilizando 50% dos dados para treinar e 50% para testar.")],1)]),e._v(" "),a("li",[a("p",[e._v("Na operação "),a("strong",[e._v("Random Forest")]),e._v(", selecione "),a("em",[e._v("“petal_length”")]),e._v(", "),a("em",[e._v("“petal_width”")]),e._v(", "),a("em",[e._v("“sepal_length”")]),e._v(" e "),a("em",[e._v("“sepal_width”")]),e._v(" no campo "),a("strong",[e._v("Atributo(s) previsor(es)")]),e._v(". Selecione "),a("em",[e._v("“class_index”")]),e._v(" no campo "),a("strong",[e._v("Atributo com o rótulo")]),e._v(" e preencha "),a("em",[e._v("“resultado”")]),e._v(" no campo "),a("strong",[e._v("Atributo com a predição (novo)")]),e._v(". Deixe os demais parâmetros inalterados.")])]),e._v(" "),a("li",[a("p",[e._v("Na operação "),a("router-link",{attrs:{to:"/pt-br/"}},[e._v("Aplicar Modelo")]),e._v(", selecione "),a("em",[e._v("“petal_length”")]),e._v(", "),a("em",[e._v("“petal_width”")]),e._v(", "),a("em",[e._v("“sepal_length”")]),e._v(" e "),a("em",[e._v("“sepal_width”")]),e._v(" no campo "),a("strong",[e._v("Atributo(s) previsor(es)")]),e._v(" e preencha "),a("em",[e._v("“resultado”")]),e._v(" no campo "),a("strong",[e._v("Nome do novo atributo (herdado do modelo)")]),e._v(". Neste exemplo, a operação "),a("strong",[e._v("Aplicar Modelo")]),e._v(" aplica o modelo produzido pelo "),a("router-link",{attrs:{to:"/pt-br/"}},[e._v("Random Forest")]),e._v(" (neste caso, um modelo de classificação) em um conjunto de dados não visto durante o treinamento de tal algoritmo de aprendizado (i.e., em um conjunto de teste). O resultado desta operação é representado por predições feitas em tal conjunto.\n"),a("img",{attrs:{src:"/vuepress/img/spark/modelo_e_avaliacao/aplicar_modelo/image2.png",alt:"Formulário Aplicar Modelo"}})],1)]),e._v(" "),a("li",[a("p",[e._v("Na operação "),a("router-link",{attrs:{to:"/pt-br/"}},[e._v("Avaliar Modelo")]),e._v(", selecione "),a("em",[e._v("“resultado”")]),e._v(" no campo "),a("strong",[e._v("Atributo usado para predição")]),e._v(". Selecione "),a("em",[e._v("“class_index”")]),e._v(" no campo "),a("strong",[e._v("Atributo usado como label")]),e._v(". E selecione a métrica "),a("em",[e._v("“F1”")]),e._v(" como "),a("strong",[e._v("Métrica para avaliação")]),e._v(".")],1)]),e._v(" "),a("li",[a("p",[e._v("Execute o fluxo e visualize o resultado, i.e., a matriz de confusão gerada para as predições do modelo de árvore de decisão e, consequentemente, a tabela representando as métricas de classificação (derivadas da matriz de confusão). "),a("br"),e._v(" "),a("img",{attrs:{src:"/vuepress/img/spark/modelo_e_avaliacao/aplicar_modelo/image1.png",alt:"Gráfico esultado da avaliação"}}),a("br"),e._v(" "),a("img",{attrs:{src:"/vuepress/img/spark/modelo_e_avaliacao/aplicar_modelo/image3.png",alt:"Tabela resultado da avaliação"}})])])]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])},[],!1,null,null,null);o.default=r.exports}}]);