import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

function Feature({ imgSrc, title, description, imgSize }) {
  return (
    <div className={clsx('col col--12')}>
      <div className={styles.featureContainer}>
        <img src={imgSrc} alt={title} style={{ width: imgSize, height: 'auto' }} />
        <div className={styles.featureText}>
          <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <Feature
            imgSrc={require('@site/static/img/robotcam.webp').default}
            title=""
            description=""
            imgSize="100%" // adjust the image size here
          />
        </div>
      </div>
    </section>
  );
}
