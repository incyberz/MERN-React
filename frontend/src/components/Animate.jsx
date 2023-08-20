import { useState } from "react";

function Animate() {
  const [styBtnAdd, setStyBtnAdd] = useState("btn btn-primary hideit");
  const [styParagraf, setStyParagraf] = useState("sembunyi");

  const handleClick = () => {
    styParagraf == "sembunyi"
      ? setStyParagraf("zzz")
      : setStyParagraf("sembunyi");
  };
  return (
    <div className="container">
      <h1>Animate Button</h1>
      <button className={styBtnAdd} onClick={handleClick}>
        Add to Carts
      </button>
      <p className={styParagraf}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        facilis iusto maiores consequuntur voluptas ea ullam odit dignissimos
        minus nesciunt, temporibus reiciendis esse, itaque impedit quod quis
        consectetur explicabo. Necessitatibus.
      </p>
    </div>
  );
}

export default Animate;
