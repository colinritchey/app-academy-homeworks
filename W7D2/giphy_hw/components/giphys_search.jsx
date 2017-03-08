import React, { Component } from 'react';

import GiphysIndex from './giphys_index';

class GiphysSearch extends React.Component {
  constructor(props){
    super(props);
    this.state = {searchTerm: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    e.preventDefault();
    this.setState({searchTerm: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.fetchSearchGiphys(this.state.searchTerm);
  }

  render(){
    let { giphys } = this.props;
    return(
      <div>
        <form>
          <input value={this.state.searchTerm} onChange={this.handleChange}></input>
          <button type="submit" onClick={this.handleSubmit}>Submit</button>
        </form>
        <GiphysIndex giphys={giphys} />
      </div>
    );
  }
}

export default GiphysSearch;
