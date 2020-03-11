(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{359:function(o,e,a){"use strict";a.r(e);var t=a(0),r=Object(t.a)({},(function(){var o=this,e=o.$createElement,a=o._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[a("h1",{attrs:{id:"processar-topicos"}},[o._v("Processar Tópicos")]),o._v(" "),a("p",[o._v("Operação que descreve os tópicos encontrados pelo método de clusterização LDA pelos seus termos com maiores pesos. Cada tópico encontrado pelo LDA possui uma distribuição sobre os termos do dicionário, os termos com maiores pesos são os mais relevantes para discriminar o tópico.")]),o._v(" "),a("h3",{attrs:{id:"conectores"}},[o._v("Conectores")]),o._v(" "),a("table",[a("thead",[a("tr",[a("th",[o._v("Entrada")]),o._v(" "),a("th",[o._v("Saída")])])]),o._v(" "),a("tbody",[a("tr",[a("td",[o._v("Dados de Entrada, Modelo e Vocabulário utilizados para analisar a clusterização LDA")]),o._v(" "),a("td",[o._v("Para cada tópico retorna os seus termos mais importantes e seus respectivos pesos")])])])]),o._v(" "),a("h3",{attrs:{id:"tarefa"}},[o._v("Tarefa")]),o._v(" "),a("p",[o._v("Nome da Tarefa")]),o._v(" "),a("h3",{attrs:{id:"aba-execucao"}},[o._v("Aba Execução")]),o._v(" "),a("table",[a("thead",[a("tr",[a("th",[o._v("Parâmetro")]),o._v(" "),a("th",[o._v("Detalhe")])])]),o._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[o._v("Termos por tópico (max)")])]),o._v(" "),a("td",[o._v("Quantidade máxima de termos a serem selecionados por tópico")])])])]),o._v(" "),a("p",[a("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-aparencia.html"}},[o._v("Aba Aparência")])],1),o._v(" "),a("p",[a("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-resultados.html"}},[o._v("Aba Resultados")])],1),o._v(" "),a("h2",{attrs:{id:"exemplo-de-utilizacao"}},[o._v("Exemplo de Utilização")]),o._v(" "),a("p",[a("strong",[o._v("Objetivo:")]),o._v(" utilizar o processamento de tópicos para descrever os tópicos encontrados pelo LDA."),a("br"),o._v(" "),a("strong",[o._v("Base de Dados:")]),o._v(" "),a("RouterLink",{attrs:{to:"/pt-br/spark/base-de-dados/#sentiment-labelled-sentences"}},[o._v("Sentiment Labelled Sentences")])],1),o._v(" "),a("p",[a("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-processar-topicos/image1.png",alt:"Fluxo de trabalho"}})]),o._v(" "),a("ol",[a("li",[a("p",[o._v("Adicione uma base de dados por meio da operação "),a("RouterLink",{attrs:{to:"/pt-br/spark/entrada-e-saida/ler-dados.html"}},[o._v("Ler dados")]),o._v(".")],1)]),o._v(" "),a("li",[a("p",[o._v("Na operação Amostrar selecione as 200 primeiras amostras do dataset para criar o modelo LDA."),a("br"),o._v(" "),a("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-processar-topicos/image10.png",alt:"Operação Amostrar"}})])]),o._v(" "),a("li",[a("p",[o._v("Utilize a operação Transformar para remover pontuação, acentuação e colocar todas as palavras em minúsculo. Criando um novo atributo lowered_text o qual possui o texto original transformado."),a("br"),o._v(" "),a("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-processar-topicos/image2.png",alt:"Operação Transformar"}})])]),o._v(" "),a("li",[a("p",[o._v("Utilize a operação "),a("RouterLink",{attrs:{to:"/pt-br/spark/pre-processamento-de-dados/operacoes-textuais-dividir-texto-por-delimitador.html"}},[o._v("Dividir Texto")]),o._v(" separe o texto em tokens utilizando espaço como delimitador, utilizando “Simples, use espaços como delimitado” no campo Tipo. Preencha o campo Atributos com “lowered_text” e o campo Nome do novo atributo com “text_tokens”. Coloque 2 no campo Tamanho Mínimo de Tokens."),a("br"),o._v(" "),a("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-processar-topicos/image2.png",alt:"Operação Dividir texto"}})],1)]),o._v(" "),a("li",[a("p",[o._v("Remova as stopwords. Para isso, carregue o arquivo com a definição das stopwords utilizando a operação Ler Dados. Utilize o operador Remover palavras comum, selecione “text_tokens” como Atributos e “text_token2” como Nome do novo Atributo que irá conter o texto sem as stopwords."),a("br"),o._v(" "),a("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-processar-topicos/image5.png",alt:"Operação Ler dados"}}),o._v(" "),a("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-processar-topicos/image3.png",alt:"Operação Remove"}})])]),o._v(" "),a("li",[a("p",[o._v("Utilize a operação "),a("RouterLink",{attrs:{to:"/pt-br/spark/pre-processamento-de-dados/operacoes-textuais-contar-frequencia-dos-termos.html"}},[o._v("Converter Palavras em Vetores")]),o._v(" e crie um vetor com a frequência de cada termo usando TF-IDF. Selecione “text_tokens2” como Atributo, “text_vector” como Nome do novo atributo, “Contar a frequência do termo” como Tipo, 20000 como Tamanho do vocabulário, e 30 como Frequência mínima de documento e Frequência Mínima do Termo."),a("br"),o._v(" "),a("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-processar-topicos/image4.png",alt:"Operação Converter palavras em vetor"}})],1)]),o._v(" "),a("li",[a("p",[o._v("Na operação "),a("RouterLink",{attrs:{to:"/pt-br/spark/pre-processamento-de-dados/operacoes-textuais-agrupamento-lda.html"}},[o._v("Agrupamento LDA")]),o._v(", selecione o Online Variational Bayes como otimizador e uma quantidade máxima de 50 tópicos. Selecione o vetor “text_vector” para os Atributos a serem usados e preencha “topics” no campo Atributo com a predição."),a("br"),o._v(" "),a("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-processar-topicos/image7.png",alt:"Operação Agrupamento LDA"}}),o._v(" "),a("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-processar-topicos/image9.png",alt:"Operação Modelo de agrupamento"}})],1)]),o._v(" "),a("li",[a("p",[o._v("Execute e visualize as tarefas descritas acima, os termos com maiores pesos de cada tópico são obtidos pelo processamento de tópicos.\n"),a("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/operacoes-textuais-processar-topicos/image8.png",alt:"Resultado"}})])])]),o._v(" "),a("h3",{attrs:{id:"link-vem-pra-ca"}},[o._v("Link vem pra cá")]),o._v(" "),a("hr"),o._v(" "),a("p",[o._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])}),[],!1,null,null,null);e.default=r.exports}}]);