import React from "react"

export default ({ videoSrcURL, videoTitle }) => (
  <div className="video">
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      width="640"
      height="360"
      allowFullScreen
    />
  </div>
)