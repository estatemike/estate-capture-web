import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import Button from '../components/Button';

export default () => (
  <Layout>
    <section id="home" className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-2/3">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Real Estate 3D Tours
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            3D scanning for real estate agents, sellers, investors, contractors
          </p>
          <p className="mt-8 md:mt-12 pb-8">
            <AnchorLink href="#contacts">
              <Button size="lg">Contact Us</Button>
            </AnchorLink>
          </p>
        </div>
        <div className="lg:w-1/2 bg-white ">
          <img className="rounded-full" src="/pictures/matterport-interior3.jpg" alt="interior" />
        </div>
      </div>
    </section>
    <section id="benefits" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">3D tour benefits</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/2">
            <StatsBox
              primaryText="+31%"
              secondaryText="fewer days on market for home listings with 3D tour"
            />
          </div>
          <div className="w-full sm:w-1/2">
            <StatsBox
              primaryText="+9%"
              secondaryText="higher sale price on home listings with 3D tour"
            />
          </div>
          <div className="w-full sm:w-1/2">
            <StatsBox
              primaryText="+95%"
              secondaryText="more likely to call about homes with 3D walk-throughs"
            />
          </div>
        </div>
      </div>
    </section>
    <LabelText className="text-center text-gray-600">Our Services</LabelText>
    <SplitSection
      id="services"
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">3D Virtual Tours</h3>
          <p className="mt-8 font-light leading-relaxed">
            <p className="mb-4">
              With a 3D virtual tour, prospective leads can do their own walk-through of your
              properties from anywhere, anytime, generating higher engagement and interest.
            </p>
            <p className="mb-4 ml-5">
              <ul className="list-disc">
                <li>
                  Create fully immersive Google street view like 3D walk-through experience
                </li>
                <li>Option to add tags on objects to deliver your message</li>
                <li>Embed the tours on your platform of choice</li>
              </ul>
            </p>
          </p>
        </div>
      }
      secondarySlot={<img src="/pictures/matterport-interior1.jpeg" alt="interior" />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Photography
          </h3>
          <p className="mt-8 font-light leading-relaxed">
            4K print quality photography
            <ul className="mt-4 ml-5 list-disc">
              <li>Professionally retouched photos</li>
              <li>Virtual staging for interior and exteriors</li>
              <li>Embed the tours on your platform of choice</li>
            </ul>
          </p>
        </div>
      }
      secondarySlot={<img src="/pictures/matterport-interior4.jpeg" alt="interior4" />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">Floor Plans</h3>
          <p className="mt-8 font-light leading-relaxed">
            Schematic floor plans of your property. Measure any aspect of your space, such as walls,
            windows, furniture, and more.
          </p>
        </div>
      }
      secondarySlot={<img src="/pictures/floorplan.png" alt="floorplan" />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Dollhouse View
          </h3>
          <p className="mt-8 font-light leading-relaxed">
            Zoom out and see a 3D digital twin of your property from the outside and rotate it along
            any axis to see it from any perspective. You’ll be able to get the big picture of your
            space.
          </p>
        </div>
      }
      secondarySlot={<img src="/pictures/dollhouse-transparent.png" alt="dollhouse" />}
    />
    <LabelText className="text-center text-gray-600">Our Camera</LabelText>
    <SplitSection
      id="camera"
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">Matterport Pro 2</h3>
          <p className="mt-8 font-light leading-relaxed">
            <ul className="list-disc ml-5">
              <li>Professional photo resolution (134 megapixels) and 3D accuracy</li>
              <li>1% dimensional accuracy</li>
              <li>Great for scanning any size space</li>
              <li>High quality 3D capture with unlimited 4K print quality photography</li>
              <li>Perfect for homes, apartments, hotels, commercial buildings</li>
            </ul>
          </p>
        </div>
      }
      secondarySlot={<img src="/pictures/matterport-pro2.png" alt="camera" />}
    />
    <section
      id="contacts"
      className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center"
    >
      <h3 className="text-5xl font-semibold">Ready to impress your clients?</h3>
      <p className="mt-8 text-xl font-light">
        Send us an email, text or phone call for pricing and availability.
      </p>
      <p className="mt-8">
        <a href="mailto:contact@estatecapture.com">
          <Button className="mt-5 mr-5 ml-5" size="xl">
            Email
          </Button>
        </a>
        <a href="tel:(650) 318-1585">
          <Button className="mt-5 ml-5 mr-5" size="xl">
            Call
          </Button>
        </a>
      </p>
    </section>
  </Layout>
);
