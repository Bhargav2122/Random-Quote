import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [quote, setQuote] = useState("When you UnderStand the game don't panic.")
  const [loading, setLoading] = useState(false);
   const fetchQuote = () => {
    setLoading(true)
     fetch('https://dummyjson.com/quotes?limit=1000')
     .then((res) => res.json())
     .then((data) => {
      const randomQuote = data.quotes[Math.floor(Math.random() * data.quotes.length)];
        setQuote(randomQuote.quote)
        setLoading(false)
     })
   }
  const handleClick = () => {
      fetchQuote();
  }
  return (
    <>
       <div className='bg-custom-image bg-no-repeat bg-cover h-screen flex justify-center items-center'>
            <div className=" bg-[rgba(2,2,2,0.58)] w-[440px] h-auto p-10 rounded-2xl flex justify-center items-center flex-col "> 
            {loading ? (
            <p className="text-white">Loading...</p> // Loading text or spinner here
          ) : (
            <>
              <p className='text-[1.5rem] text-white font-custom'>{quote}</p>
              <button 
                onClick={handleClick} 
                className='bg-[rgba(255,255,255,0.87)] text-black rounded-[15px] p-2 w-[150px] m-[20px]'
              >
                New Quote
              </button>
            </>
          )}
            </div>  
       </div>
    </>
  )
}

export default App
