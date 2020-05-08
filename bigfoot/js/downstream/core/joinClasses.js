/**
 * @generated SignedSource<<3f99562a1854e647f7292a1e2c3e3a73>>
 *
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !! This file is a check-in of a static_upstream project!      !!
 * !!                                                            !!
 * !! You should not modify this file directly. Instead:         !!
 * !! 1) Use `fjs use-upstream` to temporarily replace this with !!
 * !!    the latest version from upstream.                       !!
 * !! 2) Make your changes, test them, etc.                      !!
 * !! 3) Use `fjs push-upstream` to copy your changes back to    !!
 * !!    static_upstream.                                        !!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule joinClasses
 * @flow
 * @typechecks static-only
 */

'use strict';

/**
 * Combines multiple className strings into one.
 */
function joinClasses(className: mixed): string {
  let newClassName = ((className: any): string) || '';
  const argLength = arguments.length;

  if (argLength > 1) {
    for (let index = 1; index < argLength; index++) {
      const nextClass = arguments[index];
      if (nextClass) {
        newClassName = (newClassName ? newClassName + ' ' : '') + nextClass;
      }
    }
  }
  return newClassName;
}

module.exports = joinClasses;