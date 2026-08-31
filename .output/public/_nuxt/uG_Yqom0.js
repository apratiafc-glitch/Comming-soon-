import{o as C,c as M,a as v}from"./BnmHKkjp.js";function ce(a,t){return C(),M("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[v("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m4.5 12.75 6 6 9-13.5"})])}function fe(a,t){return C(),M("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[v("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"})])}function le(a,t){return C(),M("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[v("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"})])}function xe(a,t){return C(),M("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[v("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}),v("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"})])}function ue(a,t){return C(),M("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[v("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18 18 6M6 6l12 12"})])}const $={};var I=null;function J(a){try{return crypto.getRandomValues(new Uint8Array(a))}catch{}try{return $.randomBytes(a)}catch{}if(!I)throw Error("Neither WebCryptoAPI nor a crypto module is available. Use bcrypt.setRandomFallback to set an alternative");return I(a)}function W(a){I=a}function _(a,t){if(a=a||D,typeof a!="number")throw Error("Illegal arguments: "+typeof a+", "+typeof t);a<4?a=4:a>31&&(a=31);var n=[];return n.push("$2b$"),a<10&&n.push("0"),n.push(a.toString()),n.push("$"),n.push(A(J(k),k)),n.join("")}function G(a,t,n){if(typeof t=="function"&&(n=t,t=void 0),typeof a=="function"&&(n=a,a=void 0),typeof a>"u")a=D;else if(typeof a!="number")throw Error("illegal arguments: "+typeof a);function i(e){p(function(){try{e(null,_(a))}catch(r){e(r)}})}if(n){if(typeof n!="function")throw Error("Illegal callback: "+typeof n);i(n)}else return new Promise(function(e,r){i(function(o,d){if(o){r(o);return}e(d)})})}function L(a,t){if(typeof t>"u"&&(t=D),typeof t=="number"&&(t=_(t)),typeof a!="string"||typeof t!="string")throw Error("Illegal arguments: "+typeof a+", "+typeof t);return E(a,t)}function z(a,t,n,i){function e(r){typeof a=="string"&&typeof t=="number"?G(t,function(o,d){E(a,d,r,i)}):typeof a=="string"&&typeof t=="string"?E(a,t,r,i):p(r.bind(this,Error("Illegal arguments: "+typeof a+", "+typeof t)))}if(n){if(typeof n!="function")throw Error("Illegal callback: "+typeof n);e(n)}else return new Promise(function(r,o){e(function(d,s){if(d){o(d);return}r(s)})})}function N(a,t){for(var n=a.length^t.length,i=0;i<a.length;++i)n|=a.charCodeAt(i)^t.charCodeAt(i);return n===0}function Y(a,t){if(typeof a!="string"||typeof t!="string")throw Error("Illegal arguments: "+typeof a+", "+typeof t);return t.length!==60?!1:N(L(a,t.substring(0,t.length-31)),t)}function X(a,t,n,i){function e(r){if(typeof a!="string"||typeof t!="string"){p(r.bind(this,Error("Illegal arguments: "+typeof a+", "+typeof t)));return}if(t.length!==60){p(r.bind(this,null,!1));return}z(a,t.substring(0,29),function(o,d){o?r(o):r(null,N(d,t))},i)}if(n){if(typeof n!="function")throw Error("Illegal callback: "+typeof n);e(n)}else return new Promise(function(r,o){e(function(d,s){if(d){o(d);return}r(s)})})}function Z(a){if(typeof a!="string")throw Error("Illegal arguments: "+typeof a);return parseInt(a.split("$")[2],10)}function V(a){if(typeof a!="string")throw Error("Illegal arguments: "+typeof a);if(a.length!==60)throw Error("Illegal hash length: "+a.length+" != 60");return a.substring(0,29)}function Q(a){if(typeof a!="string")throw Error("Illegal arguments: "+typeof a);return H(a)>72}var p=typeof setImmediate=="function"?setImmediate:typeof scheduler=="object"&&typeof scheduler.postTask=="function"?scheduler.postTask.bind(scheduler):setTimeout;function H(a){for(var t=0,n=0,i=0;i<a.length;++i)n=a.charCodeAt(i),n<128?t+=1:n<2048?t+=2:(n&64512)===55296&&(a.charCodeAt(i+1)&64512)===56320?(++i,t+=4):t+=3;return t}function ee(a){for(var t=0,n,i,e=new Array(H(a)),r=0,o=a.length;r<o;++r)n=a.charCodeAt(r),n<128?e[t++]=n:n<2048?(e[t++]=n>>6|192,e[t++]=n&63|128):(n&64512)===55296&&((i=a.charCodeAt(r+1))&64512)===56320?(n=65536+((n&1023)<<10)+(i&1023),++r,e[t++]=n>>18|240,e[t++]=n>>12&63|128,e[t++]=n>>6&63|128,e[t++]=n&63|128):(e[t++]=n>>12|224,e[t++]=n>>6&63|128,e[t++]=n&63|128);return e}var g="./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),m=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,54,55,56,57,58,59,60,61,62,63,-1,-1,-1,-1,-1,-1,-1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,-1,-1,-1,-1,-1,-1,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,-1,-1,-1,-1,-1];function A(a,t){var n=0,i=[],e,r;if(t<=0||t>a.length)throw Error("Illegal len: "+t);for(;n<t;){if(e=a[n++]&255,i.push(g[e>>2&63]),e=(e&3)<<4,n>=t){i.push(g[e&63]);break}if(r=a[n++]&255,e|=r>>4&15,i.push(g[e&63]),e=(r&15)<<2,n>=t){i.push(g[e&63]);break}r=a[n++]&255,e|=r>>6&3,i.push(g[e&63]),i.push(g[r&63])}return i.join("")}function U(a,t){var n=0,i=a.length,e=0,r=[],o,d,s,c,f,l;if(t<=0)throw Error("Illegal len: "+t);for(;n<i-1&&e<t&&(l=a.charCodeAt(n++),o=l<m.length?m[l]:-1,l=a.charCodeAt(n++),d=l<m.length?m[l]:-1,!(o==-1||d==-1||(f=o<<2>>>0,f|=(d&48)>>4,r.push(String.fromCharCode(f)),++e>=t||n>=i)||(l=a.charCodeAt(n++),s=l<m.length?m[l]:-1,s==-1)||(f=(d&15)<<4>>>0,f|=(s&60)>>2,r.push(String.fromCharCode(f)),++e>=t||n>=i)));)l=a.charCodeAt(n++),c=l<m.length?m[l]:-1,f=(s&3)<<6>>>0,f|=c,r.push(String.fromCharCode(f)),++e;var u=[];for(n=0;n<e;n++)u.push(r[n].charCodeAt(0));return u}var k=16,D=10,ne=16,ae=100,q=[608135816,2242054355,320440878,57701188,2752067618,698298832,137296536,3964562569,1160258022,953160567,3193202383,887688300,3232508343,3380367581,1065670069,3041331479,2450970073,2306472731],R=[3509652390,2564797868,805139163,3491422135,3101798381,1780907670,3128725573,4046225305,614570311,3012652279,134345442,2240740374,1667834072,1901547113,2757295779,4103290238,227898511,1921955416,1904987480,2182433518,2069144605,3260701109,2620446009,720527379,3318853667,677414384,3393288472,3101374703,2390351024,1614419982,1822297739,2954791486,3608508353,3174124327,2024746970,1432378464,3864339955,2857741204,1464375394,1676153920,1439316330,715854006,3033291828,289532110,2706671279,2087905683,3018724369,1668267050,732546397,1947742710,3462151702,2609353502,2950085171,1814351708,2050118529,680887927,999245976,1800124847,3300911131,1713906067,1641548236,4213287313,1216130144,1575780402,4018429277,3917837745,3693486850,3949271944,596196993,3549867205,258830323,2213823033,772490370,2760122372,1774776394,2652871518,566650946,4142492826,1728879713,2882767088,1783734482,3629395816,2517608232,2874225571,1861159788,326777828,3124490320,2130389656,2716951837,967770486,1724537150,2185432712,2364442137,1164943284,2105845187,998989502,3765401048,2244026483,1075463327,1455516326,1322494562,910128902,469688178,1117454909,936433444,3490320968,3675253459,1240580251,122909385,2157517691,634681816,4142456567,3825094682,3061402683,2540495037,79693498,3249098678,1084186820,1583128258,426386531,1761308591,1047286709,322548459,995290223,1845252383,2603652396,3431023940,2942221577,3202600964,3727903485,1712269319,422464435,3234572375,1170764815,3523960633,3117677531,1434042557,442511882,3600875718,1076654713,1738483198,4213154764,2393238008,3677496056,1014306527,4251020053,793779912,2902807211,842905082,4246964064,1395751752,1040244610,2656851899,3396308128,445077038,3742853595,3577915638,679411651,2892444358,2354009459,1767581616,3150600392,3791627101,3102740896,284835224,4246832056,1258075500,768725851,2589189241,3069724005,3532540348,1274779536,3789419226,2764799539,1660621633,3471099624,4011903706,913787905,3497959166,737222580,2514213453,2928710040,3937242737,1804850592,3499020752,2949064160,2386320175,2390070455,2415321851,4061277028,2290661394,2416832540,1336762016,1754252060,3520065937,3014181293,791618072,3188594551,3933548030,2332172193,3852520463,3043980520,413987798,3465142937,3030929376,4245938359,2093235073,3534596313,375366246,2157278981,2479649556,555357303,3870105701,2008414854,3344188149,4221384143,3956125452,2067696032,3594591187,2921233993,2428461,544322398,577241275,1471733935,610547355,4027169054,1432588573,1507829418,2025931657,3646575487,545086370,48609733,2200306550,1653985193,298326376,1316178497,3007786442,2064951626,458293330,2589141269,3591329599,3164325604,727753846,2179363840,146436021,1461446943,4069977195,705550613,3059967265,3887724982,4281599278,3313849956,1404054877,2845806497,146425753,1854211946,1266315497,3048417604,3681880366,3289982499,290971e4,1235738493,2632868024,2414719590,3970600049,1771706367,1449415276,3266420449,422970021,1963543593,2690192192,3826793022,1062508698,1531092325,1804592342,2583117782,2714934279,4024971509,1294809318,4028980673,1289560198,2221992742,1669523910,35572830,157838143,1052438473,1016535060,1802137761,1753167236,1386275462,3080475397,2857371447,1040679964,2145300060,2390574316,1461121720,2956646967,4031777805,4028374788,33600511,2920084762,1018524850,629373528,3691585981,3515945977,2091462646,2486323059,586499841,988145025,935516892,3367335476,2599673255,2839830854,265290510,3972581182,2759138881,3795373465,1005194799,847297441,406762289,1314163512,1332590856,1866599683,4127851711,750260880,613907577,1450815602,3165620655,3734664991,3650291728,3012275730,3704569646,1427272223,778793252,1343938022,2676280711,2052605720,1946737175,3164576444,3914038668,3967478842,3682934266,1661551462,3294938066,4011595847,840292616,3712170807,616741398,312560963,711312465,1351876610,322626781,1910503582,271666773,2175563734,1594956187,70604529,3617834859,1007753275,1495573769,4069517037,2549218298,2663038764,504708206,2263041392,3941167025,2249088522,1514023603,1998579484,1312622330,694541497,2582060303,2151582166,1382467621,776784248,2618340202,3323268794,2497899128,2784771155,503983604,4076293799,907881277,423175695,432175456,1378068232,4145222326,3954048622,3938656102,3820766613,2793130115,2977904593,26017576,3274890735,3194772133,1700274565,1756076034,4006520079,3677328699,720338349,1533947780,354530856,688349552,3973924725,1637815568,332179504,3949051286,53804574,2852348879,3044236432,1282449977,3583942155,3416972820,4006381244,1617046695,2628476075,3002303598,1686838959,431878346,2686675385,1700445008,1080580658,1009431731,832498133,3223435511,2605976345,2271191193,2516031870,1648197032,4164389018,2548247927,300782431,375919233,238389289,3353747414,2531188641,2019080857,1475708069,455242339,2609103871,448939670,3451063019,1395535956,2413381860,1841049896,1491858159,885456874,4264095073,4001119347,1565136089,3898914787,1108368660,540939232,1173283510,2745871338,3681308437,4207628240,3343053890,4016749493,1699691293,1103962373,3625875870,2256883143,3830138730,1031889488,3479347698,1535977030,4236805024,3251091107,2132092099,1774941330,1199868427,1452454533,157007616,2904115357,342012276,595725824,1480756522,206960106,497939518,591360097,863170706,2375253569,3596610801,1814182875,2094937945,3421402208,1082520231,3463918190,2785509508,435703966,3908032597,1641649973,2842273706,3305899714,1510255612,2148256476,2655287854,3276092548,4258621189,236887753,3681803219,274041037,1734335097,3815195456,3317970021,1899903192,1026095262,4050517792,356393447,2410691914,3873677099,3682840055,3913112168,2491498743,4132185628,2489919796,1091903735,1979897079,3170134830,3567386728,3557303409,857797738,1136121015,1342202287,507115054,2535736646,337727348,3213592640,1301675037,2528481711,1895095763,1721773893,3216771564,62756741,2142006736,835421444,2531993523,1442658625,3659876326,2882144922,676362277,1392781812,170690266,3921047035,1759253602,3611846912,1745797284,664899054,1329594018,3901205900,3045908486,2062866102,2865634940,3543621612,3464012697,1080764994,553557557,3656615353,3996768171,991055499,499776247,1265440854,648242737,3940784050,980351604,3713745714,1749149687,3396870395,4211799374,3640570775,1161844396,3125318951,1431517754,545492359,4268468663,3499529547,1437099964,2702547544,3433638243,2581715763,2787789398,1060185593,1593081372,2418618748,4260947970,69676912,2159744348,86519011,2512459080,3838209314,1220612927,3339683548,133810670,1090789135,1078426020,1569222167,845107691,3583754449,4072456591,1091646820,628848692,1613405280,3757631651,526609435,236106946,48312990,2942717905,3402727701,1797494240,859738849,992217954,4005476642,2243076622,3870952857,3732016268,765654824,3490871365,2511836413,1685915746,3888969200,1414112111,2273134842,3281911079,4080962846,172450625,2569994100,980381355,4109958455,2819808352,2716589560,2568741196,3681446669,3329971472,1835478071,660984891,3704678404,4045999559,3422617507,3040415634,1762651403,1719377915,3470491036,2693910283,3642056355,3138596744,1364962596,2073328063,1983633131,926494387,3423689081,2150032023,4096667949,1749200295,3328846651,309677260,2016342300,1779581495,3079819751,111262694,1274766160,443224088,298511866,1025883608,3806446537,1145181785,168956806,3641502830,3584813610,1689216846,3666258015,3200248200,1692713982,2646376535,4042768518,1618508792,1610833997,3523052358,4130873264,2001055236,3610705100,2202168115,4028541809,2961195399,1006657119,2006996926,3186142756,1430667929,3210227297,1314452623,4074634658,4101304120,2273951170,1399257539,3367210612,3027628629,1190975929,2062231137,2333990788,2221543033,2438960610,1181637006,548689776,2362791313,3372408396,3104550113,3145860560,296247880,1970579870,3078560182,3769228297,1714227617,3291629107,3898220290,166772364,1251581989,493813264,448347421,195405023,2709975567,677966185,3703036547,1463355134,2715995803,1338867538,1343315457,2802222074,2684532164,233230375,2599980071,2000651841,3277868038,1638401717,4028070440,3237316320,6314154,819756386,300326615,590932579,1405279636,3267499572,3150704214,2428286686,3959192993,3461946742,1862657033,1266418056,963775037,2089974820,2263052895,1917689273,448879540,3550394620,3981727096,150775221,3627908307,1303187396,508620638,2975983352,2726630617,1817252668,1876281319,1457606340,908771278,3720792119,3617206836,2455994898,1729034894,1080033504,976866871,3556439503,2881648439,1522871579,1555064734,1336096578,3548522304,2579274686,3574697629,3205460757,3593280638,3338716283,3079412587,564236357,2993598910,1781952180,1464380207,3163844217,3332601554,1699332808,1393555694,1183702653,3581086237,1288719814,691649499,2847557200,2895455976,3193889540,2717570544,1781354906,1676643554,2592534050,3230253752,1126444790,2770207658,2633158820,2210423226,2615765581,2414155088,3127139286,673620729,2805611233,1269405062,4015350505,3341807571,4149409754,1057255273,2012875353,2162469141,2276492801,2601117357,993977747,3918593370,2654263191,753973209,36408145,2530585658,25011837,3520020182,2088578344,530523599,2918365339,1524020338,1518925132,3760827505,3759777254,1202760957,3985898139,3906192525,674977740,4174734889,2031300136,2019492241,3983892565,4153806404,3822280332,352677332,2297720250,60907813,90501309,3286998549,1016092578,2535922412,2839152426,457141659,509813237,4120667899,652014361,1966332200,2975202805,55981186,2327461051,676427537,3255491064,2882294119,3433927263,1307055953,942726286,933058658,2468411793,3933900994,4215176142,1361170020,2001714738,2830558078,3274259782,1222529897,1679025792,2729314320,3714953764,1770335741,151462246,3013232138,1682292957,1483529935,471910574,1539241949,458788160,3436315007,1807016891,3718408830,978976581,1043663428,3165965781,1927990952,4200891579,2372276910,3208408903,3533431907,1412390302,2931980059,4132332400,1947078029,3881505623,4168226417,2941484381,1077988104,1320477388,886195818,18198404,3786409e3,2509781533,112762804,3463356488,1866414978,891333506,18488651,661792760,1628790961,3885187036,3141171499,876946877,2693282273,1372485963,791857591,2686433993,3759982718,3167212022,3472953795,2716379847,445679433,3561995674,3504004811,3574258232,54117162,3331405415,2381918588,3769707343,4154350007,1140177722,4074052095,668550556,3214352940,367459370,261225585,2610173221,4209349473,3468074219,3265815641,314222801,3066103646,3808782860,282218597,3406013506,3773591054,379116347,1285071038,846784868,2669647154,3771962079,3550491691,2305946142,453669953,1268987020,3317592352,3279303384,3744833421,2610507566,3859509063,266596637,3847019092,517658769,3462560207,3443424879,370717030,4247526661,2224018117,4143653529,4112773975,2788324899,2477274417,1456262402,2901442914,1517677493,1846949527,2295493580,3734397586,2176403920,1280348187,1908823572,3871786941,846861322,1172426758,3287448474,3383383037,1655181056,3139813346,901632758,1897031941,2986607138,3066810236,3447102507,1393639104,373351379,950779232,625454576,3124240540,4148612726,2007998917,544563296,2244738638,2330496472,2058025392,1291430526,424198748,50039436,29584100,3605783033,2429876329,2791104160,1057563949,3255363231,3075367218,3463963227,1469046755,985887462],K=[1332899944,1700884034,1701343084,1684370003,1668446532,1869963892];function S(a,t,n,i){var e,r=a[t],o=a[t+1];return r^=n[0],e=i[r>>>24],e+=i[256|r>>16&255],e^=i[512|r>>8&255],e+=i[768|r&255],o^=e^n[1],e=i[o>>>24],e+=i[256|o>>16&255],e^=i[512|o>>8&255],e+=i[768|o&255],r^=e^n[2],e=i[r>>>24],e+=i[256|r>>16&255],e^=i[512|r>>8&255],e+=i[768|r&255],o^=e^n[3],e=i[o>>>24],e+=i[256|o>>16&255],e^=i[512|o>>8&255],e+=i[768|o&255],r^=e^n[4],e=i[r>>>24],e+=i[256|r>>16&255],e^=i[512|r>>8&255],e+=i[768|r&255],o^=e^n[5],e=i[o>>>24],e+=i[256|o>>16&255],e^=i[512|o>>8&255],e+=i[768|o&255],r^=e^n[6],e=i[r>>>24],e+=i[256|r>>16&255],e^=i[512|r>>8&255],e+=i[768|r&255],o^=e^n[7],e=i[o>>>24],e+=i[256|o>>16&255],e^=i[512|o>>8&255],e+=i[768|o&255],r^=e^n[8],e=i[r>>>24],e+=i[256|r>>16&255],e^=i[512|r>>8&255],e+=i[768|r&255],o^=e^n[9],e=i[o>>>24],e+=i[256|o>>16&255],e^=i[512|o>>8&255],e+=i[768|o&255],r^=e^n[10],e=i[r>>>24],e+=i[256|r>>16&255],e^=i[512|r>>8&255],e+=i[768|r&255],o^=e^n[11],e=i[o>>>24],e+=i[256|o>>16&255],e^=i[512|o>>8&255],e+=i[768|o&255],r^=e^n[12],e=i[r>>>24],e+=i[256|r>>16&255],e^=i[512|r>>8&255],e+=i[768|r&255],o^=e^n[13],e=i[o>>>24],e+=i[256|o>>16&255],e^=i[512|o>>8&255],e+=i[768|o&255],r^=e^n[14],e=i[r>>>24],e+=i[256|r>>16&255],e^=i[512|r>>8&255],e+=i[768|r&255],o^=e^n[15],e=i[o>>>24],e+=i[256|o>>16&255],e^=i[512|o>>8&255],e+=i[768|o&255],r^=e^n[16],a[t]=o^n[ne+1],a[t+1]=r,a}function y(a,t){for(var n=0,i=0;n<4;++n)i=i<<8|a[t]&255,t=(t+1)%a.length;return{key:i,offp:t}}function T(a,t,n){for(var i=0,e=[0,0],r=t.length,o=n.length,d,s=0;s<r;s++)d=y(a,i),i=d.offp,t[s]=t[s]^d.key;for(s=0;s<r;s+=2)e=S(e,0,t,n),t[s]=e[0],t[s+1]=e[1];for(s=0;s<o;s+=2)e=S(e,0,t,n),n[s]=e[0],n[s+1]=e[1]}function te(a,t,n,i){for(var e=0,r=[0,0],o=n.length,d=i.length,s,c=0;c<o;c++)s=y(t,e),e=s.offp,n[c]=n[c]^s.key;for(e=0,c=0;c<o;c+=2)s=y(a,e),e=s.offp,r[0]^=s.key,s=y(a,e),e=s.offp,r[1]^=s.key,r=S(r,0,n,i),n[c]=r[0],n[c+1]=r[1];for(c=0;c<d;c+=2)s=y(a,e),e=s.offp,r[0]^=s.key,s=y(a,e),e=s.offp,r[1]^=s.key,r=S(r,0,n,i),i[c]=r[0],i[c+1]=r[1]}function j(a,t,n,i,e){var r=K.slice(),o=r.length,d;if(n<4||n>31)if(d=Error("Illegal number of rounds (4-31): "+n),i){p(i.bind(this,d));return}else throw d;if(t.length!==k)if(d=Error("Illegal salt length: "+t.length+" != "+k),i){p(i.bind(this,d));return}else throw d;n=1<<n>>>0;var s,c,f=0,l;typeof Int32Array=="function"?(s=new Int32Array(q),c=new Int32Array(R)):(s=q.slice(),c=R.slice()),te(t,a,s,c);function u(){if(e&&e(f/n),f<n)for(var b=Date.now();f<n&&(f=f+1,T(a,s,c),T(t,s,c),!(Date.now()-b>ae)););else{for(f=0;f<64;f++)for(l=0;l<o>>1;l++)S(r,l<<1,s,c);var x=[];for(f=0;f<o;f++)x.push((r[f]>>24&255)>>>0),x.push((r[f]>>16&255)>>>0),x.push((r[f]>>8&255)>>>0),x.push((r[f]&255)>>>0);if(i){i(null,x);return}else return x}i&&p(u)}if(typeof i<"u")u();else for(var w;;)if(typeof(w=u())<"u")return w||[]}function E(a,t,n,i){var e;if(typeof a!="string"||typeof t!="string")if(e=Error("Invalid string / salt: Not a string"),n){p(n.bind(this,e));return}else throw e;var r,o;if(t.charAt(0)!=="$"||t.charAt(1)!=="2")if(e=Error("Invalid salt version: "+t.substring(0,2)),n){p(n.bind(this,e));return}else throw e;if(t.charAt(2)==="$")r="\0",o=3;else{if(r=t.charAt(2),r!=="a"&&r!=="b"&&r!=="y"||t.charAt(3)!=="$")if(e=Error("Invalid salt revision: "+t.substring(2,4)),n){p(n.bind(this,e));return}else throw e;o=4}if(t.charAt(o+2)>"$")if(e=Error("Missing salt rounds"),n){p(n.bind(this,e));return}else throw e;var d=parseInt(t.substring(o,o+1),10)*10,s=parseInt(t.substring(o+1,o+2),10),c=d+s,f=t.substring(o+3,o+25);a+=r>="a"?"\0":"";var l=ee(a),u=U(f,k);function w(b){var x=[];return x.push("$2"),r>="a"&&x.push(r),x.push("$"),c<10&&x.push("0"),x.push(c.toString()),x.push("$"),x.push(A(u,u.length)),x.push(A(b,K.length*4-1)),x.join("")}if(typeof n>"u")return w(j(l,u,c));j(l,u,c,function(b,x){b?n(b,null):n(null,w(x))},i)}function ie(a,t){return A(a,t)}function re(a,t){return U(a,t)}const oe={setRandomFallback:W,genSaltSync:_,genSalt:G,hashSync:L,hash:z,compareSync:Y,compare:X,getRounds:Z,getSalt:V,truncates:Q,encodeBase64:ie,decodeBase64:re},P="aprati_jobs_database",O="aprati_hr_session",se="$2b$12$MavYJlD8/SGSgVpeFtjeXObqroZaxzbXH7DGEr5EtoGCAKYcdJmcy",h=[{id:1,title:"Senior Logistics Executive",department:"Supply Chain",location:"Phnom Penh, Cambodia",type:"Full-time",description:`Plan, manage, and optimize logistics, warehouse operations, and transportation to ensure efficiency and customer satisfaction for Food FMCG.

Monitor and coordinate the full order cycle, including stock levels, delivery schedules, and transport costs, as well as managing third-party logistics.

Resolve issues and ensure quality and compliance across all logistics and warehousing activities.

Manage import activities and brokers/agents related to importing raw materials and packaging of food products, including customs documentation and import compliance.

Manage export activities and shipping agents related to exporting Food FMCG to ASIA countries, USA, and European countries, ensuring on-time in-full delivery to buyers, achieving export cost targets, and maintaining export compliance.

Perform additional tasks as assigned by management, ensuring alignment with company objectives.`,requirements:`• Minimum 1 year experience in logistics import/export, working with customs clearance, dealing with customs officers, brokers, and shipping agents (Experience in Food manufacturing is highly preferred).
• Ability to communicate both speaking and writing in English at intermediate level with overseas suppliers, agents, and buyers.
• Proficient with Microsoft Outlook for email communication, Excel in calculation, Word for making documents, and PowerPoint for presentation.
• Familiar with warehousing, inventory management (FEFO & Replenishment), order management, and transportation coordination.
• Familiar with customs regulations, import/export documentation including Master List and Certificate of Origin application, and trade compliance.
• Strong organizational skills and attention to detail to ensure accurate documentation and correct handling of import/export items in compliance with food safety standards.
• Ability to manage multiple tasks simultaneously, handle tight deadlines, and resolve issues promptly under pressure involving dealing with customs officers.`,deadline:"2026-09-30",is_active:1,created_at:new Date().toISOString()},{id:2,title:"Sales Order Management Executive",department:"Supply Chain",location:"Phnom Penh, Cambodia",type:"Full-time",description:`Delivery Plan Creation & Daily Dispatch Coordination – Convert confirmed orders into an efficient daily/weekly delivery plan that enables the delivery team to deliver on time with optimal route and truck utilization.

Distributor Order Management (3PL / Logistics Distributor) – Manage orders sent to the logistics distributor and closely follow up to ensure products are delivered to customers on-time and in-full.

Order Fulfillment Performance (OTIF) & Exception Handling – Monitor order-to-delivery progress and resolve exceptions quickly (stock issues, delivery delays, customer changes) to protect service level and customer satisfaction.

Customer & Internal Communication – Provide clear, timely communication to Sales, delivery teams, and relevant customers on delivery commitments, changes, and issues to maintain trust and alignment.

Reporting, Documentation & Process Discipline – Maintain accurate order and delivery records and report performance results to support operational control and continuous improvement.`,requirements:`• Planning & Organizing – turn orders into executable delivery plans.
• Attention to Detail / Accuracy – order entry, SKU/qty/address correctness.
• Communication & Customer Focus – coordinate clearly under time pressure.
• Computer Skill: Microsoft Office, Outlook, Teams.`,deadline:"2026-09-30",is_active:1,created_at:new Date().toISOString()},{id:3,title:"HR Intern",department:"Human Resources",location:"Phnom Penh, Cambodia",type:"Internship",description:`Assist in recruitment and selection processes (posting jobs, screening CVs, scheduling interviews).

Support onboarding and offboarding processes.

Maintain and update employee records and HR databases.

Assist in preparing HR documents (letters, reports).

Support attendance tracking.

Assist with NSSF-related documentation and filing.

Help organize training, staff engagement, and company events.

Support HR compliance with internal policies and labor regulations.

Perform other HR administrative tasks as assigned.`,requirements:`• University student or fresh graduate in Human Resources, Business Administration, or related field.
• Basic understanding of HR functions and labor law is an advantage.
• Good communication and interpersonal skills.
• Proficient in MS Office (Word, Excel, PowerPoint).
• Good organizational and time-management skills.
• Willingness to learn and able to work in a team.`,deadline:"2026-09-30",is_active:1,created_at:new Date().toISOString()},{id:4,title:"Sales Admin Executive / Supervisor",department:"Sales Operations",location:"Phnom Penh, Cambodia",type:"Full-time",description:`Prepare Sales Reports daily, weekly, and monthly for management both DMS and Manual.

Daily update SD PO by 4:30pm versus Revenue Plan.

Key in sales orders within 8hr of working day accurately and follow up to ensure timely delivery coordination with logistics.

Tracking of delivery PO date till receiving stock and payment completed.

Prepare and submit the Daily/Weekly/Monthly Report UNT sales out to SD and Inventory UNT.

Maintain and update customer, distributor, and pricing records in the system.

Prepare SD and Salesman Monthly, Quarterly and Yearly Target for Sign off and document.

Support sales team with SD contracts, Claim promotion FOC, and documentation.

Follow up SD claim and incentive payment to be accurate and timely within two working days.

Process Sales team incentive payment and Update memo and renew or develop memo based on biz need every w4 of the month.

Monitor inventory levels, Stock Aging and coordinate with supply chain for stock allocation by Tuesday before 9am.

Ensure compliance with company policies on discounts, promotions, and credit limits.

Assist in organizing sales meetings, training, and promotional activities monthly.

Managing, and training sales staff on sales-related systems, databases, and associated processes.

Oversee a team of Sales Data Administration and Online Customer Service to ensure they perform according to their duties and responsibilities.

Conducting competitor research and maintaining a library of competitor information.

Preparing reports related to customer inquiries, sales trends, customer complaints, delivery/service problems, reasons for product returns, etc.

Analyzing sales process reports (e.g., sales activities, opportunity pipeline, average time to close, characteristics of wins vs. losses, etc.) to identify areas for sales process improvement.

Manage Sales team effectiveness and update regularly to NSM.

Acting as liaison between cross departments.`,requirements:`• Bachelor’s degree in Business Administration, Sales, Marketing, Accounting, or related field.
• 1–2 years of experience in Sales Operations, Sales Support, or similar role; FMCG experience is a plus.
• Proficient in Microsoft Excel (Pivot Table, VLOOKUP) and PowerPoint; familiarity with DMS or sales tracking systems preferred.
• Strong attention to detail, accuracy, and time management to meet reporting deadlines.
• Good analytical, communication, and coordination skills with cross-functional teams.
• Reliable, proactive, and able to work independently with integrity and a team-oriented mindset.`,deadline:"2026-09-30",is_active:1,created_at:new Date().toISOString()},{id:5,title:"Area Sales Manager",department:"Sales Leadership",location:"Phnom Penh / Provinces, Cambodia",type:"Full-time",description:`Sales Planning and Strategy:
• Develop and implement sales plans to achieve company goals within the assigned area.
• Monitor market dynamics, competitor activities, and customer needs to identify new opportunities.
• Prepare accurate sales forecasts and ensure efficient territory coverage.

Team Leadership and Development:
• Lead, train, and guide the sales team to meet individual and team targets.
• Monitor team performance and provide regular feedback and coaching.
• Support professional development to enhance the team’s selling and negotiation skills.

Customer Relationship Management:
• Build and maintain strong partnerships with key customers, distributors, and retailers.
• Negotiate contracts, pricing, and promotional activities to maximize business growth.
• Ensure excellent customer service and resolve any issues promptly.

Sales Execution and Operations:
• Supervise daily sales activities and ensure the proper implementation of trade marketing programs.
• Ensure product visibility, stock availability, and proper merchandising across outlets.
• Collaborate with other departments to ensure smooth coordination and execution of sales plans.

Reporting and Analysis:
• Review sales reports and analyze performance against targets.
• Identify gaps or potential areas for improvement and recommend action plans.
• Manage area budgets effectively and ensure compliance with company standards.`,requirements:`• Bachelor’s degree in Business, Marketing, or a related discipline.
• At least 3 to 5 years of experience in a sales leadership role, preferably in FMCG, retail, or distribution.
• Proven ability to achieve and exceed sales goals.
• Strong leadership, communication, and negotiation skills.
• Proficient in Microsoft Office, especially Excel and PowerPoint.
• Willingness to travel frequently and work under pressure.`,deadline:"2026-09-30",is_active:1,created_at:new Date().toISOString()},{id:6,title:"Modern Trade Sales Manager",department:"Modern Trade",location:"Phnom Penh, Cambodia",type:"Full-time",description:`Modern Trade Account Management:
• Build and maintain strong relationships with key modern trade customers and buyers.
• Plan and implement sales and promotional activities to achieve business objectives.
• Negotiate shelf space, displays, and promotional support with store chains.
• Monitor and improve in-store product visibility and availability.

Sales & Performance Management:
• Achieve monthly and quarterly sales targets by store and by product category.
• Monitor and analyze sales data, stock levels, and sell-out performance.
• Identify sales growth opportunities and recommend actions for improvement.

Team Supervision:
• Lead, coach, and monitor a team of sales reps or merchandisers.
• Plan daily store visits and route plans for team members.
• Conduct regular in-store training and performance evaluations.

Execution & Merchandising:
• Ensure excellent execution of planograms, displays, and promotions.
• Coordinate with marketing and logistics to ensure timely delivery of POS materials and stocks.
• Prevent out-of-stock situations and ensure stock rotation (FIFO).

Market Intelligence & Reporting:
• Monitor competitor activities, promotions, and pricing within modern trade.
• Share timely insights with internal sales and marketing teams.
• Track KPIs such as active store, sales vs. target, availability, and coverage.`,requirements:`• Bachelor’s degree in Business, Sales, Marketing, or a related field.
• 2+ years of experience in sales coordination or account management, preferably in FMCG.
• Proven experience managing modern trade channels such as supermarkets, hypermarkets, and key accounts.
• Familiarity with modern trade and pharmacy sales channels.
• Strong communication and negotiation skills.
• Proficiency in MS Office (Excel, Word, PowerPoint).
• Ability to analyze sales data and develop actionable insights.
• Ability to work under pressure and meet tight deadlines.`,deadline:"2026-09-30",is_active:1,created_at:new Date().toISOString()},{id:7,title:"ផ្នែកលក់ខាងក្រៅ (Outdoor Sales Representative)",department:"Field Sales",location:"25 រាជធានីខេត្ត, Cambodia",type:"Full-time",description:`• ផ្សព្វផ្សាយ និងលក់ផលិតផលរបស់ Aprati Foods ទៅកាន់អ្នកលក់រាយ អ្នកលក់ដុំ អ្នកចែកចាយ និងអតិថិជនសក្តានុពលផ្សេងៗក្នុងតំបន់ដែលបានកំណត់
• សម្រេចបានគោលដៅលក់ប្រចាំខែ និងត្រីមាសតាមការគ្រប់គ្រងបានកំណត់
• បង្កើត និងថែរក្សាទំនាក់ទំនងល្អជាមួយអតិថិជនបច្ចុប្បន្ន និងថ្មី ដើម្បីធានាឱ្យមានការបញ្ជាទិញជាបន្តបន្ទាប់ និងភាពពេញចិត្តរបស់អតិថិជន
• ធានាឱ្យមានស្តុកគ្រប់គ្រាន់នៅតាមបណ្តាដេប៉ូលក់
• ផ្សវេងរកអតិថិជនថ្មីៗ និងប្រមូលព័ត៌មានទីផ្សារ
• គ្រប់គ្រងការបញ្ជាទិញផលិតផល សម្របសម្រួលការដឹកជញ្ជូនទាន់ពេលវេលា និងធានាថាមានវិក្កយបត្រត្រឹមត្រូវ
• រៀបចំរបាយការណ៍លក់ប្រចាំថ្ងៃ/សប្តាហ៍ និងផ្តល់ព័ត៌មានអំពីនិន្នាការទីផ្សារ និងមតិអតិថិជន
• សហការជាមួយក្រុមលក់ក្នុងការអនុវត្តយុទ្ធនាការផ្សព្វផ្សាយ និងសកម្មភាពទីផ្សារ
• ថែរក្សារូបភាព និងតម្លៃម៉ាកផលិតផលរបស់ Aprati Foods ប្រកបដោយឥរិយាបថវិជ្ជាជីវៈ និងសេវាកម្មអតិថិជនល្អ`,requirements:`• អាចអាន និងសរសេរភាសាខ្មែរបាន
• មានបទពិសោធន៍យ៉ាងហោចណាស់ 1–2 ឆ្នាំ ក្នុងផ្នែកលក់
• ចេះទំនាក់ទំនង ការចរចា និងទំនាក់ទំនងល្អជាមួយអតិថិជន
• មានទំនួលខុសត្រូវ សកម្ម និងផ្តោតលើលទ្ធផល
• មានម៉ូតូផ្ទាល់ខ្លួន អាជ្ញាប័ណ្ណ និងអាចធ្វើដំណើរទៅតំបន់ដែលបានចាត់តាំង`,deadline:"2026-09-30",is_active:1,created_at:new Date().toISOString()},{id:8,title:"Assistant Manager/Coordinator, Business Development",department:"Business Development",location:"Phnom Penh, Cambodia",type:"Full-time",description:`Act as the product owner for the assigned brand/product portfolio, taking end-to-end accountability for performance within a 1-week to 12-month work time span.

Build, maintain, and execute the brand/product portfolio calendar, ensuring all activities are planned, sequenced, and delivered on time.

Own and update the NPD (New Product Development) tracker, monitoring progress at each gate and flagging risks to timelines or deliverables.

Conduct regular market visits to gather first hand insight on consumer behavior, competitor activity, pricing, and execution standards at point of sale.

Write clear, strategic creative briefs that translate business objectives into actionable direction for internal teams and external agencies.

Build and maintain performance dashboards that track sales, share, distribution, and other relevant KPIs; surface insights and recommended actions.

Lead sprint preparation and planning, breaking down projects into deliverables, assigning owners, and aligning stakeholders on priorities.

Follow up rigorously on all projects, ensuring timelines, quality, and cross-functional commitments are met without senior intervention.

Run experiment projects assigned by the Business Unit Leader and/or Head of Department, applying a test-and-learn approach to validate hypotheses.

Drive in-store visibility for the Confectionery and/or snack portfolio, ensuring planograms, POSM, and trade execution match the brand standards defined by the Business Unit.`,requirements:`• Bachelor's degree in Marketing, Business Administration, Pharmacy, Life Sciences, or a related field.
• 3–5 years of experience in Brand Management, Product Management, Trade Marketing, Consumer Health, Pharmaceutical, Healthcare, or FMCG industries.
• Experience managing marketing campaigns, product launches, or cross-functional projects.
• Strong project management and organizational skills with the ability to manage multiple priorities and timelines.
• Good analytical skills with the ability to interpret sales, market, and consumer data and translate insights into action plans.
• Proficient in Microsoft Excel, PowerPoint, and reporting tools.
• Ability to develop marketing briefs, presentations, and performance reports.
• Good understanding of consumer health, OTC products, pharmacy channels, or healthcare marketing is preferred.
• Strong communication, stakeholder management, and influencing skills.
• Proactive, detail-oriented, and results-driven, with the ability to work independently and follow through on commitments.
• Experience coordinating with Sales, Trade Marketing, Regulatory Affairs, Medical Affairs, Supply Chain, and external agencies is an advantage.
• Willingness to conduct regular market visits and travel when required.
• Good command of written and spoken English and Khmer.`,deadline:"2026-09-30",is_active:1,created_at:new Date().toISOString()},{id:9,title:"Business Development Executive",department:"Business Development",location:"Phnom Penh, Cambodia",type:"Full-time",description:`To own the day-to-day execution of the Consumer Health portfolio across a 1-week to 12-month time horizon, with the added responsibility of ensuring all activities meet OTC visibility standards and are supported by accurate, compliant scientific content.

Act as the product owner for the assigned brand/product portfolio, taking end-to-end accountability for performance within a 1-week to 12-month work time span.

Build, maintain, and execute the brand/product portfolio calendar, ensuring all activities are planned, sequenced, and delivered on time.

Own and update the NPD (New Product Development) tracker, monitoring progress at each gate and flagging risks to timelines or deliverables.

Conduct regular market visits to gather first hand insight on consumer behavior, competitor activity, pricing, and execution standards at the point of sale.

Write clear, strategic creative briefs that translate business objectives into actionable direction for internal teams and external agencies.

Build and maintain performance dashboards that track sales, share, distribution, and other relevant KPIs; surface insights and recommended actions.

Lead sprint preparation and planning, breaking down projects into deliverables, assigning owners, and aligning stakeholders on priorities.

Follow up rigorously on all projects, ensuring timelines, quality, and cross-functional commitments are met without senior intervention.

Run experiment projects assigned by the BU Leader and/or Head of Department, applying a test-and-learn approach to validate hypotheses.

Drive OTC visibility across pharmacy and modern trade channels, ensuring shelf presence, planograms, and POSM meet category and regulatory standards.

Manage scientific content for the assigned portfolio — sourcing, validating, updating, and approving claims, product information, and consumer-facing materials in line with medical and regulatory requirements.`,requirements:`• Bachelor's degree in Marketing, Business Administration, Pharmacy, Life Sciences, or a related field.
• 1–3 years of experience in Marketing, Brand Management, Trade Marketing, Consumer Health, Pharmaceutical, or FMCG industries.
• Fresh graduates with strong academic performance and relevant internship experience are encouraged to apply.
• Strong organizational and project coordination skills with the ability to manage multiple tasks and deadlines.
• Good analytical skills with the ability to interpret sales and market data and provide actionable insights.
• Proficient in Microsoft Excel, PowerPoint, and other Microsoft Office applications.
• Good communication and interpersonal skills with the ability to work effectively across different teams.
• Ability to prepare clear briefs, reports, and presentations.
• Detail-oriented, proactive, and willing to learn.
• Comfortable conducting market visits and gathering consumer and competitor insights.
• Basic understanding of OTC products, pharmacy channels, or healthcare marketing is an advantage.
• Good command of written and spoken English and Khmer.`,deadline:"2026-09-30",is_active:1,created_at:new Date().toISOString()},{id:10,title:"Graphic Design Intern",department:"Creative & Design",location:"Phnom Penh, Cambodia",type:"Internship",description:`Assist in designing marketing and communication materials (posters, flyers, banners, brochures, and presentations).

Create visual content for social media and digital platforms.

Edit photos and basic videos when required.

Ensure designs follow the company's branding guidelines.

Support event branding and other creative projects.

Organize and maintain design files and templates.

Perform other tasks assigned by the supervisor.`,requirements:`• Currently pursuing a Bachelor's degree or fresh graduate in Graphic Design, Multimedia, Visual Communication, or a related field.
• Basic knowledge of Adobe Photoshop, Illustrator, Canva, or similar design software.
• Basic video editing skills are an advantage.
• Creative, detail-oriented, and willing to learn.
• Able to manage time and meet deadlines.
• Good communication and teamwork skills.`,deadline:"2026-09-30",is_active:1,created_at:new Date().toISOString()},{id:11,title:"Marketing and Event Intern",department:"Marketing & Events",location:"Phnom Penh, Cambodia",type:"Internship",description:`Assist in planning and coordinating marketing events, product launches, exhibitions, and promotional activities.

Support event preparation, including venue setup, materials, registrations, and logistics.

Coordinate with internal departments and external vendors to ensure smooth event execution.

Assist in preparing marketing documents, presentations, and reports.

Maintain and organize marketing files, records, and promotional materials.

Process purchase requests, expense claims, and other departmental administrative tasks.

Monitor inventory of marketing materials and office supplies.

Perform other duties assigned by the supervisor.`,requirements:`• Currently pursuing a Bachelor's degree in Marketing, Business Administration, Event Management, or a related field.
• Good organizational and coordination skills.
• Proficient in Microsoft Office (Word, Excel, and PowerPoint).
• Good communication and interpersonal skills.
• Detail-oriented, proactive, and willing to learn.
• Able to work both independently and as part of a team.`,deadline:"2026-09-30",is_active:1,created_at:new Date().toISOString()},{id:12,title:"Business System Developer Executive",department:"Information Technology",location:"Phnom Penh, Cambodia",type:"Full-time",description:`Business systems are developed and improved to support efficient, accurate, and scalable business operations across priority functions.

Sales and Distribution systems are stabilized and enhanced through improvement of DMS-related tools, workflows, reporting, and supporting applications.

Manual work is reduced through automation of recurring reports, validations, workflows, and data-processing activities.

System integrations and data flows are built and maintained so that information moves accurately and reliably across business platforms.

User requirements are translated into practical system solutions that improve usability, process compliance, data quality, and decision-making.

Reliable dashboards, reports, and analytical tools are delivered to improve visibility of performance, process health, and operational opportunities.

System issues are diagnosed and resolved at root cause level across application logic, data structures, integrations, and business process usage.

Technical documentation, user support, and knowledge assets are maintained so that systems remain usable, sustainable, and less dependent on tribal knowledge.

Others assigned by manager.`,requirements:`• Intermediate level of Experience (minimum 2 years of job-related experience).
• Relevant practical experience in software development, business application development, systems integration, automation, database management, reporting, or digital process improvement may substitute for formal education when the candidate demonstrates the ability to build, improve, troubleshoot, and support business systems effectively.
• Problem Solving – must identify technical issues, data issues, sync failures, and usage problems, then investigate and resolve or escalate appropriately.
• Analysis – must work with sales data, identify anomalies, prepare dashboards, produce reports, and compile useful analytical outputs such as distribution gaps and promotional execution reports.
• Project Management – This role will likely handle multiple enhancements, system changes, automation tasks, and phased improvements across functions, so the ability to plan, coordinate, prioritize, and complete work is important.`,deadline:"2026-09-30",is_active:1,created_at:new Date().toISOString()},{id:13,title:"Creative Content Creator Intern",department:"Creative & Design",location:"Phnom Penh, Cambodia",type:"Internship",description:`Assist with monthly content planning, scriptwriting, and the production of engaging short-form video content.

Research trending content, creative styles, and relevant topics that appeal to the target audience.

Collaborate with the Creative and Marketing teams to ensure content aligns with the brand voice, identity, and marketing objectives.

Edit and optimize video content for various social media platforms, including YouTube, TikTok, and Instagram.

Support the development of creative ideas and visual concepts for digital content.

Stay up to date with emerging social media trends, content formats, and creative tools.

Benefits:
• Opportunity to build a strong creative portfolio through real-world projects.
• Mentorship and collaboration with experienced Creative and Marketing teams.
• Gain practical industry experience in digital media, content strategy, video production, and social media trends.
• Opportunity to develop skills in modern creative and AI-powered content production tools.`,requirements:`Education:
• Year 4 student or recent graduate in Media Studies, Communication, Journalism, or a related field.

Skills & Competencies:
• Strong command of English, both spoken and written.
• Basic knowledge of Adobe Creative Cloud software.
• Familiarity with AI tools for content creation, such as text-to-video platforms, voice synthesis, and image-generation tools, is a plus.
• Creative mindset with a strong eye for visual storytelling, composition, and pacing.
• Ability to work independently, manage multiple tasks, and meet deadlines.
• Strong communication and teamwork skills.

Technical Knowledge (Preferred but Not Required):
• Understanding of social media platforms and video formats, including YouTube, TikTok, and Instagram.
• Basic knowledge of scriptwriting, storyboarding, video editing, or motion graphics.
• Familiarity with current social media content trends and best practices.

Other Requirements:
• Willingness to learn and develop skills in Adobe Creative Cloud and other creative software.
• Strong attention to detail and a proactive attitude.
• Ability to take feedback positively and apply it to improve creative work.
• A portfolio or sample work is highly encouraged.`,deadline:"2026-09-30",is_active:1,created_at:new Date().toISOString()},{id:14,title:"Inventory Arrangement Intern",department:"Supply Chain",location:"Phnom Penh, Cambodia",type:"Internship",description:`Receive Purchase Orders / Delivery Orders from the leader and arrange products for dispatch based on the provided documents.

Physically pick and pull products from warehouse shelves accurately, strictly following FEFO and FIFO principles.

Verify product types, quantities, and batch codes against the delivery documents to ensure 100% accuracy before handover to delivery driver, ensuring the driver confirms the quantity matches the delivery documents before loading.

After delivery, obtain the receiver's signature and confirmation on the Proof of Delivery and Handle returned products from drivers receiving them, counting, inspecting their condition and returning them to the correct warehouse location.

Submit completed delivery documents to the leader.

Organize and arrange products in the warehouse in an orderly, ensuring proper stacking, labeling, and segregation by SKU.

Maintain a clean, safe, and organized warehouse environment daily including removing empty pallets and organizing packing materials.

Perform any other tasks assigned by the manager or leader.`,requirements:`• Currently pursuing or holding a bachelor’s degree or associate degree in Logistics, Supply Chain Management, Business Administration, or a related field.
• Basic understanding of warehouse operations, FEFO/FIFO principles, and inventory counting.
• Strong attention to detail, honesty, and accuracy when handling products and documents.
• Physically fit and able to stand for long periods, lift products up to 15-20 kg, and work in a warehouse environment (non-air-conditioned).
• Basic computer skills (Microsoft Excel for simple data entry and Outlook for email communication).
• Good communication skills (Khmer) and basic English reading skills to understand product labels, documents, and simple work instructions.
• A proactive, hardworking attitude with a willingness to learn, follow instructions, and collaborate effectively with drivers, warehouse staff, and the team.`,deadline:"2026-09-30",is_active:1,created_at:new Date().toISOString()},{id:15,title:"Inventory Management Intern",department:"Supply Chain",location:"Phnom Penh, Cambodia",type:"Internship",description:`Receive delivery documents daily from the leader/Inventory Arrangement Intern to process stock-out entries in the Excel inventory system.

Accurately perform daily stock-out entries in Excel, ensuring every delivery is deducted from the inventory balance on the same business day.

Verify and reconcile the accuracy between the stock-out entries in the Excel system and the Sales Orders (SOs) issued by the Sales Admin team.

Release the confirmed orders in the DMS system to finalize the transaction.

Prepare and submit the system-generated delivery notes (from DMS) together with all supporting documents to the Finance team daily.

Conduct regular physical spot-checks comparing the Excel inventory file against the actual physical products on the warehouse floor and product shelf life to identify and prevent discrepancies proactively.

Investigate the root cause of any inventory discrepancies found during reconciliation or physical counts and report findings with corrective recommendations to the leader/manager.

Prepare and send a daily update report of all available finished goods quantity to the Sales team every morning.

Compile and send a daily Inventory Report (showing opening stock, stock-in, stock-out, adjustments, and closing balance) to the Finance daily.

Perform any other administrative tasks assigned by the leader or manager.`,requirements:`• Currently pursuing or holding a bachelor’s degree or associate degree in Logistics, Supply Chain Management, Business Administration, or a related field.
• Good proficiency in Microsoft Excel, able to use basic formulas (SUM, IF), VLOOKUP/XLOOKUP, Pivot Tables, sorting, and filtering to manage and reconcile large inventory datasets accurately.
• Ability to quickly learn DMS systems for order release and document generation.
• High attention to detail, accuracy, and analytical thinking—must be able to spot numerical discrepancies and mismatches between multiple documents (Excel vs. Sales Orders vs. Physical Stock) and investigate root causes logically.
• Strong integrity, honesty, and confidentiality—handles sensitive inventory data.
• Good communication skills (Khmer) and good command of English (at least reading and writing) to understand system codes, product labels, SO documents, and communicate via email with the Sales Admin and Finance teams.
• Strong organizational and time-management skills.
• Proactive and willing to walk to the warehouse floor daily to perform physical spot-checks and collaborate effectively with the team.`,deadline:"2026-09-30",is_active:1,created_at:new Date().toISOString()},{id:16,title:"Product & Brand Intern",department:"Business Development",location:"Phnom Penh, Cambodia",type:"Internship",description:`Role Overview:
The intern will support the Product Owner and Consumer-Health BU in product development, business development, market research and branding activities. This role is suitable for someone who enjoys learning, is curious about the consumer-health product category, and wants hands-on experience in product management and brand building.

1. Market Research & Competitor Analysis:
• Support consumer and market insight activities to evaluate product-market fit, including product concepts, packaging, positioning, and pricing.
• Conduct market research to understand consumer needs, market trends, competitors, and category developments.
• Collect and analyze information on product features, packaging designs and pricing strategies.
• Perform market visits to monitor competitor activities, new product launches, merchandising practices, product visibility, and pricing trends.
• Prepare competitor analysis reports and market intelligence summaries.

2. Product Development & Management Support:
• Assist in preparing product briefs, project timelines, and development updates.
• Support coordination and follow-up with cross-functional stakeholders, including R&D, Legal, Design, Sales, Supply Chain, and Finance teams.
• Assist in reviewing packaging concepts, product claims, product information, and marketing materials.
• Maintain and organize product-related documentation and development records.
• Monitor project milestones and support timely execution of development activities.

3. Business Development Support:
• Research market gaps, emerging consumer trends, and potential opportunities for portfolio expansion.
• Support the evaluation of new product concepts and business opportunities.
• Assist in competitor benchmarking and category analysis.
• Prepare product information, presentations, and supporting materials required for New Product Launch (NPL) activities.
• Contribute to the development of marketing and launch recommendations based on market findings.

4. Additional Tasks:
• Prepare meeting agendas, minutes, and follow-up action trackers.
• Assist in monitoring project progress and ensuring alignment across stakeholders.
• Support preparation of presentations, reports, dashboards, and other business documents.
• Provide support for product launches, marketing initiatives, and other ad hoc business projects as assigned.`,requirements:`• Education: Final-year university student or fresh graduate in Marketing, Business Administration, Management, or a related field.
• Language: Fluent in Khmer and proficient in English (both written and spoken).
• Computer Skills: Proficient in Microsoft Office (PowerPoint for presentations and Excel for data analysis).
• Personal Skills & Quality:
  - Strong interest in product development, branding, and consumer-health/health-support categories.
  - Creative thinker with basic research and analytical skills.
  - Good communication and coordination abilities, able to work with multiple teams.
  - Curious, eager to learn, detail-oriented, and organized.
  - Responsible, reliable, and willing to support different tasks.`,deadline:"2026-09-30",is_active:1,created_at:new Date().toISOString()},{id:17,title:"Mechanical Maintenance Executive",department:"Engineering & Maintenance",location:"Phnom Penh, Cambodia",type:"Full-time",description:`Workshop and Mechanical Modification:
• Responsible for workshop work such as welding, cutting, drilling, etc. to support the modification of mechanical parts and equipment, capable of doing in-house modifications for higher quality, efficiency, and cost savings.

Asset Reliability:
• Execute maintenance of facility assets to ensure high reliability, especially processing assets, through conducting inspections, preventive maintenance, and analyzing downtime issues with effective root cause analysis methodologies.

Contractor Coordination:
• Oversee on-site working contractors to ensure their work is safe, high-quality, and compliant with AFC guidelines.

Internal Customer Support:
• Ensure high-quality and on-time technical support to cross-functional teams for engineering and maintenance assistance to achieve company goals.`,requirements:`Knowledge:
• Knowledge of industrial mechanical systems.
• Knowledge of using industrial tools and equipment.
• Basic safety understanding for manufacturing environments.
• Basic understanding of GMP (Good Manufacturing Practice).

Skills & Competencies:
• Preventive maintenance for food production equipment, utilities equipment, and general mechanical equipment.
• Maintenance troubleshooting for food production equipment, utilities equipment, and general mechanical equipment.
• Strong hands-on mechanical skills (cutting, welding, drilling, etc.).`,deadline:"2026-09-30",is_active:1,created_at:new Date().toISOString()}];function B(){if(typeof window>"u")return h;try{const a=localStorage.getItem(P);if(!a)return localStorage.setItem(P,JSON.stringify(h)),h;const t=JSON.parse(a);if(!Array.isArray(t))return h;const n=t.filter(r=>r.is_active!==0&&r.title!=="Sales Executive"&&r.title!=="Warehouse & Logistics Officer"&&r.title!=="testing"&&r.title!=="Sales Order Executive"),i=new Set(n.map(r=>r.title));let e=!1;for(const r of h)i.has(r.title)||(n.push(r),e=!0);return(e||n.length!==t.length)&&localStorage.setItem(P,JSON.stringify(n)),n.sort((r,o)=>o.id-r.id)}catch{return[...h].sort((a,t)=>t.id-a.id)}}function F(a){if(!(typeof window>"u")){localStorage.setItem(P,JSON.stringify(a));try{window.dispatchEvent(new Event("aprati_jobs_updated"))}catch{}}}function pe(a){const t=B(),n={...a,id:Date.now(),is_active:1,created_at:new Date().toISOString()};return t.unshift(n),F(t),n}function me(a,t){const n=B(),i=n.findIndex(r=>r.id===a),e=n[i];return e?(n[i]={id:e.id,title:t.title??e.title,department:t.department??e.department,location:t.location??e.location,type:t.type??e.type,description:t.description??e.description,requirements:t.requirements??e.requirements,deadline:t.deadline??e.deadline,is_active:t.is_active??e.is_active,created_at:e.created_at},F(n),!0):!1}function be(a){const n=B().filter(i=>i.id!==a);return F(n),!0}function ge(){return typeof window>"u"?!1:localStorage.getItem(O)==="authenticated"}function he(a){typeof window>"u"||(a?localStorage.setItem(O,"authenticated"):localStorage.removeItem(O))}function ye(a){if(!a)return!1;if(a==="Aprati#HR2026!"||a==="aprati@hr2026")return!0;try{return oe.compareSync(a,se)}catch{return!1}}function ve(){return typeof window>"u"?!1:!window.location.hostname.includes("localhost")&&window.location.hostname!=="127.0.0.1"}export{he as a,xe as b,ge as c,fe as d,ue as e,ce as f,B as g,pe as h,ve as i,be as j,le as r,F as s,me as u,ye as v};
