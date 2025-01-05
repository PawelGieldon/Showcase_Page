import React from "react";

function Content() {
  return (
    <div>
      <div className="introduction">
        <h1>
          Nazywam się Paweł i tworzę strony internetowe wizytówki za
          ekstremalnie tanią cenę
        </h1>
      </div>
      <div className="second-img-container">
        <h2>
          Tutaj też będzie jakiś
          teksthhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
        </h2>
        <img
          src="https://www.jobhopin.com/blog/wp-content/uploads/2020/01/Untitled-design-2.png"
          className="rightimg"
          alt="programista"
        ></img>
      </div>
      <div className="img-container">
        <img
          src="https://imgproxy.divecdn.com/5wYoZzVDsgNPU17MBJKOl1OA9xxNU61Smgytvp_p4nU/g:ce/rs:fill:1200:675:1/Z3M6Ly9kaXZlc2l0ZS1zdG9yYWdlL2RpdmVpbWFnZS9HZXR0eUltYWdlcy0xMzQ3MjQ5MDU5LmpwZw==.webp"
          className="leftimg"
          alt="uścisk dłoni"
        ></img>
        <h2>
          Tutaj będzie jakiś
          tekstgfhgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg
        </h2>
      </div>
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <h5>Pierwszy tekst, później coś dodam</h5>
          </div>
          <div class="carousel-item">
            <h5>Też coś potem dodam</h5>
          </div>
          <div class="carousel-item">
            <h5>Będzie dodane</h5>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Content;
