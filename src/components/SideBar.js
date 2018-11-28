import React from "react";

const SideBar = ({ filteredRestaurants, handleClick }) => {
    return (
        <div
            style={{
                float: "left",
                width: "25vw",
                height: "100vh",
                textAlign: "center"
            }}>
            <h2>Filter Restaurants</h2>
            <ul style={{ listStyleType: "none", padding: 0 }}>
                {filteredRestaurants.map((restaurant, i) => {
                    return (
                        <li key={i} onClick={() => handleClick(restaurant)}>
                            {restaurant.name}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default SideBar;
