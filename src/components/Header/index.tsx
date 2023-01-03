import LogoImg from '../../assets/coffee-delivery-logo.svg'
import { HeaderButton, HeaderButtonContainer, HeaderContainer } from './styles'

import {MapPin, ShoppingCart} from 'phosphor-react'

export function Header() {
    return (
        <HeaderContainer>
            <div className='container'>
                <img src={LogoImg} alt="logo" />

                <HeaderButtonContainer>
                    <HeaderButton variant='purple'>
                        <MapPin size={20} width="fill" />
                        Quixeramobim, CE
                    </HeaderButton>
                    <HeaderButton variant='yellow'>
                    <ShoppingCart size={20} width="fill" />
                    </HeaderButton>
                </HeaderButtonContainer>
            </div>
        </HeaderContainer>
            
    )
}