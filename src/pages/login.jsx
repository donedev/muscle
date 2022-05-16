import { useDispatch } from "react-redux"
import { Header } from "../components"
import { LOGIN } from "../redux/user/action"
import "./login.css"

export default function() {
    const dispatch = useDispatch()

    function login() {
        dispatch( { type: LOGIN } )    
    }
    
    return (
        <div className="temp">
            <div className="container">
                <input className="input" type="text" placeholder="아이디를 입력하세요." />
                <input className="input" type="password" placeholder="비밀번호를 입력하세요." />
                <button className="button" type="button" onClick={() => login()}>로그인</button>
            </div>
        </div>
    )
}