import HomeBlock from "../Components/HomeBlock.tsx";
import BriefCase from "../Components/BriefCase.tsx";
import Processes from "../Components/Processes.tsx";
import Connection from "../Components/Connection.tsx";


export default function Home(){
    return(
        <main className="Home">
            <HomeBlock/>
            <BriefCase/>
            <Processes/>
            <Connection/>
        </main>
    )
}