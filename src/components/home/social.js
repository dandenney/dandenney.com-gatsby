import React from 'react';

import { SocialLinks } from 'components/home/socialStyles.js';

import Icon from 'components/icon';

import IconCodepen from 'images/icons/logo-codepen.svg';
import IconGithub from 'images/icons/logo-github.svg';
import IconTwitter from 'images/icons/logo-twitter.svg';
import IconInstagram from 'images/icons/logo-instagram.svg';
import IconPinterest from 'images/icons/logo-pinterest.svg';
import IconSpotify from 'images/icons/logo-spotify.svg';

const Social = () => (
  <SocialLinks>
    <p>I get around on the socials:</p>

    <div className="socialLinks">
      <a href="https://codepen.io/dandenney">
        <Icon size={24} color="#131417" svg={<IconCodepen />} />
      </a>
      <a href="https://github.com/dandenney">
        <Icon size={24} color="#171515" svg={<IconGithub />} />
      </a>
      <a href="https://twitter.com/dandenney">
        <Icon size={24} color="#1ca1f2" svg={<IconTwitter />} />
      </a>
      <a href="https://www.pinterest.com/dandenney">
        <Icon size={24} color="#e60022" svg={<IconPinterest />} />
      </a>
      <a href="https://www.instagram.com/dandenney">
        <Icon size={24} color="#df4856" svg={<IconInstagram />} />
      </a>
      <a href="https://open.spotify.com/user/dndnny?si=67GhhUvBSO-zRzvbIimEgA">
        <Icon size={24} color="#1dd761" svg={<IconSpotify />} />
      </a>
    </div>
  </SocialLinks>
);

export default Social;
