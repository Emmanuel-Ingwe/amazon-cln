import React from 'react'

interface Props {
    amount: number
}

const index = ({ amount }: Props) => {
    const formattedAmount = new Number(amount).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
    })

  return (
    <span>{formattedAmount}</span>
  )
}

export default index