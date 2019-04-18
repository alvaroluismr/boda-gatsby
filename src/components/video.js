import React from "react"
import VideoStyle from "./video.module.css"

export default ({ videoSrcURL, videoTitle }) => (
  <div className={VideoStyle.video}>
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      width="100%"
      height="100%"
      allowFullScreen
    />
  </div>
)