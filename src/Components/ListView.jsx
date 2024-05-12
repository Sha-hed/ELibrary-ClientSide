

const ListView = ({ book }) => {
    return (
        <tr>
            <td>
                <div className="avatar">
                    <div className="w-24 rounded">
                        <img src={book.photoURL} />
                    </div>
                </div>
            </td>
            <td className='font-bold text-lg'>{book.book_name}</td>
            <td className='font-bold text-lg'>{book.author_name}</td>
            <td className='font-bold text-lg'>{book.category}</td>
            <td className='font-bold text-lg'>{book.sd}</td>
            <td className='font-bold text-lg'><button className='btn btn-primary'>Update Book</button></td>
        </tr>
    );
};

export default ListView;