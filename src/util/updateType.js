/*
    This function receives the state of the shelf that the book is in. 
    It converts the state to a string that will be displayed in the site
  */

const updateType = (oldType) => {
  if (oldType === 'currentlyReading') {
    return "I'm reading";
  }

  if (oldType === 'wantToRead') {
    return 'I Want to Read';
  }

  if (oldType === 'read') {
    return 'I Already Read';
  }

  return 'Error: Type does not exist';
};

export default updateType;
