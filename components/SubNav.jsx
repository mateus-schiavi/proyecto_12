import React from 'react'

function SubNav() {
    return (
        <div>
            <h1 className='story'>Story, emotion and purpose</h1>
            <p className='subtext'>
                We help transform your ideias
                into real world applications
                that will outperform your
                toughest competition and help you
                achieve your strategic goals in
                short period of time.
            </p>
            <div>
                <p className='contact'>Want us to contact you?</p>
                <input className='input' type="text" placeholder='email'/>
                <button className='button'>Join</button>
            </div>
            <div>
                <h1 className='offer'>
                    We offer High Demands
                </h1>
            </div>
            <div className='business'>
                <h1>Good desings means good business</h1>
            </div>
            <div>
                <img className='smarthome' src="edie-homepage-master\smarthome.jpg" alt="photo" />
                <p className='application'>Smart home dashboard</p>
                <img className='master' src="edie-homepage-master\onboard.png" alt="" />
                <p className='onboard'>Onboard application</p>
            </div>
            <div>
                <img className='booking' src="edie-homepage-master\booking.png"/>
                <p className='system'>Booking System</p>
            </div>
            <div>
                <img className='juice' src="edie-homepage-master\juice-product.png"/>
            </div>
        </div>
    )
}

export default SubNav