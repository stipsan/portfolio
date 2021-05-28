import fse from "fs-extra";
import { createCanvas, registerFont, loadImage } from "canvas";
import drawMultilineText from "canvas-multiline-text";
import Color from "color";

function truncate(source, size) {
  return source.length > size ? source.slice(0, size - 1) + "…" : source;
}

export default async function getImage(path, title, description, color) {
  try {
    if (fse.existsSync(`./public/opengraph/${path}.jpeg`)) {
      return `./public/opengraph/${path}.jpeg`;
    }
  } catch (err) {
    console.log(`❌ Error while searching for alreadt existing opengraph image: ${e.message}`);
  }

  title = truncate(title, 35);
  description = truncate(description, 110);
  color = Color(color).darken(0.4).hex();

  const width = 1200;
  const height = 630;

  const canvas = createCanvas(width, height);
  const context = canvas.getContext("2d");

  registerFont("libs/opengraph-assets/inter.ttf", { family: "Inter" });

  const image = await loadImage("libs/opengraph-assets/background.png");

  context.drawImage(image, 0, 0, canvas.width, canvas.height);

  context.fillStyle = color;
  context.fillRect(0, 0, width, 15);

  context.textAlign = "left";
  context.fillStyle = color;
  context.font = "25pt Inter";
  context.fillText("alvar.dev", 100, 70 + 15);

  context.fillStyle = "#000";

  drawMultilineText(context, title, {
    rect: {
      x: 100,
      y: 100,
      width: canvas.width - 200,
      height: 300,
    },
    font: "Inter",
    verbose: true,
    lineHeight: 1.1,
    minFontSize: 70,
    maxFontSize: 100,
    logFunction: () => {},
  });

  drawMultilineText(context, description, {
    rect: {
      x: 100,
      y: 370,
      width: canvas.width - 200,
      height: canvas.height - 350 - 70,
    },
    font: "Inter",
    verbose: true,
    lineHeight: 1.4,
    minFontSize: 50,
    maxFontSize: 70,
    logFunction: () => {},
  });

  try {
    const buffer = canvas.toBuffer("image/jpeg");
    fse.outputFileSync(`./public/opengraph/${path}.jpeg`, buffer);
    console.log(`✅ Created opengraph image ./public/opengraph/${path}.jpeg`);
  } catch (e) {
    console.log(`❌ Error while creating opengraph image: ${e.message}`);
  }

  return `/opengraph/${path}.jpeg`;
}
