import React from 'react';
import styled from "styled-components";
import photo from "./../../../assets/images/myphoto.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <span>Hi There</span>
                    <Name>I am Alena Martynenko</Name>
                    <MainTitle>A Frontend developer</MainTitle>
                </div>

                <Photo src={photo} alt=""/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
 min-height: 100vh;
    background-color: lightgoldenrodyellow;
`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`
const MainTitle = styled.h1`

`

const Name = styled.h2`

`