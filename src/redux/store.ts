import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { userReducer, UserState } from './userRedux/userReducer'

export type AppState = {
  userState: UserState
}

interface ExtendedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
}
declare let window: ExtendedWindow

const composeReduxDevToolsEnhancers =
  (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export const rootReducer = combineReducers<AppState>({
  userState: userReducer,
})

const persistConfig = {
  key: 'laundry-booking',
  storage: storage,
  whitelist: ['userState'],
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export type RootReducer = ReturnType<typeof rootReducer>

const store = createStore(persistedReducer, composeReduxDevToolsEnhancers(applyMiddleware(thunk)))
export const persistor = persistStore(store)

export default store
