import React from 'react'
import SeactionHeader from '../../components/SeactionHeader';
import ValueCard from '../../components/ValueCard';
import Button from '../../components/Button';


const PropertyValue = ({ headerTitle, headerSubtitle, data, btn_id, btnTitle, cardTitle, cardCaption }) => {
    return (
        <section className='mt-5'>
            <div className="max-container">
                <SeactionHeader
                    title={headerTitle}
                    subTiltle={headerSubtitle}
                />

                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {data.map((item) => (
                        <ValueCard
                            key={item.propName}
                            imgSrc={item.icon}
                            valueName={item.propName}
                            valueCaption={item.propCaption}
                        />
                    ))}

                    <div className=" md:col-span-2 p-5 max-w-[500px] md:max-w-full rounded-lg shadow-lg shadow-purple-60/20 prop-bg bg-gray-10 border border-gray-60/30">

                        <div className="flex-center gap-3.5 flex-col md:flex-row justify-between">
                            <p className="text-white text-lg font-semibold capitalize">
                                {cardTitle}
                            </p>
                            <Button
                                id={btn_id}
                                title={btnTitle}
                            />
                        </div>

                        <div className="text-gray-60 text-sm mt-3 md:mt-2 px-2">
                            {cardCaption}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default PropertyValue;