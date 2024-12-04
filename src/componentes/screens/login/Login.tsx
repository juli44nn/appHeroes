import { Button, Form } from "react-bootstrap"
import styles from './Login.module.css'
import { FormEvent, useState } from "react";
import { useForm } from "../../../hooks/useForm";
import { setLogin } from "../../../redux/slices/auth";
import { useAppDispatch } from "../../../hooks/redux";
import { useNavigate } from "react-router-dom";
export const Login = ()=>{
  const[showPass,setShowPass]= useState(false);


  const {values, manejarCambioForm}= useForm({
    user:'',
    password:''
  });
  const {user,password}= values ; 
  
const dispatch = useAppDispatch()
const navigate = useNavigate();
  
  const handleSubmitForm =async(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault(); 
    const response = await fetch("/user.json");
    const userData = await response.json();
    const userFound = userData.users.find((u:{username:string;password:string})=>u.username==user && u.password==password);
    console.log(userFound);
    if(userFound)
          {
            console.log("me disparo")
            dispatch(setLogin(user))
            navigate("/");
          }else{
            alert("usuario incorrecto. intente de nuevo")
          }
};

  
  return (
    <div className={styles.containerLogin}>
      <div className={styles.containerForm}> 
      <span  style={{fontSize:'8vh',color:'blue'}} className="material-symbols-outlined">
        person
        </span>
      <Form onSubmit={handleSubmitForm}>
      <Form.Group className="mb-3" >
      
        <Form.Label>Usuario
        </Form.Label>
        <Form.Control onChange={manejarCambioForm} type="text" placeholder="ingrese usuario" name='user' value={user}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type={showPass?'text':'password'} name='password' value={password}placeholder="contraseña" onChange={manejarCambioForm}/>
      </Form.Group>
      <Form.Check // prettier-ignore
        type="switch"
        onClick={()=>setShowPass(!showPass)}
        id="custom-switch"
        label="mostrar contraseña"
      />
      <div className="d-flex justify-content-center 
      align-items-center mt-2">
      <Button type ="submit" variant="primary">Aceptar</Button>
      </div>
    </Form>
      </div>
    </div>
  );
}

