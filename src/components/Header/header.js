
import './header.css';

export default () => {
   return (
      <nav>
         <div className='container'>
            <h2>Online Shoe Store</h2>
            <i class="fas fa-shopping-cart">
               <span className='cartCount'>0</span>
            </i>

         </div>
      </nav>
   );
};
