import mongoose, { Schema, model, models } from 'mongoose';

export interface IBlog {
  _id?: string;
  title: string;
  category: string;
  description: string;
  content: string;
  image: string;
  isFeatured: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const BlogSchema = new Schema<IBlog>(
  {
    title: {
      type: String,
      required: [true, 'Please provide a title.'],
    },
    category: {
      type: String,
      required: [true, 'Please provide a category.'],
    },
    description: {
      type: String,
      required: [true, 'Please provide a description.'],
    },
    content: {
      type: String,
      required: [true, 'Please provide content.'],
    },
    image: {
      type: String,
      required: [true, 'Please provide an image URL.'],
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

if (models.Blog) {
  delete (mongoose as any).models.Blog;
}

export default models.Blog || model<IBlog>('Blog', BlogSchema);
