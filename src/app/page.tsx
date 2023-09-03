"use client"

import useChatBot from "./hooks/useChatBot";
import { Main } from "./styles/styles";

export default function Home() {
  const { history, submitting, handleSubmit } = useChatBot();
  return (
    <Main>
      {history.map((response, index) => (
        <p key={index}>{response.text}</p>
      ))}
      <form onSubmit={handleSubmit}>
        <input name="query" />
        <button type="submit">Test</button>
      </form>
    </Main>
  )
}