import { Link } from "react-router-dom";
import Button from "../../components/button";
import Header from "../../components/header";

export default function Home() {
  return (
    <>
        <Header></Header>
        <Button title={"primeiro botão"}></Button>
        <Button variant="secondary" title={"segundo botão"}>segundo</Button>
        <Link to="/login">Ta aqui</Link>
    </>
  )
}

