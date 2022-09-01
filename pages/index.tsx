import { useState } from "react";
import NameCard from "../component/NameCard";

const Home = () => {
  const [number, setNumber] = useState(100);

  const [object, setObject] = useState({ name: "우혜림", age: 29 });
  const [name, setName] = useState("우혜림");
  const [age, setAge] = useState(29);

  const handleNumber = (num: number) => {
    setNumber(num);
  };
  return (
    <div className="flex row w-screen h-screen bg-gray-100">
      <h1 className="flex-1 bg-red-100 text-[3rem] text-red-500	">{number}</h1>
      <button
        className="flex-1 bg-green-100 text-[3rem] text-green-500"
        onClick={() => handleNumber(200)}
      >
        바꾸기
      </button>
      <div className="flex-1">
        <NameCard name={name} age={age} object={object} />
      </div>
    </div>
  );
};

export default Home;
