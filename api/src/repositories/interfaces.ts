import { File, Comment, User, Topic, Thread, ThreadTags, Report } from "@prisma/client"
export interface UserModel {
  id?: string;
  name: string;
  email: string;
  hashedPassword: string;
  role?: string;
}
export interface ThreadModel {
  id?: string;
  title: string;
  content: string;
  files : File[];
  comments : Comment[];
  user : User;
  Topic : Topic;
  createdAt : Date;
  updatedAt : Date;
  ThreadTags : ThreadTags[]
  Report   :  Report[]
}
export interface TagModel{
  id? : string;
  content: string;
  ThreadTags: ThreadTags[];
}
export interface CommentModel{
  id? : string;
  Author : User;
  Thread: Thread;
  parent?: Comment;
  child : Comment[];
  createdAt: Date;
  updatedAt: Date;
}
export interface ReportModel{
  id? : string;
  reason : string;
  User : User;
  Thread : Thread;
}