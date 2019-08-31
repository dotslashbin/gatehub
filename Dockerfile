FROM mhart/alpine-node:10.16.3
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN npm install
COPY . /usr/src/app/
EXPOSE 3000
CMD ["yarn", "run", "start"]