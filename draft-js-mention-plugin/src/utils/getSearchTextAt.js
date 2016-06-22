import trigger from '../trigger';

const getSearchTextAt = (blockText, position) => {
  const str = blockText.substr(0, position);
  const begin = str.lastIndexOf(trigger);
  const word = str.slice(begin + trigger.length);
  const end = str.length;

  return {
    word,
    begin,
    end
  };
};

export default getSearchTextAt;
