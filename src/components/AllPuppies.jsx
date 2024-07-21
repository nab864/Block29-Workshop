import { useState, useEffect } from "react"
import SinglePuppy from "./SinglePuppy"
import { useNavigate } from "react-router-dom"

const apiUrl = "https://fsa-puppy-bowl.herokuapp.com/api/2404-FTB-MT-WEB-PT/players"

export default function AllPuppies() {
  const [allPuppies, setAllPuppies] = useState()
  const [filterPuppies, setFilterPuppies] = useState('')
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    fetchAllPlayers()
  }, [])

  const fetchAllPlayers = async () => {
    try {
      const response = await fetch(apiUrl)
      const result = await response.json()
      setAllPuppies(result.data.players)
      setFilterPuppies(result.data.players)
    } catch(error) {
      console.log(error)
    }
  }

  const handleDetailsClick = (id) => {
    navigate(`/${id}`)
  }

  const handleRemoveClick = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
    } catch(error) {
      console.log(error)
    }
    fetchAllPlayers()
  }

  const handleChange = (e) => {
    e.preventDefault()
    if (!search) {
      setFilterPuppies(allPuppies)
    } else{
      setFilterPuppies(allPuppies.filter((puppy) => puppy.name.startsWith(search)))
    }
  }
  
  if (allPuppies) {
    return (
      <>
        <h1>All Puppies</h1>
        <form onSubmit={(e) => handleChange(e)}>
          <input type="text" onChange={(e) => setSearch(e.target.value)} />
          
          <button>Search</button>
        </form>
        <div className="allpuppies">
          {filterPuppies.map(puppy => {
            return (
              <div className="puppycard" key={puppy.id}>
                <div className="top-of-card">
                  <h1>{puppy.name}</h1>
                  {puppy.teamId ? <h1>{puppy.teamId}</h1> : <h1>null</h1>}
                </div>
                <h2>{puppy.id}</h2>
                <img src={puppy.imageUrl} alt={puppy.name} />
                <button onClick={() => handleDetailsClick(puppy.id)}>Details</button>
                <button onClick={() => handleRemoveClick(puppy.id)}>Remove</button>
              </div>
            )
          })}
        </div>

      </>
    )
  } 
}