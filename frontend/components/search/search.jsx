import React from 'react';
import ReactDOM from 'react-dom';
import * as SearchAPIUtil from '../../util/search_api_util';
import { Link, withRouter } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      holder: '',
      results: { channels: null }
    }

    this.handleSearch = this.handleSearch.bind(this);
    this.handleSelectedChannel = this.handleSelectedChannel.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.placeholder = this.placeholder.bind(this);
  }

  handleSearch(e) {
    e.preventDefault();
    let query = e.target.value;
    this.setState({query: query}, () => {
      if(this.state.query) {
        SearchAPIUtil.searchDatabase(this.state.query).then(response => {
          let channels;
          if(response.searchResults) {
            channels = Object.values(response.searchResults);
          }

          this.setState({
            results: { channels }
          })

        })
      }
    })
  }

  handleSelectedChannel(channel) {
    return (e) => {
      e.preventDefault();
      this.setState({query: ''}, () => {
        this.props.history.push(`/channels/${channel.id}`)
      })
    }
  }

  onBlur() {
    this.setState({holder: this.state.query})
    this.setState({query: ''})
  }

  onFocus() {
    this.setState({query: this.state.holder})
  }

  placeholder() {
    if(this.state.holder == '') {
      return 'search'
    } else {
      return this.state.holder
    }
  }

  showSearch(channelRes) {
    if(this.state.query !== '') {
      return (
        <div className="res-container">
          {channelRes}
        </div>
      )
    }
  }

  render() {
    let { channels } = this.state.results;
    let channelRes;

    if(channels) {
      channelRes = channels.map(channel => (
        <div onMouseDown={this.handleSelectedChannel(channel)} key={channel.id}>
          <div className="channel-res">
            <img src={channel.pic_url} />
            <h4>{channel.name}</h4>
          </div>
        </div>
      ));
    } else {
      channelRes = (<h3>Not Found</h3>)
    }

    return (
      <div className="search-container">
        <input type='text' onChange={this.handleSearch} onBlur={this.onBlur} onFocus={this.onFocus} value={this.state.query} placeholder={this.placeholder()} />
        {this.showSearch(channelRes)}
      </div>
    )
  }

}

export default withRouter(Search)
