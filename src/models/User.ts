import mongoose from "mongoose";
import { IUser, IUserDocument, IUserModel } from "../interfaces/IUser";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
});

userSchema.statics.build = (obj: IUser) => {
    return new User(obj);
};

const User = mongoose.model<IUserDocument, IUserModel>("User", userSchema);

export { User };
