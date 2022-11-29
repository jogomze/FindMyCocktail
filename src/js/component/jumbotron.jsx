import React from 'react';

const Jumbotron = () => {

    return (
        <section style={{marginTop: "72px"}}>
            <div className="container-fluid bg-light my-3 py-3 px-md-5">
                <div className="row">
                    <div className="col col-12">
                        <h1 className="display-1">A Warm Welcome!</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, soluta eum! Provident dolore nostrum placeat amet tempore nesciunt fugit delectus illo eligendi quisquam dignissimos accusantium, aut atque dolorem quae corrupti?</p>
                        <button className="btn btn-primary mb-sm-5">Call to action!</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Jumbotron;