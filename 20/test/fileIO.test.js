const FileIO = require("../fileIO");

describe("FileIO", () => {
  describe("read", () => {
    it("should call fs.readFileSync with the passed in 'file' argument", () => {
      // TODO: Your code here
      const movie = new MovieSearch();
      const name = "Rocky";

      const url = movie.buildUrl(name);

      expect(url).toEqual(`https://www.omdbapi.com/?t=${name}&apikey=trilogy`);
    });
  });

  describe("write", () => {
    it("should call fs.writeFileSync with the passed in 'path' and 'data' arguments", () => {
      // TODO: Your code here
    });
  });
});
