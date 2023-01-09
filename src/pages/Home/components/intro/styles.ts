import styled from "styled-components";

import IntroBackgroundImg from '../../../../assets/intro-background.png'
import { rgba } from 'polished'
import { TitleText } from "../../../../components/Typorgrapgy";

export const IntroContainer = styled.section`
    width: 100%;
    height: 34rem;
    background: ${({ theme }) => `url(${IntroBackgroundImg}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors["base-white"]} 0%,
        ${rgba(theme.colors["base-background"], 0.2)} 50%,
        ${theme.colors["base-background"]} 100%
      )`};
    background-size: cover;
`;

export const IntroContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const IntroTitle = styled(TitleText)`
  margin-bottom: 1rem;
`;