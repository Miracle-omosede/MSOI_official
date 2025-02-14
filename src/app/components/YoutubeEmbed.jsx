"use client";

import React from "react";

const YoutubeEmbed = ({ embedId }) => {
  return (
    <div className="relative w-full pb-[56.25%] mx-auto my-6 h-0 overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video"
        src={`https://www.youtube.com/embed/${embedId}?modestbranding=1&rel=0&fs=0&iv_load_policy=3`}
      />
    </div>
  );
};

export default YoutubeEmbed;
