import React from 'react'
import Button from '~/shared/button'
import ImageRender from '~/shared/ImageRender'

const RegisterNowSection = () => {
    return (
        <div className='stack_layout px-8 flex flex-col sm:flex-row justify-between items-center gap-5'>
            <div className='grid grid-cols-1 gap-5'>
                <div className='max-w-2xl mx-auto text-justify hyphens-auto pt-5 md:pt-0 font-semibold text-base md:text-xl font-main leading-7 md:leading-9'>
                    From original content development to strategic brand partnerships, the Creator Hub empowers you to choose only what aligns with your goals—enabling you to grow your influence, on your terms.
                </div>
                <Button
                    href='/creator-hub/register'
                    text=' Register Now'
                    className='text-lg'
                />
            </div>
            <div>
                <ImageRender
                    src="download-sub-bg.svg"
                    className='w-72 md:-translate-y-20'
                    width={288}
                    height={288}
                />
            </div>
        </div>
    )
}

export default RegisterNowSection