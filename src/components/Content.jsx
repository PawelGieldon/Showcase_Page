import React from "react";
import { Link } from "react-router-dom";
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
        <h5>
          Jestem absolwentem studiów wyższych o kierunku informatyka. Tworzę strony internetowe z pasji oraz zwracam uwagę nawet na najmniejsze szczegóły   
        </h5>
        <img
          src="https://www.jobhopin.com/blog/wp-content/uploads/2020/01/Untitled-design-2.png"
          className="rightimg"
          alt="programista"
        ></img>
        <Link to="/Aboutme" className="nav-link " aria-current="page">
          <button type="button" class="btn btn-primary btn-animated px-4 py-2">
            WIĘCEJ O MNIE
          </button>
        </Link>
      </div>
      <div className="img-container">
        <img
          src="https://media.istockphoto.com/id/1418476287/photo/businessman-analyzing-companys-financial-balance-sheet-working-with-digital-augmented-reality.jpg?s=612x612&w=0&k=20&c=Cgdq4iCELzmCVg19Z69GPt0dgNYbN7zbAARkzNSpyno="
          className="leftimg"
          alt="wzrost biznesu"
        ></img>
        <h2>
          Chcesz zwiększyć zyski swojego biznesu?
        </h2>
      </div>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="4000">
            <h5>Chcesz zwiększyć zyski swojego biznesu?</h5>
          </div>
          <div className="carousel-item" data-bs-interval="4000">
            <h5>Dodam coś 2</h5>
          </div>
          <div className="carousel-item" data-bs-interval="4000">
            <h5>Dodam coś 3</h5>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="forms-container">
        <h5>Tutaj dodam formsy</h5>
      </div>
    </div>
  );
}

export default Content;
