"use client";

import { useEffect } from "react";

interface Setting {
  watermark_txt: string;
  watermark_x: number;
  watermark_y: number;
  watermark_rows: number;
  watermark_cols: number;
  watermark_x_space: number;
  watermark_y_space: number;
  watermark_color: string;
  watermark_alpha: number;
  watermark_fontsize: string;
  watermark_font: string;
  watermark_width: number;
  watermark_height: number;
  watermark_angle: number;
}

const defaultSettings: Setting = {
  watermark_txt: "text",
  watermark_x: 24, // Coordinate of x axis of watermark starting position
  watermark_y: 24, //Coordinate of y axis of watermark starting position
  watermark_rows: 24, // lines of watermark
  watermark_cols: 24, // columns of watermark
  watermark_x_space: 200, // Watermark x-axis padding
  watermark_y_space: 100, // Watermark y-axis padding
  watermark_color: "#000000", // font color
  watermark_alpha: 0.1, // transparency
  watermark_fontsize: "1rem", // font size
  watermark_font: "微软雅黑", // font family
  watermark_width: 120, // width
  watermark_height: 30, // height
  watermark_angle: 15, // angle
};

class WaterMark {
  private settings: Setting;
  constructor(settings: Partial<Setting>) {
    this.settings = Object.assign({}, defaultSettings, settings);
  }

  init() {
    this.destroy();
    this.addWaterMark();
  }

  addWaterMark() {
    const oTemp = document.createDocumentFragment();

    // Get maximum page width
    const page_width = Math.max(document.body.scrollWidth, document.body.clientWidth);
    // Get maximum page height
    const page_height = Math.max(document.body.scrollHeight, document.body.clientHeight);

    // If the number of watermark columns is set to 0, or if the number of watermark columns is set too large,
    // exceeding the maximum width of the page, recalculate the number of watermark columns and the watermark x-axis interval
    if (
      this.settings.watermark_cols === 0 ||
      this.settings.watermark_x +
        this.settings.watermark_width * this.settings.watermark_cols +
        this.settings.watermark_x_space * (this.settings.watermark_cols - 1) >
        page_width
    ) {
      this.settings.watermark_cols =
        (page_width - this.settings.watermark_x + this.settings.watermark_x_space) /
        (this.settings.watermark_width + this.settings.watermark_x_space);
      this.settings.watermark_x_space =
        (page_width - this.settings.watermark_x - this.settings.watermark_width * this.settings.watermark_cols) /
        (this.settings.watermark_cols - 1);
    }

    // If set watermark line number as 0 or set watermark line number too big that is larger than page max length,
    // recount watermark line number and watermark y axis interval
    if (
      this.settings.watermark_rows === 0 ||
      this.settings.watermark_y +
        this.settings.watermark_height * this.settings.watermark_rows +
        this.settings.watermark_y_space * (this.settings.watermark_rows - 1) >
        page_height
    ) {
      this.settings.watermark_rows =
        (this.settings.watermark_y_space + page_height - this.settings.watermark_y) /
        (this.settings.watermark_height + this.settings.watermark_y_space);
      this.settings.watermark_y_space =
        (page_height - this.settings.watermark_y - this.settings.watermark_height * this.settings.watermark_rows) /
        (this.settings.watermark_rows - 1);
    }

    const arr = [];

    for (let i = 1; i < this.settings.watermark_rows - 1; i++) {
      const y = this.settings.watermark_y + (this.settings.watermark_y_space + this.settings.watermark_height) * i;
      for (let j = 0; j < this.settings.watermark_cols; j++) {
        const x = this.settings.watermark_x + (this.settings.watermark_width + this.settings.watermark_x_space) * j;

        const mask_div = document.createElement("div");
        mask_div.className = "mask_div";
        mask_div.id = `mask_div${i}${j}`;
        mask_div.appendChild(document.createTextNode(this.settings.watermark_txt));
        mask_div.style.webkitTransform = `rotate(-${this.settings.watermark_angle}deg)`;
        mask_div.style.MozTransform = `rotate(-${this.settings.watermark_angle}deg)`;
        mask_div.style.msTransform = `rotate(-${this.settings.watermark_angle}deg)`;
        mask_div.style.OTransform = `rotate(-${this.settings.watermark_angle}deg)`;
        mask_div.style.transform = `rotate(-${this.settings.watermark_angle}deg)`;
        mask_div.style.visibility = "";
        mask_div.style.position = "absolute";
        mask_div.style.left = `${x}px`;
        mask_div.style.top = `${y}px`;
        mask_div.style.overflow = "hidden";
        mask_div.style.zIndex = "9999";
        // mask_div.style.border="solid #eee 1px";
        mask_div.style.opacity = this.settings.watermark_alpha;
        mask_div.style.fontSize = this.settings.watermark_fontsize;
        mask_div.style.fontFamily = this.settings.watermark_font;
        mask_div.style.color = this.settings.watermark_color;
        mask_div.style.textAlign = "center";
        mask_div.style.width = `${this.settings.watermark_width}px`;
        mask_div.style.height = `${this.settings.watermark_height}px`;
        mask_div.style.display = "block";
        mask_div.style.pointerEvents = "none";
        oTemp.appendChild(mask_div);
        arr.push(mask_div.id);
      }
    }
    document.body.appendChild(oTemp);
  }

  destroy() {
    const waterMarkArr = document.querySelectorAll(".mask_div");
    waterMarkArr.forEach((item) => {
      item.remove();
    });
  }
}

export default function WeatherComponent() {
  useEffect(() => {
    const waterMark = new WaterMark({ watermark_txt: "BrianShen" });
    waterMark.init();
    return () => {
      waterMark.destroy();
    };
  }, []);
  return <></>;
}
