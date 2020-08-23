import React from "react";
import "./podcast-list.styles.scss";

import PodcastItem from "../podcast-item-component/podcast-item.component";

class PodcastList extends React.Component {
  constructor() {
    super();
    this.state = {
      staticVideoList: [
        {
          videoId: "vIeFt88Hm8s",
          videoImage:
            "https://yt3.ggpht.com/a/AATXAJwVJeeimAaxFQxL7vMQWzc7_ElVpT_Vhjnxwi9X=s900-c-k-c0xffffffff-no-rj-mo",
          title: "Joe Rogan Podcast",
        },
        {
          videoId: "1opHWsHr798",
          videoImage:
            "https://ih1.redbubble.net/image.659918995.7447/st,small,845x845-pad,1000x1000,f8f8f8.u4.jpg",
          title: "Dave Rubin Podcast",
        },
        {
          videoId: "vE5tLIEH4Zw",
          videoImage:
            "https://images.squarespace-cdn.com/content/v1/59f76c9af14aa1219138e485/1553797389319-A5Y7NY092BYZZWLYEVDY/ke17ZwdGBToddI8pDm48kJUlZr2Ql5GtSKWrQpjur5t7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UfNdxJhjhuaNor070w_QAc94zjGLGXCa1tSmDVMXf8RUVhMJRmnnhuU1v2M8fLFyJw/Sam-Harris.jpg",
          title: "Making sense with Sam Harris",
        },
        {
          videoId: "FU8IwII8hhc",
          videoImage:
            "https://yt3.ggpht.com/a/AATXAJyn3S8kl5s7X3gI1N15-vnZwBp6cnYRxMEpLZek=s900-c-k-c0xffffffff-no-rj-mo",
          title: "Jocko Podcast",
        },
        {
          videoId: "hS4XXstzocY",
          videoImage:
            "https://i1.sndcdn.com/artworks-000258530744-58ih9l-t500x500.jpg",
          title: "H3H3 Podcast",
        },
        {
          videoId: "KqZXLTAbnRA",
          videoImage:
            "https://content.production.cdn.art19.com/images/95/5d/fe/c5/955dfec5-c873-424c-90dc-3428d21ee20b/11f041a29e8fe4bd143f52d75cfe6dec0f03d43915f482e6931d899542ee9bac113cfb1ecaec7275bebfd6043b49a29dd7545264ce1338c6cac74a7fed809e1f.jpeg",
          title: "Monday Morning Podcast",
        },
      ],
    };
  }
  render() {
    return (
      <div className="podcast-list">
        {this.state.staticVideoList.map(({ videoId, videoImage, title }) => (
          <PodcastItem
            videoId={videoId}
            videoImage={videoImage}
            title={title}
          />
        ))}
      </div>
    );
  }
}

export default PodcastList;
