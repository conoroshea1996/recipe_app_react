import React from 'react';


const Recipe = ({title,calories,image,ingredients}) =>{
    return(
        <div className="cards">
            <h1>{title}</h1>
            <img src={image} alt=""/>
            <ol>{ingredients.map(ingredient =>(
                <li>{ingredient.text}</li>
            ))}</ol>
            <p>Calories: <span>{Math.round(calories)}</span></p>
        </div>
    );
}

export default Recipe;