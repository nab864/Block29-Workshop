import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Team from "./Team"

const apiUrl = "https://fsa-puppy-bowl.herokuapp.com/api/2404-FTB-MT-WEB-PT/players"

export default function SinglePuppy( { puppyID }) {
  const [singlePuppy, setSinglePuppy] = useState()
  const [showTeam, setShowTeam] = useState(false)
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

  const handleTeamClick = () => {
    setShowTeam(!showTeam)
  }

  if (singlePuppy) {
    return (
      <div className="singlepuppy">
        <div className="puppycard">
          <div className="top-of-card">
            <h1>{singlePuppy.name}</h1>
            <h1>{singlePuppy.teamId}</h1>
          </div>
          <h2>{singlePuppy.id}</h2>
          <img src={singlePuppy.imageUrl} alt={singlePuppy.name} />
          <button onClick={() => handleReturnClick()}>Return</button>
          <button onClick={() => handleTeamClick()}>{showTeam ? 'Hide Team' : 'Show Team'}</button>
        </div>
        {showTeam && <Team /> }
      </div>
    )
  }
}