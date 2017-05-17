var zoeken = document.getElementById("zoek");
var kiesProvincie = document.getElementById("kiesProvincie");
var provincies = document.getElementsByClassName("provincie");


var locations = [
    /****************
     * Zuid Holland
     */
    /* Katwijk */
    ['Noordduinseweg 5', 52.212322, 4.403093],
    ['Boulevard Zeezijde 3', 52.20949, 4.39726],
    ['Boulevard Zeezijde 7', 52.20819, 4.39629],
    ['Boulevard Zeezijde 9', 52.20720, 4.39556],
    ['Boulevard Zeezijde 11', 52.20621, 4.39499],
    ['Boulevard Zeezijde 15', 52.20552, 4.39436],
    ['Boulevard Zeezijde 17', 52.204486, 4.393355],
    ['Boulevard Zeezijde 19', 52.20447, 4.39335],
    ['Boulevard Zeezijde 21', 52.20371, 4.39270],
    ['Boulevard Zeezijde 23', 52.20318, 4.39222],
    ['Boulevard Zeezijde 25', 52.20247, 4.39170],
    ['Boulevard Zeezijde 29', 52.20087, 4.39054],
    ['Boulevard Zeezijde 39', 52.19991, 4.38894],
    ['Boulevard Zeezijde 43', 52.19819, 4.38729],
    ['Boulevard Zeezijde 47', 52.19662, 4.38606],
    ['Sportlaan TOP zuidduinen 3', 52.19524, 4.38709],
    ['Wassenaarseweg 152', 52.17502, 4.40172],

    /* Wassenaar */
    ['Wassenaarselag bij strandopgang 17', 52.16280, 4.34877],
    ['Wassenaarseslag bij hotel 26', 52.16080, 4.36273],
    ['Langstraat 37', 52.14398, 4.39342],
    ['Stadshoudersplein (op het plein) 26', 52.14485, 4.40405],
    ['Meijendelseweg 32', 52.12971, 4.34271],
    ['Meijendelseweg 42', 52.12904, 4.33308],

    /* Noordwijk & Noordwijkerhout & Oegstgeest */
    ['Koningin Astrid Boulevard 60', 52.23327, 4.42026],
    ['Bosweg 26', 52.25210, 4.43836],
    ['Leidsevaart 210 bij de Vogel of Fagel brug 210', 52.23659, 4.48326],
    ['Dorpstraat (Havenstraat 4)', 52.26241, 4.49289],
    ['Oosterduinen nr 26 bij de Corneliabrug', 52.28359, 4.51746],
    ['Klinkenbergerpad 1', 52.200530, 4.485321],

    /* Leiden */
    ['Parkzicht 102', 52.17808, 4.50924],
    ['Waterlelie Houtlaan 100', 52.17559, 4.48072],
    ['Nieuwe Marnixstraat 92', 52.16956, 4.49898],
    ['Tacitusstraat 1', 52.14901, 4.51643],
    ['Cronensteyn 3', 52.14421, 4.49909],
    ['Vlietweg (naast de entree Vogelhoff ) 68A', 52.13543, 4.47539],

    /* Den Haag */
    ['Zwarte Pad 60', 52.11861, 4.29159],
    ['Strandweg 187', 52.11716, 4.28621],
    ['van Alkemadelaan 403', 52.11085, 4.30422],
    ['Pompstationsweg 15', 52.10592, 4.30183],
    ['Kapelweg 35', 52.10580, 4.29018],
    ['Ruychrocklaan 496', 52.10410, 4.33025],
    ['Oude Waalsdorperweg 61', 52.11218, 4.32910],
    ['St. Hubertusweg 3', 52.09826, 4.30394],
    ['Kerkhoflaan 10', 52.09513, 4.29838],
    ['Ary van der Spuyweg 1', 52.09131, 4.29306],
    ['Ary van der Spuyweg 3', 52.09134, 4.29470],
    ['Hofzichtlaan 1', 52.10183, 4.35534],
    ['Clingendael 6', 52.10119, 4.33441],
    ['Isabellaland 259', 52.095, 4.368],
    ['Cromvlietkade 52', 52.06136, 4.34103],
    ['Tasmanstraat 133', 52.081, 4.291],
    ['Sirtemastraat 400', 52.07540, 4.29887],
    ['Jan van Riebeekstraat 222', 52.07937, 4.32811],
    ['Huijgenspark 47', 52.07324, 4.32176],
    ['Huijgenspark 60', 52.07330, 4.31923],
    ['Helena van Doeverenplantsoen 30', 52.07184, 4.30871],
    ['Teniersstraat 23', 52.06817, 4.30461],
    ['Snijdersstraat 2', 52.06694, 4.30118],
    ['Oranjeplein 113', 52.07114, 4.31452],
    ['Naaldwijksestraat 120', 52.06859, 4.31675],
    ['Albert Cuypstraat 9', 52.066993, 4.313199],
    ['Wieringsestraat 232', 52.09181, 4.25188],
    ['Strand Zuid 4', 52.08783, 4.24669],
    ['Duivelandsestraat 77', 52.08714, 4.25362],
    ['Laan van Poot 128', 52.08545, 4.26298],
    ['Segbroeklaan 400', 52.08167, 4.26673],
    ['Kwartellaan 56', 52.08132, 4.25039],
    ['Laan van Poot 320', 52.08256, 4.24709],
    ['Zuiderstrand 320', 52.08334, 4.24008],
    ['De Savornin Lohmanlaan 525', 52.07604, 4.23740],
    ['De Savornin Lohmanlaan 481', 52.07384, 4.23931],
    ['Daal en Bergselaan 60', 52.12904, 4.33308],
    ['De Savornin Lohmanpad 9A', 52.07791, 4.23216],
    ['Meer en Boslaan 114', 52.07212, 4.22396],
    ['Deltaplein 390', 52.06993, 4.22068],
    ['Heliotrooplaan 15', 52.06479, 4.22868],
    ['Heliotrooplaan 5', 52.06434, 4.23031],
    ['Schapenatjesduin 9', 52.06224, 4.22232],
    ['Wijndaelerduin 35', 52.06115, 4.21846],
    ['Jules Massenetstraat 10', 52.05982, 4.24258],
    ['Vreeswijkstraat 3', 52.05974, 4.28358],
    ['Henriëtte Roland Holstweg 15', 52.05870, 4.28870],
    ['Johanna Naberweg 5', 52.05597, 4.28759],
    ['Sara Burghartweg 93', 52.04949, 4.29189],
    ['Cromvlietkade 52', 52.06136, 4.34103],
    ['Loosduinse Hoofdplein 189', 52.05334, 4.23498],
    ['Willem III straat 70', 52.04980, 4.23586],
    ['Eekhoornrade 124', 52.04474, 4.25884],
    ['Pachtersdreef 108', 52.03390, 4.26226],
    ['Bogaardplein 32', 52.03561, 4.31600],
    ['Kerkstraat 64', 52.066731, 4.365746],
    ['Sluiskant 29', 52.080846, 4.399039],

    /* Zoetermeer */
    ['Abdissenbos 15', 52.05787, 4.47838],
    ['Dorpsstraat 111', 52.05552, 4.49873],
    ['Tasmanie 124', 52.05768, 4.53675],
    ['Plein van de Verenigde Naties 11', 52.04667, 4.47649],
    ['Kurkhout 100', 52.04428, 4.45865],
    ['Kerkstraat 2', 52.01087, 4.53007],
    ['Noordweg 79', 52.02565, 4.42202]
];



function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 9,
            center: new google.maps.LatLng(52.123, 4.321),
            mapTypeId: google.maps.MapTypeId.ROADMAP
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
                    infowindow.setContent(locations[i][0]);
                    infowindow.open(map, marker);
                }
            })(marker, i));
        }
        /* MARKERS END */
}
