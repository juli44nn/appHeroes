import { Route, Routes } from "react-router-dom"
import { Login } from "../componentes/screens/login/Login"
import { useAppSelector } from "../hooks/redux";
import { ProtectedRoutes } from "./ProtectedRoutes";

export const AppRouter = ()=>{

    const isLogged = useAppSelector(state=> state.auth.isLogged)
    //definimos las rutas
    return (
        <>
        <Routes>
            {
                isLogged? (<Route path="/*" element={<ProtectedRoutes/>}></Route>):
                (<Route path="/*" element={<Login/>}></Route>)
            }
                

        </Routes>
        </>
    );
}