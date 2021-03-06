import React from 'react'
import { SearchBar, VideoDetail, VideoList } from './components'

import { Grid } from '@material-ui/core'
import youtube from './api/youtube'

import './App.css'
class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  componentDidMount() {
    this.handleSubmit('javascript')
  }

  handleSubmit = async searchTerm => {
    const res = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
        q: searchTerm
      }
    })

    this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] })
  }

  onVideoSelect = video => {
    this.setState({ selectedVideo: video })
  }

  render() {
    const { selectedVideo, videos } = this.state

    return (
      <Grid container justify='center' spacing={10}>
        <Grid item xs={11}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default App
