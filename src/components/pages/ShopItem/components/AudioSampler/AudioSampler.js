import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from 'react-h5-audio-player';

class AudioSampler extends Component {
  render() {
    return <AudioPlayer src={this.props.audio} />;
  }
}

AudioSampler.propTypes = {
  audio: PropTypes.string.isRequired
};

export default AudioSampler;
