import { Intro } from "./components/intro";
import { OurCoffees } from "./components/OurCoffes";
import { HomeContainer } from "./styles";

export function HomePage() {
    return(
        <HomeContainer>
            <Intro />
            <OurCoffees />
        </HomeContainer>
    )
}