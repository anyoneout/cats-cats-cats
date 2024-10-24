import { useEffect,useState } from "react";
import CatDescription from "./CatDescription";
import CatCard from "./CatCard";
import CatHeader from "./CatHeader";
import catData from "./cat-data.json";

console.log(catData);

export default function Cat() {
  const [ cat, setCat ] = useState({});
  //add an async function that fetches
  // from url: https://cats-cats-cats-demo.deno.dev/cats/coon
  let url = "https://cats-cats-cats-demo.deno.dev/cats/sphynx"
  // create async function
  async function fetchCat() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setCat(data);
  }
  useEffect(() => {fetchCat();}, []);
  return (
    <div className="border-2 rounded-md m-5 p-4">
      <h1 className="mt-10 text-center text-yellow-300 text-5xl">
        <CatHeader />
      </h1>
      <div className="mt-6 flex justify-center text-center text-orange-600 text-3xl">
        <CatCard name={cat.name} image={cat.image_link} />
      </div>
      <div className="mt-5 text-center">
        <CatDescription name={cat.name} int={cat.intelligence} maxWeight={cat.max_weight} minWeight={cat.min_weight} origin={cat.origin} minLife={cat.min_life_expectancy} maxLife={cat.max_life_expectancy} />
      </div>
    </div>
  )
}
