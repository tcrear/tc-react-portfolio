import React from "react";
import "../css/work.css"
import artImage from "../images/art2.jpg"
import bookImage from "../images/booksearch.jpg"
import budgetImage from "../images/budget.jpg"
import fitnessImage from "../images/fitnesstracker.jpg"
import movieImage from "../images/movie1.jpg"
import schedulerImage from "../images/scheduler.jpg"


function Portfolio() {
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <a href="https://github.com/andrewtrudeau/bootcamp-project-2" target="_blank" rel="noreferrer">
                            <img src={artImage} alt="art login screen" width="400" height="400"></img>
                            <p>Gary Almes Institute of Fine Art</p>
                            <a href="https://bootcamp-2nd-proj.herokuapp.com/login">Deployed App</a>
                        </a>
                    </div>
                    <div class="col">
                        <a href="https://github.com/tcrear/book-search-engine" target="_blank" rel="noreferrer">
                            <img src={bookImage} alt="book search engine" width="650" height="350"></img>
                            <p>Book Search Engine</p>
                            <a href="https://crear-book-search-engine.herokuapp.com/">Deployed App</a>
                        </a></div>
                    <div class="w-100"></div>
                    <div class="col">
                        <a href="https://github.com/tcrear/progressive-budget/" target="_blank" rel="noreferrer">
                            <img src={budgetImage} alt="budget screen view" width="650" height="350"></img>
                            <p>Progressive Budget</p>
                            <a href="https://crear-progressive-budget.herokuapp.com/">Deployed App</a>
                        </a>
                    </div>
                    <div class="col">
                        <a href="https://github.com/tcrear/fitness-tracker" target="_blank" rel="noreferrer">
                            <img src={fitnessImage} alt="fitness tracker log" width="650" height="350"></img>
                            <p>Fitness tracker</p>
                            <a href="https://crear-fitness-tracker.herokuapp.com/">Deployed App</a>
                        </a>
                    </div>
                    <div class="col">
                        <a href="https://github.com/Joe96/movies_api" target="_blank" rel="noreferrer">
                            <img src={movieImage} alt="movie app homepage" width="650" height="350"></img>
                            <p>The Movie App</p>
                            <a href="https://joe96.github.io/movies_api/">Deployed App</a>
                        </a></div>
                    <div class="w-100"></div>
                    <div class="col">
                        <a href="https://github.com/tcrear/daily-planner" target="_blank" rel="noreferrer">
                            <img src={schedulerImage} alt="work day scheduler" width="650" height="350"></img>
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