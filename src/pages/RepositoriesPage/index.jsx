import React, { useState, useEffect } from "react";

import { Container, Sidebar, Main, Loading } from "./styles";

import { getUser, getLangsFrom } from "../../services/api";

import Profile from "./Profile";
import Filter from "./Filter";
import Repositories from "./Repositories";

function RepositoriesPage() {
  const [user, setUser] = useState();
  const [currentLanguage, setCurrentLanguage] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const [userResponse] = await Promise.all([getUser("DevSamurai")]);

      setUser(userResponse.data);
      setLoading(false);
    };

    loadData();
  }, []);

  // const user = {
  //   login: "DevSamurai",
  //   avatar_url: "https://avatars.githubusercontent.com/u/55540536?v=4",
  //   name: "Dev Samurai",
  //   followers: 87,
  //   following: 0,
  //   company: null,
  //   blog: "https://devsamurai.com.br",
  //   location: "São José dos Campos - SP",
  // };

  const repositories = [
    {
      id: 1,
      name: "Repo 1",
      description: "Template básico para projetos ReactJS",
      html_url: "https://devsamurai.com.br",
      language: "JavaScript",
    },
    {
      id: 2,
      name: "Repo 2",
      description: "Template básico para projetos ReactJS",
      html_url: "https://devsamurai.com.br",
      language: "JavaScript",
    },
    {
      id: 3,
      name: "Repo 3",
      description: "Template básico para projetos ReactJS",
      html_url: "https://devsamurai.com.br",
      language: "PHP",
    },
    {
      id: 4,
      name: "Repo 4",
      description: "Template básico para projetos ReactJS",
      html_url: "https://devsamurai.com.br",
      language: "Ruby",
    },
    {
      id: 5,
      name: "Repo 5",
      description: "Template básico para projetos ReactJS",
      html_url: "https://devsamurai.com.br",
      language: "TypeScript",
    },
    {
      id: 6,
      name: "Repo 6",
      description: "Template básico para projetos ReactJS",
      html_url: "https://devsamurai.com.br",
      language: "TypeScript",
    },
  ];

  const languages = getLangsFrom(repositories);

  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  };

  if (loading) {
    return <Loading>Carregando...</Loading>;
  }

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter
          languages={languages}
          currentLanguage={currentLanguage}
          onClick={onFilterClick}
        />
      </Sidebar>
      <Main>
        <Repositories
          repositories={repositories}
          currentLanguage={currentLanguage}
        />
      </Main>
    </Container>
  );
}

export default RepositoriesPage;
