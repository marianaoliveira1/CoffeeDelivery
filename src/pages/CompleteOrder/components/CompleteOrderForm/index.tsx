import { MapPinLine } from "phosphor-react";
import { useTheme } from "styled-components";
import { TitleText } from "../../../../components/Typorgrapgy";
import { SectionTitle } from "../SectionTitle";
import { AddresForm } from "./AddresForm";
import { CompleteOrderFormContainer, FormSectionContainer } from "./styles";


export function CompleteOrderForm() {
    const { colors } = useTheme();

    return(
        <CompleteOrderFormContainer>
            <TitleText size="xs" color="subtitle">
                Complete o seu pedido
            </TitleText>

            <FormSectionContainer>
                <SectionTitle
                    title="Endereço de entrega"
                    subtitle="Informe o endereço de onde deseja receber seu pedido"
                    icon={<MapPinLine color={colors["brand-yellow-dark"]} size={22}/>}
                />

                <AddresForm />
            </FormSectionContainer>
        </CompleteOrderFormContainer>
    )
}