import React from 'react'
import './styles/newsletter.scss'
const Newsletter = () => {
    return (
        <>
            <div className="newsletter">
                <div className="newsletter-content">
                    <div className="newsletter-text">
                        <h2>Subscribe to our Newsletter</h2>
                        <p>Subscribe to our newsletter and get updates on our latest courses, events, and blog posts.
                            Join our community and be the first to know what's happening at EduVibe.</p>
                    </div>
                    <div className="newsletter-form">
                        <input type="email" placeholder="Enter your email address" />
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Newsletter
