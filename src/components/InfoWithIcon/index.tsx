import { ReactNode } from "react";
import { IconContainer, ItemWidthIconContainer } from "./styles";

interface InfoWidthIconProps {
    icon: ReactNode;
    text: string | ReactNode; 
    iconBg: string;

    
}   

export function InfoWidthIcon({icon, text, iconBg}: InfoWidthIconProps) {
    return(
        <ItemWidthIconContainer>
            <IconContainer iconBg={iconBg}>
                {icon}
            </IconContainer>
            {
                typeof text === "string"? <p>{text}</p> : text
            }
        </ItemWidthIconContainer>
    )
}