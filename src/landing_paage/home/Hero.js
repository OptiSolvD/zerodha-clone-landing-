import React from 'react'
function Hero() {
    return (  
        <div className="container">
            <div className="row text-center">
                <img src="media/images/homeHero.png" alt="heroImg" className='mb-5'/>
                <h1 className='mt-5'>Invest in everything</h1>
                <p>Online platform to stocks, derivatives,mutual funds and more</p>
                <button className='p-2 btn btn-primary fs-5' style={{width:"20%", margin: "0 auto"}}>Sign Up</button>
            </div>
            
        </div>
    );
}

export default Hero;