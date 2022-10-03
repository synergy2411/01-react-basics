import React from 'react'

export default function ExpenseItem(props) {
  return (
    <div>
        <h6>{props.exp.title.toUpperCase()}</h6>
    </div>
  )
}
