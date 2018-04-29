import React from 'react';
import Link from 'gatsby-link';

import ContentPage from '../../components/content-page';
import Meta from '../../components/meta';
import OutboundLink from '../../components/outbound-link';
import Wrapper from '../../components/wrapper';

import ahmSrc from './img/ahm.png';
import inlightSrc from './img/inlight.png';
import lighthouseSrc from './img/lighthouse.png';


import styles from './styles.module.css';
const About = ({ location }) => (
  <ContentPage>
    <Meta title="About" location={location} />
    <Wrapper>
      <div className={styles.about}>
        <section className={styles.intro}>
          <h1>Hello world.</h1>
          <p>I’m a freelance software engineer currently situated in São Paulo, Brazil. I’ve been in the industry since 2000.</p>
          <p>I've planned, worked and maintened projects of the most variable sizes and fields, from niche Fintech and Adtech technologies to social networks scaling to millions of users.</p>
          <p>Personally interested and engaged in Free Software & Open Source software, I've been working with GNU/Linux, git, github, and free software for the most part of my carreer (10+ years) generating better and more secure software with greater ROI for my clients and companies I've worked.</p>
          <p>I now work on a freelance basis working on both ideas of my own and others. If you have a project in mind, <Link to="/contact">get in touch</Link>.</p>
        </section>
        <aside className={styles.skills}>
          <div>
            <h3>Skills</h3>
            <h4>Presentation</h4>
            <p>Bootstrap, Css, Html, Less, Postcss, Sass, Stylus, Material UI</p>
            <h4>Javascript</h4>
            <p>React, React Native, Redux, Webpack</p>
            <h4>Server</h4>
            <p>Node, PostgreSQL, Rails, Clojure</p>
            <h4>Other</h4>
            <p>CI/CD, Git, Docker</p>
            <h4>Data Engineering</h4>
            <p>AWS Stack, Elastic Map Reduce</p>
          </div>
        </aside>
      </div>
    </Wrapper>
  </ContentPage>
);

export default About;
