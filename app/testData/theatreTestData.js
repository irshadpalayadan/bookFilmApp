const TheatreTestData = {

    getTheatreByDate: function(filmName, date, location) {
            if (date == "01/01/2018") {

        return    [
                {
                "name": "ESSENSIA",
                "place": "Mayfair Drive, Fairacres",
                "cord": [
                    5.822689,
                    -145.664416
                ],
                "rate": 37,
                "shows": [
                    "10.10 AM",
                    "2.30 PM"
                ],
                "id": "5bf9e255785622ad593e9db9"
                },
                {
                "name": "FROSNEX",
                "place": "Bliss Terrace, Grill",
                "cord": [
                    39.011762,
                    -53.126866
                ],
                "rate": 66,
                "shows": [
                    "10.10 AM"
                ],
                "id": "5bf9e2559dfde3da176f5736"
                },
                {
                "name": "CORECOM",
                "place": "Nolans Lane, Remington",
                "cord": [
                    -37.803658,
                    0.892477
                ],
                "rate": 50,
                "shows": [
                    "10.10 AM",
                    "2.30 PM",
                    "4.30 PM",
                    "8.30 PM",
                    "8.30 PM",
                    "8.30 PM",
                    "8.30 PM",
                    "8.30 PM"
                ],
                "id": "5bf9e255f555dd3620d13cfc"
                },
                {
                "name": "QUIZMO",
                "place": "Hancock Street, Tooleville",
                "cord": [
                    -35.600442,
                    99.155397
                ],
                "rate": 30,
                "shows": [
                    "10.10 AM",
                    "2.30 PM",
                    "4.30 PM",
                    "8.30 PM"
                ],
                "id": "5bf9e255b5a427a11aed332b"
                },
                {
                "name": "FRENEX",
                "place": "Hunts Lane, Jackpot",
                "cord": [
                    -9.230927,
                    -63.555282
                ],
                "rate": 44,
                "shows": [
                    "10.10 AM",
                    "2.30 PM"
                ],
                "id": "5bf9e25570961017544622ab"
                },
                {
                "name": "ISOLOGIX",
                "place": "Court Street, Jacksonburg",
                "cord": [
                    49.041763,
                    -51.104343
                ],
                "rate": 51,
                "shows": [
                    "10.10 AM"
                ],
                "id": "5bf9e255954cbde4092cbc6e"
                }
            ]
            } else if(date == "02/02/2018") {
                        
                return    [
                    {
                    "name": "ESSENSIA",
                    "place": "Mayfair Drive, Fairacres",
                    "cord": [
                        5.822689,
                        -145.664416
                    ],
                    "rate": 37,
                    "shows": [
                        "10.10 AM",
                        "2.30 PM"
                    ],
                    "id": "5bf9e255785622ad593e9db9"
                    },
                    {
                    "name": "FROSNEX",
                    "place": "Bliss Terrace, Grill",
                    "cord": [
                        39.011762,
                        -53.126866
                    ],
                    "rate": 66,
                    "shows": [
                        "10.10 AM"
                    ],
                    "id": "5bf9e2559dfde3da176f5736"
                    },
                    {
                    "name": "CORECOM",
                    "place": "Nolans Lane, Remington",
                    "cord": [
                        -37.803658,
                        0.892477
                    ],
                    "rate": 50,
                    "shows": [
                        "10.10 AM",
                        "2.30 PM",
                        "4.30 PM",
                        "8.30 PM",
                        "8.30 PM",
                        "8.30 PM",
                        "8.30 PM",
                        "8.30 PM"
                    ],
                    "id": "5bf9e255f555dd3620d13cfc"
                    }]
            }

    }
}

export default TheatreTestData;