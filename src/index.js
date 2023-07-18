import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './Component/App';
import Login from './Component/Login';
import Layout from './Component/Layout';
import SignUp from './Component/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/index.css'
import ErrorNotFound from './Component/ErrorNotFound';

const Index = ()=> {
    return (
        <div className='main'>
            <BrowserRouter>
                <Routes>
                    <Route path='*' element={<ErrorNotFound/>} />
                    <Route path="/" element={<Layout />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/signup" element={<SignUp />}/>
                    <Route path="/app" element={<App />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Index;

ReactDOM.render(<Index/>,document.getElementById('root'));