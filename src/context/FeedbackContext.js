import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Package for generate unique id for each of our items

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This is feedback item 1',
      rating: 10,
    },
    {
      id: 2,
      text: 'This is feedback item 2',
      rating: 9,
    },
    {
      id: 3,
      text: 'This is feedback item 3',
      rating: 7,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // For add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    /* "uuidv4()" function for generate unique id for each of our items */
    setFeedback([newFeedback, ...feedback]);
    /* Here we use spread operator(...feedback) and take all the feedback that all ready there and put them in this spread operator. So we basically taking all the objects that are all ready in feedback and putin in this array. And edition to that on the front of spread operator we want to put new feedback "newFeedback".
    So this is gonna sets feedback to the array with the current items in "...feedback" and a new one "newFeedback". */

    console.log(newFeedback);
  };

  // For delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // Update feedback item
  const updateFeedback = (id, updItem) => {
    // console.log(id, updItem);
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
