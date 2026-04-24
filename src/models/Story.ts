import mongoose, { Schema, model, models } from 'mongoose';

export interface IStory {
  _id?: string;
  quote: string;
  name: string;
  role: string;
  rating: number;
  image: string;
  heading: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const StorySchema = new Schema<IStory>(
  {
    quote: {
      type: String,
      required: [true, 'Please provide a quote.'],
    },
    name: {
      type: String,
      required: [true, 'Please provide a name.'],
    },
    role: {
      type: String,
      required: [true, 'Please provide a role.'],
    },
    rating: {
      type: Number,
      required: [true, 'Please provide a rating.'],
      min: 1,
      max: 5,
    },
    image: {
      type: String,
      required: [true, 'Please provide an image URL.'],
    },
    heading: {
      type: String,
      required: [true, 'Please provide a heading.'],
    },
  },
  {
    timestamps: true,
  }
);

export default models.Story || model<IStory>('Story', StorySchema);
