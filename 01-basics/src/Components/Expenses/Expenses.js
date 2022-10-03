import React from 'react'
import ExpenseItem from './ExpenseItem/ExpenseItem'

export default function Expenses() {
    const expesnes = [
        {id : "e001", title : "grocery"},
        {id : "e002", title : "shopping"},
        {id : "e003", title : "planting"},
    ]
  return (
    <div>
        <h3>My Awesome Expense App</h3>
        {expesnes.map(exp => <ExpenseItem exp={exp} key={exp.id} />)}
    </div>

  )
}
