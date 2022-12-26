import axios from "axios";

const urlPeople = "https://swapi.dev/api/people/";
const urlSpecie = "https://swapi.dev/api/species/";

const allPersons = async (state) => {
  const petition = await axios.get(urlPeople);
  state(petition.data.results);
};

const allSpecies = async (state) => {
  const petition = await axios.get(urlSpecie);
  state(petition.data.results);
};

export { allPersons, allSpecies };
