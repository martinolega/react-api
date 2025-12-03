import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/Card"

function App() {
  const apiActors = "https://lanciweb.github.io/demo/api/actors/";
  const apiActresses = "https://lanciweb.github.io/demo/api/actresses/";

  const [loading, setLoading] = useState(false);
  const [actors, setActors] = useState([]);
  const [actresses, setActresses] = useState([]);
  const [normalizedActresses, setNormalizedActresses] = useState ([]);
  const [actorsAndActresses, setActorsAndActresses] = useState([]);

  let i = 0;

  useEffect(() => {
    fetchActors();
  }, []);

  useEffect(() => {
    if(actors.length > 0 || normalizedActresses.length > 0)
    {
      setActorsAndActresses(actors.concat(normalizedActresses));
    }
  }, [actors, normalizedActresses]);
  
  useEffect(() => {
    let result;
    result = actresses.map(actress => (
      {
        id: actress.id,
        name: actress.name,
        birth_year: actress.birth_year,
        nationality: actress.nationality,
        known_for: actress.most_famous_movies,
        awards: [actress.awards],
        biography: actress.biography,
        image: actress.image,
      }
    ))
    setNormalizedActresses(result);
  }, [actresses]);

  function fetchActors() {
    setLoading(true);
    axios
      .get(apiActors)
      .then((resp) => {
        setActors(resp.data);
        fetchActresses();
      });
  }

  function fetchActresses() {
    axios
      .get(apiActresses)
      .then((resp) => {
        setActresses(resp.data);
        setLoading(false);
      })
  }

  return (
    <>
      <div className="container py-5">
        <h1 className="text-center">Actors</h1>
        <p className="text-center">List of actors fetched from an API</p>

        {loading === true ?
          (
            <div className="text-center">Loading...</div>
          )
          :
          (
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
              {
                actorsAndActresses.map((actor) => (
                  <div className="col d-flex" key={i++}>
                    <Card actor={actor} />
                  </div>
                ))}
            </div>
          )
        }
      </div>
    </>
  )
}

export default App
