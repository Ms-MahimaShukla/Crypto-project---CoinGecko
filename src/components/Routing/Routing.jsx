import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import CoinDetailsPage from "../../pages/CoinDetailsPage";
import MainLayout from "../../pages/Layout";

function Routing(){


    return(
    <Routes>
            <Route path="/" element={<MainLayout />}>
            {/* whenever we click the home component that is on using / it will be rendering main layout and 
            in main layout where our outlet is and outlet is replaced by home component. */}
                <Route index element={<Home/>}/>            
                <Route path="/details/:coinId" element={<CoinDetailsPage />}/>
            </Route>


    </Routes>



    )
}

export default Routing;