import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage';
import RPSGame from './pages/RPS';
import TTTGame from './pages/TTT';
import WordleGame from './pages/Wordle';
import ErrorPage from './pages/ErrorPage';
import Navigation from './components/Navigation';
import HangmanGame from './pages/Hangman/Hangman';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigation />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/RPS",
        element: <RPSGame />
      },
      {
        path: "/TTT",
        element: <TTTGame />
      },
      {
        path: "/Wordle",
        element: <WordleGame />
      },
      {
        path: "/Hangman",
        element: <HangmanGame />
      },
    ],
  },
], { basename: import.meta.env.BASE_URL });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
