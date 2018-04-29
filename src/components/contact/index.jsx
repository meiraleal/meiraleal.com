import React from 'react';

import Icon from '../icon';
import OutboundLink from '../outbound-link';

import styles from './styles.module.css';

const Contact = ({ title }) => (
  <div className={styles.contact}>
    <h1>{title || 'I like messages.'}</h1>
    <p className={styles.email}>
      Say hello and send an email:<br />
      <a href="mailto:alanmeira@gmail.com?subject=Hello%20Alan!" className={styles.link}>alanmeira@gmail.com</a>
    </p>
    <div className={styles.lineBreak} />
    <ul className={styles.social}>
      <li>
        <OutboundLink to="https://github.com/meiraleal/">
          <Icon name="github" /> code
        </OutboundLink>
      </li>
      <li>
        <OutboundLink to="https://www.linkedin.com/in/alanmeira/">
          <Icon name="linkedin" /> linkedin
        </OutboundLink>
      </li>
    </ul>
  </div>
);

export default Contact;
