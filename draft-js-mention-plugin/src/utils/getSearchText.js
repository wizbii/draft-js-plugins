import trigger from '../trigger';

const getSearchText = (editorState, selection) => {
  const anchorKey = selection.getAnchorKey();
  const anchorOffset = selection.getAnchorOffset();
  const currentContent = editorState.getCurrentContent();
  const currentBlock = currentContent.getBlockForKey(anchorKey);
  const blockText = currentBlock.getText();

  const str = blockText.substr(0, anchorOffset);
  const begin = str.lastIndexOf(trigger);
  const word = str.slice(begin + trigger.length);
  const end = str.length;

  return {
    word,
    begin,
    end
  };
};

export default getSearchText;
