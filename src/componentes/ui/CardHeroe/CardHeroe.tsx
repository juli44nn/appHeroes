import { FC } from "react";
import { IHeroes } from "../../../types/IHeroes"
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./CardHeroe.module.css";
interface ICardHeroe{
    heroe:IHeroes;
}



export const CardHeroe: FC<ICardHeroe>=({heroe})=>{
    const navigate = useNavigate();
    const handleNavigateHeroe = ()=>{
        navigate(`/hero/${heroe.id}`)
    }

    return (
        <Card className={styles.card} onClick={handleNavigateHeroe} style={{ width: '100%'  }}>
        <Card.Img variant="top" src={`/assets/heroes/${heroe.id}.jpg`} />
        <Card.Body>
          <Card.Title>{heroe.superhero}</Card.Title>
          <Card.Text>
            <p>
                <b>Alter ego:</b>{heroe.alter_ego}
            </p>
            <p>
                <b>SuperHeroe:</b>{heroe.superhero}
            </p>
            <p>
                <b>Primera aparición:</b>{heroe.first_appearance}
            </p>
            <p>
                <b>Editorial:</b>{heroe.publisher}
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    );
}