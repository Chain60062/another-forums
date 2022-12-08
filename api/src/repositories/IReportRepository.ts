import { Report } from "prisma/prisma-client";
import { ReportModel } from "./interfaces";

export default interface IUserRepository {
  findOneAsync: (email: string) => Promise<Report | null>;
  createAsync: (r: ReportModel) => Promise<Report>;
  updateAsync: (id: string, u: ReportModel) => Promise<Report | null>;
  deleteAsync: (id: string) => Promise<Report | null>;
}
