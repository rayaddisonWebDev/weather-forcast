import React from 'react';

const DayCard = (props) => {
    return(
      <div className="ui compact blue segment">
      {props.children}
      </div>
    );
}

export default DayCard;
