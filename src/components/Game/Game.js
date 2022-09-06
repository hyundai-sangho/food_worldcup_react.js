import { useState, useEffect } from "react";
import { FlexBox } from "./style";

const items = [
  {
    name: "햄버거",
    src: process.env.PUBLIC_URL + "./img/burger.jpg",
  },
  {
    name: "볶음밥",
    src: process.env.PUBLIC_URL + "./img/fried-rice.jpg",
  },
  {
    name: "파스타",
    src: process.env.PUBLIC_URL + "./img/pasta.jpg",
  },
  {
    name: "라면",
    src: process.env.PUBLIC_URL + "./img/ramen.jpg",
  },
];

const Game = () => {
  const [foods, setFoods] = useState([]);
  const [displays, setDisplays] = useState([]);
  const [winners, setWinners] = useState([]);

  useEffect(() => {
    items.sort(() => Math.random() - 0.5);
    setFoods(items);
    setDisplays([items[0], items[1]]);
  }, []);

  const clickHandler = (음식) => {
    if (foods.length <= 2) {
      if (winners.length === 0) {
        setDisplays([음식]);
      } else {
        let updatedFood = [...winners, 음식];
        setFoods(updatedFood);
        setDisplays([updatedFood[0], updatedFood[1]]);
        setWinners([]);
      }
    } else if (foods.length > 2) {
      setWinners([...winners, 음식]);
      setDisplays([foods[2], foods[3]]);
      setFoods(foods.slice(2));
    }
  };

  return (
    <FlexBox>
      <h1 className="title">음식 월드컵</h1>
      {displays.map((음식) => {
        return (
          <div
            className="flex-1"
            key={음식.name}
            onClick={() => {
              clickHandler(음식);
            }}
          >
            <img className="food-img" src={음식.src} alt="햄버거 이미지" />
            <div className="name">{음식.name}</div>
          </div>
        );
      })}
    </FlexBox>
  );
};

export default Game;
