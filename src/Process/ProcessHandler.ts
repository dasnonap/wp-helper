import { spawnSync } from "child_process";

class ProcessHandler {
  /**
   * Create a new synchronized process
   * @param command String command to execute
   * @param params Array additional command parameters to execute
   * @return array of results
   */
  public static createSync(command: string, params?: [string]) {
    const result = spawnSync(command, params);

    return {
      status: result.status?.toString(),
      stdout: result.stdout.toString(),
      error: result.stderr.toString(),
    };
  }
}

export default ProcessHandler;
