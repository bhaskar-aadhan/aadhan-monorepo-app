import React from 'react'
import ImageRender from '~/shared/ImageRender'
import { getUniqueKey } from '@repo/utils'
import CreatorWhatWeDoCard from '../components/what-we-do-card'
import { CreatorWhatWeDoCardData } from '../../../../constants';
import Section from '~/shared/Section';

const WhatWeDoSection = () => {
    return (
        <Section className='py-0'>
            <div className='font-main h-40 xs:h-48 overflow-hidden grid place-content-center mb-20'>
                {/* <div className='size-56 xs:size-80 sm:size-97 rounded-full shadow-2xl grid place-content-center -translate-y-1 xs:-translate-y-5 md:-translate-y-20 outline outline-9 outline-white-grey'>
                    <div className='bg_gradient_text font-bold text-2xl xs:text-3xl sm:text-5xl translate-y-3 xs:translate-y-7 md:translate-y-14'>What We Do</div>
                </div> */}
                <div className='font-main font-bold text-2xl xs:text-3xl sm:text-5xl translate-y-3 xs:translate-y-7 md:translate-y-14 text-shadow-xs'>What We Do</div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 shadow-lg border border-teal-100 p-3 md:shadow-none md:border-none  md:p-0 rounded-xl'>
                <div className='border-shadow px-5 py-10 rounded-4xl'>
                    <div className='grid grid-cols-1 grid-rows-4 gap-1 max-w-96'>
                        {CreatorWhatWeDoCardData?.map((item) => (
                            <CreatorWhatWeDoCard
                                key={getUniqueKey()}
                                title={item.title}
                                description={item.description}
                                icon={item.icon}
                            />
                        ))}
                    </div>
                </div>
                <div className='md:-translate-x-8 lg:-translate-x-24 ms-auto md:ms-0 flex items-center'>
                    <ImageRender
                        className='max-w-94 lg:max-w-lg'
                        width={384}
                        src="creator-hub/creator-hub-yt.svg"
                    />
                </div>
            </div>
        </Section>
    )
}
export default WhatWeDoSection