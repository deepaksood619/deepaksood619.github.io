# Web Concepts

## Browser Redirection

The PHPheader()function supplies raw HTTP headers to the browser and can be used to redirect it to another location. The redirection script should be at the very top of the page to prevent any other part of the page from loading.

The target is specified by theLocation:header as the argument to theheader()function. After calling this function theexit()function can be used to halt parsing of rest of the code.

```php
<?php
if( $_POST ["location"] ) {
    $location = $_POST ["location"];
    header( "Location:$location" );

    exit();
}
?>
```

## GET and POST

There are two ways the browser client can send information to the web server.

- The GET Method
- The POST Method

Before the browser sends the information, it encodes it using a scheme called URL encoding. In this scheme, name/value pairs are joined with equal signs and different pairs are separated by the ampersand.

`name1=value1&name2=value2&name3=value3`

Spaces are removed and replaced with the+character and any other nonalphanumeric characters are replaced with a hexadecimal values. After the information is encoded it is sent to the server.

## The GET Method

The GET method sends the encoded user information appended to the page request. The page and the encoded information are separated by the?character.

<http://www.test.com/index.htm?name1=value1&name2=value2>

- The GET method produces a long string that appears in your server logs, in the browser's Location: box.
- The GET method is restricted to send upto 1024 characters only.
- Never use GET method if you have password or other sensitive information to be sent to the server.
- GET can't be used to send binary data, like images or word documents, to the server.
- The data sent by GET method can be accessed using QUERY_STRING environment variable.
- The PHP provides$_GETassociative array to access all the sent information using GET method.

```php
<?php
   if( $_GET ["name"] || $_GET ["age"] ) {
      echo "Welcome ". $_GET ['name']. "<br />";
      echo "You are ". $_GET ['age']. " years old.";

      exit();
   }
?>
<html>
   <body>

      <form action = "<?php $_PHP_SELF ?>" method = "GET">
         Name: <input type = "text" name = "name" />
         Age: <input type = "text" name = "age" />
         <input type = "submit" />
      </form>

   </body>
</html>
```

![image](../../media/Web-Concepts-image1.jpg)

## The POST Method

The POST method transfers information via HTTP headers. The information is encoded as described in case of GET method and put into a header called QUERY_STRING.

- The POST method does not have any restriction on data size to be sent.
- The POST method can be used to send ASCII as well as binary data.
- The data sent by POST method goes through HTTP header so security depends on HTTP protocol. By using Secure HTTP you can make sure that your information is secure.
- The PHP provides$_POSTassociative array to access all the sent information using POST method.

```php
<?php
   if( $_POST ["name"] || $_POST ["age"] ) {
      if (preg_match("/[^A-Za-z'-]/",$_POST ['name'] )) {
         die ("invalid name and name should be alpha");
      }
      echo "Welcome ". $_POST ['name']. "<br />";
      echo "You are ". $_POST ['age']. " years old.";

      exit();
   }
?>

<html>
   <body>

<form action = "<?php $_PHP_SELF ?>" method = "POST">
   Name: <input type = "text" name = "name" />
   Age: <input type = "text" name = "age" />
   <input type = "submit" />
</form>

   </body>
</html>
```

![image](../../media/Web-Concepts-image1.jpg)

## The $_REQUEST variable

The PHP $_REQUEST variable contains the contents of both $_GET, $_POST, and $_COOKIE.

The PHP $_REQUEST variable can be used to get the result from form data sent with both the GET and POST methods.

```php
<?php
   if( $_REQUEST ["name"] || $_REQUEST ["age"] ) {
      echo "Welcome ". $_REQUEST ['name']. "<br />";
      echo "You are ". $_REQUEST ['age']. " years old.";
      exit();
   }
?>
<html>
   <body>

      <form action = "<?php $_PHP_SELF ?>" method = "POST">
         Name: <input type = "text" name = "name" />
         Age: <input type = "text" name = "age" />
         <input type = "submit" />
      </form>

   </body>
</html>
```

Here $_PHP_SELF variable contains the name of self script in which it is being called.

