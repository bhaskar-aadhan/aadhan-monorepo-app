import React from 'react'
import Button from '~/shared/button'
import ImageRender from '~/shared/ImageRender'

const RegisterSection = () => {
    return (
        <section className='stack_layout px-8 py-10'>
            <div className='shadow-lg border-shadow rounded-xl border border-teal-100 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-1 py-10'>
                <div className='flex justify-center items-center'>
                    <ImageRender
                        src='creator-hub/creator-hub-register.svg'
                        width={384}
                        alt="Register Now"
                        className='w-4/5'
                    />
                </div>
                <div className='grid place-content-center gap-10'>
                    <div className='text-center max-w-96 mx-auto text-base xs:text-lg lg:text-2xl font-main font-medium px-3'>
                        "Join the <span className='bg_gradient_text'>Creator Hub</span> and take the next step in your influencer journey. Register today to unlock exclusive opportunities and elevate your digital presence."
                    </div>
                    <div className='flex items-center justify-center'>
                        <Button
                            href='/creator-hub/register'
                            text='Register Now'
                            className='text-lg'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RegisterSection