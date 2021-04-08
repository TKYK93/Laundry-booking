import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { userReducer, UserState } from './userRedux/userReducer'
import { MachineReducer, MachineState } from './machineRedux/machineReducer'
import { BookingReducer, BookingState } from './BookingRedux/bookingReducer'

export type AppState = {
  userState: UserState
  machineState: MachineState
  bookingState: BookingState
}

interface ExtendedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
}
declare let window: ExtendedWindow

const composeReduxDevToolsEnhancers =
  (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export const rootReducer = combineReducers<AppState>({
  userState: userReducer,
  machineState: MachineReducer,
  bookingState: BookingReducer
})

const persistConfig = {
  key: 'laundry-booking',
  storage: storage,
  whitelist: ['userState', 'machineState', 'BookingReducer'],
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export type RootReducer = ReturnType<typeof rootReducer>

const store = createStore(persistedReducer, composeReduxDevToolsEnhancers(applyMiddleware(thunk)))
export const persistor = persistStore(store)

export default store
