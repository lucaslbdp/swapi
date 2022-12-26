import React, { useState, useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import { allPersons, allSpecies } from "../../functions/FetchFunctions";
import Input from "../ui/input/Input";
import "./init.css";

const Init = () => {
  const [persons, setPersons] = useState([]);
  const [species, setSpecie] = useState([]);
  const [filterInput, setFilterInput] = useState("");
  const [personFiltered, setPersonFiltered] = useState([]);

  const getPeopleSpecies = (peopleSpecies) => {
    const matchSpecies = [];
    species.map((specie) => {
      const specieName = peopleSpecies.includes(specie.url);
      return specieName && matchSpecies.push(specie.name);
    });
    return matchSpecies.length ? matchSpecies : "no definido";
  };

  const handleChange = (e) => {
    setFilterInput(e.target.value);
  };

  const filter = () => {
    // eslint-disable-next-line array-callback-return
    let searchResult = persons.filter((element) => {
      if (
        element.name
          .toString()
          .toLowerCase()
          .includes(filterInput.toLowerCase())
      ) {
        return element;
      }
    });
    setPersonFiltered(filterInput.length === 0 ? persons : searchResult);
  };

  useEffect(() => {
    filter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterInput]);

  useEffect(() => {
    allPersons(setPersons);
    allSpecies(setSpecie);
  }, []);

  return (
    <Container className="text-center">
      <h2>Busca tu personaje</h2>
      <Input handleChange={handleChange} />

      <div className="container__person">
        {personFiltered.map((element, index) => (
          <Card key={index}>
            <Card.Body className="body__card">
              <Card.Title>Nombre: {element.name}</Card.Title>
              <Card.Text>
                Especie: {getPeopleSpecies(element.species)}
              </Card.Text>
              {filterInput.length ? (
                <>
                  <Card.Text>Genero: {element.gender}</Card.Text>
                  <Card.Text>Altura: {element.height}</Card.Text>
                  <Card.Text>Año de nacimiento: {element.birth_year}</Card.Text>
                </>
              ) : (
                ""
              )}
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Init;
