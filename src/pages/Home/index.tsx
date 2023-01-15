import { Intro } from "./components/intro";
import { OurCofees } from "./components/OurCoffes";
import { HomeContainer } from "./styles";

export function HomePage() {
    return(
        <HomeContainer>
            <Intro />
            <OurCofees />
        </HomeContainer>
    )
}