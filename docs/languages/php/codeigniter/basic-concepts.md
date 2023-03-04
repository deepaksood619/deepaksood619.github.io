# Basic Concepts

## Routing

CodeIgniter has user-friendly URI routing system, so that you can easily re-route URL. Typically, there is a one-to-one relationship between a URL string and its corresponding controller class/method. The segments in a URI normally follow this pattern −

your-domain.com/class/method/id/

- Thefirst segmentrepresents the controller class that should be invoked.
- Thesecond segmentrepresents the class function, or method, that should be called.
- Thethird, and any additional segments, represent the ID and any variables that will be passed to the controller.

In some situations, you may want to change this default routing mechanism. CodeIgniter provides facility through which you can set your own routing rules.

## Customize Routing Rules

There is a particular file where you can handle all these. The file is located at application/config/routes.php. You will find an array called $route in which you can customize your routing rules. The key in the $route array will decide what to route and the value will decide where to route. There are three reserved routes in CodeIgniter.

| **S.N.** | **Reserved Routes & Description** |
|---|---|
| $route ['default_controller'] | This route indicates which controller class should be loaded, if the URI contains no data, which will be the case when people load your root URL. You are encouraged to have a default route otherwise a 404 page will appear, by default. We can set home page of website here so it will be loaded by default. |
| $route ['404_override'] | This route indicates which controller class should be loaded if the requested controller is not found. It will override the default 404 error page. It won’t affect to theshow_404()function, which will continue loading the defaulterror_404.phpfile inapplication/views/errors/error_404.php. |
| $route ['translate_uri_dashes'] | As evident by the Boolean value, this is not exactly a route. This option enables you to automatically replace dashes (‘-‘) with underscores in the controller and method URI segments, thus saving you additional route entries if you need to do that. This is required because the dash is not a valid class or method-name character and will cause a fatal error, if you try to use it. |

Routes can be customized bywildcardsor by usingregular expressionsbut keep in mind that these customized rules for routing must come after the reserved rules.

## Wildcards

We can use two wildcard characters as explained below −

- (:num)− It will match a segment containing only numbers.
- (:any)− It will match a segment containing any character.

Example

$route ['product/:num']='catalog/product_lookup';

In the above example, if the literal word "product" is found in the first segment of the URL, and a number is found in the second segment, the "catalog" class and the "product_lookup" method are used instead.

## Regular Expressions

Like wildcards, we can also use regular expressions in$route array keypart. If any URI matches with regular expression, then it will be routed to the value part set into $route array.

Example

$route ['products/([a-z]+)/(d+)']='$1/id_$2';

In the above example, a URI similar to products/shoes/123 would instead call the "shoes" controller class and the "id_123" method.
