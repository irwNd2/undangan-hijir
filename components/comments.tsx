'use client'

import Image from "next/image"
import { Button } from "./ui/button"
import { IComment } from "@/models/Comment"
import { FormEvent, useEffect, useState } from "react"

function CommentSection() {
    const [name, setName] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        fetchComments();
      }, []);
    
      const fetchComments = async () => {
        try {
          const response = await fetch('/api/comments');
          const result = await response.json();
          if (result.success) {
            setComments(result.data);
          }
        } catch (error) {
          console.error('Failed to fetch comments', error);
        }
      };
    
      const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        try {
          const response = await fetch('/api/comments', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, message }),
          });
    
          const result = await response.json();
    
          if (result.success) {
            // Clear form and refresh comments
            setName('');
            setMessage('');
            fetchComments();
          }
        } catch (error) {
          console.error('Failed to submit comment', error);
        }
      };

      function formatRelativeTime(date: Date | string): string {
        const inputDate = new Date(date);
        const now = new Date();
        const diffInMilliseconds = now.getTime() - inputDate.getTime();
        
        // Convert difference to minutes, hours, days
        const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));
        const diffInHours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
        // const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
      
        // Less than 1 hour ago
        if (diffInMinutes < 60) {
          return `${diffInMinutes} menit yang lalu`;
        }
      
        // Less than 24 hours ago
        if (diffInHours < 24) {
          return `${diffInHours} jam yang lalu`;
        }
      
        // Check if it's yesterday
        const yesterday = new Date(now);
        yesterday.setDate(now.getDate() - 1);
        if (
          inputDate.getDate() === yesterday.getDate() &&
          inputDate.getMonth() === yesterday.getMonth() &&
          inputDate.getFullYear() === yesterday.getFullYear()
        ) {
          // Format time for yesterday
          return `Kemaren, ${inputDate.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}`;
        }
      
        // For older dates, use standard date formatting
        return inputDate.toLocaleDateString([], {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        });
      }

  return (
    <>
        <div className='flex flex-col max-w-[400px] w-full mt-4 gap-3'>
            <h2 className='font-bold text-lg'>Wish for the couple</h2>

            <div className='overflow-auto w-full max-h-[350px] flex flex-col gap-4 pr-2'>
                {
                    comments.map((comment, idx) => (
                        <div className='flex gap-3' key={idx}>
                            <Image 
                                src={comment.profilePicture} 
                                alt={`${comment.name} avatar`}
                                height={30} 
                                width={30} 
                                className="hover:cursor-pointer rounded-md h-[30px]"
                            />

                            <div className='flex flex-col gap-2 w-full'>
                                <div className="flex justify-between w-full">
                                    <p className='font-bold'>{comment.name}</p>
                                    <p className="text-xs">{formatRelativeTime(comment.createdAt)}</p>
                                </div>
                                <p className='text-sm text-gray-500'>{comment.message}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className='flex flex-col max-w-[400px] w-full mt-4 gap-3 mb-10'>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                <label htmlFor="name">Nama</label>
                <input type='text' className='h-8 rounded px-2 text-black' id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                <label htmlFor="message">Pesan</label>
                <textarea id="message" name="message" className='h-24 rounded px-2 text-black' rows={4} cols={10} value={message} onChange={(e) => setMessage(e.target.value)}/>
                <Button type="submit">Submit</Button>
            </form>
            <div className='flex flex-col items-center'>
                <p>{`Thank you for checking up all the things up there!`}</p>
                <p className='-mt-1'>{`Can’t wait to see u again! <3`}</p>
                <p className='mt-4 text-[9px] text-gray-400'>E-invitation made by Irwan with ♥</p>
            </div>
        </div>
    </>

  )
}

export default CommentSection