import './App.css'
import Title from './components/title.tsx';
import Hobby1 from './components/hobby1';
import Hobby2 from './components/hobby2';
import Intro from "./components/intro.tsx";



const App = () => {

    return (
        <div>
            <Title />
            <Intro name1={'Maxwell Jeronimo'} name2={'Jared LaPlante'} />
            <Hobby1 />
            <br/>
            <Hobby2 />
        </div>
    )
}

export default App;