const axios = require("axios")
class AsyncConstructor {
    constructor(value) {
        return (async () => {
			/*
            var arrayRepos = []
            var repos = (await axios.get("https://raw.githubusercontent.com/recloudstream/cs-repos/master/repos-db.json")).data
            for (const repo in repos) {
                var json = repos[repo]
                var name = (await axios.get(json.url ?? json)).data.name.replace(/ providers repository| Providers Repository| Providers/g, "")
                if (json.verified) arrayRepos.push("<:verified:1036237892604936232> " + name + " : [Install](https://cs.repo/?" + json.url.replace("https://", "") + ")")
                else arrayRepos.push(name + ": [Install](https://cs.repo/?" + json.replace("https://", "") + ")")
            }
            this.embeds = [{
                "title": "Cloudstream Repositories",
                "description": `${arrayRepos.join("\n\n")}\n`,
                "color": 1381909
            },
            {
                "title": "Don't install all the plugins from a repo without knowing.",
                "color": 16711680,
                "image": {
                    "url": "https://cdn.discordapp.com/attachments/1036209801803333632/1036609641636962334/unknown.png"
                }
            }]
			until we find whats up with it
			*/
			this.messageUrl = "https://discord.com/channels/1003664099483336736/1036144578690031726/1037010304388833355"
            return this;
        })();
    }
}
module.exports = new AsyncConstructor()
