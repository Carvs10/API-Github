import React from "react";

import { Container, Selector, Cleaner } from "./style";

function Filter() {
  const langs = [
    { name: "Javascript", count: 5, color: "#FCC419" },
    { name: "Shell", count: 2, color: "#CED4DA" },
    { name: "PHP", count: 1, color: "#25BEFF" },
  ];

  const selectors = langs.map(({ name, count, color }) => (
    <Selector key={name.toLowerCase()} color={color}>
      <spam>{name}</spam>
      <spam>{count}</spam>
    </Selector>
  ));
  return (
    <Container>
      {selectors}
      <Cleaner>Limpar</Cleaner>
    </Container>
  );
}

export default Filter;
