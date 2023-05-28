import React from 'react'

import { ContentFocus, ProfileOwnedByMe, useCreatePost,  } from '@lens-protocol/react-web';

export function Composer({ publisher }: { publisher: ProfileOwnedByMe }) {


const { execute: create, error, isPending } = useCreatePost({  publisher, upload: uploadJson });

// Upload function
async function uploadJson(data: unknown) {
  try {
    const response = await fetch('/api/upload', {
      method: 'POST',
      body: JSON.stringify(data), 
    })
    const json = await response.json()
    return json.url
  } catch(err) {
    console.log({ err })
  }
}

// create post function
async function createPost() {
  await create({
    content: "Hello World",
    contentFocus: ContentFocus.TEXT,
    locale: 'en',
  })
}



  return (
    <div>
      <button onClick={createPost}>Create Post</button>
    </div>
  )
}

