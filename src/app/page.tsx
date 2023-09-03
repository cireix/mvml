"use client"

import { HuggingFaceController } from "@/controllers"

// TODO: Add debounce
export default function Home() {
  const handleButton = async () => {
    const res = await HuggingFaceController.queryModel('what is the metaverse?')
    console.log(res);
  }
  return (
    <main>
      <button onClick={() => handleButton()}>Test</button>
    </main>
  )
}