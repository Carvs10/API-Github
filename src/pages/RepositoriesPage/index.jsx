import React from "react";

import { Container, Sidebar, Main } from "./styles";

import { getLangsFrom } from "../../services/api";

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

  const repositories = [
    {
      name: "Repo 1",
      description: "Template básico para projetos ReactJS",
      html_url: "https://devsamurai.com.br",
      language: "JavaScript",
    },
    {
      name: "Repo 2",
      description: "Template básico para projetos ReactJS",
      html_url: "https://devsamurai.com.br",
      language: "JavaScript",
    },
    {
      name: "Repo 3",
      description: "Template básico para projetos ReactJS",
      html_url: "https://devsamurai.com.br",
      language: "PHP",
    },
    {
      name: "Repo 4",
      description: "Template básico para projetos ReactJS",
      html_url: "https://devsamurai.com.br",
      language: "Ruby",
    },
    {
      name: "Repo 5",
      description: "Template básico para projetos ReactJS",
      html_url: "https://devsamurai.com.br",
      language: "TypeScript",
    },
    {
      name: "Repo 6",
      description: "Template básico para projetos ReactJS",
      html_url: "https://devsamurai.com.br",
      language: "TypeScript",
    },
  ];

  const languages = getLangsFrom(repositories);

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter languages={languages} />
      </Sidebar>
      <Main>
        <Repositories />
      </Main>
    </Container>
  );
}

export default RepositoriesPage;
