/* eslint-disable */
import React from 'react';
import queryString from 'query-string';
import '../styles/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const About = (props) => {
  const { theme } = props;
  let langID = '';
  const currentQueryString = queryString.parse(window.location.search);
  langID = (currentQueryString.eng === 'true') ? 'eng' : 'spa';
  setTimeout(() => { window.location.href = '/'; }, 60000 * 5);

  return (
    <div className="about-container">
      { currentQueryString.eng && (
      <div>
        <div className="top-border" style={{ backgroundColor: theme.primary }} />
        <div className="bottom-border" style={{ backgroundColor: theme.primary }} />
      </div>
      )}
      { currentQueryString.spa && (
      <div>
        <div className="top-border" style={{ backgroundColor: theme.spaPrimary }} />
        <div className="bottom-border" style={{ backgroundColor: theme.spaPrimary }} />
      </div>
      )}
      <div className="header-spacing">
        { currentQueryString.eng && (
        <div style={{ display: 'flex', color: theme.primary }}>
          <span onClick={() => window.location.href = '/'}><FontAwesomeIcon icon={faHome} size="2x" /></span>
          <span className="header">ABOUT THIS PROJECT</span>
        </div>
        )}
        { currentQueryString.spa && (
          <div style={{ display: 'flex', color: theme.spaPrimary }}>
            <span onClick={() => window.location.href = '/'}><FontAwesomeIcon icon={faHome} size="2x" /></span>
            <span className="header">DETALLES DE ESTE PROYECTO</span>
          </div>
        )}
        <div style={{ display: 'flex' }}>
          <button id="langSelEng" type="button" className="lang-button" onClick={() => window.location.href = '/about?eng=true'} style={{ backgroundColor: currentQueryString.eng ? 'white' : theme.primary, color: currentQueryString.eng ? theme.primary : 'white' }}>English</button>
          <button id="langSelSpa" type="button" className="lang-button" onClick={() => window.location.href = '/about?spa=true'} style={{ backgroundColor: currentQueryString.spa ? 'white' : theme.spaPrimary, color: currentQueryString.spa ? theme.spaPrimary : 'white' }}>Español</button>
        </div>
      </div>
      {langID === 'eng' && (
      <div>
        <div className="about-title" style={{ backgroundColor: theme.primary }}>
        from
          <i>The Seattle Times</i>
        </div>
        <div className="about-content">
          <span className="big-quote-right" style={{ color: theme.primary }}>&ldquo;</span>
          <p className="quote-text">
            Under Our Skin grew out of conversations about how we at The Seattle Times cover race at a time when national and local events — the furor over police shootings, the rise of the Black Lives Matter movement, protests on college campuses and charged campaign rhetoric — dominate headlines.
          </p>
          <p className="quote-text">
            In our newsroom, we’ve found ourselves talking more candidly about race and racism, subjects that simmer beneath the surface even when they’re not on the front page.
          </p>
          <p className="quote-text ellipse">...</p>
          <p className="quote-text">We decided to examine words and phrases that we noticed people using—and interpreting—very differently. Then we invited 18 people who represent a mix of backgrounds and perspectives to our video studio to talk about what those expressions mean to them. In a few cases, our subjects suggested terms we hadn’t included and we added them in subsequent interviews.</p>
          <p className="quote-text">Our conversations went well beyond the words into the experiences in each of the interviewees’ lives. They often lasted several hours, and were insightful, thought-provoking, honest, at times funny—and sometimes uncomfortable.</p>
          <p className="quote-text ellipse">...</p>
          <p className="quote-text">
            Discussions about race, inclusiveness and sensitivity clearly aren’t new. They can leave us feeling depleted and wondering whether anything has really changed. But we believe the personal reflections and stories from the people who participated in this project will inspire all of us to think and talk about these issues in a deeper way. For those who freeze up at the prospect of talking about race, we hope this project will help break the ice. For
            those who tend to take sides right away when the issue of race comes up, we hope Under Our Skin will challenge assumptions and build common ground.
          </p>
          <p className="quote-text ellipse">...</p>
          <p className="quote-text">With many thanks to our 18 interviewees, and all of you,</p>
          <p className="quote-text">
            The Under Our Skin team at
            <i>The Seattle Times</i>
          </p>
          <p className="quote-text">Originally published June 20, 2016</p>
          <span className="big-quote-left" style={{ color: theme.primary }}>&rdquo;</span>
        </div>
      </div>
      )}
      {langID === 'spa' && (
        <div>
          <div className="about-title" style={{ backgroundColor: theme.spaPrimary }}>
            de
            <i>The Seattle Times</i>
          </div>
          <div className="about-content">
            <span className="big-quote-right" style={{ color: theme.spaPrimary }}>&ldquo;</span>
            <p className="quote-text">
              Under Our Skin (Bajo nuestra piel) surgió de conversaciones acerca de cómo nosotros en The Seattle Times cubrimos temas sobre raza en un momento en que los sucesos nacionales y locales—el furor por los tiroteos policiales, el surgimiento del movimiento Black Lives Matter, las protestas en los campus universitarios y la retórica cargada de la campaña política—dominan los titulares.
            </p>
            <p className="quote-text">
              En nuestra sala de redacción, empezamos a hablar con más franqueza sobre la raza y el racismo, dos temas latentes incluso cuando no están en la primera plana.
            </p>
            <p className="quote-text ellipse">. . .</p>
            <p className="quote-text">
              Decidimos examinar palabras y frases que notamos que las personas usan e interpretan de manera muy diferente. Luego invitamos a 18 personas representando una mezcla de antecedentes y perspectivas a nuestro estudio de video para hablar sobre lo que esas expresiones significan para ellas. En algunos casos, estas personas sugirieron términos que no habíamos incluido y los agregamos en entrevistas posteriores.
            </p>
            <p className="quote-text">
              Nuestras conversaciones fueron de mucho más allá de las palabras a las experiencias en la vida de cada entrevistado. A menudo las conversaciones duraban varias horas y eran perspicaces, estimulantes, honestas, a veces divertidas y, otras veces, incómodas.
            </p>
            <p className="quote-text ellipse">. . .</p>
            <p className="quote-text">
            Claramente, las discusiones sobre raza, inclusión y sensibilidad no son nuevas. Pueden hacer sentirnos agobiados y preguntándonos si algo realmente ha cambiado. Pero creemos que las reflexiones personales y las historias de las personas que participaron en este proyecto nos inspirarán a todos a pensar y hablar sobre estos temas de una manera más profunda. Para aquellos que se congelan ante la perspectiva de hablar sobre la raza, esperamos que este proyecto ayude a dar el primer paso. Para aquellos que tienden a tomar partido de inmediato cuando surge el tema de la raza, esperamos que Under Our Skin desafíe las suposiciones y se creen puntos en común.
            </p>
            <p className="quote-text ellipse">. . .</p>
            <p className="quote-text">Muchas gracias a nuestros 18 entrevistados, y a todos ustedes</p>
            <p className="quote-text">El equipo Under Our Skin en The Seattle Times”</p>
            <p className="quote-text">Publicado inicialmente el 20 de junio de 2016</p>
            <span className="big-quote-left" style={{ color: theme.spaPrimary }}>&rdquo;</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
