import { promisify } from "node:util";
import { exec } from "node:child_process";

const execAsync = promisify(exec);

export class OSAScriptClient {
  public async run(script: string) {
    return execAsync(`osascript -e '${script}'`);
  }
}
