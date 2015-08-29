/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var DefaultLayout = React.createFactory(require('../layouts/Default'));

var TrongThaoPage = React.createClass({
  displayName: 'TrongThao page',

  getDefaultProps: function() {
    return {
      layout: DefaultLayout
    };
  },

  render: function() {
    return (
      <div>
        <p>MY FIRST PAGE IN REACT</p>
        <div className="row">    
          <div className="twelve columns">
            <h1> Nguyen Ho Trong Thao </h1>
            <h4> Running man!</h4>
            <a href="http://fb.com/trongthaonh" className="btn">Click me</a> 
          </div>
        </div>
        <section className="about">
          <div className="container">
            <div className="row">
              <div className="twelve columns">
                <h3>Who am I</h3>
              </div>
            </div>
            <div className="row bottom">
              <div className="two-thirds column">
                <p>Lorem ....</p>
              </div>
              <div className="one-third column">
                <h4>Degrees</h4>
                <ul>
                  <li>Bachelor in Information Systems</li>
                </ul>
                <h4>Honors</h4>
                <ul>
                  <li>1st place in the contest "MyContest"</li>
                </ul>
              </div>
            </div>
          </div> 
        </section>
      </div>
    );
  }
});

module.exports = TrongThaoPage;
