import { useState, useEffect } from "react"
import SinglePuppy from "./SinglePuppy"
import { useNavigate } from "react-router-dom"

const apiUrl = "https://fsa-puppy-bowl.herokuapp.com/api/2404-FTB-MT-WEB-PT/players"

export default function AllPuppies() {
  const [allPuppies, setAllPuppies] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchAllPlayers = async () => {
      try {
        const response = await fetch(apiUrl)
        const result = await response.json()
        setAllPuppies(result.data.players)
      } catch(error) {
        console.log(error)
      }
    }
    fetchAllPlayers()
  }, [])

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
  }

  if (allPuppies) {
  return (
    <>
      <h1>All Puppies</h1>
      <div className="allpuppies">
        {allPuppies.map(puppy => {
          return (
            <div className="puppycard">
              <div className="top-of-card">
                <h1>{puppy.name}</h1>
                <h1>{puppy.teamId}</h1>
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