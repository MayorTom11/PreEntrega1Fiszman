import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer'
import {NavBar} from './componentes/NavBar/NavBar'
// import {Button} from 'react-bootstrap'

function App() {
  return (
    <div>
    <NavBar />
    <ItemListContainer saludo="Bienvenido a nuestra lista de "/>
    {/* <Button>Click me</Button> */}
    </div>
  )
}

export default App
