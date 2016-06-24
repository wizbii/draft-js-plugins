import React, { Component } from 'react';
import Container from '../../shared/Container';
import AlternateContainer from '../../shared/AlternateContainer';
import Heading from '../../shared/Heading';
import styles from './styles.css';
import Code from '../../shared/Code';
import SimpleMentionEditor from './SimpleMentionEditor';
import CustomMentionEditor from './CustomMentionEditor';
import RemoteMentionEditor from './RemoteMentionEditor';
import simpleExampleCode from '!!../../../loaders/prism-loader?language=javascript!./SimpleMentionEditor';
import simpleExampleMentionsCode from '!!../../../loaders/prism-loader?language=javascript!./SimpleMentionEditor/mentions.js';
import simpleExampleEditorStylesCode from '!!../../../loaders/prism-loader?language=css!./SimpleMentionEditor/editorStyles.css';
import customExampleCode from '!!../../../loaders/prism-loader?language=javascript!./CustomMentionEditor';
import customExampleMentionsCode from '!!../../../loaders/prism-loader?language=javascript!./CustomMentionEditor/mentions.js';
import customExampleEditorStylesCode from '!!../../../loaders/prism-loader?language=css!./CustomMentionEditor/editorStyles.css';
import customExampleMentionsStylesCode from '!!../../../loaders/prism-loader?language=css!./CustomMentionEditor/mentionsStyles.css';
import remoteExampleCode from '!!../../../loaders/prism-loader?language=javascript!./RemoteMentionEditor';
import remoteExampleEditorStylesCode from '!!../../../loaders/prism-loader?language=css!./RemoteMentionEditor/editorStyles.css';
import SocialBar from '../../shared/SocialBar';
import NavBar from '../../shared/NavBar';
import Separator from '../../shared/Separator';
import webpackConfig from '!!../../../loaders/prism-loader?language=javascript!./webpackConfig';
import webpackImport from '!!../../../loaders/prism-loader?language=javascript!./webpackImport';
import ExternalLink from '../../shared/Link';
import InlineCode from '../../shared/InlineCode';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Separator />
        <Container>
          <Heading level={ 2 }>Mention</Heading>
          <p>
            Mentions for everyone! This plugin allows the user to choose an entry from a list. After selection an entry the search text will be replace with the selected entity. The list of suggestions mentions needs to contain at least a name to display. If desired a link and/or an avatar image can be provided.
          </p>
          <Heading level={ 3 }>Escape Behaviour</Heading>
          <p>
            While the suggestion popover is open, the user can close it by pressing ESC.
            This will be stored for as long as the the selection stays inside
            the word that triggered the search. After the selection left this word once the escape behaviour will be reset.
            The suggestions will appear again once the user selects the word that
            that triggered the selection.
          </p>
        </Container>
        <AlternateContainer>
          <Heading level={ 2 }>Getting Started</Heading>
          <Code code="npm install draft-js-plugins-editor --save" />
          <Code code="npm install draft-js-mention-plugin --save" />
          <Code code="Please checkout the 'Simple Example' further down the page." />
          <Heading level={ 3 }>Importing the default styles</Heading>
          <p>
            The plugin ships with a default styling available at this location in the installed package:
            &nbsp;
            <InlineCode code={ 'node_modules/draft-js-mention-plugin/lib/plugin.css' } />
          </p>
          <Heading level={ 4 }>Webpack Usage</Heading>
          <ul className={ styles.list }>
            <li className={ styles.listEntry }>
              1. Install Webpack loaders:
              &nbsp;
              <InlineCode code={ 'npm i style-loader css-loader --save-dev' } />
            </li>
            <li className={ styles.listEntry }>
              2. Add the below section to Webpack config (if your config already has a loaders array, simply add the below loader object to your existing list.
              <Code code={ webpackConfig } className={ styles.guideCodeBlock } />
            </li>
            <li className={ styles.listEntry }>
              3. Add the below import line to your component to tell Webpack to inject the style to your component.
              <Code code={ webpackImport } className={ styles.guideCodeBlock } />
            </li>
            <li className={ styles.listEntry }>
              4. Restart Webpack.
            </li>
          </ul>
          <Heading level={ 4 }>Browserify Usage</Heading>
          <p>
            Please help, by submiting a Pull Request to the <ExternalLink href="https://github.com/draft-js-plugins/draft-js-plugins/blob/master/docs/client/components/pages/Mention/index.js">documentation</ExternalLink>.
          </p>
        </AlternateContainer>
        <Container>
          <Heading level={ 2 }>Configuration Parameters</Heading>
          <div className={ styles.param }>
            <span className={ styles.paramName }>theme</span>
            <span>Object of CSS classes with the following keys.</span>
            <div className={ styles.subParams }>
              <div className={ styles.subParam }>
                <span className={ styles.subParamName }>mention:</span>
                CSS class for mention text.
              </div>
              <div className={ styles.subParam }>
                <span className={ styles.subParamName }>mentionSuggestions:</span>
                CSS class for suggestions component.
              </div>
              <div className={ styles.subParam }>
                <span className={ styles.subParamName }>mentionSuggestionsEntry:</span>
                CSS class for an entry in the suggestions component.
              </div>
              <div className={ styles.subParam }>
                <span className={ styles.subParamName }>mentionSuggestionsEntryFocused:</span>
                CSS class for the focused entry in the suggestions component.
              </div>
              <div className={ styles.subParam }>
                <span className={ styles.subParamName }>mentionSuggestionsEntryText:</span>
                CSS class for an entry’s text in the suggestions component.
              </div>
              <div className={ styles.subParam }>
                <span className={ styles.subParamName }>mentionSuggestionsEntryAvatar:</span>
                CSS class for an entry’s avatar image in the suggestions component.
              </div>
            </div>
          </div>
          <div className={ styles.param }>
            <span className={ styles.paramName }>positionSuggestions</span>
            <span>The function can be used to manipulate the position of the popover containing the suggestions. It receives one object as arguments containing the visible rectangle surrounding the decorated search string including the @. In addition the object contains prevProps, prevState, state & props. An object should be returned which can contain all sorts of styles. The defined properties will be applied as inline-styles.</span>
          </div>
          <div className={ styles.param }>
            <span className={ styles.paramName }>entityMutability</span>
            <span>Can be one of: "IMMUTABLE", "SEGMENTED" or "MUTABLE". Read in detail about it
            <ExternalLink
              href="https://facebook.github.io/draft-js/docs/advanced-topics-entities.html#mutability"
            >
              &nbsp;here
            </ExternalLink>
            </span>
          </div>
          <div className={ styles.param }>
            <span className={ styles.paramName }>mentionPrefix</span>
            <span>By default it is an empty String. For Twitter or Slack like mention behaviour you can provide an `@`</span>
          </div>
          <Heading level={ 3 }>MentionSuggestions</Heading>
          <div>
            The MentionSuggestions component is part of the plugin and should placed somewhere in the
            JSX after the Editor. It takes the following props:
            <div className={ styles.param }>
              <span className={ styles.paramName }>onSearchChange</span>
              <span>A callback which is triggered whenever the search term changes. The first argument is an object which constains the search term in the property value.</span>
            </div>
            <div className={ styles.param }>
              <span className={ styles.paramName }>suggestions</span>
              <span>The list of suggestions to be shown.</span>
            </div>
            <div className={ styles.param }>
              <span className={ styles.paramName }>onOpen</span>
              <span>A callback which is triggered whenever the suggestions popover opens.</span>
            </div>
            <div className={ styles.param }>
              <span className={ styles.paramName }>onClose</span>
              <span>A callback which is triggered whenever the suggestions popover closes.</span>
            </div>
            <div className={ styles.param }>
              <span className={ styles.paramName }>entryComponent</span>
              <span>Component to be used as the template for each of the suggestions' entry.</span>
            </div>
          </div>
          <Heading level={ 3 }>Additional Exports</Heading>
          <div>
            In addition to the plugin the module exports `defaultSuggestionsFilter`. As first argument it takes the search term as a String. The second argument is the Immutable list of mentions. The function returns the filter list based on substring matches.
            <Code code="import { defaultSuggestionsFilter } from 'draft-js-mention-plugin';" />
          </div>
        </Container>
        <Container>
          <Heading level={ 2 }>Simple Example</Heading>
          <SimpleMentionEditor />
          <Code code={ simpleExampleCode } name="SimpleMentionEditor.js" />
          <Code code={ simpleExampleMentionsCode } name="mentions.js" />
          <Code code={ simpleExampleEditorStylesCode } name="editorStyles.css" />
        </Container>
        <Container>
          <Heading level={ 2 }>Themed Mention Example</Heading>
          <CustomMentionEditor />
          <Code code={ customExampleCode } name="CustomMentionEditor.js" />
          <Code code={ customExampleMentionsStylesCode } name="mentionsStyles.js" />
          <Code code={ customExampleMentionsCode } name="mentions.js" />
          <Code code={ customExampleEditorStylesCode } name="editorStyles.css" />
        </Container>
        <Container>
          <Heading level={ 2 }>Remote Data Mention Example</Heading>
          <RemoteMentionEditor />
          <Code code={ remoteExampleCode } name="RemoteMentionEditor.js" />
          <Code code={ remoteExampleEditorStylesCode } name="editorStyles.css" />
        </Container>
        <SocialBar />
      </div>
    );
  }
}
