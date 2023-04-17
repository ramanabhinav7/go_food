import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";


export default function Home() {

  const [foodCat, setFoodCat] = useState([]);  // agar dot map function use karna hai to [ ] array hona chahiye aur agar object ke andar loop karana hai to for : in loop use kiya jayega
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });


    response = await response.json();
    // console.log("debug: response ",response)
    console.log(response[0], response[1]);

    setFoodItem(response[0]);
    setFoodCat(response[1]);

  }

  useEffect(() => {
    loadData()
  }, [])





  return (
    <div>
      <div><Navbar /></div>
      <div><Carousel /></div>

      <div className="container">
        {
          foodCat.length !== 0
            ? foodCat.map((data) => {
              return (<div className="row mb-3">
                  <div key={data._id} className="fs-3 m-3">
                    {data.CategoryName}
                  </div>
                  <hr />
                  {foodItem !== [] ?

                    foodItem.filter((item) => item.CategoryName === data.CategoryName)
                      .map(filterItems => {
                        return (
                          <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                            <Card foodName ={ filterItems.name}
                            options = {filterItems.options}
                            imgSrc={filterItems.img}
                            ></Card>
                          </div>
                        )
                      })
                    : "No Such Data"}

                </div>

              )
            })
            : <div>"""""""""""""""""""""""</div>

        }
        <Card />

      </div>
      <div> <Footer /></div>

    </div >
  );
}
