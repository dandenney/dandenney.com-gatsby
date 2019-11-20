import React from 'react';

const SpotifyEmbed = ({ url }) => (
  <iframe
    src={url}
    width="300"
    height="380"
    frameborder="0"
    allowtransparency="true"
    allow="encrypted-media"
    title="Spotify embed"
  ></iframe>
);

export default SpotifyEmbed;
