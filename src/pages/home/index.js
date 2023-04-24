// import { Link } from "react-router-dom";
import Button from "../../components/button";
import Header from "../../components/header";
import { Container, TextContent, Title, TitleHighlight } from "./styles";
import banner from '../../assets/banner.png'
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate()

  const handleClickSign = () => {
    navigate('/login')
  }

  return (
    <>
        <Header></Header>
        <Container>
          <div>
            <Title>
              <TitleHighlight>
                implemente
                <br></br>
              </TitleHighlight>
              O seu futuro global agora
            </Title>
            <TextContent>
              Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional
              , evoluindo em comunidade com os melhores experts.
            </TextContent>
            <Button variant="secondary" onClick={()=> null}>Começar agora</Button>
          </div>
          <div>
            <img src={banner} alt=""></img>
          </div>
        </Container>
        {/* <Button title={"primeiro botão"}></Button>
        <Button variant="secondary" title={"segundo botão"}>segundo</Button>
        <Link to="/login">Ta aqui</Link> */}
    </>
  )
}

