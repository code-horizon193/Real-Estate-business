import React from 'react';
import ServcesLand from './ServcesLand';
import PropertyValue from './PropertyValue'
import { propertuValues, efforts, info } from '../../assets/data';
import SmartInfo from '../properite/SmartInfo';
import Footer from '../../components/Footer';

const Services = () => {
  return (
    <section>
      <ServcesLand />
      <PropertyValue
        data={propertuValues}
        headerTitle="Unlock Property Value"

        headerSubtitle="Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey"

        btn_id="prop-learn-more"
        btnTitle="Learn More"
        cardTitle="Unlock the Value of Your Property Today"
        cardCaption="Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset."
      />
      <PropertyValue
        headerTitle="Effortless Property Management"
        headerSubtitle="Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you"
        data={efforts}
        btn_id="effort-learn-more"
        btnTitle="Learn More"
        cardTitle="Experience Effortless Property Management"
        cardCaption="Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership."
      />
      <SmartInfo
        data={info}
        headerTitle="Smart Investments, Informed Decisions"

        headerSubtitle="Building a real estate portfolio requires a strategic approach. Estatein's Investment Advisory Service empowers you to make smart investments and informed decisions."

        btn_id="info-learn-more"
        btnTitle="Learn More"
        cardTitle="Unlock Your Investment Potential"
        cardCaption="Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership."
      />
      <Footer />
    </section>
  )
}

export default Services;