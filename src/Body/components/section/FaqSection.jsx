import React, { useState } from 'react';

const FaqSection = () => {
  const faqData = [
    { question: 'How do I keep my things safe in a hostel?', answer: 'Keep your personal items locked or in a safe place.' },
    { question: 'Do I need to book hostels in advance?', answer: 'Yes, it’s best to book in advance to avoid issues.' },
    { question: 'Do this hostel have WiFi?', answer: 'Yes, we offer free WiFi 24/7.' },
    { question: 'Do this hostel have curfews?', answer: 'Yes, the curfew time is 8 PM.' },
    { question: 'Do this hostel have laundry?', answer: 'Unfortunately, you need to do your laundry on your own.' },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-700">Frequently Asked Questions</h2>
        </div>
        <ul className="space-y-4">
          {faqData.map((faq, index) => (
            <>
            <li key={index} className="bg-white p-6 rounded-lg shadow-md relative  ">
            <i className="bx bx-help-circle text-2xl text-blue-400 absolute" style={{ left: '13px' }}></i>

              <div 
                onClick={() => toggle(index)}  style={{ marginLeft: '17px' }}
                className={`flex justify-between items-center cursor-pointer font-medium text-lg text-gray-800 ${activeIndex === index ? 'text-blue-600' : ''}`}
              >
                {faq.question}
                <i 
                  className={`bx ${activeIndex === index ? 'bx-chevron-up' : 'bx-chevron-down'} text-2xl text-gray-500`}
                ></i>
              </div>
              {activeIndex === index && (
                <div className="mt-4 text-gray-700">
                  <p>{faq.answer}</p>
                </div>
              )}
            </li>
            </>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FaqSection;
