import React from 'react';

// Example Social Icons - replace with react-icons or your own SVGs
const SocialIcon = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
        {children}
    </a>
);

const GithubIcon = () => (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.3 74.1 266.5 74.1 513.8c0 199 129.4 369.2 308.5 429.3 22.5 4.1 30.7-9.8 30.7-21.7 0-10.7-.4-39.1-.6-76.9-125.6 27.3-152.1-60.5-152.1-60.5-20.5-52.1-50-66-50-66-40.9-27.9 3.1-27.4 3.1-27.4 45.2 3.2 68.9 46.4 68.9 46.4 40.2 68.8 105.5 48.9 131.3 37.4 4.1-29.1 15.7-48.9 28.5-60.2-100.2-11.4-205.3-50.1-205.3-223.1 0-49.3 17.6-89.6 46.5-121.2-4.7-11.4-20.2-57.3 4.4-119.5 0 0 37.9-12.1 124.1 46.3 36-10 74.6-15 113.2-15.2 38.6.2 77.2 5.2 113.2 15.2 86.2-58.4 124.1-46.3 124.1-46.3 24.6 62.2 9.1 108.1 4.4 119.5 29 31.6 46.5 71.9 46.5 121.2 0 173.4-105.3 211.7-205.8 223.1 16.2 14 30.7 41.6 30.7 83.8 0 60.5-.5 109.2-.5 124.1 0 11.9 8.2 25.9 30.9 21.7C820.5 882.9 950 712.7 950 513.8 950 266.5 759.7 76.3 511.6 76.3z"></path></svg>);
const LinkedinIcon = () => (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>);
const TwitterIcon = () => (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.214 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>);


const Footer = () => {

    return (
        <footer className="bg-gray-900 text-gray-400 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center space-y-8">
                    {/* Social Links */}
                    <div className="flex space-x-6">
                        <SocialIcon href="https://github.com/pawang001" aria-label="GitHub Profile">
                            <GithubIcon/>
                        </SocialIcon>
                         <SocialIcon href="https://www.linkedin.com/in/pawan-gupta-72a1a622a" aria-label="LinkedIn Profile">
                            <LinkedinIcon/>
                        </SocialIcon>
                         <SocialIcon href="https://twitter.com/PawanTheDev" aria-label="Twitter Profile">
                            <TwitterIcon/>
                        </SocialIcon>
                    </div>

                    {/* Copyright & Credit Notice */}
                    <div className="text-center space-y-2">
                         <p className="text-sm">
                            Built with <span role="img" aria-label="heart-emoji" className="text-red-500">❤️</span> by Pawan Gupta
                         </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

