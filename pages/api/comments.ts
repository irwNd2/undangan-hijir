import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../lib/mongodb';
import Comment, { IComment } from '../../models/Comment';
// import { createAvatar } from '@dicebear/core';
// import { lorelei } from '@dicebear/collection';
import User1 from '@/lib/assets/user-1.jpg'
import User2 from '@/lib/assets/user-2.jpg'
import User3 from '@/lib/assets/user-3.jpg'
import User4 from '@/lib/assets/user-4.jpg'

const userAvatars = [
    User1.src,
    User2.src, 
    User3.src,
    User4.src
  ];

  const getRandomAvatar = () => {
    const randomIndex = Math.floor(Math.random() * userAvatars.length);
    return userAvatars[randomIndex];
  };

type ResponseData = {
  success: boolean;
  data?: IComment | IComment[];
  error?: string;
}

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse<ResponseData>
) {
  const { method } = req;

  await connectDB();

  switch (method) {
    case 'POST':
      try {
        const { name, message } = req.body;

        // Generate a random avatar
        // const avatar = createAvatar(lorelei, {
        //   seed: name + Date.now(), // Unique seed to ensure different avatar each time
        //   backgroundColor: ['b6e3f4', 'd1d4f9', 'ffc1c1'],
        // });
        // const imageDataUrl = avatar.toDataUri();
        const avatar = getRandomAvatar();


        const comment = await Comment.create({
          name,
          message,
          profilePicture: avatar
        });

        res.status(201).json({ success: true, data: comment });
      } catch (error) {
        res.status(400).json({ 
          success: false, 
          error: error instanceof Error ? error.message : 'An unknown error occurred' 
        });
      }
      break;

    case 'GET':
      try {
        // Fetch comments, sorted by most recent first
        const comments = await Comment.find({}).sort({ createdAt: -1 });
        res.status(200).json({ success: true, data: comments });
      } catch (error) {
        res.status(400).json({ 
          success: false, 
          error: error instanceof Error ? error.message : 'An unknown error occurred' 
        });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}