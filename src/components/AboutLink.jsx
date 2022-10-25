import React from 'react';
import {Link} from 'react-router-dom'
import { BsQuestionOctagon } from 'react-icons/bs';

const AboutLink = () => {
  return (
    <div >
      <Link to="/about">
        <BsQuestionOctagon className='question' size={40}/>
      </Link>
    </div>
  );
};

export default AboutLink;