import React from 'react'
import SeactionHeader from '../../components/SeactionHeader';
import Button from '../../components/Button';
import ValueCard from '../../components/ValueCard';

const SmartInfo = ({ headerTitle, headerSubtitle, data, btn_id, btnTitle, cardTitle, cardCaption }) => {
    return (
        <section className='mt-5'>
            <div className="max-container">
                <div className="flex-center justify-between gap-5 flex-col lg:flex-row">
                    <div className="flex flex-col items-start gap-5 ">
                        <div className="w-full">
                            <SeactionHeader
                                title={headerTitle}
                                subTiltle={headerSubtitle}
                            />

                            <div className="mt-5 p-5 max-w-[500px] md:max-w-full rounded-lg shadow-lg shadow-purple-60/20 prop-bg bg-gray-10 border border-gray-60/30">

                                <div className="flex-center gap-3.5 flex-col">
                                    <p className="text-white text-lg font-semibold capitalize">
                                        {cardTitle}
                                    </p>
                                    <div className="text-gray-60 text-sm my-3 md:mt-2 px-2">
                                        {cardCaption}
                                    </div>
                                    <Button
                                        id={btn_id}
                                        title={btnTitle}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 w-full  grid grid-cols-1 md:grid-cols-2 gap-4">
                        {data.map((item) => (
                            <ValueCard
                                key={item.propName}
                                imgSrc={item.icon}
                                valueName={item.propName}
                                valueCaption={item.propCaption}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default SmartInfo;