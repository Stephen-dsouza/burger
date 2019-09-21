# Burger APP
This is restaurant app 
This app uses  Node.js, Express.js, MySQL,dotenv,Nodemon and Handlebars in creating a CRUD application. Devour-a-Burger lets users create burgers and logs when they are devoured. 
Users can add burgers to be devoured.

## HOW TO USE
* Create the database schema using "schema.sql"
* Add the data using data from"data.sql".

   **Note: I have assumed you are already familar with mysql creation and usage"**
   * Clone this repo and create a .env file and add the following "password='your database password'"
   * Run "npm i" to download mysql and inquirer packages.
   * Run the `schema.sql` and `seeds.sql` files into the mysql server from the command line
         Now you're going to run these SQL files.

   * Make sure you're in the `db` folder of your app.

   * Start MySQL command line tool and login: `mysql -u root -p`.

   * With the `mysql>` command line tool running, enter the command `source schema.sql`. This will run your schema file and all of the queries in it -- in other words, you'll be creating your database.

   * Now insert the entries you defined in `seeds.sql` by running the file: `source seeds.sql`.

   * Close out of the MySQL command line tool: `exit`.

   ## Images
Main Page

   ![Main Page](./Public/assets/img/Main.jpg)

Devoured Burger

![Devoured Page](./Public/assets/img/Devoured.jpg)

Added Burger

![Added Page](./Public/assets/img/Add.jpg)

