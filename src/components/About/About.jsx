import React from 'react';
import {
  MDBMedia, MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBFooter,
} from 'mdbreact';

const About = () => (
  <MDBContainer>
    <MDBRow>
      <MDBCol>
        <MDBJumbotron style={{ padding: 0 }}>
          <MDBCol className="text-center py-5 px-4 my-5" style={{ backgroundImage: 'url(https://jqqifq.ch.files.1drv.com/y4mKNKrd_sknZv7biiDpjlJPFgbxyLBoaqg-O-mR82Q3Sek6o3h5rZUyRYNlRH98dF12-7ZcpoJoN2iKMYUmMNnAMYBTYu8zIaj2Ila6QLXODBI5As2Z2qZm0Witw67nw2Z6mFWmrHJ2HkWTiMKx3XXvD1vJBHAyTaib257I19UY2fHKL-nll4iWnGH9A6v4Qrw?width=1600&height=560&cropmode=none' }}>
            <MDBCol className="py-5">
              <MDBCardTitle className="h1-responsive pt-5 m-5 font-weight-bold">About Us</MDBCardTitle>
              <p className="blue-text mx-5 mb-5">
                <strong>
                    Help an Angel is a national animal welfare charity with a vision of a
                     future where every pet is safe, respected and loved.
                </strong>
              </p>
            </MDBCol>
          </MDBCol>
        </MDBJumbotron>
      </MDBCol>
    </MDBRow>
    <MDBMedia>
      <MDBMedia left className="mr-3">
        <img className="media-image" src="https://bekindpetfind.com/wp-content/uploads/2017/03/Luna-and-Coco-circle.png" alt="" />
      </MDBMedia>
      <MDBMedia body>
        <MDBMedia heading>
            Our History
        </MDBMedia>
        HELP AN ANGEL was established in 2019 in Tegucigalpa, Honduras, to help the street dogs and cats who had no-one else to care for them. Over 50,000 strays roamed the city, with the numbers growing alarmingly due to a lack of sterilisation (spay/neuter) programmes to control the population. HELP AN ANGEL was created to provide a humane and sustainable solution to managing the stray population and to address their medical needs. Funding then, as it is now, came entirely from individuals who shared, and continue to share, the vision of our founders.
        <MDBMedia className="mt-3">
          <MDBMedia left className="pr-3">
            <img className="media-image" src="http://weteachpets.com/wp-content/uploads/2015/09/circle2.png" alt="" />
          </MDBMedia>
          <MDBMedia body>
            <MDBMedia heading>
                Our Work
            </MDBMedia>
            In our most ambitious strategic plan yet, we’re leveraging our greatest strengths as the digital innovators and disruptors of animal welfare to develop a whole raft of positive solutions that will ultimately keep pets safe.
          </MDBMedia>
        </MDBMedia>
      </MDBMedia>
    </MDBMedia>
    <MDBMedia>
      <MDBMedia left className="mr-3">
        <img className="media-image" src="https://shilohvethospital.com/wp-content/uploads/2018/01/Untitled-2-1.png" alt="" />
      </MDBMedia>
      <MDBMedia body>
        <MDBMedia heading>
            Our Programs and Services
        </MDBMedia>
          Thanks to your kind support, we are able to provide all these programs and services for FREE to thousands of pet adopters and rescue organisations Australia wide, fulfilling our purpose to create happiness and save lives.
        <MDBMedia className="mt-3">
          <MDBMedia left className="pr-3">
            <img className="media-image" src="http://weteachpets.com/wp-content/uploads/2015/09/circle3.png" alt="" />
          </MDBMedia>
          <MDBMedia body>
            <MDBMedia heading>
                Our Free Adoption Platform
            </MDBMedia>
              www.helpanangel.com brings thousands of rescue pets face-to-face with thousands of potential adopters every day, and all members are able to list their pets at zero cost.
          </MDBMedia>
        </MDBMedia>
      </MDBMedia>
    </MDBMedia>
    <MDBMedia list className="mt-3">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
          Our People
      </h2>
      <MDBMedia tag="li">
        <MDBMedia left href="#">
          <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/avatar-min1.jpg" alt="Generic placeholder image" />
        </MDBMedia>
        <MDBMedia body>
          <MDBMedia heading>
            Karina Molina
          </MDBMedia>
          <p>Karina co-founded Help an Angel with a vision to create a safer future for every pet in Honduras, and 15 years down the road, his passion for animal welfare and innovative tech solutions has made www.helpanangel.com the most trafficked charity website in the country!</p>
        </MDBMedia>
      </MDBMedia>
      <MDBMedia tag="li">
        <MDBMedia left href="#">
          <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/avatar-min2.jpg" alt="Generic placeholder image" />
        </MDBMedia>
        <MDBMedia body>
          <MDBMedia heading>
            Alberto Sanchez
          </MDBMedia>
          <p>Alberto has her eyes firmly fixed on a future where every pet is safe, respected and loved. Her focus - the single-minded goal of seeing an end to the killing of Honduras’s homeless pets.</p>
        </MDBMedia>
      </MDBMedia>
      <MDBMedia tag="li">
        <MDBMedia left href="#">
          <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/avatar-min3.jpg" alt="Generic placeholder image" />
        </MDBMedia>
        <MDBMedia body>
          <MDBMedia heading>
            Tina Gomez
          </MDBMedia>
          <p>A pet-lover and rescue champion, Tina’s vision for Hel an Angel is to help create a future where rescue pets are given an equal chance. </p>
        </MDBMedia>
      </MDBMedia>
    </MDBMedia>
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy;
          {' '}
          {new Date().getFullYear()}
          {' '}
Copyright:
          {' '}
          <a href="https://www.helpanangel.com"> www.helpanangel.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  </MDBContainer>


);


export default About;
