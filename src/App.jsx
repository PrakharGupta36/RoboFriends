import CardList from "./components/CardList";
import "./style.css";
import { useEffect, useState } from "react";
import SearchBox from "./components/SearchBox";

function App() {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => setRobots(data));
  });
  const [searchField, setSearchField] = useState("");

  const filteredRobots = robots.filter((robots) => {
    return robots.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div className='container-grid'>
      <SearchBox
        searchChange={(e) => {
          setSearchField(e.target.value);
        }}
      />
      <CardList robots={filteredRobots} />
    </div>
  );
}

export default App;
