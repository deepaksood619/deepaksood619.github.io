# OpenAPI

1. [What Is OpenAPI?](https://swagger.io/docs/specification/about/)

An**open API**(often referred to as a public API) is a publicly available [application programming interface](https://en.wikipedia.org/wiki/Application_programming_interface) that provides developers with programmatic access to a proprietary software application or web service.- Writing API Specification

- API specifications can be written in YAML or JSON
Swaggeris a set of open-source tools built around the OpenAPI Specification that can help you design, build, document and consume REST APIs. The major Swagger tools include:
- [Swagger Editor](http://editor.swagger.io/)-- browser-based editor where you can write OpenAPI specs.
- [Swagger UI](https://swagger.io/swagger-ui/)-- renders OpenAPI specs as interactive API documentation.
- [Swagger Codegen](https://github.com/swagger-api/swagger-codegen)-- generates server stubs and client libraries from an OpenAPI spec.

2. [Basic Structure](https://swagger.io/docs/specification/basic-structure/)

3. [API Server and Base Path](https://swagger.io/docs/specification/api-host-and-base-path/)

4. [Media Types](https://swagger.io/docs/specification/media-types/)

5. [Paths and Operations](https://swagger.io/docs/specification/paths-and-operations/)

6. [Describing Parameters](https://swagger.io/docs/specification/describing-parameters/)

7. [Parameter Serialization](https://swagger.io/docs/specification/serialization/)

8. [Describing Request Body](https://swagger.io/docs/specification/describing-request-body/)

9. [Describing Responses](https://swagger.io/docs/specification/describing-responses/)

10. [Data Models (Schemas)](https://swagger.io/docs/specification/data-models/)

11. [Adding Examples](https://swagger.io/docs/specification/adding-examples/)

12. [Authentication](https://swagger.io/docs/specification/authentication/)

- Basic

- Bearer

- other HTTP schemes as defined by [RFC 7235](https://tools.ietf.org/html/rfc7235) and [HTTP Authentication Scheme Registry](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml)

- [API keys](https://swagger.io/docs/specification/authentication/api-keys/) in headers, query string or cookies

- Cookie Authentication

- OAuth 2.0

- OpenID Connect Discovery

13. [Links](https://swagger.io/docs/specification/links/)

14. [Callbacks](https://swagger.io/docs/specification/callbacks/)

15. [Components Section](https://swagger.io/docs/specification/components/)

16. [Using $ref](https://swagger.io/docs/specification/using-ref/)

17. [API General Info](https://swagger.io/docs/specification/api-general-info/)

18. [Grouping Operations With Tags](https://swagger.io/docs/specification/grouping-operations-with-tags/)

19. [OpenAPI Extensions](https://swagger.io/docs/specification/openapi-extensions/)
OpenAPI has a way to define multiple security "schemes"

- **apiKey:** an application specific key that can come from:
  - A query parameter
  - A header
  - A cookie
- **http:** standard HTTP authentication systems, including:
  - bearer: a headerAuthorizationwith a value ofBearerplus a token. This is inherited from OAuth2
  - HTTP Basic authentication
  - HTTP Digest, etc
- **oauth2:** all the OAuth2 ways to handle security (called "flows")
  - Several of these flows are appropriate for building an OAuth 2.0 authentication provider (like Google, Facebook, Twitter, GitHub, etc):
    - implicit
    - clientCredentials
    - authorizationCode
  - But there is one specific "flow" that can be perfectly used for handling authentication in the same application directly:
    - password: some next chapters will cover examples of this
- **openIdConnect:** has a way to define how to discover OAuth2 authentication data automatically
  - This automatic discovery is what is defined in the OpenID Connect specification

## Other Tools

- Apiary
- OpenAPI
- API Blueprint
- Spotlight Studio
  - <https://stoplight.io>
- Spectral - api validation
- <https://github.com/apideck-libraries/portman>
<https://swagger.io/docs/specification/about>

<https://www.openapis.org>

<https://github.com/OAI/OpenAPI-Specification>

[GOTO 2019 - Introduction to OpenAPI - Lorna Jane Mitchell](https://www.youtube.com/watch?v=s9u3mXQZbXI)
