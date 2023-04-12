// import PropTypes from 'prop-types';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  // Calculate rating average
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;
  /* Here we calculating in the callback function "feedback.reduce()" the average score. The second argument in this function by default will be, count from is zero. So this function calculates all ratings + the current then divide them by the number of feedbacks. */

  average = average.toFixed(1).replace(/[.,] 0$/, '');

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

// FeedbackStats.propTypes = {
//   feedback: PropTypes.array.isRequired,
// };
/* We don't need "propTypes" here because we using "FeedbackContext" that uses "Context" that lets the parent component make some information available to any component in the tree below it—no matter how deep—without passing it explicitly through props.*/

export default FeedbackStats;

/* Note:
"acc" is a accumulator (Accumulator takes on the returned value in the second iteration. currentValue will be the second array item. We return the sum of the two values we have, accumulator and currentValue . This process goes on until reduce loops through the entire array.
Also an accumulator is primarily used as a register in a CPU to store intermediate logical or arithmetic data in multi step calculations. For such calculations, it functions as a temporary storage location).
"cur" is a current value.

"isNaN()" is a function that output any number.

".toFixed()" to change the decimal point of the number, in our case it will in the range of two digits for example: 8.5 and not the 8.555555

/[.,] 0$/, '' this is a regular expression to remove a zero number for example: instead 8.0 it will represent 8.

*/
