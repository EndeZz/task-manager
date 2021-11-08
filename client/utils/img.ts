import size from './size';
import { ArrayFile } from "./interface";

export default async function createImg(event: { target: HTMLInputElement }, update: Function) {
  const files = Array.from(event.target.files)

  if (files.length) {

    files.forEach(file => {
      if (file.type.match('image')) {
        const reader = new FileReader()

        reader.onload = function (ev) {
          const url = ev.target.result;
          update({ name: file.name, preview: `${url}`, format: file.type })
        }

        reader.readAsDataURL(file)
      }

      if (file.type.match('video')) {
        var video = document.createElement("video") as HTMLVideoElement;
        var canvas = document.createElement("canvas") as HTMLCanvasElement;

        var fileURL = URL.createObjectURL(file);
        video.src = fileURL;

        video.addEventListener('loadeddata', function () {
          video.currentTime = 1;
        }, false);

        video.addEventListener('seeked', function () {
          var context = canvas.getContext('2d');
          context.drawImage(video, 0, 0, canvas.width, canvas.height);
          const dataURL = canvas.toDataURL();

          update({ name: file.name, preview: `${dataURL}`, format: file.type })
        }, false);

      }

      if (file.type.match('audio')) {
        update({ name: file.name, preview: `./../img/content/preview-3.jpg`, format: file.type })
      }
    })
  }
}