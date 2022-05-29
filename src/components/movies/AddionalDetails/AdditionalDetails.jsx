import React from "react";
import { useParams } from "react-router-dom";
import "./styleForAdditionalDetails.css";
const AdditionalDetails = () => {
  const text = useParams();
  console.log(text);
  return (
    <>
      <div className="additionalDetails">
        <h1>{text.name}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis odio
          omnis vel reprehenderit aspernatur cupiditate suscipit, possimus
          reiciendis nam hic adipisci officia maiores architecto, illo autem
          quia dolor placeat ab! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nulla tempore ipsa quos rerum eius aspernatur est
          veritatis sequi error quasi. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eaque, accusantium iusto. Non earum recusandae dicta
          suscipit, nisi cupiditate modi obcaecati explicabo perferendis
          consequatur similique culpa id adipisci quibusdam, atque dignissimos.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus id
          quis accusamus labore vel nostrum voluptate similique harum, quo,
          corporis, quia numquam quos aliquid deserunt commodi. Cupiditate
          nesciunt aperiam ea?
        </p>
      </div>
    </>
  );
};

export default AdditionalDetails;
