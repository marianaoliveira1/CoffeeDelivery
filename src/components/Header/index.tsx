import LogoImg from '../../assets/coffee-delivery-logo.svg'
import { HeaderButton, HeaderButtonContainer, HeaderContainer } from './styles'

import {MapPin, ShoppingCart} from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
    return (
        <HeaderContainer>
            <div className='container'>
                <NavLink to="/">
                    <img src={LogoImg} alt="logo" />
                </NavLink>
                
                <HeaderButtonContainer>
                    <HeaderButton variant='purple'>
                        <MapPin size={20} width="fill" />
                        Quixeramobim, CE
                    </HeaderButton>
                    
                    <NavLink to="/completeOrder">
                        <HeaderButton variant='yellow'>
                            <ShoppingCart size={20} width="fill" />
                        </HeaderButton>
                    </NavLink>
                    
                </HeaderButtonContainer>
            </div>
        </HeaderContainer>
            
    )
}