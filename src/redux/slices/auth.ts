import { PayloadAction,createSlice } from "@reduxjs/toolkit"

import("@reduxjs/toolkit")

interface IinitialState{
    user:string| null
    isLogged:boolean
}
const initialState: IinitialState={
    user:null,
    isLogged:false
}

//slice
const AuthUser= createSlice({
    name:'AuthUser',
    initialState,
    reducers:{
        setLogin:(state,action:PayloadAction<string>)=>{
             state.user = action.payload;
             state.isLogged=true;   
        },
        setLogOut:(state)=>{
            state.user=null;
            state.isLogged=false;
        }
    }

});
export const {setLogin,setLogOut} = AuthUser.actions
export default AuthUser.reducer ; 