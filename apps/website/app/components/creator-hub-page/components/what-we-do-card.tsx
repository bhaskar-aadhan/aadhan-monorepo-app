import ImageRender from "~/shared/ImageRender";

type CreatorWhatWeDoCardProps = {
    title: string;
    description: string;
    icon: string;
}

const CreatorWhatWeDoCard = ({ title, description, icon }: CreatorWhatWeDoCardProps) => {
    return (
        <div className='grid grid-cols-[40px_1fr] grid-rows-2 gap-x-5'>
            <div className='row-span-2'>
                <ImageRender
                    src={icon}
                    className='w-full h-full object-contain -translate-y-2'
                    width={30}
                />
            </div>
            <div className='col-start-2 col-end-3 content-end font-semibold text-base xs:text-2xl'>
                {title}
            </div>
            <div className='col-start-2 col-end-3 text-xxs xs:text-xs'>
                {description}
            </div>
        </div>
    )
}

export default CreatorWhatWeDoCard;