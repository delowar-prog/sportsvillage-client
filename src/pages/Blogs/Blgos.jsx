import Blog1 from '../../assets/blog/blog-1.jpg'
import Blog2 from '../../assets/blog/blog-2.jpg'
import Blog3 from '../../assets/blog/sql-nosql.png'
import Blog4 from '../../assets/blog/mongodb.png'
import { BsPin } from 'react-icons/bs'
const Blgos = () => {
    return (
        <div className="bg-gradient-to-tr from-slate-100 to-slate-400 p-14">
            <div className="">
                <h1 className='pageHeading text-cyan-500 text-xl text-center'>M Blogs</h1>
                <div className="overflow-x-auto mt-14 ">

                    <div className="flex flex-col lg:flex-row gap-8 border border-gray-400 p-2 rounded my-3">
                        <div><img src={Blog1} className="w-72 max-w-sm rounded-lg shadow-2xl" /></div>
                        <div>
                            <h1 className="text-2xl font-bold">What is an access token and refresh token? How do they work?</h1>
                            <p className="py-3 text-lg text-justify"><strong>Access Token:</strong>  An access token is a string of characters that represents the users identity and permissions. It is issued to an authenticated user after successful authentication. Access tokens have an expiration time to enhance security. The purpose of an access token is to provide authorization when accessing protected resources or APIs. It is included in the headers of HTTP requests to authenticate the user and allow access to specific resources based on the permissions associated with the token.</p>
                            <p className="py-3 text-lg text-justify"><strong>Refresh Token:</strong>  A refresh token is a long-lived credential that is also issued during the authentication process. When an access token expires, the client application can make a request to create a new token using the refresh token. The authorization server verifies the refresh token's validity, if it is valid, and issues a new refresh token.</p>
                            <div className='float-right'>
                                <BsPin className='text-3xl text-indigo-500'></BsPin>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 border border-gray-400 p-2 rounded my-3">
                        <div><img src={Blog3} className="w-72 max-w-sm rounded-lg shadow-2xl" /></div>
                        <div>
                            <h1 className="text-2xl font-bold">Compare SQL and NoSQL databases?</h1>
                            <p className="py-2 text-lg text-justify"><strong>SQL vs NoSQL:</strong>  SQL databases follow a tabular, where data is organized into tables with predefined schemas. NoSQL (Not Only SQL) databases have a flexible, schema-less data model. In NoSQL store data in key-value pairs, documents, graphs or column wise.</p>
                            <p className="py-2 text-lg text-justify">SQL databases basically follow a vertical scalability, where you need to upgrade hardware resources (CPU, RAM) to handle increased workloads. NoSQL databases are designed for horizontal scalability. They can distribute data across multiple servers</p>
                            <p className="py-2 text-lg text-justify">SQL databases enforce a rigid schema, meaning the structure and types of data must be defined in advance. NoSQL databases provide flexibility in terms of schema</p>
                            <div className='float-right'>
                                <BsPin className='text-3xl text-indigo-500'></BsPin>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 border border-gray-400 p-2 rounded my-3">
                        <div><img src={Blog2} className="w-72 max-w-sm rounded-lg shadow-2xl" /></div>
                        <div>
                            <h1 className="text-2xl font-bold">What is express js? What is Nest JS? </h1>
                            <p className="py-2 text-lg text-justify"><strong>Node Js Vs Express Js:</strong>  Node.js is a runtime environment for executing JavaScript code outside of a web browser which is built on chrome’s V8 engine. It allows developers to use JavaScript on the server-side. With Node.js, developers can access the file system, network, and other system resources using JavaScript. Node.js provides a non-blocking I/O model that help us for building real-time and data-intensive applications.</p>
                            <p className="py-2 text-lg text-justify">Express.js is a web application framework for Node.js. It provides lots of tools and features for building web applications. It also provide APIs features. Express.js makes it easier to handle HTTP requests, manage routes, and process data.</p>
                            <div className='float-right'>
                                <BsPin className='text-3xl text-indigo-500'></BsPin>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 border border-gray-400 p-2 rounded my-3">
                        <div><img src={Blog4} className="w-72 max-w-sm rounded-lg shadow-2xl" /></div>
                        <div>
                            <h1 className="text-2xl font-bold">What is MongoDB aggregate and how does it work? </h1>
                            <p className="py-2 text-lg text-justify"><strong>MongoDB aggregate:</strong>  MongoDB aggregate method is used to perform advanced data aggregation operations on collections. It provides a powerful framework for processing and transforming data within MongoDB.</p>
                            <p className="py-2 text-lg text-justify">The aggregate method takes an array of pipeline stages as its argument. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
                            <div className='float-right'>
                                <BsPin className='text-3xl text-indigo-500'></BsPin>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Blgos