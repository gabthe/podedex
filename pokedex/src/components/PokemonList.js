import React from "react";
import {
  Card,
  Container,
  Header,
  Icon,
  PokemonDiv,
  Title,
  CardDiv,
  TypesDiv,
  Types,
} from "../styles/PokemonListStyle";

const PokemonList = () => {
  return (
    <Container>
      <Header>
        <Icon src={"https://cdn-icons-png.flaticon.com/512/545/545680.png"} />
        <Icon
          src={
            "https://cdn-icons.flaticon.com/png/512/2099/premium/2099192.png?token=exp=1657257863~hmac=a2fa2d54d9abec2fa15ed1bf70cb10b1"
          }
        />
      </Header>
      <Title>Pokedex</Title>
      <PokemonDiv>
        <Card>
          <p>Nome</p>
          <CardDiv>
            <TypesDiv>
              <Types>Tipo1</Types>
              <Types>Tipo2</Types>
            </TypesDiv>
            <img
              src={
                "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
              }
            />
          </CardDiv>
        </Card>
      </PokemonDiv>
    </Container>
  );
};

export default PokemonList;
