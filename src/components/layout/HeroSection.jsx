import { useState } from 'react'

function HeaderSection() {

  return (
    <>
      <section className="bg-black min-h-screen flex items-center px-8 w-full">
        <div className="w-full text-left">
          <h1 className="text-4xl font-normal text-white mb-6">
            Secure Your Identity <br />with Confidence
          </h1>

          <p className="text-gray-200 mb-8 font-normal leading-loose">
            Experience unparalleled security with our identity solutions that leverage OAuth2 and OpenID Connect. Protect your applications and users with robust authentication and authorization mechanisms.
          </p>
        </div>
      </section>
    </>
  );
};

export default HeaderSection;