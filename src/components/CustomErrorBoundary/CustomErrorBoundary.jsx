import { ErrorBoundary } from "react-error-boundary";


//incase if the suspense if failed to render then what ui we need to render
function CustomErrorBoundaryUI({error, resetErrorBoundary}){
    return (
        <div role="alert" className="alert alert-error">
            <h1>Something Went Wrong:</h1>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    )



}

//who will call this ui(customerrorboundaryui) component ?? ans:this customerrorboundary will call


export default function  CustomErrorBoundary({children}){

    return (
        <ErrorBoundary
          FallbackComponent={CustomErrorBoundaryUI}   //fallback component ask the customerrorboundary 
          // what ui u want to show as a fallback..
          //customerrorboundaryui is the component which will be shown as a fallback
          onReset={()=> window.location.reload()} //and what will happen on reset when we will click reseterrorboundary button
          //it is going to call back [ the onReset={()=> window.location.reload()}]
        
        
        >
            
            
            
            {children}


        </ErrorBoundary>
    )

}