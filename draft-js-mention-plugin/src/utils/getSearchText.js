import getSearchTextAt from './getSearchTextAt';

const getSearchText = (editorState, selection) => {
  const anchorKey = selection.getAnchorKey();
  const anchorOffset = selection.getAnchorOffset();
  const currentContent = editorState.getCurrentContent();
  const currentBlock = currentContent.getBlockForKey(anchorKey);
  const blockText = currentBlock.getText();

  return getSearchTextAt(blockText, anchorOffset);
};

export default getSearchText;
