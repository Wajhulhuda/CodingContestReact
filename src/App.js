import { useEffect, useState } from "react";
import "./App.css";
import Contest from "./components/Contest";

function App() {
  const [contest, setContest] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getContests = () => {
    fetch("https://kontests.net/api/v1/all")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setContest(data);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    getContests();
  }, []);
  return (
    <>
      <div className="col-lg-8 col-md-8 col-sm-10 mx-auto main">
        <button type="button" className="btn btn-warning">
          Coding Contests Plateform{" "}
        </button>
        {isLoading && <h1 className="text-center my-4">Loading...</h1>}
        {contest.length >= 0 &&
          contest.map((elem, index) => {
            return <Contest data={elem} key={Math.random() * index} />;
          })}
      </div>
    </>
  );
}

export default App;
