
import React from 'react';
import DownArrow from "../../src/Images/down-arrow.png";

function Section(props) {
  const sectionStyle = {
    backgroundImage: `url(${props.backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="Wrap" style={sectionStyle}>
      <div className="ItemText">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>

      <div className="Buttons">
        <div className="ButtonGroup">
          <div className="LeftButton">
            {props.leftBtnText}
          </div>
          
         
          { props.rightBtnText && (
            <div className='RightButton'>
           {props.rightBtnText}
            </div>)
          }
        
        </div>

        <div className="DownArrow">
          <img src={DownArrow} className="ArrowImage" alt="Down Arrow" />
        </div>
      </div>
    </div>
  );
}

export default Section;
