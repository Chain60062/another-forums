import { Comment } from "prisma/prisma-client";
import { CommentModel } from "./interfaces";

export default interface IUserRepository {
  findOneAsync: (id: string) => Promise<Comment | null>;
  createAsync: (u: CommentModel) => Promise<Comment>;
  updateAsync: (id: string, c: CommentModel) => Promise<Comment | null>;
  deleteAsync: (id: string) => Promise<Comment | null>;
}
