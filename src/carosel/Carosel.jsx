import React from 'react';

const Carosel = () => {
    return (
        <>
        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-vector/sun-protection-cosmetic-vector-realistic-ads-poster_88138-244.jpg?t=st=1710667754~exp=1710671354~hmac=1172e74ce82331bfb45c111aada94531d2e92eb369923bd29a66a77606b6757e&w=1380" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-vector/set-two-cosmetic-containers-golden-podium-one-near-by-with-place-text_1268-15462.jpg?t=st=1710667876~exp=1710671476~hmac=166c3268c67021ebc068c0295b0bdb8e905e1de5690d827802eae90afeb87173&w=1060" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-vector/realistic-beauty-sale-ad-template_52683-20023.jpg?t=st=1710667971~exp=1710671571~hmac=ec1e72b1b012ed241291277d7679fc59d21c4db5f65991071b82ffdc06dbc033&w=996" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-vector/cosmetic-banner-template_23-2148931689.jpg?t=st=1710668132~exp=1710671732~hmac=6b22d7b96ec0999ea64cc924de4c2e8cf21496ea8062b3e5701ab293a43ad727&w=996" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </>
    );
};

export default Carosel;