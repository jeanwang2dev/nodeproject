# Set up a Node.js(Express) environment for my web app

# Contains Dockerfile for Development

# Build and run 

```

$ docker image build -t node-project .

```

then

```
$ docker container run --rm -it -p <hostport>:3000 -v $(pwd):/app node-project bash

```
or

```
$ docker container run -d -p <hostport>:3000 nodde-project

```
