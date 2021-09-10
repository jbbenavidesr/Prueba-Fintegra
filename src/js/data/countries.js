/**
 * Array with all the countries allowed by agify.io
 */
const countries = [
    {
        ISOCode: "FR",
        Country: "France",
        Rows: "15.790.461",
    },
    {
        ISOCode: "IT",
        Country: "Italy",
        Rows: "13.461.719",
    },
    {
        ISOCode: "ES",
        Country: "Spain",
        Rows: "11.858.788",
    },
    {
        ISOCode: "TR",
        Country: "Turkey",
        Rows: "8.898.022",
    },
    {
        ISOCode: "DE",
        Country: "Germany",
        Rows: "6.134.293",
    },
    {
        ISOCode: "PL",
        Country: "Poland",
        Rows: "4.425.830",
    },
    {
        ISOCode: "GB",
        Country: "United Kingdom",
        Rows: "4.096.723",
    },
    {
        ISOCode: "RU",
        Country: "Russia",
        Rows: "2.777.035",
    },
    {
        ISOCode: "CZ",
        Country: "Czech Republic",
        Rows: "2.621.533",
    },
    {
        ISOCode: "PT",
        Country: "Portugal",
        Rows: "2.103.522",
    },
    {
        ISOCode: "NL",
        Country: "Netherlands",
        Rows: "2.074.912",
    },
    {
        ISOCode: "BE",
        Country: "Belgium",
        Rows: "2.050.461",
    },
    {
        ISOCode: "MA",
        Country: "Morocco",
        Rows: "2.012.516",
    },
    {
        ISOCode: "PH",
        Country: "Philippines",
        Rows: "2.007.670",
    },
    {
        ISOCode: "US",
        Country: "United States",
        Rows: "1.851.436",
    },
    {
        ISOCode: "RO",
        Country: "Romania",
        Rows: "1.472.190",
    },
    {
        ISOCode: "DZ",
        Country: "Algeria",
        Rows: "1.392.027",
    },
    {
        ISOCode: "NG",
        Country: "Nigeria",
        Rows: "1.343.906",
    },
    {
        ISOCode: "CH",
        Country: "Switzerland",
        Rows: "1.269.596",
    },
    {
        ISOCode: "HU",
        Country: "Hungary",
        Rows: "1.191.558",
    },
    {
        ISOCode: "TH",
        Country: "Thailand",
        Rows: "1.056.580",
    },
    {
        ISOCode: "SE",
        Country: "Sweden",
        Rows: "1.040.170",
    },
    {
        ISOCode: "ID",
        Country: "Indonesia",
        Rows: "1.007.824",
    },
    {
        ISOCode: "IN",
        Country: "India",
        Rows: "896.642",
    },
    {
        ISOCode: "UA",
        Country: "Ukraine",
        Rows: "877.446",
    },
    {
        ISOCode: "MY",
        Country: "Malaysia",
        Rows: "838.356",
    },
    {
        ISOCode: "TN",
        Country: "Tunisia",
        Rows: "832.183",
    },
    {
        ISOCode: "SA",
        Country: "Saudi Arabia",
        Rows: "822.149",
    },
    {
        ISOCode: "GR",
        Country: "Greece",
        Rows: "778.361",
    },
    {
        ISOCode: "CI",
        Country: "Ivory Coast",
        Rows: "644.078",
    },
    {
        ISOCode: "AT",
        Country: "Austria",
        Rows: "639.971",
    },
    {
        ISOCode: "ZA",
        Country: "South Africa",
        Rows: "629.291",
    },
    {
        ISOCode: "KR",
        Country: "South Korea",
        Rows: "579.042",
    },
    {
        ISOCode: "CN",
        Country: "China",
        Rows: "536.555",
    },
    {
        ISOCode: "RS",
        Country: "Serbia",
        Rows: "517.549",
    },
    {
        ISOCode: "JP",
        Country: "Japan",
        Rows: "505.620",
    },
    {
        ISOCode: "EG",
        Country: "Egypt",
        Rows: "492.569",
    },
    {
        ISOCode: "SK",
        Country: "Slovakia",
        Rows: "477.856",
    },
    {
        ISOCode: "SN",
        Country: "Senegal",
        Rows: "443.777",
    },
    {
        ISOCode: "DK",
        Country: "Denmark",
        Rows: "395.087",
    },
    {
        ISOCode: "FI",
        Country: "Finland",
        Rows: "370.894",
    },
    {
        ISOCode: "CM",
        Country: "Cameroon",
        Rows: "356.846",
    },
    {
        ISOCode: "IR",
        Country: "Iran",
        Rows: "351.787",
    },
    {
        ISOCode: "AR",
        Country: "Argentina",
        Rows: "349.637",
    },
    {
        ISOCode: "CA",
        Country: "Canada",
        Rows: "341.092",
    },
    {
        ISOCode: "SG",
        Country: "Singapore",
        Rows: "337.002",
    },
    {
        ISOCode: "PK",
        Country: "Pakistan",
        Rows: "314.531",
    },
    {
        ISOCode: "GH",
        Country: "Ghana",
        Rows: "311.567",
    },
    {
        ISOCode: "LB",
        Country: "Lebanon",
        Rows: "292.014",
    },
    {
        ISOCode: "IE",
        Country: "Ireland",
        Rows: "278.676",
    },
    {
        ISOCode: "AO",
        Country: "Angola",
        Rows: "269.970",
    },
    {
        ISOCode: "NO",
        Country: "Norway",
        Rows: "229.829",
    },
    {
        ISOCode: "BY",
        Country: "Belarus",
        Rows: "229.008",
    },
    {
        ISOCode: "BR",
        Country: "Brazil",
        Rows: "226.973",
    },
    {
        ISOCode: "MX",
        Country: "Mexico",
        Rows: "224.250",
    },
    {
        ISOCode: "CO",
        Country: "Colombia",
        Rows: "223.016",
    },
    {
        ISOCode: "KE",
        Country: "Kenya",
        Rows: "220.092",
    },
    {
        ISOCode: "CL",
        Country: "Chile",
        Rows: "210.959",
    },
    {
        ISOCode: "KW",
        Country: "Kuwait",
        Rows: "204.312",
    },
    {
        ISOCode: "AL",
        Country: "Albania",
        Rows: "198.045",
    },
    {
        ISOCode: "VE",
        Country: "Venezuela",
        Rows: "186.962",
    },
    {
        ISOCode: "RE",
        Country: "Reunion",
        Rows: "186.079",
    },
    {
        ISOCode: "BA",
        Country: "Bosnia and Herzegovina",
        Rows: "184.373",
    },
    {
        ISOCode: "IL",
        Country: "Israel",
        Rows: "182.338",
    },
    {
        ISOCode: "TW",
        Country: "Taiwan",
        Rows: "170.003",
    },
    {
        ISOCode: "SI",
        Country: "Slovenia",
        Rows: "167.862",
    },
    {
        ISOCode: "KZ",
        Country: "Kazakhstan",
        Rows: "161.454",
    },
    {
        ISOCode: "PE",
        Country: "Peru",
        Rows: "159.906",
    },
    {
        ISOCode: "AZ",
        Country: "Azerbaijan",
        Rows: "158.648",
    },
    {
        ISOCode: "AE",
        Country: "United Arab Emirates",
        Rows: "145.847",
    },
    {
        ISOCode: "CY",
        Country: "Cyprus",
        Rows: "135.957",
    },
    {
        ISOCode: "LT",
        Country: "Lithuania",
        Rows: "133.387",
    },
    {
        ISOCode: "DO",
        Country: "Dominican Republic",
        Rows: "126.825",
    },
    {
        ISOCode: "JO",
        Country: "Jordan",
        Rows: "125.155",
    },
    {
        ISOCode: "MD",
        Country: "Moldova",
        Rows: "119.189",
    },
    {
        ISOCode: "BJ",
        Country: "Benin",
        Rows: "113.602",
    },
    {
        ISOCode: "BG",
        Country: "Bulgaria",
        Rows: "113.541",
    },
    {
        ISOCode: "CD",
        Country: "Democratic Republic of the Congo",
        Rows: "110.018",
    },
    {
        ISOCode: "HR",
        Country: "Croatia",
        Rows: "107.145",
    },
    {
        ISOCode: "LV",
        Country: "Latvia",
        Rows: "105.962",
    },
    {
        ISOCode: "HK",
        Country: "Hong Kong",
        Rows: "104.450",
    },
    {
        ISOCode: "MZ",
        Country: "Mozambique",
        Rows: "102.494",
    },
    {
        ISOCode: "AU",
        Country: "Australia",
        Rows: "100.155",
    },
    {
        ISOCode: "LU",
        Country: "Luxembourg",
        Rows: "99.606",
    },
    {
        ISOCode: "UG",
        Country: "Uganda",
        Rows: "99.398",
    },
    {
        ISOCode: "ML",
        Country: "Mali",
        Rows: "97.511",
    },
    {
        ISOCode: "BF",
        Country: "Burkina Faso",
        Rows: "94.841",
    },
    {
        ISOCode: "MU",
        Country: "Mauritius",
        Rows: "90.171",
    },
    {
        ISOCode: "OM",
        Country: "Oman",
        Rows: "85.537",
    },
    {
        ISOCode: "TG",
        Country: "Togo",
        Rows: "84.575",
    },
    {
        ISOCode: "QA",
        Country: "Qatar",
        Rows: "81.133",
    },
    {
        ISOCode: "MK",
        Country: "Macedonia",
        Rows: "79.629",
    },
    {
        ISOCode: "MG",
        Country: "Madagascar",
        Rows: "77.965",
    },
    {
        ISOCode: "VN",
        Country: "Vietnam",
        Rows: "75.247",
    },
    {
        ISOCode: "GA",
        Country: "Gabon",
        Rows: "70.283",
    },
    {
        ISOCode: "EE",
        Country: "Estonia",
        Rows: "66.756",
    },
    {
        ISOCode: "IQ",
        Country: "Iraq",
        Rows: "62.781",
    },
    {
        ISOCode: "MT",
        Country: "Malta",
        Rows: "60.797",
    },
    {
        ISOCode: "BH",
        Country: "Bahrain",
        Rows: "59.786",
    },
    {
        ISOCode: "TZ",
        Country: "Tanzania",
        Rows: "59.013",
    },
    {
        ISOCode: "EC",
        Country: "Ecuador",
        Rows: "57.855",
    },
    {
        ISOCode: "GE",
        Country: "Georgia",
        Rows: "57.462",
    },
    {
        ISOCode: "AM",
        Country: "Armenia",
        Rows: "53.429",
    },
    {
        ISOCode: "SD",
        Country: "Sudan",
        Rows: "52.850",
    },
    {
        ISOCode: "ET",
        Country: "Ethiopia",
        Rows: "49.457",
    },
    {
        ISOCode: "MM",
        Country: "Myanmar",
        Rows: "48.792",
    },
    {
        ISOCode: "ME",
        Country: "Montenegro",
        Rows: "42.209",
    },
    {
        ISOCode: "SY",
        Country: "Syria",
        Rows: "41.018",
    },
    {
        ISOCode: "UZ",
        Country: "Uzbekistan",
        Rows: "40.831",
    },
    {
        ISOCode: "ZW",
        Country: "Zimbabwe",
        Rows: "39.710",
    },
    {
        ISOCode: "DJ",
        Country: "Djibouti",
        Rows: "39.446",
    },
    {
        ISOCode: "LK",
        Country: "Sri Lanka",
        Rows: "37.965",
    },
    {
        ISOCode: "BD",
        Country: "Bangladesh",
        Rows: "37.806",
    },
    {
        ISOCode: "SH",
        Country: "Saint Helena",
        Rows: "35.153",
    },
    {
        ISOCode: "BW",
        Country: "Botswana",
        Rows: "35.023",
    },
    {
        ISOCode: "CV",
        Country: "Cape Verde",
        Rows: "34.570",
    },
    {
        ISOCode: "BO",
        Country: "Bolivia",
        Rows: "33.754",
    },
    {
        ISOCode: "YE",
        Country: "Yemen",
        Rows: "33.419",
    },
    {
        ISOCode: "RW",
        Country: "Rwanda",
        Rows: "33.034",
    },
    {
        ISOCode: "IS",
        Country: "Iceland",
        Rows: "32.729",
    },
    {
        ISOCode: "LY",
        Country: "Libya",
        Rows: "31.258",
    },
    {
        ISOCode: "NE",
        Country: "Niger",
        Rows: "29.998",
    },
    {
        ISOCode: "AD",
        Country: "Andorra",
        Rows: "29.783",
    },
    {
        ISOCode: "GM",
        Country: "Gambia",
        Rows: "26.232",
    },
    {
        ISOCode: "CG",
        Country: "Republic of the Congo",
        Rows: "25.928",
    },
    {
        ISOCode: "ZM",
        Country: "Zambia",
        Rows: "24.979",
    },
    {
        ISOCode: "AF",
        Country: "Afghanistan",
        Rows: "23.531",
    },
    {
        ISOCode: "NA",
        Country: "Namibia",
        Rows: "23.262",
    },
    {
        ISOCode: "MR",
        Country: "Mauritania",
        Rows: "23.219",
    },
    {
        ISOCode: "UY",
        Country: "Uruguay",
        Rows: "22.651",
    },
    {
        ISOCode: "CR",
        Country: "Costa Rica",
        Rows: "22.279",
    },
    {
        ISOCode: "KG",
        Country: "Kyrgyzstan",
        Rows: "21.585",
    },
    {
        ISOCode: "PA",
        Country: "Panama",
        Rows: "19.787",
    },
    {
        ISOCode: "NP",
        Country: "Nepal",
        Rows: "19.191",
    },
    {
        ISOCode: "GN",
        Country: "Guinea",
        Rows: "18.781",
    },
    {
        ISOCode: "GP",
        Country: "Guadeloupe",
        Rows: "16.347",
    },
    {
        ISOCode: "GQ",
        Country: "Equatorial Guinea",
        Rows: "16.259",
    },
    {
        ISOCode: "MQ",
        Country: "Martinique",
        Rows: "15.585",
    },
    {
        ISOCode: "SC",
        Country: "Seychelles",
        Rows: "14.685",
    },
    {
        ISOCode: "CU",
        Country: "Cuba",
        Rows: "14.050",
    },
    {
        ISOCode: "NZ",
        Country: "New Zealand",
        Rows: "13.970",
    },
    {
        ISOCode: "GT",
        Country: "Guatemala",
        Rows: "13.374",
    },
    {
        ISOCode: "MC",
        Country: "Monaco",
        Rows: "13.173",
    },
    {
        ISOCode: "MV",
        Country: "Maldives",
        Rows: "12.261",
    },
    {
        ISOCode: "MW",
        Country: "Malawi",
        Rows: "12.231",
    },
    {
        ISOCode: "SV",
        Country: "El Salvador",
        Rows: "12.058",
    },
    {
        ISOCode: "GF",
        Country: "French Guiana",
        Rows: "11.974",
    },
    {
        ISOCode: "SL",
        Country: "Sierra Leone",
        Rows: "11.777",
    },
    {
        ISOCode: "LR",
        Country: "Liberia",
        Rows: "11.518",
    },
    {
        ISOCode: "NI",
        Country: "Nicaragua",
        Rows: "11.327",
    },
    {
        ISOCode: "KH",
        Country: "Cambodia",
        Rows: "10.401",
    },
    {
        ISOCode: "TJ",
        Country: "Tajikistan",
        Rows: "10.312",
    },
    {
        ISOCode: "PR",
        Country: "Puerto Rico",
        Rows: "10.230",
    },
    {
        ISOCode: "BI",
        Country: "Burundi",
        Rows: "10.053",
    },
    {
        ISOCode: "PY",
        Country: "Paraguay",
        Rows: "9.551",
    },
    {
        ISOCode: "KM",
        Country: "Comoros",
        Rows: "9.111",
    },
    {
        ISOCode: "LS",
        Country: "Lesotho",
        Rows: "7.604",
    },
    {
        ISOCode: "SO",
        Country: "Somalia",
        Rows: "7.336",
    },
    {
        ISOCode: "HN",
        Country: "Honduras",
        Rows: "7.033",
    },
    {
        ISOCode: "TD",
        Country: "Chad",
        Rows: "6.504",
    },
    {
        ISOCode: "GI",
        Country: "Gibraltar",
        Rows: "6.463",
    },
    {
        ISOCode: "BN",
        Country: "Brunei",
        Rows: "6.309",
    },
    {
        ISOCode: "SM",
        Country: "San Marino",
        Rows: "6.150",
    },
    {
        ISOCode: "JE",
        Country: "Jersey",
        Rows: "5.678",
    },
    {
        ISOCode: "SZ",
        Country: "Swaziland",
        Rows: "5.601",
    },
    {
        ISOCode: "TM",
        Country: "Turkmenistan",
        Rows: "5.216",
    },
    {
        ISOCode: "NC",
        Country: "New Caledonia",
        Rows: "4.674",
    },
    {
        ISOCode: "MN",
        Country: "Mongolia",
        Rows: "4.462",
    },
    {
        ISOCode: "LI",
        Country: "Liechtenstein",
        Rows: "4.382",
    },
    {
        ISOCode: "GL",
        Country: "Greenland",
        Rows: "4.353",
    },
    {
        ISOCode: "BT",
        Country: "Bhutan",
        Rows: "4.283",
    },
    {
        ISOCode: "PF",
        Country: "French Polynesia",
        Rows: "4.187",
    },
    {
        ISOCode: "ST",
        Country: "Sao Tome and Principe",
        Rows: "3.375",
    },
    {
        ISOCode: "YT",
        Country: "Mayotte",
        Rows: "3.355",
    },
    {
        ISOCode: "FO",
        Country: "Faroe Islands",
        Rows: "2.993",
    },
    {
        ISOCode: "JM",
        Country: "Jamaica",
        Rows: "2.765",
    },
    {
        ISOCode: "HT",
        Country: "Haiti",
        Rows: "2.449",
    },
    {
        ISOCode: "BS",
        Country: "Bahamas",
        Rows: "2.446",
    },
    {
        ISOCode: "GW",
        Country: "Guinea-Bissau",
        Rows: "2.141",
    },
    {
        ISOCode: "FJ",
        Country: "Fiji",
        Rows: "2.086",
    },
    {
        ISOCode: "GG",
        Country: "Guernsey",
        Rows: "2.085",
    },
    {
        ISOCode: "LA",
        Country: "Laos",
        Rows: "1.952",
    },
    {
        ISOCode: "TL",
        Country: "East Timor",
        Rows: "1.934",
    },
    {
        ISOCode: "TT",
        Country: "Trinidad and Tobago",
        Rows: "1.855",
    },
    {
        ISOCode: "AG",
        Country: "Antigua and Barbuda",
        Rows: "1.723",
    },
    {
        ISOCode: "EH",
        Country: "Western Sahara",
        Rows: "1.708",
    },
    {
        ISOCode: "CF",
        Country: "Central African Republic",
        Rows: "1.667",
    },
    {
        ISOCode: "PW",
        Country: "Palau",
        Rows: "1.604",
    },
    {
        ISOCode: "IM",
        Country: "Isle of Man",
        Rows: "1.374",
    },
    {
        ISOCode: "AW",
        Country: "Aruba",
        Rows: "1.348",
    },
    {
        ISOCode: "BZ",
        Country: "Belize",
        Rows: "1.308",
    },
    {
        ISOCode: "AS",
        Country: "American Samoa",
        Rows: "1.262",
    },
    {
        ISOCode: "AI",
        Country: "Anguilla",
        Rows: "1.081",
    },
    {
        ISOCode: "MP",
        Country: "Northern Mariana Islands",
        Rows: "1.071",
    },
    {
        ISOCode: "BM",
        Country: "Bermuda",
        Rows: "953",
    },
    {
        ISOCode: "ER",
        Country: "Eritrea",
        Rows: "836",
    },
    {
        ISOCode: "SR",
        Country: "Suriname",
        Rows: "819",
    },
    {
        ISOCode: "VG",
        Country: "British Virgin Islands",
        Rows: "788",
    },
    {
        ISOCode: "VI",
        Country: "U.S. Virgin Islands",
        Rows: "756",
    },
    {
        ISOCode: "GY",
        Country: "Guyana",
        Rows: "702",
    },
    {
        ISOCode: "BB",
        Country: "Barbados",
        Rows: "687",
    },
    {
        ISOCode: "MH",
        Country: "Marshall Islands",
        Rows: "678",
    },
    {
        ISOCode: "MO",
        Country: "Macao",
        Rows: "611",
    },
    {
        ISOCode: "PG",
        Country: "Papua New Guinea",
        Rows: "600",
    },
    {
        ISOCode: "KY",
        Country: "Cayman Islands",
        Rows: "545",
    },
    {
        ISOCode: "KI",
        Country: "Kiribati",
        Rows: "507",
    },
    {
        ISOCode: "AN",
        Country: "Netherlands Antilles",
        Rows: "484",
    },
    {
        ISOCode: "CK",
        Country: "Cook Islands",
        Rows: "463",
    },
    {
        ISOCode: "GU",
        Country: "Guam",
        Rows: "442",
    },
    {
        ISOCode: "WF",
        Country: "Wallis and Futuna",
        Rows: "429",
    },
    {
        ISOCode: "PS",
        Country: "Palestine",
        Rows: "371",
    },
    {
        ISOCode: "TC",
        Country: "Turks and Caicos Islands",
        Rows: "359",
    },
    {
        ISOCode: "VU",
        Country: "Vanuatu",
        Rows: "357",
    },
    {
        ISOCode: "LC",
        Country: "Saint Lucia",
        Rows: "344",
    },
    {
        ISOCode: "TO",
        Country: "Tonga",
        Rows: "299",
    },
    {
        ISOCode: "CC",
        Country: "Cocos Islands",
        Rows: "285",
    },
    {
        ISOCode: "WS",
        Country: "Samoa",
        Rows: "274",
    },
    {
        ISOCode: "GD",
        Country: "Grenada",
        Rows: "271",
    },
    {
        ISOCode: "VA",
        Country: "Vatican",
        Rows: "268",
    },
    {
        ISOCode: "IO",
        Country: "British Indian Ocean Territory",
        Rows: "254",
    },
    {
        ISOCode: "FM",
        Country: "Micronesia",
        Rows: "231",
    },
    {
        ISOCode: "NU",
        Country: "Niue",
        Rows: "216",
    },
    {
        ISOCode: "BL",
        Country: "Saint Barthelemy",
        Rows: "202",
    },
    {
        ISOCode: "KN",
        Country: "Saint Kitts and Nevis",
        Rows: "198",
    },
    {
        ISOCode: "PM",
        Country: "Saint Pierre and Miquelon",
        Rows: "195",
    },
    {
        ISOCode: "FK",
        Country: "Falkland Islands",
        Rows: "184",
    },
    {
        ISOCode: "AQ",
        Country: "Antarctica",
        Rows: "171",
    },
    {
        ISOCode: "PN",
        Country: "Pitcairn",
        Rows: "160",
    },
    {
        ISOCode: "MF",
        Country: "Saint Martin",
        Rows: "155",
    },
    {
        ISOCode: "TV",
        Country: "Tuvalu",
        Rows: "154",
    },
    {
        ISOCode: "VC",
        Country: "Saint Vincent and the Grenadines",
        Rows: "153",
    },
    {
        ISOCode: "DM",
        Country: "Dominica",
        Rows: "132",
    },
    {
        ISOCode: "SB",
        Country: "Solomon Islands",
        Rows: "118",
    },
    {
        ISOCode: "TK",
        Country: "Tokelau",
        Rows: "103",
    },
    {
        ISOCode: "NF",
        Country: "Norfolk Island",
        Rows: "93",
    },
    {
        ISOCode: "CX",
        Country: "Christmas Island",
        Rows: "84",
    },
    {
        ISOCode: "NR",
        Country: "Nauru",
        Rows: "62",
    },
    {
        ISOCode: "SJ",
        Country: "Svalbard and Jan Mayen",
        Rows: "40",
    },
    {
        ISOCode: "MS",
        Country: "Montserrat",
        Rows: "25",
    },
    {
        ISOCode: "KP",
        Country: "North Korea",
        Rows: "9",
    },
    {
        ISOCode: "GS",
        Country: "South Georgia And Sandwich Isl.",
        Rows: "5",
    },
    {
        ISOCode: "BV",
        Country: "Bouvet Island",
        Rows: "1",
    },
];

export default countries;
