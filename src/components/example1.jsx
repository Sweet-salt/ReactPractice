import { useMemo, useState } from "react"
import React
 from "react";

function sum(persons){
    console.log("sum")
    return persons.map(person => person.age).reduce((l, r) => l + r, 0); 
}
export default function Example1(){

    const [value, setValue] = useState();
    const [persons] = useState([
        {name: 'jyh', age:24},
        {name: 'jjj', age: 222}
    ]);

    const count = useMemo( () => {
        return sum(persons);
    }, [persons]);
    
    return(
        <div>
            <input value={value} onChange={change} />
        </div>
    )

    function change(e){
        setValue(e.target.value)
    }
}