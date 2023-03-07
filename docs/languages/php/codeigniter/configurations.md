# Configurations

The database of the site can be configured in application/config/database.php file. Often we need to set up database for different environment like development and production. With the multidimensional array provided in the CodeIgniter, we can setup database for different environment. The configuration settings are stored in the array as shown below −

$db ['default'] = array(
'dsn' => '',
'hostname' => 'localhost',
'username' => 'root',
'password' => '',
'database' => 'database_name',
'dbdriver' => 'mysqli',
'dbprefix' => '',

## 'pconnect' => TRUE

'db_debug' => TRUE,
'cache_on' => FALSE,
'cachedir' => '',
'char_set' => 'utf8',
'dbcollat' => 'utf8_general_ci',
'swap_pre' => '',
'encrypt' => FALSE,
'compress' => FALSE,
'stricton' => FALSE,
'failover' => array()
);

You can leave few options to their default values except hostname, username, password, database and dbdriver.

- hostname− Specify location of your database here e.g. localhost or IP address
- username− Set username of your database here.
- password− Set password of your database here.
- database− Set name of the database here.
- dbdriver− Set type of database that you are using e.g. MySQL, MySQLi, Postgre SQL, ODBC, and MS SQL.

By changing the key of the array$db, you can set other configuration of database as shown below. Here, we have set the key to'test'to set the database for testing environment, by keeping the other database environment as it is.

$active_group = 'default'; //This will set the default environment

$active_group = 'test'; //This will set the test environment

## Autoload Configuration

This file specifies, by default, which systems should be loaded. In order to keep the framework as light-weight as possible, only the absolute minimal resources are loaded by default. One should autoload the frequently used system, rather than loading it at local level, repeatedly. Following are the things you can load automatically −

- Libraries− It is a list of libraries, which should be auto loaded. Provide a list of libraries in an array as shown below to be autoloaded by CodeIgniter. In this example, we are auto loading database, email and session libraries.

$autoload ['libraries'] = array('database', 'email', 'session');

- Drivers− These classes are located in system/libraries/ or in your application/libraries/ directory, but are also placed inside their own subdirectory and they extend the CI_Driver_Library class. They offer multiple interchangeable driver options. Following is an example to autoload cache drivers.

$autoload ['drivers'] = array('cache');

- Helper files− It is a list of helper files, to be autoloaded. Provide a list of libraries in the array, as shown below, to be autoloaded by CodeIgniter. In the given example, we are autoloading URL and file helpers.

$autoload ['helper'] = array('url', 'file');

- Custom config files− These files are intended for use, only if you have created custom config files. Otherwise, leave it blank. Following is an example of how to autoload more than one config files.

$autoload ['config'] = array('config1', 'config2');

- Language files− It is a list of language files, which should be auto loaded. Look at the example given below. Provide a list of languages in an array as shown below to be auto loaded by CodeIgniter. Keep in mind that do not include the "_lang" part of your file. For example, "codeigniter_lang.php" would be referenced as array('codeigniter');
- Models− It is a list of models file, which should be autoloaded. Provide a list of models in an array as shown below to be autoloaded by CodeIgniter. Following is the example of how to auto load more than one models files.

$autoload ['model'] = array('first_model', 'second_model');

<https://www.tutorialspoint.com/codeigniter/codeigniter_configuration.htm>

## Error Handlings

<https://www.tutorialspoint.com/codeigniter/codeigniter_error_handling.htm>
