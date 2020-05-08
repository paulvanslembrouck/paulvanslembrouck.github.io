/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule XUITable.react.example
 * @typechecks
 */

const AccessibleTableParts = require('AccessibleTableParts.react');
const React = require('React');
const XUITable = require('XUITable.react');
const XUIText = require('XUIText.react');

const cx = require('cx');

exports.framework = 'React';

const HeadRow = AccessibleTableParts.HeadRow;
const BodyRow = AccessibleTableParts.BodyRow;

exports.examples = [
  {
    /**
     * @param {DOMElement} container
     */
    render: function(container) {
      var numeric = cx('public/abstractDataTable/isNumeric');
      return (
        <XUITable outerBorder={true}>
          <thead>
            <HeadRow>
              <th>President</th>
              <th>State</th>
              <th className={numeric}>Population</th>
            </HeadRow>
          </thead>
          <tbody>
            <BodyRow>
              <td>George Washington</td>
              <td>Virginia</td>
              <td className={numeric}>8,185,867</td>
            </BodyRow>
            <BodyRow>
              <td>Millard Fillmore</td>
              <td>New York</td>
              <td className={numeric}>19,570,261</td>
            </BodyRow>
            <BodyRow>
              <td>Abraham Lincoln</td>
              <td>Illinois</td>
              <td className={numeric}>12,875,255</td>
            </BodyRow>
          </tbody>
        </XUITable>
      );
    }
  },
  {
    /**
     * @param {DOMElement} container
     */
    render: function(container) {
      var numeric = cx('public/abstractDataTable/isNumeric');
      return (
        <XUITable outerBorder={true}>
          <thead>
            <HeadRow>
              <th>President</th>
              <th>State</th>
              <th className={numeric}>Population</th>
            </HeadRow>
          </thead>
          <tbody>
            <BodyRow>
              <td>George Washington</td>
              <td>Virginia</td>
              <td className={numeric}>8,185,867</td>
            </BodyRow>
            <BodyRow>
              <td>Millard Fillmore</td>
              <td>New York</td>
              <td className={numeric}>19,570,261</td>
            </BodyRow>
            <BodyRow hover={false}>
              <td colSpan={3} style={{textAlign: 'center'}}>
                <XUIText size="large" weight="bold">
                  {' Row with colspan and no hover! '}
                </XUIText>
              </td>
            </BodyRow>
            <BodyRow>
              <td>Abraham Lincoln</td>
              <td>Illinois</td>
              <td className={numeric}>12,875,255</td>
            </BodyRow>
          </tbody>
        </XUITable>
      );
    }
  },
  {
    /**
     * @param {DOMElement} container
     */
    render: function(container) {
      return (
        <XUITable outerBorder={true}>
          <thead>
            <HeadRow>
              <td></td>
              <th>Name</th>
              <th>Phone#</th>
              <th>Fax#</th>
              <th>City</th>
            </HeadRow>
          </thead>
          <tbody>
            <BodyRow>
              <td>1.</td>
              <th>Joel Garner</th>
              <td>412-212-5421</td>
              <td>412-212-5400</td>
              <td>Pittsburgh</td>
            </BodyRow>
            <BodyRow>
              <td>2.</td>
              <th>Clive Lloyd</th>
              <td>410-306-1420</td>
              <td>410-306-5400</td>
              <td>Baltimore</td>
            </BodyRow>
            <BodyRow>
              <td>3.</td>
              <th>Gordon Greenidge</th>
              <td>281-564-6720</td>
              <td>281-511-6600</td>
              <td>Houston</td>
            </BodyRow>
          </tbody>
        </XUITable>
      );
    }
  }
];