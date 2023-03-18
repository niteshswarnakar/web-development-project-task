# Development
FROM node:16-alpine3.15 AS build

WORKDIR /app/frontend

COPY package*.json ./
COPY frontend ./

RUN npm install

COPY . .

RUN npm run build

# Production

FROM python:3.8-alpine3.15

WORKDIR /app

COPY --from=build /app/frontend/node_modules ./frontend/node_modules
COPY --from=build /app/frontend/build ./frontend/build

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apk add libpq-dev alpine-sdk libressl-dev libffi-dev && pip3 install --upgrade pip && pip3 install setuptools==45 wheel

COPY requirements.txt .

RUN pip install -r requirements.txt 

COPY . .

RUN python manage.py migrate

EXPOSE 8000