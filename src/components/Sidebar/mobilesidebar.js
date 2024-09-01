import React from 'react';
import '../css_folders/mobilesidebar.css'; // Make sure to create this CSS file

const Sidebar = ({ isOpen }) => {
    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            {/* Sidebar content goes here */}
        </div>
    );
}

export default Sidebar;
