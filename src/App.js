import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage, LoginPage, EditorPage } from "./pages"

function App() {
  const { isLogin } = useSelector(state => state.user );

  if(isLogin) {
    return (
      <Routes>
        <Route path="/" element={ <HomePage />} />
        <Route path="/editor" element={ <EditorPage />} />
      </Routes>
    )  
  } else {
    return <LoginPage />
  }
}

export default App;
