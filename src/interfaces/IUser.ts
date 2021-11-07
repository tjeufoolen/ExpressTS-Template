import mongoose from "mongoose";

export interface IUser {
    email: string;
}

export interface IUserDocument extends mongoose.Document {
    email: string;
}

export interface IUserModel extends mongoose.Model<IUserDocument> {
    build(obj: IUser): any;
}
