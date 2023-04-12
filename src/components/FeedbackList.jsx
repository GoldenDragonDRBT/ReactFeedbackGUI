import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
// import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);

  // Here we destructuring 'feedback'
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  // return (
  //   <div className='feedback-list'>
  //     {feedback.map((item) => (
  //       <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
  //     ))}
  //   </div>
  // );
}

// FeedbackList.propTypes = {
//   feedback: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//     })
//   ),
// };
/* We don't need "propTypes" here because we using "FeedbackContext" that uses "Context" that lets the parent component make some information available to any component in the tree below it—no matter how deep—without passing it explicitly through props.*/

export default FeedbackList;

/* Note:
PropTypes library tool is a tool for type checking and documenting props in React components. For each prop in your component, you can specify rules that the value coming into the prop will be tested against.
If the prop value doesn’t pass those rules, a message will be displayed in the JavaScript console in your browser.
PropTypes only displays these warning messages when you’re using the development version of React. Once your app is deployed and using the production version of React, PropTypes is silent.
*/
