import { LinkedinIcon } from '../icons/linkedin-icon';
import { GithubIcon } from '../icons/github-icon';
import React, { Component } from 'react';
import './social-icons.scss';

class SocialIcons extends Component {
  render() {
    return (
      <div className="description">
        <div className="social-icons">
          <div
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/dan-radu-74a80563/',
                '_blank'
              )
            }
          >
            <LinkedinIcon />
          </div>
          <div
            onClick={() => window.open('https://github.com/xdanradu', '_blank')}
          >
            <GithubIcon />
          </div>
        </div>
      </div>
    );
  }
}

export default SocialIcons;
