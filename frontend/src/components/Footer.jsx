import React from "react";

// Footer component without Next.js-specific imports
const Footer = () => {

    const config = {
        resend: {
            supportEmail: "Put your support email here"
        }
    };

  return (
    <footer className="bg-base-200 border-t border-base-content/10">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a href="/" aria-current="page" className="flex gap-2 justify-center md:justify-start items-center">
              {/* <img
                src={logo}
                alt={`botellohub logo`}
                className="w-6 h-6"
                width={24}
                height={24}
              /> */}
              <strong className="font-extrabold tracking-tight text-base md:text-lg">
                BotelloHub
              </strong>
            </a>

            <p className="mt-3 text-sm text-base-content/80">
              Your Gateway to the Future of Content Creation
                BotelloHub is the ultimate marketplace and discovery platform for AI-powered content creation tools.
                We connect creators with the world’s best AI agents built by top developers — all designed to supercharge your creative process.
            </p>
            <p className="mt-3 text-sm text-base-content/60">
              Copyright © {new Date().getFullYear()} - All rights reserved
            </p>
          </div>

          <div className="flex-grow flex flex-wrap justify-center -mb-10 md:mt-0 mt-10 text-center">
            {/* Links Section */}
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">
                LINKS
              </div>
              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                {config.resend?.supportEmail && (
                  <a
                    href={`mailto:${config.resend.supportEmail}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link link-hover"
                    aria-label="Contact Support"
                  >
                    Support
                  </a>
                )}
                <a href="/#pricing" className="link link-hover">
                  Pricing
                </a>
                <a href="/blog" className="link link-hover">
                  Blog
                </a>
                <a href="/#" target="_blank" rel="noopener noreferrer" className="link link-hover">
                  Affiliates
                </a>
              </div>
            </div>
            {/* Legal Section */}
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">
                LEGAL
              </div>
              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                <a href="/tos" className="link link-hover">
                  Terms of Service
                </a>
                <a href="/privacy-policy" className="link link-hover">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;