const axios = require("axios");
const cheerio = require("cheerio");

class AsyncConstructor {
	constructor(args) {
            this.args = args
            let url = Buffer.from('aHR0cHM6Ly9zdGFibGUtZGlmZnVzaW9uLW5mdC1taW50ZXIuZ2xpdGNoLm1lLw==', 'base64').toString('binary')
            return (async (inputs) => {
                let prompt = inputs.join(" ")
                let data = (await axios.post(url, "prompt="+encodeURIComponent(prompt).replace(/%20/g, "+"))).data
                let $ = cheerio.load(data)
                let img = $('.content img').first().attr('src')
                this.content = img || "Couldn't generate the image <:cri:906496612749168661>. Please wait like a few seconds."
                return this
            })(args);
	}
}

module.exports = AsyncConstructor
