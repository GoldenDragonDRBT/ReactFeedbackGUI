// import { v4 as uuidv4 } from 'uuid'; // Package for generate unique id for each of our items
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { useState } from 'react';
import Header from './components/Header';
// import FeedbackItem from './components/FeedbackItem'; // Comment because we render more items with data
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
// import FeedbackData from './data/FeedbackData';
import FeedbackForm from './components/FeedbackForm';
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext'; // {} because it is not a default export of the "FeedbackProvider".

function App() {
  // const [feedback, setFeedback] = useState(FeedbackData);

  // const addFeedback = (newFeedback) => { // Comment because it's handled by "Context".
  //   newFeedback.id = uuidv4();
  //   /* "uuidv4()" function for generate unique id for each of our items */
  //   setFeedback([newFeedback, ...feedback]);
  //   /* Here we use spread operator(...feedback) and take all the feedback that all ready there and put them in this spread operator. So we basically taking all the objects that are all ready in feedback and putin in this array. And edition to that on the front of spread operator we want to put new feedback "newFeedback".
  //   So this is gonna sets feedback to the array with the current items in "...feedback" and a new one "newFeedback". */

  //   console.log(newFeedback);
  // };

  // const deleteFeedback = (id) => {
  //   if (window.confirm('Are you sure you want to delete?')) {
  //     setFeedback(feedback.filter((item) => item.id !== id));
  //   }
  // }; // Comment because it's handled by "Context" in "FeedbackContext" component.

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path='/about' element={<AboutPage />} />
          </Routes>

          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;

/* Note:

For example:
--------------------------------------------------------
function App() {
  const title = 'Blog Post'
  const body = 'This is my blog post'
  const comments = [
    {id: 1, text: 'Comment one'},
    {id: 2, text: 'Comment two'},
    {id: 3, text: 'Comment three'},
  ]

  const loading = false
  const showComments = false // If true, after the "body" will see "yes" 

  if(loading) return <h1>Loading</h1>

  const commentBlock = (
    <div className='comments'>
      <h3>Comments ({comments.length})</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.text}</li>
        ))}
      </ul>
    </div>
  )

  return (
    <div className='container'>
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>

    {showComments && commentBlock}
  </div>
  );
}
-----------------------------------------------------------------------

So our entire application reacts to global feedback "feedback" state in:  
"const [feedback, setFeedback] = useState(FeedbackData);"

"BrowserRouter" uses "HTML" history API to keep our user interface in synch with "URL".
"HashRouter" on the other hand uses the hash sign (#) portion of the "URL" to keep in synch for example: localhost:3000/#about
https://reactrouter.com/en/main

 */
