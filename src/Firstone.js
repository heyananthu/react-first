import React from 'react'
import './Firstone.css'

function Firstone() {
    return (
        <div>
            <header class="bg-dark">
                <div class="row">
                    <div class="col-sm-3 col-3">
                        <img src="https://static2.tgstat.ru/channels/_0/1f/1ff879ac97527322dc3b0ea9050c3f49.jpg"></img>
                    </div>
                    <div class="heading col-sm-6 col-6">
                        <p>Movie Flix</p>
                    </div>
                    <div class="col-sm-3 col-3 link">
                        <nav class="navbar navbar-expand-lg">
                            <div class="container-fluid">
                                <button class="navbar-toggler ml-auto bg-danger mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarNav">
                                    <ul class="navbar-nav">
                                        <li class="nav-item ">
                                            <a class="nav-link active text-info"  aria-current="page" href="#">Home</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link active text-info" href="#">Contact</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link active text-info" href="#">About</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    </div>
            </header>
        </div>
    )
}
export default Firstone
