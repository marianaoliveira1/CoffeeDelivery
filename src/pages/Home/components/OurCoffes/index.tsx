import { TitleText } from "../../../../components/Typorgrapgy";
import { OurCoffesContainer } from "./styles";

export function OurCofees() {
    return(
        <OurCoffesContainer className="container">
            <TitleText size="l" color="subtitle">
                Nossos Cafés
            </TitleText>
        </OurCoffesContainer>
    );
}