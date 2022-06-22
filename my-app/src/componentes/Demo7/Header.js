import React from "react";
import PropTypes from 'prop-types';
export default function Header(props){
    return(
        <>
              <header className="taskHeaderContent">
                {props.title}
              </header>
        </>
    );
}

Header.defaultProps = {
  title:'Task Tracker',
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
}

