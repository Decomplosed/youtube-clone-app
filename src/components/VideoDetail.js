import React from 'react'

import { Paper, Typography } from '@material-ui/core'

const VideoDetail = ({ video }) => {
  return (
    <React.Fragment>
      <Paper elevation={6} style={{ height: '70%' }}></Paper>
      <Paper elevation={6} style={{ padding: '15px' }}></Paper>
    </React.Fragment>
  )
}

export default VideoDetail
