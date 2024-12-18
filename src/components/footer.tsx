/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import LeftArrow from "@/assets/icons/leftArrow.svg";
import { font_platinPro } from '@/fonts/fonts';

const Footer = () => {
  const quickLinks = [
    'About Dr. Jeff',
    'DOSAE™ Method',
    'Patient Success Stories',
    'Blog & Resources',
    'Contact Us'
  ];

  const socialProofLinks = [
    'Google Reviews',
    'Facebook Reviews',
    'Professional Affiliations',
    'Media Features'
  ];
  const handleNewsletterSubmit = (email: string) => {
    console.log(email);
    // Handle newsletter submission
  };

  
  return (
    <div>
        <div className="flex bg-[#112C53] py-[60px] md:py-[100px] md:pl-[150px]  pl-[20px] pr-[20px] md:pr-[20px] flex-col rounded-none">
    
    <div className='flex flex-col md:flex-row justify-between'>
    <div className="flex flex-col w-[61%] max-md:ml-0 max-md:w-full">
  <Section title="Contact">
    <div className="text-lg leading-8 text-slate-100">
      Midwest Disc Clinic
      <br />
      2180N 700W, Shipshewana, IN 46565
      <br />
      Phone: 260-768-4712 
    </div>
  </Section>
</div>
<div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
  <Section title="Quick Links">
    {quickLinks.map((link, index) => (
      <QuickLink key={index} text={link} />
    ))}
  </Section>
</div>

<div className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
<Section title="Social Proof">
  {socialProofLinks.map((link, index) => (
    <QuickLink key={index} text={link} />
  ))}
</Section>
</div>
<div className="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">
<div className="flex flex-col w-full max-md:mt-10">
  <Section title="Newsletter">
    <div className="text-lg leading-8 text-slate-100 max-md:mr-1.5">
      Stay up to date with our latest news and treatments.
    </div>
    <NewsletterForm onSubmit={handleNewsletterSubmit} />
  </Section>
</div>
</div>
    </div>
    </div>
    <div className="self-center font-source-sans w-full py-3 bg-[#1B365D] text-xs leading-none text-center text-slate-100 ">
        © 2024 Dr. Jeff Garofalo. All rights reserved.
      </div>
    </div>
  )
}

export default Footer


const NewsletterForm  = ({ onSubmit }:{onSubmit:(email:string)=>void}) => {
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-[20px] w-full text-sm leading-loose text-white">
      <label htmlFor="emailInput" className="sr-only">Enter your Email</label>
      <input
        id="emailInput"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your Email"
        className="px-4 py-3 font-source-sans bg-[#1B365D] rounded-[100px] max-md:pr-5"
        required
      />
      <button 
        type="submit"
        className="flex gap-x-3 font-source-sans justify-center items-center px-3.5 py-[13px] font-bold whitespace-nowrap bg-secondary rounded-[100px]"
      >
        Subscribe
        <LeftArrow/>
      </button>
    </form>
  );
};

const Section = ({ title, children }:{title:string,children:any}) => (
  <div className="flex flex-col max-md:mt-10">
    <h2 className={`self-start ${font_platinPro} text-2xl font-bold leading-none text-[#7C9885]`}>
      {title}
    </h2>
    <div className="mt-[20px] font-source-sans text-[#F5F7F9]">
      {children}
    </div>
  </div>
);

const QuickLink= ({ text }:{text:string}) => (
  <div className="text-lg leading-9 text-slate-100">{text}</div>
);