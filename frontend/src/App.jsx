import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Pizza from './Pizza'
import Footer from './Footer'

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('/api/pizza-data').then((response) => {
      if(response.data.length > 0){
        setData(response.data)
      }
    }).catch((err) => {console.log(err)})
  },[])

  console.log(data)

  return (
    <>
    <div className="container">
        <Header />
        <main className="menu">
          <h2>Our Menu</h2>
          {data.length > 0 ? 
          <>
          <p>Authentic Intalian cuisin. {data.length} creative dishes to choose from. All form out stone over, all organic all delicious.</p>
          <ul className="pizzas">
              {data.map(pizza => <Pizza key={pizza.name} {...pizza} />)}
          </ul> </> : <p>We are still working on our menu. Please come back later 🙂</p>
          }
        </main>
        
        <Footer />
        </div>
    </>
  )
}
function Header() {
  return <header className="header"><h1>Fast React Pizza Co.</h1></header>
}

export default App
