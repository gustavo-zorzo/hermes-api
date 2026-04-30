import Fastify from "fastify";

export function buildServer() {
  const fastify = Fastify({ logger: true });

  fastify.get("/health", (request, reply) =>
    reply.status(200).send({ status: "ok" }),
  );
  return fastify;
}
