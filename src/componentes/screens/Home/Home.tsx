import { heroesData } from "../../../data/heroes"
import { ListHeroes } from "../../ui/Header/ListHeroes/ListHeroes"

export const Home = ()=>{


    return (
        <ListHeroes heroes={heroesData} title="All Heroes"/>
    )
}