# Basic Usage

## Step-by-step walthrough

### Create User

### Importing Data sets

### Workflow editor

### Creating your first predictive experiment

Now that we have completed the previous steps, we are able to deepen our
knowledge by creating our first complete experiment. We will learn to use
machine learning techniques to evaluate and make predictions about the database
we loaded in the Importing Data sets step. We will build a model, based on algorithms, capable of analyzing the data, find
relationships and statistical partterns.

The process of creating a model starts with the data set statistical study. We
must know the base attributes in order to formalize what questions our model is
capable to answer.

The Iris database was used by R. Fisher in 1936 in the classic article <i> The
Use of Multiple Measurements in Taxonomic Problems</i> and can also be found in
the <i>UCL Machine Learning Repository</i>. It contains three species of
flowers of the genus Iris containing 50 samples, as well as some properties of
each flower. One species of flower is linearly separable from the other two,
while the other two are not linearly separable from each other.

As defined in [Importing Data sets](#importing-data-sets), the base consists of
the following attributes:
  * Sepal length in cm
  * Sepal width in cm
  * Petal length in cm
  * Petal width in cm
  * Class

An intial statistical analysis of the data will help us to understand the main
relationships between attributes and infer what information we can extract.
Let's use the <b> Lemonade </b> to create a workflow and some operations to
generate a data summary.

Let's create a workflow named: <b>Creating your first predictive
experiment</b>:
![create-workflow](/img/basic_usage/creating_1_predictive_final.png)
![new-workflow](/img/basic_usage/workflow_name_final.png)

To summarize the database, first we load the data using the <b>DATA READER</b>
operation. It is related among the I/O operations we found in the <b>DATA
SOURCE and TARGET</b> group.

![new-data-reader01](/img/basic_usage/cp_datareader01_final.png)

Select it on the operation's tab and drag it to the grid. The tool provides a
right-hand flap with all configuration parameters. In the <b> Data source </b>
field, select the <b> Iris Data Set </b>.

![new-data-reader02](/img/basic_usage/cp_datareader03_final.png)

The <b> Data reader </b> operation has the following parameters:

 * <b>Use first line as reader</b>: The first database's row is intended for
 attribute names;
 * <b>Attribute separator </b>: Select which separator attribute type will used
 in the database;
 * <b>Treat these values as null(comma-separated)</b>: This feature is used to
 correct/delete attributes on the data stream;
 * <b>Infer data source schema</b>:<b> From metadata</b>. Determine how
 attributes are inferred by the operation. It is recommended that attributes
 be inferred from the database.
 * <b>What to do in case of invalid data</b>: <b>Convert Invalid data to
   NULL</b>. Determines how invalid attributes should be handled.

| ![data-reader-params](/img/basic_usage/data_reader_attributes_final.png) |
| --- |

The <b>Appearance</b> field allows us to change the boxes operation colors and
do comments. The <b>Result</b> field allows us to manipulate which info will be
displayed in result tabs.
  * <b>Display samples(s) of output(s)</b>: shows a data stream preview.
  * <b>Display output(s) schema(s)</b>: Displays the database format.
  * <b>Display text reports (if available)</b>: Displays text reports if
  available. They are usually tied to algorithm analysis resuts.
  * <b>Display images and charts(if available)</b>: Displays images and/or
  charts.

Next we will create a database summary operation. We will be able to know
our database attributes and identify their main properties.

![summary-op](/img/basic_usage/summary_op_final.png)

The only parameter we will define is the summary name.

![summary-param](/img/basic_usage/summary_p_final.png)

After play the workflow, we have this

![summary-play](/img/basic_usage/summary_play_final.png)

![summary-param](/img/basic_usage/summary_table_final.png)

The main step objective is to make us know the database attributes and be able
to ask questions that our <i>model</i> can answer. It will analyze the database
features and predict a result.

It is time to use a set of machine learning operations to create our
predictive experiment. But first, we need to understand how the machine
learning techniques will help us to do it.

The <b>classification algorithms</b> are able to identify a certain item
category based on other items whose attributes are known. They start from
a database with pre-determinated <b>labels</b> and <b>features</b> and
"learn" how to sort/categorize new records based on this learning.

To make the things simple, first let's understand the following terms:
  * <b>Properties</b>: Attributes or characteristics that build the <b>labels
  </b>. They are the information that are going to be evaluated.
  * <b>Labels</b>: Elements to which the attributes or characteristics are
  directed.

<b>Properties</b> are the <i>hypoteses</i> or <i>questions</i> that we can
elaborate. The <b>labels</b> are the answers. For example: Which <i>label</i>
fit a characteristics series of a certain type? If an animal has <i>feathers</i>,
<i>paws adapted to swim</i>, <i>swim</i>, <i>fly</i> and has no <i>crests</i>;
We can answer with some certain that it is a <i>duck</i>.
Thus, feathers, feet adapted for swimming, ability to swim, ability to fly, no
crests are <i>properties</i> while the animal type, in this case, is the
<i>label</i>.

From the analysis of each record features, we can predict which species that it
belongs to. So, the height or width of each specie are the <b>features</b>,
while the class is the <b>label.</b>

We need to format the workflow operations following the schema below:

![ml-schema](/img/basic_usage/spark_ml_schema.png)

The first step of our experiment is to train a classification model. Each
model is made by the data structure and a ML algorithm. At the end, we will
evaluate it using a cross-validation process.

### Extract features
To build a classification model, we need to extract all features that most
contribute to the data classification.
The flowers' species are labeled in three classes:<b>Iris-virginica,
Iris-setosa, Iris-versicolor</b>, while the features are defined by the
height and width of the sepal and petal:<b>sepal length, petal length, sepal
width, petal width</b>.

We must index the values of the three classes into a vector, the input
parameter to the algorithm is a numeric array. Let's use the <b>Feature
Index</b> operation to index it. The resulting attribute will call
<b>label</b>.

![index-feature](/img/basic_usage/index_feature.png)

Then let's do the same to the features using the <b> Feature Assembler</b>
operation, the resulting array will be named <b>features</b>

![feature-assembler](/img/basic_usage/feature_assembler_parameters.png)

We can use a <i>transformation</i> operation to filter the label and
the features values for each class in the database. It's purpose is only
to view the attributes created in the <b>Extract features</b> step.

![extract-features](/img/basic_usage/extract_features.png)

| ![setosa](/img/basic_usage/iris_setosa_extfeat_sample.png) | ![versicolor](/img/basic_usage/iris_versicolor_extfeat_sample.png) | ![virginica](/img/basic_usage/iris_virginica_extfeat_sample.png) |
| --- | --- | --- |

### Trail Model

| ![ml-tranning](/img/basic_usage/ml_trainning.png) |
| --- |

The model trainning follows the previous image. We need to split the dataflow
into to sets. One of them will be used for trainning and the other for the
evaluation. In this example, our model will train the <b>Decision Tree
Classifier</b>.

![trainning-model](/img/basic_usage/training_model.png)

### Split operation

| ![split-operation](/img/basic_usage/split_params.png) |
| --- |

### Classification and Apply Model

| ![classification-operation](/img/basic_usage/classification_params.png) | ![apply-operation](/img/basic_usage/apply_params.png) |
| --- | --- |

Look the parameters of the trainning model operations. <b>Features</b> and
<b>Label</b> are used at input parameters of the classifier, and the <b>
prediction</b> attribute as return. We will not go into details of the
algorithm parameters used here. To learn more about them look for operations
and tutoriais in the documentation index.

### Evaluate Model

To finalize, we need to evaluate the trainning model. So simply add the <b>
Evaluate model</b> operation in the data stream and insert the parameters. Note
that the operation receives two data inputs: one that came from trainning and
other that will be used to evaluate our model.


