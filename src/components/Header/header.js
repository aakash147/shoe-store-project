
import './header.css';
import { Link } from 'react-router-dom';

export default () => {
   return (
      <nav>
         <div className='container'>
            <Link to='/' className='linkHome'>
               <h2>Online Shoe Store</h2>
            </Link>
            <i class="fas fa-shopping-cart">
               <span className='cartCount'>0</span>
            </i>

         </div>
      </nav>
   );
};
