import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from '../NewExpense/ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';
const Expenses = props => {
	const [filteredYear, setFilteredYear] = useState('2020');

	const filterChangeHandler = year => {
		setFilteredYear(year);
	};

	const filteredExpenses = props.items.filter(expense => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={filteredYear}
					onSelectedFilter={filterChangeHandler}
				/>
				<ExpensesChart expenses={filteredExpenses} />
				<ExpensesList items={filteredExpenses} />
			</Card>
		</div>
	);
};

export default Expenses;
