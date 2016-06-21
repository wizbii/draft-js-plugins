import { trigger } from '../index';

const getSearchText = (editorState, selection) => {
  const anchorKey = selection.getAnchorKey();
  const currentContent = editorState.getCurrentContent();
  const currentBlock = currentContent.getBlockForKey(anchorKey);
  const blockText = currentBlock.getText();

  const begin = blockText.lastIndexOf(trigger);
  const word = blockText.slice(begin + trigger.length);
  const end = blockText.length;

  return {
    word,
    begin,
    end
  };
};

export default getSearchText;
