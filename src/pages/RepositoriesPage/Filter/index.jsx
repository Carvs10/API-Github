import React from "react";
import PropTypes from "prop-types";

import { Container, Selector, Cleaner } from "./style";

function Filter({ languages }) {
  const selectors = languages.map(({ name, count, color }) => (
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

Filter.propTypes = {
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      color: PropTypes.string,
    }).isRequired
  ).isRequired,
};
export default Filter;
