import {Routes,Route} from "react-router-dom" 
import Cars from "./routes/Cars"
import Users from "./routes/Users"
import Login from "./routes/Login"

function App() {
 
  return (
    <Routes>
        <Route path="/" element={<Cars/>} />
        <Route path="/users" element={<Users/>} />
        <Route path="/login" element={<Login/>} />
    </Routes>
  )
}

export default App
