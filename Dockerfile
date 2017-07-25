FROM duluca/minimal-node-web-server

WORKDIR /usr/src/app
COPY build public

ENV ENFORCE_HTTPS=xProto