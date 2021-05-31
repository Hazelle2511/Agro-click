import React, { Component } from 'react';
// import contactbg from '../images/contactbg.png';

export default class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            msg: ""
        };
        this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
    handleSubmit(event) {
     
        // event.preventDefault();
   
    
    
    var formdata = new FormData(document.querySelector('form'));
    
    var requestOptions = {
      method: 'POST',
      body: formdata,
    };
    
    fetch("https://script.google.com/macros/s/AKfycbyt0Qg_e1YXZn62mNU_r2K_YQwf6HszFWPY6mhW4DVp-B120eilEVYeJujPLtetDE-fnw/exec", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
     }

render() {
return(
    // md:flex-row md:space-x-6 md:space-y-0

    <div className="bg-contactImg bg-cover">

        {/* <img src={contactbg} alt="bgcontact" className="bg-center w-full h-full object-cover"></img> */}
        
        <div className="flex w-full min-h-screen text-center justify-center items-center">
            
           <div className=" flex  flex-col mspace-y-6 bg-gray-50 w-full max-w-4xl p-8 rounded-xl shadow-lg">
                <div className="flex flex-col justify-between space-y-8 ">
                    <div>
                        <h1 className=" text-4xl lg:text-5xl font-bold   leading-tight">
                       
                       CONTACT
 
                        </h1>
                        <p className="text-gray-700 mt-8 ">
                        Une question ? Contactez-nous.
                        </p>
                    </div>
                    
                    {/* space-y-6 */}
                    <div className="flex-1 space-x-5 justify-center items-center text-gray-700">
                        <div className="inline-flex space-x-2 items-center">
                             <svg className="w-6 h-6 text-xl text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                             <span>+33(0)5 61 81 19 79</span>
                        </div>
                        <div className="inline-flex space-x-2 items-center">
                             
                             <svg className="w-6 h-6 text-xl text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                             <span>projetcyb@gmail.com</span>
                        </div>
                        <div className="inline-flex space-x-2 items-center">
                              <svg className="w-6 h-6 text-xl text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                             <span>83 chemin de Ribaute, 75012 Paris</span>
                        </div>
                
                  
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-8 text-gray-600">
                        <form onSubmit={this.handleSubmit} className="flex flex-col space-y-4" id="myFormu">
                            <div>
                                <label htmlFor="POST_name" className="uppercase text-sm text-gray-600 font-bold">Nom - Prénom</label>
                                <input name="name" onChange={this.handleChange} type="text" placeholder="Jane Doe" className=" w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" required/>
                            </div>
                            <div>
                                <label htmlFor="POST_email" className="uppercase text-sm text-gray-600 font-bold">Adresse e-mail</label>  
                                <input name="email"  type="email" placeholder="********@*****.**"  className=" w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" required/>
                            </div>
                            <div>
                                <label htmlFor="POST_msg" className="uppercase text-sm text-gray-600 font-bold">Message</label>  
                                <textarea name="msg" onChange={this.handleChange} type="text"
                                rows="4" placeholder="Message"  className=" w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" required/>
                            </div>
                            <button type="submit" className="uppercase text-sm font-bold tracking-wide text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline  bg-yellow-500 ">Envoyer</button>
                   
                        </form>
                    </div>
                </div>
            </div>
           
        </div>
        
    </div>

    
    

    

    
)

    
}}
