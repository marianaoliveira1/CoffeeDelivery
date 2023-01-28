import { TitleText } from "../../../components/Typorgrapgy";
import { CompleteOrderFormContainer } from "./styles";

export function CompleteOrderForm() {
    return(
        <CompleteOrderFormContainer>
            <TitleText size="xs" color="subtitle">
                Complete o seu pedido
            </TitleText>
        </CompleteOrderFormContainer>
    )
}