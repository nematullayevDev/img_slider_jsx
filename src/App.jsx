import { useState } from "react";

import "./App.css";

function App() {
  const [click, setClick] = useState();

  const clickImg = (e) => {
    setClick(e.target.src);
  };
  console.log(click);

  const next = (e) => {
    
  }
  return (
    <>
      <main className="container border">
        <div className="display border select-none">
          <div className="next-and-prev prev">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="angle-left"
              className="svg-inline--fa fa-angle-left"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
            >
              <path
                fill="currentColor"
                d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"
              ></path>
            </svg>
          </div>
          <div className="next-and-prev next" onClick={next}>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="angle-right"
              className="svg-inline--fa fa-angle-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
            >
              <path
                fill="currentColor"
                d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"
              ></path>
            </svg>
          </div>
          <img className="img-item" src={click}  alt="" />
        </div>
        <div className="img-slider">
          <img
            onClick={clickImg}
            className="img-item"
            src="./archa.jpg"
            alt=""
          />
          <img
            onClick={clickImg}
            className="img-item"
            src="./lovanda.jpg"
            alt=""
          />
          <img
            onClick={clickImg}
            className="img-item"
            src="./qizil_gul.jpg"
            alt=""
          />
          <img
            onClick={clickImg}
            className="img-item"
            src="./smal_lovanda.jpg"
            alt=""
          />
          <img
            onClick={clickImg}
            className="img-item"
            src="./yashil_ot.jpg"
            alt=""
          />
          <img onClick={clickImg} className="img-item" src="./yer.jpg" alt="" />
          <img onClick={clickImg} className="img-item" src="./car.jpg" alt="" />
          <img
            onClick={clickImg}
            className="img-item"
            src="./quyosh.jpg"
            alt=""
          />
          <img
            onClick={clickImg}
            className="img-item"
            src="./sohil.jpg"
            alt=""
          />
          <img onClick={clickImg} className="img-item" src="./tun.jpg" alt="" />
          <img onClick={clickImg} className="img-item" src="./qum.jpg" alt="" />
          <img
            onClick={clickImg}
            className="img-item"
            src="./shom.jpg"
            alt=""
          />
        </div>
      </main>
    </>
  );
}

export default App;
