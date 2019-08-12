var APP_DATA = {
  "scenes": [
    {
      "id": "0-sitting",
      "name": "Sitting",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.5314273412158137,
        "pitch": 0.02614941017842476,
        "fov": 1.3382476609244804
      },
      "linkHotspots": [
        {
          "yaw": -0.3439623380291881,
          "pitch": 0.09861739439229034,
          "rotation": 0,
          "target": "1-kitchen"
        },
        {
          "yaw": -1.463481304168269,
          "pitch": -0.1357789263859992,
          "rotation": 0,
          "target": "2-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 1.2383275280182229,
        "pitch": 0.05269206417307082,
        "fov": 1.3382476609244804
      },
      "linkHotspots": [
        {
          "yaw": 2.5755811925702137,
          "pitch": 0.09840146991894727,
          "rotation": 0,
          "target": "0-sitting"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-landing",
      "name": "Landing",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1426619272361158,
          "pitch": 0.531672171424777,
          "rotation": 0,
          "target": "0-sitting"
        },
        {
          "yaw": 0.2558835105369841,
          "pitch": 0.3038578180105169,
          "rotation": 0,
          "target": "4-bedroom1"
        },
        {
          "yaw": -0.2664617260909292,
          "pitch": 0.3086742662577642,
          "rotation": 0,
          "target": "5-bedroom2"
        },
        {
          "yaw": -2.7626527414587283,
          "pitch": 0.20915811959825525,
          "rotation": 0,
          "target": "3-bathroom"
        },
        {
          "yaw": 2.6349387834685967,
          "pitch": 0.14499518282014634,
          "rotation": 0,
          "target": "6-master"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bathroom",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 1.124120838807249,
        "pitch": 0.186510265366838,
        "fov": 1.3382476609244804
      },
      "linkHotspots": [
        {
          "yaw": 1.9906884460049827,
          "pitch": 0.22313238668352575,
          "rotation": 0,
          "target": "2-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bedroom1",
      "name": "Bedroom1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 1.0157964670676538,
        "pitch": 0.16598016567118812,
        "fov": 1.3382476609244804
      },
      "linkHotspots": [
        {
          "yaw": -3.0039221415745896,
          "pitch": 0.3026856924541619,
          "rotation": 0,
          "target": "2-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bedroom2",
      "name": "Bedroom2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -1.0208193901211047,
        "pitch": 0.17235040357933684,
        "fov": 1.3382476609244804
      },
      "linkHotspots": [
        {
          "yaw": 3.078964368766095,
          "pitch": 0.3010805060145678,
          "rotation": 0,
          "target": "2-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-master",
      "name": "Master",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.11649979602183969,
        "pitch": -0.09157526381858538,
        "fov": 1.3382476609244804
      },
      "linkHotspots": [
        {
          "yaw": 0.9115594840430337,
          "pitch": 0.1369464337690065,
          "rotation": 0,
          "target": "7-ensuite"
        },
        {
          "yaw": 2.276502796692946,
          "pitch": 0.2368734559974417,
          "rotation": 0,
          "target": "2-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-ensuite",
      "name": "Ensuite",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.33260916894073844,
        "pitch": 0.031030367881715648,
        "fov": 1.3382476609244804
      },
      "linkHotspots": [
        {
          "yaw": 2.8692049227048164,
          "pitch": 0.37554230317698156,
          "rotation": 0,
          "target": "6-master"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Waverley",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
