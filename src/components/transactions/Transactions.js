import React from 'react';
import PropTypes from 'prop-types'; 
import TransactRecord from './TransactRecord';
import './Transactions.scss';



export default function Transactions({transactions}){
    const markup = transactions.map(el => {
            const {id, ...rest } = el;

            return  <TransactRecord key={id} {...rest} />
        })

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