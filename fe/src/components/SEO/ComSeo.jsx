import React from "react";
import { Helmet } from "react-helmet";

export default function ComSeo({ tile, name, content }) {
  return (
    <div>
      <Helmet>
        <title>{tile}</title>
        <meta name={name} content={content} />
      </Helmet>
    </div>
  );
}
