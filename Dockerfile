FROM node:lts-jod

WORKDIR /app

COPY package.json yarn.lock* ./
RUN yarn install

COPY . .

EXPOSE 3000 5173
ENV VITE_HOST=0.0.0.0

CMD ["yarn", "dev"]
