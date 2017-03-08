import React, { Component } from 'react';

const giphyIndexItems = (giphys) => {
  console.log(giphys);
  if (giphys){
    return giphys.map((giphy, idx) => (
        <li key={idx}>
          <img src={giphy.images.fixed_width.url} />
        </li>
      )
    );
  } else {
    return ("");
  }
};

class GiphysIndex extends React.Component {
  render(){
    const { giphys } = this.props;
    return(
      <ul>
        {giphyIndexItems(giphys)}
      </ul>
    );
  }
}

export default GiphysIndex;
