(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{253:function(a,o,e){"use strict";e.r(o);var r=e(28),t=Object(r.a)({},(function(){var a=this,o=a.$createElement,e=a._self._c||o;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"grafico-de-dispersao"}},[a._v("Gráfico de Dispersão")]),a._v(" "),e("p",[a._v("Um Gráfico de Dispersão é um gráfico de pontos, utilizando coordenadas cartesianas.")]),a._v(" "),e("h3",{attrs:{id:"conectores"}},[a._v("Conectores")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("Entrada")]),a._v(" "),e("th",[a._v("Saída")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("Dados de entradas")]),a._v(" "),e("td",[a._v("Uma Visualização")])])])]),a._v(" "),e("h3",{attrs:{id:"tarefa"}},[a._v("Tarefa")]),a._v(" "),e("p",[a._v("Nome da Tarefa")]),a._v(" "),e("h3",{attrs:{id:"aba-execucao"}},[a._v("Aba Execução")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("Parâmetro")]),a._v(" "),e("th",[a._v("Detalhe")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[a._v("Atributos para o eixo X")])]),a._v(" "),e("td",[a._v("Atributo com os dados do eixo X")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Atributos para o eixo Y")])]),a._v(" "),e("td",[a._v("Atributo com os dados do eixo Y")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Título")])]),a._v(" "),e("td",[a._v("Título da visualização. É apresentado no gráfico")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Atributo usado para séries")])]),a._v(" "),e("td",[a._v("Atributo pelo qual os dados devem ser agrupados, de modo a serem representados por cores diferentes. Por exemplo, em casos de classificação, é desejável que classes distintas possuem cores diferentes. Por padrão, todos os pontos serão agrupados sob um mesmo grupo, tendo todos a mesma cor")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Título para o eixo X")])]),a._v(" "),e("td")]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Título para o eixo Y")])]),a._v(" "),e("td")]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Prefixo para o eixo X")])]),a._v(" "),e("td",[a._v("Prefixos são palavras que aparecem na frente de cada rótulo. Por exemplo, se no eixo X estiver um número para cada dia do mês (i.e., 1 – 30), o prefixo poderia ser a palavra “Dia”.")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Prefixo para o eixo Y")])]),a._v(" "),e("td")]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Sufixo para o eixo X")])]),a._v(" "),e("td",[a._v("Sufixos são palavras que aparecem após cada rótulo. Por exemplo, se no eixo X estiver temperaturas, o sufixo poderia ser a palavra “Graus”.")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Sufixo para o eixo Y")])]),a._v(" "),e("td")])])]),a._v(" "),e("p",[e("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-aparencia.html"}},[a._v("Aba Aparência")])],1),a._v(" "),e("p",[e("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-resultados.html"}},[a._v("Aba Resultados")])],1),a._v(" "),e("h2",{attrs:{id:"exemplo-de-utilizacao"}},[a._v("Exemplo de Utilização")]),a._v(" "),e("p",[e("strong",[a._v("Objetivo:")]),a._v(" analisar a organização e os agrupamentos de diferentes espécies de Íris de acordo com o tamanho de suas pétalas/sépalas.")]),a._v(" "),e("p",[e("strong",[a._v("Base de Dados:")]),a._v(" "),e("RouterLink",{attrs:{to:"/pt-br/spark/base-de-dados/#iris"}},[a._v("Íris")])],1),a._v(" "),e("p",[e("img",{attrs:{src:"/img/spark/visualizacao_de_dados/grafico_de_dispersao/image3.png",alt:"Ler dados"}})]),a._v(" "),e("ol",[e("li",[e("p",[a._v("Adicione uma base de dados por meio da operação "),e("RouterLink",{attrs:{to:"/pt-br/spark/entrada-e-saida/ler-dados.html"}},[a._v("Ler dados")]),a._v(".")],1)]),a._v(" "),e("li",[e("p",[a._v("Ordene de forma crescente o atributo que será utilizado no "),e("strong",[a._v("eixo X")]),a._v(", neste caso, o "),e("em",[a._v("“sepallength”")]),a._v(" por meio da operação "),e("RouterLink",{attrs:{to:"/pt-br/spark/manipulacao-de-dados/coluna-ordenar.html"}},[a._v("Ordenar")]),a._v(".")],1)]),a._v(" "),e("li",[e("p",[a._v("Selecione "),e("em",[a._v("“sepallength”")]),a._v(" no campo "),e("strong",[a._v("Atributos para o eixo X")]),a._v(". Selecione "),e("em",[a._v("“sepalwidth”")]),a._v(" no campo "),e("strong",[a._v("Atributos para o eixo Y")]),a._v(". Como "),e("strong",[a._v("atributo de série")]),a._v(", escolha o "),e("em",[a._v("“class”")]),a._v(". "),e("br"),a._v(" "),e("img",{attrs:{src:"/img/spark/visualizacao_de_dados/grafico_de_dispersao/image1.png",alt:"Formulario agrupar"}})])]),a._v(" "),e("li",[e("p",[a._v("Execute o fluxo e visualize o resultado.\n"),e("img",{attrs:{src:"/img/spark/visualizacao_de_dados/grafico_de_dispersao/image2.png",alt:"Gráfico de linhas gerado"}}),e("br"),a._v("\nGráfico de dispersão gerado pelo fluxo acima.")])])]),a._v(" "),e("hr"),a._v(" "),e("p",[a._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])}),[],!1,null,null,null);o.default=t.exports}}]);