import React from "react";

export default function Card(props) {
  let options = props.options;
  let priceOptions = Object.keys(options);
  return (
    <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
      <img
        src="https://media.istockphoto.com/photos/chilli-paneer-tikka-or-paneer-kabab-picture-id629423010?k=20&m=629423010&s=612x612&w=0&h=X-OBIncHWjNFqxGfQuQHwrYHi2GcUw-jn7kqqZpHSw8="
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.foodName}</h5>
        <p className="card-text">This is some important text.</p>
        <div className="container w-100">
          <select className="m-2 h-100  bg-success rounded">
            {new Array(5).fill(0).map((_, index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>

          <select className="m-2 h-100  bg-success rounded">
            {priceOptions.map((data) => {
              return (
                <option key={data} value={data}>
                  {data}
                </option>
              );
            })}
          </select>

          <div className="d-inline h-100 fs-5">Total Price</div>
        </div>
      </div>
    </div>
  );
}
