/* @flow */

import findWithRegex from 'find-with-regex';
import trigger from './trigger';

// maxWordsSearch can be a number to define how
// much white spaces are allowed but can also be an empty
// string to allow an infinite number of white spaces
export default (maxWordsSearch: any) => {
  const MENTION_REGEX = new RegExp(`(\\s|^)${trigger}([^\\s]*(\\w*\\s*){0,${String(maxWordsSearch)}})`, 'g');

  return (contentBlock: Object, callback: Function) => {
    findWithRegex(MENTION_REGEX, contentBlock, callback);
  };
};
