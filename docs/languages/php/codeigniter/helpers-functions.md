# Helpers / Functions

As the name suggests, it will help you build your system. It is divided into small functions to serve different functionality. A number of helpers are available in CodeIgniter, which are listed in the table below. We can build our own helpers too.

Helpers are typically stored in yoursystem/helpers, orapplication/helpers directory. Custom helpers are stored inapplication/helpersdirectory and systems' helpers are stored insystem/helpersdirectory. CodeIgniter will look first in yourapplication/helpers directory. If the directory does not exist or the specified helper is not located, CodeIgniter will instead, look in your globalsystem/helpers/ directory. Each helper, whether it is custom or system helper, must be loaded before using it.

There are **URL Helpers**, that assist in creating links, there are **Form Helpers** that help you create form elements, **Text Helpers** perform various text formatting routines, **Cookie Helpers** set and read cookies, **File Helpers** help you deal with files, etc.

## Loading a Helper

`$this->load->helper('name');`

Where name is the name of the helper. For example, if you want to load the URL Helper, then it can be loaded as −

`$this->load->helper('url');`

<https://www.tutorialspoint.com/codeigniter/codeigniter_basic_concepts.htm>

## Global Functions and Constants

- [**Global Functions**](https://codeigniter.com/user_guide/general/common_functions.html#global-functions)
  - [**Service Accessors**](https://codeigniter.com/user_guide/general/common_functions.html#service-accessors)
    - cache([$key])
    - env($key [,$default=null])
    - esc($data,$context='html'[,$encoding])
    - helper($filename)
    - lang($line [,$args [,$locale]])
    - model($name [,$getShared = true [,&$conn = null]])
    - old($key [,$default = null [,$escape = 'html']])
    - session([$key])
    - timer([$name])
    - view($name [,$data [,$options]])
    - view_cell($library [,$params = null [,$ttl = 0 [,$cacheName = null]]])

- [**Miscellaneous Functions**](https://codeigniter.com/user_guide/general/common_functions.html#miscellaneous-functions)
  - app_timezone()
  - csrf_token()
  - csrf_header()
  - csrf_hash()
  - csrf_field()
  - csrf_meta()
  - force_https($duration = 31536000 [,$request = null [,$response = null]])
  - function_usable($function_name)
  - is_cli()
  - is_really_writable($file)
  - log_message($level,$message [,$context])
  - **redirect(string $uri)**

// Go back to the previous page
return redirect()->back();

// Go to specific UI

## return redirect()->to('/admin')

// Go to a named/reverse-routed URI
return redirect()->route('named_route');

// Keep the old input values upon redirect so they can be used by the `old()` function
return redirect()->back()->withInput();

// Set a flash message
return redirect()->back()->with('foo', 'message');

// Copies all cookies from global response instance
return redirect()->back()->withCookies();

// Copies all headers from the global response instance
return redirect()->back()->withHeaders();

- remove_invisible_characters($str [,$urlEncoded = TRUE])
- route_to($method [,...$params])
- service($name [,...$params])
- single_service($name [,...$params])
- slash_item($item)
- stringify_attributes($attributes [,$js])

- [**Global Constants**](https://codeigniter.com/user_guide/general/common_functions.html#global-constants)
  - [**Core Constants**](https://codeigniter.com/user_guide/general/common_functions.html#core-constants)
    - constant APPPATH
    - constant ROOTPATH
    - constant SYSTEMPATH
    - constant FCPATH
    - constant WRITEPATH

- [**Time Constants**](https://codeigniter.com/user_guide/general/common_functions.html#time-constants)
  - constant SECOND
  - constant MINUTE
  - constant HOUR
  - constant DAY
  - constant WEEK
  - constant MONTH
  - constant YEAR
  - constant DECADE

<https://codeigniter.com/user_guide/general/common_functions.html>
