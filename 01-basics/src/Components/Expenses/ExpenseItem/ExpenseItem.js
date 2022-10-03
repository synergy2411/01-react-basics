import React from 'react'

export default function ExpenseItem(props) {
  return (
    <div>
        <h6>{props.exp.title.toUpperCase()} | {props.exp.id.toString()}</h6>
    </div>
  )
}
