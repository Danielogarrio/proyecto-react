import NavBar from "./components/NavBar"
import 'bootstrap/dist/css/bootstrap.css'
import imagePath from './assets/R.jpg'


function App(){
return(
  <div>
    <NavBar brandName="sazon oaxaqueño " imageSrcPath={imagePath}/>
   </div>

  
)
}
export default App