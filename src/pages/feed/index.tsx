// import { Link } from "react-router-dom";
// import Button from "../../components/button";
import Header from "../../components/header";
import { Container, Column, ColumnMy, Title, TitleHighlight } from "./styles";
// import banner from '../../assets/banner.png'
import Card from "../../components/card/index";
import UserInfo from "../../components/userinfo";
import { AuthContext } from "../../context/auth";
import { useContext } from "react";
import { IUser } from "../../types/user";

export default function Feed() {
  

  return (
    <>
        <Header></Header>
        <Container>
          <Column flex={3}>
            <Title>Feed</Title>
            <Card/>
          </Column>
          <ColumnMy flex={1}>
            <TitleHighlight>#Ranking top 5 da semana</TitleHighlight>
            <UserInfo percentual={35} name="Sergio" image="https://avatars.githubusercontent.com/u/115962863?v=4"/>
          </ColumnMy>
          
        </Container>
      
    </>
  )
}

