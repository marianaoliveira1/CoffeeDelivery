import { BenefitsContainer, IntroContainer, IntroContent, IntroTitle } from "./styles";

import LogoCoffe from '../../../../assets/intro-img.png'
import { RegularText } from "../../../../components/Typorgrapgy";

export function Intro() {
    return(
        <IntroContainer>
            <IntroContent className="container">
                <div>
                    <section>
                        <IntroTitle size="xl">
                            Encontre o café perfeito
                            para qualquer hora do dia
                        </IntroTitle>
                        <RegularText size="l" color="subtitle" as="h3">
                            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                        </RegularText>
                    </section>
                    <BenefitsContainer>
                        <p>Beneficio</p>
                    </BenefitsContainer>
                </div>
                <img src={LogoCoffe} alt="cafe logo" />
            </IntroContent>
        </IntroContainer>
    )
}