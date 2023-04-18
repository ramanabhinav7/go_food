import React from "react"

export default function Card(props) {
  console.log("I'm card")

  let options = props.options;
  console.log("I'm option",options)
  let priceOptions = Object.keys(options);
  console.log("I'm priceOptions")
  

  return (
    <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
      <img
        src={props.imgSrc}
        className="card-img-top"
        alt="..."
        style={{ height: "120px", objectFit: "fill"}}
      />
      <div className="card-body">
        <h5 className="card-title">{props.foodName}</h5>
        <div className="container w-100">
          <select className="m-2 h-100  bg-success rounded">
            { Array.from(Array(6),(e,index)=>{
                return(
                  <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
                )
            })}
          </select>

          <select className="m-2 h-100  bg-success rounded">
            {priceOptions.map((data) => {
             
              return (
                
                <option key={data} value={data}>{data}</option>
              )
            })}
          </select>

          <div className="d-inline h-100 fs-5">Total Price</div>
        </div>
      </div>
    </div>
  );
}
