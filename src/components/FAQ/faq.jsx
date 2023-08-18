import React, { useState } from "react";
import "./faq.css";
import { AiOutlinePlus } from "react-icons/ai";

function Faq(props) {
  const [open, setOpen] = useState(false);

  const close = () => {
    setOpen(!open);
  };

  return (
    <div className="component">
      <div onClick={close} className="row">
        <h1 className="text1">{props.tag}</h1>
        {open ? (
          <AiOutlinePlus
            onClick={close}
            style={{ rotate: "45deg" }}
            color="white"
            size={28}
            className="icon"
          />
        ) : (
          <AiOutlinePlus
            onClick={close}
            color="white"
            size={28}
            className="icon"
          />
        )}
      </div>
      {open === true && (
        <div className="view">
          <p className="para">{props.paragraph1}</p>
          <p className="para2">{props.paragraph2}</p>
        </div>
      )}
    </div>
  );
}

export default Faq;
