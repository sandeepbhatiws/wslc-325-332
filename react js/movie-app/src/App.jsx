import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {

    const [movies, setMovies] = useState([]);
    var [currentPage, setCurrentPage] = useState(1);


    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/discover/movie',{
            params : {
                sort_by :'popularity.desc',
                api_key : '04c35731a5ee918f014970082a0088b1',
                page : currentPage
            }
        })
        .then((response) => {
            setMovies(response.data.results);
        })
        .catch((error) => {
            
        })
    },[currentPage]);

    const previous = () => {
        if(currentPage > 1){
            currentPage--;
            setCurrentPage(currentPage);
        }
    }

    const next = () => {
        currentPage++
        setCurrentPage(currentPage);
    }

    return (
        <>
            <div class="row">
                <div class="heading">
                    <h1>Movie Listings</h1>
                </div>
                <div class="products" id="products">
                    {
                        movies.map((v,i) => {
                            return(
                                <div class="product-box">
                                    <div class="product_image">
                                        <img src={ `https://image.tmdb.org/t/p/w1280${v.poster_path}` } />
                                    </div>
                                    <div class="product_section">
                                        <h2>{ v. original_title} (Rating : { v.vote_average })</h2>
                                        <p>{ v.overview } </p>
                                    </div>
                                </div>
                            );
                        })
                    }
                    
                </div>

                <div className='button'>
                    <button onClick={ previous }>Previous</button>
                    <button onClick={ next }>Next</button>
                </div>
            </div>
        </>
    )
}

export default App
