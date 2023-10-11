import React from 'react';
import styled, {css} from 'styled-components';
import { useState } from 'react';
import data from '../data/data.json';
// import { Link, Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Header from './Header';
import { useMediaQuery } from 'usehooks-ts';
import { type } from 'os';


export default function Planet() {
    const [isClicked, setIsClicked] = useState('overview');
    const {planet}=useParams();
    let planetObject = data.find( (currentPlanet) => currentPlanet.name === planet )
    if(planetObject===undefined){
        planetObject=data[2];
       }
     

    const planetOver = ['oberview', 'structure', 'surface'];
    const matches = useMediaQuery('(min-width: 768px)');
    console.log(planetObject.size?.mobile.width)
    return (
    <Body>
     <LineDiv>
      {planetOver.map((section, index) => (
        <LineText
          key={index}
          onClick={() => setIsClicked(section)}
          theme={{ color: planetObject?.color }}>
        
          {matches ? `0${index + 1}` : null} {section.toUpperCase()}

        </LineText>
      ))}
        </LineDiv>
            <ImagesDiv>
                <PlanetImg src={isClicked === 'structure' ? planetObject?.images?.internal : planetObject?.images?.planet} 
                size={planetObject?.size}
         />
                
                {isClicked === 'surface' && (
                    <GeologyImg src={planetObject?.images?.geology}>
                    </GeologyImg>
                )}
    </ImagesDiv>
        <About>
                <h1>
                    {planetObject?.name}
                </h1>
                <p>
                    {isClicked === 'structure' 
                    ? planetObject?.structure?.content
                     : isClicked=== 'surface' 
                     ? planetObject?.geology?.content 
                     : planetObject?.overview?.content }
                </p>
                <div>
                    <p>Source : <a href='https://en.wikipedia.org/wiki/Earth'> Wikipedia</a> </p>
                    <img src="/assets/icon-source.svg" alt="" />                
                </div>
        </About>

        <InfoContainer>
                <InfoContIn> 
                    <p>
                        ROTATION TIME
                    </p>
                    <RightText>
                        {planetObject?.rotation}
                    </RightText>
                </InfoContIn>
                <InfoContIn>
                    <p>
                        REVOLUTION TIME
                    </p>
                    <RightText>
                        {planetObject?.revolution}
                    </RightText>
                </InfoContIn><InfoContIn>
                    <p>
                        RADIUS 
                    </p>
                    <RightText>
                        {planetObject?.radius}
                    </RightText>
                </InfoContIn><InfoContIn>
                    <p>
                        AVERAGE TEMP.
                    </p>
                    <RightText>
                        {planetObject?.temperature}
                    </RightText>
                </InfoContIn>
        </InfoContainer>
    </Body>
  )
}


const breakpoints = {
    small: '375px',
    medium: '768px',
    large: '1440px',
  };
  const ImagesDiv = styled.div`
    height: 173px;
    @media (min-width: ${breakpoints.medium}) {
        height: 280px
    }
    @media (min-width: ${breakpoints.large}) {
        /* height: 700px;
        width: 700px; */
        display: flex;
         justify-content: center;
        align-items: center;
        margin: 200px 0 200px -300px;
    }
    
  `
  const Body = styled.div`
    padding: 20px;
    @media (min-width: ${breakpoints.large}) {
        padding: 25px 165px;
    }
`
const InfoContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;
    gap: 5px;
    /* padding: 20px; */
    @media (min-width: ${breakpoints.medium}) {
        flex-direction: row;
        justify-content: space-between;
        padding: 0;
        margin: 0;
    }
   
    @media (min-width: ${breakpoints.large}) {
       gap: 30px;
       padding-top: 90px;
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
@media (min-width: ${breakpoints.large}) {
        font-size: 40px;
        line-height: 51px;
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
@media (min-width: ${breakpoints.large}) {
    margin-top: 50px;
       font-size: 11px;
        line-height: 25px;
        min-height: 128px;
       padding: 40px;
       min-width: 255px;
    }
    
`

const About = styled.div`
    opacity: 1;
    height: 100%;
    width: fit-content;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 30px auto;
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
        max-width: 339px;
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
    @media (min-width: ${breakpoints.large}) {
        position: absolute;
        top: 185px;
        right: 165px;
        height: fit-content;
        
    & h1 {
        font-size: 80px;
        line-height: 104px;
    }
    & p {
        font-size: 12px;
        line-height: 25px;
    }
    & div {
        float: left;
        margin: 0;
    }
}
`;
const GeologyImg =styled.img`
    position: relative;
    width: 40px;
    height: 50px;
    left: 50%;
    transform: translate(-50%, -75%); 
    @media (min-width: ${breakpoints.medium}) {
        width: 100px;
        height: 120px;
}
  @media (min-width: ${breakpoints.large}) {
    width: 163px;
    height: 199px;
    left: 50%;
    transform: translate(-137%, 110%); 
    position: absolute;
    /* left: 460px; */
    /* transform: translate(-299%, -60%);  */
}
`;

type TPlanetImgProps = {
    size:{
        mobile:{
            width: string,
            height: string
        },
        tab:{
            width: string,
            height: string
        },
        desk:{
            width: string,
            height: string
        }
    } | undefined
}
const PlanetImg = styled.img <TPlanetImgProps>`

    ${(props) => css`
        width: ${ props?.size?.mobile.width}; 
        height: ${props?.size?.mobile.height};
    `
    }
    
    display: flex;
    margin: 40px auto 0;
    @media (min-width: ${breakpoints.medium}) {
        margin: 96px auto 0;

        ${(props) => css`
        width: ${ props?.size?.tab.width}; 
        height: ${props?.size?.tab.height};
    `
    }
}
@media (min-width: ${breakpoints.large}) {
 
   ${(props) => css`
        width: ${ props?.size?.desk.width}; 
        height: ${props?.size?.desk.height};
    `
    }
    /* transform: translate(-90%, 0); */

}
`
const LineText = styled.p`
   cursor: pointer;
   display: flex;
   align-items: center;
   opacity: 0.5;
   margin: 0 5px;
   padding: 8px 20px;
   &:hover{
    border-bottom: 4px solid ${props => props.theme.color};
 
    opacity: 1;
   }
   @media (min-width: ${breakpoints.medium}) {
        border: 1px solid rgba(255, 255, 255, 0.2);
        width: 281px;
        height: 40px;
        &:hover{
        border-bottom: none;
            ;
        background-color: ${props => props.theme.color};
        ;
        }
   }
   @media (min-width: ${breakpoints.large}) {
        height: 48px;
        min-width: 350px;
        min-height: 48px;
    }
   

`
const LineDiv = styled.div`
    display: flex;
    min-height: 54px;
    width: auto;
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
        position: absolute;
        float: right;
        top: 676px;
        right: 20px;
        flex-direction: column;
        border-top: 0;
        border-bottom: 0;
        gap: 14px;
    };
    @media (min-width: ${breakpoints.large}) {
        font-size: 12px;
        line-height: 25px;
        letter-spacing: 2.5714285373687744px;
        gap:20px;
        top: 620px;
        right: 165px;
        margin: 0;
}
`