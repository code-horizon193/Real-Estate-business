import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import IconContainer from '../../components/IconContainer';
import { iconBoxs } from '../../assets/data';

const ServcesLand = () => {
    return (
        <div>
            <SectionTitle
                id="experience"
                title="Elevate Your Real Estate Experience"
                discription="Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams."
            />
            <div className="mt-0 max-container">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-5 pr-2">
                    {iconBoxs.map((box, i) => (
                        <IconContainer
                            key={i}
                            icon={box.icon}
                            description={box.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ServcesLand;