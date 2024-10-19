import CatDescription from "./CatDescription";
import CatCard from "./CatCard";
import CatHeader from "./CatHeader";
import catData from "./cat-data.json";

console.log(catData);

export default function CAT() {
  return (
    <div className="">
      <h1 className="mt-10 text-center text-yellow-300 text-5xl">
        <CatHeader/>
      </h1>
      <div className="mt-6 flex justify-center text-center text-orange-600 text-3xl">
        <CatCard name={catData.name} image={catData.image_link} />
      </div>
      <div className="mt-5 text-center">
        <CatDescription name={catData.name} int={catData.intelligence} maxWeight={catData.max_weight} minWeight={catData.min_weight} origin={catData.origin} minLife={catData.min_life_expectancy} maxLife={catData.max_life_expectancy}/>
      </div>
    </div>
  )
}
