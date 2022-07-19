import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Simple & Powerful',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Build any kind of game imaginable. A complete package including rendering, input,
        audio, and more.
      </>
    ),
  },
  {
    title: 'Language Agnostic',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Use your favorite programming language. Anything which compiles to WebAssembly
        will work!
      </>
    ),
  },
  {
    title: 'Tool Agnostic',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Build your assets using whatever tools you desire. Use the included editor
        to intuitively package and export your game.
      </>
    ),
  },
  {
    title: 'Seamless Online & Local Multiplayer',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        If your game works offline, it will work online. Gamercade removes all of the complexities 
        with online multiplayer.
      </>
    ),
  },
  {
    title: 'Build Together',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Projects are saved in a source-control friendly file format. Easily
        collaborate with developers, artists, and designers, without the hassle.
      </>
    ),
  },
  {
    title: 'Play!',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Browse, download, and play other Gamercade games. Built-in game browser
        with matchmaking means your favorite game is only seconds away.
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
