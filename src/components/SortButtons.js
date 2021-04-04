import React, { useState } from "react";

const SortButtons = ({ filter, changeFilter }) => {

    const handleClickAll = () => {
        changeFilter('all')
    }

    const handleClickIncomplete = () => {
        changeFilter('incomplete')
    }

    const handleClickCompleted = () => {
        changeFilter('completed')
    }

	return (
		<div className="sortBtns">
			<button className={filter === 'all' ? 'active' : null} onClick={handleClickAll}>All</button>
			<button className={filter === 'incomplete' ? 'active' : null} onClick={handleClickIncomplete}>Incomplete</button>
			<button className={filter === 'completed' ? 'active' : null} onClick={handleClickCompleted}>Completed</button>
		</div>
	);
};

export default SortButtons;
