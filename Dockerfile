FROM mcr.microsoft.com/playwright:v1.52.0-jammy

WORKDIR /app

COPY package.json yarn.lock ./
COPY playwright.config.js ./
COPY tests ./tests

RUN yarn install || npm install

CMD ["yarn", "test"]