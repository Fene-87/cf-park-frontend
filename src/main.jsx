import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createClient } from '@supabase/supabase-js'
import { SessionContextProvider } from '@supabase/auth-helpers-react'

const supabase = createClient(
  "https://dyqfcwqugtfmrmdcwofe.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5cWZjd3F1Z3RmbXJtZGN3b2ZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc5NDU3NDcsImV4cCI6MjA0MzUyMTc0N30.lySfMbY3e_3l6t4gAteKhug6_sp11v9u2rjohSXvkDA"
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SessionContextProvider supabaseClient={supabase}>
      <App />
    </SessionContextProvider>
  </React.StrictMode>,
)
