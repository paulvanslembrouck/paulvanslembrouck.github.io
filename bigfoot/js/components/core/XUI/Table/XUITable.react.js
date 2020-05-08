/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule XUITable.react
 * @typechecks
 */

/**
 * The most basic table element, generally used for XUIDataTable purposes.
 */

const React = require('React');

const cx = require('cx');
const joinClasses = require('joinClasses');

var {PropTypes} = React;

const XUITable = React.createClass({
  propTypes: {
    outerBorder: PropTypes.bool,
  },

  /**
   * @return {object}
   */
  render: function() {
    var className = cx({
      'xuiTable/root': true,
      'xuiTable/outerBorder': this.props.outerBorder
    });
    return (
      <table
        {...this.props}
        className={joinClasses(this.props.className, className)}>
        {this.props.children}
      </table>
    );
  }
});

module.exports = XUITable;