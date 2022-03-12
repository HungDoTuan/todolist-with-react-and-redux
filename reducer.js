import clickReducer from './../reducers/clickReducer'
import {combineReducers} from 'redux'
import { persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key:'root',
    storage,
    whiteList: ['clickReducer']
}


const myReducers = combineReducers({
    clickReducer,
})
export default persistReducer(persistConfig, myReducers)