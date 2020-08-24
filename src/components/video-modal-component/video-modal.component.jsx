import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import "./video-modal.styles.scss";

import CustomButton from "../custom-button-component/custom-button.component";

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
      <div className="modal-inner">
        <div>
          <ModalVideo
            channel="youtube"
            isOpen={this.state.isOpen}
            videoId={videoId}
            onClose={() => this.setState({ isOpen: false })}
          />
          <CustomButton onClick={this.openModal}>Open</CustomButton>
        </div>
      </div>
    );
  }
}

export default VideoModal;
