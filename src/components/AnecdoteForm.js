import { useDispatch } from "react-redux"
import { useState } from "react"

const AnecdoteForm = (props) => {
  const [anecdote,setAnecdote] = useState('')
  const dispatch = useDispatch()

  const handleAnecdoteChange = (event) =>{
    setAnecdote(event.target.value)
  }
  const addAnecdote = (event) => {
    event.preventDefault()
    dispatch({
      type:'Add',
      data:{
        anecdote:anecdote
      }
    })
    setAnecdote('')
  }

  return(
    <>
    <h2>create new</h2>
    <form onSubmit={addAnecdote}>
      <div><input name='anecdote' onChange={handleAnecdoteChange} value = {anecdote}/></div>
      <button type='submit'>create</button>
    </form>
    </>
  )
}

export default AnecdoteForm