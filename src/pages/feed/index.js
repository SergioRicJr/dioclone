// import { Link } from "react-router-dom";
import Button from "../../components/button";
import Header from "../../components/header";
import { Container, Column, Title, TitleHighlight } from "./styles";
import banner from '../../assets/banner.png'
import Card from "../../components/card/styles";
import UserInfo from "../../components/userinfo";

export default function Feed() {
  return (
    <>
        <Header autenticado={true} ></Header>
        <Container>
          <Column flex={3}>
            <Title>Feed</Title>
            <Card/>
          </Column>
          <Column flex={1}>
            <TitleHighlight>#Ranking top 5 da semana</TitleHighlight>
            <UserInfo percentual={35} name="Sergio" image="https://avatars.githubusercontent.com/u/115962863?v=4"/>
          </Column>
          
        </Container>
      
    </>
  )
}

