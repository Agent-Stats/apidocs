define({ "api": [
  {
    "type": "post",
    "url": "/groups/:groupid/config",
    "title": "configure group",
    "name": "configureGroup",
    "version": "0.3.0",
    "group": "Groups",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "startDate",
            "description": "<p>Start-Date of custom date range. Format: YYYY-MM-DD HH:ii:ss</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "endDate",
            "description": "<p>End-Date of custom date range. Format: YYYY-MM-DD HH:ii:ss (mandatory if startDate is set)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "customEnabled",
            "description": "<p>Custom group type enabled. true|false</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"success\":\"Groupconfiguration has been saved.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./web/lib/AgentStats/Groups/GroupController.php",
    "groupTitle": "Groups"
  },
  {
    "type": "get",
    "url": "/groups/:groupid/pending",
    "title": "Show pending users of group if admin or mod",
    "name": "getPendingUsers",
    "version": "0.1.1",
    "group": "Groups",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "user",
            "description": "<p>List of Users</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>Username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.faction",
            "description": "<p>Faction</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n{\n\"username\":\"Agent1\",\n\"faction\":\"res\"\n}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./web/lib/AgentStats/Groups/GroupController.php",
    "groupTitle": "Groups"
  },
  {
    "type": "get",
    "url": "/groups",
    "title": "Show Groups you're member in",
    "name": "listGroups",
    "version": "0.1.0",
    "group": "Groups",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "group",
            "description": "<p>List of Groups</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "group.groupid",
            "description": "<p>Groupid</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "group.groupname",
            "description": "<p>Groupname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "group.rank",
            "description": "<p>Your permissionlevel in group (user, mod, admin)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n{\n\"groupid\": \"576260c008eef1.39181863\",\n\"groupname\": \"test\",\n\"rank\": \"admin\"\n}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./web/lib/AgentStats/Groups/GroupController.php",
    "groupTitle": "Groups"
  },
  {
    "type": "post",
    "url": "/groups/:groupid/refresh",
    "title": "request a refresh of a group",
    "name": "requestRefresh",
    "version": "0.2.1",
    "group": "Groups",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"success\":\"Request has been sent to the queue.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./web/lib/AgentStats/Groups/GroupController.php",
    "groupTitle": "Groups"
  },
  {
    "type": "get",
    "url": "/groups/:groupid/competition",
    "title": "show competition configuration and results",
    "name": "showCompetition",
    "version": "0.4.0",
    "group": "Groups",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "competition",
            "description": "<p>Dictionary of all medals with configuration and result</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "competition.MEDAL",
            "description": "<p>Dictionary of medal configuration and result</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "competition.MEDAL.customName",
            "description": "<p>Own name of competition, can be empty as its optional</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "competition.MEDAL.minValue",
            "description": "<p>value that has to be reached to get into competition // 0 = disabled</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "competition.MEDAL.maxPlaces",
            "description": "<p>Number of possible places that can be reached</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "competition.MEDAL.numPlaces",
            "description": "<p>Number of actual places that have been reached</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "competition.MEDAL.places",
            "description": "<p>Places with their users and values</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "competition.MEDAL.places.PLACENUMBER",
            "description": "<p>2 possible objects, either &quot;username&quot; and &quot;faction&quot; or Array of &quot;users&quot; with &quot;username&quot; and &quot;faction&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "competition.MEDAL.places.PLACENUMBER.username",
            "description": "<p>Username of agent</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "competition.MEDAL.places.PLACENUMBER.faction",
            "description": "<p>Faction of agent</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "competition.MEDAL.places.PLACENUMBER.value",
            "description": "<p>Reached value</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "competition.MEDAL.places.PLACENUMBER.users",
            "description": "<p>Array of users</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "competition.MEDAL.places.PLACENUMBER.users.username",
            "description": "<p>Username of agent</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "competition.MEDAL.places.PLACENUMBER.users.faction",
            "description": "<p>Faction of agent</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"ap\": {\n\"customName\": \"AP-Master\",\n\"minValue\": 1,\n\"maxPlaces\": 3,\n\"places\": {\n\"1\": {\n\"username\": \"agent1\",\n\"faction\": \"res\",\n\"value\": 1337\n},\n\"2\": {\n\"username\": \"agent2\",\n\"faction\": \"enl\",\n\"value\": 100\n}\n},\n\"numPlaces\": 2\n},\n\"recon\": {\n\"customName\": \"Approver\",\n\"minValue\": 1336,\n\"maxPlaces\": 5,\n\"places\": {\n\"1\": {\n\"users\": [\n{\n\"username\": \"agent1\",\n\"faction\": \"res\"\n},\n{\n\"username\": \"agent2\",\n\"faction\": \"enl\"\n}\n],\n\"value\": 1337\n}\n},\n\"numPlaces\": 1\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./web/lib/AgentStats/Groups/GroupController.php",
    "groupTitle": "Groups"
  },
  {
    "type": "get",
    "url": "/groups/:groupid[/:type]",
    "title": "Show progress of group by type",
    "name": "showGroup",
    "version": "0.2.1",
    "group": "Groups",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupid",
            "description": "<p>Groupid from /groups</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "now",
              "week",
              "month",
              "custom"
            ],
            "optional": true,
            "field": "type",
            "defaultValue": "now",
            "description": "<p>Timeframe of statistics (now = all time)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "userstats",
            "description": "<p>Dictionary of group members with agentName as key</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userstats.ap",
            "description": "<p>AP</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userstats.explorer",
            "description": "<p>Explorer</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userstats.seer",
            "description": "<p>Seer</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userstats.collector",
            "description": "<p>Collector</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userstats.hacker",
            "description": "<p>Hacker</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userstats.builder",
            "description": "<p>Builder</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userstats.connector",
            "description": "<p>Connector</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userstats.mind-controller",
            "description": "<p>Mind-Controller</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userstats.illuminator",
            "description": "<p>Illuminator</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userstats.binder",
            "description": "<p>Binder</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userstats.country-master",
            "description": "<p>Country-Master</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userstats.recharger",
            "description": "<p>Recharger</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userstats.liberator",
            "description": "<p>Liberator</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userstats.pioneer",
            "description": "<p>Pioneer</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userstats.purifier",
            "description": "<p>Purifier</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userstats.neutralizer",
            "description": "<p>Neutralizer</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userstats.disruptor",
            "description": "<p>Disruptor</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userstats.salvator",
            "description": "<p>Salvator</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userstats.trekker",
            "description": "<p>Trekker</p>"
          },
          {
            "group": "Success 200",
            "type": "Mixed",
            "optional": false,
            "field": "userstats.guardian",
            "description": "<p>Guardian in number</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userstats.smuggler",
            "description": "<p>Smuggler</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userstats.link-master",
            "description": "<p>Link-Master</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userstats.controller",
            "description": "<p>Controller</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userstats.field-master",
            "description": "<p>Field-Master</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userstats.specops",
            "description": "<p>Specops</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userstats.engineer",
            "description": "<p>Engineer</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userstats.sojourner",
            "description": "<p>Sojourner</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userstats.recruiter",
            "description": "<p>Recruiter</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userstats.translator",
            "description": "<p>Translator</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userstats.missionday",
            "description": "<p>Missionday</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userstats.level",
            "description": "<p>Level of agent</p>"
          },
          {
            "group": "Success 200",
            "type": "Mixed",
            "optional": false,
            "field": "userstats.faction",
            "description": "<p>Faction of agent ('res', 'enl' or null)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userstats.last_submit",
            "description": "<p>Date of last screenshot submit (YYYY-MM-DD HH:mm:ss)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"agent1\": {\n\"ap\": 1,\n\"explorer\": 1,\n\"seer\": 1,\n\"collector\": 1,\n\"hacker\": 1,\n\"builder\": 1,\n\"connector\": 1,\n\"mind-controller\": 1,\n\"illuminator\": 1,\n\"binder\": 1,\n\"country-master\": 1,\n\"recharger\": 1,\n\"liberator\": 1,\n\"pioneer\": 1,\n\"purifier\": 1,\n\"neutralizer\": 1,\n\"disruptor\": 1,\n\"salvator\": 1,\n\"trekker\": 1,\n\"guardian\": \"1\",\n\"smuggler\": 1,\n\"link-master\": 1,\n\"controller\": 1,\n\"field-master\": 1,\n\"specops\": 1,\n\"engineer\": 1,\n\"sojourner\": 1,\n\"recruiter\": 1,\n\"translator\": 1,\n\"missionday\": 1,\n\"lifetime_ap\": 1\n\"level\": 1,\n\"faction\": \"res\",\n\"last_submit\": \"2016-01-01 00:00:00\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./web/lib/AgentStats/Groups/GroupController.php",
    "groupTitle": "Groups"
  },
  {
    "type": "get",
    "url": "/groups/:groupid/info",
    "title": "show group configuration/info",
    "name": "showGroupInfo",
    "version": "0.4.1",
    "group": "Groups",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Group ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Group name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Group description</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mode",
            "description": "<p>Group mode (open, validation, invitation)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "customEnabled",
            "description": "<p>Custom date range enabled (1 = true, 0 = false)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "startDate",
            "description": "<p>Start date of custom date range</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "endDate",
            "description": "<p>End date of custom date range</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastRefresh",
            "description": "<p>Date of last refresh of custom date range</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"id\": \"576260c008eef1.39181863\",\n \"name\": \"test\",\n \"description\": \"its a group!\",\n \"mode\": \"validation\",\n \"customEnabled\": 1,\n \"startDate\": \"2012-01-01 00:00:00\",\n \"endDate\": \"2018-01-01 00:00:00\",\n \"lastRefresh\": \"2017-09-17 18:06:07\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./web/lib/AgentStats/Groups/GroupController.php",
    "groupTitle": "Groups"
  },
  {
    "type": "get",
    "url": "/history[/:startdate]",
    "title": "get plain history optional by startdate",
    "name": "getHistory",
    "version": "0.4.2",
    "group": "Medals",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "startdate",
            "defaultValue": "2012-01-01",
            "description": "<p>00:00:00]      Start of progress calculation in YYYY-MM-DD HH:mm:ss</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "stats",
            "description": "<p>Array of raw stats</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (snippet, not full output):",
          "content": "[\n{\n\"date\": \"2017-07-25 11:00:35\",\n\"ap\": 1,\n\"explorer\": 1,\n\"discoverer\": 1,\n\"seer\": 1,\n\"collector\": 1,\n\"recon\": 1,\n\"trekker\": 1,\n\"builder\": 1,\n\"connector\": 1,\n\"mind-controller\": 1,\n\"illuminator\": 1,\n\"binder\": 1,\n\"country-master\": 1,\n\"recharger\": 1,\n\"liberator\": 1,\n\"pioneer\": 1,\n\"engineer\": 1,\n\"purifier\": 1,\n\"neutralizer\": 1,\n\"disruptor\": 1,\n\"salvator\": 1,\n\"guardian\": 1,\n\"smuggler\": 1,\n\"link-master\": 1,\n\"controller\": 1,\n\"field-master\": 1,\n\"specops\": 1,\n\"missionday\": 1,\n\"nl-1331-meetups\": 1,\n\"hacker\": 1,\n\"translator\": 1,\n\"sojourner\": 1,\n\"recruiter\": 1\n}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./web/lib/AgentStats/Medals/MedalController.php",
    "groupTitle": "Medals"
  },
  {
    "type": "get",
    "url": "/medals",
    "title": "returns a list of known medals and their options",
    "name": "medals",
    "version": "0.1.0",
    "group": "Medals",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "NAME",
            "description": "<p>Medals and their options</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "NAME.official",
            "description": "<p>Official ingame medal? 1 = true, 0 = false</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "NAME.hide",
            "description": "<p>Is medal hidden? 1 = true, 0 = false</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "NAME.label",
            "description": "<p>Full name/description of medal</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "NAME.TARGET",
            "description": "<p>TARGET can be a medal tier (bronze, silver, gold, platinum, black) or a level and its value</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (snippet, not full output):",
          "content": "{\n  \"explorer\": {\n\"official\": 1,\n\"hide\": 0,\n\"label\": \"Unique Portals Visited\",\n\"bronze\": 100,\n\"silver\": 1000,\n\"gold\": 2000,\n\"platinum\": 10000,\n\"black\": 30000\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./web/lib/AgentStats/Medals/MedalController.php",
    "groupTitle": "Medals"
  },
  {
    "type": "get",
    "url": "/progress[/:startdate]",
    "title": "show your progress starting by startdate",
    "name": "progress",
    "version": "0.1.0",
    "group": "Medals",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "startdate",
            "defaultValue": "2012-01-01",
            "description": "<p>Start of progress calculation in YYYY-MM-DD</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "mymedals",
            "description": "<p>Dictionary of medals with progress</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "mymedals.MEDAL",
            "description": "<p>Dictionary of medal progress and predictions</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "mymedals.MEDAL.progression",
            "description": "<p>Dictionary of progression of that medal (latest, week, month, total)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "mymedals.MEDAL.date",
            "description": "<p>Dictionary of milestone reached (1) or will be reached on date (YYYY-MM-DD)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "mymedals.MEDAL.miss",
            "description": "<p>Dictionary of milestone missing values</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (snippet, not full output):",
          "content": "{\n\"mymedals\": {\n\"explorer\": {\n\"progression\": {\n\"latest\": 51,\n\"week\": 57,\n\"month\": 248,\n\"total\": 5981\n},\n\"date\": {\n\"bronze\": 1,\n\"silver\": 1,\n\"gold\": 1,\n\"platinum\": \"2017-10-22\",\n\"black\": \"2024-06-01\"\n},\n\"miss\": {\n\"platinum\": 4019,\n\"black\": 24019\n}\n}\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./web/lib/AgentStats/Medals/MedalController.php",
    "groupTitle": "Medals"
  },
  {
    "type": "get",
    "url": "/share",
    "title": "returns a list incoming and outgoing shares",
    "name": "share",
    "version": "0.2.0",
    "group": "Medals",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "user",
            "description": "<p>Array of users you shared your stats to or got a share from</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>Agentname of source/target</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.faction",
            "description": "<p>Faction of agent</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.direction",
            "description": "<p>&quot;from&quot; = incoming share, &quot;to&quot; = outgoing share</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (snippet, not full output):",
          "content": "[\n{\n\"username\":\"testagent\",\n\"faction\":\"res\",\n\"direction\":\"from\"\n}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./web/lib/AgentStats/Medals/MedalController.php",
    "groupTitle": "Medals"
  },
  {
    "type": "get",
    "url": "/share/:username[/:startdate]",
    "title": "get progress of a user who shared you his stats",
    "name": "sharedProgress",
    "version": "0.2.0",
    "group": "Medals",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "startdate",
            "defaultValue": "2012-01-01",
            "description": "<p>Start of progress calculation in YYYY-MM-DD</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "USERNAME",
            "description": "<p>Dictionary of medals with progress of USERNAME</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "USERNAME.MEDAL",
            "description": "<p>Dictionary of medal progress and predictions</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "USERNAME.MEDAL.progression",
            "description": "<p>Dictionary of progression of that medal (latest, week, month, total)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "USERNAME.MEDAL.date",
            "description": "<p>Dictionary of milestone reached (1) or will be reached on date (YYYY-MM-DD)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "USERNAME.MEDAL.miss",
            "description": "<p>Dictionary of milestone missing values</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (snippet, not full output):",
          "content": "{\n\"testagent\": {\n\"explorer\": {\n\"progression\": {\n\"latest\": 51,\n\"week\": 57,\n\"month\": 248,\n\"total\": 5981\n},\n\"date\": {\n\"bronze\": 1,\n\"silver\": 1,\n\"gold\": 1,\n\"platinum\": \"2017-10-22\",\n\"black\": \"2024-06-01\"\n},\n\"miss\": {\n\"platinum\": 4019,\n\"black\": 24019\n}\n}\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./web/lib/AgentStats/Medals/MedalController.php",
    "groupTitle": "Medals"
  }
] });
