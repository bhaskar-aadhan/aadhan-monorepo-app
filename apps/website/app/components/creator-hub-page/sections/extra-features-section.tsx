import React from 'react';
import CreatorWhatWeDoCard from '../components/what-we-do-card';
import { CreatorWhatWeDoCardExtraFeaturesData } from '../../../../constants';
import { getUniqueKey } from '@repo/utils';
import IphoneMock from '~/components/iphone-mock';

const ExtraFeaturesSection = () => {
    return (
        <div className='stack_layout px-8 py-10'>
            <div className="size-full border-shadow shadow-lg rounded-xl border border-teal-100 grid grid-cols-1 md:grid-cols-2 gap-1 py-10 px-5">
                <div className='grid grid-cols-1 grid-rows-4 gap-1'>
                    {CreatorWhatWeDoCardExtraFeaturesData.map((item) => (
                        <CreatorWhatWeDoCard
                            key={getUniqueKey()}
                            title={item.title}
                            description={item.description}
                            icon={item.icon}
                        />
                    ))}
                </div>
                <div>
                    <div className='max-w-96 mx-auto'>
                        <IphoneMock
                            className='w-60 h-96 py-2'
                            playerClassName="w-full h-82 rounded-3xl"
                            posterClassName='rounded-3xl'
                            playBackId='6504d62d-2fc5-4b38-a5e7-61962e10c3a3'
                            poster='/creator-hub/creator-hub-features-thumb.png'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExtraFeaturesSection