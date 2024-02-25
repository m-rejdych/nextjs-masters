# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:1 as base
WORKDIR /usr/src/app

ARG DATABASE_URL
ARG NODE_ENV=production
ARG PORT=4000
ENV DATABASE_URL=$DATABASE_URL
ENV NODE_ENV=$NODE_ENV
ENV PORT=$PORT

# install dependencies into temp directory
# this will cache them and speed up future builds
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lockb /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

# install with --production (exclude devDependencies)
RUN mkdir -p /temp/prod
COPY package.json bun.lockb /temp/prod/
COPY prisma/schema.prisma /temp/prod/
RUN ls
RUN cd /temp/prod && bun install --frozen-lockfile --production && bun prisma generate

# copy node_modules from temp directory
# then copy all (non-ignored) project files into the image
FROM base AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .

# copy production dependencies and source code into final image
FROM base AS release
COPY --from=install /temp/prod/node_modules node_modules
COPY --from=prerelease /usr/src/app/src src
COPY --from=prerelease /usr/src/app/package.json .
COPY --from=prerelease /usr/src/app/tsconfig.json .

# run the app
USER bun
EXPOSE $PORT/tcp
ENTRYPOINT [ "bun", "run", "src/index.ts" ]
