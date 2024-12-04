import { useEffect, useState } from "react"
import { IHeroes } from "../../../types/IHeroes"
import { heroesData } from "../../../data/heroes";
import { ListHeroes } from "../../ui/Header/ListHeroes/ListHeroes";

export const MarvelHeroes = ()=>{
    const [heroes,setHeroes] = useState<IHeroes[]>([]);

    const handleGetMarvelHeroes =()=>{
        const result = heroesData.filter((heroe)=> heroe.publisher=="Marvel Comics");
        setHeroes(result);
    }
    useEffect(()=>{
        handleGetMarvelHeroes();
    },[]);

    return (<>
        <ListHeroes heroes={heroes} title="Heroes de Marvel"></ListHeroes>
    </>)
}