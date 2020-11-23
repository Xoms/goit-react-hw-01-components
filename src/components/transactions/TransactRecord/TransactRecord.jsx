import React from 'react';
import PropTypes from 'prop-types';


const TransactRecord = ({id, type, amount, currency}) => (
  <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
  </tr>
);

TransactRecord.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount:  PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactRecord;
