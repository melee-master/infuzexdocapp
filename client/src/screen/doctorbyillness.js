import React from "react";
import DocumentMeta from 'react-document-meta';
import { BrowserRouter, Link } from "react-router-dom";
import './docbyillness.css'

const DoctorByIllness=()=>{

    return(
        <div>






<h2 className='h2-header' >Consult top doctors online for any health concern</h2>

<br/>


<div className='Doc-by-Spec'  >

<a href='/acne-issues' style={{ textDecoration: 'none' }} >
                    <p>
                        <img src='https://thumbs.dreamstime.com/b/unhappy-teen-girl-struggling-acne-unhappy-teen-girl-struggling-acne-pimples-skin-face-problem-concept-vector-modern-flat-99784709.jpg' id="img-docgrid1" />
                        <br />
                        <h4 style={{ color: 'black' }} >Skin or Hair Issues </h4>

                        <h5 className='consult-now' >Consult Now</h5>
                    </p>
                </a>
           

               
                <a href='/cold-cough' style={{ textDecoration: 'none' }} >
                    <p>
                        <img src='https://previews.123rf.com/images/jemastock/jemastock1706/jemastock170607306/80044898-tosiendo-hombre-enfermo-con-fr%C3%ADo-gripe-y-virus-ilustraci%C3%B3n-vectorial.jpg' id="img-docgrid1" />
                        <br />
                        <h4 style={{ color: 'black' }} >Cold , Cough or Fever </h4>
                        <h5 className='consult-now' >Consult Now</h5>
                    </p>
                </a>


                <a href='/child-not-feelingwell' style={{ textDecoration: 'none' }} >
                    <p>
                        <img src='https://media.istockphoto.com/vectors/sick-child-in-bed-vector-id1169998028?k=20&m=1169998028&s=170667a&w=0&h=lFvWE98tTOKDlJpgiOlFuz3SFe55fenQSGgiV5rnRBk=' id="img-docgrid1" />
                        <br />
                        <h4 style={{ color: 'black' }} >Child not feeling well </h4>
                        <h5 className='consult-now' >Consult Now</h5>
                    </p>
                </a>



                <a href='/depression' style={{ textDecoration: 'none' }} >
                    <p>
                        <img src='https://img.freepik.com/free-vector/woman-depression-with-bewildered-thoughts-her-mind_102172-221.jpg?w=2000' id="img-docgrid1" />
                        <br />
                        <h4 style={{ color: 'black' }} >Depression or Anxiety</h4>
                        <h5 className='consult-now' >Consult Now</h5>
                    </p>
                </a>

                
               

            </div>




            <div className="gridcontain1"  >


   




<a href='/doctor-by-symptom' style={{textDecoration:'none'}} >
<p className='docdes-box1' style={{backgroundColor:'black' , border:'2px solid black' , marginRight:'auto' , marginLeft:'left' , color:'white'  }} > View All  </p>
</a>


</div>




        </div>
    )


}

export default DoctorByIllness