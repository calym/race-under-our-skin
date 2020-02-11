/* eslint-disable */
import React from 'react';
import queryString from 'query-string';
import '../styles/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const About = (props) => {
  const { theme, screenRes } = props;
  let langID = '';
  const currentQueryString = queryString.parse(window.location.search);
  langID = (currentQueryString.eng === 'true') ? 'eng' : 'spa';
  setTimeout(() => { window.location.href='/' }, 60000 * 5);

  return (
    <div className="about-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '1920px', border: '1px solid orange', padding: '30px'}}>
        <span onClick={() => window.location.href="/"}><FontAwesomeIcon icon={faHome} size='2x' /></span>
        <div style={{ display: 'flex'}}>
          <button id="langSelEng" className="lang-button" onClick={() => window.location.href="/about?eng=true"} style={{backgroundColor: currentQueryString.eng ? 'white' : theme.primary, color: currentQueryString.eng ? theme.primary : 'white'}}>English</button>
          <button id="langSelSpa" className="lang-button" onClick={() => window.location.href="/about?spa=true"} style={{backgroundColor: currentQueryString.spa ? 'white' : theme.spaPrimary, color: currentQueryString.spa ? theme.spaPrimary : 'white'}}>Español</button>
        </div>
      </div>
      {langID === 'eng' && (
      <div>
        <h1>ABOUT THIS PROJECT</h1>
        <div className="about-content">
          <h2>from <i>The Seattle Times</i></h2>
          <p>
            "Under Our Skin grew out of conversations about how we at The Seattle Times cover race at a time when national and local events — the furor over police shootings, the rise of the Black Lives Matter movement, protests on college campuses and charged campaign rhetoric — dominate headlines.
          </p>
          <p>
            In our newsroom, we’ve found ourselves talking more candidly about race and racism, subjects that simmer beneath the surface even when they’re not on the front page.
          </p>
          <p>...</p>
          <p>We decided to examine words and phrases that we noticed people using—and interpreting—very differently. Then we invited 18 people who represent a mix of backgrounds and perspectives to our video studio to talk about what those expressions mean to them. In a few cases, our subjects suggested terms we hadn’t included and we added them in subsequent interviews.</p>
          <p>Our conversations went well beyond the words into the experiences in each of the interviewees’ lives. They often lasted several hours, and were insightful, thought-provoking, honest, at times funny—and sometimes uncomfortable.</p>
          <p>...</p>
          <p>Discussions about race, inclusiveness and sensitivity clearly aren’t new. They can leave us feeling depleted and wondering whether anything has really changed. But we believe the personal reflections and stories from the people who participated in this project will inspire all of us to think and talk about these issues in a deeper way. For those who freeze up at the prospect of talking about race, we hope this project will help break the ice. For
          those who tend to take sides right away when the issue of race comes up, we hope Under Our Skin will challenge assumptions and build common ground.</p>
          <p>...</p>
          <p>With many thanks to our 18 interviewees, and all of you,</p>

          <p>The Under Our Skin team at <i>The Seattle Times</i>”</p>
          <p>Originally published June 20, 2016</p>
        </div>
      </div>
      )}
      {langID === 'spa' && (
        <div>
          <h1>ABOUT THIS PROJECT</h1>
          <div className="about-content">
            This content in spanish
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
