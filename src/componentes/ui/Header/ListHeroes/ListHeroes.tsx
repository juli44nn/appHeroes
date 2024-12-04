import { IHeroes } from "../../../../types/IHeroes"
import { FC } from "react"
import styles from "./ListHeroes.module.css";
import { CardHeroe } from "../../CardHeroe/CardHeroe";

interface IListHeroes{
    heroes:IHeroes[],
    title:string
}


export const ListHeroes:FC<IListHeroes> = ({heroes,title})=>{
    return(
        <div className={styles.containerPrincipalList}>
            <div className={styles.containerTitle}>
                <h2>{title}</h2>    
            </div>
            <div className={styles.containerList}>
                {heroes.map((hero)=>(
                    <CardHeroe heroe={hero} key={hero.id}/>
                ))}       
            </div>
        </div>
    )
}