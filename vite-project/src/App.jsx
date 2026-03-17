import { useEffect, useState } from "react";

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=0d2f2778547143a098b2c0cf5c3f4d47")
      .then((res) => res.json())
      .then((data) => setNews(data.articles));
  }, []);

  return (
    <div>
      <h1>Latest News</h1>

      {news.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;