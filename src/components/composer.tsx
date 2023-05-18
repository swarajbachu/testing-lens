import { ContentFocus, ProfileOwnedByMe, useCreatePost } from '@lens-protocol/react-web';
import { useState } from 'react';


 const uploadJson = (data: unknown): Promise<string> => {
    return new Promise((resolve, reject) => {
      const serialized = JSON.stringify(data);
    
      const url = URL.createObjectURL(new Blob([serialized], { type: 'application/json' }));
    
      resolve(url);
    });
  };
  

  export function Composer({ publisher }: { publisher: ProfileOwnedByMe }) {
    const { execute: create, error, isPending } = useCreatePost({ publisher, upload: uploadJson });
    const [content, setContent] = useState('');
  
    const onSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      
      await create({
        content,
        contentFocus: ContentFocus.TEXT,
        locale: 'en',
      });
  
      // Clear the content after submission
      setContent('');
    };
  
    return (
      <form onSubmit={onSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter your post content"
        ></textarea>
  
        <button type="submit" disabled={isPending}>
          {isPending ? 'Creating...' : 'Create Post'}
        </button>
  
        {error && <p>Error: {error.message}</p>}
      </form>
    );
  }