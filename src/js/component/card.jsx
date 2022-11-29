import React from 'react';

const Card = () => {
    
    return (
        <div className="col-12 col-md-3 mb-3">
            <div className="card">
                <img src="http://via.placeholder.com/500x325" className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title text-center">Card title</h5>
                    <p className="card-text text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere id odit assumenda. Ipsum animi sit, assumenda similique corrupti minima deserunt fugiat facere eligendi pariatur nesciunt labore, quo quibusdam, laborum modi.</p>
                </div>
                <div className="card-footer d-flex justify-content-center">
                    <button className="btn btn-primary">Find Out More!</button>
                </div>
            </div>
        </div>
    );
};

export default Card;