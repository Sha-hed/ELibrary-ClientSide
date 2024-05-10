import { Link } from "react-router-dom";

const CategoryCard = ({cat}) => {
    return (
        <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800 shadow-2xl">
            <p className="p-2  text-center font-bold text-2xl my-2">{cat.category}</p>
            <div className="space-y-4">
                <div className="space-y-2">
                    <img src={cat.image} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                </div>
                <Link to='/' className="btn btn-secondary w-full">View {cat.category} Books</Link>
            </div>
        </div>
    );
};

export default CategoryCard;