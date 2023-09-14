import "./member2.css";

const Member2 = () => {
  return (
    <>
      <div className="wrap">
        <div className="title-wrap">
          <h1 className="title">INTJ</h1>
          <hr></hr>
        </div>

        <div className="tab">
          <ul>
            <li>
              <a>INTJ 소개</a>
            </li>
            <li>
              <a>INTJ 여기 모여라!</a>
            </li>
            <li>
              <a>다른 MBTI의 궁합은?</a>
            </li>
          </ul>
        </div>

        <div className="main-img">
          <img src="../img/intj.png"></img>
        </div>
      </div>
    </>
  );
};

export default Member2;
