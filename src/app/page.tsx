"use client"

import HuggingFaceController from "../controllers/huggingFace"

// TODO: Add debounce
export default function Home() {
  const handleButton = async () => {
    const res = await HuggingFaceController.chat(['what is the metaverse?', 'who are you?'])
    console.log(res);
  }
  return (
    <main>
      <button onClick={() => handleButton()}>Test</button>
    </main>
  )
}