"use client";
import React, { useState } from "react";
import ExpenseList from "../../expense-report/components/ExpenseList";
import ExpenseFilter from "@/expense-report/components/ExpenseFilter";
import ExpenseForm from "@/expense-report/components/ExpenseForm";
import categories from "@/expense-report/categories";

export default function Expenses() {
	const [selectedCategory, setSelectedCategory] = useState("");
	const [expenses, setExpenses] = useState([
		{ id: 1, description: "aaa", amount: 10, category: "Utilities" },
		{ id: 2, description: "bbb", amount: 10, category: "Entretainment" },
		{ id: 3, description: "ccc", amount: 10, category: "Utilities" },
		{ id: 4, description: "ddd", amount: 10, category: "Groceries" },
	]);
	const visibleExpenses = selectedCategory
		? expenses.filter((e) => e.category === selectedCategory)
		: expenses;
	return (
		<div className='flex flex-col mx-auto content-center px-6'>
			<h1 className='text-center'>Expenses</h1>
			<ExpenseForm
				onSubmit={(newExpense) =>
					setExpenses([
						...expenses,
						{ ...newExpense, id: expenses.length + 1 },
					])
				}
			/>
			<ExpenseFilter
				onSelectCategory={(category) => setSelectedCategory(category)}
			/>
			<ExpenseList
				expenses={visibleExpenses}
				onDelete={(id) =>
					setExpenses(expenses.filter((e) => e.id !== id))
				}
			/>
		</div>
	);
}
