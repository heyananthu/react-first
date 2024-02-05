import React from 'react'
import './Secondone.css'

function Secondone() {
    return (
        <div class="main bg-dark">
            <button class="btn btn-danger m-4 p-2 col-sm-4 col-3">TV Shows</button>
            <button class="btn btn-danger m-3 p-2 col-sm-4 col-3">Movies</button>
            <button class="btn btn-danger dropdown-toggle m-3 p-2 col-sm-3 col-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categories
            </button>
            <ul class="dropdown-menu" data-bs-theme="dark">
                <li><a class="dropdown-item btn btn-danger" href="#">Action</a></li>
                <li><a class="dropdown-item btn btn-danger" href="#">Crime Thriller</a></li>
                <li><a class="dropdown-item btn btn-danger" href="#">Love</a></li>
            </ul>
            <div class=" row second bg-dark mt-4">
                <div class="card bg-dark  p-1 col-sm-3 col-9 mt-3">
                    <img src="https://www.tallengestore.com/cdn/shop/products/JohnWick-KeanuReeves-HollywoodEnglishActionMoviePoster-2_c927bf3a-7e64-4c67-b05f-960c2f2cd3d0.jpg?v=1649071611" class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title text-warning">John Wick</h5>
                            <p class="card-text"></p>
                            <a href="#" class="btn btn-danger">Watch Now</a>
                        </div>
                </div>
                <div class="card bg-dark  p-1 col-sm-3 col-9 mt-3">
                    <img src="https://dbdzm869oupei.cloudfront.net/img/posters/preview/91008.png" class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title text-warning">This Is The Way</h5>
                            <p class="card-text"></p>
                            <a href="#" class="btn btn-danger">Watch Now</a>
                        </div>
                </div>
                <div class="card bg-dark p-1 col-sm-3 col-9 mt-3">
                    <img src="https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/6408f6e7b5811271dc883aa8_batman-min.png" class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title text-warning">Bat Man</h5>
                            <p class="card-text"></p>
                            <a href="#" class="btn btn-danger">Watch Now</a>
                        </div>
                </div>
            </div>
            <div class=" row second bg-dark mt-4">
                <div class="card bg-dark  p-1 col-sm-3 col-9 mt-3">
                    <img src="https://www.nepal.ubuy.com/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjFCcld1MllJU0wuX0FDX1NMMTAwMF8uanBn.jpg" class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title text-warning">Star Wars</h5>
                            <p class="card-text"></p>
                            <a href="#" class="btn btn-danger">Watch Now</a>
                        </div>
                </div>
                <div class="card bg-dark  p-1 col-sm-3 col-9 mt-3">
                    <img src="https://pbs.twimg.com/media/F1RpirjWwAEHlQk.png" class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title text-warning">Oppenheimer</h5>
                            <p class="card-text"></p>
                            <a href="#" class="btn btn-danger">Watch Now</a>
                        </div>
                </div>
                <div class="card bg-dark p-1 col-sm-3 col-9 mt-3">
                    <img src="https://m.media-amazon.com/images/I/81DjxVCFBXL.jpg" class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title text-warning">Spider-Man Noir</h5>
                            <p class="card-text"></p>
                            <a href="#" class="btn btn-danger">Watch Now</a>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Secondone
