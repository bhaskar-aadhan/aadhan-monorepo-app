import React from 'react'
import FormSection from './sections/form-section'

type ScreenPropsTypes = {
    API_URL: string
}


const Screen = ({ API_URL }: ScreenPropsTypes) => {
    return (
        <section className='stack_layout py-20 px-8'>
            <div className='max-w-3xl mx-auto shadow-lg border border-teal-100 p-3 rounded-xl'>
                <FormSection apiUrl={API_URL} />
            </div>
        </section>
    )
}

export default Screen