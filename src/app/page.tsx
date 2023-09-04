"use client"

import Chatbox from "./components/Chatbox/Chatbox";
import { Main } from "./styles";

export default function Home() {
  return (
    <Main>
      {/* {history.map((response, index) => (
        <p key={index}>{response.text}</p>
      ))}
      <form onSubmit={handleSubmit}>
        <input name="query" />
        <button type="submit">Test</button>
      </form> */}
      <Chatbox />
    </Main>
  )
}