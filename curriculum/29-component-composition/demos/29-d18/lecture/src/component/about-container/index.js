import React from 'react'
import './_about-container.scss'
import Navbar from '../navbar'

class AboutContainer extends React.Component {
  render() {
    console.log(this)
    return (
      <div className='about-container'>
        <Navbar />
        <p>say hi to the world!</p>
      </div>
    )
  }
}

export default AboutContainer