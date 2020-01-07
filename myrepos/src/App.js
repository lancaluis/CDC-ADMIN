import React, { useState, useEffect } from "react";

export default function App() {
  // const [location, setLocation] = useState({});

  // useEffect(() => {
  //   navigator.geolocation.watchPosition(handlePositionReceived);
  // }, []);

  // function handlePositionReceived({ coords }) {
  //   const { latitude, longitude } = coords;
  //   setLocation({ latitude, longitude });
  // }

  const [repositories, setRepositories] = useState([]);

  useEffect(async () => {
    const response = await fetch(
      "https://api.github.com/users/lancaluis/repos"
    );
    const data = await response.json();
    setRepositories(data);
  }, []);

  useEffect(() => {
    const filtered = repositories.filter(repo => repo.favorite);
    document.title = `Você tem ${filtered.length} favorito(s)`;
  }, [repositories]);

  function handleAddRepository() {
    setRepositories([
      ...repositories,
      { id: Math.random(), name: "novo-repo" }
    ]);
  }

  function handleFavorite(id) {
    const newRepositories = repositories.map(repo => {
      return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo;
    });
    setRepositories(newRepositories);
  }

  return (
    <>
      {/* <p>Latitude: {location.latitude}</p>
      <p>Longitude: {location.longitude}</p> */}
      <ul>
        {repositories.map(repo => (
          <li key={repo.id}>
            {repo.name}
            {repo.favorite && <span>(Favorito)</span>}
            <button onClick={() => handleFavorite(repo.id)}>Favoritar</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddRepository}>Add repository</button>
    </>
  );
}
