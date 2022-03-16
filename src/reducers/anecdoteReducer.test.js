import deepFreeze from "deep-freeze";
import reducer from "./anecdoteReducer";
import {initialState} from "./anecdoteReducer";

describe("reducer",() =>{
  test("returns inital state if no action matchs a case", () => {
    
    const action = {
      type:"do nothing"
    }
    deepFreeze(initialState)
  
    const newState = reducer(initialState,action)

    expect(newState).toEqual(initialState)
  })
  test('Increments votes', () => {

    const id = initialState[0].id
    const action = {
      type:"Vote",
      data: {
        id:id
      }
    }

    deepFreeze(initialState)

    const newState = reducer(initialState,action)
    
    const anecdote = newState.find(anecdote => anecdote.id === id? true:false)
    const newStateWithoutanecdote = newState.filter(anecdote => anecdote.id === id?false:true)
    const initialStateWithoutanecdote = newState.filter(anecdote => anecdote.id === id?false:true)

    expect(anecdote.votes).toBe(1)
    expect(newStateWithoutanecdote).toEqual(initialStateWithoutanecdote)
    
  })
  test('Add anecdote', () => {
    const action = {
      type:"Add",
      data:{
        anecdote:"new anecdote"
      }
    }
    deepFreeze(initialState)

    const newState = reducer(initialState,action)
    const addedAnecdote =newState.find(anecdote => anecdote.content === "new anecdote"?true:false)

    expect(addedAnecdote).toBeDefined()
  })
})