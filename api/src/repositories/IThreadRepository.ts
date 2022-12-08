import { Thread } from "prisma/prisma-client";
import { ThreadModel } from "./interfaces";

export default interface IThreadRepository {
  createAsync: (t: ThreadModel) => Promise<Thread>;
  findOneAsync: (id: number) => Promise<Thread | null>;
  findAllByUserAsync: (userId : string) => Promise<Thread[] | null>;
  findAllByTopicAsync: (topicId : string) => Promise<Thread[] | null>;
  getAllAsync: () => Promise<Thread[] | null>;
  updateAsync: (id: number, u: ThreadModel) => Promise<Thread | null>;
  deleteAsync: (id: number) => Promise<Thread | null>;
}
