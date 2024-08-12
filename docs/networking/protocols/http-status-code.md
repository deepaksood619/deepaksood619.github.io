# Http Status Code

### 1×× Informational

- [100Continue](https://httpstatuses.com/100)
- [101Switching Protocols](https://httpstatuses.com/101)
- [102Processing](https://httpstatuses.com/102)

### 2×× Success

- [200OK](https://httpstatuses.com/200)
- [201Created](https://httpstatuses.com/201)
- [202Accepted](https://httpstatuses.com/202)
- [203Non-authoritative Information](https://httpstatuses.com/203)
- [204No Content](https://httpstatuses.com/204)
- [205Reset Content](https://httpstatuses.com/205)
- [206Partial Content](https://httpstatuses.com/206)
- [207Multi-Status](https://httpstatuses.com/207)
- [208Already Reported](https://httpstatuses.com/208)
- [226IM Used](https://httpstatuses.com/226)

### 3×× Redirection

- [300Multiple Choices](https://httpstatuses.com/300)
- [301Moved Permanently](https://httpstatuses.com/301)
- [302Found](https://httpstatuses.com/302)
    - [What are 301 and 302 redirects? | Domains - GoDaddy Help IN](https://in.godaddy.com/help/what-are-301-and-302-redirects-2376)
- [303See Other](https://httpstatuses.com/303)
- [304Not Modified](https://httpstatuses.com/304)
- [305Use Proxy](https://httpstatuses.com/305)
- [307Temporary Redirect](https://httpstatuses.com/307)
- [308Permanent Redirect](https://httpstatuses.com/308)

### 4×× Client Error

- [400Bad Request](https://httpstatuses.com/400)
- [401Unauthorized](https://httpstatuses.com/401)
- [402Payment Required](https://httpstatuses.com/402)
- [403Forbidden](https://httpstatuses.com/403)
- [404Not Found](https://httpstatuses.com/404)
- [405Method Not Allowed](https://httpstatuses.com/405)
- [406Not Acceptable](https://httpstatuses.com/406)
- [407Proxy Authentication Required](https://httpstatuses.com/407)
- [408Request Timeout](https://httpstatuses.com/408)
- [409Conflict](https://httpstatuses.com/409)
- [410Gone](https://httpstatuses.com/410)
- [411Length Required](https://httpstatuses.com/411)
- [412Precondition Failed](https://httpstatuses.com/412)
- [413Payload Too Large](https://httpstatuses.com/413)
- [414Request-URI Too Long](https://httpstatuses.com/414)
    - Can happen when GET requests length is long
    - Can be solved by increasing the size of URI that server can accept
- [415Unsupported Media Type](https://httpstatuses.com/415)
- [416Requested Range Not Satisfiable](https://httpstatuses.com/416)
- [417Expectation Failed](https://httpstatuses.com/417)
- [418I'm a teapot](https://httpstatuses.com/418)
- [421Misdirected Request](https://httpstatuses.com/421)
- [422Unprocessable Entity](https://httpstatuses.com/422)
- [423Locked](https://httpstatuses.com/423)
- [424Failed Dependency](https://httpstatuses.com/424)
- [426Upgrade Required](https://httpstatuses.com/426)
- [428Precondition Required](https://httpstatuses.com/428)
- [429Too Many Requests](https://httpstatuses.com/429)
- [431Request Header Fields Too Large](https://httpstatuses.com/431)
- [444Connection Closed Without Response](https://httpstatuses.com/444)
- [451Unavailable For Legal Reasons](https://httpstatuses.com/451)
- [499Client Closed Request](https://httpstatuses.com/499)
    - HTTP 499 in Nginx means that the **client closed the connection** before the server answered the request.

### 5×× Server Error

- [500Internal Server Error](https://httpstatuses.com/500)
- [501Not Implemented](https://httpstatuses.com/501)
- [502Bad Gateway](https://httpstatuses.com/502)
- [503Service Unavailable](https://httpstatuses.com/503)
- [504Gateway Timeout](https://httpstatuses.com/504)
- [505HTTP Version Not Supported](https://httpstatuses.com/505)
- [506Variant Also Negotiates](https://httpstatuses.com/506)
- [507Insufficient Storage](https://httpstatuses.com/507)
- [508Loop Detected](https://httpstatuses.com/508)
- [510Not Extended](https://httpstatuses.com/510)
- [511Network Authentication Required](https://httpstatuses.com/511)
- [599Network Connect Timeout Error](https://httpstatuses.com/599)

https://httpstatuses.com

https://dev.to/khaosdoctor/the-complete-guide-to-status-codes-for-meaningful-rest-apis-conclusion-2pf8

## Most Important Error Codes

| **Error Code** | **Meaning**                                                                                 |
|-----------|-------------------------------------------------------------|
| 400            | Bad Request -- Your request is invalid.                                                    |
| 401            | Unauthorized -- Your API key is wrong.                                                     |
| 403            | Forbidden -- The kitten requested is hidden for administrators only.                       |
| 404            | Not Found -- The specified kitten could not be found.                                      |
| 405            | Method Not Allowed -- You tried to access a kitten with an invalid method.                 |
| 406            | Not Acceptable -- You requested a format that isn't json.                                 |
| 410            | Gone -- The kitten requested has been removed from our servers.                            |
| 418            | I'm a teapot.                                                                              |
| 429            | Too Many Requests -- You're requesting too many kittens! Slow down!                       |
| 500            | Internal Server Error -- We had a problem with our server. Try again later.                |
| 503            | Service Unavailable -- We're temporarily offline for maintenance. Please try again later. |
