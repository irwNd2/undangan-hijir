import mongoose from 'mongoose';

interface MongooseCache {
  conn: mongoose.Connection | null;
  promise: Promise<typeof mongoose> | null;
}

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

declare global {
    interface GlobalMongoose {
      mongoose?: {
        conn: mongoose.Connection | null;
        promise: Promise<mongoose.Mongoose> | null;
      };
    }
  }

const cached: MongooseCache = (globalThis as GlobalMongoose).mongoose ?? {
    conn: null,
    promise: null
};

if (!((globalThis as GlobalMongoose).mongoose)) {
    (globalThis as GlobalMongoose).mongoose = cached;
}

async function connectDB(): Promise<mongoose.Connection> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts: mongoose.ConnectOptions = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI!, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    const mongooseInstance = await cached.promise;
    cached.conn = mongooseInstance.connection;
    return cached.conn;
  } catch (e) {
    cached.promise = null;
    throw e;
  }
}

export default connectDB;