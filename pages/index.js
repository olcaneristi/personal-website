import About from '../components/about'
import Contact from '../components/contact'
import Resume from '../components/resume'
import Header from '../components/header'
import Footer from '../components/footer'
import Home from '../components/home'
import Head from 'next/head';

export default () => (
  <div className="app">
    <Head>
    <link rel="shortcut-icon" href="/public/favicon.ico"/>
        <title>Ogulcan Eristi </title>

        <meta name="title1" content="Ogulcan Eristi " />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta
          name="keyword"
          content="reactjs, react, javascript, js, nextjs, next, ogulcan, eristi, ogulcan eristi, junior, jr, frontend, developer, frontend developer"
        />

        <meta
          name="description"
          content="I'm Ogulcan Eristi. I'm Jr. Frontend developer and MIS student."
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
