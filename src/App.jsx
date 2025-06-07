import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <header class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <div class="flex space-x-8 text-gray-800">
        <a href="#" class="hover:text-purple-600">Home Page</a>
        <a href="#" class="hover:text-purple-600">About Us</a>
        <div class="relative group">
          <button class="hover:text-purple-600">Services ▾</button>
        </div>
      </div>
      <div class="text-xl font-cursive text-gray-700">Logo</div>
      <button class="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">Join</button>
    </div>
  </header>


  <section class="bg-gray-500 min-h-screen flex items-center px-8">
    <div class="max-w-3xl text-left">
      <h1 class="text-4xl font-extrabold mb-6">Secure Your Identity <br/>with Confidence</h1>
      <p class="text-white-500 mb-8">
        Experience unparalleled security with our identity solutions that leverage OAuth2 and OpenID Connect. Protect your applications and users with robust authentication and authorization mechanisms.
      </p>
  
      <div class="flex justify-center space-x-4">
        <button class="px-5 py-2 border border-white text-white rounded hover:bg-white hover:text-gray-700">Learn More</button>
        <button class="px-5 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">Sign Up</button>
      </div>
    </div>
  </section>


<div class="w-full flex justify-center -mt-6 relative z-10">
  <button class="text-sm bg-purple-600 text-white px-4 py-1 rounded shadow-md">
    + Section
  </button>
</div>


<section class="bg-white text-gray-800 py-20 px-4">
  <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    
   
    <div class="aspect-square w-full bg-gray-200 rounded-lg overflow-hidden shadow-md">
      <img src="C:\Users\ASUS\Downloads/thar.jpg" alt="Google Login Preview" class="w-full h-full object-cover"/>
    </div>

 
    <div>
      <p class="text-sm text-purple-600 font-semibold mb-2">Secure</p>
      <h2 class="text-3xl font-bold mb-4">Streamline Your Authentication with OAuth2</h2>
      <p class="mb-6 text-gray-600">
        Implementing OAuth2 grant flows enables seamless and secure user authentication. Our solution supports various flows including Authorization Code, Password, Client Credentials, and Refresh Token.
      </p>

   
      <div class="grid sm:grid-cols-2 gap-4 mb-6">
        <div>
          <h3 class="font-semibold text-gray-800">Flexible Options</h3>
          <p class="text-sm text-gray-600">Choose the right flow for your application's authentication needs.</p>
        </div>
        <div>
          <h3 class="font-semibold text-gray-800">Robust Security</h3>
          <p class="text-sm text-gray-600">Protect your APIs with role-based authorization and advanced security measures.</p>
        </div>
      </div>

    
      <div class="flex space-x-4">
        <button class="px-5 py-2 border border-gray-700 text-gray-700 rounded hover:bg-gray-100">Learn More</button>
        <button class="px-5 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">Sign Up</button>
      </div>
    </div>
  </div>
</section>     


<section class="bg-white py-16 border-t border-gray-300">
  <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
    

    <div class="w-full md:w-1/2 mb-8 md:mb-0 flex flex-col items-start">
      <div class="mb-4 flex items-center space-x-2">
        <div class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
          <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M12 20l9-5-9-5-9 5 9 5z"></path>
            <path d="M12 12V4l9 5-9 5z"></path>
          </svg>
        </div>
        <h3 class="text-lg font-semibold text-gray-600">Section 3</h3>
      </div>

      <h2 class="text-3xl font-bold text-gray-800 mb-4">Seamless Google Login with OpenID Connect</h2>
      <p class="text-gray-600 mb-6">
        Allow users to sign in with their Google account securely and efficiently using OpenID Connect protocol. Simplify authentication and protect your application.
      </p>

      <div class="flex space-x-4">
        <a href="#" class="px-6 py-2 border border-gray-400 text-gray-700 rounded-md hover:bg-gray-100">Learn More</a>
        <a href="#" class="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900">Sign Up</a>
      </div>
    </div>

 
    <div class="w-full md:w-1/2">
      <div class="aspect-square w-full bg-gray-200 rounded-lg overflow-hidden shadow-md">
        <img src="https://via.placeholder.com/400x400" alt="Google Login Preview" class="w-full h-full object-cover"/>
      </div>
    </div>
  </div>
</section>


