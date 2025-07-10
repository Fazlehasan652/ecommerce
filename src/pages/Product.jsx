import { Link, useParams } from "react-router";
import Card from "./Card";

const Product = () => {
  // const paramId = useParams().id
  // console.log(paramId)
  return (
    <main className="flex-center">
      <div className="sidebar">
        <section className="categories-section">
          <h3 className="section-title">Categories</h3>
          <ul className="list">
            <li className="list__item">
              <label htmlFor="phone">
                <input type="checkbox" name="phone" id="phone" value="phone" />
                Phone
              </label>
            </li>
            <li className="list__item">
              <label htmlFor="tablets">
                <input
                  type="checkbox"
                  name="tablets"
                  id="tablets"
                  value="tablets"
                />
                Tablets
              </label>
            </li>
            <li className="list__item">
              <label htmlFor="televisions">
                <input
                  type="checkbox"
                  name="televisions"
                  id="televisions"
                  value="televisions"
                />
                Televisions
              </label>
            </li>
            <li className="list__item">
              <label htmlFor="computers">
                <input
                  type="checkbox"
                  name="computers"
                  id="computers"
                  value="computers"
                />
                Computers
              </label>
            </li>
            <li className="list__item">
              <label htmlFor="headphones">
                <input
                  type="checkbox"
                  name="headphones"
                  id="headphones"
                  value="headphones"
                />
                Headphones
              </label>
            </li>
          </ul>
        </section>

        <section className="price-section">
          <h3 className="section-title">Price Range</h3>
          <ul className="list">
            <li className="list__item">
              <label htmlFor="price1">
                <input type="radio" name="price" id="price1" value="[0,20]" />
                $0-$20
              </label>
            </li>
            <li className="list__item">
              <label htmlFor="price2">
                <input type="radio" name="price" id="price2" value="[21,50]" />
                $21-$50
              </label>
            </li>
            <li className="list__item">
              <label htmlFor="price3">
                <input type="radio" name="price" id="price3" value="[51,100]" />
                $51-$100
              </label>
            </li>
            <li className="list__item">
              <label htmlFor="price4">
                <input
                  type="radio"
                  name="price"
                  id="price4"
                  value="[101,500]"
                />
                $101-$500
              </label>
            </li>
            <li className="list__item">
              <label htmlFor="price5">
                <input type="radio" name="price" id="price5" value="[501+]" />
                $101+
              </label>
            </li>
          </ul>
        </section>

        <section className="shipping-section">
          <h3 className="section-title">Shipping Options</h3>
          <ul className="list">
            <li className="list__item">
              <label htmlFor="free">
                <input type="radio" name="shipping" id="free" value="free" />
                Free
              </label>
            </li>
            <li className="list__item">
              <label htmlFor="paid">
                <input type="radio" name="shipping" id="paid" value="paid" />
                Paid
              </label>
            </li>
          </ul>
        </section>
      </div>

      <div className="main-content">
        <section className="actions flex-space-around">
          <div className="action__sort">
            <label style={{ marginLeft: "10px" }} htmlFor="sort">
              Sort By:{" "}
            </label>
            <select
              style={{ border: "1px solid black", padding: "9px" }}
              name="sort"
              id="sort"
            >
              <option value="sold">Most sold first</option>
              <option value="rating">Most rated first</option>
              <option value="price">Cheapest first</option>
              <option value="arrival">Newest first</option>
              <option value="discount">Biggest first</option>
            </select>
          </div>

          <div className="action__search">
            <input
              style={{
                border: "1px solid black",
                marginRight: "5px",
                padding: "9px",
              }}
              type="text"
              placeholder="Search product"
            />
            <button className="btn">
              <i className="bi bi-search"></i>
            </button>
          </div>
        </section>
        <section className="products">
          {/* product section starts hear  */}
          <Card />
        </section>

        <div className="pagination">
          <button className="btn pagination__btn">
            <i className="bi bi-chevron-left"></i>
          </button>
          <button className="btn pagination__btn">2</button>
          <button className="btn pagination__btn">3</button>
          <button className="btn pagination__btn">4</button>
          <button className="btn pagination__btn">5</button>
          <button className="btn pagination__btn">6</button>
          <button className="btn pagination__btn">7</button>
          <button className="btn pagination__btn">8</button>
          <button className="btn pagination__btn">9</button>
          <button className="btn pagination__btn">10</button>
          <button className="btn pagination__btn">...</button>
          <button className="btn pagination__btn">50</button>
          <button className="btn pagination__btn">
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>

        {/* <!-- product section ends hear --> */}
      </div>
    </main>
  );
};

export default Product;
