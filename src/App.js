import React from "react";
import "./App.css";
import request from "./request/request";
import Rows from "./Rows/rows";
import Banner from "./Banner/Banner";
import NavBar from "./NavBar/NavBar";
function App() {
  return (
    <div className="app">
      <NavBar />
      <Banner />
      <Rows
        title="Netflix Originals"
        fetchUrl={request.fetchNetfilxOriginals}
        isLargeRow={true}
      />
      <Rows title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Rows title="Trending" fetchUrl={request.fetchTrending} />
      <Rows title="Action" fetchUrl={request.fetchActionMovies} />
      <Rows title="Comdey" fetchUrl={request.fetchComdeyMovies} />
      <Rows title="Horror" fetchUrl={request.fetchHorrorMovies} />
      <Rows title="Romance" fetchUrl={request.fetchRomanceMovies} />
      <Rows title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
