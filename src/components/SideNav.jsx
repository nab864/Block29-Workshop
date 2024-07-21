import { Link } from "react-router-dom"
import addIcon from "../../public/add.svg"
import allIcon from "../../public/bx-border-all.svg"
import homeIcon from "../../public/home-outline.svg"

export default function SideBar() {

  return (
    <div className="sidebar">
      <div className="link-wrapper">
        <Link className= "link"  to='/'><img src={homeIcon} /></Link>
        <h3 className="img-description">Home</h3>
      </div>
      <div className="link-wrapper">
        <Link className= "link"  to='/allpuppies'><img src={allIcon} /></Link>
        <h3 className="img-description">All puppies</h3>
      </div>
      <div className="link-wrapper">
        <Link className="link" to="/addpuppy"><img src={addIcon} /></Link>
        <h3 className="img-description">Add a Puppy</h3>
      </div>
    </div>
  )
}