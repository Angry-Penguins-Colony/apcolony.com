import * as React from 'react';
import { BsArrowUpCircleFill as ScrollToTopIcon } from 'react-icons/bs';
import ScrollContainer from 'react-indiana-drag-scroll';
import ScrollToTop from 'react-scroll-to-top';
import DiscordIcon from 'components/Icon/Discord';
import ScrollDown from 'components/Icon/ScrollDown';
import { routeNames } from 'config';
import { questionsFaq } from 'texts';
import AvantageCard from './AvantageCard';
import BigTitleSlide from './BigTitleSlide';
import FaqQuestionAnswer from './FaqQuestionAnswer';
import './index.scss';
import ItemsSlider from './ItemsSlider';
import RoadMap from './RoadMap';
import TeamMember from './TeamMember';
import 'lodash';
import YoutubeVideoPlayer from './YoutubeVideoPlayer';


const Home = () => {


  return (
    <div id='home'>


      <ScrollDown id="scrollDown" />
      <ScrollToTop className="scrollToTop" smooth component={<ScrollToTopIcon />} />

      <div id="icebergHero">
        <img src="/img/Iceberg-hero-Mobile.png" className='mobile' />
        <img src="/img/Iceberg-hero.png" className='desktop' />
      </div>
      <div id="pinguinOnIceberg">
        <img src="/img/Pingouin.png" />
      </div>
      <div id="publicSale">
        <h1>CUSTOMIZE</h1>
        <div className="content">
          <a href="https://marketplace.angrypenguinscolony.com/">
            <div className='button'>
              LET&apos;S CUSTOMIZE
            </div>
          </a>
        </div>
      </div>

      <div id="welcome">
        <h2>WELCOME TO THE COLONY OF</h2>
        <img src="/img/Neon_pinguin.png" alt="ANGRY PENGUINS" />
      </div>

      <div id="ourMarketplace">
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
        <div className="slider">
          <div className="frontPenguin">
            <img src="/img/penguins/Untitled design-6.png" alt="" />
          </div>
          <ItemsSlider />
        </div>
      </div>

      <div id="technologicalInputs" className='container'>
        <img src="/img/decorations/Corail_1.png" className="decorationImage" id='deco_1' />
        <img src="/img/decorations/Fishes_2.png" className="decorationImage" id='deco_2' />
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
        <p className="subTitle">A strive to empower ambitious projects on MultiversX</p>
        <div className="submersibleAndCard container-sm">
          <div className="submersible">
            <img src="/img/Deep Sea Submersible.png" />
          </div>
          <div className="card card-white">
            <p>Once our collection is deployed and our marketplace implemented, <b>we will take on an incubator role.</b></p>
            <p><b>Participating in the construction of MultiversX is our duty.</b></p>
            <p><b>Our launchpad primarily focuses on Play-To-Earns</b> and <b>universes that add real value</b> to the MultiversX ecosystem.</p>
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
                  <p>Put us as a true player in the <b>development and growth</b> of MultiversX</p>
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
        <img src="/img/decorations/Fishes_1.png" className="decorationImage" id='deco_3' />
        <p className="preTitle">The vision behind the launchpad is based on opening up to other serious Elrond<br /> projects in order to contribute to the development of this blockchain.</p>
        <h3>QUALITY & INNOVATION ARE OUR MAIN CRITERIAS.</h3>
        <div className="bigTitle">
          <BigTitleSlide />
        </div>
        <div className="discord">
          <p>LAUNCH OF FUNDAMENTAL<br />VOTES ON OUR DISCORD.</p>
          <a className="button" href={routeNames.discord} target="_blank" rel="noopener noreferrer">
            <DiscordIcon />
            <span>JOIN NOW</span>
          </a>
        </div>
        <div className="weCreateChannel container">
          <img src="/img/decorations/Corail_1.png" className="decorationImage" id='deco_4' />
          <div className="left">
            <h2>WE&apos;VE CREATED A CHANNEL FOR ANGRY PENGUIN HOLDERS ONLY, DEDICATED TO VOTING.</h2>
            <p>Among all the votes already launched, our emperors have already decided on the name of the community, the percentage of royalties generated by the Angry Penguin Eggs, our partnership with the Global Penguin Society and the first mission realized by the association thanks to our fundraising !</p>
            <a href={routeNames.discord} target="_blank" rel="noopener noreferrer" className="button">LET’S VOTE !</a>
          </div>
          <div className="info">
            <span className='bullet'></span>
            <div className="content">Results are made public in the Penguin Agora of our discord.<br /><br /> This place is a way for holders and future holders interested in our project to stay informed about the latest news of the Angry Penguins Colony.</div>
          </div>
          <div className="right">
            <img src="/img/discord community.png" />
          </div>
        </div>
      </div>

      <div id="manyAdvantage" className='container'>
        <div className="preTitle">OWNING AN ANGRY PENGUIN ALSO<br />MEANS BEING PART OF A COLONY WITH</div>
        <h2>MANY ADVANTAGES</h2>
        <div className="content">
          <img src="/img/decorations/Fishes_1.png" className="decorationImage" id='deco_5' />
          <img src="/img/decorations/Corail_1.png" className="decorationImage" id='deco_6' />
          <img src="/img/decorations/Mossy_rock.png" className="decorationImage" id='deco_7' />
          <img src="/img/decorations/Coral_3.png" className="decorationImage" id='deco_8' />
          <AvantageCard title={'EARLY & PRIVILEGED ACCESS'} image='/img/Golden_Pinguin_ticket-Early-Access.png' imageClassName='early'>
            <p>to all projects incubated by our launchpad.</p>
          </AvantageCard>
          <AvantageCard title='PASSIVE INCOME' image='/img/Wallet_icon.png' imageClassName='wallet'>
            <p>generated by simply owning an NFT.</p>
          </AvantageCard>
          <AvantageCard title='AIRDROP OF EXCLUSIVE ACCESSORIES' image='/img/Gift_render.png' imageClassName='airdrop'>
            <p>to equip your Angry Penguins.</p>
          </AvantageCard>
          <AvantageCard title='EMPEROR RANK' image='/img/pingouin emperor.png' imageClassName='emperor'>
            <p>giving <b>different privileges</b> on our <b>discord.</b></p>
          </AvantageCard>
          <AvantageCard title='JOIN A COMMUNITY' image='/img/Comunity_Road_map.png' imageClassName='community'>
            <p>that <b>believes in Web3.0</b> and is doing everything to <b>develop it.</b></p>
          </AvantageCard>
        </div>
      </div>

      <div id="globalPenguinSociety" className='container'>
        <h2>GLOBAL PENGUIN<br /> SOCIETY</h2>
        <div className="content">
          <img src="/img/decorations/Fishes_2.png" className="decorationImage" id='deco_9' />
          <div className="weEstablished">
            <h3>We established a long-term partnership with the Global Penguin Society.</h3>
            <p>By minting our penguins, you help the organization tackle climate change, marine pollution, human disturbance and many other issues in order to protect what we love the most: penguins.</p>
          </div>
          <div className="card card-white">
            <h3>OUR ACHIEVEMENTS</h3>
            <ul>
              <li>10% of our benefits directly donated to the Global Penguin Society.</li>
              <li>More than 15,000$ (118 EGLD) already donated to the organization.</li>
              <li>Our holders voted to fund a first mission: cleaning the house of the penguins by removing plastics spread all over their colonies !</li>
            </ul>
          </div>
          <div className="video">
            <img src="/img/Association_Logo_Stamp.png" className="stamp" />
            <img src="/img/decorations/Corail_2.png" className="decorationImage" id='deco_10' />
            <img src="/img/decorations/Corail_2.png" className="decorationImage" id='deco_11' />
            <img src="/img/decorations/Corail_2.png" className="decorationImage" id='deco_12' />
            <img src="/img/decorations/Corail_1.png" className="decorationImage" id='deco_13' />
            <YoutubeVideoPlayer youtubeId="G-JCp1egb6c" />
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
        <ScrollContainer vertical={false} hideScrollbars={false} className="content">
          <RoadMap />
        </ScrollContainer>
      </div>

      <div id="theTeam" className='container'>

        <img src="/img/decorations/Coral_3.png" className="decorationImage" id='deco_14' />
        <img src="/img/decorations/Mossy_rock.png" className="decorationImage" id='deco_15' />
        <img src="/img/decorations/Corail_1.png" className="decorationImage" id='deco_16' />
        <h2>THE TEAM</h2>
        <div className="content">
          <TeamMember
            className="skipper"
            profileImage={'img/team_members/Skipper.png'}
            name={'SKIPPER'}
            description={'The mind behind the project. Some say he knows more facts about the blockchain than about his family.'}
            discordLink={routeNames.skipperDiscord}
            twitterLink={routeNames.skipperTwitter} />
          <TeamMember
            className="fargerik"
            profileImage={'img/team_members/Fargerik.png'}
            name={'Fargerik'}
            description={'The developer behind all the smart contracts of the Angry Penguins project and the marketplace as well. He comes from a game developing background.'}
            discordLink={routeNames.fargerikDiscord}
            twitterLink={routeNames.fargerikTwitter} />
          <TeamMember
            className="seymour"
            profileImage={'img/team_members/Seymour.png'}
            name={'SEYMOUR'}
            description={'Passionate about music and art, Seymour is in charge of the communication and Public relations of the Angry Penguins project.'}
            discordLink={routeNames.seymourDiscord}
            twitterLink={routeNames.seymourTwitter} />
          {/* <div className="break"></div> */}
          <TeamMember
            className="rico"
            profileImage={'img/team_members/Rico.png'}
            name={'RICO'}
            description={'Passionate about crypto, Rico also has experience in the finance area. He is in charge of managing the partnership and to develop the community.'}
            discordLink={routeNames.ricoDiscord}
            twitterLink={routeNames.ricoTwitter} />
          <TeamMember
            className="boss"
            profileImage={'img/team_members/BossQC.png'}
            name={'BossQC'}
            description={'Community relations administrator & full time gangster. Boss is in charge of the moderation of our Discord. He takes care of the activities that keep the community alive.'}
            discordLink={routeNames.bossQcDiscord}
            twitterLink={routeNames.bossQcTwitter} />
        </div>
      </div>

      <div id="faq" className='container'>
        <h2>FAQ</h2>
        <div className="content">
          <h3>About project</h3>

          {questionsFaq.map(({ question, answer }) => {
            return <FaqQuestionAnswer key={question} question={question}>
              {answer}
            </FaqQuestionAnswer>;
          })}
        </div>
      </div>
      <div id='deco_footer' >
        <img src="/img/decorations/Footer-bg.png" className="decorationImage" />
      </div>
    </div >
  );
};

export default Home;



