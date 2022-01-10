import { useState } from "react"

export default function A(){
    const [value] = useState("아직 안바뀜");
    return(
        <div>
            <B value={value} />
            <button>E change</button>
        </div>
    );
}

function B({value}) {
    return(
        <div>
            <p>this is B</p>
            <C value={value} />
            
        </div>
    );
}
function C({value}) {
    return(
        <div>
            <p>this is c</p>
            <D value={value} />
            
        </div>
    );
}