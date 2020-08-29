import React from 'react';

const Card = (props) => {

    const cart = props.course
    const TotalPrice = cart.reduce((total, course) => total + course.price, 0)

    const formateNumber = num => {
        const result = num.toFixed(2)
        return Number(result)
    }
    return (
        <div className="col-lg-4  right-contents">
            <div className="sidebar_top">
                <h4 className="text-center">Total Enrolled course : {props.course.length} </h4>
                <ul>
                    {props.course.map((data) => {
                        return (
                            <li>
                                <a className="justify-content-between d-flex" href={data.name}>
                                    <p> course Name </p>
                                    <span className="color">{data.name}</span>
                                </a>
                            </li>
                        )
                    })}
                    <li>
                        <a className="justify-content-between d-flex" href="/pay">
                            <p>Totat Course Fee </p>
                            <span>${formateNumber(TotalPrice)}</span>
                        </a>
                    </li>
                    <li>
                        <a className="justify-content-between d-flex" href="/plan">
                            <p>Available all course after enroll   </p>
                            <span>1000 day </span>
                        </a>
                    </li>
                    <li>
                        <a className="justify-content-between d-flex" href="/plan">

                            <span>30-Day Money-Back Guarantee</span>
                        </a>
                    </li>
                </ul>
                <button className=" btn-block d-block btn_4">PAY FOR ALL COURSE </button>
            </div>
        </div>
    );
};

export default Card;