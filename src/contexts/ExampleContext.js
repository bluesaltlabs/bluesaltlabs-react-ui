import React, { createContext, useContext, useReducer } from 'react'

// Reducer action type constants
export const INITIAL_LOAD_DONE_EXAMPLE = 'initialLoadDoneExample'

// Initial State
export const exampleInitialState = {
  initialLoadDoneExample: false,
}

// Reducer
export const exampleReducer = (state, action) => {
  switch(action.type) {
    case INITIAL_LOAD_DONE_EXAMPLE:  return { ...state, initialLoadDoneExample: true }
    default: return state
  }
}

// Context
export const ExampleContext = createContext()

// Context Provider
export const ExampleProvider = ({ reducer, initialState, children }) => (
  <ExampleContext.Provider value={ useReducer(reducer, initialState) }>
    {children}
  </ExampleContext.Provider>
)

// State
export const useExampleStateValue = () => useContext(ExampleContext)

export default ExampleContext
