export default class FileUtils {
  static toDataURL(file: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        if (e.target && typeof e.target.result === "string") {
          resolve(e.target.result);
        } else {
          reject(e);
        }
      };
      fileReader.onerror = (e) => {
        reject(e);
      };
      fileReader.readAsDataURL(file);
    });
  }
}
