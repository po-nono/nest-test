npm run typeorm migration:generate src/migration/<name>
npm run build && npm run typeorm migration:run

docker exec -it <containerId> bash
