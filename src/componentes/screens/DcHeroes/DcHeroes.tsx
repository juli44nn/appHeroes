import { useEffect, useState } from "react"
import { IHeroes } from "../../../types/IHeroes"
import { heroesData } from "../../../data/heroes";
import { ListHeroes } from "../../ui/Header/ListHeroes/ListHeroes";

export const DcHeroes = ()=>{
    const [heroes,setHeroes] = useState<IHeroes[]>([]);
    
    const handleGetHeroesDc = ()=>{
        const result = heroesData.filter((heroe)=>heroe.publisher=="DC Comics")
        setHeroes(result);
    }
    useEffect(()=>{
        handleGetHeroesDc();
    },[]);

    return (<>
        <ListHeroes heroes={heroes} title="Heroes de DC Comics"></ListHeroes>
    </>)
}