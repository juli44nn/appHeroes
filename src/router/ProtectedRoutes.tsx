import { Route, Routes } from "react-router-dom"
import { Header } from "../componentes/ui/Header/Header"
import { Home } from "../componentes/screens/Home/Home"
import { Search } from "../componentes/screens/Search/Search"
import { DcHeroes } from "../componentes/screens/DcHeroes/DcHeroes"
import { MarvelHeroes } from "../componentes/screens/MarvelHeroes/MarvelHeroes"
import { HeroePage } from "../componentes/screens/HeroePage/HeroePage"


//definiremos las rutas a las cuales el usario podrá acceder solo si hasta logueado
export const ProtectedRoutes = ()=>{
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/search" element={<Search/>}></Route>
                <Route path="/dcHeroes" element={<DcHeroes/>}></Route>
                <Route path="/marvelHeroes" element={<MarvelHeroes/>}></Route>
                <Route path="/hero/:id" element={<HeroePage/>}></Route>
            </Routes>

        </>
    )
}

