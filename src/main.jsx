import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './header/header.jsx'
import Section1 from './section1/section1.jsx'
import Section2 from './section2/section2.jsx'
import Section3 from './section3/section3.jsx'
import Section4 from './section4/section4.jsx'
import Section5 from './section5/section5.jsx'
import Section6 from './section6/section6.jsx'
import Footer from './footer/footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    <Header/>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section5/>
    <Section6/>
    <Footer/>
  </React.StrictMode>,
)
