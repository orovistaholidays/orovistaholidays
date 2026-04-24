import mongoose, { Schema, model, models } from 'mongoose';

export interface IPackage {
  _id?: string;
  title: string;
  location: string;
  duration: string;
  price: string;
  image: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const PackageSchema = new Schema<IPackage>(
  {
    title: {
      type: String,
      required: [true, 'Please provide a title for this package.'],
      maxlength: [100, 'Title cannot be more than 100 characters'],
    },
    location: {
      type: String,
      required: [true, "Please provide the location."],
    },
    duration: {
      type: String,
      required: [true, "Please provide the duration."],
    },
    price: {
      type: String,
      required: [true, "Please provide the price."],
    },
    image: {
      type: String,
      required: [true, "Please provide an image URL."],
    },
    description: {
      type: String,
      required: [true, "Please provide a description."],
    },
  },
  {
    timestamps: true,
  }
);

export default models.Package || model<IPackage>('Package', PackageSchema);
