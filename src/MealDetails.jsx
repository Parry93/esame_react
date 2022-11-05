import { useEffect, useState } from "react"
import {  useParams } from "react-router-dom"

export function MealDetails() {


    const [meal, setmeal] = useState([])

    const {id} = useParams("id")


    async function fetchDetails() {

        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        const json = await response.json()

        setmeal({
       ...json.meals[0]
            
            
        })
    }
    useEffect(() => {
        fetchDetails()
    }, )

    return(
        <div>
        <div className="card">
        <img  width="400"src={meal.strMealThumb} alt="ciao"/>
        <h2>{meal.strMeal}</h2>
        <p>{meal.strArea}</p>
        <p>{meal.strIngredient1}</p>
        </div>
        </div>
    )
}