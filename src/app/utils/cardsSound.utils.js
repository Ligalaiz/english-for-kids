export default function cardsSoundUtils({ target, sound, path }) {
  let audio = new Audio();

  audio.src = sound
    ? `${path}/${sound}.mp3`
    : `${target.dataset.category}/${target.dataset.sound}.mp3`;

  audio.play();
}
