import { useState } from "react";
import "./Display.css";
import Folders from "./folders.png";
const Display = ({ contract, account }) => {
  const [data, setData] = useState("");
  const getdata = async () => {
    let dataArray;
    const Otheraddress = document.querySelector(".address").value;
    console.log(Otheraddress)
    try {
      if (Otheraddress) {
        dataArray = await contract.display(Otheraddress);
        console.log(dataArray);
      } else {
        dataArray = await contract.display(account);
      }
    } catch (e) {
      alert("You Don't have access");
    }
    console.log(dataArray)
    const isEmpty = Object.keys(dataArray).length === 0;
    console.log(isEmpty)


    if (!isEmpty) {
      const str = dataArray.toString();
      const str_array = str.split(",");
      // console.log(str);
      // console.log(str_array);
      const images = str_array.map((item, i) => {
        console.log(item)
        //console.log(`httpsAyush://gateway.pinata.cloud/ipfs/${item.substring(6)}`)
        return (
          <a href={item} key={i} target="_blank">
            <img
              key={i}
              src={item}
              //src={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`}
              alt="new"
              className="image-list"
              onError={(e) => {
                // console.log(e)
                e.target.onerror = null; // prevents an infinite loop in case the fallback image fails as well
                e.target.src = Folders ; // set a fallback image if it fails to load
              }}
            ></img>
          </a>
        );
      });
      setData(images);
    } else {
      alert("No File to display");
    }
  };
  return (
    <>
      <div className="image-list">{data}</div>
      <input
        type="text"
        placeholder="Enter Address"
        className="address"
      ></input>
      <button className="center button" onClick={getdata}>
        Get Data
      </button>
    </>
  );
};
export default Display;
