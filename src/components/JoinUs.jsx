import React from 'react'

export default function JoinUs() {
  return (
    <section id='join-us'>
        <div className="content">
            <p className="primary-text">Practice Advice</p>
            <h2>JOIN US</h2>
            <p>Join our community and start your learning journey today!</p>
            <form>
                <input type="email" name='email' id='email' placeholder='Your Email' />
                 <button type='submit'>Subscribe</button>
            </form>
        
        </div>
        
    </section>
  )
}
