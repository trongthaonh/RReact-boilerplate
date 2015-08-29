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
        <div class="row">    
          <div class="twelve columns">
            <h1>- Nguyen Ho Trong Thao -</h1>
            <h4> Ruby on rails developer!!!</h4>
            <a href="http://fb.com/trongthaonh" class="btn">Click me</a> 
          </div>
        </div>
        <section class="about">
          <div class="container">
            <div class="row bottom">
              <div class="two-thirds column">
              </div>
              <div class="one-third column">
              </div>    
            </div>
          </div>
        </section>
      </div>
    );
  }
});

module.exports = TrongThaoPage;
