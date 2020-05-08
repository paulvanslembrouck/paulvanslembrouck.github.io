/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule cx
 */

/**
 * This function is used to mark string literals representing CSS class names
 * so that they can be transformed statically. This allows for modularization
 * and minification of CSS class names.
 *
 * The acutal implementation of this function will never be invoked because the
 * transformation of statically marked string literals will occur before the JS
 * resources gets sent to the client.
 *
 * See also the `cx()' PHP function, and the cx stub in static_upstream.
 *
 * @param string|object className to modularize, or an object of key/values.
 *                      In the object case, the values are conditions that
 *                      determine if the className keys should be included.
 * @param [string ...]  Variable list of classNames in the string case.
 * @return string       Renderable space-separated CSS className.
 */
function cx(classes) {
  throw new Error('cx: Unexpected class transformation.');
}

module.exports = cx;