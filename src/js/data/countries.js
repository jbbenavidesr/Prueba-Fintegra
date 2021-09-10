/**
 * Array with all the countries allowed by agify.io
 */
const countries = [
    {
        "ISO Code": "*",
        Country: "All",
        Rows: "114.541.298",
    },
    {
        "ISO Code": "FR",
        Country: "France",
        Rows: "15.790.461",
    },
    {
        "ISO Code": "IT",
        Country: "Italy",
        Rows: "13.461.719",
    },
    {
        "ISO Code": "ES",
        Country: "Spain",
        Rows: "11.858.788",
    },
    {
        "ISO Code": "TR",
        Country: "Turkey",
        Rows: "8.898.022",
    },
    {
        "ISO Code": "DE",
        Country: "Germany",
        Rows: "6.134.293",
    },
    {
        "ISO Code": "PL",
        Country: "Poland",
        Rows: "4.425.830",
    },
    {
        "ISO Code": "GB",
        Country: "United Kingdom",
        Rows: "4.096.723",
    },
    {
        "ISO Code": "RU",
        Country: "Russia",
        Rows: "2.777.035",
    },
    {
        "ISO Code": "CZ",
        Country: "Czech Republic",
        Rows: "2.621.533",
    },
    {
        "ISO Code": "PT",
        Country: "Portugal",
        Rows: "2.103.522",
    },
    {
        "ISO Code": "NL",
        Country: "Netherlands",
        Rows: "2.074.912",
    },
    {
        "ISO Code": "BE",
        Country: "Belgium",
        Rows: "2.050.461",
    },
    {
        "ISO Code": "MA",
        Country: "Morocco",
        Rows: "2.012.516",
    },
    {
        "ISO Code": "PH",
        Country: "Philippines",
        Rows: "2.007.670",
    },
    {
        "ISO Code": "US",
        Country: "United States",
        Rows: "1.851.436",
    },
    {
        "ISO Code": "RO",
        Country: "Romania",
        Rows: "1.472.190",
    },
    {
        "ISO Code": "DZ",
        Country: "Algeria",
        Rows: "1.392.027",
    },
    {
        "ISO Code": "NG",
        Country: "Nigeria",
        Rows: "1.343.906",
    },
    {
        "ISO Code": "CH",
        Country: "Switzerland",
        Rows: "1.269.596",
    },
    {
        "ISO Code": "HU",
        Country: "Hungary",
        Rows: "1.191.558",
    },
    {
        "ISO Code": "TH",
        Country: "Thailand",
        Rows: "1.056.580",
    },
    {
        "ISO Code": "SE",
        Country: "Sweden",
        Rows: "1.040.170",
    },
    {
        "ISO Code": "ID",
        Country: "Indonesia",
        Rows: "1.007.824",
    },
    {
        "ISO Code": "IN",
        Country: "India",
        Rows: "896.642",
    },
    {
        "ISO Code": "UA",
        Country: "Ukraine",
        Rows: "877.446",
    },
    {
        "ISO Code": "MY",
        Country: "Malaysia",
        Rows: "838.356",
    },
    {
        "ISO Code": "TN",
        Country: "Tunisia",
        Rows: "832.183",
    },
    {
        "ISO Code": "SA",
        Country: "Saudi Arabia",
        Rows: "822.149",
    },
    {
        "ISO Code": "GR",
        Country: "Greece",
        Rows: "778.361",
    },
    {
        "ISO Code": "CI",
        Country: "Ivory Coast",
        Rows: "644.078",
    },
    {
        "ISO Code": "AT",
        Country: "Austria",
        Rows: "639.971",
    },
    {
        "ISO Code": "ZA",
        Country: "South Africa",
        Rows: "629.291",
    },
    {
        "ISO Code": "KR",
        Country: "South Korea",
        Rows: "579.042",
    },
    {
        "ISO Code": "CN",
        Country: "China",
        Rows: "536.555",
    },
    {
        "ISO Code": "RS",
        Country: "Serbia",
        Rows: "517.549",
    },
    {
        "ISO Code": "JP",
        Country: "Japan",
        Rows: "505.620",
    },
    {
        "ISO Code": "EG",
        Country: "Egypt",
        Rows: "492.569",
    },
    {
        "ISO Code": "SK",
        Country: "Slovakia",
        Rows: "477.856",
    },
    {
        "ISO Code": "SN",
        Country: "Senegal",
        Rows: "443.777",
    },
    {
        "ISO Code": "DK",
        Country: "Denmark",
        Rows: "395.087",
    },
    {
        "ISO Code": "FI",
        Country: "Finland",
        Rows: "370.894",
    },
    {
        "ISO Code": "CM",
        Country: "Cameroon",
        Rows: "356.846",
    },
    {
        "ISO Code": "IR",
        Country: "Iran",
        Rows: "351.787",
    },
    {
        "ISO Code": "AR",
        Country: "Argentina",
        Rows: "349.637",
    },
    {
        "ISO Code": "CA",
        Country: "Canada",
        Rows: "341.092",
    },
    {
        "ISO Code": "SG",
        Country: "Singapore",
        Rows: "337.002",
    },
    {
        "ISO Code": "PK",
        Country: "Pakistan",
        Rows: "314.531",
    },
    {
        "ISO Code": "GH",
        Country: "Ghana",
        Rows: "311.567",
    },
    {
        "ISO Code": "LB",
        Country: "Lebanon",
        Rows: "292.014",
    },
    {
        "ISO Code": "IE",
        Country: "Ireland",
        Rows: "278.676",
    },
    {
        "ISO Code": "AO",
        Country: "Angola",
        Rows: "269.970",
    },
    {
        "ISO Code": "NO",
        Country: "Norway",
        Rows: "229.829",
    },
    {
        "ISO Code": "BY",
        Country: "Belarus",
        Rows: "229.008",
    },
    {
        "ISO Code": "BR",
        Country: "Brazil",
        Rows: "226.973",
    },
    {
        "ISO Code": "MX",
        Country: "Mexico",
        Rows: "224.250",
    },
    {
        "ISO Code": "CO",
        Country: "Colombia",
        Rows: "223.016",
    },
    {
        "ISO Code": "KE",
        Country: "Kenya",
        Rows: "220.092",
    },
    {
        "ISO Code": "CL",
        Country: "Chile",
        Rows: "210.959",
    },
    {
        "ISO Code": "KW",
        Country: "Kuwait",
        Rows: "204.312",
    },
    {
        "ISO Code": "AL",
        Country: "Albania",
        Rows: "198.045",
    },
    {
        "ISO Code": "VE",
        Country: "Venezuela",
        Rows: "186.962",
    },
    {
        "ISO Code": "RE",
        Country: "Reunion",
        Rows: "186.079",
    },
    {
        "ISO Code": "BA",
        Country: "Bosnia and Herzegovina",
        Rows: "184.373",
    },
    {
        "ISO Code": "IL",
        Country: "Israel",
        Rows: "182.338",
    },
    {
        "ISO Code": "TW",
        Country: "Taiwan",
        Rows: "170.003",
    },
    {
        "ISO Code": "SI",
        Country: "Slovenia",
        Rows: "167.862",
    },
    {
        "ISO Code": "KZ",
        Country: "Kazakhstan",
        Rows: "161.454",
    },
    {
        "ISO Code": "PE",
        Country: "Peru",
        Rows: "159.906",
    },
    {
        "ISO Code": "AZ",
        Country: "Azerbaijan",
        Rows: "158.648",
    },
    {
        "ISO Code": "AE",
        Country: "United Arab Emirates",
        Rows: "145.847",
    },
    {
        "ISO Code": "CY",
        Country: "Cyprus",
        Rows: "135.957",
    },
    {
        "ISO Code": "LT",
        Country: "Lithuania",
        Rows: "133.387",
    },
    {
        "ISO Code": "DO",
        Country: "Dominican Republic",
        Rows: "126.825",
    },
    {
        "ISO Code": "JO",
        Country: "Jordan",
        Rows: "125.155",
    },
    {
        "ISO Code": "MD",
        Country: "Moldova",
        Rows: "119.189",
    },
    {
        "ISO Code": "BJ",
        Country: "Benin",
        Rows: "113.602",
    },
    {
        "ISO Code": "BG",
        Country: "Bulgaria",
        Rows: "113.541",
    },
    {
        "ISO Code": "CD",
        Country: "Democratic Republic of the Congo",
        Rows: "110.018",
    },
    {
        "ISO Code": "HR",
        Country: "Croatia",
        Rows: "107.145",
    },
    {
        "ISO Code": "LV",
        Country: "Latvia",
        Rows: "105.962",
    },
    {
        "ISO Code": "HK",
        Country: "Hong Kong",
        Rows: "104.450",
    },
    {
        "ISO Code": "MZ",
        Country: "Mozambique",
        Rows: "102.494",
    },
    {
        "ISO Code": "AU",
        Country: "Australia",
        Rows: "100.155",
    },
    {
        "ISO Code": "LU",
        Country: "Luxembourg",
        Rows: "99.606",
    },
    {
        "ISO Code": "UG",
        Country: "Uganda",
        Rows: "99.398",
    },
    {
        "ISO Code": "ML",
        Country: "Mali",
        Rows: "97.511",
    },
    {
        "ISO Code": "BF",
        Country: "Burkina Faso",
        Rows: "94.841",
    },
    {
        "ISO Code": "MU",
        Country: "Mauritius",
        Rows: "90.171",
    },
    {
        "ISO Code": "OM",
        Country: "Oman",
        Rows: "85.537",
    },
    {
        "ISO Code": "TG",
        Country: "Togo",
        Rows: "84.575",
    },
    {
        "ISO Code": "QA",
        Country: "Qatar",
        Rows: "81.133",
    },
    {
        "ISO Code": "MK",
        Country: "Macedonia",
        Rows: "79.629",
    },
    {
        "ISO Code": "MG",
        Country: "Madagascar",
        Rows: "77.965",
    },
    {
        "ISO Code": "VN",
        Country: "Vietnam",
        Rows: "75.247",
    },
    {
        "ISO Code": "GA",
        Country: "Gabon",
        Rows: "70.283",
    },
    {
        "ISO Code": "EE",
        Country: "Estonia",
        Rows: "66.756",
    },
    {
        "ISO Code": "IQ",
        Country: "Iraq",
        Rows: "62.781",
    },
    {
        "ISO Code": "MT",
        Country: "Malta",
        Rows: "60.797",
    },
    {
        "ISO Code": "BH",
        Country: "Bahrain",
        Rows: "59.786",
    },
    {
        "ISO Code": "TZ",
        Country: "Tanzania",
        Rows: "59.013",
    },
    {
        "ISO Code": "EC",
        Country: "Ecuador",
        Rows: "57.855",
    },
    {
        "ISO Code": "GE",
        Country: "Georgia",
        Rows: "57.462",
    },
    {
        "ISO Code": "AM",
        Country: "Armenia",
        Rows: "53.429",
    },
    {
        "ISO Code": "SD",
        Country: "Sudan",
        Rows: "52.850",
    },
    {
        "ISO Code": "ET",
        Country: "Ethiopia",
        Rows: "49.457",
    },
    {
        "ISO Code": "MM",
        Country: "Myanmar",
        Rows: "48.792",
    },
    {
        "ISO Code": "ME",
        Country: "Montenegro",
        Rows: "42.209",
    },
    {
        "ISO Code": "SY",
        Country: "Syria",
        Rows: "41.018",
    },
    {
        "ISO Code": "UZ",
        Country: "Uzbekistan",
        Rows: "40.831",
    },
    {
        "ISO Code": "ZW",
        Country: "Zimbabwe",
        Rows: "39.710",
    },
    {
        "ISO Code": "DJ",
        Country: "Djibouti",
        Rows: "39.446",
    },
    {
        "ISO Code": "LK",
        Country: "Sri Lanka",
        Rows: "37.965",
    },
    {
        "ISO Code": "BD",
        Country: "Bangladesh",
        Rows: "37.806",
    },
    {
        "ISO Code": "SH",
        Country: "Saint Helena",
        Rows: "35.153",
    },
    {
        "ISO Code": "BW",
        Country: "Botswana",
        Rows: "35.023",
    },
    {
        "ISO Code": "CV",
        Country: "Cape Verde",
        Rows: "34.570",
    },
    {
        "ISO Code": "BO",
        Country: "Bolivia",
        Rows: "33.754",
    },
    {
        "ISO Code": "YE",
        Country: "Yemen",
        Rows: "33.419",
    },
    {
        "ISO Code": "RW",
        Country: "Rwanda",
        Rows: "33.034",
    },
    {
        "ISO Code": "IS",
        Country: "Iceland",
        Rows: "32.729",
    },
    {
        "ISO Code": "LY",
        Country: "Libya",
        Rows: "31.258",
    },
    {
        "ISO Code": "NE",
        Country: "Niger",
        Rows: "29.998",
    },
    {
        "ISO Code": "AD",
        Country: "Andorra",
        Rows: "29.783",
    },
    {
        "ISO Code": "GM",
        Country: "Gambia",
        Rows: "26.232",
    },
    {
        "ISO Code": "CG",
        Country: "Republic of the Congo",
        Rows: "25.928",
    },
    {
        "ISO Code": "ZM",
        Country: "Zambia",
        Rows: "24.979",
    },
    {
        "ISO Code": "AF",
        Country: "Afghanistan",
        Rows: "23.531",
    },
    {
        "ISO Code": "NA",
        Country: "Namibia",
        Rows: "23.262",
    },
    {
        "ISO Code": "MR",
        Country: "Mauritania",
        Rows: "23.219",
    },
    {
        "ISO Code": "UY",
        Country: "Uruguay",
        Rows: "22.651",
    },
    {
        "ISO Code": "CR",
        Country: "Costa Rica",
        Rows: "22.279",
    },
    {
        "ISO Code": "KG",
        Country: "Kyrgyzstan",
        Rows: "21.585",
    },
    {
        "ISO Code": "PA",
        Country: "Panama",
        Rows: "19.787",
    },
    {
        "ISO Code": "NP",
        Country: "Nepal",
        Rows: "19.191",
    },
    {
        "ISO Code": "GN",
        Country: "Guinea",
        Rows: "18.781",
    },
    {
        "ISO Code": "GP",
        Country: "Guadeloupe",
        Rows: "16.347",
    },
    {
        "ISO Code": "GQ",
        Country: "Equatorial Guinea",
        Rows: "16.259",
    },
    {
        "ISO Code": "MQ",
        Country: "Martinique",
        Rows: "15.585",
    },
    {
        "ISO Code": "SC",
        Country: "Seychelles",
        Rows: "14.685",
    },
    {
        "ISO Code": "CU",
        Country: "Cuba",
        Rows: "14.050",
    },
    {
        "ISO Code": "NZ",
        Country: "New Zealand",
        Rows: "13.970",
    },
    {
        "ISO Code": "GT",
        Country: "Guatemala",
        Rows: "13.374",
    },
    {
        "ISO Code": "MC",
        Country: "Monaco",
        Rows: "13.173",
    },
    {
        "ISO Code": "MV",
        Country: "Maldives",
        Rows: "12.261",
    },
    {
        "ISO Code": "MW",
        Country: "Malawi",
        Rows: "12.231",
    },
    {
        "ISO Code": "SV",
        Country: "El Salvador",
        Rows: "12.058",
    },
    {
        "ISO Code": "GF",
        Country: "French Guiana",
        Rows: "11.974",
    },
    {
        "ISO Code": "SL",
        Country: "Sierra Leone",
        Rows: "11.777",
    },
    {
        "ISO Code": "LR",
        Country: "Liberia",
        Rows: "11.518",
    },
    {
        "ISO Code": "NI",
        Country: "Nicaragua",
        Rows: "11.327",
    },
    {
        "ISO Code": "KH",
        Country: "Cambodia",
        Rows: "10.401",
    },
    {
        "ISO Code": "TJ",
        Country: "Tajikistan",
        Rows: "10.312",
    },
    {
        "ISO Code": "PR",
        Country: "Puerto Rico",
        Rows: "10.230",
    },
    {
        "ISO Code": "BI",
        Country: "Burundi",
        Rows: "10.053",
    },
    {
        "ISO Code": "PY",
        Country: "Paraguay",
        Rows: "9.551",
    },
    {
        "ISO Code": "KM",
        Country: "Comoros",
        Rows: "9.111",
    },
    {
        "ISO Code": "LS",
        Country: "Lesotho",
        Rows: "7.604",
    },
    {
        "ISO Code": "SO",
        Country: "Somalia",
        Rows: "7.336",
    },
    {
        "ISO Code": "HN",
        Country: "Honduras",
        Rows: "7.033",
    },
    {
        "ISO Code": "TD",
        Country: "Chad",
        Rows: "6.504",
    },
    {
        "ISO Code": "GI",
        Country: "Gibraltar",
        Rows: "6.463",
    },
    {
        "ISO Code": "BN",
        Country: "Brunei",
        Rows: "6.309",
    },
    {
        "ISO Code": "SM",
        Country: "San Marino",
        Rows: "6.150",
    },
    {
        "ISO Code": "JE",
        Country: "Jersey",
        Rows: "5.678",
    },
    {
        "ISO Code": "SZ",
        Country: "Swaziland",
        Rows: "5.601",
    },
    {
        "ISO Code": "TM",
        Country: "Turkmenistan",
        Rows: "5.216",
    },
    {
        "ISO Code": "NC",
        Country: "New Caledonia",
        Rows: "4.674",
    },
    {
        "ISO Code": "MN",
        Country: "Mongolia",
        Rows: "4.462",
    },
    {
        "ISO Code": "LI",
        Country: "Liechtenstein",
        Rows: "4.382",
    },
    {
        "ISO Code": "GL",
        Country: "Greenland",
        Rows: "4.353",
    },
    {
        "ISO Code": "BT",
        Country: "Bhutan",
        Rows: "4.283",
    },
    {
        "ISO Code": "PF",
        Country: "French Polynesia",
        Rows: "4.187",
    },
    {
        "ISO Code": "ST",
        Country: "Sao Tome and Principe",
        Rows: "3.375",
    },
    {
        "ISO Code": "YT",
        Country: "Mayotte",
        Rows: "3.355",
    },
    {
        "ISO Code": "FO",
        Country: "Faroe Islands",
        Rows: "2.993",
    },
    {
        "ISO Code": "JM",
        Country: "Jamaica",
        Rows: "2.765",
    },
    {
        "ISO Code": "HT",
        Country: "Haiti",
        Rows: "2.449",
    },
    {
        "ISO Code": "BS",
        Country: "Bahamas",
        Rows: "2.446",
    },
    {
        "ISO Code": "GW",
        Country: "Guinea-Bissau",
        Rows: "2.141",
    },
    {
        "ISO Code": "FJ",
        Country: "Fiji",
        Rows: "2.086",
    },
    {
        "ISO Code": "GG",
        Country: "Guernsey",
        Rows: "2.085",
    },
    {
        "ISO Code": "LA",
        Country: "Laos",
        Rows: "1.952",
    },
    {
        "ISO Code": "TL",
        Country: "East Timor",
        Rows: "1.934",
    },
    {
        "ISO Code": "TT",
        Country: "Trinidad and Tobago",
        Rows: "1.855",
    },
    {
        "ISO Code": "AG",
        Country: "Antigua and Barbuda",
        Rows: "1.723",
    },
    {
        "ISO Code": "EH",
        Country: "Western Sahara",
        Rows: "1.708",
    },
    {
        "ISO Code": "CF",
        Country: "Central African Republic",
        Rows: "1.667",
    },
    {
        "ISO Code": "PW",
        Country: "Palau",
        Rows: "1.604",
    },
    {
        "ISO Code": "IM",
        Country: "Isle of Man",
        Rows: "1.374",
    },
    {
        "ISO Code": "AW",
        Country: "Aruba",
        Rows: "1.348",
    },
    {
        "ISO Code": "BZ",
        Country: "Belize",
        Rows: "1.308",
    },
    {
        "ISO Code": "AS",
        Country: "American Samoa",
        Rows: "1.262",
    },
    {
        "ISO Code": "AI",
        Country: "Anguilla",
        Rows: "1.081",
    },
    {
        "ISO Code": "MP",
        Country: "Northern Mariana Islands",
        Rows: "1.071",
    },
    {
        "ISO Code": "BM",
        Country: "Bermuda",
        Rows: "953",
    },
    {
        "ISO Code": "ER",
        Country: "Eritrea",
        Rows: "836",
    },
    {
        "ISO Code": "SR",
        Country: "Suriname",
        Rows: "819",
    },
    {
        "ISO Code": "VG",
        Country: "British Virgin Islands",
        Rows: "788",
    },
    {
        "ISO Code": "VI",
        Country: "U.S. Virgin Islands",
        Rows: "756",
    },
    {
        "ISO Code": "GY",
        Country: "Guyana",
        Rows: "702",
    },
    {
        "ISO Code": "BB",
        Country: "Barbados",
        Rows: "687",
    },
    {
        "ISO Code": "MH",
        Country: "Marshall Islands",
        Rows: "678",
    },
    {
        "ISO Code": "MO",
        Country: "Macao",
        Rows: "611",
    },
    {
        "ISO Code": "PG",
        Country: "Papua New Guinea",
        Rows: "600",
    },
    {
        "ISO Code": "KY",
        Country: "Cayman Islands",
        Rows: "545",
    },
    {
        "ISO Code": "KI",
        Country: "Kiribati",
        Rows: "507",
    },
    {
        "ISO Code": "AN",
        Country: "Netherlands Antilles",
        Rows: "484",
    },
    {
        "ISO Code": "CK",
        Country: "Cook Islands",
        Rows: "463",
    },
    {
        "ISO Code": "GU",
        Country: "Guam",
        Rows: "442",
    },
    {
        "ISO Code": "WF",
        Country: "Wallis and Futuna",
        Rows: "429",
    },
    {
        "ISO Code": "PS",
        Country: "Palestine",
        Rows: "371",
    },
    {
        "ISO Code": "TC",
        Country: "Turks and Caicos Islands",
        Rows: "359",
    },
    {
        "ISO Code": "VU",
        Country: "Vanuatu",
        Rows: "357",
    },
    {
        "ISO Code": "LC",
        Country: "Saint Lucia",
        Rows: "344",
    },
    {
        "ISO Code": "TO",
        Country: "Tonga",
        Rows: "299",
    },
    {
        "ISO Code": "CC",
        Country: "Cocos Islands",
        Rows: "285",
    },
    {
        "ISO Code": "WS",
        Country: "Samoa",
        Rows: "274",
    },
    {
        "ISO Code": "GD",
        Country: "Grenada",
        Rows: "271",
    },
    {
        "ISO Code": "VA",
        Country: "Vatican",
        Rows: "268",
    },
    {
        "ISO Code": "IO",
        Country: "British Indian Ocean Territory",
        Rows: "254",
    },
    {
        "ISO Code": "FM",
        Country: "Micronesia",
        Rows: "231",
    },
    {
        "ISO Code": "NU",
        Country: "Niue",
        Rows: "216",
    },
    {
        "ISO Code": "BL",
        Country: "Saint Barthelemy",
        Rows: "202",
    },
    {
        "ISO Code": "KN",
        Country: "Saint Kitts and Nevis",
        Rows: "198",
    },
    {
        "ISO Code": "PM",
        Country: "Saint Pierre and Miquelon",
        Rows: "195",
    },
    {
        "ISO Code": "FK",
        Country: "Falkland Islands",
        Rows: "184",
    },
    {
        "ISO Code": "AQ",
        Country: "Antarctica",
        Rows: "171",
    },
    {
        "ISO Code": "PN",
        Country: "Pitcairn",
        Rows: "160",
    },
    {
        "ISO Code": "MF",
        Country: "Saint Martin",
        Rows: "155",
    },
    {
        "ISO Code": "TV",
        Country: "Tuvalu",
        Rows: "154",
    },
    {
        "ISO Code": "VC",
        Country: "Saint Vincent and the Grenadines",
        Rows: "153",
    },
    {
        "ISO Code": "DM",
        Country: "Dominica",
        Rows: "132",
    },
    {
        "ISO Code": "SB",
        Country: "Solomon Islands",
        Rows: "118",
    },
    {
        "ISO Code": "TK",
        Country: "Tokelau",
        Rows: "103",
    },
    {
        "ISO Code": "NF",
        Country: "Norfolk Island",
        Rows: "93",
    },
    {
        "ISO Code": "CX",
        Country: "Christmas Island",
        Rows: "84",
    },
    {
        "ISO Code": "NR",
        Country: "Nauru",
        Rows: "62",
    },
    {
        "ISO Code": "SJ",
        Country: "Svalbard and Jan Mayen",
        Rows: "40",
    },
    {
        "ISO Code": "MS",
        Country: "Montserrat",
        Rows: "25",
    },
    {
        "ISO Code": "KP",
        Country: "North Korea",
        Rows: "9",
    },
    {
        "ISO Code": "GS",
        Country: "South Georgia And Sandwich Isl.",
        Rows: "5",
    },
    {
        "ISO Code": "BV",
        Country: "Bouvet Island",
        Rows: "1",
    },
];

export default countries;
