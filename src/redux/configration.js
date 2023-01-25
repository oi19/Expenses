import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import SearchScreenReducer from '../redux/reducers/SearchScreenReducer';
import MovieScreenReducer from './reducers/MovieScreenReducer';
import FollowOrderScreenReducer from './reducers/FollowScreenReducer';
import HomeScreenReducer from './reducers/HomeScreenReducer';
import UsernameScreenReducer from './reducers/UsernameScreenReducer';


// every reducers in the project
const reducers = combineReducers({
    SearchScreen: SearchScreenReducer,
    MovieScreen: MovieScreenReducer,
    FollowOrderScreen: FollowOrderScreenReducer,
    HomeScreen: HomeScreenReducer,
    UsernameScreen: UsernameScreenReducer
})

// middleware thunk => helps to handle  asynchronous actions as redux is only familiar
//with synchronous functions   
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))





export { store }