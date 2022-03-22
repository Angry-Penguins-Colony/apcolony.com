import * as React from 'react';
import './index.scss';
import TeamMember from './TeamMember';
import Timer from './Timer';

enum SaleStatus {
  Soon = 0,
  OnSale = 1,
  SoldOut = 2
}

const Home = () => {

  const saleInfos = getSaleInfos();

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
            saleInfos.status == SaleStatus.Soon &&
            <>
              <Timer date={saleInfos.date} />
              <div className="button connectWallet">CONNECT WALLET</div>
              {/* TODO: bind button */}
            </>
          }
          {
            saleInfos.status == SaleStatus.OnSale &&
            <>
              <h2>TIME REMAINING</h2>
              <Timer date={saleInfos.date} />
              <div className='mint'>
                <div className="nftLeft">{saleInfos.nftLeft}/10 000</div>
                <div className="button mintNow">MINT NOW</div>
                {/* TODO: bind button */}
              </div>
            </>
          }
          {
            saleInfos.status == SaleStatus.SoldOut &&
            <div className="semiBanner">
              <p>SOLD OUT</p>
            </div>
          }
        </div>
        <div className="saleInfos">
          <p>PUBLIC SALE INFOS</p>
          <span className="icon">?</span>
        </div>
      </div>

      <div id="welcome">
        <h2>WELCOME TO THE COLONY OF</h2>
        <img src="/img/Neon_pinguin.png" alt="ANGRY PENGUINS" />
      </div>

      <div id="ourMarketplace">
        {/* TODO: */}
      </div>

      <div id="ourLaunchpad">
        {/* TODO: */}
      </div>

      <div id="ourCommunity">
        {/* TODO: */}
      </div>

      <div id="manyAdvantage">
        {/* TODO: */}
      </div>

      <div id="globalPenguinSociety">
        {/* TODO: */}
      </div>

      <div id="roadMap">
        {/* TODO: */}
      </div>

      <div id="theTeam" className='container'>
        <h2>THE TEAM</h2>
        <div className="content">
          <TeamMember profileImage={'img/team_members/Skipper.png'} name={'SKIPPER'} description={'The mind behind the project. Some say he knows more facts about the blockchain than about his family.'} discordLink='TODO: add link' twitterLink='TODO: add link' />
          <TeamMember profileImage={'img/team_members/Fargerik.png'} name={'FARGERIK'} description={'The developer behind all the smart contracts of the Angry Penguins project and the marketplace as well. He comes from a game developing background.'} discordLink='TODO: add link' twitterLink='TODO: add link' />
          <TeamMember profileImage={'img/team_members/Seymour.png'} name={'SEYMOUR'} description={'The mind behind the project. Passionate about music and art, Seymour is in charge of the communication and Public relations of the Angry Penguins project.'} discordLink='TODO: add link' twitterLink='TODO: add link' />
          <TeamMember profileImage={'img/team_members/Rico.png'} name={'RICO'} description={'Passionate about crypto, Rico also has experience in the finance area. He is in charge of managing the partnership and to develop the community.'} discordLink='TODO: add link' twitterLink='TODO: add link' />
        </div>
      </div>

      <div id="faq">
        {/* TODO: */}
      </div>

      {/* TODO: add coral */}

      <div style={{ height: '1600px' }}></div>
      {/* TODO: remove end padding */}
    </div>
  );
};

export default Home;



interface saleInfos {
  status: SaleStatus,
  date: Date,
  nftLeft: number
}

function getSaleInfos(): saleInfos {
  // get random status (for dev only) TODO: remove and replace by api call
  const tmp = Math.floor(Math.random() * 3); // TODO: get this value by api call

  switch (tmp) {
    case SaleStatus.SoldOut:
      return {
        status: SaleStatus.SoldOut,
        date: new Date(),
        nftLeft: 200 // TODO: get this value by api call
      };
      break;
    case SaleStatus.OnSale:
      return {
        status: SaleStatus.OnSale,
        date: new Date('2022-04-14T00:00:00.000Z'), // TODO: get this value by api call
        nftLeft: 200 // TODO: get this value by api call
      };
      break;
    case SaleStatus.Soon:
      return {
        status: SaleStatus.Soon,
        date: new Date('2022-04-14T00:00:00.000Z'), // TODO: get this value by api call
        nftLeft: 200 // TODO: get this value by api call
      };
      break;

    default:
      // TODO: change default value
      return {
        status: SaleStatus.SoldOut,
        date: new Date(),
        nftLeft: 200 // TODO: get this value by api call
      };
  }
}