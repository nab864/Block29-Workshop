import { useState } from "react"


export default function Team() {
  const [team, setTeam] = useState()

  useEffect(() => {
    const fetchSinglePuppy = async (puppyID) => {
      const response = await fetch(`${apiUrl}/${puppyID}`)
      const result = await response.json()
      setSinglePuppy(result.data.player)
    }
    fetchSinglePuppy()
  }, [singlePuppy])

  return (
    <div className="team">
      <h1>Team</h1>
    </div>
  )
}