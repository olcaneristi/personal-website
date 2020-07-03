import About from '../components/about'
import Contact from '../components/contact'
import Resume from '../components/resume'
import Header from '../components/header'
import Footer from '../components/footer'
import Home from '../components/home'
import Head from 'next/head'
import React from 'react'

function Layout(){
    return(
        <div className="app">
    <Head>
    <link rel="shortcut-icon" href="/public/favicon.ico"/>
        <title>Oğulcan Erişti </title>

        <meta name="title1" content="Oğulcan Erişti " />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta
          name="keyword"
          content="reactjs, react, javascript, js, nextjs, next, ogulcan, eristi, oğulcan erişti, oğulcan, erişti, junior, jr, frontend, developer, frontend developer"
        />

        <meta
          name="description"
          content="I'm Oğulcan Erişti. I'm Jr. Frontend developer and MIS student."
        />
    </Head>

    
    <Header/>
    <Home/>
    <About/>
    <Resume/>
    <Contact/>
    <Footer/>
  </div>
    )
}

export default Layout