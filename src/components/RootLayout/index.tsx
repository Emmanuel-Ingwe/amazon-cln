import React, { ReactElement } from 'react'
import BottomHeader from '../Header/BottomHeader'
import Header from '../../components/Header/index'
import Footer from "@/components/Footer"



interface Props {
    children: ReactElement
}

const index = ({ children }: Props) => {
  return (
    <>
        <Header />
        <BottomHeader />
        {children}
        <Footer />
    </>
  )
}

export default index