(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{269:function(a,e,r){"use strict";r.r(e);var o=r(0),s=Object(o.a)({},function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"mineracao-de-sequencias"}},[a._v("Mineração de Sequências")]),a._v(" "),r("p",[a._v("O objetivo da operação Mineração de Sequências é encontrar padrões frequentes na forma de sequências em dados transacionais. Para isso, essa operação usa o algoritmo "),r("a",{attrs:{href:"http://dx.doi.org/10.1109%2FTKDE.2004.77",target:"_blank",rel:"noopener noreferrer"}},[a._v("PrefixSpan"),r("OutboundLink")],1),a._v(".")]),a._v(" "),r("h3",{attrs:{id:"conectores"}},[a._v("Conectores")]),a._v(" "),r("table",[r("thead",[r("tr",[r("th",[a._v("Entrada")]),a._v(" "),r("th",[a._v("Saída")])])]),a._v(" "),r("tbody",[r("tr",[r("td",[a._v("Dados de transações")]),a._v(" "),r("td",[a._v("Padrões de sequências cujas quantidades estão acima de um determinado limiar")])])])]),a._v(" "),r("h3",{attrs:{id:"tarefa"}},[a._v("Tarefa")]),a._v(" "),r("p",[a._v("Nome da Tarefa")]),a._v(" "),r("h3",{attrs:{id:"aba-execucao"}},[a._v("Aba Execução")]),a._v(" "),r("table",[r("thead",[r("tr",[r("th",[a._v("Parâmetro")]),a._v(" "),r("th",[a._v("Detalhe")])])]),a._v(" "),r("tbody",[r("tr",[r("td",[r("strong",[a._v("Suporte mínimo")])]),a._v(" "),r("td",[a._v("É a proporção de transações em que x e y ocorrem conjuntamente na base de dados. Varia entre 0 e 1")])]),a._v(" "),r("tr",[r("td",[r("strong",[a._v("Tamanho máximo da sequência")])]),a._v(" "),r("td",[a._v("Tamanho máximo da sequência a ser encontrada pelo algoritmo")])]),a._v(" "),r("tr",[r("td",[r("strong",[a._v("Atributo com transações")])]),a._v(" "),r("td",[a._v("Atributo contendo as transações da base de dados")])])])]),a._v(" "),r("p",[r("router-link",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-aparencia.html"}},[a._v("Aba Aparência")])],1),a._v(" "),r("p",[r("router-link",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-resultados.html"}},[a._v("Aba Resultados")])],1),a._v(" "),r("h2",{attrs:{id:"exemplo-de-utilizacao"}},[a._v("Exemplo de Utilização")]),a._v(" "),r("p",[r("strong",[a._v("Objetivo:")]),a._v(" Retornar sequências de visitas de usuários no site "),r("a",{attrs:{href:"http://msnbc.com",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://msnbc.com"),r("OutboundLink")],1),a._v(" em 28 de setembro de 1999"),r("br"),a._v(" "),r("strong",[a._v("Base de Dados:")]),a._v(" "),r("router-link",{attrs:{to:"/pt-br/spark/base-de-dados/#msnbc-com"}},[a._v("msnbc.com")])],1),a._v(" "),r("p",[r("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/associacao_mineracao_de_sequencias/image4.png",alt:"Fluxo de Trabalho - Ler dados"}})]),a._v(" "),r("ol",[r("li",[r("p",[a._v("Adicione a base de dados por meio da operação "),r("router-link",{attrs:{to:"/pt-br/spark/entrada-e-saida/ler-dados.html"}},[a._v("Ler dados")]),a._v(".")],1)]),a._v(" "),r("li",[r("p",[a._v("Utilize a operação "),r("strong",[a._v("Transformar valores por função")]),a._v(" para tratar a base de dados. Nesta operação, clique em "),r("strong",[a._v("Editar valor")]),a._v(" da expressão para adicionar a expressão. Clique em adicionar e, em seguida, preencha o campo da "),r("strong",[a._v("Expressão")]),a._v(" com "),r("em",[a._v("“cast(split(trim(value), ' '), 'array<int>')”")]),a._v(" e o campo do "),r("strong",[a._v("Alias")]),a._v(" com "),r("em",[a._v("“sequencias”")]),a._v(". Por fim, clique em "),r("strong",[a._v("OK")]),a._v(". Isso aplicará a expressão "),r("em",[a._v("“sequences = cast(split(trim(value), ' '), 'array<int>') ”")]),a._v(" nos dados de entrada.")])]),a._v(" "),r("li",[r("p",[a._v("Na operação "),r("strong",[a._v("Mineração de sequências")]),a._v(", preencha "),r("em",[a._v("0.01")]),a._v(" no campo "),r("strong",[a._v("Suporte mínimo")]),a._v(", selecione "),r("em",[a._v("“sequencias”")]),a._v(" no campo "),r("strong",[a._v("Atributo com transações (vazio = primeiro atributo)")]),a._v(", e preencha "),r("em",[a._v("6")]),a._v(" no campo "),r("strong",[a._v("Tamanho máx. da sequência")]),a._v("."),r("br"),a._v(" "),r("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/associacao_mineracao_de_sequencias/image1.png",alt:"Tabela Mineração de sequẽncias"}})])]),a._v(" "),r("li",[r("p",[a._v("Execute o fluxo e visualize o resultado (i.e., as sequências com suas respectivas frequências):\n"),r("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/associacao_mineracao_de_sequencias/image2.png",alt:"Tabela Resultado - parte 1"}}),a._v(" "),r("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/associacao_mineracao_de_sequencias/image3.png",alt:"Tabela Resultado - parte 2"}})])])]),a._v(" "),r("hr"),a._v(" "),r("p",[a._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])},[],!1,null,null,null);e.default=s.exports}}]);