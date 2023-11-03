const axios = require("axios");
const crypto = require("crypto");

const data = {
  name: "GeronimoPazPapa",
  email: "geronimonicolaspazpapa@gmail.com",
};

axios
  .post("https://candidates.mifiel.com/", data)
  .then((response) => {
    const response_data = response.data; 

    const challenge = response_data.next_challenge.challenge;
    const hashed_challenge = crypto
      .createHash("sha256")
      .update(challenge)
      .digest("hex");

    const digest_data = {
      result: hashed_challenge,
    };

    return axios.put(
      `https://candidates.mifiel.com/api/v1/users/${response_data.id}/challenge/digest`,
      digest_data
    );
  })
  .then((response) => {
    const response_data = response.data; 

    const difficulty = response_data.next_challenge.difficulty;
    const challenge = response_data.next_challenge.challenge;
    let nonce = 0;

    function calculateHash(data) {
      const hash = crypto.createHash("sha256");
      hash.update(data);
      return hash.digest("hex");
    }

    function findNonce() {
      while (true) {
        const data = `${challenge}${nonce}`;
        const hash_result = calculateHash(data);

        if (hash_result.slice(0, difficulty) === "0".repeat(difficulty)) {
          break;
        }

        nonce++;
      }
    }

    findNonce();

    const pow_data = {
      result: nonce,
    };

    return axios.put(
      `https://candidates.mifiel.com/api/v1/users/${response_data.id}/challenge/pow`,
      pow_data
    );
  })
  .then((response) => {
    console.log("Reto completado. ¡Felicidades!");
  })
  .catch((error) => {
    console.error("Error:", error);
  });
