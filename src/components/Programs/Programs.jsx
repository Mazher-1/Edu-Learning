import React from 'react';
import './Programs.css';
import program_1 from '../../assets/Program-1.jpg';
import program_2 from '../../assets/Program-2.jpg';
import program_3 from '../../assets/Program-3.jpg';   
import program_icon_1 from '../../assets/program-icon-1.png';
import program_icon_2 from '../../assets/program-icon-2.png';
import program_icon_3 from '../../assets/program-icon-3.png';

const Programs = () => {
  return (
    <div className='programs' >
      <div className="program">
        <img src={program_1} alt="Graduation Degree" />
        <div className="caption">
          <img src={program_icon_1} alt="icon" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="Master Degree" />
        <div className="caption">
          <img src={program_icon_2} alt="icon" />
          <p>Master Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="Post Degree" />
        <div className="caption">
          <img src={program_icon_3} alt="icon" />
          <p>Post Degree</p>
        </div>
      </div>
    </div>
  );
}

export default Programs;
