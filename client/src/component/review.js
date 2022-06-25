import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { AddProductReviewAction } from "../actions/doctoraction";
import './review.css'

const ReviewComponent = ({ doctors }) => {

    const dispach = useDispatch()

    const bengali = localStorage.getItem('bengali')
    const english = localStorage.getItem('english')




    const [comment, setcomment] = useState('')


    const senreview = () => {

        if ( localStorage.getItem('currentuser') ) {
            const currentuser = JSON.parse(localStorage.getItem('currentuser'))

            let alreadyreviewd

            for (var i = 0; i < doctors.reviews.length; i++) {
                if (doctors.reviews[i].userid == currentuser._id) {
                    alreadyreviewd = true
                }
            }

            if (alreadyreviewd) {
                //alert(`You've already reviewed this product`)
                document.getElementById('post-button').innerHTML = `You've Already Reviewed`
            }
            else {

                const review = {
                    comment: comment
                }


                const userid=currentuser._id 
                const curname = currentuser.name


                dispach(AddProductReviewAction(review, doctors._id , userid , curname ))

            }

        }
        


      else  if ( localStorage.getItem('doctor') ) {
            const doc = JSON.parse(localStorage.getItem('doctor'))

            let alreadyreviewd

            for (var i = 0; i < doctors.reviews.length; i++) {
                if (doctors.reviews[i].userid == doc._id) {
                    alreadyreviewd = true
                }
            }

            if (alreadyreviewd) {
                //alert(`You've already reviewed this product`)
                document.getElementById('post-button').innerHTML = `You've Already Reviewed`
            }
            else {

                const review = {
                    comment: comment
                }





                const userid=doc._id 
                const curname = doc.name


                dispach(AddProductReviewAction(review, doctors._id , userid , curname ))

            }

        }




    }





    return (
        <div>



{
        bengali ? ( <p>




<p style={{textAlign:'left' , marginLeft:'0.5%' }} >
<span style={{ 
    fontSize:'large' ,
    fontWeight:'bolder' 
    
 }} > 
&nbsp; আপনার অভিজ্ঞতা সম্পর্কে বলুন  </span>

</p>


<div className='grid-box' >

    <input type="text" value={comment} onChange={(e) => { setcomment(e.target.value) }} className='grid-part1'

        style={{
            marginLeft: '10%'

        }}

    ></input>

    <button onClick={senreview} className='docdes-box1' style={{
        backgroundColor: '#0EB9B8',

        color: 'white',
        width: '25%',
        marginLeft: '15%'



    }} id='post-button'  > পোস্ট </button>



</div>



<h2> রোগীর পর্যালোচনা
 </h2>
<div className="grid-review">
            {

                doctors.reviews && doctors.reviews.map(rev => {
                    return <div className='review-grid' >

                        <div className='doc-grid' style={{
                             width: '90%',
                            marginRight: 'auto', marginLeft: 'auto' ,
                            


                        }} id='style-review-box' >
                            <p  >
                                <i class="fa fa-user"

                                    id='user-icon'

                                    aria-hidden="true"></i>

                            </p>

                            <p style={{ marginLeft: '15px', marginTop: '-10px', float: 'left' }} >
                            <h3 >
<span style={{ 
    fontSize:'larger' ,
    fontWeight:'bold' 
    
 }} > 
&nbsp; {rev.name}  </span>

</h3>
                                <br />

                                <p className='doc-field' id='review-comment' style={{ 
    fontSize:'large' ,
    fontWeight:'bolder' 
    
 }} > {rev.comment} </p>


                                <p className='doc-exp' style={{fontSize:'small'}} > On : {rev.updatedAt.substring(0, 10)} </p>




                            </p>





                        </div>



                    </div>

                })

            }
            </div>
            <br />










        </p> ) : ( <p>
          {
            english ? (
              <p>



<p style={{textAlign:'left' , marginLeft:'0.5%' }} >
<span style={{ 
    fontSize:'large' ,
    fontWeight:'bolder' 
    
 }} > 
&nbsp; Tell About Your Experience  </span>

</p>

            <div className='grid-box' >

                <input type="text" value={comment} onChange={(e) => { setcomment(e.target.value) }} className='grid-part1'

                    style={{
                        marginLeft: '10%'

                    }}

                ></input>

                <button onClick={senreview} className='docdes-box1' style={{
                    backgroundColor: '#0EB9B8',

                    color: 'white',
                    width: '25%',
                    marginLeft: '15%'



                }} id='post-button'  > Post </button>



            </div>















            <h2> PATIENT REVIEWS </h2>
<div className="grid-review">
            {

                doctors.reviews && doctors.reviews.map(rev => {
                    return <div className='review-grid' style={{padding:'auto'}} >

                        <div className='doc-grid' style={{
                             width: '90%',
                            marginRight: 'auto', marginLeft: 'auto' ,
                            


                        }} id='style-review-box' >
                            <p  >
                                <i class="fa fa-user"

                                    id='user-icon'

                                    aria-hidden="true"></i>

                            </p>

                            <p style={{ marginLeft: '15px', marginTop: '-10px', float: 'left' }} >
                            <h3 >
<span style={{ 
    fontSize:'larger' ,
    fontWeight:'bold' 
    
 }} > 
&nbsp; {rev.name}  </span>

</h3>
                                <br />

                                <p className='doc-field' id='review-comment' style={{ 
    fontSize:'large' ,
    fontWeight:'bolder' 
    
 }} > {rev.comment} </p>


                                <p className='doc-exp' style={{fontSize:'small'}} > On : {rev.updatedAt.substring(0, 10)} </p>




                            </p>





                        </div>



                    </div>

                })

            }
            </div>
            <br />





              </p>
            ) : (
              <p>



<p style={{textAlign:'left' , marginLeft:'0.5%' }} >
<span style={{ 
    fontSize:'large' ,
    fontWeight:'bolder' 
    
 }} > 
&nbsp; Tell About Your Experience  </span>

</p>

            <div className='grid-box' >

                <input type="text" value={comment} onChange={(e) => { setcomment(e.target.value) }} className='grid-part1'

                    style={{
                        marginLeft: '10%'

                    }}

                ></input>

                <button onClick={senreview} className='docdes-box1' style={{
                    backgroundColor: '#0EB9B8',

                    color: 'white',
                    width: '25%',
                    marginLeft: '15%'



                }} id='post-button'  > Post </button>



            </div>















            <h2> PATIENT REVIEWS </h2>
<div className="grid-review">
            {

                doctors.reviews && doctors.reviews.map(rev => {
                    return <div className='review-grid' >

                        <div className='doc-grid' style={{
                             width: '90%',
                            marginRight: 'auto', marginLeft: 'auto' ,
                            


                        }} id='style-review-box' >
                            <p  >
                                <i class="fa fa-user"

                                    id='user-icon'

                                    aria-hidden="true"></i>

                            </p>

                            <p style={{ marginLeft: '15px', marginTop: '-10px', float: 'left' }} >
                            <h3 >
<span style={{ 
    fontSize:'larger' ,
    fontWeight:'bold' 
    
 }} > 
&nbsp; {rev.name}  </span>

</h3>
                                <br />

                                <p className='doc-field' id='review-comment' style={{ 
    fontSize:'large' ,
    fontWeight:'bolder' 
    
 }} > {rev.comment} </p>


                                <p className='doc-exp' style={{fontSize:'small'}} > On : {rev.updatedAt.substring(0, 10)} </p>




                            </p>





                        </div>



                    </div>

                })

            }
            </div>
            <br />







                </p>
            )
          }
        </p> )
      }






        </div>
    )


}

export default ReviewComponent;