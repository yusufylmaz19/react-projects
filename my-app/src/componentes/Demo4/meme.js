import React from "react";
import "../../styles/meme.css";
import TrollFace from "../Demo4/TrollFace.svg";

export default function Meme() {

  const myUrl = "https://api.imgflip.com/get_memes";

  const [meme, setMeme] = React.useState({
    upText: "",
    downText: "",
    imgUrl: TrollFace,
  });

  const [allMeme, setAllMeme] = React.useState([]);

  React.useEffect(() => {
    fetch(myUrl)
      .then((res) => res.json())
      .then((data) => setAllMeme(data.data.memes));
  }, []);

  const getMeme = () => {
    const memeDataArray = allMeme;
    const randomNumber = Math.floor(Math.random() * memeDataArray.length);
    const randomUrl = memeDataArray[randomNumber].url;
    setMeme((preMeme) => ({
      ...preMeme,
      imgUrl: randomUrl,
    }));
  };

  const handleChage = (event) => {
    const { name, value } = event.target;
    setMeme((preMeme) => ({
      ...preMeme,
      [name]: value,
    }));
  };

  
  return (
    <main className="memeContainer">
      <header className="memeHeader">
        <img className="memeLogo" src={TrollFace} />
        <p className="memeTitle">Meme Generator</p>
      </header>
      <section className="memeInputSection">
        <input
          className="memeUpInput memeInput"
          type="text"
          placeholder="up text here"
          name="upText"
          value={meme.upText}
          onChange={handleChage}
        />
        <input
          className="memeDownInput memeInput"
          type="text"
          placeholder="down text here"
          name="downText"
          value={meme.downText}
          onChange={handleChage}
        />
      </section>
      <button className="memeGenButton" type="button" onClick={getMeme}>
        Get a new meme image
      </button>
      <section className="memeImageSection">
        <img className="memeImg" src={meme.imgUrl} />
        <h2 className="upText overText">{meme.upText}</h2>
        <h2 className="downText overText">{meme.downText}</h2>
      </section>
    </main>
  );
}
