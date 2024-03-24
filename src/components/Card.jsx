import toast, { Toaster } from 'react-hot-toast';
import { BsCart3 } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Card = ({ item }) => {
    const {id, image, category, price, name,size } = item
    const handleCart=()=>{
        Swal.fire("Cart added !");
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl group cursor-pointer">
            <figure><img className=" group-hover:scale-110 duration-300 w-96 h-64" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary bg-pink-700 text-white">NEW</div>
                </h2>
                <p>{price}$</p>
                <p>{size}</p>
                <p>{category}</p>
                <div className="card-actions justify-end">
                    <button onClick={handleCart}>
                    <div  className="badge badge-outline bg-green-600  text-white pl-2">Add  <span className='pl-3'><BsCart3 className=''></BsCart3></span></div>
                    </button>

                <Link to={`/details/${id}`}>  <div className="badge badge-outline hover:bg-green-600 hover:text-white">Details</div></Link>
                </div>
            </div>
        </div>
    );
};

export default Card;