import { Link } from "react-router-dom"
import addIcon from "../assets/add.svg"
import allIcon from "../assets/bx-border-all.svg"
import homeIcon from "../assets/home-outline.svg"

export default function SideBar() {

  return (
    <div className="sidebar">
      <div className="link-wrapper">
        <Link className= "link"  to='/'><h3>Home</h3></Link>
        <img className="img-description" src={homeIcon} />
      </div>
      <div className="link-wrapper">
        <img className="img-description" src={allIcon} />
        <Link className= "link"  to='/allpuppies'><h3>All puppies</h3></Link>
      </div>
      <div className="link-wrapper">
        <Link className="link" to="/addpuppy"><h3>Add a Puppy</h3></Link>
        <img className="img-description" src={addIcon} />
      </div>
    </div>
  )
}