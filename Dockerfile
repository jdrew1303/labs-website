FROM duluca/minimal-node-web-server

WORKDIR /usr/src/app
COPY build public

# For local debugging use ENV NODE_ENV=local
ENV ENFORCE_HTTPS=xProto