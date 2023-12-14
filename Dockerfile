# ---------------------------------------------------------------------------
# stage 1 - builder
# ---------------------------------------------------------------------------
FROM node:20 as builder

# install bun
RUN npm install -g bun

# setup default user and working directory
USER node
WORKDIR /home/node/app

# install dependencies
COPY --chown=node:node package.json bun.lockb ./
RUN bun install --frozen-lockfile

# copy source code
COPY --chown=node:node . .

# build docs
RUN bun run build

# ---------------------------------------------------------------------------
# stage 2 - runner
# ---------------------------------------------------------------------------
FROM node:20 as runner

# setup default user and working directory
USER node
WORKDIR /home/node/app

# copy web files
COPY --from=builder --chown=node:node /home/node/app/.output /home/node/app

# expose port
EXPOSE 3000

# run server
CMD [ "node", "server/index.mjs" ]
