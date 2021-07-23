import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/pipeline_vectilla_1.svg').default,
    description: (
      <>
        Minimal Javascript knowledge required. Algorand functions can be accessed through JSX tags.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('../../static/img/pipeline_vectilla_2.svg').default,
    description: (
      <>
        Pipeline UI provides a ready-to-go design library for the Algorand Ecosystem
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('../../static/img/pipeline_vectilla_3.svg').default,
    description: (
      <>
        Rapidly integrate Algorand into your web design with aesthetic and consistently recognizeable components.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
