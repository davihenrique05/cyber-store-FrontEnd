import styled from "styled-components";

export const CardProfile = styled.div`
    border: 1px solid #edce00;
    width: 48%;
    margin: 5% auto;
    box-sizing: border-box;
    padding: 1%;
    display: flex;
`

export const ContentContainer = styled.article`
    display: flex;
    width: 90%;
    height: unset;
`

export const ProfilePic = styled.img.attrs(props => ({
    src: props.src
}))`
    width: ${props => props.widhtcustom || '380px'};
    height: ${props => props.heightcustom || '380px'};
    clip-path: circle(50% at 50% 50%);
`

export const InfoContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 90%;
    margin-left: 6%;
`

export const User = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-size: 30px;
    color: white;
`

export const Email = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: large;
    color: white;
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 50%;
`
export const LoggoutContainer = styled.div`
    width: 12%;
    height: unset;
`