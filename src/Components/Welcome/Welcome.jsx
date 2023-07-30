import { useState } from "react";
import { toast } from "react-toastify";

const Welcome = () => {
  const [state, setState] = useState(0);
  if (state === 0) {
    toast(`Welcome user ${window.localStorage.getItem("email")}`, {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setState(1);
  }
};

export default Welcome;
