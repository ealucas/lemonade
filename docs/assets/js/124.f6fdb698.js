(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{465:function(a,e,r){"use strict";r.r(e);var o=r(45),i=Object(o.a)({},(function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"regressao-linear-generalizada"}},[a._v("Regressão Linear Generalizada")]),a._v(" "),r("p",[a._v("Regressão linear generalizada, é uma versão generalizada do modelo de regressão linear que estima uma função linear que minimiza a distância entre os pontos do modelo à função usando uma distribuição para a função de perda genérica, não assumindo uma distribuição normal assim como na regressão linear.")]),a._v(" "),r("h3",{attrs:{id:"conectores"}},[a._v("Conectores")]),a._v(" "),r("table",[r("thead",[r("tr",[r("th",[a._v("Entrada")]),a._v(" "),r("th",[a._v("Saída")])])]),a._v(" "),r("tbody",[r("tr",[r("td",[a._v("Dados utilizados para treinar o modelo")]),a._v(" "),r("td",[a._v("Dados de saída e Modelo do algoritmo de regressão")])])])]),a._v(" "),r("h3",{attrs:{id:"tarefa"}},[a._v("Tarefa")]),a._v(" "),r("p",[a._v("Nome da Tarefa")]),a._v(" "),r("h3",{attrs:{id:"aba-execucao"}},[a._v("Aba Execução")]),a._v(" "),r("table",[r("thead",[r("tr",[r("th",[a._v("Parâmetro")]),a._v(" "),r("th",[a._v("Detalhe")])])]),a._v(" "),r("tbody",[r("tr",[r("td",[r("strong",[a._v("Atributo(s) previsor(es)")])]),a._v(" "),r("td",[a._v("Atributo que será usado para treinamento")])]),a._v(" "),r("tr",[r("td",[r("strong",[a._v("Atributo com o rótulo")])]),a._v(" "),r("td",[a._v("Atributo a ser predito")])]),a._v(" "),r("tr",[r("td",[r("strong",[a._v("Atributos com a predição")])]),a._v(" "),r("td",[a._v("Atributo contendo a predição do modelo")])]),a._v(" "),r("tr",[r("td",[r("strong",[a._v("Iterações máximas")])]),a._v(" "),r("td",[a._v("Define o número máximos de iterações para a convergência do algoritmo, quanto maior mais iterações serão permitidas para encontrar a função linear para os dados, o valor padrão é 100")])]),a._v(" "),r("tr",[r("td",[r("strong",[a._v("Regularização")])]),a._v(" "),r("td",[a._v("Valor para regularizar o fitting da função de perda do algoritmo, o valor padrão é 0")])]),a._v(" "),r("tr",[r("td",[r("strong",[a._v("Mix. para ElasticNet (entre 0 e 1)")])]),a._v(" "),r("td",[a._v("Parâmetro de ajuste usado para a minimização da função objetivo usando uma combinação de L1 e L2. Valor por padrão é 0")])]),a._v(" "),r("tr",[r("td",[r("strong",[a._v("Família")])]),a._v(" "),r("td",[a._v("Função de distribuição que representa a dispersão do modelo de predição, este é uma generalização da família de dispersão exponencial.")])]),a._v(" "),r("tr",[r("td",[r("strong",[a._v("Link prediction")])]),a._v(" "),r("td",[a._v("Parâmetro que gera a relação entre a predição linear e a média da função de distribuição do modelo")])]),a._v(" "),r("tr",[r("td",[r("strong",[a._v("Parâmetro de regularização")])]),a._v(" "),r("td",[a._v("Valor para regularizar o "),r("em",[a._v("fitting")]),a._v(" da função de perda do algoritmo, esse parâmetro é usado para evitar "),r("em",[a._v("overfitting")]),a._v(", o valor padrão é 0")])]),a._v(" "),r("tr",[r("td",[r("strong",[a._v("Solucionador (Solver)")])]),a._v(" "),r("td",[a._v("Algoritmo gera a solução da otimização do problema de regressão. Valor padrão dessa variável é auto")])]),a._v(" "),r("tr",[r("td",[r("strong",[a._v("Métrica para validação cruzada")])]),a._v(" "),r("td",[a._v("Define a métrica utilizada dentro da validação cruzada (se aplicável) para avaliar o modelo de classificação dentro das k partições")])]),a._v(" "),r("tr",[r("td",[r("strong",[a._v("Atributo com o número da partição (fold)")])]),a._v(" "),r("td",[a._v("Define o atributo a ter o número da partição para realizar uma validação cruzada (se aplicável)")])])])]),a._v(" "),r("p",[r("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-aparencia.html"}},[a._v("Aba Aparência")])],1),a._v(" "),r("p",[r("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-resultados.html"}},[a._v("Aba Resultados")])],1),a._v(" "),r("h2",{attrs:{id:"exemplo-de-utilizacao"}},[a._v("Exemplo de Utilização")]),a._v(" "),r("p",[r("strong",[a._v("Objetivo:")]),a._v(" utilizar os dados "),r("em",[a._v("horsepower")]),a._v(" (cavalos de potência de cada carro) e o "),r("em",[a._v("price")]),a._v(" (preço do carro) para estimar o preço a partir da potência do veículo."),r("br"),a._v(" "),r("strong",[a._v("Base de Dados:")]),a._v(" "),r("RouterLink",{attrs:{to:"/pt-br/spark/base-de-dados/#mtcars-com"}},[a._v("mtcars")])],1),a._v(" "),r("p",[r("img",{attrs:{src:"/img/spark/aprendizado-de-maquina/regressor-linear-generalizado/image5.png",alt:"Fluxo de trabalho - Ler Dados"}})]),a._v(" "),r("ol",[r("li",[r("p",[a._v("Adicione uma base de dados por meio da operação "),r("RouterLink",{attrs:{to:"/pt-br/spark/entrada-e-saida/ler-dados.html"}},[a._v("Ler dados")]),a._v("."),r("br"),a._v(" "),r("img",{attrs:{src:"/img/spark/aprendizado-de-maquina/regressor-linear-generalizado/image2.png",alt:"Tabela Ler Dados"}})],1)]),a._v(" "),r("li",[r("p",[a._v("Usando a operação "),r("RouterLink",{attrs:{to:"/pt-br/spark/pre-processamento-de-dados/amostragem-divisao-percentual.html"}},[a._v("Divisão Percentual")]),a._v(" divida a base de dados em treino e teste utilizando uma distribuição de 70% para treino e 30% para teste."),r("br"),a._v(" "),r("img",{attrs:{src:"/img/spark/aprendizado-de-maquina/regressor-linear-generalizado/image1.png",alt:"Dividir percentual"}})],1)]),a._v(" "),r("li",[r("p",[a._v("Na operação "),r("strong",[a._v("Regressão Linear Generalizado")]),a._v(" coloque o número de "),r("em",[a._v("Iterações Máximas")]),a._v(" como 100, preencha 10 no campo "),r("em",[a._v("Profundidade Máxima")]),a._v(", deixe o valor de "),r("em",[a._v("Solver")]),a._v(" como "),r("em",[a._v("Auto")]),a._v(" e o parâmetro de regularização como 0.35. Use a função Gaussiana no campo "),r("em",[a._v("Family")]),a._v(" como probabilidade de distribuição e a função de identidade no campo "),r("em",[a._v("Link Prediction")]),a._v("."),r("br"),a._v(" "),r("img",{attrs:{src:"/img/spark/aprendizado-de-maquina/regressor-linear-generalizado/image9.png",alt:"Operação Regressão Linear"}}),a._v(" "),r("img",{attrs:{src:"/img/spark/aprendizado-de-maquina/regressor-linear-generalizado/image4.png",alt:"Operação Regressão Linear"}})])]),a._v(" "),r("li",[r("p",[a._v("Na operação "),r("RouterLink",{attrs:{to:"/pt-br/spark/modelo-e-avaliacao/aplicar-modelo.html"}},[a._v("Aplicar Modelo")]),a._v(", selecione *"),r("em",[a._v("“Horse_Power”")]),a._v(" no campo "),r("strong",[a._v("Atributos com features")]),a._v(" e preencha "),r("em",[a._v("“prediction”")]),a._v(" no campo "),r("strong",[a._v("Nome do novo atributo")]),a._v("."),r("br"),a._v(" "),r("img",{attrs:{src:"/img/spark/aprendizado-de-maquina/regressor-linear-generalizado/image3.png",alt:"Operação Aplicar Modelo"}})],1)]),a._v(" "),r("li",[r("p",[a._v("Na operação "),r("RouterLink",{attrs:{to:"/pt-br/spark/modelo-e-avaliacao/avaliar-modelo.html"}},[a._v("Avaliar Modelo")]),a._v(", selecione "),r("em",[a._v("“Price”")]),a._v(" no campo *"),r("em",[a._v("Atributo usado para predição")]),a._v(". Selecione "),r("em",[a._v("“prediction”")]),a._v(" no campo "),r("strong",[a._v("Atributo usado como label")]),a._v(". E selecione a métrica "),r("em",[a._v("“Root Mean Square Error”")]),a._v(" como "),r("strong",[a._v("métrica para avaliação")]),a._v("."),r("br"),a._v(" "),r("img",{attrs:{src:"/img/spark/aprendizado-de-maquina/regressor-linear-generalizado/image8.png",alt:"Operação Avaliar Modelo"}})],1)]),a._v(" "),r("li",[r("p",[a._v("Execute o Fluxo e visualize o resultado."),r("br"),a._v(" "),r("img",{attrs:{src:"/img/spark/aprendizado-de-maquina/regressor-linear-generalizado/image7.png",alt:"Resultado"}}),r("br"),a._v(" "),r("img",{attrs:{src:"/img/spark/aprendizado-de-maquina/regressor-linear-generalizado/image6.png",alt:"Resultado Gráfico"}}),r("br"),a._v("\nO valor predito é de 5238.423. No primeiro gráfico residual da predição que investiga o uso da do modelo de predição, podemos ver que a distribuição apresentada se adequa às suposições para o uso da regressão linear generalizada. No segundo gráfico vemos a distribuição dos dados reais que era desejado prever e a reta vermelha que representa a predição feita pelo modelo, podemos ver que a regressão encaixa bem nos dados desejados.")])])]),a._v(" "),r("hr"),a._v(" "),r("p",[a._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])}),[],!1,null,null,null);e.default=i.exports}}]);