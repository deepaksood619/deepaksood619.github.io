# FastAPI

FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.6+ based on standard Python type hints.

## The key features are

- Fast: Very high performance, on par withNodeJSandGo(thanks to Starlette and Pydantic).[One of the fastest Python frameworks available](https://fastapi.tiangolo.com/#performance).
- Fast to code: Increase the speed to develop features by about 200% to 300%
- Fewer bugs: Reduce about 40% of human (developer) induced errors
- Intuitive: Great editor support.Completioneverywhere. Less time debugging.
- Easy: Designed to be easy to use and learn. Less time reading docs.
- Short: Minimize code duplication. Multiple features from each parameter declaration. Fewer bugs.
- Robust: Get production-ready code. With automatic interactive documentation.
- Standards-based: Based on (and fully compatible with) the open standards for APIs:[OpenAPI](https://github.com/OAI/OpenAPI-Specification)(previously known as Swagger) and [JSON Schema](https://json-schema.org/).

https://towardsdatascience.com/why-we-switched-from-flask-to-fastapi-for-production-machine-learning-765aab9b3679

https://towardsdatascience.com/fastapi-cloud-database-loading-with-python-1f531f1d438a

[**https://fastapi.tiangolo.com/alternatives/**](https://fastapi.tiangolo.com/alternatives/)

https://github.com/tiangolo/fastapi

https://github.com/long2ice/fastapi-admin

https://www.freecodecamp.org/news/fastapi-helps-you-develop-apis-quickly

[**https://www.freecodecamp.org/news/how-to-create-microservices-with-fastapi/**](https://www.freecodecamp.org/news/how-to-create-microservices-with-fastapi/)

[**https://www.toptal.com/python/build-high-performing-apps-with-the-python-fastapi-framework**](https://www.toptal.com/python/build-high-performing-apps-with-the-python-fastapi-framework)

## OpenAPI

FastAPI generates a "schema" with all your API using the OpenAPI standard for defining APIs.

### "Schema"

A "schema" is a definition or description of something. Not the code that implements it, but just an abstract description.

### API "schema"

In this case, [OpenAPI](https://github.com/OAI/OpenAPI-Specification) is a specification that dictates how to define a schema of your API.

This schema definition includes your API paths, the possible parameters they take, etc.

### Data "schema"

The term "schema" might also refer to the shape of some data, like a JSON content.

In that case, it would mean the JSON attributes, and data types they have, etc.

## OpenAPI and JSON Schema

OpenAPI defines an API schema for your API. And that schema includes definitions (or "schemas") of the data sent and received by your API usingJSON Schema, the standard for JSON data schemas.

http://127.0.0.1:8000/openapi.json

## What is OpenAPI for

The OpenAPI schema is what powers the two interactive documentation systems included.

You could also use it to generate code automatically, for clients that communicate with your API. For example, frontend, mobile or IoT applications.

## Path Parameters

You can declare path "parameters" or "variables" with the same syntax used by Python format strings

```python
@app.get("/items/{item_id}")

async def read_item(item_id: int):

return {"item_id": item_id}
```

## Query Parameters

When you declare other function parameters that are not part of the path parameters, they are automatically interpreted as "query" parameters.

The query is the set of key-value pairs that go after the?in a URL, separated by&characters.

http://127.0.0.1:8000/items/?skip=0&limit=10

## Request Body

```python
class ClientAuth(Base):
"""
stores clients data that can access the apis
"""

client_secret = db.Column(db.String(72))

client_name = db.Column(db.String(50), nullable=False)

registered_by = db.Column(db.String(36), nullable=False)
```

## Data Types

- int
- float
- str
- bool
- UUID
- datetime.datetime
- datetime.date
- datetime.time
- datetime.timedelta
- frozenset
- bytes
- Decimal

## Commands

```python
from fastapi import FastAPI
from enum import Enum

app = FastAPI()

@app.get("/")
async def root():
 return {"message": "Hello World"}

@app.get("/items/{item_id}")
async def read_item(item_id: int):
 return {"item_id": item_id}

class ModelName(str, Enum):

 alexnet = "alexnet123"
 resnet123 = "resnet"
 lenet = "lenet123"

 @app.get("/models/{model_name}")
 async def get_model(model_name: ModelName):
  if model_name == ModelName.alexnet:
   return {"model_name": model_name, "message": "Deep Learning"}

  if model_name.value == "lenet123":
   return {"model_name": model_name, "message": "LeCNN"}

  return {"model_name": model_name, "message": "Have some residuals"}

# uvicorn main:app --host 0.0.0.0 --reload
```

[http://127.0.0.1:8000](http://127.0.0.1:8000/)

http://127.0.0.1:8000/docs

http://127.0.0.1:8000/redoc

http://127.0.0.1:8000/openapi.json

## Others

### Starlette

Starlette is a lightweight [ASGI](https://asgi.readthedocs.io/en/latest/) framework/toolkit, which is ideal for building high performance asyncio services.

It is production-ready, and gives you the following:

- Seriously impressive performance.
- WebSocket support.
- GraphQL support.
- In-process background tasks.
- Startup and shutdown events.
- Test client built onrequests.
- CORS, GZip, Static Files, Streaming responses.
- Session and Cookie support.
- 100% test coverage.
- 100% type annotated codebase.
- Zero hard dependencies.

### Admin

[GitHub - fastapi-admin/fastapi-admin: A fast admin dashboard based on FastAPI and TortoiseORM with tabler ui, inspired by Django admin](https://github.com/fastapi-admin/fastapi-admin)

[Starlette Admin](https://jowilf.github.io/starlette-admin/) (Supports mongoengine too)

### FastAPI-cache2

```bash
pip install "fastapi-cache2[redis]"
```

```python
@app.get("/foo")
@cache(expire=60)
async def foo() -> SomeModel:
    return create_some_model
```

[GitHub - long2ice/fastapi-cache: fastapi-cache is a tool to cache fastapi response and function result, with backends support redis and memcached.](https://github.com/long2ice/fastapi-cache)

## Links

[Awesome FastAPI | | Curated list of awesome lists | Project-Awesome.org](https://project-awesome.org/mjhea0/awesome-fastapi)

[FastAPI Handbook – How to Develop, Test, and Deploy APIs](https://www.freecodecamp.org/news/fastapi-quickstart/)
