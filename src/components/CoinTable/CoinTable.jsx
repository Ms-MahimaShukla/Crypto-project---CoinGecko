import { useEffect } from "react";
import { fetchCoinData } from "../../services/fetchCoinData";

function CoinTable(){
    

    useEffect(()=>{
        fetchCoinData();
    },[]);
       
    return (
        <>
        Coin Table
        </>
    )
}

export default CoinTable;
