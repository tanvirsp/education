import React from 'react';

import IconColor from '../../../img/icon/color_star.svg'
import Icon from '../../../img/icon/star.svg'


const Course = (props) => {
    let { img, auther, name, rating, price, autherImg,id } = props.course

    let Ratings = Math.round(rating)
    let NagativeRating = (5 - Ratings)

    // i can't use loop in jsx
    let n_ve_Rating = []     
    while (Ratings < 5) {
        n_ve_Rating.push(1);
        Ratings++;
    }


    let p_ve_Rating = []
    while (NagativeRating < 5) {
        p_ve_Rating.push(1);
        NagativeRating++;
    }

 
    return (

        <div className="col-lg-6">
            <div className="single_special_cource">
                <div className="cource_img">
                    <img src={img} className="special_img " alt='single_special_cource' />
                </div>

                <div className="special_cource_text">
                    <button onClick={() => props.handelcourse(props.course)} className="btn_4">Enroll now</button>
                    <h4>${price}</h4>
                    <a href="/course">
                        <h3> Course Name :- {name}</h3>
                    </a>
                    <div className="author_info">
                        <div className="author_img">
                            <img src={autherImg} alt="Author" />
                            <div className="author_info_text">
                                <p>Conduct by:</p>
                                <h5><a href="/auther">{auther}</a></h5>
                            </div>
                        </div>
                        <div className="author_rating">
                            <div className="rating">
                            {
                                p_ve_Rating.map(()=><a  href="/course"><img src={IconColor} alt="icon" /></a>)
                            }

                            {
                                n_ve_Rating.map(()=> <a  href="/course"><img src={Icon} alt="icon" /></a>)
                            }

                            </div>
                            <p>{rating} Ratings</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Course;