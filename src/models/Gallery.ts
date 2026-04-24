import mongoose from 'mongoose';

const GallerySchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['image', 'video'],
    required: true,
    default: 'image'
  },
  url: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String, // Required for videos
  },
  location: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  span: {
    type: String,
    default: 'md:col-span-1 md:row-span-1',
  },
  order: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

// Avoid model recompilation errors
export default mongoose.models.Gallery || mongoose.model('Gallery', GallerySchema);
