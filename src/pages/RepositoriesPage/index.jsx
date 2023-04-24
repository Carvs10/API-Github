import React from "react";

import { Container, Sidebar, Main } from "./styles";

import Profile from "./Profile";
import Filter from "./Filter";
import Repositories from "./Repositories";

function RepositoriesPage() {
  const user = {
    login: "DevSamurai",
    avatar_url: "https://avatars.githubusercontent.com/u/55540536?v=4",
    name: "Dev Samurai",
    followers: 87,
    following: 0,
    company: null,
    blog: "https://devsamurai.com.br",
    location: "São José dos Campos - SP",
  };
  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter />
      </Sidebar>
      <Main>
        <Repositories />
      </Main>
    </Container>
  );
}

export default RepositoriesPage;
