import { ObjectId } from "mongodb";
import { Entity, Column, ObjectIdColumn } from "typeorm";

@Entity()
export class User {
  @ObjectIdColumn()
  id!: ObjectId;

  @Column()
  Post?: {};

  @Column()
  name?: string;

  @Column()
  email!: string;

  @Column()
  bookmarks?: {};

  @Column()
  password?: string;

  @Column()
  verified?: boolean;

  @Column()
  notifications?: {};

  @Column()
  profilePic?: string;
}