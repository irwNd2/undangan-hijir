import mongoose from 'mongoose';

export interface IComment extends mongoose.Document {
  name: string;
  message: string;
  profilePicture: string;
  createdAt: Date;
}

const CommentSchema = new mongoose.Schema<IComment>({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: [50, 'Name cannot be more than 50 characters']
  },
  message: {
    type: String,
    required: true,
    trim: true,
    maxlength: [500, 'Message cannot be more than 500 characters']
  },
  profilePicture: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.Comment || mongoose.model<IComment>('Comment', CommentSchema);