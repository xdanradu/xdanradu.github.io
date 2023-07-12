import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'IT Consultant',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        10+ years experience as a Team Lead/Frelancer in Software Development, CI/CD, Backend, Frontend, SQL.
      </>
    ),
  },
  {
    title: 'Lecturer',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Data transmission, client server architecture, CRUD, REST, SOLID,
          http, websockets, <code>Angular</code>, <code>VueJS</code>,
          <code>ExpressJS</code>, <code>GPS</code>.
      </>
    ),
  },
  {
    title: 'Trainer',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Current trends and technologies in Frontend development - one day
          training held for Frequentis Romania, 2022
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
