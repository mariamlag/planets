import data from '../data/data.json'
import React, { useState } from 'react';
import styled, {css} from 'styled-components';
import { Link, Route, Routes } from 'react-router-dom';
import Planet from './Planet';


function Header() {
    const [burgerMenu, setBurgerMenu] = useState(false);

return<Headers>
        <Head>
            <Title>
                THE PLANETS
            </Title>
            <BurgerIcon src="/assets/icon-hamburger.svg"
            onClick={ () => setBurgerMenu(!burgerMenu)}/> 
            <PlanetNames>
                {data.map((planet, index) => {
                    return (
                    <Li key={index} color={planet.color} >

                        <Link  to={`/${planet.name}` }>
                                 
                                   {planet.name}    
                        </Link> 
                    </Li>
                    );
                })}
            </PlanetNames>
        </Head>
        {burgerMenu && <BurgerMenu >
                
                {data.map((planet, index) => {
                    return (<Link key={index} to={`/${planet.name}`}>
                                <BurgerDivIn>
                                <BurgerDivInContainer onClick={() => setBurgerMenu(false)}>
                                    <ListsCircle color={planet.color} />
                                    {planet.name}
                                </BurgerDivInContainer>
                            </BurgerDivIn>
                        </Link> 
                    );
                })}
            
            </BurgerMenu>} 
        
                   
    </Headers>
};

export default Header;

const breakpoints = {
    small: '375px',
    medium: '768px',
    large: '1440px',
};
const PlanetNames = styled.ul`

    display: none;
    flex-direction: row;
    gap: 45px;
    font-family: 'Spartan';
    font-size: 11px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 1px;
    text-align: left;
    text-transform: uppercase;
    opacity: 0.75;
    text-decoration: none;

    a{  
        text-decoration: none;
        color: white;
    }

    @media (min-width: ${breakpoints.medium}) {
        display: flex;
        align-items: center;
        min-height: 59px;       
}
`
const Headers = styled.div`
    display: flex;
    flex-direction: column;
    
`
const Li = styled.li <{color: string}>` 
   
    ${(props) => css`
    list-style: none;
    padding-top: 30px;
    text-decoration: none;
    &:hover {
        border-top: 4px solid ${props.color};
    }
    `}  

`
const BurgerMenu = styled.nav `
    width: 100vw;
    padding: 20px;
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: #070724;
    z-index: 1;
    margin-top: 65px;
    text-decoration: none !important;
    a{
        text-decoration: none;
    }
`;
const ListsCircle = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
`;
const BurgerDivIn = styled.div`
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    gap: 5px;
    cursor: pointer;

    font-family: 'Spartan';
    font-size: 15px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 1.3636363744735718px;
    text-align: center;
    color: #FFFFFF;
`;

const BurgerDivInContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 25px;
`
const Head = styled.header`
    padding: 32px 24px;
    min-height: 36px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: ${breakpoints.medium}) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 27px;
        min-height: 50px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);

}
@media (min-width: ${breakpoints.large}) {
    padding-top: 0;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
;   
        
}

`;
const Title = styled.h1`
    font-family: 'Antonio';
    font-size: 28px;
    line-break: 36.23px;
    color: white;
    font-weight: 400;
    letter-spacing: -1.05px;
    @media (min-width: ${breakpoints.large}) {
        padding-top: 20px;
    }
`;
const BurgerIcon = styled.img`
    cursor: pointer;
    @media (min-width: ${breakpoints.medium}) {
        display: none;
}
`