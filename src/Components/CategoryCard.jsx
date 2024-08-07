import { Link } from "react-router-dom";

const CategoryCard = ({ cat }) => {
    return (
        <div className="max-w-lg p-4  border-2 rounded-xl">
            <p className="p-2 font-bold text-2xl mb-2 uppercase">{cat.category}</p>
            <div className="space-y-4 mb-5">
                <div className="space-y-2">
                    <img src={cat.image} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                </div>
                <div className="w-full text-center mt-5">
                    <Link to={`/specific/${cat.category}`} className="w-full text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2">View {cat.category} Books</Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;