<section class="bg-white pt-16 pb-8 border-t border-gray-300">
  <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
    
    
    <div class="w-full md:w-1/2 mb-8 md:mb-0">
   
      <div class="flex items-center space-x-2 mb-2">
        <div class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
       
          <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 class="text-md font-semibold text-gray-500">Secure</h3>
      </div>

      <h2 class="text-3xl font-bold text-gray-800 mb-4">
        Protect Your Data with <br/>Advanced Security Features
      </h2>
      <p class="text-gray-600 mb-6">
        Our platform is built with state-of-the-art security protocols, advanced role-based access, and encryption methods to keep your data safe and compliant at all times.
      </p>

     
      <div class="mb-6">
        <h4 class="text-sm font-bold text-gray-700 mb-1">Role Based</h4>
        <p class="text-sm text-gray-600">
          Assign permissions to users based on their roles. Ensure secure operations without unnecessary access.
        </p>
      </div>

     
      <div class="flex space-x-4">
        <a href="#" class="px-6 py-2 border border-gray-400 text-gray-700 rounded-md hover:bg-gray-100">Learn More</a>
        <a href="#" class="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900">Sign Up</a>
      </div>
    </div>

   
    <div class="w-full md:w-1/2">
      <div class="aspect-square bg-gray-200 rounded-lg shadow-md overflow-hidden">
        <img src="https://via.placeholder.com/400" alt="Security Feature Preview" class="w-full h-full object-cover"/>
      </div>
    </div>
  </div>
</section>



<section class="bg-white py-16 border-t border-gray-200">
  <div class="max-w-7xl mx-auto px-4">

   
    <div class="mb-10">
      <h2 class="text-3xl font-bold text-gray-800 mb-4">
        Robust Identity Solutions for <br/>Modern Applications
      </h2>
      <p class="text-gray-600 max-w-3xl">
        Our platform offers seamless integration and security, similar to industry leaders like Okta and Keycloak. Experience powerful identity management with user-friendly features.
      </p>
    </div>


    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">


      <div class="border rounded-lg shadow-sm overflow-hidden">
        <div class="bg-gray-100 h-40 flex items-center justify-center">
          <span class="text-gray-400 text-sm">Image Placeholder</span>
        </div>
        <div class="p-4">
          <h4 class="text-lg font-semibold text-gray-800 mb-2">
            Comprehensive Role-Based Authorization Features
          </h4>
          <p class="text-sm text-gray-600">
            Implement granular access controls tailored to user roles.
          </p>
        </div>
      </div>

      <div class="border rounded-lg shadow-sm overflow-hidden">
        <div class="bg-gray-100 h-40 flex items-center justify-center">
          <span class="text-gray-400 text-sm">Image Placeholder</span>
        </div>
        <div class="p-4">
          <h4 class="text-lg font-semibold text-gray-800 mb-2">
            Advanced CORS and CSRF Protection Mechanisms
          </h4>
          <p class="text-sm text-gray-600">
            Safeguard your applications against cross-origin threats.
          </p>
        </div>
      </div>


      <div class="border rounded-lg shadow-sm overflow-hidden">
        <div class="bg-gray-100 h-40 flex items-center justify-center">
          <span class="text-gray-400 text-sm">Image Placeholder</span>
        </div>
        <div class="p-4">
          <h4 class="text-lg font-semibold text-gray-800 mb-2">
            Seamless Integration with OAuth2 and OpenID Connect
          </h4>
          <p class="text-sm text-gray-600">
            Utilize industry-standard protocols for secure authentication.
          </p>
        </div>
      </div>

    </div>


    <div class="flex space-x-4">
      <a href="#" class="px-6 py-2 border border-gray-400 text-gray-700 rounded-md hover:bg-gray-100">Learn More</a>
      <a href="#" class="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900">Sign Up</a>
    </div>
  </div>
</section>



<section class="bg-white py-16 border-t border-gray-300">
  <div class="max-w-7xl mx-auto px-4">


    <div class="mb-10">
      <p class="text-sm text-gray-500 font-semibold mb-1">Secure</p>
      <h2 class="text-3xl font-bold text-gray-800 mb-4">
        Comprehensive Identity and API <br/>Security Solutions
      </h2>
      <p class="text-gray-600 max-w-3xl">
        We specialize in implementing OAuth2 grant flows and OpenID Connect for seamless
        authentication. Our solutions ensure robust API security with role-based authorization and
        advanced protection mechanisms.
      </p>
    </div>


    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
 
      <div class="flex items-start space-x-4">
        <div class="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
     
          <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <h4 class="text-lg font-semibold text-gray-800">OAuth2 Implementation for Secure Access</h4>
          <p class="text-sm text-gray-600 mt-1">
            Our OAuth2 implementation simplifies secure access for your applications.
          </p>
        </div>
      </div>


      <div class="flex items-start space-x-4">
        <div class="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
          <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <h4 class="text-lg font-semibold text-gray-800">API Security with Role-Based Authorization</h4>
          <p class="text-sm text-gray-600 mt-1">
            Protect your APIs with our role-based authorization strategies.
          </p>
        </div>
      </div>

 
      <div class="flex items-start space-x-4">
        <div class="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
          <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <h4 class="text-lg font-semibold text-gray-800">Advanced Protection Against CORS and CSRF</h4>
          <p class="text-sm text-gray-600 mt-1">
            We implement comprehensive CORS/CSRF protection for your applications.
          </p>
        </div>
      </div>
    </div>

 
    <div class="flex space-x-4">
      <a href="#" class="px-6 py-2 border border-gray-400 text-gray-700 rounded-md hover:bg-gray-100">Learn More</a>
      <a href="#" class="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900">Sign Up</a>
    </div>

  </div>
