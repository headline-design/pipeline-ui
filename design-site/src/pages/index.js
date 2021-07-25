import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import 'regenerator-runtime/runtime';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <img src="/img/logo.svg" alt="My Site Logo" class="navbar__logo, navbar-sidebar__icon_2hHO"></img>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/start">
            Why Pipeline? - 1min ⏱️
          </Link>
        </div>
      </div>
     <img alt="Refs" class="hero-1" src="/img/hero-1.svg"></img>
    </header>
  );
}

export default function Home() {
 /* const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  ); */

  return (
  <div>
      <nav class="navbar navbar--fixed-top">
        <div class="navbar__inner">
          <div class="navbar__items"><button aria-label="Navigation bar toggle" class="navbar__toggle clean-btn" type="button"
              tabindex="0"><svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
                <path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"
                  d="M4 7h22M4 15h22M4 23h22"></path>
              </svg></button><a class="navbar__brand" href="/"><img src="/img/logo.svg" alt="My Site Logo"
                class="themedImage_1VuW themedImage--dark_hz6m navbar__logo"></img><b class="navbar__title">PIPELINE-UI</b></a><a
              class="navbar__item navbar__link" href="/docs/getting-started-B">Getting Started</a><a
              class="navbar__item navbar__link" href="/blog">Blog</a></div>
          <div class="navbar__items navbar__items--right"><a href="https://github.com/headline-design" target="_blank"
              rel="noopener noreferrer" class="navbar__item navbar__link"><span>GitHub<svg width="13.5" height="13.5"
                  aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_3J9K">
                  <path fill="currentColor"
                    d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z">
                  </path>
                </svg></span></a>
            <div class="react-toggle displayOnlyInLargeViewport_GrZ2 react-toggle--checked">
              <div class="react-toggle-track" role="button" tabindex="-1">
                <div class="react-toggle-track-check"><span class="toggle_71bT">🌜</span></div>
                <div class="react-toggle-track-x"><span class="toggle_71bT">🌞</span></div>
                <div class="react-toggle-thumb"></div>
              </div><input type="checkbox" class="react-toggle-screenreader-only"
                aria-label="Switch between dark and light mode" checked="">
            </input>
            </div>
          </div>
        </div>
        <div role="presentation" class="navbar-sidebar__backdrop"></div>
        <div class="navbar-sidebar">
          <div class="navbar-sidebar__brand"><a class="navbar__brand" href="/"><img src="/img/logo.svg" alt="My Site Logo"
                class="themedImage_1VuW themedImage--dark_hz6m navbar__logo"/><b class="navbar__title">PIPELINE-UI</b></a>
          </div>
          <div class="navbar-sidebar__items">
            <div class="menu">
              <ul class="menu__list">
                <li class="menu__list-item"><a class="menu__link" href="/docs/getting-started-B">Getting Started</a></li>
                <li class="menu__list-item"><a class="menu__link" href="/blog">Blog</a></li>
                <li class="menu__list-item"><a href="https://github.com/headline-design" target="_blank"
                    rel="noopener noreferrer" class="menu__link"><span>GitHub<svg width="13.5" height="13.5"
                        aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_3J9K">
                        <path fill="currentColor"
                          d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z">
                        </path>
                      </svg></span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <footer class="footer footer--dark"><div class="container"><div class="row footer__links"><div class="col footer__col"><div class="footer__title">Docs</div><ul class="footer__items"><li class="footer__item"><a class="footer__link-item" href="/docs/getting-started-B">Getting Started</a></li></ul></div><div class="col footer__col"><div class="footer__title">Community</div><ul class="footer__items"><li class="footer__item"><a href="https://stackoverflow.com/" target="_blank" rel="noopener noreferrer" class="footer__link-item"><span>Stack Overflow<svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_3J9K"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg></span></a></li><li class="footer__item"><a href="https://discordapp.com/" target="_blank" rel="noopener noreferrer" class="footer__link-item"><span>Discord<svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_3J9K"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg></span></a></li><li class="footer__item"><a href="https://twitter.com/headline_crypto" target="_blank" rel="noopener noreferrer" class="footer__link-item"><span>Twitter<svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_3J9K"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg></span></a></li></ul></div><div class="col footer__col"><div class="footer__title">More</div><ul class="footer__items"><li class="footer__item"><a class="footer__link-item" href="/blog">Blog</a></li><li class="footer__item"><a href="https://github.com/headline-design" target="_blank" rel="noopener noreferrer" class="footer__link-item"><span>GitHub<svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_3J9K"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg></span></a></li></ul></div></div><div class="footer__bottom text--center"><div class="footer__copyright">Copyright © 2021 HEADLINE INC. Built with PIPELINE-UI.</div></div></div></footer>
      </div>
      
  );
}
