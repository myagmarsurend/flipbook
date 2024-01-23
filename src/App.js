import "./App.css";
import Car from "./car/index.js";

import Paper from "./paper/index.js";

function App() {
  const images = [
    {
      href: "https://e-mart.mn/media/emartstore/content/LEAFLET/2024/24-2/issue.028.jpg",
      url: "https://e-mart.mn/media/emartstore/content/LEAFLET/2024/24-2/issue.028.jpg",
    },
    {
      href: "https://e-mart.mn/media/emartstore/content/LEAFLET/2024/24-2/issue.0284.jpg",
      url: "https://e-mart.mn/media/emartstore/content/LEAFLET/2024/24-2/issue.0284.jpg",
    },
    {
      href: "https://e-mart.mn/media/emartstore/content/LEAFLET/2024/24-2/issue.0287.jpg",
      url: "https://e-mart.mn/media/emartstore/content/LEAFLET/2024/24-2/issue.0287.jpg",
    },
    {
      href: "https://e-mart.mn/media/emartstore/content/LEAFLET/2024/24-2/issue.0288.jpg",
      url: "https://e-mart.mn/media/emartstore/content/LEAFLET/2024/24-2/issue.0288.jpg",
    },
    {
      href: "https://e-mart.mn/media/emartstore/content/LEAFLET/2024/24-2/issue.0283.jpg",
      url: "https://e-mart.mn/media/emartstore/content/LEAFLET/2024/24-2/issue.0283.jpg",
    },
  ];

  return (
    <div className="App">
      <Car images={images} width="321.5px" height="455.5px" />
    </div>
  );
}

export default App;
