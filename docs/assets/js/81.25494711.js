(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{492:function(a,o,e){"use strict";e.r(o);var s=e(45),r=Object(s.a)({},(function(){var a=this,o=a.$createElement,e=a._self._c||o;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"remover-palavras-comuns-stopwords"}},[a._v("Remover palavras comuns (stopwords)")]),a._v(" "),e("p",[a._v("Remove todas as aparições das "),e("em",[a._v("stop words")]),a._v(" em um vetor de texto. As stop words são definidas por uma lista de palavras que pode variar de acordo com o objetivo.")]),a._v(" "),e("h3",{attrs:{id:"conectores"}},[a._v("Conectores")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("Entrada")]),a._v(" "),e("th",[a._v("Saída")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("Dados de entrada com texto para remover stop words e dados contendo um atributo com stop words")]),a._v(" "),e("td",[a._v("Dados de saída com um campo de texto sem as stop words")])])])]),a._v(" "),e("h3",{attrs:{id:"tarefa"}},[a._v("Tarefa")]),a._v(" "),e("p",[a._v("Nome da Tarefa")]),a._v(" "),e("h3",{attrs:{id:"aba-execucao"}},[a._v("Aba Execução")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("Parâmetro")]),a._v(" "),e("th",[a._v("Detalhe")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[a._v("Atributos")])]),a._v(" "),e("td",[a._v("Quais atributos terão as ‘stop words’ removidas")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Nome do novo atributo (alias)")])]),a._v(" "),e("td",[a._v("Nome do novo atributo. Pode-se adicionar mais de um nome separado por vírgula caso tenha sido selecionado mais de um atributo")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Lista de stop words")])]),a._v(" "),e("td",[a._v("Palavras a serem removidas")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Atributo da segunda fonte de dados com as stop words")])]),a._v(" "),e("td",[a._v("Atributo da segunda entrada contendo as palavras a serem removidas")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Diferenciar maiúsculas/minúsculas")])]),a._v(" "),e("td",[a._v("Diferencia maiúsculas de minúsculas para encontrar as ‘stop words’")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Idioma (opcional)")])]),a._v(" "),e("td",[a._v("Se informado, será usada a lista padrão da língua")])])])]),a._v(" "),e("p",[e("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-aparencia.html"}},[a._v("Aba Aparência")])],1),a._v(" "),e("p",[e("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-resultados.html"}},[a._v("Aba Resultados")])],1),a._v(" "),e("h2",{attrs:{id:"exemplos-de-utilizacao"}},[a._v("Exemplos de Utilização")]),a._v(" "),e("p",[e("strong",[a._v("Objetivo:")]),a._v(" Demonstrar as três formas diferentes de utilizar a operação "),e("strong",[a._v("Remover palavras comuns (stopwords)")]),a._v("."),e("br"),a._v(" "),e("strong",[a._v("Base de Dados:")]),a._v(" "),e("RouterLink",{attrs:{to:"/pt-br/spark/base-de-dados/#quotes"}},[a._v("Quotes")]),a._v(" e "),e("a",{attrs:{href:"https://github.com/igorbrigadir/stopwords/blob/master/en_stopwords.csv",target:"_blank",rel:"noopener noreferrer"}},[a._v("Base de stop words"),e("OutboundLink")],1)],1),a._v(" "),e("h3",{attrs:{id:"exemplo-1"}},[a._v("Exemplo 1")]),a._v(" "),e("p",[e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-remover-palavras-comuns/image7.png",alt:"Fluxo de trabaho"}})]),a._v(" "),e("ol",[e("li",[e("p",[a._v("Use a operação "),e("RouterLink",{attrs:{to:"/pt-br/spark/entrada-e-saida/ler-dados.html"}},[a._v("Ler dados")]),a._v(" e selecione a base "),e("em",[a._v("“quotes”")]),a._v("."),e("br"),a._v(" "),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-remover-palavras-comuns/image4.png",alt:"Operação Ler dados"}})],1)]),a._v(" "),e("li",[e("p",[a._v("Use a operação de "),e("RouterLink",{attrs:{to:"/pt-br/spark/pre-processamento-de-dados/operacoes-textuais-dividir-texto-por-delimitador.html"}},[a._v("Dividir texto por delimitador")]),a._v(". Selecione "),e("em",[a._v("“Simples, use espaços como delimitadores”")]),a._v(" para o campo "),e("strong",[a._v("Tipo")]),a._v(". Selecione o atributo "),e("em",[a._v("“value”")]),a._v(" para o campo "),e("strong",[a._v("Atributos")]),a._v(". Preencha o valor "),e("em",[a._v("“2”")]),a._v(" no campo "),e("strong",[a._v("Tamanho mínimo das partes (tokens)")]),a._v("."),e("br"),a._v(" "),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-remover-palavras-comuns/image11.png",alt:"Operação Dividir texto por delimitador"}})],1)]),a._v(" "),e("li",[e("p",[a._v("Use a operação "),e("RouterLink",{attrs:{to:"/pt-br/spark/entrada-e-saida/ler-dados.html"}},[a._v("Ler dados")]),a._v(" mais uma vez e selecione a base "),e("em",[a._v("“stopwords”")]),a._v(".\n"),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-remover-palavras-comuns/image10.png",alt:"Operação Ler dados"}})],1)]),a._v(" "),e("li",[e("p",[a._v("Adicione a operação "),e("RouterLink",{attrs:{to:"/pt-br/spark/pre-processamento-de-dados/operacoes-textuais-remover-palavras-comuns.html"}},[a._v("Remover palavras comuns (stopwords)")]),a._v(". Selecione o atributo "),e("em",[a._v("“value_tokenized”")]),a._v(" para o campo "),e("strong",[a._v("Atributos")]),a._v(". No campo "),e("strong",[a._v("Segunda Fonte de Dados")]),a._v(" selecione o atributo "),e("em",[a._v("“stop_words”")]),a._v("."),e("br"),a._v(" "),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-remover-palavras-comuns/image5.png",alt:"Operação Remover palavras comuns"}})],1)]),a._v(" "),e("li",[e("p",[a._v("Execute o fluxo e visualize os resultados."),e("br"),a._v(" "),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-remover-palavras-comuns/image2.png",alt:"Resultado"}})])])]),a._v(" "),e("h3",{attrs:{id:"exemplo-2"}},[a._v("Exemplo 2")]),a._v(" "),e("p",[e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-remover-palavras-comuns/image1.png",alt:"Fluxo de trabalho"}})]),a._v(" "),e("ol",[e("li",[e("p",[a._v("Repita os passos "),e("strong",[a._v("1")]),a._v(" e "),e("strong",[a._v("2")]),a._v(" do "),e("a",{attrs:{href:"#exemplo-1"}},[a._v("Exemplo 1")]),a._v(".")])]),a._v(" "),e("li",[e("p",[a._v("Na operação "),e("RouterLink",{attrs:{to:"/pt-br/spark/pre-processamento-de-dados/operacoes-textuais-remover-palavras-comuns.html"}},[a._v("Remover palavras comuns (stopwords)")]),a._v(", adicione uma lista de palavras separadas por vírgula no campo "),e("strong",[a._v("Lista de stop words")]),a._v("."),e("br"),a._v(" "),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-remover-palavras-comuns/image3.png",alt:"Operação Remover palavras comuns"}})],1)]),a._v(" "),e("li",[e("p",[a._v("Execute o fluxo e observe os resultados\n"),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-remover-palavras-comuns/image8.png",alt:"Resultado"}})])])]),a._v(" "),e("h3",{attrs:{id:"exemplo-3"}},[a._v("Exemplo 3")]),a._v(" "),e("p",[e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-remover-palavras-comuns/image1.png",alt:"Fluxo de trabalho"}})]),a._v(" "),e("ol",[e("li",[e("p",[a._v("Repita os passos "),e("strong",[a._v("1")]),a._v(" e "),e("strong",[a._v("2")]),a._v(" do "),e("a",{attrs:{href:"#exemplo-1"}},[a._v("Exemplo 1")]),a._v(".")])]),a._v(" "),e("li",[e("p",[a._v("Na operação "),e("RouterLink",{attrs:{to:"/pt-br/spark/pre-processamento-de-dados/operacoes-textuais-remover-palavras-comuns.html"}},[a._v("Remover palavras comuns (stopwords)")]),a._v(", selecione o idioma "),e("em",[a._v("“inglês”")]),a._v(" no campo "),e("strong",[a._v("Idioma (opcional)")]),a._v("."),e("br"),a._v(" "),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-remover-palavras-comuns/image9.png",alt:"Operação Remover palavras comuns"}})],1)]),a._v(" "),e("li",[e("p",[a._v("Execute o fluxo e observe os resultados."),e("br"),a._v(" "),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-remover-palavras-comuns/image6.png",alt:"Resultado"}}),e("br"),a._v("\nNa base de dados usada como exemplo houve a remoção das mesmas palavras usando a lista padrão e a outra. Isso ocorreu, pois as palavras mais comuns, como conectores e artigos, costumam estar na maioria das listas.")])])]),a._v(" "),e("hr"),a._v(" "),e("p",[a._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])}),[],!1,null,null,null);o.default=r.exports}}]);