import { getUniqueKey } from '@repo/utils';
import Button from '~/shared/button';
import ImageRender from '~/shared/ImageRender';
import { socialCountCardsData } from '../../../../constants';

type CountCardTypes = {
    count: number
    text: string
    subtext: string
    outertext: string
}

const SocialCountSection = () => {
    return (
        <div className='stack_layout py-20 lg:grid lg:grid-cols-3 flex flex-col lg:flex-row items-center justify-center gap-10'>
            <div className='flex justify-end items-center'>
                <div className='flex flex-col justify-center gap-7'>
                    {socialCountCardsData?.slice(0, 3)?.map((d: CountCardTypes) => {
                        const key = getUniqueKey()
                        return (
                            <CountCard
                                key={key}
                                count={d?.count}
                                text={d?.text}
                                subtext={d?.subtext}
                                outertext={d?.outertext}
                            />)
                    })}
                </div>
            </div>
            <div className='text-center font-main font-medium text-base lg:text-xl flex flex-col gap-5'>
                {/* <p>
                    Welcome to Aadhan media! <br />
                    We are the News media digital studio that <br />
                    produces original content entertaining <br />
                    Millions worldwide. Through creativity, <br />
                    positivity and innovation, we elevate brands, <br />
                    creators, and talent all around the globe. <br />

                    Welcome to Aadhan Media — <br /> a digital news studio creating original content that   <br /> entertains and informs millions across the globe. <br /> Through creativity, innovation, and a positive outlook, <br /> we empower brands, creators, and talent to <br /> connect and thrive in the digital era. <br />
                </p> */}
                <p className='max-w-96 mx-auto'>
                    At Aadhan Media, we create powerful stories that entertain and inspire millions. Driven by creativity and innovation, we elevate voices across the globe.                </p>
                <div className='flex flex-col gap-10 items-center shadow-xl w-fit mx-auto pt-5 px-10 rounded-2xl'>
                    <div>
                        <Button href='https://aadhan.page.link/xBZc' text="Download Now" className='text-base lg:text-3xl font-medium px-4' />
                    </div>
                    <div>
                        <ImageRender
                            src='mobile-with-qr.svg'
                            alt="qr"
                        />
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center gap-7'>
                {socialCountCardsData?.slice(3)?.map((d: CountCardTypes) => {
                    const key = getUniqueKey()
                    return (
                        <CountCard
                            key={key}
                            count={d?.count}
                            text={d?.text}
                            subtext={d?.subtext}
                            outertext={d?.outertext}
                        />)
                })}
            </div>
        </div>
    )
}

const CountCard = ({ count, text, subtext, outertext }: CountCardTypes) => {
    return (
        <div className='count_card_wrappper w-fit'>
            <div className='text-primary-main border-shadow flex gap-2 ps-3 pe-8 py-1 rounded-full overflow-hidden'>
                <div className='text-6xl md:text-8xl font-bold'>
                    {count}
                </div>
                <div className='flex flex-col justify-center items-start'>
                    <span className='text-xs lg:text-base italic font-semibold mb-1'>
                        {text?.toUpperCase()?.split(',')?.map((t: string) => {
                            const key = getUniqueKey()
                            return (
                                <span key={key}>
                                    {t} <br />
                                </span>
                            )
                        })}
                    </span>
                    <span className='text-xxs md:text-xs'>{subtext}</span>
                </div>
            </div>
            <p className='text-xxs md:text-xs'>{outertext}</p>
        </div>
    )
}

export default SocialCountSection