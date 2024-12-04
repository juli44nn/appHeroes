import { ChangeEvent, useState } from "react";

interface  formValues{
    [key:string]:string|number;
}

export const useForm=<T extends formValues>(initialDatos: T)=>{

    const [values,setValues]=useState<T>(initialDatos)

    const manejarCambioForm = (e:ChangeEvent<HTMLInputElement>)=>{
        const name = e.target.name;
        const value = e.target.value;
            setValues({...values , [`${name}`]:value});

    }
    const resetForm = ()=>{
        setValues(initialDatos);
    }

    return{
        values,
        manejarCambioForm,
        resetForm
    };
};