import React from 'react'
import Image from 'next/image'
import logo from '../../images/logo.png'

type Props = {}

const index = (props: Props) => {
  return (
    <div className='w-full h-20 bg-amazon_blue'>
        <Image className='' src={logo} alt='logoimg' />
    </div>
  )
}

export default index