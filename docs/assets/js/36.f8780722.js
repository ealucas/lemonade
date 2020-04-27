(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{322:function(e,o,a){"use strict";a.r(o);var r=a(28),t=Object(r.a)({},(function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"regressor-huber"}},[e._v("Regressor Huber")]),e._v(" "),a("p",[e._v("A operação Regressor Huber tem como objetivo criar um modelo, que é robusto para "),a("a",{attrs:{href:"#outliers"}},[e._v("outliers")]),e._v(". O HuberRegressor é diferente\nporque aplica uma perda linear a amostras classificadas como "),a("a",{attrs:{href:"#outliers"}},[e._v("outliers")]),e._v(". Uma amostra é classificada como inlier\nse o erro absoluto dessa amostra for menor que um determinado limite. Além disso, não ignora o efeito dos "),a("a",{attrs:{href:"#outliers"}},[e._v("outliers")]),e._v(",\nmas atribui um peso menor a eles.")]),e._v(" "),a("h3",{attrs:{id:"conectores"}},[e._v("Conectores")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Entrada")]),e._v(" "),a("th",[e._v("Saída")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Dados utilizados para treinar o modelo")]),e._v(" "),a("td",[e._v("Dados de saída e modelo do algoritmo de regressão")])])])]),e._v(" "),a("h3",{attrs:{id:"tarefa"}},[e._v("Tarefa")]),e._v(" "),a("p",[e._v("Nome da Tarefa")]),e._v(" "),a("h3",{attrs:{id:"aba-execucao"}},[e._v("Aba Execução")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parâmetro")]),e._v(" "),a("th",[e._v("Detalhe")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[e._v("Atributo(s) previsor(es)")])]),e._v(" "),a("td",[e._v("Atributo que será usado para treinamento")])]),e._v(" "),a("tr",[a("td",[a("strong",[e._v("Atributo com o rótulo")])]),e._v(" "),a("td",[e._v("Atributo a ser predito")])]),e._v(" "),a("tr",[a("td",[a("strong",[e._v("Atributos com a predição")])]),e._v(" "),a("td",[e._v("Atributo contendo a predição do modelo")])]),e._v(" "),a("tr",[a("td",[a("strong",[e._v("Tolerância")])]),e._v(" "),a("td",[e._v("Tolerância para critérios de parada")])]),e._v(" "),a("tr",[a("td",[a("strong",[e._v("Epsilon")])]),e._v(" "),a("td",[e._v("O parâmetro epsilon controla o número de amostras que devem ser classificadas como outliers. Quanto menor o epsilon, mais robusto é para outliers")])]),e._v(" "),a("tr",[a("td",[a("strong",[e._v("Número máximo de iterações")])]),e._v(" "),a("td",[e._v("Número máximo de iterações")])]),e._v(" "),a("tr",[a("td",[a("strong",[e._v("Alpha")])]),e._v(" "),a("td",[e._v("Parâmetro de Regularização")])]),e._v(" "),a("tr",[a("td",[a("strong",[e._v("Fit interceptação")])]),e._v(" "),a("td",[e._v("Se deve ou não caber na interceptação. Isso pode ser definido como False se os dados já estiverem centralizados em torno da origem")])])])]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/pt-br/sklearn/documentacao-geral/aba-aparencia.html"}},[e._v("Aba Aparência")])],1),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/pt-br/sklearn/documentacao-geral/aba-resultados.html"}},[e._v("Aba Resultados")])],1),e._v(" "),a("h2",{attrs:{id:"definicoes"}},[e._v("Definições")]),e._v(" "),a("h3",{attrs:{id:"outliers"}},[e._v("Outliers")]),e._v(" "),a("p",[e._v("Os outliers são dados que se diferem drasticamente de todos os outros. Em outras palavras,\num outlier é um valor que foge da normalidade.")]),e._v(" "),a("h2",{attrs:{id:"exemplo-de-utilizacao"}},[e._v("Exemplo de Utilização")]),e._v(" "),a("p",[a("strong",[e._v("Objetivo:")]),e._v(" Utilizar o modelo construído pela operação Regressor Huber para predizer a qualidade de um vinho."),a("br"),e._v(" "),a("strong",[e._v("Base de Dados:")]),e._v(" Qualidade da Variante Vermelha do Vinho Verde Português - "),a("RouterLink",{attrs:{to:"/pt-br/sklearn/base-de-dados/#wine"}},[e._v("Wine Red Quality")])],1),e._v(" "),a("p",[a("img",{attrs:{src:"/img/sklearn/aprendizado_de_maquina/regressor_huber/image3.png",alt:"Fluxo - Ler dados"}})]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Leia a base de dados por meio da operação "),a("RouterLink",{attrs:{to:"/pt-br/sklearn/entrada-e-saida/ler-dados.html"}},[e._v("Ler dados")]),e._v(".")],1)]),e._v(" "),a("li",[a("p",[e._v("Utilize a operação "),a("RouterLink",{attrs:{to:"/pt-br/sklearn/pre-processamento-de-dados/amostragem-divisao-percentual.html"}},[e._v("Divisão percentual")]),e._v(" para dividir a base de dados em treino e teste. No parâmetro "),a("strong",[e._v("Percentual")]),e._v(", calibre-o utilizando 50% dos dados para treinar (1.ª parte) e 50% para testar (2.ª parte).")],1)]),e._v(" "),a("li",[a("p",[e._v("Na Operação "),a("strong",[e._v("Regressor Huber")]),e._v(", selecione "),a("em",[e._v("“alcohol”")]),e._v(", "),a("em",[e._v("“chlorides”")]),e._v(", "),a("em",[e._v("“citric_acid”")]),e._v(", "),a("em",[e._v("“density”")]),e._v(", "),a("em",[e._v("“fixed_acidity”")]),e._v(", "),a("em",[e._v("“free_sulfur_dioxide”")]),e._v(", "),a("em",[e._v("“pH”")]),e._v(", "),a("em",[e._v("“residual_sugar”")]),e._v(", "),a("em",[e._v("“sulphates”")]),e._v(", "),a("em",[e._v("“total_sulfur_dioxide”")]),e._v(" e "),a("em",[e._v("“volatile_acidity”")]),e._v(" no campo "),a("strong",[e._v("Atributo(s) previsor(es)")]),e._v(". Selecione "),a("em",[e._v("“quality”")]),e._v(" no campo  "),a("strong",[e._v("Atributo com o rótulo")]),e._v(" e preencha "),a("em",[e._v("“resultado”")]),e._v(" no campo "),a("strong",[e._v("Atributo com a predição (novo)")]),e._v(". Preencha 100 no campo "),a("strong",[e._v("Iterações máximas")]),e._v(", 0.35 no campo "),a("strong",[e._v("Regularização")]),e._v(" e 0.8 no campo "),a("strong",[e._v("Mix. para ElasticNet")]),e._v(". Deixe os demais parâmetros inalterados."),a("br"),e._v(" "),a("img",{attrs:{src:"/img/sklearn/aprendizado_de_maquina/regressor_huber/image4.png",alt:"Tabela - Regressor huber 1"}}),e._v(" "),a("img",{attrs:{src:"/img/sklearn/aprendizado_de_maquina/regressor_huber/image2.png",alt:"Tabela - Regressor huber 2"}})])]),e._v(" "),a("li",[a("p",[e._v("Na operação "),a("RouterLink",{attrs:{to:"/pt-br/sklearn/modelo-e-avaliacao/aplicar-modelo.html"}},[e._v("Aplicar Modelo")]),e._v(", selecione "),a("em",[e._v("“alcohol”")]),e._v(", "),a("em",[e._v("“chlorides”")]),e._v(", "),a("em",[e._v("“citric_acid”")]),e._v(", "),a("em",[e._v("“density”")]),e._v(", "),a("em",[e._v("“fixed_acidity”")]),e._v(", "),a("em",[e._v("“free_sulfur_dioxide”")]),e._v(", "),a("em",[e._v("“pH”")]),e._v(", "),a("em",[e._v("“residual_sugar”")]),e._v(", "),a("em",[e._v("“sulphates”")]),e._v(", "),a("em",[e._v("“total_sulfur_dioxide”")]),e._v(" e "),a("em",[e._v("“volatile_acidity”")]),e._v(" no campo "),a("strong",[e._v("Atributo(s) previsor(es)")]),e._v(" e preencha "),a("em",[e._v("“resultado”")]),e._v(" no campo "),a("strong",[e._v("Nome do novo atributo (herdado do modelo)")]),e._v(".")],1)]),e._v(" "),a("li",[a("p",[e._v("Na operação "),a("RouterLink",{attrs:{to:"/pt-br/sklearn/modelo-e-avaliacao/avaliar-modelo.html"}},[e._v("Avaliar Modelo")]),e._v(", selecione "),a("em",[e._v("“resultado”")]),e._v(" no campo "),a("strong",[e._v("Atributo usado para predição")]),e._v(". Selecione "),a("em",[e._v("“quality”")]),e._v(" no campo "),a("strong",[e._v("Atributo usado como label")]),e._v(" e a métrica "),a("em",[e._v("“Raiz do erro quadrático médio”")]),e._v(" como "),a("strong",[e._v("Métrica para avaliação")]),e._v(".")],1)]),e._v(" "),a("li",[a("p",[e._v("Execute o fluxo e visualize o resultado, que neste caso está de acordo com a raiz do erro quadrático médio "),a("strong",[e._v("(Root Mean Square Error ou RMSE)")]),e._v(":\n"),a("img",{attrs:{src:"/img/sklearn/aprendizado_de_maquina/regressor_linear/image1.png",alt:"Resultado"}})])])]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])}),[],!1,null,null,null);o.default=t.exports}}]);