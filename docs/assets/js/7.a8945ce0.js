(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{225:function(e,t,a){"use strict";a.r(t);var i=a(0),n=Object(i.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"architecture"}},[e._v("Architecture")]),e._v(" "),a("h2",{attrs:{id:"micro-services-organization"}},[e._v("Micro-services organization")]),e._v(" "),a("p",[a("img",{attrs:{src:"/vuepress/img/image2.jpg",alt:"Micro-services architecture",title:"Micro-services"}})]),e._v(" "),a("h3",{attrs:{id:"citron"}},[e._v("Citron")]),e._v(" "),a("p",[e._v("Citron is a web based user interface used in Lemonade to create workflows. Users may choose among a set of predefined operations which will compose the workflow by dragging and dropping them into the design area. Among the operations, there are operations for reading and writing data in different storages, such as file systems (including distributed, such as HDFS) and databases.")]),e._v(" "),a("p",[e._v("Each operation is grouped by category and configured by forms, including parameters for execution, appearance, quality of service (QoS) and security & privacy settings. Citron interacts with Tahiti component in order to retrieve operations metadata and persist workflows and with Limonero component to retrieve and save data source metadata.")]),e._v(" "),a("p",[e._v("Workflow execution status is provided by Lemonade Stand and it is integrated with Citron by using web sockets")]),e._v(" "),a("h3",{attrs:{id:"tahiti"}},[e._v("Tahiti")]),e._v(" "),a("p",[e._v("Tahiti manages metadata associated with operations. Operations are the smallest unit of processing and represent a coarse granularity task executed on one of the supported backends.\nCurrently, Lemonade supports ETL and some machine learning operations.\nNew operations can be implemented if the underlying processing framework supports them.\nMetadata include operation name, description, parameters and ports.\nPorts are communication points that have direction (input and output), multiplicity (how many supported connections) and should “implement” interfaces in order to guarantee compatibility between operations.\nEach operation has a set of parameters grouped as forms. Forms are organized into different classes, e.g. execution, security & privacy, quality of service, appearance, reports and logging.")]),e._v(" "),a("p",[e._v("In order to provide extensibility, all operations in Lemonade are defined in two components: Tahiti and Juicer. Tahiti keeps all operation metadata, including their names, ports and related forms and makes such information available by an API, consumed by Citron when it starts rendering the user interface."),a("br"),e._v("\nAlthough by using Tahiti with Citron we eliminated the dependency between the interface and the available abstractions, still there is a strong dependency between Tahiti managed metadata and the execution component, Juicer. In order to create or modify a new operation, a developer must insert or update  information in Tahiti and implement changes directly in Juicer source code.")]),e._v(" "),a("p",[e._v("There is another class of metadata related to the data sources themselves. In a design decision, we choose to keep, for each data source available in Lemonade, metadata about user access permissions, attributes (including the name, datatype, precision, length, nullability, if they are labels or features and their statistical data, distribution, how many missings, mean, max, min values, etc.) and the format of the data (CSV, JSON, Parquet, etc). Such information is used when reading data in order to avoid misinterpretation of formats, validation of input and of the workflow, optimize reading and finally, integrate more easily with the visualization component, Caipirinha (more details ahead).")]),e._v(" "),a("h3",{attrs:{id:"limonero"}},[e._v("Limonero")]),e._v(" "),a("p",[e._v("Limonero is similar to Tahiti, but instead of keeping metadata about operations, it keeps metadata information about data sources.\nData sources may be input to workflows and also created by them as output. Data source metadata includes:\nLocation: where data are located and in which storage technology (for instance, HDFS).\nData format and structure: If the data are in JSON format, what the columns and their data types are, and if any given column is optional, if it is a feature or a label.\nAccess restrictions: ownership of data sets, authorization and privacy concerns.\nStatistics about the data: number of records, size in MB, column-specific information such as number of missing records, min/max/average/median values, deciles distribution, etc.\nMetadata are used by web interface to enable or disable data visualizations and operations, according to data/visualisation and data/operation compatibility.\nCurrently: data source upload, soon data source download.")]),e._v(" "),a("h3",{attrs:{id:"juicer"}},[e._v("Juicer")]),e._v(" "),a("p",[e._v("uicer has four main responsibilities:\nReceive a workflow specification (JSON) from Stand and convert it into executable code (transpile operations into respective underlying technology code).\nExecute the generated code, controlling the execution flow.\nReport execution status to Stand.\nInteract with Limonero API in order to create new data sets and record their metadata.\nUnder the hood, Juicer will generate code targeting a distributed processing platform, such as Spark and BSC COMPSs\nCode is executed in batch mode.\nFuture versions may implement support to interactive execution.\nBeing a higher level abstraction, Lemonade does not map all possible operations existing in the underlying technology.\nBut “black-box” operations that execute low-level code may be registered and used in a workflow.")]),e._v(" "),a("h3",{attrs:{id:"thorn"}},[e._v("Thorn")]),e._v(" "),a("p",[e._v("Thorn controls authentication and authorization.\nCurrent version uses a custom database schema.\nFuture versions may be integrated with existing technologies, such as OpenStack Keystone.\nEvolution depends on work in EUBra-BigSea project (WP6).\nIntegration with LDAP (authentication).\nThorn is not used when components are communicating:\nAuthentication is based on static tokens defined in configuration files.")]),e._v(" "),a("p",[e._v("Thorn is the module responsible for provide security and privacy constraints in Lemonade. Current version only works with basic authentication and authorization but working groups from WP5 and WP6 are working together in order to create a common solution. The interaction between all components, except Caipirinha, is shown in Figure L3 below.\n"),a("img",{attrs:{src:"/vuepress/img/image3.jpg",alt:"Micro-services interaction",title:"Micro-services interaction"}})]),e._v(" "),a("h3",{attrs:{id:"stand"}},[e._v("Stand")]),e._v(" "),a("p",[e._v("Stand is a facade between user interface (Citron) and backend execution (Juicer).\nIt receives workflow execution requests and places them in a queue (we are using a queue implemented in Redis storage).\nJuicer consumes the execution queue and for each workflow and task in execution, reports their statuses in a persistent database (MySQL) and in a publisher-subscriber topic in Redis.\nStand subscribes to each topic and reports execution status to Citron by using web sockets.")]),e._v(" "),a("p",[e._v("Citron allows users to start the workflow execution and Juicer is responsible for retrieving information about the execution from the underlying execution platform. To keep both components decoupled, a third component, Stand is needed.")]),e._v(" "),a("p",[e._v("Stand a facade between user interface (Citron) and backend execution (Juicer). User interface should be responsiveness, while the backend is batch processing the workflow. Stand decouples the other two components by using async communication, implemented as a producer-consumer queue in Redis. Interactions between components are shown in Figure L2. When a user triggers the execution of a workflow, Citron invokes Stand in order to run the job (1a) and also connects to a websocket which provides feedback to the user interface (1b). Stand receives the request and pushes it into a queue (2a) and starts consuming status queue (2b) that feeds the websocket. Juicer consumes the execution queue (3a) and for again, reports execution status by pushing it to a publisher-subscriber topic in Redis (volatile) and updating rows in MySQL (persistent) (5). Citron then receives notifications about tasks execution status (6) and updates the interface.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/vuepress/img/image4.jpg",alt:"Micro-services interaction",title:"Micro-services interaction"}})]),e._v(" "),a("h3",{attrs:{id:"caipirinha"}},[e._v("Caipirinha")]),e._v(" "),a("p",[e._v("Caipirinha is the Lemonade service responsible for providing configuration for  data visualization.\nIt uses metadata information about data sets provided by Limonero.\nStill being designed:\nRequirements identification\nDomain modeling\nChallenges in usability and user experience in web applications\nFinal version will be “data exploration centric”:\nInstead of start from a workflow and then generate a visualization, final version will allow users to start from data, create visualizations, set parameters and then a workflow is generated (and processed).")]),e._v(" "),a("p",[e._v("An important requirement of Lemonade is to provide feedback to users about tasks execution and results. When a task modifies an input data, user must be able to analyze the resulting data by inspecting it directly (e.g. using a table) or by visualizing it by a visual metaphor (charts, graphs, custom visualizations, etc.). Caipirinha is a framework that integrates with Lemonade data and metadata in order to provide data visualization. The idea is to provide to the user a set of common visualizations, like tables, pie, line and bar charts with little effort in customization. For more sophisticated visualizations, user can configure a generate visualization operation with the type of the visualization and its parameters, something like the chart generation wizard present in common spreadsheet software. Visualizations will be enable/disabled according to predefined requirements. Such requirements are part of the visualization metadata and will be stored in Caipirinha.")]),e._v(" "),a("h2",{attrs:{id:"services-communication"}},[e._v("Services communication")]),e._v(" "),a("h2",{attrs:{id:"source-code-generation"}},[e._v("Source code generation")]),e._v(" "),a("p",[e._v("Workflow is represented internally in JSON format. When a new job is created in order to execute a workflow, Juicer will convert code to code (transpile), parsing JSON format into a Python language script compatible with the underlying processing platform. The utilization of Python language restricts targeting platforms, but now, COMPSs, Ophidia and Spark supports it. We do not foresee the need of using a real compiler, but maybe in future we could extend Juicer to support it.")]),e._v(" "),a("h2",{attrs:{id:"code-execution-and-platforms"}},[e._v("Code execution and platforms")])])},[],!1,null,null,null);t.default=n.exports}}]);