</section>



<section class="bg-gray-50 py-16">
  <div class="max-w-7xl mx-auto px-4 text-center">
    

    <h2 class="text-3xl font-bold text-gray-800 mb-4">Customer Testimonials</h2>
    <p class="text-gray-600 mb-12">Our identity solutions are trusted by industry leaders.</p>


    <div class="grid md:grid-cols-2 gap-8">


      <div class="bg-white p-6 rounded-lg shadow-md text-left">
        <div class="flex items-center mb-3 text-yellow-400">
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>
        <p class="text-gray-700 mb-4">"The level of security provided is exceptional and reliable."</p>
        <div class="text-sm text-gray-600">
          <span class="font-semibold">John Doe</span> — CTO, SecureLayer
        </div>
      </div>

    
      <div class="bg-white p-6 rounded-lg shadow-md text-left">
        <div class="flex items-center mb-3 text-yellow-400">
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>
        <p class="text-gray-700 mb-4">"Easy integration and great customer support. Highly recommend!"</p>
        <div class="text-sm text-gray-600">
          <span class="font-semibold">Jane Smith</span> — Product Manager, IDSecure
        </div>
      </div>

    </div>


    <div class="flex justify-center space-x-4 mt-10">
      <button class="w-10 h-10 flex items-center justify-center border rounded-full hover:bg-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <button class="w-10 h-10 flex items-center justify-center border rounded-full hover:bg-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
</section>




<section class="bg-gray-50 py-16">
  <div class="max-w-7xl mx-auto px-4 text-center">

   
    <h2 class="text-3xl font-bold text-gray-800 mb-4">Unlock Your Secure Identity Today</h2>
    <p class="text-lg text-gray-600 mb-8">Ready to enhance your identity? Contact us for a personalized demo or start using our system today!</p>

   
    <div class="space-x-4 mb-8">
      <a href="#" class="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300">Get Started</a>
      <a href="#" class="inline-block px-6 py-3 border-2 border-gray-800 text-gray-800 font-semibold rounded-full hover:bg-gray-100 transition duration-300">Learn More</a>
    </div>

 
    <div class="flex justify-center items-center space-x-4 mb-12">
      <input type="email" placeholder="Your email here" class="px-6 py-3 w-64 border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      <button class="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300">Subscribe</button>
    </div>

 
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-600 mb-8">
   
      <div>
        <h4 class="font-semibold text-gray-800">Resources</h4>
        <ul>
          <li><a href="#" class="hover:text-blue-600">Support Page</a></li>
          <li><a href="#" class="hover:text-blue-600">Blog</a></li>
          <li><a href="#" class="hover:text-blue-600">FAQ</a></li>
          <li><a href="#" class="hover:text-blue-600">Contact Us</a></li>
          <li><a href="#" class="hover:text-blue-600">About Us</a></li>
        </ul>
      </div>

    
      <div>
        <h4 class="font-semibold text-gray-800">Connect With Us</h4>
        <ul>
          <li><a href="#" class="hover:text-blue-600">LinkedIn</a></li>
          <li><a href="#" class="hover:text-blue-600">Twitter</a></li>
          <li><a href="#" class="hover:text-blue-600">Instagram</a></li>
          <li><a href="#" class="hover:text-blue-600">YouTube</a></li>
        </ul>
      </div>

   
      <div>
        <h4 class="font-semibold text-gray-800">Stay Connected</h4>
        <ul class="flex space-x-6">
          <li><a href="#" class="hover:text-blue-600"><i class="fab fa-facebook-f"></i></a></li>
          <li><a href="#" class="hover:text-blue-600"><i class="fab fa-twitter"></i></a></li>
          <li><a href="#" class="hover:text-blue-600"><i class="fab fa-instagram"></i></a></li>
          <li><a href="#" class="hover:text-blue-600"><i class="fab fa-youtube"></i></a></li>
        </ul>
      </div>
    </div>


    <div class="text-sm text-gray-500">
      <p>© 2025 Future Identity. All rights reserved.</p>
    </div>

  </div>
</section>
    </>
  )
}

export default App
