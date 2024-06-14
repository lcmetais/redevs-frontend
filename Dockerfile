# FROM node:lts-alpine as builder

# RUN mkdir -p /app && chown -R node:node /app
# WORKDIR /app

# COPY package*.json ./


# RUN yarn install --frozen-lockfile

# COPY . .

# RUN yarn build

# FROM node:lts-alpine

# RUN mkdir -p /app && chown -R node:node /app
# WORKDIR /app

# COPY --from=builder /app/dist ./dist

# VOLUME /app/dist

# EXPOSE 5173

# CMD ["yarn", "start"]

FROM node:latest

WORKDIR /tmp/react

COPY . .

RUN rm -rf node_modules
RUN yarn

RUN yarn build

RUN mkdir -p /app/dist

RUN mv dist/* /app/dist

VOLUME /app/dist

WORKDIR /

RUN rm -rf /tmp/react
