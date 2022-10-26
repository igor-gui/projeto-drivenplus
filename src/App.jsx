import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./contexts/auth";
import { GlobalStyle } from "./GlobalStyle";
import DrivenPlus from "./pages/DrivenPlus";
import Subscriptions from "./pages/Subscrptions";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

export default function App() {



    return (
        <AuthContextProvider>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/subscriptions" element={<Subscriptions />} />
                    <Route path="/subscriptions/plus" element={<DrivenPlus />} />
                </Routes>
            </BrowserRouter>
        </AuthContextProvider>



    )
}