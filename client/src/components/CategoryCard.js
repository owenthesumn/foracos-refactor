import React from 'react';
import { CategoryCardContext } from '../App';

const CategoryCard = ({category}) => {
    return (
        <CategoryCardContext.Consumer>
            {chooseCategory => {
                return (
                    <div className="h-8 sm:h-12 w-full bg-gray-400 rounded flex p-2 items-center cursor-pointer md:m-1 transform hover:scale-105 transition-transform shadow text-xs sm:text-lg" onClick={() => {chooseCategory(category)}}>{category}</div>
                );
            }}
        </CategoryCardContext.Consumer>
    );
}

export default CategoryCard;