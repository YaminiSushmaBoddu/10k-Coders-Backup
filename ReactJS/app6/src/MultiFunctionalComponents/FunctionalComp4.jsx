export function FirstFunctional4(){
    return(
        <div>
             <h1>This is First Functional4 </h1>
        </div>
    )
}

export function SecondFunctional4(){
    return(
        <div>
             <h1>This is Second Functional4 </h1>
        </div>
    )
}

export default function MainFunctional4(){
    return(
        <div>
             <h1>This is Main Functional4 </h1>
             <SecondFunctional4/>
        </div>
    )
}