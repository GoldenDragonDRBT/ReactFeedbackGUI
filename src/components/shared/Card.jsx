import PropTypes from 'prop-types';

function Card({ children, reverse }) {
  // return <div className={`card ${reverse && 'reverse'}`}>{children}</div>; // This is conditional class
  return (
    // This is conditional style
    <div
      className='card'
      style={{
        backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
        color: reverse ? '#fff' : '#000',
      }}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
  reverse: false,
};

Card.propsTypes = {
  children: PropTypes.node.isRequired, // The ".node" validator checks whether the prop's value is something that can be rendered.
  reverse: PropTypes.bool,
};

export default Card;

/* Note:

PropTypes can perform a wide variety of checks on a component’s props, including the data type (as you’ve seen), whether required props are passed, the shape of properties passed as objects, and more.
Validating Data Type:
We already seen how to check whether a prop is one of JavaScript’s data types. The validators for JavaScript types are:

PropTypes.array
PropTypes.bool
PropTypes.func
PropTypes.number
PropTypes.object
PropTypes.string
PropTypes.symbol

Validating Required Props:
If a component requires a prop to be passed to it, you can indicate to PropTypes that a prop is required by appending the "isRequired" validator to the data type validator.

Validating Nodes:
The node validator checks whether the prop’s value is something that can be rendered. React calls anything that can be rendered in a component a node. The things that can be rendered in a component are =>
numbers, strings, elements, and arrays containing numbers, strings, or elements:

PropTypes.node

The node validator is useful in cases where you may not care whether the value of the prop is a string or number or element, but you do care that it can be rendered.
If one of your components does try to render a prop that isn’t a node, it will cause your program to crash and display an error in the browser as well as in the console even if you’re not using PropTypes.
We can view this default error message by trying to render a prop value that isn’t a number, string, element, or an array of renderable data.

*/
