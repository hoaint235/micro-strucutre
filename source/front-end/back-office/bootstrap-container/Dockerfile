# stage 1
FROM node:14.17.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . /app
RUN yarn install
RUN yarn build
# # stage 2
FROM nginx:1.16.0-alpine
COPY --from=build /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY docker-build/nginx.conf /etc/nginx/conf.d
RUN chmod u+x ./docker-build/app-startup.sh
CMD ["./app_startup.sh"]