import { Link } from "react-router-dom"

export default function SideBar() {

  return (
    <div className="sidebar">
      <Link className= "link"  to='/'>Home</Link>
      <Link className= "link"  to='/allpuppies'>All Puppies</Link>
      <Link className="link" to="/addpuppy"> Add Puppy</Link>
    </div>
  )
}