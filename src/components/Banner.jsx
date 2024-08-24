import { useState } from "react";
import Button from "./Button.jsx";

function Banner() {
  const [isBannerOpen, setIsBannerOpen] = useState(true);

  return (
    <div
      className={`${
        isBannerOpen ? "block" : "hidden"
      } fixed bottom-0 left-0 w-screen border-t border-stone-100 bg-stone-300 p-5`}
    >
      <div className="flex items-center justify-center gap-10">
        <div>
          <span className="block text-base font-bold">Disclaimer</span>
          <div className="text-sm">
            This project is a personal project just for learning and practicing
            React. If you see some bugs occur in the app, please navigate to the
            app repository and leave a note there.
          </div>
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
