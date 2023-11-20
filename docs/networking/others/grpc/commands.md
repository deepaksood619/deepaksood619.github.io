# Commands

```bash
brew install protobuf
protoc

# for go
export GO111MODULE=on # Enable module-aware mode
go get google.golang.org/grpc@v1.28.1
go get github.com/golang/protobuf/protoc-gen-go

export PATH="$PATH:$(go env GOPATH)/bin"
protoc --proto_path=proto proto/*.proto --go_out=plugins=grpc:pb

<https://grpc.io/docs/quickstart/go>
```

```python
# for python

import memory_message_pb2

m = memory_message_pb2.Memory()
m.value = 10
m.unit = 10
m.SerializeToString()

pip install google

from google.protobuf.json_format import MessageToJson

MessageToJson(m)
```

### Tools

<https://github.com/fullstorydev/grpcurl>

### python2to3.py

```python
import logging
import os

logging.basicConfig(level=logging.DEBUG)
path = os.path.dirname(os.path.dirname(os.path.realpath(__file__)))

path = os.path.join(path, "pb")
logging.info(path)

file_path = f"{path}/*_pb2*.py"
logging.info(file_path)

os.system(f"2to3 -wn -f import {file_path}")
```
