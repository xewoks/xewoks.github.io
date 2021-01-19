const {GoogleSpreadsheet} = require('google-spreadsheet');
const sheet = new GoogleSpreadsheet('1ADIJvAkL0XHGBDhO7PP9aQOuK3mPIKB2cVPbshuBBHc'); // accurate leaderboard spreadsheet

let forms = ['cube', 'ship', 'ball', 'ufo', 'wave', 'robot', 'spider']
let lastIndex = [{"stars": 0, "coins": 0, "demons": 0}, {"stars": 0, "coins": 0, "demons": 0}]
let caches = [{"stars": null, "coins": null, "demons": null}, {"stars": null, "coins": null, "demons": null}, {"stars": null, "coins": null, "demons": null}] // 0 for JSON, 1 for mods, 2 for GD

module.exports = async (app, req, res, post) => {

      if (!app.sheetsKey || app.endpoint != "http://boomlings.com/database/") return res.send([])
      let gdMode = post || req.query.hasOwnProperty("gd")
      let modMode = !gdMode && req.query.hasOwnProperty("mod")
      let cache = caches[gdMode ? 2 : modMode ? 1 : 0]

      let type = req.query.type ? req.query.type.toLowerCase() : 'stars'
      if (type == "usercoins") type = "coins"
      if (!["stars", "coins", "demons"].includes(type)) type = "stars"
      if (lastIndex[modMode ? 1 : 0][type] + 600000 > Date.now() && cache[type]) return res.send(gdMode ? cache[type] : JSON.parse(cache[type]))   // 10 min cache

      sheet.useApiKey(app.sheetsKey)
      sheet.loadInfo().then(async () => {
      let tab = sheet.sheetsById[1555821000]
      await tab.loadCells('A2:F2')

      let cellIndex = type == "demons" ? 2 : type == "coins" ? 1 : 0
      if (modMode) cellIndex += 3

      let leaderboard = JSON.parse(tab.getCell(1, cellIndex).value)

      let gdFormatting = ""
      leaderboard.forEach(x => gdFormatting += `1:${x.username}:2:${x.playerID}:13:${x.coins}:17:${x.usercoins}:6:${x.rank}:9:${x.icon.icon}:10:${x.icon.col1}:11:${x.icon.col2}:14:${forms.indexOf(x.icon.form)}:15:${x.icon.glow ? 2 : 0}:16:${x.accountID}:3:${x.stars}:8:${x.cp}:46:${x.diamonds}:4:${x.demons}|`)
      caches[modMode ? 1 : 0][type] = JSON.stringify(leaderboard)
      caches[2][type] = gdFormatting
      lastIndex[modMode ? 1 : 0][type] = Date.now()
      return res.send(gdMode ? gdFormatting : leaderboard)

  })
}
[
  {
    "rank": 1,
    "username": "xMiguel007",
    "playerID": "2866103",
    "accountID": "70846",
    "stars": 65710,
    "demons": 1073,
    "cp": 0,
    "coins": 149,
    "usercoins": 7219,
    "diamonds": 12879,
    "icon": {
      "form": "icon",
      "icon": 37,
      "col1": 35,
      "col2": 3,
      "glow": true
    }
  },
  {
    "rank": 2,
    "username": "shaggy23",
    "playerID": "1995959",
    "accountID": "2888",
    "stars": 65595,
    "demons": 1115,
    "cp": 21,
    "coins": 149,
    "usercoins": 4321,
    "diamonds": 11847,
    "icon": {
      "form": "icon",
      "icon": 51,
      "col1": 39,
      "col2": 29,
      "glow": true
    }
  },
  {
    "rank": 3,
    "username": "Michigun",
    "playerID": "703929",
    "accountID": "34499",
    "stars": 61161,
    "demons": 997,
    "cp": 16,
    "coins": 149,
    "usercoins": 12312,
    "diamonds": 14600,
    "icon": {
      "form": "icon",
      "icon": 22,
      "col1": 15,
      "col2": 12,
      "glow": true
    }
  },
  {
    "rank": 4,
    "username": "Cool",
    "playerID": "1148292",
    "accountID": "4825",
    "stars": 52931,
    "demons": 641,
    "cp": 0,
    "coins": 149,
    "usercoins": 7026,
    "diamonds": 14630,
    "icon": {
      "form": "icon",
      "icon": 37,
      "col1": 20,
      "col2": 17,
      "glow": true
    }
  },
  {
    "rank": 5,
    "username": "Kaernk",
    "playerID": "1282100",
    "accountID": "118843",
    "stars": 51821,
    "demons": 533,
    "cp": 0,
    "coins": 149,
    "usercoins": 11908,
    "diamonds": 17073,
    "icon": {
      "form": "icon",
      "icon": 51,
      "col1": 18,
      "col2": 12,
      "glow": true
    }
  },
  {
    "rank": 6,
    "username": "DeathHogz",
    "playerID": "1396933",
    "accountID": "104119",
    "stars": 51791,
    "demons": 435,
    "cp": 2,
    "coins": 149,
    "usercoins": 5250,
    "diamonds": 11948,
    "icon": {
      "form": "icon",
      "icon": 57,
      "col1": 37,
      "col2": 12,
      "glow": true
    }
  },
  {
    "rank": 7,
    "username": "Franchet",
    "playerID": "9576358",
    "accountID": "1999478",
    "stars": 51504,
    "demons": 670,
    "cp": 0,
    "coins": 149,
    "usercoins": 9840,
    "diamonds": 18616,
    "icon": {
      "form": "icon",
      "icon": 30,
      "col1": 15,
      "col2": 12,
      "glow": true
    }
  },
  {
    "rank": 8,
    "username": "Leksitoo",
    "playerID": "933105",
    "accountID": "205",
    "stars": 50530,
    "demons": 666,
    "cp": 14,
    "coins": 149,
    "usercoins": 4125,
    "diamonds": 13852,
    "icon": {
      "form": "icon",
      "icon": 29,
      "col1": 5,
      "col2": 12,
      "glow": true
    }
  },
  {
    "rank": 9,
    "username": "Superchat",
    "playerID": "2945295",
    "accountID": "1098021",
    "stars": 45706,
    "demons": 1201,
    "cp": 2,
    "coins": 149,
    "usercoins": 5150,
    "diamonds": 14101,
    "icon": {
      "form": "icon",
      "icon": 98,
      "col1": 12,
      "col2": 17,
      "glow": false
    }
  },
  {
    "rank": 10,
    "username": "Darky84",
    "playerID": "8513170",
    "accountID": "1244088",
    "stars": 44313,
    "demons": 1031,
    "cp": 0,
    "coins": 149,
    "usercoins": 5864,
    "diamonds": 7444,
    "icon": {
      "form": "icon",
      "icon": 37,
      "col1": 12,
      "col2": 25,
      "glow": true
    }
  }
]