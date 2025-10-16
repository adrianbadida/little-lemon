import React from 'react';
import recipes from '../recipes';
import Swal from 'sweetalert2';

function Menu() {

    const handleOrder = (id) => {
        console.log(id, "id is clicked");
        Swal.fire({
  title: "Order confirmed",
  icon: "success",
  draggable: true
});
    }
  return (
    <div className='menu-container'>
        <div className='menu-header'>
            <h2>Specialities of the week!</h2>
            <button>Order Menu</button>
        </div>

        <div className='cards'>
            {
                recipes.map(recipe => <div key={recipe.id} className='menu-items'>
                    <img src={recipe.image} alt="meal" />
                    <div className='menu-content'>
                        <div className='heading'>
                        <h3>{recipe.title}</h3>
                        <p>{recipe.price}</p>
                        </div>
                        <p>{recipe.description}</p>
                        <button className='orderbtn' onClick={() => handleOrder(recipe.id)}>Order</button>
                        </div>
                    </div>)

            }
        </div>
    </div>
  );
};

export default Menu