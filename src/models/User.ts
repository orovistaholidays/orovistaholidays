import mongoose, { Schema, model, models } from 'mongoose';

export interface IUser {
  _id?: string;
  email: string;
  password: string;
  name: string;
  role: 'admin' | 'user';
  createdAt?: Date;
  updatedAt?: Date;
}

const UserSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: [true, 'Please provide an email.'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please provide a password.'],
    },
    name: {
      type: String,
      required: [true, 'Please provide a name.'],
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'admin',
    },
  },
  {
    timestamps: true,
  }
);

export default models.User || model<IUser>('User', UserSchema);
