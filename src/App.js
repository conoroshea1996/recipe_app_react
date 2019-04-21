import React ,{useEffect,useState} from 'react';
import Recipe from './Recipe';
import './App.css';


const App = () =>{
  const APP_ID ="c4f0218a";
  const App_KEY = "f6d89edd05b2b6fdd7e0a0b07c803f38";
  
const [recipes, setRecipes] = useState([]);
const [search,setSearch] =useState("");
const [query,setQuery]= useState('cake');

  useEffect(()=>{
    getRecipes();
  },[query]);

  const getRecipes = async ()=>{
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${App_KEY}`);
      const data = await response.json();
      setRecipes(data.hits);
    };

    const updateSearch = e =>{
      setSearch(e.target.value);
    };
    const getSearch = e =>{
      e.preventDefault();
      setQuery(search)
    }

  return(
    <div className='App'>
    <form onSubmit={getSearch} className="search-form">
      <input className="search-bar" type="text" value={search} onChange={updateSearch} />
      <button className="search-btn" type="submit"> Search </button>
    </form>
    <div className="grid">
    {recipes.map(recipe =>(
      <article>
      <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} 
      image={recipe.recipe.image}
      ingredients={recipe.recipe.ingredients} />
      </article>
    ))}
     </div>
    </div>
  );
}

export default App;
