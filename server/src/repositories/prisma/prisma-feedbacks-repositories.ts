import { prisma } from "../../prisma";
import {
  FeedbackCreatedata,
  FeedbacksRepository,
} from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create({ types, comment, screenshot }: FeedbackCreatedata) {
    await prisma.feedback.create({
      data: {
        types,
        comment,
        screenshot,
      },
    });
  }
}
