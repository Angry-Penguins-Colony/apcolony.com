import * as React from 'react';
import DiscordIcon from 'components/Icon/Discord';
import AvantageCard from './AvantageCard';
import BigTitleSlide from './BigTitleSlide';
import FaqQuestionAnswer from './FaqQuestionAnswer';
import './index.scss';
import ItemsSlider from './ItemsSlider';
import TeamMember from './TeamMember';
import Timer from './Timer';
import VideoPlayer from './VideoPlayer';

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
        <div className="head container">
          <div className='title'>
            <h2>OUR MARKETPLACE</h2>
            <div className="subTitle">Customize your Angry Penguins using our marketplace !</div>
            <p>Trade accessories with other holders and try to <b>upgrade your penguin</b> with the rarest attributes !</p>
          </div>
          <div className="card card-white">
            <div>
              <div className="item">
                <img src="/img/Pinguin_hat_1.png" className='hat' />
              </div>
              <p className="desc">Equip your penguin with new skins, weapons, clothes, beak, eyes and necklaces to make it your own !</p>
            </div>
            <div>
              <div className="item">
                <img src="/img/Wallet_icon.png" className='wallet' />
              </div>
              <p className="desc">The rarest accessories generate a passive income that can be used in the marketplace to buy new ones !</p>
            </div>
            <div>
              <div className="item">
                <img src="/img/Gift-alone.png" className='gift' />
              </div>
              <p className="desc">A progressive opening of the marketplace to projects relying on customization & the use of secondary accessories via SFTs !</p>
            </div>
          </div>
        </div>
        <div className="slider">
          <div className="frontPenguin">
            <img src="/img/penguins/Untitled design-6.png" alt="" />
          </div>
          <ItemsSlider />
        </div>
      </div>

      <div id="technologicalInputs" className='container'>
        <div className="left">
          <h2>TECHNOLOGICAL INPUTS FROM OUR MARKETPLACE</h2>
          <img src="/img/APC_Technology_Icone.png" />
        </div>
        <div className="right">
          <div className="subTitle">Our launchpad will allow us to provide solutions to projects requiring the implementation of SFTs for customization & the use of secondary accessories dynamics.</div>
          <p>The sharing of this knowledge will allow, in the long run, to <b>interconnect several universes,</b> in particular by integrating them <b>into our marketplace</b> with a perspective of developing even more significant projects like <b>Play-To-Earns !</b></p>
        </div>
      </div>

      <div id="ourLaunchpad">
        <h2>OUR LAUNCHPAD</h2>
        <p className="subTitle">A strive to empower ambitious projects on Elrond</p>
        <div className="submersibleAndCard container-sm">
          <div className="submersible">
            <img src="/img/Deep Sea Submersible.png" />
          </div>
          <div className="card card-white">
            <p>Once our collection is deployed and our marketplace implemented, <b>we will take on an incubator role.</b></p>
            <p><b>Participating in the construction of Elrond is our duty.</b></p>
            <p><b>Our launchpad primarily focuses on Play-To-Earns</b> and <b>universes that add real value</b> to the Elrond ecosystem.</p>
            <p>We’ll support serious and ambitious projects in their development on the blockchain.</p>
          </div>
        </div>
        <div className="launchpadWill">
          <div className="top container-sm">
            <div className="left">
              <h2>ANGRY PENGUINS<br />LAUNCHPAD WILL :</h2>
            </div>
            <div className="right">
              <div className="item">
                <div className="number">
                  <p>01</p>
                </div>
                <div className="content">
                  <p>Put us as a true player in the <b>development and growth</b> of Elrond</p>
                </div>
              </div>
              <div className="item">
                <div className="number">
                  <p>02</p>
                </div>
                <div className="content">
                  <p>Link our collection with <b>innovative quality projects</b></p>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom container">
            <div className="card card-white">
              <h3>BENEFITS FOR ANGRY PENGUINS HOLDERS</h3>
              <ul>
                <li>After our screening, they have the final say in selecting quality projects</li>
                <li>They get early access to these projects</li>
                <li>Their NFTs will be usable in the incubated games/universes</li>
              </ul>
            </div>
            <div className="card card-blue">
              <h3>BENEFITS FOR INCUBATED PROJECTS</h3>
              <ul>
                <li>Personalized & preferential place in our marketplace</li>
                <li>Technical help for their development needs on the blockchain</li>
                <li>Time saving to focus on the development of their games/universe, less on the technical implementation (SC, dapps…)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div id="ourCommunity" className="container-xl">
        <p className="preTitle">The vision behind the launchpad is based on opening up to other serious Elrond<br /> projects in order to contribute to the development of this blockchain.</p>
        <h3>QUALITY & INNOVATION ARE OUR MAIN CRITERIAS.</h3>
        <div className="bigTitle">
          <BigTitleSlide />
        </div>
        <div className="discord">
          <p>LAUNCH OF FUNDAMENTAL<br />VOTES ON OUR DISCORD.</p>
          <a className="button" href='TODO: add discord link'>
            <DiscordIcon />
            <span>JOIN NOW</span>
          </a>
        </div>
        <div className="weCreateChannel container">
          <div className="left">
            <h2>WE&apos;VE CREATED A CHANNEL FOR ANGRY PENGUIN HOLDERS ONLY, DEDICATED TO VOTING.</h2>
            <p>Among all the votes already launched, our emperors have already decided on the name of the community, the percentage of royalties generated by the Angry Penguin Eggs, our partnership with the Global Penguin Society and the first mission realized by the association thanks to our fundraising !</p>
            <a href="TODO: add link" className="button">LET’S VOTE !</a>
            <div className="info">
              <span className='bullet'></span>
              <div className="content">Results are made public in the Penguin Agora of our discord. This place is a way for holders and future holders interested in our project to stay informed about the latest news of the Angry Penguins Colony.</div>
            </div>
          </div>
          <div className="right">
            {/* TODO: */}
          </div>
        </div>
      </div>

      <div id="manyAdvantage" className='container'>
        <div className="preTitle">OWNING AN ANGRY PENGUIN ALSO<br />MEANS BEING PART OF A COLONY WITH</div>
        <h2>MANY ADVANTAGES</h2>
        <div className="content">
          <AvantageCard title='EMPEROR RANK' image='/img/pingouin emperor.png' imageClassName='emperor'>
            <p>giving <b>different privileges</b> on our <b>discord.</b></p>
          </AvantageCard>
          <AvantageCard title='PASSIVE INCOME' image='/img/Wallet_icon.png' imageClassName='wallet'>
            <p>generated by simply owning an NFT.</p>
          </AvantageCard>
          <AvantageCard title='AIRDROP OF EXCLUSIVE ACCESSORIES' image='/img/Gift_render.png' imageClassName='airdrop'>
            <p>to equip your Angry Penguins.</p>
          </AvantageCard>
          <AvantageCard title={'EARLY & PRIVILEGED ACCESS'} image='/img/Golden_Pinguin_ticket-Early-Access.png' imageClassName='early'>
            <p>to all projects incubated by our launchpad.</p>
          </AvantageCard>
          <AvantageCard title='JOIN A COMMUNITY' image='/img/Comunity_Road_map.png' imageClassName='community'>
            <p>that <b>believes in Web3.0</b> and is doing everything to <b>develop it.</b></p>
          </AvantageCard>
        </div>
      </div>

      <div id="globalPenguinSociety" className='container'>
        <h2>GLOBAL PENGUIN<br /> SOCIETY</h2>
        <div className="content">
          <div className="weEstablished">
            <h3>We established a long-term partnership with the Global Penguin Society.</h3>
            <p>By minting our penguins, you help the organization tackle climate change, marine pollution, human disturbance and many other issues in order to protect what we love the most: penguins.</p>
          </div>
          <div className="card card-white">
            <h3>OUR ACHIEVEMENTS</h3>
            <ul>
              <li>10% of our benefits directly donated to the Global Penguin Society.</li>
              <li>More than 15,000$ (117 EGLD) already donated to the organization.</li>
              <li>Our holders voted to fund a first mission: cleaning the house of the penguins by removing plastics spread all over their colonies !</li>
            </ul>
          </div>
          <div className="video">
            <VideoPlayer videoSource="/video/GPS Institutional Clip.mp4" thumbnail="/img/GPS Institutional Clip_thumbnail.jpg" />
          </div>
          <div className="globalPoint develop">
            <div className="title">
              <div className="number">01</div>
              <h3>DEVELOP</h3>
            </div>
            <p className="content">
              sound science to use in the conservation of penguins and marine environments at local, regional, and global scales.
            </p>
          </div>
          <div className="globalPoint identity">
            <div className="title">
              <div className="number">02</div>
              <h3>IDENTIFY</h3>
            </div>
            <p className="content">
              priority areas for the conservation of penguins and their ecosystems, propose and implement guidelines for their protection.
            </p>
          </div>
          <div className="globalPoint educate">
            <div className="title">
              <div className="number">03</div>
              <h3>EDUCATE</h3>
            </div>
            <p className="content">
              communities and decision makers about the importance of penguins and their habitats, aiming at achieving lasting behavioral changes.
            </p>
          </div>
          <div className="globalPoint influence">
            <div className="title">
              <div className="number">04</div>
              <h3>INFLUENCE</h3>
            </div>
            <p className="content">
              the establishment, implementation, and effectiveness of public and private conservation policies
            </p>
          </div>
          <div className="moreInfo">
            <h3>FOR MORE INFORMATION VISIT THEIR WEBSITE</h3>
            <a href='https://globalpenguinsociety.org/' target='_blank' rel="noreferrer" className="button">GLOBALPENGUINSOCIETY.ORG</a>
          </div>
        </div>
      </div>

      <div id="roadMap">
        <h2>ROAD MAP</h2>
        <div className="content">
          <img src="/img/roadmap/Blue_line.svg" className='blue_line' />
          <img src="/img/roadmap/White_doted_line.svg" className='white_doted_line' />
          <img src="/img/roadmap/APC_COIN.svg" className='coin coin_1' />
          <img src="/img/roadmap/APC_COIN.svg" className='coin coin_2' />
          <img src="/img/roadmap/APC_COIN.svg" className='coin coin_3' />
          <img src="/img/roadmap/APC_COIN.svg" className='coin coin_4' />
          <img src="/img/roadmap/APC_COIN.svg" className='coin coin_5' />
          <img src="/img/roadmap/APC_COIN.svg" className='coin coin_6' />
          <img src="/img/roadmap/APC_COIN.svg" className='coin coin_7' />
          <img src="/img/roadmap/APC_COIN.svg" className='coin coin_8' />
          <img src="/img/roadmap/APC_COIN.svg" className='coin coin_9' />
          <img src="/img/roadmap/APC_COIN.svg" className='coin coin_little coin_10' />
          <img src="/img/roadmap/APC_COIN.svg" className='coin coin_little coin_11' />
          <img src="/img/roadmap/APC_COIN.svg" className='coin coin_little coin_12' />
          <img src="/img/roadmap/APC_COIN.svg" className='coin coin_little coin_13' />
          <img src="/img/roadmap/APC_COIN.svg" className='coin coin_little coin_14' />
          <img src="/img/roadmap/APC_COIN.svg" className='coin coin_little coin_15' />
          <img src="/img/roadmap/coin_1.png" className='img_coin img_coin_1' />
          <img src="/img/roadmap/coin_2.png" className='img_coin img_coin_2' />
          <img src="/img/roadmap/coin_3.png" className='img_coin img_coin_3' />
          <img src="/img/roadmap/coin_4.png" className='img_coin img_coin_4' />
          <img src="/img/roadmap/coin_5.png" className='img_coin img_coin_5' />
          <img src="/img/roadmap/coin_6.png" className='img_coin img_coin_6' />
          <img src="/img/roadmap/coin_7.png" className='img_coin img_coin_7' />
          <img src="/img/roadmap/coin_8.png" className='img_coin img_coin_8' />
          <img src="/img/roadmap/coin_9.png" className='img_coin img_coin_9' />
          <img src="/img/roadmap/coin_10.png" className='img_coin img_coin_10' />
          <img src="/img/roadmap/coin_11.png" className='img_coin img_coin_11' />
          <img src="/img/roadmap/coin_12.png" className='img_coin img_coin_12' />
          <img src="/img/roadmap/coin_13.png" className='img_coin img_coin_13' />
          <img src="/img/roadmap/coin_14.png" className='img_coin img_coin_14' />
          <img src="/img/roadmap/coin_15.png" className='img_coin img_coin_15' />
          <p className='text text_1'><b>A first free presale of 100 penguins SOLD OUT in 54 seconds.</b><br />The first 100 colony emperors are born & receive Angry Penguins Eggs that will hatch after the public sale</p>
          <p className='text text_2'><b>Announcing the first customizable collection</b> on Elrond via the purchase and resale of penguin accessories, a feature available through the creation of our own marketplace.</p>
          <p className='text text_3'><b>500 eggs SOLD OUT in one evening during presale 1.</b></p>
          <p className='text text_4'><b>Launch of the discord votes</b> for the emperors to determine the future of the project, the results are published in the penguin-agora.</p>
          <p className='text text_5'><b>Community vote</b> to choose <b>the design of the Angry Penguin Eggs</b> and <b>the royalties they generate</b></p>
          <p className='text text_6'><b>The first 600 Prime emperors receive their eggs</b><br /> (Prime emperors = people who bought eggs during the first presale) and wait for them to hatch after the public sale</p>
          <p className='text text_7'><b>2000 eggs SOLD OUT in less than 5 minutes during presale 2.</b></p>
          <p className='text text_8'><b>First donation made to the Global Penguin Society</b> in order to clean up penguin colonies from plastic waste.</p>
          <p className='text text_9'></p>
          <p className='text text_10'><b>Birth of the Angry Penguins</b> Hatching of the eggs 1 week after the public sale & launch of the Angry Penguins.</p>
          <p className='text text_11'><b>Launch of our marketplace</b> allowing the purchase and sale of our penguins, but especially the purchase of attributes to customize them.</p>
          <p className='text text_12'><b>Surprise drop with the Global Penguin Society.</b></p>
          <p className='text text_13'><b>Launch of our token:</b><br /> some penguins start to generate a passive income depending on the rarity of their attributes that will be used initially to buy attributes to customize the penguins.</p>
          <p className='text text_14'><b>Deployment of Angry Penguins’ Launchpad.</b></p>
          <p className='text text_15'><b>Coming soon…</b></p>

          <img src='/img/roadmap/public_sale.svg' className="publicSale"></img>

        </div>
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

      <div id="faq" className='container'>
        <h2>FAQ</h2>
        <div className="content">
          {/* TODO: replace lorem ipsum */}
          {/* TODO: replace fake question by real */}
          <FaqQuestionAnswer question={'WHAT\'S AN NFT ?'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          </FaqQuestionAnswer>
          <FaqQuestionAnswer question={'WHAT\'S AN NFT ?'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          </FaqQuestionAnswer>
          <FaqQuestionAnswer question={'WHAT\'S AN NFT ?'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          </FaqQuestionAnswer>
          <FaqQuestionAnswer question={'WHAT\'S AN NFT ?'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          </FaqQuestionAnswer>
        </div>
      </div>

      {/* TODO: add coral */}
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