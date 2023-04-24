import React from "react";
import { Container, Name, Description, Footer, Lang, Link } from "./styles";

function Repository() {
  return (
    <Container color="yellow">
      <Name>Repo Name</Name>
      <Description>Repo Description</Description>
      <Footer color="yellow">
        <Lang> Repo Lang</Lang>
        <Link href="https://devsamurai.com.br" target="_blank">
          Ver
        </Link>
      </Footer>
    </Container>
  );
}

export default Repository;
