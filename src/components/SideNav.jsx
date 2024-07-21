import { Link } from "react-router-dom"

export default function SideBar() {

  return (
    <div className="sidebar">
      <div className="link-wrapper">
        <Link className= "link"  to='/'><img src=".\src\assets\home-outline.svg" /></Link>
        <h3 className="img-description">Home</h3>
      </div>
      <div className="link-wrapper">
        <Link className= "link"  to='/allpuppies'><img src=".\src\assets\bx-border-all.svg" /></Link>
        <h3 className="img-description">All puppies</h3>
      </div>
      <div className="link-wrapper">
        <Link className="link" to="/addpuppy"><img src=".\src\assets\add.svg" /></Link>
        <h3 className="img-description">Add a Puppy</h3>
      </div>
    </div>
  )
}