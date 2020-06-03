import React from 'react';
import '../Projects/Projects.css';

var cardStyle = {
    width: "18rem"
}

function Projects() {
    return (
        <div className="container">
            <div className="row">
                <div className="card-deck mx-auto pb-4 pt-4">
                    <div className="card text-center" style={cardStyle}>
                        <div className="card-body">
                            <p className="card-title bold h2">Events with Corresponding Weather</p>
                            <p className="card-text">This website allows users to search for Eventful's most popular events in a city of their choosing.</p>
                            <a href="https://github.com/brookeparrish/project1" target="_blank" className="card-link">GitHub Repo</a>
                            <a href="https://brookeparrish.github.io/project1/" target="_blank" className="card-link">Visit Website</a>
                        </div>
                    </div>

                    <div className="card text-center" style={cardStyle}>
                        <div className="card-body">
                            <p className="card-title font-weight-bolder h2">ScrapRoom</p>
                            <p className="card-text">
                                A live chat app that allows users to "scrap" over topics of their choosing.  This app utilizes socket.io.
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br></p>
                            <a href="https://github.com/brookeparrish/Project-2" target="_blank" className="card-link">GitHub Repo</a>
                            <a href="https://new-scrap.herokuapp.com/login" target="_blank" className="card-link">Visit Website</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="card-deck mx-auto pb-2">
                    <div className="card text-center" style={cardStyle}>
                        <div className="card-body">
                            <p className="card-title font-weight-bolder h2">Options App</p>
                            <p className="card-text">This app is designed to help users learn more about alternative forms of post high school education.
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br></p>
                            <a href="https://github.com/brookeparrish/options-app" target="_blank" className="card-link">GitHub Repo</a>
                            <a href="https://proj-3-options.herokuapp.com/" target="_blank" className="card-link">Visit Website</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;