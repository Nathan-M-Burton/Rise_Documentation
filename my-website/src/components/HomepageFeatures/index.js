import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import { useColorMode } from '@docusaurus/theme-common';
import styles from './styles.module.css';

function Feature({ imgSrcLight, imgSrcDark, title, description, imgSize }) {
  const { colorMode } = useColorMode();
  const imgSrc = colorMode === 'dark' ? imgSrcDark : imgSrcLight;
  
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
            imgSrcLight={require('@site/static/img/robotcam.webp').default}
            imgSrcDark={require('@site/static/img/night.webp').default}
            title=""
            description=""
            imgSize="100%" // adjust the image size here
          />
        </div>
      </div>
    </section>
  );
}
