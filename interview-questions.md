# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a class?

Your answer: Calling super in a class 'extracts' the initialize method that is within the inherited class. It grants access to the symbols and values that were already defined in the parent class without having the define them again in the child class. An example would be there is a class CocaCola with a def initialize, and within that initialize there is a symbol of @flavor. Then the class DietCoke < CocaCola could call super to have access to @flavor, without remaking the symbol within class DietCoke.

Researched answer: Calling super is used to reference the superclass of the current method. It references the initialize method within the parent class, and acts ad if you were calling the the original method. An example would be there is a class CocaCola with a def initialize, and within that initialize there is a symbol of @flavor. Then the class DietCoke < CocaCola could call super to have access to @flavor, without remaking the symbol within class DietCoke.

2. What is a gem?

Your answer: A gem is a tool used to install dependencies and packages containing pre-built data. 

Researched answer: A gem is a library of data that has specific purposes. It can also contain files or dependencies required or related to that purpose. Gems are open source, which allows developers to have access to programs and data other developers have created.

3. What is a relational database? Are there other kinds of databases?

Your answer: No idea

Researched answer: A relational database is a type of database that structures data in the form of a table with rows and columns, such as PostgreSQL. There are many different types of databases. To name a few, there are centralized, cloud, graph, object-oriented databases, among many others.

4. What are primary keys? Why are they important?

Your answer: Primary keys are specific ID values that are assigned to rows in relational databases. An example would be in Ruby on Rails, each row in a table is given a number value as its primary key. Each key can only be used once in each table, as it is a unique identifier.

Researched answer: A primary key is a separate column in a relational database that is designated to be a unique identifier for each set of data in the table. For example, a table with data for states in the United States would have each state assigned a primary key. That primary key is then linked with its corresponding state and can be used to identify that state.

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: The HTTP verbs are Get, Put, Post, Patch, and Delete. Get goes with read, put goes with update, post and patch go with create, and delete goes with delete.

Researched answer: The HTTP verbs are Get, Put, Post, Patch, and Delete. Get goes with read, put goes with update, post and patch go with create, and delete goes with delete.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes: Standards that are used to create efficient routes.

2. Model validations: The process of making sure a model is achieving its intended purpose.

3. Params: Short for parameter. It is a variable that can be passed into the declaration of a function or method to act as a placeholder for when the method or function is actually called.

4. ERB: Stands for embedded ruby.

5. API: Application programming interface. It is a mechanim that allows two components to communicate with each other.
