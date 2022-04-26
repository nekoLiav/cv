import React from 'react';
import PropTypes from 'prop-types';

function General(props) {
  const { hello } = props;

  return (
    <div>
      <form>
        <label htmlFor="name">
          Name:
          <input type="text" id="name" />
        </label>
        <label htmlFor="email">
          Email:
          <input type="email" id="email" />
        </label>
        <label htmlFor="phone">
          Phone Number:
          <input type="text" id="phone" />
        </label>
      </form>
      <p>{hello}</p>
    </div>
  );
}

General.propTypes = {
  hello: PropTypes.string
};

General.defaultProps = {
  hello: 'john'
};

export default General;
