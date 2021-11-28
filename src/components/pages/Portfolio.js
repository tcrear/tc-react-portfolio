import React from "react";
import '../styles/portfolio.css';
import Art from "../image/art2.jpg";
import Book from "../image/booksearch.jpg";
import Budget from "../image/budget.jpg";
import Fitness from "../image/fitnesstracker.jpg";
import Movie from "../image/movie1.jpg";
import Scheduler from "../image/scheduler.jpg";
// import Button from 'react-bootstrap/Button'

function Portfolio() {
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col">
                         <div class="w-100">
                            <h3>Gary Almes Institute of Fine Art</h3>
                            <img src={Art} alt="art login screen" width="500" height="250"></img>
                            <a href="https://github.com/andrewtrudeau/bootcamp-project-2" target="_blank" rel="noreferrer"><br></br>
                            <button id="linkButton" a href="https://github.com/andrewtrudeau/bootcamp-project-2">GitHub</button>
                            </a>
                            <a href="https://bootcamp-2nd-proj.herokuapp.com/login" target="_blank" rel="noreferrer">
                            <button id="linkButton" a href="https://bootcamp-2nd-proj.herokuapp.com/login">Deployed App</button>
                            </a>
                        </div>
                        <div class="w-100">
                            <h3>Book Search Engine</h3>
                            <img src={Book} alt="book search engine" width="500" height="250"></img>
                            <a href="https://github.com/tcrear/book-search-engine" target="_blank" rel="noreferrer"><br></br>
                            <button id="linkButton" a href="https://github.com/tcrear/book-search-engine">GitHub</button>
                            </a>
                            <a href="https://crear-book-search-engine.herokuapp.com/" target="_blank" rel="noreferrer">
                            <button id="linkButton" a href="https://crear-book-search-engine.herokuapp.com/">Deployed App</button>
                            </a>
                        </div>
                        <div class="w-100">
                            <h3>Progressive Budget</h3>
                            <img src={Budget} alt="budget screen" width="500" height="250"></img>
                            <a href="https://github.com/tcrear/progressive-budget/" target="_blank" rel="noreferrer"><br></br>
                            <button id="linkButton" a href="https://github.com/tcrear/progressive-budget/">GitHub</button>
                            </a>
                            <a href="https://crear-progressive-budget.herokuapp.com/" target="_blank" rel="noreferrer">
                            <button id="linkButton" a href="https://crear-progressive-budget.herokuapp.com/">Deployed App</button>
                            </a>
                        </div>
                        <div class="w-100">
                            <h3>Fitness Tracker</h3>
                            <img src={Fitness} alt="fitness tracker log" width="500" height="250"></img>
                            <a href="https://github.com/tcrear/fitness-tracker" target="_blank" rel="noreferrer"><br></br>
                            <button id="linkButton" a href="https://github.com/tcrear/fitness-tracker">GitHub</button>
                            </a>
                            <a href="https://crear-fitness-tracker.herokuapp.com/" target="_blank" rel="noreferrer">
                            <button id="linkButton" a href="https://crear-fitness-tracker.herokuapp.com/">Deployed App</button>
                            </a>
                        </div>
                        <div class="w-100">
                            <h3>The Movie App</h3>
                            <img src={Movie} alt="movie log" width="500" height="250"></img>
                            <a href="https://github.com/Joe96/movies_api" target="_blank" rel="noreferrer"><br></br>
                            <button id="linkButton" a href="https://github.com/Joe96/movies_api">GitHub</button>
                            </a>
                            <a href="https://joe96.github.io/movies_api/" target="_blank" rel="noreferrer">
                            <button id="linkButton" a href="https://joe96.github.io/movies_api/">Deployed App</button>
                            </a>
                        </div>
                        <div class="w-100">
                            <h3>Daily Planner</h3>
                            <img src={Scheduler} alt="daily planner log" width="500" height="250"></img>
                            <a href="https://github.com/tcrear/daily-planner" target="_blank" rel="noreferrer"><br></br>
                            <button id="linkButton" a href="https://github.com/tcrear/daily-planner">GitHub</button>
                            </a>
                            <a href="https://tcrear.github.io/daily-planner/" target="_blank" rel="noreferrer">
                            <button id="linkButton" a href="https://tcrear.github.io/daily-planner/">Deployed App</button>
                            </a>
                        </div>
                    </div> 
                 </div>
            </div>
        </div>
    )   
}

export default Portfolio;