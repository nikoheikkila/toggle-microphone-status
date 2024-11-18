import { showHUD } from "@raycast/api";
import { Microphone, Volume } from "./microphone";

export default async function main() {
  const microphone = Microphone.connect();

  const currentVolume = await microphone.getVolume();
  const newVolume = microphone.isMuted(currentVolume) ? Volume.MAX : Volume.MUTE;
  await microphone.setVolume(newVolume);

  await showHUD(`Microphone is now ${microphone.isMuted(newVolume) ? "off" : "on"}`);
}
