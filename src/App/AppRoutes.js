import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import VideoList from '../component/VideoList';
import SubtitleVideo from '../component/SubtitleVideo';
import About from '../component/About';
import NoMatch from './NoMatch';
import data from '../api.json';
import theme from '../themes';

function AppRoutes() {
  const component = process.env.COMPONENT_SELECTION;
  const videos = data.find(obj => obj.name === component).content;
  const { touchscreen } = data.find(obj => obj.name === component);
  const { screenRes } = data.find(obj => obj.name === component);
  const { videoRes } = data.find(obj => obj.name === component);
  const video = videos[0];

  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={() => <VideoList videos={videos} theme={theme} touchscreen={touchscreen} screenRes={screenRes} videoRes={videoRes} />} />
        <Route path="/single" component={() => <SubtitleVideo video={video} theme={theme} langID="eng" screenRes={screenRes} videoRes={videoRes} />} />
        <Route path="/about" component={() => <About theme={theme} screenRes={screenRes} />} />
        <Route component={NoMatch} />
      </Switch>
    </Fragment>
  );
}

export default AppRoutes;
