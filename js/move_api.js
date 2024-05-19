const api_key='b0ca25bc386edda423c32c33db4237a9';
const access_token ='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGNhMjViYzM4NmVkZGE0MjNjMzJjMzNkYjQyMzdhOSIsInN1YiI6IjY2NDNmZDFjMjQzZjJmZDQxOTNhODk1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uK7mVWWXAw2Wb7GYosSpmvzAExcHg83vG81OH9X8_9A';


const base_url ='https://api.themoviedb.org/3';
const get_Movies='/discover/movie';
const base_Images ='https://image.tmdb.org/t/p/w500';
const urlApi =`${base_url}/${get_Movies}?api_key=${api_key}`;
const Row= document.querySelector('.row');

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:`Bearer ${access_token}`
    }
  };
const User_input=document.querySelector('.form-control');
const Input_form=document.getElementById('Input-search');




//   const fetch = require('node-fetch');

////// All Functions 

Input_form.addEventListener('submit',(w)=>{
    w.preventDefault();
    const url = `${base_url}/search/movie?query=${this.search.value}`;
    fetch(url, options)
      .then(res => res.json())
      .then(json =>{
        console.log(json);
        json.results.map((result)=>{
            Row.innerHTML+=`
            <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                                  <div class="custom-block custom-block-overlay">
                                      <a href="detail-page.html" class="custom-block-image-wrap">
            <img src="${base_Images}${result.poster_path}" class="custom-block-image img-fluid" alt="">
                                      </a>
      
                                      <div class="custom-block-info custom-block-overlay-info">
                                          <h5 class="mb-1">
                                              <a href="listing-page.html">
                                                  ${result.original_title}
                                              </a>
                                          </h5>
      
                                          <p class="badge mb-0">50 Episodes</p>
                                      </div>
                                  </div>
                              </div>
            
            `})
        })
      .catch(err => console.error('error:' + err));
});




const fetch__Movies =async(urlApi)=>{
    const response =await(await(fetch(urlApi))).json() ;
    print__Data(response.results);
    getMovie_deteLes(response.results);
}
fetch__Movies (urlApi)

const print__Data =async(movies)=>{
    const carousel=document.querySelector('.owl-carousel');

   await movies.forEach(movie=>{
    const movie_title=(movie.original_title).split(' ').slice(0,4).join(' ');
    carousel.innerHTML+=`
    <div class="owl-carousel-info-wrap item">
    <img src="${base_Images}${movie.poster_path}" class="owl-carousel-image img-fluid" alt="">

    <div class="owl-carousel-info">
        <h6 class="mb-2">
           ${movie_title}
            <img src="images/${movie.adult ===false ?'18':'verified'}.png" class="owl-carousel-verified-image img-fluid" alt="">
        </h6>

        <span class="badge">Storytelling</span>

        <span class="badge">Release_Date ${movie.release_date}</span>
    </div>

    <div class="social-share">
        <ul class="social-icon">
            <li class="social-icon-item">
                <a href="#" class="social-icon-link bi-twitter"></a>
            </li>

            <li class="social-icon-item">
                <a href="#" class="social-icon-link bi-facebook"></a>
            </li>
        </ul>
    </div>
</div>
    `
     console.log(movie);
   })

   $('.owl-carousel').owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    autoplay: true,
    responsiveClass: true,
    responsive:{
        0:{
            items: 2,
        },
        767:{
            items: 3,
        },
        1200:{
            items: 4,
        }
    }
});
} 
const getMovie_deteLes =(moviesid)=>{
    const moVoies_deteles =document.querySelector('.latest');
    moviesid.map((movieid)=>{
        console.log(movieid.id);
        const UrlId=`https://api.themoviedb.org/3/movie/${movieid.id}`;
        

          fetch(UrlId, options)
            .then(res => res.json())
            .then(response => {
                
                console.log(response);
                moVoies_deteles.innerHTML+=`
                <div class="col-lg-6 col-12 mb-4 mb-lg-0">
                <div class="custom-block d-flex">
                    <div class="">
                        <div class="custom-block-icon-wrap">
                            <div class="section-overlay"></div>
                            <a href="detail-page.html" class="custom-block-image-wrap">
                                <img src='${base_Images}${response.poster_path}' class="custom-block-image img-fluid" alt="">

                                <a href="${response.homepage}" class="custom-block-icon">
                                    <i class="bi-play-fill">
                                    ${response.homepage}
                                    </i>
                                </a>
                            </a>
                        </div>

                        <div class="mt-2">
                            <a href="#" class="btn custom-btn">
                                Subscribe
                            </a>
                        </div>
                    </div>

                    <div class="custom-block-info">
                        <div class="custom-block-top d-flex mb-1">
                            <small class="me-4">
                                <i class="bi-clock-fill custom-icon"></i>
                                50 Minutes
                            </small>

                            <small>Episode <span class="badge">15</span></small>
                        </div>

                        <h5 class="mb-2">
                            <a href="detail-page.html">
                           ${response.original_title}
                            </a>
                        </h5>

                        <div class="profile-block d-flex">
                            <img src="${base_Images}${response.production_companies[0].logo_path}" class="profile-block-image img-fluid" alt="">

                            <p>
                                ${response.production_companies[0].name}
                                <img src="images/${response.adult ===false ?'18':'verified'}.png" class="verified-image img-fluid" alt="">
                                <strong>Influencer</strong></p>
                        </div>

                        <p style="color: rgba(0,255,0);.mb-0:hover{
                            color:black;
                            " class="mb-0">${response.overview}</p>

                        <div class="custom-block-bottom d-flex justify-content-between mt-3">
                            <a href="#" class="bi-headphones me-1">
                                <span>${response.vote_count}</span>
                            </a>

                            <a href="#" class="bi-heart me-1">
                                <span>42.5k</span>
                            </a>

                            <a href="#" class="bi-chat me-1">
                                <span>11k</span>
                            </a>

                            <a href="#" class="bi-download">
                                <span>50k</span>
                            </a>
                        </div>
                    </div>

                    <div class="d-flex flex-column ms-auto">
                        <a href="#" class="badge ms-auto">
                            <i class="bi-heart"></i>
                        </a>

                        <a href="#" class="badge ms-auto">
                            <i class="bi-bookmark"></i>
                        </a>
                    </div>
                </div>
            </div>
                `
            })
            .catch(err => console.error('error:' + err));

    })
}


