import React from 'react';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from 'mdbreact';
import Search from '../Search/Search';

const CarouselPage = () => {
  return (
    <MDBContainer>

      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"

    >

      <MDBCarouselInner>

        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://iwqbfq.ch.files.1drv.com/y4m6ScaSU3bIk56BSrSzM7ylnf3POwf_RljxDCHVQRqp6rC6NeA3T_OlDy3LewcI0c3KltsBXpnh-C98e3Z_bAxaOhPK773Xw-EH4DDmi_PHWPN6sz_hRR-hWHRaxbMUh1SsAkFcd1loKJDknjA1nZDDEhPh5kBaZbdH0Y9cCO-o63aUWBh0H-d5zgXcF4q62dz?width=1140&height=490&cropmode=none"
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>

        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://igqifq.ch.files.1drv.com/y4meJde-k8b43x9NUXtgqQVdP_In_iyRSDEkkylKL5FFmdqORcCPos5mXuEIunGKfoVBudUoppaYeNNI9yJUuehqZVlfAZ26_G2QUF_dEnM1Wq5TiBb3A6J7q3tOVhVB0SkPvRUFwq_xtigNXlTmFpBmqJAgH7thlCW3sHeytd7jlbpumHQXKX0szsbEs4_Wbyf?width=1140&height=490&cropmode=none"
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Strong mask</h3>
            <p>Second text</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://iwqafq.ch.files.1drv.com/y4mJdcucIJcVolHwnJ3KdmeUydlHg-53dYB3a6slOEZYWTdZXP9Q0RMr6rbUZuXAa_kya4THgRTpaRNk7n-8pBT7EZgDaULaS09Fq1YBPHSqVxrBbwe3oHV4bIbBDQzRBV5BdyvqV_grFapgvHcqTLDOIQ6eePWGR9KASRlAhSYqjvUDUPHYX4FOviZxvtHFRXg?width=1140&height=490&cropmode=none"
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Slight Mast</h3>
            <p>Third text</p>
            
          </MDBCarouselCaption>
          
        </MDBCarouselItem>
        
      </MDBCarouselInner>

    </MDBCarousel>
    
    </MDBContainer>
  );
}

export default CarouselPage;