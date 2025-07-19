import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1 className='explore-menu-title'>Explore our menu</h1>
            <p className='explore-menu-description'>
                Discover a variety of delicious categories to satisfy your cravings.
            </p>

            <div className="explore-menu-categories">
                {
                    menu_list.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
                            className="menu-category"
                        >
                            <img
                                src={item.menu_image}
                                alt={item.menu_name}
                                className={category === item.menu_name ? "active" : ""}
                            />
                            <p>{item.menu_name}</p>
                        </div>
                    ))
                }
            </div>

            <hr className='explore-menu-divider' />
        </div>
    );
};

export default ExploreMenu;
