import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./contexts/auth";
import { GlobalStyle } from "./GlobalStyle";
import Purcharse from "./pages/Purcharse";
import Subscriptions from "./pages/Subscrptions";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

export default function App() {



    return (
        <AuthContextProvider>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/subscriptions" element={<Subscriptions />} />
                    <Route path="/subscriptions/:planId" element={<Purcharse />} />
                    <Route path='/home' element={<Home />} />
                </Routes>
            </BrowserRouter>
        </AuthContextProvider>



    )
}