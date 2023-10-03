import data from '../data/data.json'
import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import css from 'styled-components';
// import { Link, Route } from 'react-router-dom';
import Planet from './Planet';

function Header() {
    const [burgerMenu, setBurgerMenu] = useState(false);
    // const planets = [{planet:'MERCURY', color:'rgba(222, 244, 252, 1)'}, {planet:'VENUS', color:'rgba(247, 204, 127, 1)'},
    //             {planet:'EARTH', color:'rgba(84, 91, 254, 1)'}, {planet:'MARS', color:'rgba(255, 106, 69, 1)'}, {planet:'JUPITER', color: 'rgba(236, 173, 122, 1)' }, {planet: 'SATURN', color: 'rgba(252, 203, 107, 1)'},{planet: 'URANUS', color:'rgba(101, 240, 213, 1)'}, {planet: 'NEPTUNE', color: 'rgba(73, 126, 250, 1)'}];


    return<>
     <Head>
            <Title>
                THE PLANETS
            </Title>
            <BurgerIcon src="/assets/icon-hamburger.svg"
            onClick={ () => setBurgerMenu(!burgerMenu)}
            /> 
        </Head>
            <BurgerMenu>
                <BurgerDiv> 
                    {data.map((planet, index) => {
                        return (<Link key={index} to={`/${planet.name}`}>
                                    <BurgerDivIn>
                                    <BurgerDivInContainer>
                                        <ListsCircle color={planet.color} />
                                        {planet.name}
                                     </BurgerDivInContainer>
                                </BurgerDivIn>
                            </Link> 
                        );
                    })}
                 </BurgerDiv>
            </BurgerMenu>
            <main>
                    <Route>
                        {data.map((planet, index) => {
                            return <Route  key={index} element={ <Planet/>} path={`/${planet.name}`  }></Route>
                        })}
                    </Route>

            </main>
                    {/* // <BurgerDivIn key={index}> 
                    //     <BurgerDivInContainer>
                    //         <ListsCircle color={planet.color} />
                    //         {planet.name}
                    //     </BurgerDivInContainer>

                    //     <img src="/assets/icon-chevron.svg" alt="" />

                    // </BurgerDivIn>)}};

                // </BurgerDiv> */}
             {/* )} */}
    </>
};

export default Header;

const BurgerMenu = styled.nav `

`

const ListsCircle = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
`
const BurgerDiv = styled.div`
    width: 100vw;
    padding: 20px;
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: #070724;
    z-index: 1;
`
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


`
const breakpoints = {
    small: '375px',
    medium: '768px',
    large: '1440px',
  };
const BurgerDivInContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 25px;
`

const Head = styled.header`
    padding: 32px 24px;
    height: 36px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: ${breakpoints.medium}) {
        flex-direction: column;
        padding: 42px;
        height: 50px;
        gap: 40px;
}
`;
const Title = styled.h1`
    font-family: 'Antonio';
    font-size: 28px;
    line-break: 36.23px;
    color: white;
    font-weight: 400;
    letter-spacing: -1.05px;
  
`;
const BurgerIcon = styled.img`
    cursor: pointer;

`