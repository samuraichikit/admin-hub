# Базовый образ с pnpm
FROM node:20.11-alpine as base
RUN npm install -g pnpm@9.15.3

#Устанавливаем зависимости
FROM base as dependencies
WORKDIR /app
COPY package*.json ./
RUN pnpm i

#Билдим приложение
#Кэширование зависимостей — если файлы в проекте изменились,
#но package.json остался неизменным, то стейдж с установкой зависимостей повторно не выполняется, что экономит время.
FROM base as builder
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN pnpm build:production

#Стейдж запуска
FROM base as runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/ ./
EXPOSE 3000
CMD ["pnpm", "start"]
