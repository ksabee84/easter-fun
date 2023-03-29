import "./card.css";
import "./flip-transition.css";
import bunnyImg from "../../img/easter_bunny.jpg";
import eggImg from "../../img/easter_eggs.jpg";

const poems = [
    {
        id: 1,
        poem: `Patak mellett mentem, azt súgta egy harcsa,
        Van e háznál kislány, hogy az Isten tartsa.
        Meglocsolnám rózsavízzel, hogyha előjönne,
        Akkor az a kicsi lány jaj de nagyot nőne!`,
    },
    {
        id: 2,
        poem: `Pajtában egy szürke ló,
        Én vagyok a locsoló.
        Íme itt a kölni,
        Szabad-e locsolni?`,
    },
    {
       id: 3,
       poem: `Zöld erdőben jártam
       Kék ibolyát láttam.
       El akart hervadni
       Szabad-e locsolni?`, 
    },
    {
        id: 4,
        poem: `Ákom-bákom, berkenye,
        Szagos húsvét reggele.
        Leöntjük a virágot,
        Visszük már a kalácsot.`,
    },
    {
        id: 5,
        poem: `Én kis kertész legény vagyok,
        Rózsavízzel locsolkodok.
        Úgy locsolom a lányokat,
        Mint kertész a virágokat.`,
    },
    {
        id: 6,
        poem: `Mosolyog a napsugár,
        mosolyog az ég is,
        locsolkodok, tojást kapok,
        s mosolygok majd én is.`,
    },
    {
        id: 7,
        poem: `E háznak van rózsabokra,
        megöntözném, hogy virulna.
        A kis kertész fáradsága,
        egy pár tojás a váltsága.`,
    },
    {
        id: 8,
        poem: `Zöld erdőben jártam,
        Unicumot láttam.
        Ha nem kapok belőle,
        Nem locsolok jövőre.`,
    },
    {
        id: 9,
        poem: `Én verset nem tudok,
        azt mondjanak a kicsik,
        én csak azért jöttem,
        hogy igyak egy kicsit.
        Szabad-e locsolni?`,
    },
    {
        id: 10,
        poem: `Botom földig lekonyul,
        Nem vagyok már mai nyúl.
        Káposztám javát megettem,
        Locsoljon más helyettem!`,
    },
];

const getRandomPoem = () => {
        const randomPoem = poems[Math.floor(Math.random()*poems.length)];
        console.log(randomPoem);
    }

const Card = ({ onClick }) => {

    return(
        <div className="card" onClick={() => {onClick(); getRandomPoem();}}>
            <div className="card-back">
                {/*randomPoem*/}
                {<img src={bunnyImg} alt="bunny"/>}
            </div>
            <div className="card-front">
                {<img src={eggImg} alt="easter eggs"/>}
            </div>
        </div>
    );
}

export default Card;