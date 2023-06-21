import {useState} from 'react'

import profile from '../assets/carbon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleArrowRight, } from "@fortawesome/free-solid-svg-icons";
import {  faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import hr from '../assets/curve-hr.svg'

export default function Hiro () {

    const [loaded, setLoaded] = useState(true);

    return (
      <>
        {loaded ? (
          <div className="fixed top-0  left-0 right-0 bottom-0 w-full z-50 overflow-hidden bg-white flex flex-col items-center justify-center">
            Loading...
          </div>
        ) : null}
        <div
          id="home"
          className="flex w-full flex-col mt-10 pt-10 md:flex-row gap-5 items-center justify-center text-white relative"
        >
          <div className="md:w-3/6 md:p-4">
            <img
              data-aos="flip-right"
              data-aos-duration="1500"
              data-aos-offset="200"
              src={profile}
              alt="profile"
              onLoad={() => setLoaded(false)}
            />
          </div>
          <div
            className="md:w-3/6"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-offset="100"
          >
            <div className="flex flex-col w-full mt-8">
              <h1 className="text-xl text-gray-400">Hi, I'm</h1>
              <h1 className="text-2xl font-bold">Harshank Pathak</h1>
              <p class="text-xl font-bold text-gray-300">Software Engineer</p>
              <p className="text-md font-light text-gray-400 ">
              I'm a software developer who spends most of their day staring at a computer screen and typing code until my fingers ache. But hey, I'm not complaining - I get to make cool stuff and solve problems all day long.
<br/>
<br/>
I'm the proud creator of some of the world's most beautifully crafted code (at least, that's what my mom tells me). When I'm not busy fixing bugs or making software that impresses my colleagues, you can find me trying to remember what the sun looks like or debating the merits of using tabs versus spaces.
<br/>
<br/>
My skills include everything from Java to JavaScript, Python to PHP, and even a bit of C++ for good measure. I'm a jack-of-all-trades when it comes to software development, but a master of none (yet).
<br/>
<br/>
So if you're looking for a software developer who can bring a sense of humor to your team, then look no further. I may not be the funniest person in the world, but I promise to bring a smile to your face every time you see my code.
     <br/>
<br/>
              </p>
            </div>
            <ul className="flex mt-2 gap-4 items-center">
               <li>
                <a
                  
              href="https://leetcode.com/pathakharsh13/"
              rel="noreferrer"
              target="_blank"
            >
              <img 
                className='h-8'
                src="https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png"
                alt="LinkedIn Icon"
              />
            </a>
          </li>
              <li>
                <a
                  href="https://github.com/H4rsh4nk"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon size="2xl" icon={faGithub} />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/harshank_pathak"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon size="2xl" icon={faInstagram} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/harshank-pathak/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon size="2xl" icon={faLinkedinIn} />
                </a>
              </li>
             
            </ul>
          </div>
        </div>
          <img src={hr} className="flex w-full md:h-2 mt-10" alt="hr" />
      </>
    );
}
