import { Prisma, PrismaClient } from "prisma/prisma-client";
import { Thread } from "@prisma/client";
import { ThreadModel } from "./interfaces";
import IThreadRepository from "./IThreadRepository";

export default class ThreadRepository implements IThreadRepository {
  private _prisma: PrismaClient;
  constructor() {
    this._prisma = new PrismaClient();
  }
  // Read
  findOneAsync = async (id: number): Promise<Thread | null> => {
    return await this._prisma.thread
      .findUnique({
        where: {
          id,
        },
      })
      .catch((err) => {
        throw new Error("Thread não encontrada.");
      });
  };
  findAllByUserAsync = async (userId: string): Promise<Thread[] | null> => {
    return await this._prisma.thread.findMany({
      where: {
        userId,
      },
    });
  };
  findAllByAsync = async()=> ;
  // Create
  createAsync = async (t: ThreadModel): Promise<Thread> => {
    return await this._prisma.thread
      .create({
        data: {
            title: t.title,
            content: t.content,
            userId: t.user.id,
            files: t.files,
            
        },
      })
      .catch((err) => {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
          if (err.code === "P2002") {
            throw new Error(
              "Ops, houve um erro ao criar o usuário, este email já está em uso."
            );
          }
          if (err.code === "P1000") {
            throw new Error(
              "Ops, houve um erro ao criar o usuário, as credenciais fornecidas estão incorretas."
            );
          }
        }
        throw new Error("Ops, houve um error desconhecido ao criar o usuário.");
      });
  };
  // Delete
  deleteAsync = async (id: string) => {
    const user = await this._prisma.user.delete({
      where: {
        id,
      },
    });
    return user;
  };
  // Update
  updateAsync = async (id: string, u: UserModel) => {
    const user = await this._prisma.user.update({
      where: {
        id,
      },
      data: {
        name: u.name,
        email: u.email,
        hashedPassword: u.hashedPassword,
        role: u.role,
      },
    });
    return user;
  };
}
