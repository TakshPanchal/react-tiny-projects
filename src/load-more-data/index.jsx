import { useEffect, useState } from "react";
import "./styles.css";

const LoadMoreData = ({ url, limit = 10 }) => {
  const [nextUrl, setNextUrl] = useState(
    url ? `${url}/pokemon?limit=${limit}` : ""
  );
  const [pokemons, setPokemons] = useState([]);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async (firstTime = false) => {
    try {
      setLoading(true);
      const resp = await fetch(nextUrl);
      const data = await resp.json();

      if (data && data.results && data.results.length) {
        setPokemons((prev_pokemons) => {
          return firstTime ? data.results : [...prev_pokemons, ...data.results];
        });

        setNextUrl(data.next);
      }
    } catch (error) {
      setErr(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (nextUrl) fetchData(true);
  }, []);

  if (!url || url.length === 0) {
    setErr("Provided url is empty");
  }

  return (
    <div className="container">
      <div className="product-container">
        {pokemons?.map((val, index) => {
          return (
            <div className="product" key={index}>
              <p>
                {index}. {val.name}
              </p>
            </div>
          );
        })}
      </div>

      {loading && <p>Loading...</p>}
      <button onClick={() => fetchData(false)}>Load More</button>
    </div>
  );
};

export default LoadMoreData;
