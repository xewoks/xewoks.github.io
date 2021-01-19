const request = require('request')

module.exports = async (app, req, res) => {

  if (app.offline) return res.send("-1")

    let amount = 100;
    let count = req.query.count ? parseInt(req.query.count) : null
    if (count && count > 0) {
      if (count > 200) amount = 200
      else amount = count;
    }

    let params = req.gdParams({
      levelID: req.params.id,
      accountID: app.id,
      gjp: app.gjp, 
      type: req.query.hasOwnProperty("week") ? "2" : "1",
    })

    request.post(app.endpoint + 'getGJLevelScores211.php', params, async function(err, resp, body) { 

      if (err || body == '-1' || !body) return res.send("-1")
      scores = body.split('|').map(x => app.parseResponse(x))
      if (!(scores.filter(x => x[1]).length)) return res.send("-1")

      scores.forEach(x => {
        let keys = Object.keys(x)
        x.rank = x[6]
        x.username = x[1]
        x.percent = +x[3]
        x.coins = +x[13]
        x.playerID = x[2]
        x.date = x[42] + app.config.timestampSuffix
        x.icon = {
          form: ['icon', 'ship', 'ball', 'ufo', 'wave', 'robot', 'spider'][+x[14]],
          icon: +x[9],
          col1: +x[10],
          col2: +x[11],
          glow: +x[15] > 0
        }
        keys.forEach(k => delete x[k])
      }) 

      return res.send(scores.slice(0, amount))
      
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