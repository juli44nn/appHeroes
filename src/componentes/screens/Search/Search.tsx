import {  useEffect, useState } from "react";
import { useForm } from "../../../hooks/useForm"
import { IHeroes } from "../../../types/IHeroes";
import { heroesData } from "../../../data/heroes";
import { FormControl, InputGroup } from "react-bootstrap";
import { CardHeroe } from "../../ui/CardHeroe/CardHeroe";
import styles from "./Search.module.css"

export const Search = ()=>{

    const {values,manejarCambioForm} = useForm({
        search:""
    }
    );

const {search} = values;
const [heroes , setHeroes] = useState<IHeroes[]>([]);
useEffect(()=>{
    const result = heroesData.filter((h)=>h.superhero.toLowerCase().trim().includes(search));
    setHeroes(result);
},[search])

    return (
    
    <div className={styles.containerSearch}>
        <div className={styles.inputHeroes}>
            <InputGroup className="mb-3">
            <InputGroup.Text>
            Ingrese un heroe
            </InputGroup.Text>
            <FormControl onChange={manejarCambioForm} type="text" name="search"></FormControl>
            </InputGroup>
        </div>
          {
            heroes.length > 0 ?(
                <div className={styles.containerListHeroes}>
                    {
                        heroes.map((heroe)=>(
                            <div className={styles.containerHeroe} key={heroe.id}>
                                <CardHeroe heroe={heroe}/>
                            </div>
                        ))
                    }
                </div>
            ): <div>
                <h2>No se encontre ningun heroe ingresado</h2>
            </div>
          }

        
    </div>)
}