import Navbar from "./components/Navbar"
import Itemlistcontainer from "./components/Itemlistcontainer"
const App = () => {
    return (
        <header>
            <Navbar/>
            <Itemlistcontainer saludo = "Bienvenidos a mi e-comerce"/>
        </header>
    )
}

export default App