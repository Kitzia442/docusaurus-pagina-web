import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Descubre lo que te apasiona',
    Svg: require('@site/static/img/2196154.svg').default,
    description: (
      <>
        conoce más sobre lo que hacemos y descubre que es lo que te apasiona
      </>
    ),
  },
  {
    title: 'Aprende facil',
    Svg: require('@site/static/img/aprende.svg').default,
    description: (
      <>
        Esta página tambien te brindara material que puede ayudarte a aprender de forma sencilla
      </>
    ),
  },
  {
    title: 'Unete a nosotros',
    Svg: require('@site/static/img/unete_1.svg').default,
    description: (
      <>
        Se parte de nuestra comunidad 
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
