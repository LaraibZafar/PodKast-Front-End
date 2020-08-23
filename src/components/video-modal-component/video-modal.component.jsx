import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

export class VideoModal extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    const { videoId } = this.props;
    return (
      <div>
        <div>
          <ModalVideo
            channel="youtube"
            isOpen={this.state.isOpen}
            videoId={videoId}
            onClose={() => this.setState({ isOpen: false })}
          />
          <button onClick={this.openModal}>Open</button>
        </div>
      </div>
    );
  }
}

export default VideoModal;
