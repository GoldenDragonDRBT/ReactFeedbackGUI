import { FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // For instant

function AboutIconLink() {
  return (
    <div className='about-link'>
      <Link to='/about'>
        <FaQuestion size={30} />
      </Link>
    </div>
  );
}

export default AboutIconLink;

/* 
Note:
"Link" is an element that lets the user navigate to another page without reloading the page.
Unlike the "href" element ( <a href=''> ) that reload the page. this element appropriate when we want to navigate to a different site.

*/
