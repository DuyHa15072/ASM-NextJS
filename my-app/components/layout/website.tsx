import React from 'react'
import { LayoutProps } from '../../model/layout'
import Header from '../website/header'
import Banner from '../website/banner'
import Footer from '../website/footer'

type Props = {}

const Layout = ({children}: LayoutProps) => {
  return (
    <div>
      <header>
      <Header />
      <Banner />
      </header>
      <main>
      {children}
      </main>
      <footer>
        <Footer />
      </footer>


    </div>
  )
}

export default Layout