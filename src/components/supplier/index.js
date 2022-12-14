import React from 'react'

function Supplier() {
    return (
        <section className='pt-[78px] bg-[#F0F0F0]'>
            <div className='max-w-container mx-auto'>
                <div className='flex justify-between'>
                    <div className='max-w-[289px]'>
                        <h2 className='font-poppins font-bold text-5xl leading-[72px]'>The biggest supplier on the country</h2>
                    </div>
                    <div className='max-w-[651px] flex items-center'>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-between pt-[100px]'>
                <div>
                    <picture>
                        <img src='images/supplier1.png' loading='lazy'/>
                    </picture>
                </div>

                <div>
                    <picture>
                        <img src='images/supplier2.png' loading='lazy'/>
                    </picture>
                </div>

                <div>
                    <picture>
                        <img src='images/supplier3.png' loading='lazy'/>
                    </picture>
                </div>

                <div>
                    <picture>
                        <img src='images/supplier4.png' loading='lazy'/>
                    </picture>
                </div>
            </div>
        </section>
    )
}

export default Supplier