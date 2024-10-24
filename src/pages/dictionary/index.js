import { useEffect, useState } from "react";
import WordDescription from "./WordDescription";
/* import WordCard from "./WordCard";
import CatHeader from "../cat/CatHeader";
 */


export default function Word() {
  const [word, setWord] = useState([]);
  //add an async function that fetches
  // from url: https://cats-cats-cats-demo.deno.dev/cats/coon
  let url = "https://api.dictionaryapi.dev/api/v2/entries/en/hello"
  // create async function
  async function fetchWord() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setWord(data);
  }

  useEffect(() => {
    fetchWord();
  }, []);

  return (
    <div>
        <div className="border-2 rounded-md m-5 p-4">
          <div className="mt-5 text-center text-yellow-300">
            <WordDescription word={word.word} />
          </div>
        </div>
    </div>
  );
}

