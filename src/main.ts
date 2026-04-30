import { buildServer } from "@infra/server/index.js";

const port = process.env.PORT ? Number(process.env.PORT) : 3008;
const server = buildServer();

server.listen({ port, host: "0.0.0.0" }, function (err, address) {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
});
