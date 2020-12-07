import {useEffect, useState} from 'react'

function Home (){
    const [breeds, setBreeds] = useState(null)

    useEffect(() => {
        // fetch('https://dog.ceo/api/breed/hound/list'
        fetch('https://dog.ceo/api/breed/hound/list'
            )
        .then((response) => response.json())
        .then((result) => {
            setBreeds(result.message)
        })
    }, [])

    return (
        breeds && (
          <ol>
            {breeds.map((breed) => (
              <li key={breed}>{breed}</li>
            ))}
          </ol>
        )
      )
}

export default Home