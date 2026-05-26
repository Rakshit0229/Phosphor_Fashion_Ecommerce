import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. All transactions are secure and encrypted.'
    },
    {
      question: 'How long does shipping take?',
      answer: 'Standard shipping takes 5-7 business days. Express shipping takes 2-3 business days. International shipping typically takes 7-14 business days depending on the destination.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for all items in their original condition. Simply contact our customer service team to initiate a return. Refunds are processed within 5-7 business days of receiving the returned item.'
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship to over 100 countries worldwide. International shipping rates and delivery times vary by destination. Customs fees may apply depending on your country\'s regulations.'
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order ships, you will receive an email with a tracking number. You can also track your order by logging into your account and viewing your order history.'
    },
    {
      question: 'What if I receive a damaged or incorrect item?',
      answer: 'If you receive a damaged or incorrect item, please contact us within 48 hours of delivery. We will arrange for a free replacement or full refund, including return shipping costs.'
    },
    {
      question: 'Can I change or cancel my order?',
      answer: 'Orders can be cancelled within 1 hour of placing them. After that, please contact our customer service team as soon as possible. We will do our best to accommodate changes, but once an order has shipped, we cannot make changes.'
    },
    {
      question: 'Do you offer gift cards?',
      answer: 'Yes, we offer digital and physical gift cards in various denominations. Gift cards can be purchased on our website and sent directly to the recipient via email or mail.'
    },
    {
      question: 'How do I determine my size?',
      answer: 'Each product page includes a detailed size chart. We recommend measuring yourself and comparing to our size guide before ordering. If you\'re between sizes, we generally recommend sizing up.'
    },
    {
      question: 'Are your products authentic?',
      answer: 'Absolutely. We source all our products directly from authorized distributors and brands. Every item is 100% authentic and comes with original packaging and tags.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <div className="container">
        <div className="faq-header">
          <h1>Frequently Asked Questions</h1>
          <p className="subtitle">Find Answers to Common Questions</p>
        </div>

        <div className="faq-content">
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                  <h3>{faq.question}</h3>
                  <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="faq-contact">
            <h2>Still Have Questions?</h2>
            <p>Can't find the answer you're looking for? Our customer service team is here to help.</p>
            <a href="/contact" className="contact-btn">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
