# Frameworks

## Tornado

Tornado is a Python web framework and asynchronous networking library. By using non-blocking network I/O, Tornado can scale to tens of thousands of open connections, making it ideal for long polling, WebSockets, and other applications that require a long-lived connection to each user.

<https://github.com/tornadoweb/tornado>

<https://www.tornadoweb.org/en/stable>

## Pyramid

The StartSmall, FinishBigStayFinishedFramework

Pyramid makes it easy to write web applications. You can**start small** with this "hello world" minimal request/response web app. This may take you far, especially while learning. As your application grows, Pyramid offers many features that make writing complex software take less effort.

<https://trypyramid.com>

<https://github.com/Pylons/pyramid>

## Falcon

Falcon is a minimalist WSGI library for building speedy web APIs and app backends. We like to think of Falcon as theDieter Ramsof web frameworks.

When it comes to building HTTP APIs, other frameworks weigh you down with tons of dependencies and unnecessary abstractions. Falcon cuts to the chase with a clean design that embraces HTTP and the REST architectural style.

|                        | **speedup** | **req/sec** | **μs/req** |
|-------------------------|-------------|-------------|------------|
| Falcon Extended (2.0.0) | 10x         | 29,086      | 34.38      |
| Flask (1.0.2)           | 3x          | 5,404       | 185.06     |
| Django (2.2.1)          | 1x          | 1,790       | 558.60     |

<https://falcon.readthedocs.io/en/stable>

<https://github.com/falconry/falcon>

## Typer

Typeris FastAPI's little sibling. And it's intended to be theFastAPI of CLIs

Typer is a library for buildingCLIapplications that users willlove usingand developers willlove creating. Based on Python 3.6+ type hints.

The key features are:

- Intuitive to write: Great editor support.Completioneverywhere. Less time debugging. Designed to be easy to use and learn. Less time reading docs.
- Easy to use: It's easy to use for the final users. Automatic help, and automatic completion for all shells.
- Short: Minimize code duplication. Multiple features from each parameter declaration. Fewer bugs.
- Start simple: The simplest example adds only 2 lines of code to your app:1 import, 1 function call.
- Grow large: Grow in complexity as much as you want, create arbitrarily complex trees of commands and groups of subcommands, with options and arguments.

```python
# test.py
import typer
app = typer.Typer()

@app.command()
def hello(name: str):
    typer.echo(f"Hello {name}")

@app.command()
def goodbye(name: str, formal: bool = False):
    if formal:
        typer.echo(f"Goodbye Mr. {name}. Have a good day.")
    else:
        typer.echo(f"Bye {name}!")

if __name__ == "__main__":
app()
```

```bash
python test.py --help
python test.py hello Deepak
python test.py goodbye Deepak
python test.py goodbye --formal Deepak
```

<https://typer.tiangolo.com>

## Sanic

[Sanic](https://sanicframework.org/) is a "modern" framework in the true sense of the word: it doesn't support Python version below 3.6, supports the simple and universal async/await syntax out of the box, and as a result, doesn't make you read loads of documentation and keep edge cases in your mind before you can write your first HTTP handler.

As a result, the resulting syntax is quite pleasant (in my opinion, at least); it resembles code you'd write with any other microframework (Flask, CherryPy, for example) with just a fewasyncsprinkled in:

```python
from sanic import Sanic
from sanic.response import json
app = Sanic()
@app.route("/")
async def test(request):
    return json({"hello": "world"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)
```

Sanic is arguably the most popular and most loved async framework in the Python world. It has almost all features that you'd want for your projects - routing, middleware, cookies, versioning, blueprints, class-based views, static files, streaming, sockets, etc. --- and what it doesn't offer out of the box - templating, database support, file I/O, queues - can be added as there are just enough async libraries for these as of today.

<https://github.com/huge-success/sanic>

<https://sanic.readthedocs.io/en/latest>

## Vibora

[Vibora](https://vibora.io/) is a close cousin of Sanic, except that it's fixated on becoming the fastest Python web server out there. In fact, the very first visit of its website greets you with a framework comparison:

![image](../../media/Frameworks-image1.jpg)

As you can see, Vibora claims to be several times faster than the classic frameworks and being more than twice as fast as Sanic, its nearest competitor. Of course, benchmarks are to be taken with a grain of salt. 🙂

Although in syntax and features, Vibora is comparable to Sanic (or maybe even slightly better as it bundles popular libraries and things like templating are available out of the box), I'd consider Sanic to be more mature as it's been around longer and has a bigger community.

```python
from vibora import Vibora, JsonResponse
app = Vibora()
@app.route('/')
async def home():
    return JsonResponse({'hello': 'world'})

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8000)
```

If you're a performance junkie, though, Vibora might float your boat.

## Quart
