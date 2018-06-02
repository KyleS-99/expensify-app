import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';

const ExpenseSummary = ({ expenseCount, total }) => (
    <div>
        <h1>Viewing {expenseCount} {expenseCount === 1 ? 'expense' : 'expenses'} totalling: {numeral(total / 100).format('$0,0.00')}</h1>
    </div>
);

const mapStateToProps = (state) => {
    const expenses = selectExpenses(state.expenses, state.filters);
    
    return {
        expenseCount: expenses.length,
        total: expensesTotal(expenses)
    };
};

export default connect(mapStateToProps)(ExpenseSummary);