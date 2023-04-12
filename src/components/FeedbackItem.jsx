// import { useState } from 'react';
import { FaTimes, FaEdit } from 'react-icons/fa';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import Card from './shared/Card';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem({ item }) {
  // const [rating, setRating] = useState(7);
  // const [text, setText] = useState('This is an example of a feedback item');
  // const handleClick = (id) => {
  //   console.log(id);
  // };
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button className='close' onClick={() => deleteFeedback(item.id)}>
        <FaTimes color='purple' />
      </button>
      <button className='edit' onClick={() => editFeedback(item)}>
        <FaEdit color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
  /* The "div" elements in the Card component are the "children" the we destructuring in Card component. */
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;

/* Note:
Shortcut for creating function component with "export default" will be "rfce".
Shortcut for creating a "div" element with class name "num-display" will be ".num-display".
Shortcut for creating a "div" element with class name "text-display" will be ".text-display".
Shortcut for creating a button with a className='close' (The x button) "button.close". 

As we remember in "Hooks" for example:
const [rating, setRating] = useState(7);
the "rating" will be the variable and the "setRating" will be the function that we trigger.

The "item" refer to each item in the array data.


----------------Example for component with use of "useState" hook for counting--------------

import { useState } from 'react';

function FeedbackItem() {
  const [rating, setRating] = useState(7);
  const [text, setText] = useState('This is an example of a feedback item');

  const handleClick = () => {
    setRating((prev) => {
      console.log(prev);
      return prev + 1;
    });
  };

  return (
    <div className='card'>
      <div className='num-display'>{rating}</div>
      <div className='text-display'>{text}</div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default FeedbackItem;

----------------Example for component with use of "useState" hook for counting--------------



*/
