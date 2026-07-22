import restaurantfood from "./restauranfood.jpg"

const specials = [
  {
    name: "Greek Salad",
    img_url: "/greek_salad.jpg",
    price: "12.99",
    desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "
  },
  {
    name: "Bruchetta",
    img_url: "/bruchetta.svg",
    price: "5.00",
    desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "
  },
  {
    name: "Lemon Dessert",
    img_url: "/lemon_dessert.jpg",
    price: "12.99",
    desc: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
  },
]
const testimonials=[
  {
    name: "kayode agboola",
    review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
  },
  {
    name: "kayode agboola",
    review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
  },
]

const Main = () => {
  return (
    <main>
      <section class="hero-section">
        <div class="hero">
          <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are family owned mediterranean restaurant,
              focussed on traditional recipes served with a modern twist</p>
              <button>Reserve a Table</button>
          </div>
          {/* <div> */}
          <img src={restaurantfood} alt="" />
          {/* </div> */}
        </div>
      </section>

      <article class="specials">
        <div class="top">
          <h1>This Week Specials</h1>
          <button>Online Menu</button>
        </div>
        <section class="products">
          {specials.map(s=> (
            <div key={s.name}>
              <img src={s.img_url} width="100%" alt="food"/>
              <div class="details">
                <div>
                <p class="name">{s.name}</p>
                <p class="price">${s.price}</p>
                </div>
                <p class="desc">{s.desc}</p>
                <p class="order">Order a delivery &nbsp; <span>&#127949;</span></p>
              </div>
            </div>
          ))}
        </section>
      </article>
      <section class="testimonials">
        <div class="inner">
          <h2>Testimonials</h2>
          <div class="reviews">
            {testimonials.map(r=> (
              <div class="">
                <p>Rating: 5 stars</p>
                <div className='flex'>
                  <img src="" alt="person" />
                  <p>{r.name}</p>
                </div>
                <p>{r.review}</p>
              </div>

            ))}
          </div>
          </div>
      </section>
      <section class="about">
        <div class="about-inner">
          <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
          </div>
          {/* <div> */}
          <img src={restaurantfood} alt="" />
          {/* </div> */}
        </div>
      </section>
    </main>
  )
}

export default Main