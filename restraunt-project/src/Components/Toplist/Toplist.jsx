import salad from '../../images/salad.png'
import samosa from '../../images/samosa.png'
import chhole from '../../images/chhole.png'
import chhoow from '../../images/chhoow.png'
import plate from '../../images/plate.png'
import rasgulla from '../../images/rasgulla.png'



const FoodData = [
    {
        image: rasgulla,
        rating:"⭐⭐⭐⭐",
       price: "$12.55",
        name: "Rasgulla",
        desc: "Rasgulla is made by curdling milk to form chenna, kneading it into smooth balls, and boiling them in sugar syrup until soft and spongy. Serve chilled for a delightful treat!"
    },

    {
        image: samosa,
        rating:"⭐⭐⭐⭐",
      price: "$16.66",
        name: "Samosa",
        desc: "Samosa is made by filling spiced mashed potatoes in a dough pocket, folding into a triangle, and deep-frying until crispy. Serve with chutney for a savory snack!"
    },

    {
        image: chhole,
        rating:"⭐⭐⭐",
        price: "$8.99",
        name: "Chhole",
        desc: "Chhola is made by soaking chickpeas, cooking them with onions, tomatoes, and aromatic spices like cumin, turmeric, and garam masala. Garnish with cilantro and serve with rice or bread."
    },

    {
        image: chhoow,
        rating:"⭐⭐",
        price: "$10.99",
        name: "Chowmin",
     desc: "Chow mein is made by stir-frying boiled noodles with vegetables, soy sauce, garlic, ginger, and optional protein like chicken or tofu, for a savory, aromatic dish."
    },

    {
        image: plate,
        rating:"⭐⭐⭐⭐",
        price: "$11.22",
        name: "Veg Paneer",
         desc: "Sauté onions, tomatoes, and spices to make a rich gravy. Add diced paneer and vegetables like capsicum or peas. Simmer until cooked. Garnish with coriander. Serve hot!"
    },

    {
        image: salad,
        rating:"⭐⭐⭐",
        price: "$9.99",
        name: "Veg Salad",
         desc: "For a veggie salad, combine chopped cucumbers, tomatoes, carrots, onions, and bell peppers. Toss with olive oil, lemon juice, salt, and pepper for a refreshing dish!"
    }
];






const Toplist = () => {
  return (
    <div className='container py-15'>

    
    {/* header section */}
      <div className="text-center  mb-12">
        <h1 className="text-5xl font-semibold">Top List</h1>
      </div>

{/* card section */}
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
   {FoodData.map((item, index) => (
    <div  key={index}
    className="bg-white/50 p-5 sm:p-3 rounded-3xl hover:scale-110 transition duration-300">

    <img src={item.image}
    className='w-60  sm:w-40 sm:h-40  mx-auto object-cover rounded-full '/>
    

    <div className='space-y-2'>

    <p className='text-red-500'>{item.rating}</p>

    

    <p className='text-lg font-semibold'>{item.name}</p>
   

    <p>{item.desc}</p>

    <p className='text-lg font-semibold'>{item.price}</p>
    
    </div>

   
    </div>


   ))}
    
    
    
    
    </div>
        
    </div>
  )
}

export default Toplist
