import React from 'react';
import '../css/Home.css';
import Navbar from '../../navbar/Navbar';
import Footer from '../../navbar/Footer';
import srmImage from '../images/srm.jpg'
import psgImage from '../images/PSG.jpg'
import birlaImage from '../images/birla.jpg'
import vitImage from '../images/vit.jpeg'
import skctImage from '../images/skct.jpeg'
import amritaImage from '../images/image1.jpg'
import logo1Image from '../images/1-removebg-preview.png'
import missionImage from '../images/mission.gif';
import visionImage from '../images/vision.gif';
import contactImage from '../images/contact1.gif';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="cover-image"></div>
      <div className="content">
        <img src={logo1Image} alt="Image" />
        <h1>
          <br></br>
          <span style={{ color: 'yellow' }}>MSD  </span>Online Admissions<br></br><br></br>A <span style={{ color: 'yellow' }}>GREETY </span> WELCOME !!!
        </h1>
        <div className='text'>
          <h1>LEARN FROM INDIA'S TOP <span style={{ color: 'yellow' }}> RANKED </span>INSTITUTE</h1>
        </div>
      </div>
      <div className="separate-container">
        <div className="container1">
          <img src={psgImage} alt="Image 1" />
          <p><b>PSG Institute of Technology</b><br></br><br></br>Provide world-class Engineering Education, Foster Research and Development.</p>
        </div>
        <div className="container1">
          <img src={skctImage} alt="Image 1" />
          <p><b>Sri Krishna College of Technology</b><br></br><br></br>An extraordinary freedom of opportunity to explore and to challenge oneself is the hallmark of the Institute.</p>
        </div>
        <div className="container1">
          <img src={birlaImage} alt="Image 1" />
          <p><b>Birla Institute of Technology And Science</b><br></br><br></br>It focuses primarily on higher education and research in engineering and sciences.</p>
        </div>
        <div className="container1">
          <img src={vitImage} alt="Image 1" />
          <p><b>Vellore Institute of Technology</b><br></br><br></br>Maintained an excellent placement records and gives training to get placed in top companies.</p>
        </div>
        <div className="container1">
          <img src={srmImage} alt="Image 1" />
          <p><b>SRM Institute of Science & Technology</b><br></br><br></br>Top ranking university in India, offering wide range of UG, PG & research programs s in engineering.</p>
        </div>
        <div className="container1">
          <img src={amritaImage} alt="Image 6" />
          <p><b>Amrita Vishwa Vidyapeetham</b><br></br><br></br>NAAC accredited A++ grade, multi-campus, multi-disciplinary teaching and research institution.</p>
        </div>
      </div>
      <div className="course-section">
        <h1>Courses that are Offered</h1>
        <table>
          <thead>
            <tr>
              <th>Bacheolers course</th>
              <th>Masters Courses</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>B.Tech/B.E - AI & DS</td>
              <td>M.Tech/M.E - Computer Science Engineering</td>
            </tr>
            <tr>
              <td>B.Tech/B.E - AI & ML</td>
              <td>M.Tech/M.E - Embeded System</td>
            </tr>
            <tr>
              <td>B.Tech/B.E - Computer Science Engineering</td>
              <td>M.E - Structural Engineering</td>
            </tr>
            <tr>
              <td>B.Tech/B.E - Civil Engineering</td>
              <td>M.Tech/M.E - Mechanical Engineering</td>
            </tr>
            <tr>
              <td>B.Tech/B.E - Cyber Security</td>
              <td>M.Tech/M.E - Cyber Security</td>
            </tr>
            <tr>
              <td>B.Tech/B.E - Electrical and Electronic Engineering</td>
              <td>M.Tech/M.E - Computer Graphics</td>
            </tr>
            <tr>
              <td>B.Tech/B.E - Electronics and Communication Engineering</td>
              <td>M.E - Power Electronics</td>
            </tr>
            <tr>
              <td>B.Tech/B.E - Information Technology</td>
              <td>M.Tech/M.E - Data Science</td>
            </tr>
            <tr>
              <td>B.Tech/B.E - Mechanical Engineering</td>
              <td>Electrical Engineering</td>
            </tr>
            <tr>
              <td>B.Tech/B.E - Automobile Engineering</td>
              <td>M.E - Communication Engineering</td>
            </tr>
            <tr>
              <td>B.Tech/B.E - BioTechnology</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="aboutus-section">
        <h1>About Us</h1>
        <div className="aboutus-container">
          <div className="mission">
            <img src={missionImage} alt="Mission" />
            <p><h2><span style={{ color: 'yellow' }}>Mission</span></h2>
            Our mission at MSD Online Application is to simplify the admission 
            experience, making it convenient, transparent, and efficient for students
             seeking to pursue their educational aspirations. We are committed to 
             providing a user-friendly platform that offers a comprehensive range of 
             institutes and courses, ensuring that every student finds the perfect fit 
             for their academic and professional goals. Through innovation, integrity, 
             and dedication to customer satisfaction, we aim to become the preferred 
             choice for online admissions, facilitating educational opportunities and 
             transforming lives globally.
            </p>
          </div>
          <div className="vision">
          <img src={visionImage} alt="Vision" />
            <p>
            <h2><span style={{ color: 'yellow' }}>Vision</span></h2>
            At MSD Online Application, we envision a future where the journey to education 
            is seamless, accessible, and empowering for every individual. Our platform 
            strives to revolutionize the admission process by leveraging technology to connect
             students with reputable institutes worldwide, fostering a culture of lifelong learning 
             and academic excellence.</p>
          </div>
        </div>
      </div>
      <div className='contactus-section'>
      <h1>Contact Us</h1>
      <div className='contactus-container'>
        <img src={contactImage} alt="Contact" className="contact-image" />
        <div className="contact-info">
          <h2>Contact Information:</h2>
          <p>Phone: 123-456-7890</p>
          <p>Email: info@example.com</p>
          <p>Address: 123 Main Street, City, Country</p>
        </div>
      </div>
    </div>
      <Footer />
    </div>
  );
};

export default Home;
