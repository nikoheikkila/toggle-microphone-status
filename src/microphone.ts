import { OSAScriptClient } from "./script";

export enum Volume {
  MUTE = 0,
  MAX = 100,
}

export class Microphone {
  public readonly client: OSAScriptClient;

  public static connect(): Microphone {
    return new Microphone(new OSAScriptClient());
  }

  public async getVolume(): Promise<number> {
    const { stdout } = await this.client.run(`input volume of (get volume settings)`);
    return Number.parseInt(stdout, 10);
  }

  public setVolume(volume: number) {
    return this.client.run(`set volume input volume ${volume}`);
  }

  public isMuted(volume: number): boolean {
    return volume === Volume.MUTE;
  }

  private constructor(client: OSAScriptClient) {
    this.client = client;
  }
}

