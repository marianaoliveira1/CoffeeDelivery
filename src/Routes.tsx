import { BrowserRouter, Routes, Route } from "react-router-dom"
import { DefaultLayout } from "./layouts/DefaultLayout"
import { CompleteOrderPage } from "./pages/CompleteOrder"
import { HomePage } from "./pages/Home"
import { OrderConfirmedPage } from "./pages/OrderConfirmed"

export function Router() {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <DefaultLayout />}>
                       <Route path="/" element={ <HomePage /> } />
                        <Route path="/completeOrder" element={ <CompleteOrderPage /> } />
                        <Route path="/completeConfirmed" element={ <OrderConfirmedPage /> } /> 
                    </Route>
                    
                </Routes>
            </BrowserRouter>
        </div>
    )
}