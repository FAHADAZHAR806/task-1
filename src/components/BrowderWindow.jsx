import { useState } from "react";
import {
  Lock,
  ArrowLeft,
  ArrowRight,
  RefreshCw,
  Star,
  MoreVertical,
} from "lucide-react";

export default function BrowserWindow() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [{ title: "Example Tab 1" }, { title: "Example Tab 2" }];

  return (
    <div className="browser-window">
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
          <div className="control-button minimize">–</div>
          <div className="control-button maximize">□</div>
          <div className="control-button close">×</div>
        </div>
      </div>

      <div className="top-bar">
        <div className="icons-container">
          <ArrowLeft className="icon" size={20} />
          <ArrowRight className="icon" size={20} />
          <RefreshCw className="icon" size={20} />
          <Star className="icon" size={20} />
          <MoreVertical className="icon" size={20} />
        </div>

        <div className="address-bar-container">
          <div className="address-bar">
            <Lock className="icon" size={16} />
            <input type="text" defaultValue="https://example.com" readOnly />
          </div>
        </div>
      </div>
      <div className="content-area">App goes here</div>
    </div>
  );
}
