import React from 'react';
import "./Partner.scss";

const Partner = () => {
  return (
    <section className="partner-section">
        <div className="container-lg">
            <div className="partner-content f-between">
                <h3>Our Partners:</h3>
                <div className="partners-link f-between">
                    <a href="https://www.talentprotocol.com/" target="_blank" rel="noopener noreferrer"><img src="https://crowdhack.io/images/landing/talent_protocol.png" alt="image"/></a>
                    <a href="https://aag.ventures/" target="_blank" rel="noopener noreferrer"><img src="https://crowdhack.io/images/landing/aag.png" alt="image"/></a>
                    <a href="https://aurora.dev/" target="_blank" rel="noopener noreferrer"><img src="https://crowdhack.io/images/landing/aurora.png" alt="image"/></a>
                    <a href="https://www.warena.io/" target="_blank" rel="noopener noreferrer"><img src="https://crowdhack.io/images/landing/w.png" alt="image"/></a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Partner