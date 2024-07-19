import { Routes, Route, useParams } from "react-router-dom"
import Home from "./components/Home"
import AllPuppies from "./components/AllPuppies"
import SinglePuppy from "./components/SinglePuppy"
import SideBar from "./components/SideNav"
import AddPuppyForm from "./components/AddPuppyForm"
import "./App.css"
function App() {

  const PuppyWrapper = () => {
    const { puppyID } = useParams()
    return <SinglePuppy puppyID = {puppyID}/>
  }
  return (
    <div className="page">
      <SideBar />
      <div className="mainsection">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allpuppies" element={<AllPuppies />} />
          <Route path="/:puppyID" element={<PuppyWrapper />} />
          <Route path="/addpuppy" element={<AddPuppyForm />} />
        </Routes>
      </div>
      
    </div>
  )
}

export default App
