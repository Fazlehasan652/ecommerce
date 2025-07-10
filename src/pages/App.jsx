import Product from "./product";

function App() {
  return (
    <>
      <header className="header">
        <div className="banner flex-space-around">
          <marquee className="banner__title" behavior="" direction="">
            50% Sales going on
          </marquee>
          <div className="features flex-space-around">
            <article className="feature flex-center">
              <i className="fa-solid fa-truck feature__icon"></i>
              <h3>Shipping within 7 days</h3>
            </article>
            <article className="feature flex-center">
              <i className="fa-brands fa-rocketchat feature__icon"></i>
              <h3>Support 24/7</h3>
            </article>
            <article className="feature flex-center">
              <i className="fa-regular fa-credit-card feature__icon"></i>
              <h3>Safe Payment</h3>
            </article>
          </div>
        </div>
      </header>
      <Product />
    </>
  );
}

export default App;
