FROM node:lts AS compiled

WORKDIR /app
COPY your-app-here/ .

# Add your ENV stuff here

RUN yarn install
RUN yarn build

FROM node:lts

ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
COPY index.js ./

RUN yarn install
EXPOSE 80
ENV NODE_ENV=production
COPY --from=compiled /app/dist /app/frontend
CMD ["node", "index.js"]
