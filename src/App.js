import "./App.css";
import Car from "./paper/index.js";

import Paper from "./paper/index.js";

function App() {
  const images = [
    {
      href: "https://e-mart.mn/media/emartstore/content/LEAFLET/2024/24-2/issue.028.jpg",
      img: "https://github.com/myagmarsurend/flipbook/blob/main/src/img/1.jpg?raw=true",
    },
    {
      href: "https://e-mart.mn/media/emartstore/content/LEAFLET/2024/24-2/issue.0284.jpg",
      img: "https://github.com/myagmarsurend/flipbook/blob/main/src/img/2.jpg?raw=true",
    },
    {
      href: "https://e-mart.mn/media/emartstore/content/LEAFLET/2024/24-2/issue.0287.jpg",
      img: "https://github.com/myagmarsurend/flipbook/blob/main/src/img/3.jpg?raw=true",
    },
    {
      href: "https://e-mart.mn/media/emartstore/content/LEAFLET/2024/24-2/issue.0288.jpg",
      img: "https://github.com/myagmarsurend/flipbook/blob/main/src/img/4.jpg?raw=true",
    },
    {
      href: "https://e-mart.mn/media/emartstore/content/LEAFLET/2024/24-2/issue.0283.jpg",
      img: "https://github.com/myagmarsurend/flipbook/blob/main/src/img/5.jpg?raw=true",
    }
  ];

  return (
    <div className="App">
      <Car images={images} width={300} height={640} />
    </div>
  );
}

export default App;
