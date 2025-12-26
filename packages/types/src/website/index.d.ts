
export type ChannelMainSectionTypes = {
    title: string;
    description: string;
    imgSrc: string
}

export type ProductTypes = {
    title: string;
    iconSrc: string;
    subTitle: string;
    description: string;
    knowMoreLink: string;
    socialLinks?: Footer2DataTypes[]
}
export type ChannelProductsSectionTypes = ChannelProductSectionTypes[]

export type YtChannelTypes = {
    title: string;
    iconSrc: string;
    description: string;
    videoSrc: string;
    publicId: string;
    knowMoreLink: string;
}
export type ChannelYtSectionTypes = YtChannelTypes[]

export type YtOverviewChannelTypes = {
    title: string;
    subTitle: string;
    iconSrc: string;
    videoSrc: string;
};
export type ChannelYtOverviewSectionTypes = {
    title: string;
    description: string;
    channels: YtOverviewChannelTypes[];
}

export type PeopleTrustAadhanTypes = {
    id: number;
    iconSrc: string;
    description: string;
    value: string;
}

export type PeopleTrustAadhanSocialTypes = {
    ytUrl: string,
    instaUrl: string,
    fbUrl: string,
    xUrl: string
}

export type ChannelPeopleTrustAadhanSectionTypes = {
    socialLinks: PeopleTrustAadhanSocialTypes,
    channels: PeopleTrustAadhanTypes[];
}

export type ChannelSectionTypes = {
    lang: string;
    main: ChannelMainSectionTypes;
    products: ChannelProductsSectionTypes;
    yt: ChannelYtSectionTypes;
    ytOverview: ChannelYtOverviewSectionTypes;
    peopleTrustAadhan: ChannelPeopleTrustAadhanSectionTypes;
}


export type ChanelPageTypes = {
    sections: ChannelSectionTypes
}

export type ContactOveviewTypes = {
    id: number;
    link: string;
    title: string;
    imgSrc: string;
}

export type ContactOverviewSectionTypes = ContactOveviewTypes[];

export type Footer2DataTypes = {
    id: number,
    name: string,
    imgSrc: string,
    link: string
}

export type JobsFilterTypes = {
    location: string;
    jobType: string;
    query: string;
    page: string;
    perPage: string
}

export type VideoPlayerOptionsTypes = {
    controls?: boolean;
    autoPlay?: boolean;
    muted?: boolean;
    loop?: boolean;
}
    