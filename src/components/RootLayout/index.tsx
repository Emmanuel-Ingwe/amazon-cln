import React from 'react'
import BottomHeader from '../Header/BottomHeader'
import Header from '../../components/Header/index'
import Footer from "@/components/Footer"



type Props = {}

const index = (props: Props) => {
  return (
    <>
        <Header />
        <BottomHeader />
        <Footer />
    </>
  )
}

export default index