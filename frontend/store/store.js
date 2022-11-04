import { combineReducers, configureStore } from '@reduxjs/toolkit'
import jwtReducer from '../store/features/jwt/jwt'
import dashboardReducer from '../store/features/dashboard/dashboard'
import organisatorReducer from '../store/features/organisator/organisator'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'


const reducers = combineReducers({
  jwt: jwtReducer,
  dashboard: dashboardReducer,
  organisator: organisatorReducer,
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})

export const persistor = persistStore(store)