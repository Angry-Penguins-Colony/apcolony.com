import * as React from 'react';
import './index.scss';

const Home = () => {

  const isSoldout = true; // TODO: get this value by api call

  return (
    <div id='home'>
      <div id="icebergHero">
        <img src="/img/Iceberg-hero.png" />
      </div>
      <div id="pinguinOnIceberg">
        <img src="/img/Pingouin.png" />
      </div>
      <div id="publicSale">
        <h1>PUBLIC SALE</h1>
        <div className="content">
          {
            isSoldout ?
              <div className="semiBanner">
                <p>SOLD OUT</p>
              </div>
              :
              <div>
                pas SOLd out
                {/* TODO: */}
              </div>
          }
        </div>
        <div className="saleInfos">
          <p>PUBLIC SALE INFOS</p>
          <span className="icon">?</span>
        </div>
      </div>
      <div style={{ height: '800px' }}></div>
    </div>
  );
};

export default Home;
