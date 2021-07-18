const { customAlphabet } = require("nanoid");
const alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const customId = (length) => {
  const nanoid = customAlphabet(alphabet, length);
  return nanoid(); //=> "IW1LHXRXBKL0ZAAM06RZ80JTC6Q3IH7K6W2E"
};

export default customId;
