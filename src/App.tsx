import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {GlobalStyles} from "./styles/GlobalStyles";
import {useContext, useEffect} from "react";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import LoginForm from "./components/Auth/LoginForm";
import Auth from "./pages/Auth/Auth";
import projects from "./components/Projects/Projects";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

function App() {

    const {user, projects, tasks, comments, groups} = useContext(Context)

    useEffect(() => {
        if (localStorage.getItem("token")) {
            user.checkAuth()
        }
    }, [])

    //
    // if (user.isLoading()) {
    //     console.log(4)
    //     return <LoadingSpinner loading={user.isLoading()}/>
    // }
    //


    return (

        <BrowserRouter>
            <GlobalStyles/>
            {
                user.isAuth() ?
                    <>
                        <AppRouter/>
                    </>
                    :
                    <Auth/>
            }
        </BrowserRouter>
    );
}

export default observer(App);
