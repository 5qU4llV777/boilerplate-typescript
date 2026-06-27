import Fastify from "fastify";
import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";

const fastify = Fastify();
const prisma = new PrismaClient();

await fastify.register(cors, {
  origin: "*", // ou "http://127.0.0.1:5500" para restringir
});

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

fastify.post("/exam/:examId/submit", async (req, reply) => {
  const { answers } = req.body as { answers: { questionId: number; answerId: number }[] };

  let correctCount = 0;

  for (const ans of answers) {
    const answer = await prisma.answer.findUnique({ where: { id: ans.answerId } });
    if (answer?.isCorrect) {
      correctCount++;
    }
  }

  const exam = await prisma.exam.findUnique({ where: { id: Number((req.params as any).examId) } });

  const score = (correctCount / answers.length) * 100;
  const passed = score >= (exam?.passingScore ?? 0);

  return { score, passed, correctCount, total: answers.length };
});


fastify.listen({ port: 3000 }, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
