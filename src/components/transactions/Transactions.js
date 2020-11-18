import React from 'react';
import PropTypes from 'prop-types'; 
import './Transactions.scss';

function createJsxMarkup(arr){
    return arr.map(el => 
        <tr key={el.id}>
            <td>{el.type}</td>
            <td>{el.amount}</td>
            <td>{el.currency}</td>
        </tr>
        );
}

export default function Transactions(props){
    const markup = createJsxMarkup(props.transactions);
    return (
        <div className="transactions-wrapper">
            <table className="transaction-history">
                <thead>
                    <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                    </tr>
                </thead>

                <tbody>
                    {markup}                
                </tbody>
            </table>
        </div>
    )
}
Transactions.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string
    })).isRequired    
}