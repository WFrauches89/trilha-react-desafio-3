import styled from "styled-components";

export const Container = styled.main`
    width: 100%;

    max-width: 80%;

    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Wrapper = styled.div`
    max-width: 300px;
`

export const Column = styled.div`
    flex: 1;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`



export const Title = styled.h2`

    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #FFFFFF;
`

export const TitleLogin = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 44px;
`

export const SubtitleLogin = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    margin-bottom: 16px;
    line-height: 25px;
`

export const InfoText = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    margin-top: 25px;
    margin-bottom: 10px;
    line-height: 25px;
`

export const InfoText2 = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 10px;
    line-height: 20px;
`
export const InfoText2Span = styled.span`
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 10px;
    line-height: 20px;
    color: rgba(35, 221, 122, 1);

    &:hover {
        opacity: 0.6;
        cursor: pointer;
    }
`


