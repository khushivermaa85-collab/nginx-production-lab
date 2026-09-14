FROM node:alpine

WORKDIR /app

COPY server.js .
COPY healthcheck.js .

EXPOSE 3000

HEALTHCHECK --interval=10s --timeout=3s --start-period=5s --retries=3 CMD node healthcheck.js

CMD ["node", "server.js"]
