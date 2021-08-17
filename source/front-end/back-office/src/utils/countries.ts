const countries = [
  {
    portalCode: '+93',
    countryName: 'Afghanistan',
    countryCode: 'AF',
  },
  {
    portalCode: '+355',
    countryName: 'Albania',
    countryCode: 'AL',
  },
  {
    portalCode: '+213',
    countryName: 'Algeria',
    countryCode: 'DZ',
  },
  {
    portalCode: '+1 684',
    countryName: 'American Samoa',
    countryCode: 'AS',
  },
  {
    portalCode: '+376',
    countryName: 'Andorra',
    countryCode: 'AD',
  },
  {
    portalCode: '+244',
    countryName: 'Angola',
    countryCode: 'AO',
  },
  {
    portalCode: '+1 264',
    countryName: 'Anguilla',
    countryCode: 'AI',
  },
  {
    portalCode: '+1 268',
    countryName: 'Antigua and Barbuda',
    countryCode: 'AG',
  },
  {
    portalCode: '+54',
    countryName: 'Argentina',
    countryCode: 'AR',
  },
  {
    portalCode: '+374',
    countryName: 'Armenia',
    countryCode: 'AM',
  },
  {
    portalCode: '+297',
    countryName: 'Aruba',
    countryCode: 'AW',
  },
  {
    portalCode: '+61',
    countryName: 'Australia',
    countryCode: 'AU',
  },
  {
    portalCode: '+43',
    countryName: 'Austria',
    countryCode: 'AT',
  },
  {
    portalCode: '+994',
    countryName: 'Azerbaijan',
    countryCode: 'AZ',
  },
  {
    portalCode: '+1 242',
    countryName: 'Bahamas',
    countryCode: 'BS',
  },
  {
    portalCode: '+973',
    countryName: 'Bahrain',
    countryCode: 'BH',
  },
  {
    portalCode: '+880',
    countryName: 'Bangladesh',
    countryCode: 'BD',
  },
  {
    portalCode: '+1 246',
    countryName: 'Barbados',
    countryCode: 'BB',
  },
  {
    portalCode: '+375',
    countryName: 'Belarus',
    countryCode: 'BY',
  },
  {
    portalCode: '+32',
    countryName: 'Belgium',
    countryCode: 'BE',
  },
  {
    portalCode: '+501',
    countryName: 'Belize',
    countryCode: 'BZ',
  },
  {
    portalCode: '+229',
    countryName: 'Benin',
    countryCode: 'BJ',
  },
  {
    portalCode: '+1 441',
    countryName: 'Bermuda',
    countryCode: 'BM',
  },
  {
    portalCode: '+975',
    countryName: 'Bhutan',
    countryCode: 'BT',
  },
  {
    portalCode: '+591',
    countryName: 'Bolivia',
    countryCode: 'BO',
  },
  {
    portalCode: '+387',
    countryName: 'Bosnia and Herzegovina',
    countryCode: 'BA',
  },
  {
    portalCode: '+267',
    countryName: 'Botswana',
    countryCode: 'BW',
  },
  {
    portalCode: '+55',
    countryName: 'Brazil',
    countryCode: 'BR',
  },
  {
    portalCode: '+246',
    countryName: 'British Indian Ocean Territory',
    countryCode: 'IO',
  },
  {
    portalCode: '+1 284',
    countryName: 'British Virgin Islands',
    countryCode: 'VG',
  },
  {
    portalCode: '+673',
    countryName: 'Brunei',
    countryCode: 'BN',
  },
  {
    portalCode: '+359',
    countryName: 'Bulgaria',
    countryCode: 'BG',
  },
  {
    portalCode: '+226',
    countryName: 'Burkina Faso',
    countryCode: 'BF',
  },
  {
    portalCode: '+257',
    countryName: 'Burundi',
    countryCode: 'BI',
  },
  {
    portalCode: '+855',
    countryName: 'Cambodia',
    countryCode: 'KH',
  },
  {
    portalCode: '+237',
    countryName: 'Cameroon',
    countryCode: 'CM',
  },
  {
    portalCode: '+1',
    countryName: 'Canada',
    countryCode: 'CA',
  },
  {
    portalCode: '+238',
    countryName: 'Cape Verde',
    countryCode: 'CV',
  },
  {
    portalCode: '+ 345',
    countryName: 'Cayman Islands',
    countryCode: 'KY',
  },
  {
    portalCode: '+236',
    countryName: 'Central African Republic',
    countryCode: 'CF',
  },
  {
    portalCode: '+235',
    countryName: 'Chad',
    countryCode: 'TD',
  },
  {
    portalCode: '+56',
    countryName: 'Chile',
    countryCode: 'CL',
  },
  {
    portalCode: '+86',
    countryName: 'China',
    countryCode: 'CN',
  },
  {
    portalCode: '+61',
    countryName: 'Christmas Island',
    countryCode: 'CX',
  },
  {
    portalCode: '+57',
    countryName: 'Colombia',
    countryCode: 'CO',
  },
  {
    portalCode: '+269',
    countryName: 'Comoros',
    countryCode: 'KM',
  },
  {
    portalCode: '+682',
    countryName: 'Cook Islands',
    countryCode: 'CK',
  },
  {
    portalCode: '+506',
    countryName: 'Costa Rica',
    countryCode: 'CR',
  },
  {
    portalCode: '+385',
    countryName: 'Croatia',
    countryCode: 'HR',
  },
  {
    portalCode: '+53',
    countryName: 'Cuba',
    countryCode: 'CU',
  },
  {
    portalCode: '+599',
    countryName: 'Curacao',
    countryCode: 'CW',
  },
  {
    portalCode: '+537',
    countryName: 'Cyprus',
    countryCode: 'CY',
  },
  {
    portalCode: '+420',
    countryName: 'Czech Republic',
    countryCode: 'CZ',
  },
  {
    portalCode: '+45',
    countryName: 'Denmark',
    countryCode: 'DK',
  },
  {
    portalCode: '+253',
    countryName: 'Djibouti',
    countryCode: 'DJ',
  },
  {
    portalCode: '+1 767',
    countryName: 'Dominica',
    countryCode: 'DM',
  },
  {
    portalCode: '+1 809',
    countryName: 'Dominican Republic',
    countryCode: 'DO',
  },
  {
    portalCode: '+670',
    countryName: 'East Timor',
    countryCode: 'TL',
  },
  {
    portalCode: '+593',
    countryName: 'Ecuador',
    countryCode: 'EC',
  },
  {
    portalCode: '+20',
    countryName: 'Egypt',
    countryCode: 'EG',
  },
  {
    portalCode: '+503',
    countryName: 'El Salvador',
    countryCode: 'SV',
  },
  {
    portalCode: '+240',
    countryName: 'Equatorial Guinea',
    countryCode: 'GQ',
  },
  {
    portalCode: '+291',
    countryName: 'Eritrea',
    countryCode: 'ER',
  },
  {
    portalCode: '+372',
    countryName: 'Estonia',
    countryCode: 'EE',
  },
  {
    portalCode: '+251',
    countryName: 'Ethiopia',
    countryCode: 'ET',
  },
  {
    portalCode: '+500',
    countryName: 'Falkland Islands',
    countryCode: 'FK',
  },
  {
    portalCode: '+298',
    countryName: 'Faroe Islands',
    countryCode: 'FO',
  },
  {
    portalCode: '+679',
    countryName: 'Fiji',
    countryCode: 'FJ',
  },
  {
    portalCode: '+358',
    countryName: 'Finland',
    countryCode: 'FI',
  },
  {
    portalCode: '+33',
    countryName: 'France',
    countryCode: 'FR',
  },
  {
    portalCode: '+689',
    countryName: 'French Polynesia',
    countryCode: 'PF',
  },
  {
    portalCode: '+241',
    countryName: 'Gabon',
    countryCode: 'GA',
  },
  {
    portalCode: '+220',
    countryName: 'Gambia',
    countryCode: 'GM',
  },
  {
    portalCode: '+995',
    countryName: 'Georgia',
    countryCode: 'GE',
  },
  {
    portalCode: '+49',
    countryName: 'Germany',
    countryCode: 'DE',
  },
  {
    portalCode: '+233',
    countryName: 'Ghana',
    countryCode: 'GH',
  },
  {
    portalCode: '+350',
    countryName: 'Gibraltar',
    countryCode: 'GI',
  },
  {
    portalCode: '+30',
    countryName: 'Greece',
    countryCode: 'GR',
  },
  {
    portalCode: '+299',
    countryName: 'Greenland',
    countryCode: 'GL',
  },
  {
    portalCode: '+1 473',
    countryName: 'Grenada',
    countryCode: 'GD',
  },
  {
    portalCode: '+1 671',
    countryName: 'Guam',
    countryCode: 'GU',
  },
  {
    portalCode: '+502',
    countryName: 'Guatemala',
    countryCode: 'GT',
  },
  {
    portalCode: '+224',
    countryName: 'Guinea',
    countryCode: 'GN',
  },
  {
    portalCode: '+245',
    countryName: 'Guinea-Bissau',
    countryCode: 'GW',
  },
  {
    portalCode: '+595',
    countryName: 'Guyana',
    countryCode: 'GY',
  },
  {
    portalCode: '+509',
    countryName: 'Haiti',
    countryCode: 'HT',
  },
  {
    portalCode: '+504',
    countryName: 'Honduras',
    countryCode: 'HN',
  },
  {
    portalCode: '+36',
    countryName: 'Hungary',
    countryCode: 'HU',
  },
  {
    portalCode: '+354',
    countryName: 'Iceland',
    countryCode: 'IS',
  },
  {
    portalCode: '+91',
    countryName: 'India',
    countryCode: 'IN',
  },
  {
    portalCode: '+62',
    countryName: 'Indonesia',
    countryCode: 'ID',
  },
  {
    portalCode: '+98',
    countryName: 'Iran',
    countryCode: 'IR',
  },
  {
    portalCode: '+964',
    countryName: 'Iraq',
    countryCode: 'IQ',
  },
  {
    portalCode: '+353',
    countryName: 'Ireland',
    countryCode: 'IE',
  },
  {
    portalCode: '+972',
    countryName: 'Israel',
    countryCode: 'IL',
  },
  {
    portalCode: '+39',
    countryName: 'Italy',
    countryCode: 'IT',
  },
  {
    portalCode: '+225',
    countryName: 'Ivory Coast',
    countryCode: 'CI',
  },
  {
    portalCode: '+1 876',
    countryName: 'Jamaica',
    countryCode: 'JM',
  },
  {
    portalCode: '+81',
    countryName: 'Japan',
    countryCode: 'JP',
  },
  {
    portalCode: '+962',
    countryName: 'Jordan',
    countryCode: 'JO',
  },
  {
    portalCode: '+7 7',
    countryName: 'Kazakhstan',
    countryCode: 'KZ',
  },
  {
    portalCode: '+254',
    countryName: 'Kenya',
    countryCode: 'KE',
  },
  {
    portalCode: '+686',
    countryName: 'Kiribati',
    countryCode: 'KI',
  },
  {
    portalCode: '+965',
    countryName: 'Kuwait',
    countryCode: 'KW',
  },
  {
    portalCode: '+996',
    countryName: 'Kyrgyzstan',
    countryCode: 'KG',
  },
  {
    portalCode: '+856',
    countryName: 'Laos',
    countryCode: 'LA',
  },
  {
    portalCode: '+371',
    countryName: 'Latvia',
    countryCode: 'LV',
  },
  {
    portalCode: '+961',
    countryName: 'Lebanon',
    countryCode: 'LB',
  },
  {
    portalCode: '+266',
    countryName: 'Lesotho',
    countryCode: 'LS',
  },
  {
    portalCode: '+231',
    countryName: 'Liberia',
    countryCode: 'LR',
  },
  {
    portalCode: '+218',
    countryName: 'Libya',
    countryCode: 'LY',
  },
  {
    portalCode: '+423',
    countryName: 'Liechtenstein',
    countryCode: 'LI',
  },
  {
    portalCode: '+370',
    countryName: 'Lithuania',
    countryCode: 'LT',
  },
  {
    portalCode: '+352',
    countryName: 'Luxembourg',
    countryCode: 'LU',
  },
  {
    portalCode: '+389',
    countryName: 'Macedonia',
    countryCode: 'MK',
  },
  {
    portalCode: '+261',
    countryName: 'Madagascar',
    countryCode: 'MG',
  },
  {
    portalCode: '+265',
    countryName: 'Malawi',
    countryCode: 'MW',
  },
  {
    portalCode: '+60',
    countryName: 'Malaysia',
    countryCode: 'MY',
  },
  {
    portalCode: '+960',
    countryName: 'Maldives',
    countryCode: 'MV',
  },
  {
    portalCode: '+223',
    countryName: 'Mali',
    countryCode: 'ML',
  },
  {
    portalCode: '+356',
    countryName: 'Malta',
    countryCode: 'MT',
  },
  {
    portalCode: '+692',
    countryName: 'Marshall Islands',
    countryCode: 'MH',
  },
  {
    portalCode: '+222',
    countryName: 'Mauritania',
    countryCode: 'MR',
  },
  {
    portalCode: '+230',
    countryName: 'Mauritius',
    countryCode: 'MU',
  },
  {
    portalCode: '+262',
    countryName: 'Mayotte',
    countryCode: 'YT',
  },
  {
    portalCode: '+52',
    countryName: 'Mexico',
    countryCode: 'MX',
  },
  {
    portalCode: '+691',
    countryName: 'Micronesia',
    countryCode: 'FM',
  },
  {
    portalCode: '+373',
    countryName: 'Moldova',
    countryCode: 'MD',
  },
  {
    portalCode: '+377',
    countryName: 'Monaco',
    countryCode: 'MC',
  },
  {
    portalCode: '+976',
    countryName: 'Mongolia',
    countryCode: 'MN',
  },
  {
    portalCode: '+382',
    countryName: 'Montenegro',
    countryCode: 'ME',
  },
  {
    portalCode: '+1664',
    countryName: 'Montserrat',
    countryCode: 'MS',
  },
  {
    portalCode: '+212',
    countryName: 'Morocco',
    countryCode: 'MA',
  },
  {
    portalCode: '+95',
    countryName: 'Myanmar',
    countryCode: 'MM',
  },
  {
    portalCode: '+264',
    countryName: 'Namibia',
    countryCode: 'NA',
  },
  {
    portalCode: '+674',
    countryName: 'Nauru',
    countryCode: 'NR',
  },
  {
    portalCode: '+977',
    countryName: 'Nepal',
    countryCode: 'NP',
  },
  {
    portalCode: '+31',
    countryName: 'Netherlands',
    countryCode: 'NL',
  },
  {
    portalCode: '+599',
    countryName: 'Netherlands Antilles',
    countryCode: 'AN',
  },
  {
    portalCode: '+687',
    countryName: 'New Caledonia',
    countryCode: 'NC',
  },
  {
    portalCode: '+64',
    countryName: 'New Zealand',
    countryCode: 'NZ',
  },
  {
    portalCode: '+505',
    countryName: 'Nicaragua',
    countryCode: 'NI',
  },
  {
    portalCode: '+227',
    countryName: 'Niger',
    countryCode: 'NE',
  },
  {
    portalCode: '+234',
    countryName: 'Nigeria',
    countryCode: 'NG',
  },
  {
    portalCode: '+683',
    countryName: 'Niue',
    countryCode: 'NU',
  },
  {
    portalCode: '+850',
    countryName: 'North Korea',
    countryCode: 'KP',
  },
  {
    portalCode: '+1 670',
    countryName: 'Northern Mariana Islands',
    countryCode: 'MP',
  },
  {
    portalCode: '+47',
    countryName: 'Norway',
    countryCode: 'NO',
  },
  {
    portalCode: '+968',
    countryName: 'Oman',
    countryCode: 'OM',
  },
  {
    portalCode: '+92',
    countryName: 'Pakistan',
    countryCode: 'PK',
  },
  {
    portalCode: '+680',
    countryName: 'Palau',
    countryCode: 'PW',
  },
  {
    portalCode: '+507',
    countryName: 'Panama',
    countryCode: 'PA',
  },
  {
    portalCode: '+675',
    countryName: 'Papua New Guinea',
    countryCode: 'PG',
  },
  {
    portalCode: '+595',
    countryName: 'Paraguay',
    countryCode: 'PY',
  },
  {
    portalCode: '+51',
    countryName: 'Peru',
    countryCode: 'PE',
  },
  {
    portalCode: '+63',
    countryName: 'Philippines',
    countryCode: 'PH',
  },
  {
    portalCode: '+48',
    countryName: 'Poland',
    countryCode: 'PL',
  },
  {
    portalCode: '+351',
    countryName: 'Portugal',
    countryCode: 'PT',
  },
  {
    portalCode: '+1 787',
    countryName: 'Puerto Rico',
    countryCode: 'PR',
  },
  {
    portalCode: '+974',
    countryName: 'Qatar',
    countryCode: 'QA',
  },
  {
    portalCode: '+262',
    countryName: 'Reunion',
    countryCode: 'RE',
  },
  {
    portalCode: '+40',
    countryName: 'Romania',
    countryCode: 'RO',
  },
  {
    portalCode: '+7',
    countryName: 'Russia',
    countryCode: 'RU',
  },
  {
    portalCode: '+250',
    countryName: 'Rwanda',
    countryCode: 'RW',
  },
  {
    portalCode: '+685',
    countryName: 'Samoa',
    countryCode: 'WS',
  },
  {
    portalCode: '+378',
    countryName: 'San Marino',
    countryCode: 'SM',
  },
  {
    portalCode: '+966',
    countryName: 'Saudi Arabia',
    countryCode: 'SA',
  },
  {
    portalCode: '+221',
    countryName: 'Senegal',
    countryCode: 'SN',
  },
  {
    portalCode: '+381',
    countryName: 'Serbia',
    countryCode: 'RS',
  },
  {
    portalCode: '+248',
    countryName: 'Seychelles',
    countryCode: 'SC',
  },
  {
    portalCode: '+232',
    countryName: 'Sierra Leone',
    countryCode: 'SL',
  },
  {
    portalCode: '+65',
    countryName: 'Singapore',
    countryCode: 'SG',
  },
  {
    portalCode: '+421',
    countryName: 'Slovakia',
    countryCode: 'SK',
  },
  {
    portalCode: '+386',
    countryName: 'Slovenia',
    countryCode: 'SI',
  },
  {
    portalCode: '+677',
    countryName: 'Solomon Islands',
    countryCode: 'SB',
  },
  {
    portalCode: '+27',
    countryName: 'South Africa',
    countryCode: 'ZA',
  },
  {
    portalCode: '+82',
    countryName: 'South Korea',
    countryCode: 'KR',
  },
  {
    portalCode: '+34',
    countryName: 'Spain',
    countryCode: 'ES',
  },
  {
    portalCode: '+94',
    countryName: 'Sri Lanka',
    countryCode: 'LK',
  },
  {
    portalCode: '+249',
    countryName: 'Sudan',
    countryCode: 'SD',
  },
  {
    portalCode: '+597',
    countryName: 'Suriname',
    countryCode: 'SR',
  },
  {
    portalCode: '+268',
    countryName: 'Swaziland',
    countryCode: 'SZ',
  },
  {
    portalCode: '+46',
    countryName: 'Sweden',
    countryCode: 'SE',
  },
  {
    portalCode: '+41',
    countryName: 'Switzerland',
    countryCode: 'CH',
  },
  {
    portalCode: '+963',
    countryName: 'Syria',
    countryCode: 'SY',
  },
  {
    portalCode: '+886',
    countryName: 'Taiwan',
    countryCode: 'TW',
  },
  {
    portalCode: '+992',
    countryName: 'Tajikistan',
    countryCode: 'TJ',
  },
  {
    portalCode: '+255',
    countryName: 'Tanzania',
    countryCode: 'TZ',
  },
  {
    portalCode: '+66',
    countryName: 'Thailand',
    countryCode: 'TH',
  },
  {
    portalCode: '+228',
    countryName: 'Togo',
    countryCode: 'TG',
  },
  {
    portalCode: '+690',
    countryName: 'Tokelau',
    countryCode: 'TK',
  },
  {
    portalCode: '+676',
    countryName: 'Tonga',
    countryCode: 'TO',
  },
  {
    portalCode: '+1 868',
    countryName: 'Trinidad and Tobago',
    countryCode: 'TT',
  },
  {
    portalCode: '+216',
    countryName: 'Tunisia',
    countryCode: 'TN',
  },
  {
    portalCode: '+90',
    countryName: 'Turkey',
    countryCode: 'TR',
  },
  {
    portalCode: '+993',
    countryName: 'Turkmenistan',
    countryCode: 'TM',
  },
  {
    portalCode: '+1 649',
    countryName: 'Turks and Caicos Islands',
    countryCode: 'TC',
  },
  {
    portalCode: '+688',
    countryName: 'Tuvalu',
    countryCode: 'TV',
  },
  {
    portalCode: '+1 340',
    countryName: 'U.S. Virgin Islands',
    countryCode: 'VI',
  },
  {
    portalCode: '+256',
    countryName: 'Uganda',
    countryCode: 'UG',
  },
  {
    portalCode: '+380',
    countryName: 'Ukraine',
    countryCode: 'UA',
  },
  {
    portalCode: '+971',
    countryName: 'United Arab Emirates',
    countryCode: 'AE',
  },
  {
    portalCode: '+44',
    countryName: 'United Kingdom',
    countryCode: 'GB',
  },
  {
    portalCode: '+1',
    countryName: 'United States',
    countryCode: 'US',
  },
  {
    portalCode: '+598',
    countryName: 'Uruguay',
    countryCode: 'UY',
  },
  {
    portalCode: '+998',
    countryName: 'Uzbekistan',
    countryCode: 'UZ',
  },
  {
    portalCode: '+678',
    countryName: 'Vanuatu',
    countryCode: 'VU',
  },
  {
    portalCode: '+58',
    countryName: 'Venezuela',
    countryCode: 'VE',
  },
  {
    portalCode: '+84',
    countryName: 'Vietnam',
    countryCode: 'VN',
  },
  {
    portalCode: '+681',
    countryName: 'Wallis and Futuna',
    countryCode: 'WF',
  },
  {
    portalCode: '+967',
    countryName: 'Yemen',
    countryCode: 'YE',
  },
  {
    portalCode: '+260',
    countryName: 'Zambia',
    countryCode: 'ZM',
  },
  {
    portalCode: '+263',
    countryName: 'Zimbabwe',
    countryCode: 'ZW',
  },
];

const getCountries = (): SelectionProps<string>[] =>
  countries.map((item) => ({
    key: item.portalCode,
    value: `${item.portalCode} (${item.countryName}) ${item.countryCode}`,
  }));

export default getCountries();
