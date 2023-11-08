import Directory from './components/directory/Directory'

function App() {

  const categories = [
    {
      "title": "Hats",
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      "title": "Jackets",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      "title": "Sneakers",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      "title": "Women\'s",
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      "title": "Men\'s",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
    }
  ]


  return (
    <Directory categories={categories} />
  )
}

export default App
