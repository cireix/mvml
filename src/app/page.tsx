"use client"

import useChatBot from "./hooks/useChatBot";

export default function Home() {
  const { history, submitting, handleSubmit } = useChatBot();
  return (
    <main>
      {history.map((response, index) => (
        <p key={index}>{response.text}</p>
      ))}
      <form onSubmit={handleSubmit}>
        <input name="query" />
        <button type="submit">Test</button>
      </form>
    </main>
  )
}