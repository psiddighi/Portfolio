import { useEffect, useState } from "react";

const LOADER_KEY = "destrix-loader-v5-seen";
const INTRO_NAME = "Parsa Siddighi";

const FirstLoadScreen = () => {
  const [isVisible, setIsVisible] = useState(() => {
    return sessionStorage.getItem(LOADER_KEY) !== "true";
  });
  const [isLeaving, setIsLeaving] = useState(false);
  const [typedName, setTypedName] = useState("");

  useEffect(() => {
    if (!isVisible) return;

    let index = 0;
    const typingTimer = window.setInterval(() => {
      index += 1;
      setTypedName(INTRO_NAME.slice(0, index));

      if (index >= INTRO_NAME.length) {
        window.clearInterval(typingTimer);
      }
    }, 82);

    const leaveTimer = window.setTimeout(() => {
      setIsLeaving(true);
      sessionStorage.setItem(LOADER_KEY, "true");
    }, 2150);

    const hiddenTimer = window.setTimeout(() => {
      setIsVisible(false);
    }, 2650);

    return () => {
      window.clearInterval(typingTimer);
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hiddenTimer);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className={`destrix-loader ${isLeaving ? "destrix-loader--leaving" : ""}`} aria-label="Loading Parsa Siddighi">
      <div className="destrix-loader__grain" />
      <p className="destrix-loader__eyebrow">Portfolio loading</p>
      <p className="destrix-loader__word" aria-label="Parsa Siddighi">
        <span>{typedName}</span>
        <span className="destrix-loader__caret" aria-hidden="true" />
      </p>
      <div className="destrix-loader__line" />
    </div>
  );
};

export default FirstLoadScreen;
