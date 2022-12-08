import { Prisma, PrismaClient } from "prisma/prisma-client";
import { User } from "@prisma/client";
import IUserRepository from "./IUserRepository";
import { UserModel } from "./interfaces";

export default class UserRepository implements IUserRepository {
  private _prisma: PrismaClient;
  constructor() {
    this._prisma = new PrismaClient();
  }
  // Read
  findOneAsync = async (email: string) : Promise<User | null> => {
    return await this._prisma.user.findUnique({
      where: {
        email,
      },
    }).catch(err =>{
      throw new Error("Usuário não encontrado.")
    });
  };
  // Create
  createAsync = async (u: UserModel): Promise<User> => {
    return await this._prisma.user
      .create({
        data: {
          name: u.name,
          email: u.email,
          hashedPassword: u.hashedPassword,
          role: u.role,
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
