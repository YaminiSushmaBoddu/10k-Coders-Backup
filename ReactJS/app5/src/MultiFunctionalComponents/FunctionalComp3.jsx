export function FirstFunctional3(){
    return(
        <div>
            <h1>This is First Functional3</h1>
        </div>
    )
}

export function SecondFunctional3(){
    return(
        <div>
            <h1>This is Second Functional3</h1>
        </div>
    )
}

export default function MainFunctional3(){
    return(
        <div>
            <h1>This is Main Functional3</h1>
            <SecondFunctional3/>
        </div>
    )
}