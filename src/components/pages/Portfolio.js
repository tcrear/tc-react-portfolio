import React from "react";
import '../styles/portfolio.css';
import Art from "../image/art2.jpg";
import bookImage from "../image/booksearch.jpg";
import budgetImage from "../image/budget.jpg";
import fitnessImage from "../image/fitnesstracker.jpg";
import movieImage from "../image/movie1.jpg";
import schedulerImage from "../image/scheduler.jpg";

function Portfolio() {
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <a href="https://github.com/andrewtrudeau/bootcamp-project-2" target="_blank" rel="noreferrer">
                            <img src={Art} alt="art login screen" width="650" height="450"></img>
                            <p>Gary Almes Institute of Fine Art</p>
                            <a href="https://bootcamp-2nd-proj.herokuapp.com/login">Deployed App</a>
                        </a>
                    </div>
                    <div class="col">
                        <a href="https://github.com/tcrear/book-search-engine" target="_blank" rel="noreferrer">
                            <img src={bookImage} alt="book search engine" width="650" height="450"></img>
                            <p>Book Search Engine</p>
                            <a href="https://crear-book-search-engine.herokuapp.com/">Deployed App</a>
                        </a></div>
                    <div class="w-100"></div>
                    <div class="col">
                        <a href="https://github.com/tcrear/progressive-budget/" target="_blank" rel="noreferrer">
                            <img src={budgetImage} alt="budget screen view" width="650" height="450"></img>
                            <p>Progressive Budget</p>
                            <a href="https://crear-progressive-budget.herokuapp.com/">Deployed App</a>
                        </a>
                    </div>
                    <div class="col">
                        <a href="https://github.com/tcrear/fitness-tracker" target="_blank" rel="noreferrer">
                            <img src={fitnessImage} alt="fitness tracker log" width="650" height="450"></img>
                            <p>Fitness tracker</p>
                            <a href="https://crear-fitness-tracker.herokuapp.com/">Deployed App</a>
                        </a>
                    </div>
                    <div class="col">
                        <a href="https://github.com/Joe96/movies_api" target="_blank" rel="noreferrer">
                            <img src={movieImage} alt="movie app homepage" width="650" height="450"></img>
                            <p>The Movie App</p>
                            <a href="https://joe96.github.io/movies_api/">Deployed App</a>
                        </a></div>
                    <div class="w-100"></div>
                    <div class="col">
                        <a href="https://github.com/tcrear/daily-planner" target="_blank" rel="noreferrer">
                            <img src={schedulerImage} alt="work day scheduler" width="650" height="450"></img>
                            <p>Work Day Scheduler</p>
                            <a href="https://tcrear.github.io/daily-planner/">Deployed App</a>
                        </a>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Portfolio;