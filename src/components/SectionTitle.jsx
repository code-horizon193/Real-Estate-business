import React from 'react'

const SectionTitle = ({ title, discription, id }) => {
    return (
        <div id={id} className="min-h-[300px] flex-center justify-center w-full land-grad">
            <div className="max-container flex-center">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-white">
                        {title}
                    </h1>
                    <p className="mt-2 text-sm text-gray-60 lg:max-w-3xl">
                        {discription}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SectionTitle;