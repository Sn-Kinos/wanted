# Base image
FROM node:18-alpine AS build

# Create app directory
WORKDIR /usr/src/app
COPY . .

# Install app dependencies
RUN yarn --immutable
RUN yarn build


# Production image
FROM node:18-alpine

WORKDIR /usr/src/app


COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/dist/mikro-orm.config.js ./
COPY --from=build /usr/src/app/.yarn/cache      ./.yarn/cache
COPY --from=build /usr/src/app/.yarn/unplugged  ./.yarn/unplugged
COPY --from=build /usr/src/app/.pnp.cjs         ./
COPY --from=build /usr/src/app/.env.prod        ./

EXPOSE 4000

ENV NODE_ENV production

CMD ["node", "-r", "./.pnp.cjs", "dist/main.js"]
