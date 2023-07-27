import React from 'react'
import { ProductProps } from '../../../type'

type Props = {}

const index = ({ productData }: any) => {
    console.log(productData)
  return (
    <div>
        {productData.map(({_id,title,brand,category,description,image,isNew,oldPrice,price }: ProductProps) => (
            <p>{title}</p>
        ))}
    </div>
  )
}

export default index