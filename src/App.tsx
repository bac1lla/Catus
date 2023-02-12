import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {GlobalStyles} from "./styles/GlobalStyles";
import {useContext, useEffect} from "react";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import Auth from "./pages/Auth/Auth";

function App() {

    const {user} = useContext(Context)

    useEffect(() => {
        if (localStorage.getItem("token")) {
            user.checkAuth()
        }
    }, [])

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
