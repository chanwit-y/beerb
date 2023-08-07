import { encode } from "blurhash";

export class Blurhash {
   private static async loadImage(image: File) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = (...args) => reject(args);
      img.src = URL.createObjectURL(image);
    });
  };
  private static async getImageData(image: any)  {
    const canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    context.drawImage(image, 0, 0);
    return context.getImageData(0, 0, image.width, image.height);
  };

  public static async encodeImageToBlurhash(file: File)  {
    const image = await this.loadImage(file);
    const imageData = await this.getImageData(image);

    return imageData
      ? encode(imageData.data, imageData.width, imageData.height, 4, 4)
      : "";
  };
}