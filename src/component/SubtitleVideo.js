/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  faPlay, faPause, faHome, faUndoAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/styles.css';

class SubtitleVideo extends Component {
  constructor(props) {
    super(props);
    const { langID } = this.props;
    this.state = {
      langID,
      showTransport: true,
      videoPlaying: true,
      fillAmount: '0%',
    };
    this.video = React.createRef();
    this.player = '';
  }

  componentDidMount() {
    const { langID } = this.props;
    this.video.current.onended = () => this.home();
    if (location.pathname === '/single') {
      this.setState({ showTransport: false });
    }
    setTimeout(() => this.videoPlay(), 1000);
    this.setState({ langID }, () => this.setColors());
    document.addEventListener('keydown', this.handleKeyDown);
    this.player = document.getElementById('video');
    this.player.addEventListener('timeupdate', () => {
      const percent = Math.floor((100 / this.player.duration) * this.player.currentTime);
      this.setState({ fillAmount: `${percent.toString()}%` });
    }, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  setEnglish() {
    this.setState({ langID: 'eng' }, () => this.setColors());
  }

  setSpanish() {
    this.setState({ langID: 'spa' }, () => this.setColors());
  }

  setColors() {
    const { langID } = this.state;
    const { theme } = this.props;
    if (langID === 'eng' && document.getElementById('langSelEng')) {
      document.getElementById('langSelEng').style.color = 'white';
      document.getElementById('langSelEng').style.backgroundColor = theme.primary;
      document.getElementById('langSelSpa').style.color = theme.spaPrimary;
      document.getElementById('langSelSpa').style.backgroundColor = 'white';
    }
    if (langID === 'spa' && document.getElementById('langSelEng')) {
      document.getElementById('langSelEng').style.color = theme.primary;
      document.getElementById('langSelEng').style.backgroundColor = 'white';
      document.getElementById('langSelSpa').style.color = 'white';
      document.getElementById('langSelSpa').style.backgroundColor = theme.spaPrimary;
    }
  }

  videoPlay() {
    this.video.current.play();
    this.setState({ videoPlaying: true });
  }

  videoPause() {
    const { videoPlaying } = this.state;
    this.video.current.pause();
    this.setState({ videoPlaying: false });
    // don't want video paused forever
    setTimeout(() => {
      if (videoPlaying === false) {
        this.home();
      }
    }, 10000);
  }

  videoRestart() {
    this.video.current.pause();
    this.video.current.currentTime = 0;
    this.videoPlay();
  }

  home() {
    window.location.reload();
  }

  render() {
    const {
      videoPlaying, showTransport, langID, fillAmount,
    } = this.state;
    const {
      video, theme, touchscreen, videoRes, screenRes,
    } = this.props;
    const vidHeight = videoRes[1];
    const vidWidth = videoRes[0];
    const screenWidth = screenRes[0];
    const screenHeight = screenRes[1];
    let progBarColor;
    const progBarPlacement = touchscreen ? '30px' : '-15px';

    langID === 'eng' ? progBarColor = theme.primary : progBarColor = theme.spaPrimary;

    // Set line height of subtitles
    // if (this.player && this.player.textTracks) {
    //   const cues = this.player.textTracks[0].cues;
    //   if (cues && cues.length !== 0 && !touchscreen) {
    //     for (let i = 0; i < cues.length; i++ ) {
    //       cues[i].line = 14;
    //     }
    //   }
    //   if (cues && cues.length !== 0 && touchscreen) {
    //     for (let i = 0; i < cues.length; i++ ) {
    //       cues[i].line = 13;
    //     }
    //   }
    // }

    return (
      <div className="component-container" style={{ height: `${screenHeight}px`, width: `${screenWidth}px` }}>
        <div className="center">
          <div style={{
            display: 'flex', flexDirection: 'column', position: 'absolute', top: '-50px', left: '0px',
          }}
          >
            <video id="video" ref={this.video} height={vidHeight} width={vidWidth} className="video-border">
              <source src={video.videoRef} />
              { langID === 'eng' && <track default kind="subtitles" srcLang="en" src={video.englishTrack} /> }
              { langID === 'spa' && <track default kind="subtitles" srcLang="spa" src={video.spanishTrack} /> }
            </video>
            <div style={{ width: `${vidWidth}px`, top: progBarPlacement }} className="progress">
              <div style={{ width: fillAmount, backgroundColor: progBarColor }} />
            </div>
            { showTransport && touchscreen && (
            <div className="transport-container" style={{ width: `${vidWidth}px` }}>
              <div>
                { !videoPlaying && <FontAwesomeIcon icon={faPlay} size="lg" onClick={() => this.videoPlay()} className="icon-style" /> }
                { videoPlaying && <FontAwesomeIcon icon={faPause} size="lg" onClick={() => this.videoPause()} className="icon-style" /> }
                <FontAwesomeIcon icon={faUndoAlt} size="lg" onClick={() => this.videoRestart()} className="end-icon" />
              </div>
              <div className="center">
                <button onClick={() => this.setEnglish()} type="button" id="langSelEng" className="lang-button">English</button>
                <button onClick={() => this.setSpanish()} type="button" id="langSelSpa" className="lang-button">Español</button>
              </div>
              <FontAwesomeIcon icon={faHome} size="lg" onClick={() => window.location.reload()} className="end-icon" />
            </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

SubtitleVideo.propTypes = {
  langID: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  video: PropTypes.object.isRequired,
  screenRes: PropTypes.string.isRequired,
  touchscreen: PropTypes.string.isRequired,
  videoRes: PropTypes.string.isRequired,
};

export default SubtitleVideo;
