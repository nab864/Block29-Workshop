import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Team from "./Team"

const apiUrl = "https://fsa-puppy-bowl.herokuapp.com/api/2404-FTB-MT-WEB-PT/players"

export default function SinglePuppy( { puppyID }) {
  const [singlePuppy, setSinglePuppy] = useState()

  const navigate = useNavigate()

  useEffect(() => {
    const fetchSinglePuppy = async () => {
      const response = await fetch(`${apiUrl}/${puppyID}`)
      const result = await response.json()
      setSinglePuppy(result.data.player)
    }
    fetchSinglePuppy()
  }, [singlePuppy])

  const handleReturnClick = () => {
    navigate(`/allpuppies`)
  }


  if (singlePuppy) {
    return (
      <div className="singlepuppy">
        <div className="puppycard">
          <div className="description">
            <h3>Name: {singlePuppy.name}</h3>
            <h3>TeamID: {singlePuppy.teamId}</h3>
            <h3>Breed: {singlePuppy.breed}</h3>
            <h3>Status: {singlePuppy.status}</h3>
          </div>
          <img src={singlePuppy.imageUrl} alt={singlePuppy.name} />
          <button onClick={() => handleReturnClick()}>Return</button>
        </div>
      </div>
    )
  }
}