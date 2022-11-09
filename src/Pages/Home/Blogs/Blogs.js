import React from 'react';
import sql from './blogsImage/DB_SQL.jpg'
import jwt from './blogsImage/jwt.png'
import nvj from './blogsImage/nJS.jpg'
import nj from './blogsImage/node-js.png'

const Blogs = () => {
    return (
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-5 p-4 my-10'>

                <div className="card bg-base-100 shadow-xl">
                    <figure><img src={sql} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Difference between SQL and NoSQL
                        </h2>
                        <p>SQL is the programming language used to interface with relational databases. Relational databases model data as records in rows and tables with logical links between them. NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>

                        <div>
                            {/* The button to open modal */}
                            <label htmlFor="my-modal4" className="btn">View Details</label>

                            {/* Put this part before </body> tag */}
                            <input type="checkbox" id="my-modal4" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg">Difference between SQL and NoSQL</h3>
                                    <p className="py-4">SQL is the programming language used to interface with relational databases. Relational databases model data as records in rows and tables with logical links between them. NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
                                    <div className="modal-action">
                                        <label htmlFor="my-modal4" className="btn">Done</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>





                <div className="card bg-base-100 shadow-xl">
                    <figure><img src={nj} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">How does NodeJS handle multiple requests at the same time?
                        </h2>
                        <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. </p>

                        <div>
                            {/* The button to open modal */}
                            <label htmlFor="my-modal3" className="btn">View Details</label>

                            {/* Put this part before </body> tag */}
                            <input type="checkbox" id="my-modal3" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg">How does NodeJS handle multiple requests at the same time?</h3>
                                    <p className="py-4">NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.</p>
                                    <div className="modal-action">
                                        <label htmlFor="my-modal3" className="btn">Done</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

              




                <div className="card bg-base-100 shadow-xl">
                    <figure><img src={nvj} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">What is the difference between javascript and NodeJS?
                        </h2>
                        <p>JavaScript is a high-level programming language that makes our web pages and web applications dynamic and interactive by giving them the ability to think and act. JavaScript is a lightweight (easy to learn syntax) and object-oriented programming language whereas Node....  </p>

                        <div>
                            {/* The button to open modal */}
                            <label htmlFor="my-modal2" className="btn">View Details</label>

                            {/* Put this part before </body> tag */}
                            <input type="checkbox" id="my-modal2" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg">What is the difference between javascript and NodeJS?</h3>
                                    <p className="py-4">
                                        <p> JavaScript is a high-level programming language that makes our web pages and web applications dynamic and interactive by giving them the ability to think and act. JavaScript is a lightweight (easy to learn syntax) and object-oriented programming language whereas Node.js is a runtime environment built on google v8 engine and typically used to represent a list of objects and functions that JavaScript programs can access.
                                        <br />
                                        <br />
                                        JavaScript is a proper high-level programming language used to create web scripts whereas Node.js is a run time environment built on googles v8 engine.
                                        <br />
                                        <br />
                                        JavaScript is executed in the browser whereas using Node.js gives us the ability to execute JavaScript outside the browser.
                                        <br />
                                        <br />
                                        JavaScript can manipulate DOM or add HTML within whereas Node.js doesn’t have the capability to add HTML.
                                        <br />
                                        <br />
                                        JavaScript is mainly used to create front end web applications or develop client-side whereas Node.js is used on the back end development that is server-side development
                                        <br />
                                        <br />
                                        JavaScript follows the standard of JavaScript when writing programs whereas Node.js is written in C++ while using the v8 engine, it runs JavaScript outside the browser.
                                        <br />
                                        <br />
                                        JavaScript requires any running environment as it can execute on any engine such as Firefoxs spider monkey, v8 engine of google chrome, JavaScript core of Safari whereas Node.js runs only on the v8 engine of google chrome.
                                        </p>
                                    </p>
                                    <div className="modal-action">
                                        <label htmlFor="my-modal2" className="btn">Done</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>




                <div className="card bg-base-100 shadow-xl">
                    <figure><img src={jwt} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">What is JWT, and how does it work?
                        </h2>
                        <p>JWT or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be ....  </p>

                        <div>
                            {/* The button to open modal */}
                            <label htmlFor="my-modal1" className="btn">View Details</label>

                            {/* Put this part before </body> tag */}
                            <input type="checkbox" id="my-modal1" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg">What is JWT, and how does it work?</h3>
                                    <p className="py-4"><p> JWT or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                        <br></br>
                        JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                        A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
                    </p></p>
                                    <div className="modal-action">
                                        <label htmlFor="my-modal1" className="btn">Done</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

    );
};

export default Blogs;