import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 380px;
  height: 800px;
  border-radius: 32px;
  border: 1px solid black;
  overflow: hidden; //Tirar isso aqui depois
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 64px 24px 12px;
  /* padding-top: 44px; */
  height: fit-content;
  width: 100%;
  border-radius: 12px 12px 0px 0px;
`;

export const Icon = styled.img`
  width: 32px;
  padding: 4px;
  cursor: pointer;
  border-radius: 12px;
  transition: 0.5s ease;
  :hover {
    background-color: #bbb;
  }
`;

export const Title = styled.h1`
padding: 0px 24px;
width: 100%;
`

export const PokemonDiv = styled.div `
background-color: aqua;
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 12px;
height: 100%;
width: 100%;
padding: 24px;
`

export const Card = styled.div`
width: 45%;
height: 104px;
padding: 12px;
background-color: green;
border-radius: 12px;
>p {
  font-weight: bolder;
  color: #fff;
}
img {
  width: 64px;
}
`

export const CardDiv = styled.div`
display: flex;
justify-content: space-between;
`

export const TypesDiv = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
`

export const Types = styled.p`
background-color: rgba(255,255,255,0.5);
color: #fff;
padding: 0px 8px;
border-radius: 12px;
width: fit-content;
`