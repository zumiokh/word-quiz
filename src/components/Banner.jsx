import { useState } from "react";
import Button from "./Button.jsx";

function Banner() {
  const [isBannerOpen, setIsBannerOpen] = useState(true);

  return (
    <div
      className={`${
        isBannerOpen ? "block" : "hidden"
      } w-screen p-5 bg-stone-300 border-t border-stone-100 fixed bottom-0 left-0`}
    >
      <span className="block font-bold text-base">Disclaimer</span>
      <div className="flex gap-10 justify-center items-center">
        <div className="text-sm">
          This project is a personal project just for learning and practicing
          React. If you see some bugs occur in the app, please navigate to the
          app repository and leave a note there.
        </div>
        <Button
          onClick={() => {
            setIsBannerOpen(false);
          }}
          color="rose"
        >
          Close
        </Button>
      </div>
    </div>
  );
}

export default Banner;