![image](../../media/Web-Concepts-image1.jpg)

<https://www.tutorialspoint.com/php/php_get_post.htm>

## File Inclusion

You can include the content of a PHP file into another PHP file before the server executes it. There are two PHP functions which can be used to included one PHP file into another PHP file.

- The include() Function

The include() function takes all the text in a specified file and copies it into the file that uses the include function. If there is any problem in loading a file then theinclude()function generates a warning but the script will continue execution.

- The require() Function

The require() function takes all the text in a specified file and copies it into the file that uses the include function. If there is any problem in loading a file then therequire()function generates a fatal error and halt the execution of the script.

So there is no difference in require() and include() except they handle error conditions. It is recommended to use the require() function instead of include(), because scripts should not continue executing if files are missing or misnamed.

This is a strong point of PHP which helps in creating functions, headers, footers, or elements that can be reused on multiple pages. This will help developers to make it easy to change the layout of complete website with minimal effort. If there is any change required then instead of changing thousand of files just change included file.

<https://www.tutorialspoint.com/php/php_file_inclusion.htm>

## Cookies

Cookies are text files stored on the client computer and they are kept of use tracking purpose. PHP transparently supports HTTP cookies.

There are three steps involved in identifying returning users −

- Server script sends a set of cookies to the browser. For example name, age, or identification number etc.
- Browser stores this information on local machine for future use.
- When next time browser sends any request to web server then it sends those cookies information to the server and server uses that information to identify the user.

<https://www.tutorialspoint.com/php/php_cookies.htm>

## Sessions

An alternative way to make data accessible across the various pages of an entire website is to use a PHP Session.

A session creates a file in a temporary directory on the server where registered session variables and their values are stored. This data will be available to all pages on the site during that visit.

The location of the temporary file is determined by a setting in thephp.inifile calledsession.save_path. Before using any session variable make sure you have setup this path.

When a session is started following things happen −

- PHP first creates a unique identifier for that particular session which is a random string of 32 hexadecimal numbers such as 3c7foj34c3jj973hjkop2fc937e3443.
- A cookie calledPHPSESSIDis automatically sent to the user's computer to store unique session identification string.
- A file is automatically created on the server in the designated temporary directory and bears the name of the unique identifier prefixed by sess_ ie sess_3c7foj34c3jj973hjkop2fc937e3443.

When a PHP script wants to retrieve the value from a session variable, PHP automatically gets the unique session identifier string from the PHPSESSID cookie and then looks in its temporary directory for the file bearing that name and a validation can be done by comparing both values.

A session ends when the user loses the browser or after leaving the site, the server will terminate the session after a predetermined period of time, commonly 30 minutes duration.

<https://www.tutorialspoint.com/php/php_sessions.htm>

## Sending emails

PHP must be configured correctly in thephp.inifile with the details of how your system sends email. Open php.ini file available in/etc/directory and find the section headed [mail function].

<https://www.tutorialspoint.com/php/php_sending_emails.htm>

## Uploading files

A PHP script can be used with a HTML form to allow users to upload files to the server. Initially files are uploaded into a temporary directory and then relocated to a target destination by a PHP script.

Information in thephpinfo.phppage describes the temporary directory that is used for file uploads asupload_tmp_dirand the maximum permitted size of files that can be uploaded is stated asupload_max_filesize. These parameters are set into PHP configuration filephp.ini

The process of uploading a file follows these steps −

- The user opens the page containing a HTML form featuring a text files, a browse button and a submit button.
- The user clicks the browse button and selects a file to upload from the local PC.
- The full path to the selected file appears in the text filed then the user clicks the submit button.
- The selected file is sent to the temporary directory on the server.
- The PHP script that was specified as the form handler in the form's action attribute checks that the file has arrived and then copies the file into an intended directory.
- The PHP script confirms the success to the user.

As usual when writing files it is necessary for both temporary and final locations to have permissions set that enable file writing. If either is set to be read-only then process will fail.

An uploaded file could be a text file or image file or any document.

<https://www.tutorialspoint.com/php/php_file_uploading.htm>
