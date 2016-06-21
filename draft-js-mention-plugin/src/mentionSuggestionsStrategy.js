/* @flow */

import findWithRegex from 'find-with-regex';
import trigger from './trigger';

const MENTION_REGEX = new RegExp(`(\\s|^)${trigger}((\\w+\\s*)+)`, 'g');

export default (contentBlock: Object, callback: Function) => {
  findWithRegex(MENTION_REGEX, contentBlock, callback);
};
