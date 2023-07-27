import React from 'react'
import { ProductProps } from '../../../type'
import Image from 'next/image'

type Props = {}

const index = ({ productData }: any) => {
    console.log(productData)
  return (
    <div className='w-full px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6'>
        {productData.map(({_id,title,brand,category,description,image,isNew,oldPrice,price }: ProductProps) => (
            <div key={_id}> 
                <Image width={300} height={300} src={image} alt='productImage'
                />
            </div>
        ))}
    </div>
  )
}

export default index