import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


export const Home = () => {

    const [search, setSearch] = useState ("")
    const [meals, setMeals] = useState ([])

    const fetchMeal = async () =>{
        const res = await fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        const json = await res.json();
        console.log(json)
        setMeals(json.meals)
    }

  return (
    <div>
        <h2>Menu</h2>
        <div className='form'>
            
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
            <button onClick={fetchMeal}>click me</button>
        </div>
        
            {meals&&meals.map((meal) =>(
                <div className='list' key={meal.idMeal}>
                    <ul>
                    <Link to={`/${meal.idMeal}`}>
                    <li>{meal.strMeal}</li>
                    </Link>
                    </ul>
                </div>
            ))}
           
        
    </div>
  )
}
