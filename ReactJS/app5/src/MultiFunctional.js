import MainFunctional1 from "./MultiFunctionalComponents/FunctionalComp1"
import { FirstFunctional2 } from "./MultiFunctionalComponents/FunctionalComp2"
import MainFunctional3 from "./MultiFunctionalComponents/FunctionalComp3"
import { FirstFunctional4, SecondFunctional4 } from "./MultiFunctionalComponents/FunctionalComp4"
import MainFunctional5 from "./MultiFunctionalComponents/FunctionalComp5"
import { SecondFunctional6 } from "./MultiFunctionalComponents/FunctionalComp6"

export default function MultiFunctional(){
    return(
    <div>
        <MainFunctional1/>
        <FirstFunctional2/>
        <MainFunctional3/>
        <FirstFunctional4/>
        <SecondFunctional4/>
        <MainFunctional5/>
        <SecondFunctional6/>

    </div>
    )
}

