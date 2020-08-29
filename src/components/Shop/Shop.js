import React, { useState } from 'react';
import Card from './Card/Card';
import Course from './Course/Course';
import courseData from '../courseData'



const Shop = (props) => {

    const [course, setCourse] = useState([])
    const handelcourse = (props) => {
        const newnCourse = [...course, props]
        setCourse(newnCourse)
    }
    return (
        <section className="special_cource padding_top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row justify-content-center">
                            <div className="col-xl-5">
                                <div className="section_tittle text-center">
                                    <h2>Special Courses</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row pb-5">
                            {courseData.map((courseData) => <Course handelcourse={handelcourse} course={courseData} key={courseData.id} ></Course>)}
                        </div>
                    </div>
                    <Card course={course}></Card>
                </div>
            </div>
        </section>
    );
};

export default Shop;