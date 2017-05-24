import React, { Component } from 'react';

class YoutubeFetch extends Component {

  componentWillMount() {
    this.fetchVideos();
  }

  fetchVideos() {
    fetch(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyAlue7aC6H1051Zixn9vt0st74PtdbSVqI&chart=mostPopular&part=contentDetails`, {
     method: "GET",
     headers: {"Content-Type": "application/json"}
   })
   .then(response => {
     console.log(response);
     return response.json();
   })
   .then(json => {
     json.items.map(a => {
       console.log(a);
     })
   })
  }

  render() {
    return (
      <div>youtube</div>
    )
  }
}

export default YoutubeFetch
