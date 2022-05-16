import { LOGIN, LOGOUT } from "./action";
import { initState } from "./state"

export default function userReducer( state = initState , action ) {
    switch( action.type ) {
        case LOGIN:
            return {
                ...state
                , isLogin: true
            }

        case LOGOUT:
            return {
                ...state
                , isLogin: false
            }
        default:
            return state
    }    
}