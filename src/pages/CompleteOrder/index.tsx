import { CompleteOrderForm } from "./components";
import { CompleteOrderContainer } from "./styles";

export function CompleteOrderPage() {
    return(
        <CompleteOrderContainer className="container">
            <CompleteOrderForm />
        </CompleteOrderContainer>
    )
}