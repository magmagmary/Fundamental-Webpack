FROM node:22.14.0 as build
WORKDIR /webpack-app
COPY package.json .
COPY yarn.lock .
COPY .yarnrc* .
COPY .yarn ./.yarn
COPY .pnp* .
RUN yarn install
COPY . .
RUN yarn build

From nginx
COPY --from=build /webpack-app/build /usr/share/nginx/html
