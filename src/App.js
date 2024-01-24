import "./App.css";
import Car from "./car/index.js";

import Paper from "./paper/index.js";

function App() {
  const images = [
    {
      href: "https://e-mart.mn/media/emartstore/content/LEAFLET/2024/24-2/issue.028.jpg",
      url: "https://github.com/myagmarsurend/flipbook/blob/main/src/img/1.jpg",
    },
    {
      href: "https://e-mart.mn/media/emartstore/content/LEAFLET/2024/24-2/issue.0284.jpg",
      url: "https://github.com/myagmarsurend/flipbook/blob/main/src/img/2.jpg",
    },
    {
      href: "https://e-mart.mn/media/emartstore/content/LEAFLET/2024/24-2/issue.0287.jpg",
      url: "https://github.com/myagmarsurend/flipbook/blob/main/src/img/3.jpg",
    },
    {
      href: "https://e-mart.mn/media/emartstore/content/LEAFLET/2024/24-2/issue.0288.jpg",
      url: "https://github.com/myagmarsurend/flipbook/blob/main/src/img/4.jpg",
    },
    {
      href: "https://e-mart.mn/media/emartstore/content/LEAFLET/2024/24-2/issue.0283.jpg",
      url: "https://github.com/myagmarsurend/flipbook/blob/main/src/img/5.jpg",
    },
  ];

  return (
    <div className="App">
      <Car images={images} width="400" height="500" />
    </div>
  );
}

export default App;
