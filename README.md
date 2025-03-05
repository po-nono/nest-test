npm run typeorm migration:generate src/db/migrations
npm run typeorm migration:run
npm run seed:run

docker exec -it <containerId> bash

mysql -u root -h 127.0.0.1 --port=3306 -p
