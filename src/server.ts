import Fastify from "fastify";
import { PrismaClient } from "@prisma/client";

const fastify = Fastify();
const prisma = new PrismaClient();

fastify.get("/exam/:id", async (req, reply) => {
  const exam = await prisma.exam.findUnique({
    where: { id: Number((req.params as any).id) },
    include: { questions: { include: { answers: true } } },
  });
  return exam;
});

fastify.post("/exam/:examId/answer", async (req, reply) => {
  const { questionId, answerId } = req.body as any;
  const answer = await prisma.answer.findUnique({ where: { id: answerId } });
  return { correct: answer?.isCorrect };
});

fastify.listen({ port: 3000 }, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
