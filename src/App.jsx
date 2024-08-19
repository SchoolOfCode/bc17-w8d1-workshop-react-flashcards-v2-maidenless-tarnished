import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const flashes = [
                  {
                    question: "How do you get to Hell? 😈",
                    answer: "Jump down this hole, mate. 🕳️"
                  },
                  {
                    question: "How do you get to Hell? 😈",
                    answer: "Jump down this hole, mate. 🕳️"
                  },
                  {
                    question: "How do you get to Hell? 😈",
                    answer: "Jump down this hole, mate. 🕳️"
                  }
                ]

function App() {
  return (
    <>
      <header>
        <h1>Flashcard App</h1>
      </header>
      <main>
        <section>
          <form></form>
        </section>
        <section>
          {flashes.map((flashcard) => (
            <>
              <div>{flashcard.question}</div>
              <div>{flashcard.answer}</div>
            </>
          ))}
        </section>
      </main>
      <footer>
        <h6>Built With React</h6>
      </footer>
    </>
  )
}

export default App
