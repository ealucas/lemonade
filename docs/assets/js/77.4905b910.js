(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{501:function(a,e,o){"use strict";o.r(e);var t=o(45),r=Object(t.a)({},(function(){var a=this,e=a.$createElement,o=a._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[o("h1",{attrs:{id:"contar-frequencia-dos-termos"}},[a._v("Contar frequência dos termos")]),a._v(" "),o("p",[a._v("É uma operação de "),o("strong",[a._v("processamento de texto")]),a._v(" que conta a quantidade de ocorrências dos termos do texto.")]),a._v(" "),o("h3",{attrs:{id:"conectores"}},[a._v("Conectores")]),a._v(" "),o("table",[o("thead",[o("tr",[o("th",[a._v("Entrada")]),a._v(" "),o("th",[a._v("Saída")])])]),a._v(" "),o("tbody",[o("tr",[o("td",[a._v("Uma base de dados")]),a._v(" "),o("td",[a._v("Múltiplas fontes com os dados modificados")])])])]),a._v(" "),o("h3",{attrs:{id:"tarefa"}},[a._v("Tarefa")]),a._v(" "),o("p",[a._v("Nome da Tarefa")]),a._v(" "),o("h3",{attrs:{id:"aba-execucao"}},[a._v("Aba Execução")]),a._v(" "),o("table",[o("thead",[o("tr",[o("th",[a._v("Parâmetro")]),a._v(" "),o("th",[a._v("Detalhe")])])]),a._v(" "),o("tbody",[o("tr",[o("td",[o("strong",[a._v("Atributo")])]),a._v(" "),o("td",[a._v("Atributo de entrada")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Nome do novo atributo")])]),a._v(" "),o("td",[a._v("Nome para a nova coluna criada")])]),a._v(" "),o("tr",[o("td",[o("strong",[o("a",{attrs:{href:"#tipos"}},[a._v("Tipo")])])]),a._v(" "),o("td",[a._v("Tipo de transformação")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Tamanho do vocabulário")])]),a._v(" "),o("td",[a._v("Tamanho do vocabulário a ser avaliado")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Frequência mínima de documentos")])]),a._v(" "),o("td",[a._v("Frequência mínima de documentos")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Frequência mínima do termo")])]),a._v(" "),o("td",[a._v("Frequência mínima do termo")])])])]),a._v(" "),o("p",[o("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-resultados.html"}},[a._v("Aba Resultados")])],1),a._v(" "),o("h2",{attrs:{id:"definicoes"}},[a._v("Definições")]),a._v(" "),o("h3",{attrs:{id:"tipos"}},[a._v("Tipos")]),a._v(" "),o("ul",[o("li",[o("strong",[a._v("Frequência das palavras")]),a._v(": Contabiliza a frequência dos termos dentro do conjunto avaliado.")]),a._v(" "),o("li",[o("strong",[a._v("Tabela hash de termos por frequência")]),a._v(": Mapeia a sequência de palavras para suas frequências de termos, gerando uma tabela hash.")]),a._v(" "),o("li",[o("strong",[a._v("word2vec")]),a._v(": O Word2vec produz como saída um espaço vetorial, em que cada palavra da base é atribuída a um vetor correspondente no espaço, de modo que as palavras que compartilham contextos comuns na base fiquem localizadas próximas umas das outras no espaço.")])]),a._v(" "),o("h2",{attrs:{id:"exemplo-de-utilizacao"}},[a._v("Exemplo de Utilização")]),a._v(" "),o("p",[o("strong",[a._v("Objetivo:")]),a._v(" Contar a frequência dos termos."),o("br"),a._v(" "),o("strong",[a._v("Base de Dados:")]),a._v(" "),o("RouterLink",{attrs:{to:"/pt-br/spark/base-de-dados/#sentiment-labelled-sentences"}},[a._v("Sentiment Labelled Sentences")])],1),a._v(" "),o("p",[o("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-contar-frequencia-dos-termos/image1.png",alt:"Fluxo de trabalho"}})]),a._v(" "),o("ol",[o("li",[o("p",[a._v("Use a operação "),o("RouterLink",{attrs:{to:"/pt-br/spark/entrada-e-saida/ler-dados.html"}},[a._v("Ler dados")]),a._v(" para que seja feita a leitura da base. Selecione a fonte de dados "),o("em",[a._v("“imdb_labelled.txt”")]),a._v("."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-contar-frequencia-dos-termos/image6.png",alt:"Operação Ler dados"}})],1)]),a._v(" "),o("li",[o("p",[a._v("Use a operação de "),o("RouterLink",{attrs:{to:"/pt-br/spark/pre-processamento-de-dados/operacoes-textuais-dividir-texto-por-delimitador.html"}},[a._v("Dividir texto por delimitador")]),a._v(". Selecione "),o("em",[a._v("“Simples, use espaços como delimitadores”")]),a._v(" para o campo "),o("strong",[a._v("Tipo")]),a._v(". Selecione "),o("em",[a._v("“value”")]),a._v(" para o campo "),o("strong",[a._v("Atributo")]),a._v(" e "),o("em",[a._v("“1”")]),a._v(" para o campo "),o("strong",[a._v("Tamanho Mínimo das Partes")]),a._v("."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-contar-frequencia-dos-termos/image5.png",alt:"Operação Dividir texto por delimitador"}})],1)]),a._v(" "),o("li",[o("p",[a._v("Na operação "),o("RouterLink",{attrs:{to:"/pt-br/spark/pre-processamento-de-dados/operacoes-textuais-contar-frequencia-dos-termos.html"}},[a._v("Contar frequência dos termos")]),a._v(", defina "),o("em",[a._v("“value_tokenized”")]),a._v(" para o campo "),o("strong",[a._v("Atributo")]),a._v(", no campo Tipo coloque "),o("em",[a._v("“Contar a frequência do termo”")]),a._v(", no campo "),o("strong",[a._v("Tamanho do Vocabulário")]),a._v(" coloque o valor "),o("em",[a._v("“100000”")]),a._v(" e no campo "),o("strong",[a._v("Frequência Mínima do Termo (TF)")]),a._v(" coloque "),o("em",[a._v("“1”")]),a._v("."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-contar-frequencia-dos-termos/image2.png",alt:"Operação Contar frequência dos termos"}})],1)]),a._v(" "),o("li",[o("p",[a._v("Execute o Fluxo e observe os resultados."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-contar-frequencia-dos-termos/image4.png",alt:"Resultado"}}),a._v(" "),o("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-contar-frequencia-dos-termos/image3.png",alt:"Resultado"}})])])]),a._v(" "),o("hr"),a._v(" "),o("p",[a._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])}),[],!1,null,null,null);e.default=r.exports}}]);