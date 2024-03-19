import React,{useState} from 'react';
import './Footer.css';
import { useNavigate } from 'react-router';

const PrivacyPolicy = ({ closeModal }) => (
  <div className='privacy-overlay'>
  <div className="privacy-modal">
    <div className="privacy-modal-content">
      <span className="privacy-close" onClick={closeModal}>&times;</span>
      <h2>Privacy Policy</h2>
      <p>&nbsp; &nbsp; &nbsp;At our Online College Admission Portal, we are committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, and disclose the information you provide to us when using our website.

      When you visit our website or use our services, we may collect certain information about you, such as your name, contact details, academic history, and payment information. This information is necessary for us to process your admission applications, facilitate payments, and improve the overall user experience.
      
      We use cookies and similar technologies to enhance your browsing experience and personalize the content displayed on our website. These cookies may collect data such as your IP address, browser type, and pages visited, which helps us analyze traffic patterns and optimize our services.
      
      Your personal information may be shared with colleges and educational institutions to which you apply for admission through our platform. However, we will only disclose the information necessary for the application process, and we require these institutions to maintain the confidentiality and security of your data.
      
      We may also share your information with trusted third-party service providers who assist us in operating our website, processing payments, or conducting data analysis.<br></br><br></br>&nbsp;&nbsp;&nbsp;These providers are contractually obligated to protect your information and use it only for the purposes specified by us.
      
      We take reasonable measures to safeguard your personal information from unauthorized access, disclosure, or alteration. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
      
      By using our website, you consent to the collection and processing of your personal information as described in this Privacy Policy. If you have any questions or concerns about how we handle your data, please contact us for assistance.
      We reserve the right to update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website. Your continued use of our services after any modifications indicates your acceptance of the revised Privacy Policy.
      
      Thank you for entrusting us with your personal information. We are committed to maintaining your privacy and providing a secure platform for your college admission needs.
</p>
    </div>
  </div>
  </div>
);

const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.backgroundColor = 'white';
  };
  return (
    <footer className="footer">
      <div className="left">
        <button className="btn" onClick={openModal}>Privacy Policy</button>
        <button className="btn">Terms and Conditions</button>
        <button className="btn">FAQ's</button>
      </div>
      <div className="center">
        <p>&copy; 2024 MSD Online Admission. All rights reserved.</p>
      </div>
      {modalOpen && <PrivacyPolicy closeModal={closeModal} />}
    </footer>
  );
};

export default Footer;