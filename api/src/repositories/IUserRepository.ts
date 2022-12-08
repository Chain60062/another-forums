import { User } from "prisma/prisma-client";
import { UserModel } from "./interfaces";

export default interface IUserRepository {
  findOneAsync: (email: string) => Promise<User | null>;
  createAsync: (u: UserModel) => Promise<User>;
  updateAsync: (id: string, u: UserModel) => Promise<User | null>;
  deleteAsync: (id: string) => Promise<User | null>;
}
