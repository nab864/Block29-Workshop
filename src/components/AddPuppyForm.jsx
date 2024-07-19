import { useNavigate } from "react-router-dom"

const apiUrl = "https://fsa-puppy-bowl.herokuapp.com/api/2404-FTB-MT-WEB-PT/players"

export default function AddPuppyForm() {
  const navigate = useNavigate()

  const onSubmit = async (e) => {
    e.preventDefault()
    console.log(e.target.name.value)
    const response = await fetch(apiUrl, {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: e.target.name.value,
        breed: e.target.breed.value,
        status: e.target.status.value,
        imageUrl: e.target.image.value,
        teamId: e.target.teamid.value,
      })
    })
    navigate('/allpuppies')
  }

  return (
    <div className="form-container">
      <h1>Add a Puppy</h1>
      <form className="addpuppyform" onSubmit={onSubmit}>
        <label>
          Name : <input type="text" name="name"></input>
        </label>
        <label>
          Breed : <input type="text" name="breed"></input>
        </label>
        <label>
          Status : <input type="text" name="status"></input>
        </label>
        <label>
          Image : <input type="text" name="image"></input>
        </label>
        <label>
          Team ID : <input type="text" name="teamid"></input>
        </label>
      <button>Submit</button>
      </form>
    </div>
  )
}