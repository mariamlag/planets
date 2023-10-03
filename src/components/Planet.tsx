import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import data from '../data/data.json';
// import { Link, Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import css from 'styled-components';
// import Header from './Header';


export default function Planet() {
    const [isClicked, setIsClicked] = useState('overview');
    const [burgerMenu, setBurgerMenu] = useState(false);

    const planets = [{planet:'MERCURY', color:'rgba(222, 244, 252, 1)'}, {planet:'VENUS', color:'rgba(247, 204, 127, 1)'},
                {planet:'EARTH', color:'rgba(84, 91, 254, 1)'}, {planet:'MARS', color:'rgba(255, 106, 69, 1)'}, {planet:'JUPITER', color: 'rgba(236, 173, 122, 1)' }, {planet: 'SATURN', color: 'rgba(252, 203, 107, 1)'},{planet: 'URANUS', color:'rgba(101, 240, 213, 1)'}, {planet: 'NEPTUNE', color: 'rgba(73, 126, 250, 1)'}];
   
 
  return (
    <Background>
        <Header>
            <Title>
                THE PLANETS
            </Title>
            <BurgerIcon src="/assets/icon-hamburger.svg"
            onClick={ () => setBurgerMenu(!burgerMenu)}
            /> 
        </Header>

            {burgerMenu && (
                <BurgerDiv> 
                    {planets.map((planet, index) => 
                    <BurgerDivIn key={index}> 
                        <BurgerDivInContainer>
                            <ListsCircle color={planet.color} />
                            {planet.planet}
                        </BurgerDivInContainer>

                        <img src="/assets/icon-chevron.svg" alt="" />

                    </BurgerDivIn>)};

                </BurgerDiv>
            )}
        

    
        <LineDiv>
            <LineText onClick={ () => setIsClicked('overview')}>OVERVIEW</LineText>
            <LineText onClick={ () => setIsClicked('structure')}>STRUCTURE</LineText>
            <LineText onClick={ () => setIsClicked('surface')}> SURFACE</LineText>
        </LineDiv>

        <PlanetImg src={isClicked === 'structure' ? '/assets/planet-neptune-internal.svg': '/assets/planet-neptune.svg'}/>
            {isClicked === 'surface' && (
        <GeologyImg src="/assets/geology-neptune.png" />
        )}
        <About>
                <h1>
                    NEPTUNE
                </h1>
                <p>
                    {isClicked === 'structure' ? 'Neptunes internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.' : isClicked=== 'surface' ? 'Neptunes atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.' : 'Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.'}
                </p>
                <div>
                    <p>Source : <a href="ss"> Wikipedia</a> </p>
                    <img src="/assets/icon-source.svg" alt="" />                
                </div>
            </About>

            <InfoContainer>
                <InfoContIn>
                    <p>
                        ROTATION TIME
                    </p>
                    <RightText>
                    16.08 hours
                    </RightText>
                </InfoContIn>
                <InfoContIn>
                    <p>
                        REVOLUTION TIME
                    </p>
                    <RightText>
                    164.79 years
                    </RightText>
                </InfoContIn><InfoContIn>
                    <p>
                        RADIUS
                        
                    </p>
                    <RightText>
                    24,622 km
                    </RightText>
                </InfoContIn><InfoContIn>
                    <p>
                        AVERAGE TEMP.
                    </p>
                    <RightText>
                    -201°c
                    </RightText>
                </InfoContIn>
            </InfoContainer>

    
    </Background>
  )
}
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

const BurgerIcon = styled.img`
    cursor: pointer;

`
const InfoContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin: 70px auto;
    gap: 5px;
    padding: 20px;
    @media (min-width: ${breakpoints.medium}) {
        flex-direction: row;
        justify-content: space-between;
        padding: 0;
        margin: 0;
    }
   
`
const RightText = styled.p`
    font-family: 'Antonio';
    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: -0.75px;
    text-align: right;
    color: white;
    opacity: 1;
    @media (min-width: ${breakpoints.medium}) {
        font-size: 24px;
        line-height: 31px;
}

`
const InfoContIn = styled.div`
    height: 48px;
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.2);
    font-family: 'Spartan';
    color: rgba(255, 255, 255, 0.5);
    font-size: 8px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0.7272727489471436px;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (min-width: ${breakpoints.medium}) {
        flex-direction: column;
        align-items: start;
        justify-content: center;
        gap: 10px;
       width: 164px;
       height: 88px;
       padding: 20px;
}
    
`
const About = styled.div`
    
    opacity: 1;
    height: 100%;
    width: 327px;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0 auto;
    gap: 20px;
    & h1 {
        margin-top: 40px;
        font-family: 'Antonio';
        font-size: 40px;
        font-weight: 400;
        line-height: 52px;
        text-align: center;
        color: white;
    }
    & p {
        font-family: 'Spartan';
        font-weight: 400;
        font-size: 11px;
        line-height: 22px;
        align-items: center;
        color: white;
    }
    & div {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 0 auto;
        gap: 0.9px;
        opacity: 0.5;
        & p {
            font-family: 'Spartan';
            font-size: 12px;
            font-weight: 400;
            line-height: 25px;
            letter-spacing: 0px;
            text-align: left;
            & a {
                font-weight: 700;
                color: white;
            }
        }
        & img {
            width: 12px;
            height: 12px;
            text-align: right;
        }
    }
    @media (min-width: ${breakpoints.medium}) {
        width: 339px;
        text-align: left;
        float: left;
        gap: 30px;
        padding: 0;
        padding-bottom: 40px;
    & h1 {
        font-size: 48px;
        font-weight: 400;
        line-height: 62px;
        text-align: left;
    }
    & div {
        float: left;
        margin: 0;
    }
}
`;
const GeologyImg =styled.img`
    width: 40px;
    height: 50px;
    display: block;
    margin: -25px auto;
`;
const PlanetImg = styled.img`
    width: 173px;
    height: 173px;
    display: block;
    margin: 55px auto 0;
    @media (min-width: ${breakpoints.medium}) {
        width: 285px;
    height: 285px;
}
`
const LineText = styled.p`
   cursor: pointer;
   opacity: 0.5;
   padding: 20px;
   margin: 0 5px;
   &:hover{
    border-bottom: 4px solid #2D68F0;
 ;
    opacity: 1;
   }
   @media (min-width: ${breakpoints.medium}) {
    border: 1px solid rgba(255, 255, 255, 0.2);
    width: 281px;
        height: 40px;
   }
`
const LineDiv = styled.div`
    display: flex;
    min-height: 54px;
    justify-content: space-between;
    align-items: center;
    font-family: 'Spartan';
    font-weight: 700;
    line-height: 10.08px;
    letter-spacing: 1.93px;
    font-size: 9px;
    color: white;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    @media (min-width: ${breakpoints.medium}) {
        flex-direction: column;
        border-top: 0;
        border-bottom: 0;
        gap: 14px;
        float: right;
        margin-top: 450px;
    };
`
const Background = styled.div`
    background-color: #070724;
    width: 100vw;
    min-height: 100vh;
    background-image: url('/assets/background-stars.svg');
    background-repeat: no-repeat;
    padding-bottom: 20px;
    @media (min-width: ${breakpoints.medium}) {
        padding: 25px;
    }
    `;
const Header = styled.header`
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


