import react from 'react'
import DocumentMeta from 'react-document-meta';
import './ambulace.css'
import img1 from '../Images/ambulance.png'

const AmbulanceService = () => {

  const meta = {
    title: 'Doctrap',
    description: 'Home Page of DocTrap ',
    canonical: '',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'react,meta,document,html,tags,doctrap,illness,medical,best doctors , dr , drs '
      }
    }
  };

  const bengali = localStorage.getItem('bengali')
  const english = localStorage.getItem('english')



  return (
    <DocumentMeta {...meta}  >

      {
        bengali ? (<p>
          <h1 style={{ marginTop: '5%' }} >
            একটি অ্যাম্বুলেন্সের জন্য অনুরোধ</h1>
          <div id='ambulance-list' >

            <p id='left-text' >
              {/* <img src='https://img.freepik.com/premium-vector/white-ambulance-car-medical-van-medical-rescue-service-healthcare-medicine-emergency-concept-3d-vector-icon-cartoon-minimal-style_365941-804.jpg?w=2000' 
                                    
                                    id='amb-img'
                                    
                                    /> */}

              <img src={img1}
                id='amb-img'
              />

            </p>

            <p id='right-text' >
              <h2>
                নামঃ এস কে বাবু</h2>
              <br />
              <p className='doc-exp1'>এসি/নন এসি অ্যাম্বুলেন্স
              </p>
              <p className='doc-exp1'>অক্সিজেন পাওয়া যায়
              </p>


            
              <a href="tel:+917001220704">
                      <p style={{backgroundColor:'white' , border:'1px solid black'  }} className='docdes-box1' >
                        <i class="fa fa-phone" aria-hidden="true"></i> এখন ডাকো

                        &nbsp;  7001220704
                      </p>
                    </a>


                    <a href="tel:+917583913679">
                      <p style={{backgroundColor:'white' , border:'1px solid black'  }} className='docdes-box1'  >
                        <i class="fa fa-phone" aria-hidden="true"></i> এখন ডাকো

                        &nbsp;  7583913679
                      </p>
                    </a>


            </p>



          </div>
        </p>) : (
          <p>
            {
              english ? (<p>
                <h1 style={{ marginTop: '5%' }} >Request for an Ambulance</h1>
                <div id='ambulance-list' >

                  <p id='left-text' >
                    {/* <img src='https://img.freepik.com/premium-vector/white-ambulance-car-medical-van-medical-rescue-service-healthcare-medicine-emergency-concept-3d-vector-icon-cartoon-minimal-style_365941-804.jpg?w=2000' 
                                    
                                    id='amb-img'
                                    
                                    /> */}

                    <img src={img1}
                      id='amb-img'
                    />

                  </p>

                  <p id='right-text' >
                    <h2>Name: SK Babu</h2>
                    <br />
                    <p className='doc-exp1'>AC/Non AC Ambulance </p>
                    <p className='doc-exp1'>Oxygen Available</p>


                    <a href="tel:+917001220704">
                      <p style={{backgroundColor:'white' , border:'1px solid black'  }} className='docdes-box1' >
                        <i class="fa fa-phone" aria-hidden="true"></i> Call Now
                        &nbsp;  7001220704
                      </p>
                    </a>


                    <a href="tel:+917583913679">
                      <p style={{backgroundColor:'white' , border:'1px solid black'  }} className='docdes-box1'  >
                        <i class="fa fa-phone" aria-hidden="true"></i> Call Now
                        &nbsp;  7583913679
                      </p>
                    </a>


                         
              

                  </p>



                </div>


              </p>) : (<p>
                <h1 style={{ marginTop: '5%' }} >Request for an Ambulance</h1>
                <div id='ambulance-list' >

                  <p id='left-text' >
                    {/* <img src='https://img.freepik.com/premium-vector/white-ambulance-car-medical-van-medical-rescue-service-healthcare-medicine-emergency-concept-3d-vector-icon-cartoon-minimal-style_365941-804.jpg?w=2000' 
                                    
                                    id='amb-img'
                                    
                                    /> */}

                    <img src={img1}
                      id='amb-img'
                    />

                  </p>

                  <p id='right-text' >
                    <h2>Name: SK Babu</h2>
                    <br />
                    <p className='doc-exp1'>AC/Non AC Ambulance </p>
                    <p className='doc-exp1'>Oxygen Available</p>


                    
                    <a href="tel:+917001220704">
                      <p style={{backgroundColor:'white' , border:'1px solid black'  }} className='docdes-box1' >
                        <i class="fa fa-phone" aria-hidden="true"></i> Call Now
                        &nbsp;  7001220704
                      </p>
                    </a>


                    <a href="tel:+917583913679">
                      <p style={{backgroundColor:'white' , border:'1px solid black'  }} className='docdes-box1'  >
                        <i class="fa fa-phone" aria-hidden="true"></i> Call Now
                        &nbsp;  7583913679
                      </p>
                    </a>


                  </p>



                </div>
              </p>)
            }
          </p>
        )
      }

    </DocumentMeta>
  )


}
export default AmbulanceService;