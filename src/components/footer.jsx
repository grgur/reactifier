import React, {Component} from 'react'

export default class Footer extends Component {

  static displayName = 'Footer';

  render() {
    return (
      <footer id="site-footer">
        <section className="copyright"><a href="http://konkle.us">Brandon Konkle</a> © 2015</section>
        <section className="github">
          <a href="http://github.com/bkonkle/reactifier">
            <img alt="Github stars"
              className="stars"
              src="https://img.shields.io/github/stars/bkonkle/reactifier.svg?style=flat-square"/>
            <img alt="Find the source code on Github"
              className="logo"
              src="/media/images/mark-github.svg"/>
          </a>
        </section>
      </footer>
    )
  }

}
