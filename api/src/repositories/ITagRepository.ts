import { Tag } from "prisma/prisma-client";
import { TagModel } from "./interfaces";

export default interface IUserRepository {
  findOneAsync: (id: string) => Promise<Tag | null>;
  createAsync: (u: TagModel) => Promise<Tag>;
  updateAsync: (id: string, t: TagModel) => Promise<Comment | null>;
  deleteAsync: (id: string) => Promise<Tag | null>;
}
