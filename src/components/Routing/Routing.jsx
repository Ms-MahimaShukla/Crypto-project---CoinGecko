import { Route, Routes } from "react-router-dom";

import { lazy, Suspense } from "react";
import MainLayout from "../../pages/Layout";
import PageLoader from "../PageLoader/PageLoader";
import CustomErrorBoundary from "../CustomErrorBoundary/CustomErrorBoundary";



const Home = lazy(() => import('../../pages/Home'));
const CoinDetailsPage = lazy(() => import ('../../pages/CoinDetailsPage'));

function Routing(){


    return(
        <CustomErrorBoundary>
            {/* children prop */}
            <Routes>                  
            <Route path="/" element={<MainLayout />}>
            {/* whenever we click the home component that is on using / it will be rendering main layout and 
            in main layout where our outlet is and outlet is replaced by home component. */}
                <Route index element={
                    <Suspense fallback={<PageLoader/>}>
                        <Home/>
                    </Suspense>
                    
                }/> 

                <Route path="/details/:coinId" element={
                    <Suspense fallback={<PageLoader/>}>
                        <CoinDetailsPage/>          
                    </Suspense>
                } />
                    
            </Route>
            </Routes>
            {/* children prop */}
        </CustomErrorBoundary>    
    



    )
}

export default Routing;