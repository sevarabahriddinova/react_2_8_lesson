import {Routes,Route} from "react-router-dom" 
import Cars from "./routes/Cars"
import Users from "./routes/Users"

function App() {
 
  return (
    <Routes>
        <Route path="/" element={<Cars/>} />
        <Route path="/users" element={<Users/>} />
    </Routes>
  )
}

export default App
