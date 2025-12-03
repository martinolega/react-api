import { useState, useEffect} from 'react'
import './App.css'
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/Card"

function App() {
  const apiActors = "https://lanciweb.github.io/demo/api/actors/";
  const apiActresses = "https://lanciweb.github.io/demo/api/actors/";

  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchActors();
  }, []);

  function fetchActors() {
    setLoading(true);
    axios
      .get(apiActors)
      .then((resp) => {
        setActors(resp.data);
        setLoading(false);
      });
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
            {actors.map((actor) => (
              <div className="col card" key={actor.id}>
                <Card actor={actor}/>
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
