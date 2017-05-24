import React, { Component } from 'react';

class YoutubeFetch extends Component {
  constructor() {
    super()
    this.state = {
      videos: []
    }
  }

  componentDidMount() {
    this.fetchVideos();
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('something');
    return nextState.videos !== this.state.videos
  }

  fetchVideos() {
    fetch(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyAlue7aC6H1051Zixn9vt0st74PtdbSVqI&chart=mostPopular&part=contentDetails`, {
     method: "GET",
     headers: {"Content-Type": "application/json"}
   })
   .then(response => {
     return response.json();
   })
   .then(json => {
     return json.items.map(a => {
       this.state.videos.push(a.id)
       return this.state.videos
     })
   })
  }

  appendVideos() {
    console.log("HERE", this.state.videos);
    return this.state.videos.map((videoID, key) => {
      return (
        <a key={key} href={`https://youtube.com/watch?v=${videoID}`}></a>
      )
    })
  }

  render() {
    return (
      <section>
        <h1>Youtube</h1>
        { this.state.videos.length && this.appendVideos() }
      </section>
    )
  }
}

export default YoutubeFetch
