(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{494:function(a,e,o){"use strict";o.r(e);var t=o(45),r=Object(t.a)({},(function(){var a=this,e=a.$createElement,o=a._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[o("h1",{attrs:{id:"perceptron-multicamadas"}},[a._v("Perceptron multicamadas")]),a._v(" "),o("p",[a._v("O classificador Perceptron Multicamadas (Multi-Layer perceptron) baseia-se em abstrações de redes neurais encontradas no cérebro. Esse classificador cria um modelo com camadas de neurônios conectadas, considerando que cada camada possui diversos neurônios")]),a._v(" "),o("h3",{attrs:{id:"conectores"}},[a._v("Conectores")]),a._v(" "),o("table",[o("thead",[o("tr",[o("th",[a._v("Entrada")]),a._v(" "),o("th",[a._v("Saída")])])]),a._v(" "),o("tbody",[o("tr",[o("td",[a._v("Dados utilizados para treinar o modelo")]),a._v(" "),o("td",[a._v("Dados de saída e modelo do algoritmo de classificação")])])])]),a._v(" "),o("h3",{attrs:{id:"tarefa"}},[a._v("Tarefa")]),a._v(" "),o("p",[a._v("Nome da Tarefa")]),a._v(" "),o("h3",{attrs:{id:"aba-execucao"}},[a._v("Aba Execução")]),a._v(" "),o("table",[o("thead",[o("tr",[o("th",[a._v("Parâmetro")]),a._v(" "),o("th",[a._v("Detalhe")])])]),a._v(" "),o("tbody",[o("tr",[o("td",[o("strong",[a._v("Atributo(s) previsor(es)")])]),a._v(" "),o("td",[a._v("Atributo(s) que será(ão) usado(s) para treinamento")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Atributo com o rótulo")])]),a._v(" "),o("td",[a._v("Atributo a ser classificado")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Atributos com a predição (novo)")])]),a._v(" "),o("td",[a._v("Atributo contendo a predição do modelo")])]),a._v(" "),o("tr",[o("td",[o("strong",[o("a",{attrs:{href:"#camadas"}},[a._v("Camadas")]),a._v(" (informe os tamanhos separados por vírgula)")])]),a._v(" "),o("td",[a._v("O elemento de ordem i representa o número de neurónios.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Ativação")])]),a._v(" "),o("td",[a._v("Função de ativação para a camada oculta.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Solucionador")])]),a._v(" "),o("td",[a._v("O solucionador para otimização de peso.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Alpha")])]),a._v(" "),o("td",[a._v("Parâmetro de penalidade L2 (termo de regularização).")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Número máximo de iterações")])]),a._v(" "),o("td",[a._v("O solucionador itera até a convergência ou esse número de iterações.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Tolerância")])]),a._v(" "),o("td",[a._v("Tolerância para a otimização.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Semente")])]),a._v(" "),o("td",[a._v("Semente usada pelo gerador de números aleatórios.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Tamanho do batch")])]),a._v(" "),o("td",[a._v("Tamanho de minibatches para otimizadores estocásticos.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Taxa de Aprendizagem")])]),a._v(" "),o("td",[a._v("Programação da taxa de aprendizado para atualizações de peso.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Taxa inicial de aprendizado")])]),a._v(" "),o("td",[a._v("A taxa de aprendizado inicial usada.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Potência")])]),a._v(" "),o("td",[a._v("O expoente da taxa de aprendizado de escala inversa.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Embaralhar")])]),a._v(" "),o("td",[a._v("Se as amostras devem ser embaralhadas em cada iteração.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Momentum")])]),a._v(" "),o("td",[a._v("Momentum para atualização do gradiente descendente.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Impulso de Nesterovs")])]),a._v(" "),o("td",[a._v("Se deve usar o impulso de Nesterov.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Parada antecipada")])]),a._v(" "),o("td",[a._v("Se a parada precoce deve ser usada para encerrar o treinamento quando a pontuação de validação não está melhorando.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Fração de validação")])]),a._v(" "),o("td",[a._v("A proporção de dados de treinamento a serem retirados como validação definida para a parada inicial.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Beta1")])]),a._v(" "),o("td",[a._v("Taxa de decaimento exponencial para estimativas do segundo vetor de momento em adam.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Beta2")])]),a._v(" "),o("td",[a._v("Taxa de decaimento exponencial para estimativas do segundo vetor de momento em adam.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Epsilon")])]),a._v(" "),o("td",[a._v("Valor para a estabilidade numérica em adam.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Número de iteração sem alteração")])]),a._v(" "),o("td",[a._v("Número máximo de épocas para não atender a melhorias.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Função máxima")])]),a._v(" "),o("td",[a._v("Número máximo de chamadas de função de perda.")])])])]),a._v(" "),o("p",[o("RouterLink",{attrs:{to:"/pt-br/sklearn/documentacao-geral/aba-aparencia.html"}},[a._v("Aba Aparência")])],1),a._v(" "),o("p",[o("RouterLink",{attrs:{to:"/pt-br/sklearn/documentacao-geral/aba-resultados.html"}},[a._v("Aba Resultados")])],1),a._v(" "),o("h2",{attrs:{id:"definicoes"}},[a._v("Definições")]),a._v(" "),o("h3",{attrs:{id:"camadas"}},[a._v("Camadas")]),a._v(" "),o("p",[a._v("Esse classificador utiliza a função (de ativação) logística nos neurônios em camadas comuns (intermediárias) e a função softmax nos neurônios na camada de saída.")]),a._v(" "),o("h2",{attrs:{id:"exemplo-de-utilizacao"}},[a._v("Exemplo de Utilização")]),a._v(" "),o("p",[o("strong",[a._v("Objetivo:")]),a._v(" Utilizar o modelo do Perceptron Multicamadas para classificar a espécie da planta Íris."),o("br"),a._v(" "),o("strong",[a._v("Base de Dados:")]),a._v(" "),o("RouterLink",{attrs:{to:"/pt-br/sklearn/base-de-dados/#iris"}},[a._v("Íris")])],1),a._v(" "),o("p",[o("img",{attrs:{src:"/img/sklearn/aprendizado_de_maquina/classificacao_perceptron_multicamadas/image4.png",alt:"FLuxo de trabalho - Ler dados"}})]),a._v(" "),o("ol",[o("li",[o("p",[a._v("Leia a base de dados Irís por meio da operação "),o("RouterLink",{attrs:{to:"/pt-br/sklearn/entrada-e-saida/ler-dados.html"}},[a._v("Ler dados")]),a._v(".")],1)]),a._v(" "),o("li",[o("p",[a._v("Utilize a operação "),o("RouterLink",{attrs:{to:"/pt-br/sklearn/pre-processamento-de-dados/representacao-de-atributos-converter-categorico-para-numerico.html"}},[a._v("Converter categórico para numérico")]),a._v(" para converter os valores do atributo classe em valores numéricos. Para isso, utilize "),o("em",[a._v("“class”")]),a._v(" no campo "),o("strong",[a._v("Atributos")]),a._v(", "),o("em",[a._v("String")]),a._v(" como "),o("strong",[a._v("Tipo de indexador")]),a._v(" e "),o("em",[a._v("“class_index”")]),a._v(" como "),o("strong",[a._v("Nome para novo(s) atributos indexados")]),a._v(".")],1)]),a._v(" "),o("li",[o("p",[a._v("Utilize a operação "),o("RouterLink",{attrs:{to:"/pt-br/sklearn/pre-processamento-de-dados/amostragem-divisao-percentual.html"}},[a._v("Divisão percentual")]),a._v(" para dividir a base de dados em treino e teste. No parâmetro "),o("strong",[a._v("Pesos")]),a._v(", calibre-o utilizando 50% dos dados para treinar e 50% para testar.")],1)]),a._v(" "),o("li",[o("p",[a._v("Na operação "),o("strong",[a._v("Perceptron Multicamadas")]),a._v(", selecione "),o("em",[a._v("“petal_length”")]),a._v(", "),o("em",[a._v("“petal_width”")]),a._v(", "),o("em",[a._v("“sepal_length”")]),a._v(" e "),o("em",[a._v("“sepal_width”")]),a._v(" no campo "),o("strong",[a._v("Atributo(s) previsor(es)")]),a._v(". Selecione "),o("em",[a._v("“class_index”")]),a._v(" no campo "),o("strong",[a._v("Atributo com o rótulo")]),a._v(" e preencha ‘resultado’ no campo "),o("strong",[a._v("Atributo com a predição (novo)")]),a._v(". Além disso, indique que será utilizada uma camada de entrada, uma escondida e uma de saída, preenchendo "),o("strong",[a._v("Camadas")]),a._v(" com "),o("em",[a._v("“4,20,4”")]),a._v(". Isso indicará que irão existir quatro neurônios na primeira camada (iguais aos números de atributos da base Íris), 20 na camada escondida, e quatro na de saída (também iguais aos números de atributos da base Íris). Deixe os demais parâmetros inalterados."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/sklearn/aprendizado_de_maquina/classificacao_perceptron_multicamadas/image3.png",alt:"Formulário Perceptron Multicamadas - parte 1"}}),a._v(" "),o("img",{attrs:{src:"/img/sklearn/aprendizado_de_maquina/classificacao_perceptron_multicamadas/image2.png",alt:"Formulário Perceptron Multicamadas - parte 2"}})])]),a._v(" "),o("li",[o("p",[a._v("Na operação "),o("RouterLink",{attrs:{to:"/pt-br/sklearn/modelo-e-avaliacao/aplicar-modelo.html"}},[a._v("Aplicar Modelo")]),a._v(", selecione "),o("em",[a._v("“petal_length”")]),a._v(", "),o("em",[a._v("“petal_width”")]),a._v(", "),o("em",[a._v("“sepal_length”")]),a._v(" e "),o("em",[a._v("“sepal_width”")]),a._v(" no campo "),o("strong",[a._v("Atributo(s) previsor(es)")]),a._v(" e preencha "),o("em",[a._v("“resultado”")]),a._v(" no campo "),o("strong",[a._v("Nome do novo atributo")]),a._v(".")],1)]),a._v(" "),o("li",[o("p",[a._v("Na operação "),o("RouterLink",{attrs:{to:"/pt-br/sklearn/modelo-e-avaliacao/avaliar-modelo.html"}},[a._v("Avaliar Modelo")]),a._v(", selecione "),o("em",[a._v("“resultado”")]),a._v(" no campo "),o("strong",[a._v("Atributo usado para predição")]),a._v(". Selecione "),o("em",[a._v("“class_index”")]),a._v(" no campo "),o("strong",[a._v("Atributo usado como label")]),a._v(" e a métrica "),o("em",[a._v("“F1”")]),a._v(" como "),o("strong",[a._v("Métrica para avaliação")]),a._v(".")],1)]),a._v(" "),o("li",[o("p",[a._v("Execute o fluxo e visualize o resultado, i.e., a matriz de confusão gerada para as predições do modelo de árvore de decisão e, consequentemente, a tabela representando as métricas de classificação (derivadas da matriz de confusão)."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/sklearn/aprendizado_de_maquina/classificacao_perceptron_multicamadas/image1.png",alt:"Gráfico - resultado"}}),a._v(" "),o("img",{attrs:{src:"/img/sklearn/aprendizado_de_maquina/classificacao_perceptron_multicamadas/image5.png",alt:"Tabela - resultado"}})])])]),a._v(" "),o("hr"),a._v(" "),o("p",[a._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])}),[],!1,null,null,null);e.default=r.exports}}]);