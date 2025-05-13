FROM node:18.16.0

RUN apt-get update && apt-get install -y wget netcat-openbsd && \
    # Baixar o script wait-for
    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
    chmod +x /usr/bin/wait-for

WORKDIR /usr/src/app
COPY . .
COPY package.json ./
RUN npm install
COPY . .

# Usar o caminho correto para o wait-for
CMD ["/usr/bin/wait-for", "db:3306", "--", "npm", "start"]
