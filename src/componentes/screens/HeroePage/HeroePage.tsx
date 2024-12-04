import { useEffect, useState } from "react"
import { IHeroes } from "../../../types/IHeroes"
import { useNavigate, useParams } from "react-router-dom";
import { heroesData } from "../../../data/heroes";
import styles from "./HeroePage.module.css";
import { Button } from "react-bootstrap";

export const HeroePage=()=>{

    const [heroe , setHeroe] = useState<IHeroes|null>(null);

    const {id}= useParams();

    const getHeroeById = ()=>{
        const result = heroesData.find((h)=> h.id==id);
        if(result)
            setHeroe(result);
        else
            setHeroe(null);
    };
    useEffect(()=>{
        getHeroeById();
    },[]);

    const navigate = useNavigate()
    const handleNavigate = ()=>{
        //vuelve a la pagina anterior
        navigate(-1)
    }
    return(
        <>
            {heroe && <div className={styles.containerHeroePage}>
                
                <div className={styles.containerImgHeroePage}>
                     <img src={`/assets/heroes/${id}.jpg`}></img>
                </div>
                <div>
                    <h3>{heroe.superhero}</h3>
                    <ul>
                        <li><b>Alter ego</b>{heroe.alter_ego}</li>
                        <li><b>Persona</b>{heroe.characters}</li>
                        <li><b>1ra aparicion</b>{heroe.first_appearance}</li>
                    </ul>
                    <Button onClick={handleNavigate} variant="primary">Back</Button>
                </div>
                </div>}
        </>
    )
}