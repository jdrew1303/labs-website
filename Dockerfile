FROM duluca/minimal-node-web-server:8.3.0

WORKDIR /usr/src/app
COPY build public

ENV ENFORCE_HTTPS=xProto