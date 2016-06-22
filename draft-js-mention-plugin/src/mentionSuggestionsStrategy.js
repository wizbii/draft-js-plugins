/* @flow */

import findWithRegex from 'find-with-regex';
import trigger from './trigger';

// textSearchWhiteSpaces can be a number to define how
// much white spaces are allowed but can also be an empty
// string to allow an infinite number of white spaces
export default (textSearchWhiteSpaces: any) => {
  const MENTION_REGEX = new RegExp(`(\\s|^)${trigger}((\\w+\\s{0,${String(textSearchWhiteSpaces)}})+)`, 'g');

  return (contentBlock: Object, callback: Function) => {
    findWithRegex(MENTION_REGEX, contentBlock, callback);
  };
};
