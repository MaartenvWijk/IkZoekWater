var map;

var locations = [
    /****************
     * Zuid Holland
     */
    /* Katwijk */
    ['Noordduinseweg', 52.212322, 4.403093],
    ['Boulevard Zeezijde1', 52.20949, 4.39726],
    ['Boulevard Zeezijde2', 52.20819, 4.39629],
    ['Boulevard Zeezijde3', 52.20720, 4.39556],
    ['Boulevard Zeezijde4', 52.20621, 4.39499],
    ['Boulevard Zeezijde5', 52.20552, 4.39436],
    ['Boulevard Zeezijde6', 52.204486, 4.393355],
    ['Boulevard Zeezijde7', 52.20447, 4.39335],
    ['Boulevard Zeezijde8', 52.20371, 4.39270],
    ['Boulevard Zeezijde9', 52.20318, 4.39222],
    ['Boulevard Zeezijde10', 52.20247, 4.39170],
    ['Boulevard Zeezijde11', 52.20087, 4.39054],
    ['Boulevard Zeezijde12', 52.19991, 4.38894],
    ['Boulevard Zeezijde13', 52.19819, 4.38729],
    ['Boulevard Zeezijde14', 52.19662, 4.38606],
    ['Sportlaan TOP zuidduinen', 52.19524, 4.38709],
    ['Wassenaarseweg', 52.17502, 4.40172],

    /* Wassenaar */
    ['Wassenaarselag', 52.16280, 4.34877, 'bij strandopgang'],
    ['Wassenaarseslag bij hotel', 52.16080, 4.36273],
    ['Langstraat', 52.14398, 4.39342],
    ['Stadshoudersplein (op het plein)', 52.14485, 4.40405],
    ['Meijendelseweg', 52.12971, 4.34271],
    ['Meijendelseweg2', 52.12904, 4.33308],

    /* Noordwijk & Noordwijkerhout & Oegstgeest */
    ['Koningin Astrid Boulevard', 52.23327, 4.42026],
    ['Bosweg', 52.25210, 4.43836],
    ['Leidsevaart', 52.23659, 4.48326],
    ['Dorpstraat (Havenstraat)', 52.26241, 4.49289],
    ['Oosterduinen', 52.28359, 4.51746, 'bij de Corneliabrug'],
    ['Klinkenbergerpad', 52.200530, 4.485321],

    /* Leiden */
    ['Parkzicht', 52.17808, 4.50924],
    ['Waterlelie Houtlaan', 52.17559, 4.48072],
    ['Nieuwe Marnixstraat', 52.16956, 4.49898],
    ['Tacitusstraat', 52.14901, 4.51643],
    ['Cronensteyn', 52.14421, 4.49909],
    ['Vlietweg', 52.13543, 4.47539, 'naast de entree Vogelhoff'],

    /* Den Haag */
    ['Zwarte Pad', 52.11861, 4.29159],
    ['Strandweg', 52.11716, 4.28621],
    ['van Alkemadelaan', 52.11085, 4.30422],
    ['Pompstationsweg', 52.10592, 4.30183],
    ['Kapelweg', 52.10580, 4.29018],
    ['Ruychrocklaan', 52.10410, 4.33025],
    ['Oude Waalsdorperweg', 52.11218, 4.32910],
    ['St. Hubertusweg', 52.09826, 4.30394],
    ['Kerkhoflaan', 52.09513, 4.29838],
    ['Ary van der Spuyweg', 52.09131, 4.29306],
    ['Ary van der Spuyweg2', 52.09134, 4.29470],
    ['Hofzichtlaan', 52.10183, 4.35534],
    ['Clingendael', 52.10119, 4.33441],
    ['Isabellaland', 52.095, 4.368],
    ['Cromvlietkade', 52.06136, 4.34103],
    ['Tasmanstraat', 52.081, 4.291],
    ['Sirtemastraat', 52.07540, 4.29887],
    ['Jan van Riebeekstraat', 52.07937, 4.32811],
    ['Huijgenspark', 52.07324, 4.32176],
    ['Huijgenspark2', 52.07330, 4.31923],
    ['Helena van Doeverenplantsoen', 52.07184, 4.30871],
    ['Teniersstraat', 52.06817, 4.30461],
    ['Snijdersstraat', 52.06694, 4.30118],
    ['Oranjeplein', 52.07114, 4.31452],
    ['Naaldwijksestraat', 52.06859, 4.31675],
    ['Albert Cuypstraat', 52.066993, 4.313199],
    ['Wieringsestraat', 52.09181, 4.25188],
    ['Strand Zuid', 52.08783, 4.24669],
    ['Duivelandsestraat', 52.08714, 4.25362],
    ['Laan van Poot', 52.08545, 4.26298],
    ['Segbroeklaan', 52.08167, 4.26673],
    ['Kwartellaan', 52.08132, 4.25039],
    ['Laan van Poot', 52.08256, 4.24709],
    ['Zuiderstrand', 52.08334, 4.24008],
    ['De Savornin Lohmanlaan', 52.07604, 4.23740],
    ['De Savornin Lohmanlaan2', 52.07384, 4.23931],
    ['Daal en Bergselaan', 52.12904, 4.33308],
    ['De Savornin Lohmanpad', 52.07791, 4.23216],
    ['Meer en Boslaan', 52.07212, 4.22396],
    ['Deltaplein', 52.06993, 4.22068],
    ['Heliotrooplaan', 52.06479, 4.22868],
    ['Heliotrooplaan', 52.06434, 4.23031],
    ['Schapenatjesduin', 52.06224, 4.22232],
    ['Wijndaelerduin', 52.06115, 4.21846],
    ['Jules Massenetstraat', 52.05982, 4.24258],
    ['Vreeswijkstraat', 52.05974, 4.28358],
    ['Henriëtte Roland Holstweg', 52.05870, 4.28870],
    ['Johanna Naberweg', 52.05597, 4.28759],
    ['Sara Burghartweg', 52.04949, 4.29189],
    ['Cromvlietkade', 52.06136, 4.34103],
    ['Loosduinse Hoofdplein', 52.05334, 4.23498],
    ['Willem III straat', 52.04980, 4.23586],
    ['Eekhoornrade', 52.04474, 4.25884],
    ['Pachtersdreef', 52.03390, 4.26226],
    ['Bogaardplein', 52.03561, 4.31600],
    ['Kerkstraat', 52.066731, 4.365746],
    ['Sluiskant', 52.080846, 4.399039],

    /* Zoetermeer */
    ['Abdissenbos', 52.05787, 4.47838],
    ['Dorpsstraat', 52.05552, 4.49873],
    ['Tasmanie', 52.05768, 4.53675],
    ['Plein van de Verenigde Naties', 52.04667, 4.47649],
    ['Kurkhout', 52.04428, 4.45865],
    ['Kerkstraat', 52.01087, 4.53007],
    ['Noordweg', 52.02565, 4.42202],

    /* Amsterdam */
    ['Lambertus Zijlplein', 52.378282, 4.801498, 'op het plein'],
    ['Lodewijk van Deysselstraat', 52.377924, 4.808156, 'bij de speeltuin', 'img/LodewijkvanDeysselstraat110.jpg'],
    ['Confuciusplein', 52.374403, 4.812588],
    ['Th. J. Lammerslaan', 52.371522, 4.819801],
    ['Christoffel Plantijnpad', 52.363375, 4.823038],
    ['Burgemeester Cramergracht', 52.369964, 4.830211, 'Bij Suada restaurant, naast bord met stadskaart', 'img/BurgemeesterCramergracht.jpg'],
    ['Henk Henrietstraat', 52.366411, 4.848231, 'net voorbij de brug'],
    ['Overtoomse Veld', 52.368411, 4.848428, 'Bij ingang', 'img/OvertoomseVeld.jpg'],
    ['Orteliuspad', 52.370341, 4.846921, 'Op speelplaats'],
    ['Mercatorplein', 52.369917, 4.850640, 'Bij ijs-salon IJscuypje'],
    ['Mercatorplein2', 52.370022, 4.850933, 'Bij bankjes', 'img/Mercatorplein2.jpg'],
    ['Jan Maijenstraat', 52.371057, 4.852361, 'Bij speelveldje voor Jaruzalemkerk', 'img/JanMaijenstraat.jpg'],
    ['Balboaplein,', 52.368629, 4.855511, 'Tussen voetbalveltje en basketbalveltje', 'img/Balboaplein.jpg'],
    ['Changiweg', 52.388610, 4.838666],
    ['Wilco Jiskootpad', 52.382322, 4.831530, 'Bij speelplaats'],
    ['Wiardi Beckmanstraat', 52.381075, 4.833779, 'Op speelplaats'],
    ['Flierefluiterpad', 52.381054, 4.840118, 'Bij tennisveld'],
    ['Gerbrandypark', 52.377615, 4.834833, 'Tussen bruggetje en tennisvelden', 'img/Gerbrandypark.jpg'],
    ['Gerbrandypark2', 52.378631, 4.828334, 'Net over het bruggetje, tegenover huizen', 'img/Gerbrandypark2.jpg'],
    ['Van Gilsestraat', 52.381744, 4.826158, 'Op speelplaats', 'img/VanGilsestraat.jpg'],
    ['Ernest Staesstraat', 52.376753, 4.840774, 'In de buurt van speelplaats'],
    ['Robert Scottstraat', 52.373591, 4.845996, 'Op speelplaats, bij voetbal-kooi', 'img/RobertScottstraat.jpg'],
    ['Gibraltarstraat', 52.383615, 4.851275, 'Bij speelplaats', 'img/Gibraltarstraat.jpg'],
    ['Landlust', 52.381291, 4.851423, 'Op speelplaats, naast voetbalveltje', 'img/Landlust.jpg'],
    ['Wiltzanghlaan', 52.381980, 4.847714, 'Op schoolplein', 'img/Wiltzanghlaan.jpg'],
    ['Bos en Lommerplantsoen', 52.376875, 4.845480, 'In park', 'img/BosenLommerplantsoen.jpg'],
    ['Van Kinsbergenstraat', 52.368553, 4.858382, 'tussen huizen', 'img/VanKinsbergenstraat.jpg'],
    ['Postjesweg', 52.364599, 4.859465, 'Naast schakelkast', 'img/Postjesweg.jpg'],
    ['Lootsstraat', 52.362863, 4.861788, 'Op klein speelplaatsje', 'img/Lootsstraat.jpg'],



    /* Groningen */
    ['Onderdendamsterweg', 53.334536, 6.515485, 'Aan het water, tegenover Albert Heijn'],


    /* Drenthe */
    ['Hoofdstraat', 52.724429, 6.477596, 'Bij kunstwerk "De Bijenkorf", voor de kerk', 'img/Hoofdstraat.jpg'],

    /* Zeeland */
    ['Oude Koudekerkseweg', 51.495665, 3.603001, 'Aan het begin van de straat, bij het kruispunt', 'img/OudeKoudekerkseweg.jpg'],
    ['Veerweg', 51.572160, 3.704299, 'Bij gebouw VVV Kamperland', 'img/Veerweg.jpg'],
    ['Bleekveld', 51.504199, 3.887744, 'Op plein met fonteintjes', 'img/Bleekveld.jpg'],

    /* Breda */
    ['Espakker', 51.607570, 4.813413, 'Naast fietspad, bij scholencomplex', 'img/Espakker.jpg'],
    ['Baliëndijk', 51.598884, 4.792108, 'op Kruispunt Baliëndijk-Zustersveld, Jumbo', 'img/Baliëndijk.jpg'],
    ['Bijster', 51.584224, 4.803563, 'Nabij skatebaan De Scharen'],
    ['Torendreef', 51.562137, 4.758126, 'Ingang bos bij kruispunt Burgemeester de Manlaan en Overaseweg', 'img/Torendreef.jpg'],
    ['Cimburgalaan', 51.574191, 4.773052, 'in speelplek Boeimeerpark', 'img/Cimburgalaan.jpg'],
    ['Dongense Baan', 51.602713, 4.832594, 'bij parkeerplaats', 'img/DongenseBaan.jpg'],
    ['Dorpstraat', 51.548784, 4.797853, 'Bij de Pekhoeve', 'img/DorpstraatUlvenhout.jpg'],
    ['Honderdbunder', 51.621941, 4.737836, 'nabij voetbalveldje en basisschool De Wildert (Twaalfbunder)', 'img/Honderdbunder.jpg'],
    ['Julianalaan', 51.579001, 4.768095, 'Speelplek in van Sonsbeeckpark', 'img/Julianalaan.jpg'],
    ['Kasteelplein', 51.590446, 4.776375, '', '']




];
console.log(JSON.stringify(locations));
/* Google maps */
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
            zoom: 8,
            center: new google.maps.LatLng(52.155172, 5.387201),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false
        });


        /* MARKERS */
        var infowindow = new google.maps.InfoWindow();
        var marker, i;
        for (i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                map: map
            });

            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {
                    infowindow.setContent(locations[i][0] + '<br>' + locations[i][3] + '<br><img src="' + locations[i][4] + '">');
                    infowindow.open(map, marker);
                }
            })(marker, i));
        }
        /* MARKERS END */
}
