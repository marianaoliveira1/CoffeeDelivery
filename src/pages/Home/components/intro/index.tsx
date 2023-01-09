import { IntroContainer, IntroContent } from "./styles";

import LogoCoffe from '../../../../assets/intro-img.png'

export function Intro() {
    return(
        <IntroContainer>
            <IntroContent className="container">
                <div>
                    <section>
                        
                    </section>
                    <h1>Encontre o café perfeito <br />para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, <br /> a qualquer hora </p>
                </div>
                <img src={LogoCoffe} alt="cafe logo" />
            </IntroContent>
        </IntroContainer>
    )
}