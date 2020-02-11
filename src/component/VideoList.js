/* eslint-disable*/
import React, { Component } from 'react';
import SubtitleVideo from './SubtitleVideo';
import '../styles/styles.css';

class VideoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      langID: 'eng',
      showList: true,
      videoSelection: '',
    };
    this.playNum = 0;
    this.video = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    this.setColors();
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  setColors() {
    const { langID } = this.state;
    const { theme, videos, touchscreen } = this.props;
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
    for (let i = 0; i < videos.length; i += 1) {
      if (i === this.playNum && langID === 'eng' && document.getElementById(`button${i}`)) {
        document.getElementById(`button${i}`).style.color = 'white';
        document.getElementById(`button${i}`).style.backgroundColor = theme.primary;
      }
      if (i !== this.playNum && langID === 'eng' && document.getElementById(`button${i}`)) {
        document.getElementById(`button${i}`).style.color = theme.primary;
        document.getElementById(`button${i}`).style.backgroundColor = 'white';
      }
      if (i === this.playNum && langID === 'spa' && document.getElementById(`button${i}`)) {
        document.getElementById(`button${i}`).style.color = 'white';
        document.getElementById(`button${i}`).style.backgroundColor = theme.spaPrimary;
      }
      if (i !== this.playNum && langID === 'spa' && document.getElementById(`button${i}`)) {
        document.getElementById(`button${i}`).style.color = theme.spaPrimary;
        document.getElementById(`button${i}`).style.backgroundColor = 'white';
      }
    }
    // Set all main buttons to white background if it's a touchscreen
    for (let i = 0; i < videos.length; i += 1) {
      if (langID === 'eng' && document.getElementById(`button${i}`) && touchscreen) {
        document.getElementById(`button${i}`).style.color = theme.primary;
        document.getElementById(`button${i}`).style.backgroundColor = 'white';
      }
      if (langID === 'spa' && document.getElementById(`button${i}`) && touchscreen) {
        document.getElementById(`button${i}`).style.color = theme.spaPrimary;
        document.getElementById(`button${i}`).style.backgroundColor = 'white';
      }
    }
  }

  setEnglish() {
    this.setState({ langID: 'eng' }, () => this.setColors());
  }

  setSpanish() {
    this.setState({ langID: 'spa' }, () => this.setColors());
  }

  render() {
    const { videoSelection, showList, langID } = this.state;
    const {
      videos, theme, touchscreen, screenRes, videoRes,
    } = this.props;
    // calculates how far down the screen the list items buttons appear
    const getPercent = `${Math.round((parseInt(screenRes[1]) * 0.45))}px`;
    const listItems = videos.map((video, index) => (
      <div key={index} style={{ width: '21%' }}>
        { showList && (
          <div onClick={() => {
            this.setState({ videoSelection: index, showList: false });
          }}
          >
            <button className="list-button" type="button" id={`button${index}`} style={{ alignContent: 'center', width: '75%' }}>
              {langID === 'eng' && <span>{video.englishName}</span>}
              {langID === 'spa' && <span style={{ fontSize: '22px' }}>{video.spanishName}</span>}
            </button>
          </div>
        )}
        { videoSelection === index && (
        <SubtitleVideo
          video={video} langID={langID} theme={theme} touchscreen={touchscreen} screenRes={screenRes} videoRes={videoRes}
        />
        )}
      </div>
    ));
    return (
      <div style={{
        height: '1080px', width: '1920px', display: 'flex', flexDirection: 'column', backgroundColor: 'black',
      }}
      >
        { showList && (
          <div className="center" style={{ height: '1080px', width: '1920px' }}>
            <video ref={this.video} autoPlay loop muted style={{ top: '-285px', position: 'absolute', left: '-50px' }}>
              <source src="Race_Animation.mp4" />
            </video>
          </div>
        )}
        <div className="center items" style={{ top: showList ? getPercent : 0, height: '1080px', width: '1920px', maxHeight: showList ? '330px' : '1080px' }}>{listItems}</div>
        { showList && touchscreen && <button className="list-button about" onClick={() => window.location.href='/about?'+langID+'=true'}>
          {langID === 'eng' ? (<span style={{color: theme.primary }}>About</span>) : (<span style={{color: theme.spaPrimary }}>Sobre</span>) }
        </button> }
        { showList && touchscreen &&
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', top: '-73px', left: '-20px'}}>
            <div className="bg1" style={{backgroundColor: theme.primary }} />
            <div className="bg1 bg2" style={{backgroundColor: theme.spaPrimary }}/>
          </div>
        }
        { showList && touchscreen && (
        <div className="button-container" style={{height: screenRes[1], width: screenRes[0], top: '-30px' }}>
          <button id="langSelEng" onClick={() => this.setEnglish()} className="lang-button">English</button>
          <button id="langSelSpa" onClick={() => this.setSpanish()} className="lang-button">Español</button>
        </div>
      )}
      </div>
    );
  }
}
// videos, theme, touchscreen, screenRes, videoRes,
export default VideoList;
