import { useState } from "react";
import {
  Lock,
  ArrowLeft,
  ArrowRight,
  RefreshCw,
  Star,
  MoreVertical,
  Copy,
  Minus,
  X,
  Download,
  HatGlasses,
  Trash,
} from "lucide-react";

export default function BrowserWindow() {
  const [activeTab, setActiveTab] = useState(0);
  const [windowState, setWindowState] = useState("normal"); // normal, minimized, maximized, closed

  const tabs = [{ title: "Example Tab 1" }, { title: "Example Tab 2" }];

  const handleClose = () => {
    setWindowState("closed");
  };

  const handleMinimize = () => {
    setWindowState(windowState === "minimized" ? "normal" : "minimized");
  };

  const handleMaximize = () => {
    setWindowState(windowState === "maximized" ? "normal" : "maximized");
  };

  if (windowState === "closed") {
    return null; // Hide the window entirely
  }

  return (
    <div
      className={`browser-window ${
        windowState === "maximized" ? "maximized" : ""
      } ${windowState === "minimized" ? "minimized" : ""}`}
    >
      <div className="window-controls">
        <div className="tabs-container">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`tab ${activeTab === index ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </div>
          ))}
        </div>
        <div className="controls">
          <div className="" onClick={handleMinimize}>
            <Minus />
          </div>
          <div className="" onClick={handleMaximize}>
            <Copy />{" "}
          </div>
          <div className="" onClick={handleClose}>
            <X />
          </div>
        </div>
      </div>

      {windowState !== "minimized" && (
        <>
          <div className="top-bar">
            <div className="icons-container">
              <ArrowLeft className="icon" size={20} />
              <ArrowRight className="icon" size={20} />
              <RefreshCw className="icon" size={20} />
              <Star className="icon" size={20} />
            </div>

            <div className="address-bar-container">
              <div className="address-bar">
                <Lock className="icon" size={16} />
                <input
                  type="text"
                  defaultValue="https://example.com"
                  readOnly
                />
              </div>
              <div className="icons-container1 ">
                <HatGlasses className="icon" size={20} />
                <Download className="icon" size={20} />
                <Trash className="icon" size={20} />
                <MoreVertical className="icon" size={20} />
              </div>
            </div>
          </div>
          <div className="content-area">App goes here</div>
        </>
      )}
    </div>
  );
}
