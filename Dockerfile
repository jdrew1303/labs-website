FROM duluca/minimal-node-web-server:1.5.0

WORKDIR /usr/src/app
COPY build public

ENV ENFORCE_HTTPS=xProto