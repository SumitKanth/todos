import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutess from './components/auth/ProtectedRoutes'

const Home = lazy(() => import("./pages/Home"));
const SignIn = lazy(() => import("./pages/SignIn"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Profile = lazy(() => import("./components/layout/Profile"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

const user = true;

const App = () => {

    return (
        <>

<BrowserRouter>
        
        <Routes>

            <Route element={<ProtectedRoutess user={user}/>}>

                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />

            </Route>


            <Route element={<ProtectedRoutess user={!user} redirect="/" />}>
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />}/>
            </Route>

            <Route path="*" element={<PageNotFound />} />

        </Routes>

    </BrowserRouter>


        </>
    )
    
};

export default App;
