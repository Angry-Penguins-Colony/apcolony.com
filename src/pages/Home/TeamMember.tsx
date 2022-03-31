import * as React from 'react';
import DiscordIcon from 'components/Icon/Discord';
import TwitterIcon from 'components/Icon/Twitter';
import styles from './teamMember.module.scss';

const TeamMember = (props: {
    profileImage: string;
    name: string;
    description: string;
    discordLink?: string;
    twitterLink?: string;
    className?: string;
}) => {
    const profileImage = props.profileImage;
    const name = props.name;
    const description = props.description;
    const discordLink = props.discordLink || '';
    const twitterLink = props.twitterLink || '';

    return (
        <div className={styles.teamMember + ' ' + props.className || ''}>
            <img src={profileImage} />
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.description}>{description}</p>
            <div className={styles.social}>
                {discordLink && <a href={discordLink} target="_blank" rel="noopener noreferrer" className='button button-outline icon' ><DiscordIcon /> </a>}
                {twitterLink && <a href={twitterLink} target="_blank" rel="noopener noreferrer" className='button button-outline icon' ><TwitterIcon /> </a>}
            </div>
        </div>
    );
};

export default TeamMember;