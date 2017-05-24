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
     return json.items.map(video => {
       const newState = [...this.state.videos, video.id]
       this.setState({ videos: newState })
       return this.state.videos
     })
   })
  }

  appendVideos() {
    console.log("HERE", this.state.videos);
    return this.state.videos.map((videoID, key) => {
      return (
        <div key={key}>
          <iframe src={`https://youtube.com/embed/${videoID}`}></iframe>
        </div>
      )
    })
  }

  render() {
    return (
      <section>
        <h1>Youtube</h1>
        { this.appendVideos() }
      </section>
    )
  }
}

export default YoutubeFetch
