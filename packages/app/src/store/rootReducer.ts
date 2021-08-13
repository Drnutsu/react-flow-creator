import { combineReducers } from 'redux'

import todoReducer from './todo/reducer'
import { form } from 'react-flow-core'

const rootReducer = combineReducers({
  form: form.reducer,
  todo: todoReducer
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
