import SearchButton from "./SearchButton.js"
import'./App.css';

function App() {
  return (
    <div className="App">
      <div className="container border rounded  p-3 m-2">

        <SearchButton />
      </div>
     <footer> <a
        href="https://github.com/Bisluvl/weather-react-app"
        target="_blank"
        rel="noreferrer"
      >
        Open-source code built{" "}
      </a>
      , by <a href="https://.github.com/Bisluv">Bisluv</a> </footer>
    </div>
  );
}

export default App;
