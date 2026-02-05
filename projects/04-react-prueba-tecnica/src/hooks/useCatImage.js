import { useState, useEffect } from "react"

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState()
  // para recupera la imagen cada vez que tenemos una cita nueva
  useEffect(() => {
    if (!fact) return
    const threefirtsWords = fact.split(' ', 3).join(' ')
    console.log(threefirtsWords)

    fetch(`https://cataas.com/cat/says/${threefirtsWords}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        console.log(url)
        setImageUrl(url)
      })
  }, [fact])

  return { imageUrl }
}
