import React from 'react';
import {
    MainSection,
    RegisterNowSection,
    WhatWeDoSection,
    CreatorHubSupportSection,
    ExtraFeaturesSection,
    RegisterSection
} from './sections';

const Screen = () => {
    return (
        <div>
            <MainSection />
            <RegisterNowSection />
            <WhatWeDoSection />
            <CreatorHubSupportSection />
            <ExtraFeaturesSection />
            <RegisterSection />
        </div>
    )
}

export default Screen