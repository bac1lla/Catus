import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {GlobalStyles} from "./styles/GlobalStyles";

function App() {

    return (
        <BrowserRouter>
            <GlobalStyles/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
