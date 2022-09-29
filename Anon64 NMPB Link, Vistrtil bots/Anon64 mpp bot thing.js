// ==UserScript==
// @name Better Multiplayer Piano Script
// @namespace  http://www.multiplayerpiano.com/
// @version    0.0.5
// @description  Custom script for multiplayerpiano.com by electrashave. Made into a tampermonkey script for those who wish to use it
// @include http://www.multiplayerpiano.com/*
// @match http://www.multiplayerpiano.com/script.js
// @include http://www.ourworldofpixels.com/*
// @match http://www.ourworldofpixels.com/piano/script.js
// @match        http://mpp.meowbin.com/*
// @grant none
// @copyright electrashave 2017+
// ==/UserScript==
// !js name = 0;names = [];update_name = setInterval(function() {if(JSON.stringify(names) == "[]") return;updateName(names[name]);name = (name+1)%names.length},2100)
Date.prototype.allDate = function() {
    var time = "AM";
    var min = parseInt(this.getMinutes());
    var hours = parseInt(this.getHours());
    if(hours>=12) time = "PM";
    if(hours>=12) {hours-=12;}
    if(hours === 0) {hours += 12;}
    if(min<10) {min = "0"+min;}
    return this.getMonth()+1+"/"+this.getDate()+"/"+this.getFullYear()+" "+hours+":"+min+" "+time;
};
//TESTING








//TESTING
//MINING STUFF!!!
var miningDB = {};
function Mload() {
    miningDB = JSON.parse(localStorage.miningdb);
    return "Loaded!";
}
function Msave() {
    localStorage.miningdb = JSON.stringify(miningDB);
    return "Saved!"
}
//MINING STUFF!!!

var testing = true;
var notething = [];
var letters = [];
var games = 1;
var won = 1
var won7 = 1;
var games7 = 1;
var won101 = 1;
var games101 = 1;
var effect = false;
var lolwat = false;
var follow = false;
var DEFAULT_RADIUS = 7;
var NMPBvel = false;
var Psust = false;
var chat_buffer = [];
//setTimeout(function(){var chat_buffer = ["Starting up system...","Checking potato fields...","Applying mashed potato to cpu...","DONE! microwave set to 350 degrees."]},5000)
function sendChat2(msg) {
    msg.match(/.{1,508}/g).forEach(function(x, i) {
        if(x === "") return;
        if (i !== 0) x = x;
        chat_buffer.push(x);
    });
}


var isoLangs = {
    "ab": {
        "name": "Abkhaz",
        "nativeName": "аҧсуа"
    },
    "aa": {
        "name": "Afar",
        "nativeName": "Afaraf"
    },
    "af": {
        "name": "Afrikaans",
        "nativeName": "Afrikaans"
    },
    "ak": {
        "name": "Akan",
        "nativeName": "Akan"
    },
    "sq": {
        "name": "Albanian",
        "nativeName": "Shqip"
    },
    "am": {
        "name": "Amharic",
        "nativeName": "አማርኛ"
    },
    "ar": {
        "name": "Arabic",
        "nativeName": "العربية"
    },
    "an": {
        "name": "Aragonese",
        "nativeName": "Aragonés"
    },
    "hy": {
        "name": "Armenian",
        "nativeName": "Հայերեն"
    },
    "as": {
        "name": "Assamese",
        "nativeName": "অসমীয়া"
    },
    "av": {
        "name": "Avaric",
        "nativeName": "авар мацӀ, магӀарул мацӀ"
    },
    "ae": {
        "name": "Avestan",
        "nativeName": "avesta"
    },
    "ay": {
        "name": "Aymara",
        "nativeName": "aymar aru"
    },
    "az": {
        "name": "Azerbaijani",
        "nativeName": "azərbaycan dili"
    },
    "bm": {
        "name": "Bambara",
        "nativeName": "bamanankan"
    },
    "ba": {
        "name": "Bashkir",
        "nativeName": "башҡорт теле"
    },
    "eu": {
        "name": "Basque",
        "nativeName": "euskara, euskera"
    },
    "be": {
        "name": "Belarusian",
        "nativeName": "Беларуская"
    },
    "bn": {
        "name": "Bengali",
        "nativeName": "বাংলা"
    },
    "bh": {
        "name": "Bihari",
        "nativeName": "भोजपुरी"
    },
    "bi": {
        "name": "Bislama",
        "nativeName": "Bislama"
    },
    "bs": {
        "name": "Bosnian",
        "nativeName": "bosanski jezik"
    },
    "br": {
        "name": "Breton",
        "nativeName": "brezhoneg"
    },
    "bg": {
        "name": "Bulgarian",
        "nativeName": "български език"
    },
    "my": {
        "name": "Burmese",
        "nativeName": "ဗမာစာ"
    },
    "ca": {
        "name": "Catalan; Valencian",
        "nativeName": "Català"
    },
    "ch": {
        "name": "Chamorro",
        "nativeName": "Chamoru"
    },
    "ce": {
        "name": "Chechen",
        "nativeName": "нохчийн мотт"
    },
    "ny": {
        "name": "Chichewa; Chewa; Nyanja",
        "nativeName": "chiCheŵa, chinyanja"
    },
    "zh": {
        "name": "Chinese",
        "nativeName": "中文 (Zhōngwén), 汉语, 漢語"
    },
    "cv": {
        "name": "Chuvash",
        "nativeName": "чӑваш чӗлхи"
    },
    "kw": {
        "name": "Cornish",
        "nativeName": "Kernewek"
    },
    "co": {
        "name": "Corsican",
        "nativeName": "corsu, lingua corsa"
    },
    "cr": {
        "name": "Cree",
        "nativeName": "ᓀᐦᐃᔭᐍᐏᐣ"
    },
    "hr": {
        "name": "Croatian",
        "nativeName": "hrvatski"
    },
    "cs": {
        "name": "Czech",
        "nativeName": "česky, čeština"
    },
    "da": {
        "name": "Danish",
        "nativeName": "dansk"
    },
    "dv": {
        "name": "Divehi; Dhivehi; Maldivian;",
        "nativeName": "ދިވެހި"
    },
    "nl": {
        "name": "Dutch",
        "nativeName": "Nederlands, Vlaams"
    },
    "en": {
        "name": "English",
        "nativeName": "English"
    },
    "eo": {
        "name": "Esperanto",
        "nativeName": "Esperanto"
    },
    "et": {
        "name": "Estonian",
        "nativeName": "eesti, eesti keel"
    },
    "ee": {
        "name": "Ewe",
        "nativeName": "Eʋegbe"
    },
    "fo": {
        "name": "Faroese",
        "nativeName": "føroyskt"
    },
    "fj": {
        "name": "Fijian",
        "nativeName": "vosa Vakaviti"
    },
    "fi": {
        "name": "Finnish",
        "nativeName": "suomi, suomen kieli"
    },
    "fr": {
        "name": "French",
        "nativeName": "français, langue française"
    },
    "ff": {
        "name": "Fula; Fulah; Pulaar; Pular",
        "nativeName": "Fulfulde, Pulaar, Pular"
    },
    "gl": {
        "name": "Galician",
        "nativeName": "Galego"
    },
    "ka": {
        "name": "Georgian",
        "nativeName": "ქართული"
    },
    "de": {
        "name": "German",
        "nativeName": "Deutsch"
    },
    "el": {
        "name": "Greek, Modern",
        "nativeName": "Ελληνικά"
    },
    "gn": {
        "name": "Guaraní",
        "nativeName": "Avañeẽ"
    },
    "gu": {
        "name": "Gujarati",
        "nativeName": "ગુજરાતી"
    },
    "ht": {
        "name": "Haitian; Haitian Creole",
        "nativeName": "Kreyòl ayisyen"
    },
    "ha": {
        "name": "Hausa",
        "nativeName": "Hausa, هَوُسَ"
    },
    "he": {
        "name": "Hebrew (modern)",
        "nativeName": "עברית"
    },
    "hz": {
        "name": "Herero",
        "nativeName": "Otjiherero"
    },
    "hi": {
        "name": "Hindi",
        "nativeName": "हिन्दी, हिंदी"
    },
    "ho": {
        "name": "Hiri Motu",
        "nativeName": "Hiri Motu"
    },
    "hu": {
        "name": "Hungarian",
        "nativeName": "Magyar"
    },
    "ia": {
        "name": "Interlingua",
        "nativeName": "Interlingua"
    },
    "id": {
        "name": "Indonesian",
        "nativeName": "Bahasa Indonesia"
    },
    "ie": {
        "name": "Interlingue",
        "nativeName": "Originally called Occidental; then Interlingue after WWII"
    },
    "ga": {
        "name": "Irish",
        "nativeName": "Gaeilge"
    },
    "ig": {
        "name": "Igbo",
        "nativeName": "Asụsụ Igbo"
    },
    "ik": {
        "name": "Inupiaq",
        "nativeName": "Iñupiaq, Iñupiatun"
    },
    "io": {
        "name": "Ido",
        "nativeName": "Ido"
    },
    "is": {
        "name": "Icelandic",
        "nativeName": "Íslenska"
    },
    "it": {
        "name": "Italian",
        "nativeName": "Italiano"
    },
    "iu": {
        "name": "Inuktitut",
        "nativeName": "ᐃᓄᒃᑎᑐᑦ"
    },
    "ja": {
        "name": "Japanese",
        "nativeName": "日本語 (にほんご／にっぽんご)"
    },
    "jv": {
        "name": "Javanese",
        "nativeName": "basa Jawa"
    },
    "kl": {
        "name": "Kalaallisut, Greenlandic",
        "nativeName": "kalaallisut, kalaallit oqaasii"
    },
    "kn": {
        "name": "Kannada",
        "nativeName": "ಕನ್ನಡ"
    },
    "kr": {
        "name": "Kanuri",
        "nativeName": "Kanuri"
    },
    "ks": {
        "name": "Kashmiri",
        "nativeName": "कश्मीरी, كشميري"
    },
    "kk": {
        "name": "Kazakh",
        "nativeName": "Қазақ тілі"
    },
    "km": {
        "name": "Khmer",
        "nativeName": "ភាសាខ្មែរ"
    },
    "ki": {
        "name": "Kikuyu, Gikuyu",
        "nativeName": "Gĩkũyũ"
    },
    "rw": {
        "name": "Kinyarwanda",
        "nativeName": "Ikinyarwanda"
    },
    "ky": {
        "name": "Kirghiz, Kyrgyz",
        "nativeName": "кыргыз тили"
    },
    "kv": {
        "name": "Komi",
        "nativeName": "коми кыв"
    },
    "kg": {
        "name": "Kongo",
        "nativeName": "KiKongo"
    },
    "ko": {
        "name": "Korean",
        "nativeName": "한국어 (韓國語), 조선말 (朝鮮語)"
    },
    "ku": {
        "name": "Kurdish",
        "nativeName": "Kurdî, كوردی"
    },
    "kj": {
        "name": "Kwanyama, Kuanyama",
        "nativeName": "Kuanyama"
    },
    "la": {
        "name": "Latin",
        "nativeName": "latine, lingua latina"
    },
    "lb": {
        "name": "Luxembourgish, Letzeburgesch",
        "nativeName": "Lëtzebuergesch"
    },
    "lg": {
        "name": "Luganda",
        "nativeName": "Luganda"
    },
    "li": {
        "name": "Limburgish, Limburgan, Limburger",
        "nativeName": "Limburgs"
    },
    "ln": {
        "name": "Lingala",
        "nativeName": "Lingála"
    },
    "lo": {
        "name": "Lao",
        "nativeName": "ພາສາລາວ"
    },
    "lt": {
        "name": "Lithuanian",
        "nativeName": "lietuvių kalba"
    },
    "lu": {
        "name": "Luba-Katanga",
        "nativeName": ""
    },
    "lv": {
        "name": "Latvian",
        "nativeName": "latviešu valoda"
    },
    "gv": {
        "name": "Manx",
        "nativeName": "Gaelg, Gailck"
    },
    "mk": {
        "name": "Macedonian",
        "nativeName": "македонски јазик"
    },
    "mg": {
        "name": "Malagasy",
        "nativeName": "Malagasy fiteny"
    },
    "ms": {
        "name": "Malay",
        "nativeName": "bahasa Melayu, بهاس ملايو"
    },
    "ml": {
        "name": "Malayalam",
        "nativeName": "മലയാളം"
    },
    "mt": {
        "name": "Maltese",
        "nativeName": "Malti"
    },
    "mi": {
        "name": "Māori",
        "nativeName": "te reo Māori"
    },
    "mr": {
        "name": "Marathi (Marāṭhī)",
        "nativeName": "मराठी"
    },
    "mh": {
        "name": "Marshallese",
        "nativeName": "Kajin M̧ajeļ"
    },
    "mn": {
        "name": "Mongolian",
        "nativeName": "монгол"
    },
    "na": {
        "name": "Nauru",
        "nativeName": "Ekakairũ Naoero"
    },
    "nv": {
        "name": "Navajo, Navaho",
        "nativeName": "Diné bizaad, Dinékʼehǰí"
    },
    "nb": {
        "name": "Norwegian Bokmål",
        "nativeName": "Norsk bokmål"
    },
    "nd": {
        "name": "North Ndebele",
        "nativeName": "isiNdebele"
    },
    "ne": {
        "name": "Nepali",
        "nativeName": "नेपाली"
    },
    "ng": {
        "name": "Ndonga",
        "nativeName": "Owambo"
    },
    "nn": {
        "name": "Norwegian Nynorsk",
        "nativeName": "Norsk nynorsk"
    },
    "no": {
        "name": "Norwegian",
        "nativeName": "Norsk"
    },
    "ii": {
        "name": "Nuosu",
        "nativeName": "ꆈꌠ꒿ Nuosuhxop"
    },
    "nr": {
        "name": "South Ndebele",
        "nativeName": "isiNdebele"
    },
    "oc": {
        "name": "Occitan",
        "nativeName": "Occitan"
    },
    "oj": {
        "name": "Ojibwe, Ojibwa",
        "nativeName": "ᐊᓂᔑᓈᐯᒧᐎᓐ"
    },
    "cu": {
        "name": "Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic",
        "nativeName": "ѩзыкъ словѣньскъ"
    },
    "om": {
        "name": "Oromo",
        "nativeName": "Afaan Oromoo"
    },
    "or": {
        "name": "Oriya",
        "nativeName": "ଓଡ଼ିଆ"
    },
    "os": {
        "name": "Ossetian, Ossetic",
        "nativeName": "ирон æвзаг"
    },
    "pa": {
        "name": "Panjabi, Punjabi",
        "nativeName": "ਪੰਜਾਬੀ, پنجابی"
    },
    "pi": {
        "name": "Pāli",
        "nativeName": "पाऴि"
    },
    "fa": {
        "name": "Persian",
        "nativeName": "فارسی"
    },
    "pl": {
        "name": "Polish",
        "nativeName": "polski"
    },
    "ps": {
        "name": "Pashto, Pushto",
        "nativeName": "پښتو"
    },
    "pt": {
        "name": "Portuguese",
        "nativeName": "Português"
    },
    "qu": {
        "name": "Quechua",
        "nativeName": "Runa Simi, Kichwa"
    },
    "rm": {
        "name": "Romansh",
        "nativeName": "rumantsch grischun"
    },
    "rn": {
        "name": "Kirundi",
        "nativeName": "kiRundi"
    },
    "ro": {
        "name": "Romanian, Moldavian, Moldovan",
        "nativeName": "română"
    },
    "ru": {
        "name": "Russian",
        "nativeName": "русский язык"
    },
    "sa": {
        "name": "Sanskrit (Saṁskṛta)",
        "nativeName": "संस्कृतम्"
    },
    "sc": {
        "name": "Sardinian",
        "nativeName": "sardu"
    },
    "sd": {
        "name": "Sindhi",
        "nativeName": "सिन्धी, سنڌي، سندھی"
    },
    "se": {
        "name": "Northern Sami",
        "nativeName": "Davvisámegiella"
    },
    "sm": {
        "name": "Samoan",
        "nativeName": "gagana faa Samoa"
    },
    "sg": {
        "name": "Sango",
        "nativeName": "yângâ tî sängö"
    },
    "sr": {
        "name": "Serbian",
        "nativeName": "српски језик"
    },
    "gd": {
        "name": "Scottish Gaelic; Gaelic",
        "nativeName": "Gàidhlig"
    },
    "sn": {
        "name": "Shona",
        "nativeName": "chiShona"
    },
    "si": {
        "name": "Sinhala, Sinhalese",
        "nativeName": "සිංහල"
    },
    "sk": {
        "name": "Slovak",
        "nativeName": "slovenčina"
    },
    "sl": {
        "name": "Slovene",
        "nativeName": "slovenščina"
    },
    "so": {
        "name": "Somali",
        "nativeName": "Soomaaliga, af Soomaali"
    },
    "st": {
        "name": "Southern Sotho",
        "nativeName": "Sesotho"
    },
    "es": {
        "name": "Spanish; Castilian",
        "nativeName": "español, castellano"
    },
    "su": {
        "name": "Sundanese",
        "nativeName": "Basa Sunda"
    },
    "sw": {
        "name": "Swahili",
        "nativeName": "Kiswahili"
    },
    "ss": {
        "name": "Swati",
        "nativeName": "SiSwati"
    },
    "sv": {
        "name": "Swedish",
        "nativeName": "svenska"
    },
    "ta": {
        "name": "Tamil",
        "nativeName": "தமிழ்"
    },
    "te": {
        "name": "Telugu",
        "nativeName": "తెలుగు"
    },
    "tg": {
        "name": "Tajik",
        "nativeName": "тоҷикӣ, toğikī, تاجیکی"
    },
    "th": {
        "name": "Thai",
        "nativeName": "ไทย"
    },
    "ti": {
        "name": "Tigrinya",
        "nativeName": "ትግርኛ"
    },
    "bo": {
        "name": "Tibetan Standard, Tibetan, Central",
        "nativeName": "བོད་ཡིག"
    },
    "tk": {
        "name": "Turkmen",
        "nativeName": "Türkmen, Түркмен"
    },
    "tl": {
        "name": "Tagalog",
        "nativeName": "Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔"
    },
    "tn": {
        "name": "Tswana",
        "nativeName": "Setswana"
    },
    "to": {
        "name": "Tonga (Tonga Islands)",
        "nativeName": "faka Tonga"
    },
    "tr": {
        "name": "Turkish",
        "nativeName": "Türkçe"
    },
    "ts": {
        "name": "Tsonga",
        "nativeName": "Xitsonga"
    },
    "tt": {
        "name": "Tatar",
        "nativeName": "татарча, tatarça, تاتارچا"
    },
    "tw": {
        "name": "Twi",
        "nativeName": "Twi"
    },
    "ty": {
        "name": "Tahitian",
        "nativeName": "Reo Tahiti"
    },
    "ug": {
        "name": "Uighur, Uyghur",
        "nativeName": "Uyƣurqə, ئۇيغۇرچە"
    },
    "uk": {
        "name": "Ukrainian",
        "nativeName": "українська"
    },
    "ur": {
        "name": "Urdu",
        "nativeName": "اردو"
    },
    "uz": {
        "name": "Uzbek",
        "nativeName": "zbek, Ўзбек, أۇزبېك"
    },
    "ve": {
        "name": "Venda",
        "nativeName": "Tshivenḓa"
    },
    "vi": {
        "name": "Vietnamese",
        "nativeName": "Tiếng Việt"
    },
    "vo": {
        "name": "Volapük",
        "nativeName": "Volapük"
    },
    "wa": {
        "name": "Walloon",
        "nativeName": "Walon"
    },
    "cy": {
        "name": "Welsh",
        "nativeName": "Cymraeg"
    },
    "wo": {
        "name": "Wolof",
        "nativeName": "Wollof"
    },
    "fy": {
        "name": "Western Frisian",
        "nativeName": "Frysk"
    },
    "xh": {
        "name": "Xhosa",
        "nativeName": "isiXhosa"
    },
    "yi": {
        "name": "Yiddish",
        "nativeName": "ייִדיש"
    },
    "yo": {
        "name": "Yoruba",
        "nativeName": "Yorùbá"
    },
    "za": {
        "name": "Zhuang, Chuang",
        "nativeName": "Saɯ cueŋƅ, Saw cuengh"
    }
};
var nyancat = [

    "░░░░░░░▄▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▄░░░░░░",
    "░░░░░░█░░▄▀▀▀▀▀▀▀▀▀▀▀▀▀▄░░█░░░░░",
    "░░░░░░█░█░▀░░░░░▀░░▀░░░░█░█░░░░░",
    "░░░░░░█░█░░░░░░░░▄▀▀▄░▀░█░█▄▀▀▄░",
    "█▀▀█▄░█░█░░▀░░░░░█░░░▀▄▄█▄▀░░░█░",
    "▀▄▄░▀██░█▄░▀░░░▄▄▀░░░░░░░░░░░░▀▄",
    "░░▀█▄▄█░█░░░░▄░░█░░░▄█░░░▄░▄█░░█",
    "░░░░░▀█░▀▄▀░░░░░█░██░▄░░▄░░▄░███",
    "░░░░░▄█▄░░▀▀▀▀▀▀▀▀▄░░▀▀▀▀▀▀▀░▄▀░",
    "░░░░█░░▄█▀█▀▀█▀▀▀▀▀▀█▀▀█▀█▀▀█░░░",
    "░░░░▀▀▀▀░░▀▀▀░░░░░░░░▀▀▀░░▀▀░░░░"
];
var gSoundPath = "/mp3/";
var gSoundExt = ".wav.mp3";

String.prototype.formatUnicode = function() {
    let abcs = {
        "0": ["０", "0", "₀", "⁰", "ᅙ"],
        "1": ["１", "1", "₁", "¹", "߁", "⑴", "①"],
        "2": ["２", "2", "ƻ", "₂", "²", "ϩ", "⑵", "②", "ᆯ", "Զ"],
        "3": ["３", "3", "ӟ", "₃", "³", "Ӡ", "З", "⑶", "③", "Յ"],
        "4": ["４", "4", "₄", "⁴", "५", "⑷", "④", "Վ"],
        "5": ["５", "5", "₅", "⁵", "Ƽ", "⑸", "⑤"],
        "6": ["６", "6", "₆", "⁶", "Ϭ", "⑹", "⑥"],
        "7": ["７", "7", "₇", "⁷", "子", "⑺", "⑦", "ᆨ", "Դ"],
        "8": ["８", "8", "₈", "⁸", "⑻", "⑧", "Ց"],
        "9": ["９", "9", "₉", "⁹", "९", "⑼", "⑨", "Գ"],
        "a": ["ａ", "á", "ﾑ", "ค", "α", "а", "ል", "ä", "ᴀ", "Ⱥ", "ₐ", "ᵃ", "a", "ą", "ᗩ", "å", "ʌ", "ƛ", "⒜", "ⓐ", "Λ", "ᾄ", "ձ", "𝒜", "მ", "ǟ", "Â", "Թ", "λ", "ª", "Ǟ", "Æ"],
        "b": ["ｂ", "b", "乃", "๒", "в", "ъ", "ጌ", "ḅ", "ʙ", "ƀ", "ᵇ", "ҍ", "ᕊ", "♭", "ß", "Ь", "Ъ", "Ɓ", "⒝", "ⓑ", "ᗷ", "ᙖ", "Ⴆ", "ɓ", "β", "๖", "ჩ", "ც", "ɮ", "ƅ", "Б", "Յ", "Ϧ", "þ"],
        "c": ["ｃ", "ć", "c", "ƈ", "¢", "ς", "с", "ር", "ċ", "ᴄ", "ȼ", "ᶜ", "ↄ", "ç", "ᑕ", "ḉ", "Ƈ", "⒞", "ⓒ", "ᙅ", "ζ", "८", "Ĉ", "Ͼ", "Շ", "Ȼ", "ㄈ", "ट", "©"],
        "d": ["ｄ", "d", "ɗ", "∂", "๔", "ↁ", "ዕ", "ḋ", "ᴅ", "đ", "ᵈ", "ժ", "ᖙ", "ᕍ", "ⅾ", "⒟", "ⓓ", "ᗪ", "Ɗ", "ԃ", "D", "Ð", "ɔ", "δ", "໓", "ძ", "ɖ", "Ժ", "ð", "Þ"],
        "e": ["е", "ｅ", "é", "乇", "ﻉ", "є", "э", "ቿ", "ë", "ᴇ", "ɇ", "ₑ", "ᵉ", "ɘ", "ҽ", "ᙓ", "ℯ", "ε", "e", "૯", "⒠", "ⓔ", "ᕮ", "Є", "Ɛ", "ἔ", "ē", "ɛ", "£", "Ξ", "ȝ", "€", "È", "ę", "E"],
        "f": ["ｆ", "f", "ｷ", "ि", "ƒ", "Ŧ", "ቻ", "ḟ", "ꜰ", "ᶠ", "ꟻ", "ℱ", "ғ", "⒡", "ⓕ", "ᖴ", "Ƒ", "ϝ", "F", "∱", "բ", "Բ", "ʄ", "ʃ"],
        "g": ["ｇ", "ǵ", "g", "ﻭ", "ﻮ", "Б", "ኗ", "ġ", "ɢ", "ǥ", "ᵍ", "ց", "ᘐ", "ℊ", "❡", "ʛ", "⒢", "ⓖ", "G", "ᘜ", "Ɠ", "ɠ", "Ǥ", "ĝ", "ງ", "૭", "Գ", "Ģ", "૬", "ζ"],
        "h": ["ｈ", "h", "ん", "ɦ", "н", "ђ", "Ђ", "ዘ", "ḧ", "ʜ", "ħ", "ₕ", "ʰ", "հ", "ᖺ", "♄", "ℎ", "Ӈ", "⒣", "ⓗ", "ᕼ", "ԋ", "Ĥ", "ɧ", "Һ", "Ħ", "৸"],
        "i": ["ｉ", "í", "ﾉ", "ٱ", "ι", "เ", "і", "ጎ", "ï", "ɪ", "ɨ", "ᵢ", "ⁱ", "i", "ì", "ᓰ", "☤", "ḯ", "ℑ", "ї", "ί", "⒤", "ⓘ", "I", "ᶤ", "Ī", "ı", "ἷ", "ﻨ", "ἶ", "ɿ", "ĩ", "ł", "¡", "Î", "Ї"],
        "j": ["ｊ", "j", "ﾌ", "ﻝ", "נ", "ן", "ј", "ጋ", "ᴊ", "ɉ", "ⱼ", "ʲ", "ʝ", "ᒎ", "ʆ", "⒥", "ⓙ", "ᒍ", "Ĵ", "ว", "յ", "ʖ", "ĵ", "¿"],
        "k": ["Ⱪ", "ｋ", "ḱ", "ズ", "ᛕ", "к", "ጕ", "ḳ", "ᴋ", "ꝁ", "ₖ", "ᵏ", "k", "ҟ", "ķ", "Ƙ", "⒦", "ⓚ", "K", "ĸ", "ƙ", "Ҡ", "κ", "ќ", "ҡ", "қ", "ӄ", "Қ", "К", "Κ"],
        "l": ["ｌ", "ĺ", "ﾚ", "ɭ", "ℓ", "l", "ረ", "ḷ", "Ƚ", "ʟ", "ł", "ₗ", "ˡ", "Ӏ", "ᒪ", "ǀ", "ʅ", "Լ", "⒧", "ⓛ", "Ɩ", "Ŀ", "Ն", "Ł", "ι", "|", "Ļ", "ᄂ"],
        "m": ["ｍ", "ḿ", "ﾶ", "๓", "м", "ጠ", "ṁ", "ᴍ", "m", "ₘ", "ᵐ", "ʍ", "ᙢ", "ღ", "ɱ", "⒨", "ⓜ", "ᗰ", "ᙏ", "M", "ᄊ", "ო", "♏", "௱"],
        "n": ["ｎ", "ń", "刀", "ก", "η", "ภ", "и", "ክ", "ṅ", "ɴ", "n", "ₙ", "ⁿ", "ᴎ", "ղ", "ﬡ", "ᾔ", "ท", "ɲ", "й", "Ɲ", "⒩", "ⓝ", "ᑎ", "ɳ", "ᶰ", "И", "ᾗ", "п", "ŋ", "π", "ຖ", "ռ", "Ո", "ה", "Л", "Ռ", "ñ", "П", "Ñ"],
        "o": ["ｏ", "ő", "o", "ѻ", "σ", "๏", "о", "ዐ", "ö", "ᴏ", "ø", "ₒ", "ᵒ", "օ", "ᗢ", "☺", "◎", "ѳ", "ō", "ơ", "ℴ", "Ơ", "⒪", "ⓞ", "O", "♡", "ὄ", "Ծ", "໐", "૦", "Ø", "⊕", "Ф", "Θ", "¤", "◊", "Φ"],
        "p": ["ｐ", "ṕ", "ｱ", "ρ", "ק", "р", "የ", "ṗ", "ᴩ", "ᵽ", "ₚ", "ᵖ", "p", "ք", "ᕈ", "℘", "Ƥ", "⒫", "ⓟ", "ᑭ", "թ", "Ṗ", "ῥ", "þ", "ր", "ƿ", "P", "ƥ", "Þ", "Ƿ", "Р"],
        "q": ["ｑ", "q", "۹", "ợ", "ዒ", "ꝗ", "զ", "ᕋ", "ⓠ", "ǫ", "ϙ", "Ƣ", "⒬", "ᑫ", "ᵠ", "Ҩ", "ҩ", "φ", "๑", "գ", "Ω", "ƣ", "Ǫ", "ƍ", "Ø"],
        "r": ["ｒ", "ŕ", "尺", "ɼ", "я", "г", "ѓ", "ዪ", "ṛ", "ʀ", "ɍ", "ᵣ", "ʳ", "ᴙ", "ɾ", "ᖇ", "ґ", "ℜ", "r", "Ʀ", "⒭", "ⓡ", "Ŕ", "ŗ", "Ր", "R", "Я", "ર", "®", "Ґ"],
        "s": ["ｓ", "ś", "丂", "ร", "ѕ", "ነ", "ṡ", "ꜱ", "s", "ₛ", "ˢ", "ꙅ", "ʂ", "ᔕ", "﹩", "ṧ", "ƨ", "ş", "Ƨ", "⒮", "ⓢ", "S", "š", "ṩ", "ㄎ", "$", "Ş", "ς", "ֆ", "Տ", "Ș", "ら", "Š"],
        "t": ["ｔ", "t", "ｲ", "Շ", "т", "ፕ", "ẗ", "ᴛ", "ŧ", "ₜ", "ᵗ", "է", "♈", "ƭ", "ℸ", "⒯", "ⓣ", "T", "Ƭ", "ƚ", "ҭ", "†", "੮", "ȶ", "Ŧ", "Ե", "τ", "Ť", "⊥", "Ʈ"],
        "u": ["ｕ", "ú", "u", "પ", "υ", "ย", "ц", "ሁ", "ü", "ᴜ", "ᵾ", "ᵤ", "ᵘ", "U", "մ", "⋒", "ᘎ", "μ", "Ʋ", "⒰", "ⓤ", "ᑌ", "ᙀ", "Ʊ", "ὗ", "Ц", "ų", "น", "ս", "ʊ", "Ū", "Մ", "µ"],
        "v": ["ｖ", "v", "√", "۷", "ν", "ש", "ሀ", "ṿ", "ᴠ", "ᵥ", "ᵛ", "ѵ", "Ⅴ", "ᐯ", "ṽ", "Ɣ", "⒱", "ⓥ", "ʋ", "Ѵ", "Џ", "υ", "ง", "౮", "V", "∀", "ע", "¥"],
        "w": ["ｗ", "ẃ", "w", "ฝ", "ω", "ฬ", "ш", "ሠ", "ẅ", "ᴡ", "ʷ", "ա", "ᙡ", "ᗯ", "ẘ", "Ɯ", "⒲", "ⓦ", "ᙎ", "ɯ", "Ѡ", "ᾧ", "Щ", "щ", "ຟ", "Ш", "ώ"],
        "x": ["ｘ", "x", "ﾒ", "ซ", "χ", "א", "х", "ሸ", "ẍ", "ₓ", "ˣ", "×", "ϰ", "✄", "Ҳ", "⒳", "ⓧ", "᙭", "Ӿ", "ẋ", "ჯ", "૪", "Ӽ", "X", "ҳ", "Ж", "Ճ", "Χ", "ж"],
        "y": ["ｙ", "ӳ", "ﾘ", "ץ", "у", "Ў", "ሃ", "ÿ", "y", "ɏ", "ʸ", "վ", "Ꭹ", "¥", "ƴ", "ɣ", "Ƴ", "⒴", "ⓨ", "Y", "ყ", "ч", "ẏ", "γ", "ψ", "ฯ", "ע", "ʏ", "￥", "Џ", "Վ", "ϓ", "Ϥ", "ý"],
        "z": ["ｚ", "ź", "乙", "չ", "z", "ጊ", "ż", "ᴢ", "ƶ", "ᶻ", "Հ", "ᔓ", "ℨ", "ẕ", "Ȥ", "⒵", "ⓩ", "ᘔ", "ȥ", "Z", "ẓ", "ຊ", "২", "ઽ", "ʐ", "Ẕ", "Ẑ", "ւ", "շ"],
        "A": ["Ａ", "Á", "Д", "Ä", "ᴬ", "A", "∀", "Ѧ", "Δ", "λ", "Λ", "Ⓐ", "ᗩ", "ƛ", "ค", "ᾋ", "ﾑ", "α", "ձ", "Â", "Թ", "Æ", "Ǟ"],
        "B": ["Ｂ", "B", "Ḅ", "Ƀ", "ᴮ", "β", "ᗷ", "ℬ", "฿", "Ⓑ", "ᙖ", "Ɓ", "๒", "ß", "ϐ", "乃", "๖", "ъ", "ɓ", "Б", "Յ", "в", "þ"],
        "C": ["Ｃ", "Ć", "Ҁ", "Ċ", "Ȼ", "C", "Ↄ", "↻", "ᙅ", "ℭ", "☾", "ℂ", "Ⓒ", "ᑕ", "Ƈ", "ς", "ᶜ", "ζ", "c", "¢", "ƈ", "Ĉ", "Ͼ", "Շ", "©", "ट"],
        "D": ["Ｄ", "D", "Ḋ", "Đ", "ᴰ", "Ꭰ", "ᗪ", "Ḏ", "Ɗ", "Ⓓ", "๔", "Ɖ", "Ð", "δ", "໓", "ժ", "Ժ"],
        "E": ["Ｅ", "É", "Є", "Ё", "Ɇ", "ᴱ", "Ǝ", "Ɛ", "ᕮ", "ℰ", "€", "E", "ℇ", "Ⓔ", "ᙓ", "є", "Ἕ", "乇", "ε", "ē", "£", "Ξ", "ȝ", "ę"],
        "F": ["Ｆ", "F", "Ḟ", "Ƒ", "℉", "Ⓕ", "ᖴ", "Ŧ", "ᶠ", "Ғ", "ｷ", "f", "բ", "ƒ", "Բ"],
        "G": ["Ｇ", "Ǵ", "Ġ", "Ǥ", "G", "ᴳ", "Ɠ", "Ḡ", "Ꮆ", "Ⓖ", "ᘜ", "ɠ", "ĝ", "ງ", "ց", "ɢ", "Գ", "g", "ζ", "ﻮ"],
        "H": ["Ｈ", "H", "Н", "Ḧ", "Ħ", "ᴴ", "Ƕ", "ᕼ", "ℋ", "ℍ", "Ⓗ", "Ӈ", "ђ", "Ĥ", "Ἤ", "ん", "h", "հ", "ɦ", "ɧ", "৸"],
        "I": ["Ｉ", "І", "Ї", "Ɨ", "ᴵ", "I", "į", "ᓮ", "ℐ", "Ⓘ", "ǀ", "Ɩ", "เ", "Ī", "Ἷ", "ﾉ", "ι", "i", "ﻨ", "ĩ", "ł", "ɿ", "Ï"],
        "J": ["Ｊ", "J", "Ј", "Ɉ", "ᴶ", "ل", "Ⓙ", "ᒍ", "ʆ", "ן", "Ĵ", "ﾌ", "j", "ว", "յ", "ʖ", "ʝ", "¿"],
        "K": ["Ｋ", "Ḱ", "Ќ", "Ḳ", "Ꝁ", "ᴷ", "K", "Ҡ", "К", "Ⓚ", "Ƙ", "к", "ズ", "κ", "k", "ĸ", "Қ", "ƙ"],
        "L": ["Ｌ", "Ĺ", "L", "Ḷ", "Ł", "ᴸ", "⅃", "Ꝉ", "Ḻ", "ℒ", "Ⓛ", "ᒪ", "Լ", "l", "Ŀ", "ﾚ", "ʅ", "|", "ᄂ"],
        "M": ["Ｍ", "Ḿ", "М", "Ṁ", "M", "ᴹ", "Ɱ", "ᗰ", "ℳ", "♏", "Ⓜ", "ᙏ", "๓", "Ṃ", "ᄊ", "ʍ", "ო", "ɱ"],
        "N": ["Ｎ", "Ń", "И", "Ṅ", "N", "ᴺ", "ហ", "ᘉ", "ℵ", "ℕ", "Ň", "Ⓝ", "ᑎ", "Ɲ", "ภ", "刀", "π", "ຖ", "ռ", "ה", "Л", "Ռ", "Ñ", "П"],
        "O": ["Ｏ", "Ő", "Ф", "Ö", "Ø", "ᴼ", "O", "ට", "〇", "☮", "Ѻ", "ϴ", "О", "Ⓞ", "Ơ", "๏", "♡", "Ὃ", "Ծ", "ø", "໐", "օ", "Φ", "Θ"],
        "P": ["Ｐ", "Ṕ", "Р", "Ṗ", "Ᵽ", "ᴾ", "ꟼ", "φ", "ᖘ", "ℙ", "P", "Ⓟ", "ᑭ", "Ƥ", "թ", "ｱ", "ρ", "p", "þ", "Ƿ", "ק"],
        "Q": ["Ｑ", "Q", "Ꝗ", "Ҩ", "Ⴓ", "ℚ", "Ⓠ", "ᑫ", "Ƣ", "ợ", "ᵠ", "φ", "๑", "զ", "Ǫ", "q", "Ø"],
        "R": ["Ｒ", "Ŕ", "Я", "Ṛ", "Ɍ", "ᴿ", "འ", "ℝ", "ℛ", "Ř", "R", "Ⓡ", "ᖇ", "Ʀ", "г", "Ȓ", "尺", "r", "Ր", "®", "Ґ"],
        "S": ["Ｓ", "Ѕ", "Ṡ", "S", "Ꙅ", "Ϛ", "ϟ", "₴", "Տ", "∫", "Ⓢ", "ᔕ", "Ƨ", "ร", "ˢ", "Ṩ", "ㄎ", "$", "Ş", "§", "s", "Š"],
        "T": ["Ｔ", "T", "Г", "Ṫ", "ᵀ", "Ͳ", "☂", "✝", "Ƭ", "Ⓣ", "t", "Ҭ", "ｲ", "†", "է", "ƚ", "Ŧ", "Ե", "Ʈ", "τ"],
        "U": ["Ｕ", "Ű", "Ц", "Ü", "ᵁ", "Ա", "ᘮ", "Ṳ", "Ữ", "Ⓤ", "ᑌ", "ᙀ", "U", "Ʋ", "ย", "Ʊ", "Ȗ", "u", "น", "ս", "Ū", "Մ", "µ", "υ"],
        "V": ["Ｖ", "V", "Ṿ", "ⱽ", "Ỽ", "✔", "Ṽ", "Ѵ", "Ⓥ", "ᐯ", "Ʋ", "Ɣ", "v", "ᵛ", "Џ", "υ", "ง", "ν", "ע", "¥", "ש"],
        "W": ["Ｗ", "Ẃ", "Щ", "Ẅ", "W", "ᵂ", "చ", "Ш", "Ŵ", "Ⓦ", "ᗯ", "ᙎ", "Ɯ", "ฬ", "Ѡ", "ω", "ຟ", "ա", "w"],
        "X": ["Ｘ", "X", "Ж", "Ẍ", "ჯ", "᙭", "✕", "卐", "Ⓧ", "Ҳ", "x", "ᵡ", "Ӿ", "Ẋ", "ﾒ", "χ", "×", "Ճ", "ж", "א"],
        "Y": ["Ｙ", "Ӳ", "Ч", "Ÿ", "Y", "Ɏ", "Ӌ", "ϒ", "Ẏ", "У", "Ⓨ", "Ƴ", "ץ", "ᵞ", "Ὓ", "ﾘ", "ψ", "ฯ", "ყ", "￥", "¥", "Џ", "Վ", "y"],
        "Z": ["Ｚ", "Ź", "Z", "Ż", "Ƶ", "ɀ", "Ẑ", "ℤ", "Ⓩ", "ᘔ", "Ȥ", "z", "ᶻ", "Ẕ", "乙", "ຊ", "২", "Հ", "ւ", "շ"],
        "~": ["~"],
        "!": ["！", "﹗", "❣", "‼", "!", "ᵎ"],
        "@": ["＠", "﹫", "@"],
        "#": ["＃", "﹟", "#", "♯"],
        "$": ["＄", "$"],
        "%": ["％", "%"],
        "^": ["^"],
        "&": ["＆", "﹠", "&"],
        "*": ["＊", "﹡", "●", "*", "⊛"],
        "(": ["（", "﹙", "(", "⁽"],
        ")": ["）", "﹚", "ϡ", ")", "⁾"],
        "_": ["_", "▂"],
        "+": ["＋", "﹢", "☩", "✜", "+", "⊕", "⁺"],
        "-": ["－", "﹣", "✏", "➸", "-", "⊖", "⁻"],
        "=": ["＝", "=", "≕", "♒", "⊜"],
        "[": ["["],
        "]": ["]"],
        "\\": ["\\", "⦸"],
        "{": ["{"],
        "}": ["}"],
        "|": ["|", "⦶"],
        ";": ["；", ";"],
        "'": ["＇", "·", "‷", "❝", "'"],
        ":": ["：", "﹕", ":"],
        "\"": ["\"", "❞", "‴", "＂"],
        "<": ["<", "«", "⧀"],
        ">": [">", "⧁"],
        "?": ["？", "﹖", "⁇", "?", "ˀ"],
        ",": ["，", "﹐", ",", "˒"],
        ".": ["．", ".", "▣", "▪", "⨀", "ˑ"],
        "/": ["／", "/", "⊘"]
    };
    return this.split("").reduce(function(a, b, c) {
        let tmp = Object.keys(abcs).filter(x => abcs[x].indexOf(b) !== -1);
        let char = tmp[0] || b;
        a += char;
        return a;
    }, "");
};

function makeButton(name, id, row, column, func) {
    var midiDiv = document.getElementById("midi-btn");
    var btncln = midiDiv.cloneNode(true);
    btncln.textContent = name;
    btncln.id = id;
    btncln.onclick = func;
    var style = document.createElement('style');
    style.type = 'text/css';
    var rowpx = 300 + 120 * row;
    var colpx = 4 + 28 * column;
    style.innerHTML = '#' + id + ' { position: absolute; left: ' + rowpx + 'px; top: ' + colpx + 'px; }';
    document.getElementsByTagName('head')[0].appendChild(style);
    document.getElementById("bottom").children[0].appendChild(btncln);
}

function reset() {
    MPP.chat.send("Resetting proxy settings.");
    L.echo = 1;
    L.echos = 1;
}

//! ISC (c) Chacha-26
void(function(targets, methods) {
    for (const method of methods) {
        let name;
        if (typeof method === 'function') {
            name = method.name;
        } else if (Array.isArray(method) && method.length === 2) {
            name = method[0];
        } else {
            throw new TypeError('Invalid type for method name');
        }
        const descriptor = {
            value: method,
            enumerable: false,
            writable: true,
            configurable: true
        };
        for (const target of targets) {
            if (!Reflect.has(target, name)) {
                Reflect.defineProperty(target, name, descriptor);
            }
        }
    }
})([
    Array.prototype,
], Object.values({
    random(q) {
        if (q === undefined) {
            return this.length > 0 ? this[Math.floor(this.length * Math.random())] :
            undefined;
        } else {
            let amount = q >>> 0;
            let result = this.slice(0, amount);
            for (let i = amount; i < this.length; i++) {
                let j = Math.floor(Math.random() * i);
                if (j < amount) {
                    result[j] = this[i];
                }
            }
            return result;
        }
    },
    shuffle() {
        for (let i = this.length; i > 1;) {
            let r = Math.floor(Math.random() * i--);
            if (r !== i) {
                let tmp = this[i];
                this[i] = this[r];
                this[r] = tmp;
            }
        }
        return this;
    },
    aggregate(group, reduce, initAcc) {
        if (typeof group !== 'function')
            throw new TypeError(' ... '); // TODO
        switch (arguments.length) {
            case 1:
                return aggregate1(this, group);
            case 2:
                return aggregate2(this, group, reduce);
            default:
            case 3:
                return aggregate3(this, group, reduce, initAcc);
        }
    }
}));

function aggregate1(self, group) {
    const ret = new Map();
    for (let idx = 0; idx < self.length; idx++) {
        const val = self[idx];
        const key = group(val, idx, self);
        const acc = ret.get(key);
        if (acc) {
            acc.push(val);
        } else {
            ret.set(key, [val]);
        }
    }
    return ret;
}

function aggregate2(self, group, reduce) {
    const ret = new Map();
    for (let idx = 0; idx < self.length; idx++) {
        const val = self[idx];
        const key = group(val, idx, self);
        const acc = ret.get(key);
        const newAcc = reduce(acc, val, key, idx, self);
        if (newAcc !== undefined) {
            ret.set(key, newAcc);
        }
    }
    return ret;
}

function aggregate3(self, group, reduce, initAcc) {
    const ret = new Map();
    for (let idx = 0; idx < self.length; idx++) {
        const val = self[idx];
        const key = group(val, idx, self);
        if (!ret.has(key)) {
            const acc = initAcc(val, key, idx, self);
            const newAcc = reduce(acc, val, key, idx, self);
            if (newAcc !== undefined) {
                ret.set(key, newAcc);
            } else if (acc !== undefined) {
                ret.set(key, acc);
            }
        } else {
            const acc = ret.get(key);
            const newAcc = reduce(acc, val, key, idx, self);
            if (newAcc !== undefined) {
                ret.set(key, newAcc);
            }
        }
    }
    return ret;
}
$("head").append("<style>#names .name { border-radius: 10px;}</style>");
$("head").append("<style>#names .name, #cursors .name { border-radius: 10px;}</style>");
var proxies = {};
var notes_play = [];
var L = localStorage;
var BOT_IPS = [];
var selfName = "Potato.exe";
var messages = [];
var tproxy = false;
var proxyturn = 0;
var on = false;
var octtoggle = false;
var fishers_id = [];
var proxyturnUp = 0;
var nextcount = 0;
var echotoggle = false;
var notecounter = 0;
var records = {};
var isRecording = false;
var fileExt = localStorage.ext;
setInterval(function(){if(follow) setroom(gClient.desiredChannelId);},5000);
function setroom(room) {
    Object.keys(proxies).forEach(function(client) {
        proxies[client].setChannel(room);
    });
}

function updateName(test) { //name changer
    MPP.client.sendArray([{
        m: "userset",
        set: {
            name: test
        }
    }]);
}

function movep(x, y, proxy = 0) {
    proxies[proxy].sendArray([{
        m: "m",
        x: x,
        y: y
    }]);
    //console.log(x, y)
}

function transate(text, lang = "en") {
    if (!text) {
        return "No text input.";
    } else
        if (!Object.keys(isoLangs).includes(lang.toLowerCase())) {
            return "Invalid lang code.";
        }
    var url = "https://translate.yandex.net/api/v1.5/tr.json/translate",
        keyAPI = "trnsl.1.1.20130922T110455Z.4a9208e68c61a760.f819c1db302ba637c2bea1befa4db9f784e9fbb8";
    var errtext = "";
    var xhr2 = new XMLHttpRequest(),
        langAPI2 = lang.toLowerCase(),
        data2 = "key=" + keyAPI + "&text=Could not perform translation, text is too long.&lang=" + langAPI2;
    xhr2.open("POST", url, true);
    xhr2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr2.send(data2);
    xhr2.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var res2 = this.responseText;
            var json2 = JSON.parse(res2);
            if (json2.code == 200) {
                errtext = json2.text[0];
            }
        }
    };
    var xhr = new XMLHttpRequest(),
        textAPI = encodeURIComponent(text.replace(lang + " ", "")),
        langAPI = lang.toLowerCase(),
        data = "key=" + keyAPI + "&text=" + textAPI + "&lang=" + langAPI;
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(data);
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var res = this.responseText;
            var json = JSON.parse(res);
            if (json.code == 200) {
                var msg = "";
                msg = "Translation (" + langAPI + "/" + isoLangs[langAPI].name + "/" + isoLangs[langAPI].nativeName + "): " + json.text[0];
                if (msg.length > L.msgL) {
                    return "Could not perform translation, text is too long. " + errtext;
                } else {
                    return msg;
                }
            } else {
                return "Error Code: " + json.code;
            }
        }
    };
}

function mcircle(r, val = 50) {
    var r2 = r * r;
    for (x = -r; x <= r; x++) {
        y = (Math.sqrt(r2 - x * x) + 0.5);
        setTimeout(function() {
            move(parseInt(MPP.client.getOwnParticipant().x) + x, parseInt(MPP.client.getOwnParticipant().y) + y);
        }, th * val);
    }
    /*for(var th=1;th<=360;th+=1) {
        var x = h + r*Math.cos(th)
        var y = k + r*Math.sin(th)
        setTimeout(function(){move(parseInt(MPP.client.getOwnParticipant().x)+x,parseInt(MPP.client.getOwnParticipant().y)+y)},th*val)
    }
    */
}

function randNum(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function pchat(msg, proxy = 0) {
    proxies[proxy].sendArray([{
        m: "a",
        message: msg
    }]);
}

function sectoform(sec) {
    var totalSeconds = sec;
    var years = Math.floor(totalSeconds / 31556926);
    totalSeconds %= 31556926;
    var months = Math.floor(totalSeconds / Math.round(2629743.83));
    totalSeconds %= Math.round(2629743.83);//function//
function sendChat(msg) {
MPP.chat.send(msg);
}

function pxChat(px, msg) {
pxList[px].sendArray([{ m: "a", message: msg }]);
}

var pxp = false;
function pxpress() {
pxp = !pxp;
}

function connect() {
var proxy = new Client("ws://" + window.location.hostname); 
    proxy.setChannel(channel_id); 
    proxy.start();
    pxList[pxList.length] = proxy;
}
//function//
    var days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    var hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 60;
    console.log(years, months, days, hours, minutes, seconds);
    if (parseInt(years) <= 9) years = "0" + years;
    if (parseInt(months) <= 9) months = "0" + months;
    if (parseInt(days) <= 9) days = "0" + days;
    if (parseInt(hours) <= 9) hours = "0" + hours;
    if (parseInt(minutes) <= 9) minutes = "0" + minutes;
    if (parseInt(seconds) <= 9) seconds = "0" + seconds;

    years = years + ":";
    months = months + ":";
    days = days + ":";
    hours = hours + ":";
    minutes = minutes + ":";

    if (years == "00:" && months == "00:") years = "";
    if (months == "00:" && days == "00:") months = "";
    if (days == "00:" && hours == "00:") days = "";
    if (hours == "00:" && minutes == "00:") hours = "";


    return years + months + days + hours + minutes + seconds;
}

function similar(first, second, percent) {
    if (first === null || second === null || typeof first === 'undefined' || typeof second === 'undefined') {
        return 0;
    }

    first += '';
    second += '';

    var pos1 = 0,
        pos2 = 0,
        max = 0,
        firstLength = first.length,
        secondLength = second.length,
        p, q, l, sum;

    max = 0;

    for (p = 0; p < firstLength; p++) {
        for (q = 0; q < secondLength; q++) {
            for (l = 0;
                 (p + l < firstLength) && (q + l < secondLength) && (first.charAt(p + l) === second.charAt(q + l)); l++)
                ;
            if (l > max) {
                max = l;
                pos1 = p;
                pos2 = q;
            }
        }
    }

    sum = max;

    if (sum) {
        if (pos1 && pos2) {
            sum += similar(first.substr(0, pos1), second.substr(0, pos2));
        }

        if ((pos1 + max < firstLength) && (pos2 + max < secondLength)) {
            sum += similar(first.substr(pos1 + max, firstLength - pos1 - max), second.substr(pos2 + max,
                                                                                             secondLength - pos2 - max));
        }
    }

    if (!percent) {
        return sum;
    } else {
        return (sum * 200) / (firstLength + secondLength);
    }
}

function getUser(target) {
    if (target === "") {
        return true;
    }
    for (var pl in MPP.client.ppl) {
        if (!MPP.client.ppl.hasOwnProperty(pl)) continue;
        var part = MPP.client.ppl[pl];
        if (part.name.toLowerCase().indexOf(target) !== -1 || similar(part.name.toLowerCase(), target, 1) >= 60) {
            return part;
        }
    }
}

function cspam(room, pianoS = false, msg = "") {
    setroom(room);
    Object.keys(proxies).forEach(function(client) {
        proxies[client].setChannel(room);
    });
    MPP.proxychat("Spamming room " + room);
    setTimeout(function() {
        Object.keys(proxies).forEach(function(proxy) {
            proxies[proxy].sendArray([{
                m: "a",
                message: msg
            }]);
            if (pianoS) {
                Object.keys(MPP.piano.keys).forEach((key) => {
                    proxies[proxy].startNote(key);
                    proxies[proxy].startNote(key);
                    proxies[proxy].startNote(key);
                    proxies[proxy].startNote(key);
                });
            }
        });
    }, 2000);
    setTimeout(function() {
        setroom("Proxy Storage");
    }, 2700);
}
proxychat = function(msg) {
    let proxyArray = Object.values(proxies).length;
    proxies[chatturn].sendArray([{
        m: "a",
        message: msg
    }]);
    chatturn++;
    if (chatturn >= proxyArray) {
        chatturn = 0;
    }
};

function potatofy(name) {
    Object.keys(proxies).forEach(function(client) {
        proxies[client].sendArray([{
            m: "userset",
            set: {
                name: name + "." + fileExt[Math.floor(Math.random() * fileExt.length)]
            }
        }]);
    });
}

function msgall(msg) {
    Object.keys(proxies).forEach(function(client, num) {
        setTimeout(function() {
            proxies[client].sendArray([{
                m: "a",
                message: msg
            }]);
        }, num * 75);
    });
}

function cname(name) {
    Object.keys(proxies).forEach(function(client) {
        proxies[client].sendArray([{
            m: "userset",
            set: {
                name: name
            }
        }]);
    });
}

function cnamen(name,num=1) {
    Object.keys(proxies).forEach(function(client) {
        proxies[client].sendArray([{
            m: "userset",
            set: {
                name: name + "_" + num
            }
        }]);
    });
}

function localMsg(msg, name = "Local MSG", color = "rgb(230, 125, 57)") {
    MPP.client.emit('a', {
        m: 'a',
        a: msg,
        p: {
            name: name,
            color: color
        }
    });
}
function status(inp) {
    if (!inp) {
        return "off";
    } else {
        return "on";
    }
}

function msg5(msg) {
    messages.push(msg);
    if (messages.length >= 5) {
        localMsg(messages.join(" | "));
        messages = [];
    }
}
var BOT_IDS = [];
//setInterval(function(){Object.keys(proxies).forEach(function(proxy){if(!proxies[proxy].isConnected()) {delete proxies[proxy];delete BOT_IDS[proxy];}});},5000);
$(".relative").append('<div id="proxy" class="ugly-button toggle-btn" style="position: fixed;bottom: 7px;left:660px;width: 100px;">Connect Proxy</div>'); //ugle = text button|ugly = looks like a button //class="toggle-btn" = text|class="ugly-button toggle-btn" = button
$("#proxy").click(function() {
    tproxy = !tproxy;
    var ip = "0.0.0.0";
    //my ips
    var homeIP = "lol no";
    var homeIP2 = "lol no";
    var homeIP3 = "lol no";
    localMsg("AutoProxyConnect: " + status(tproxy));
    var autoProxy = setInterval(function() {
        if (!tproxy) {
            clearInterval(autoProxy);
        }
        $.getJSON('https://api.ipify.org/?format=json', function(data) {
            if (data.ip == homeIP) {
                return;
            } else
                if (data.ip == homeIP2) {
                    return;
                } else if (data.ip == homeIP3) {
                    return;
                } else
                    if (BOT_IPS.includes(data.ip)) {
                        return;
                    } else
                        if (data.ip != ip) {
                            ip = data.ip;
                            var room = MPP.client.channel._id;
                            var wat = Object.keys(proxies).length;
                            proxies[wat] = new Client("ws://www.multiplayerpiano.com:8080");
                            if (MPP.client.channel._id == "lobby") {
                                roomUp = "lolwutsecretlobbybackdoor";
                            } else {
                                roomUp = room;
                            }
                            //BOT_IDS.push(proxies[wat].user._id)
                            proxies[wat].setChannel(roomUp);
                            proxies[wat].start();
                            localMsg("Connecting Proxy ("+data.ip+")");
                            BOT_IPS.push(data.ip);
                        }
        });
    }, 500);
    //setTimeout(function() {proxyID.push(proxies[counts].getOwnParticipant()._id)},5000)
});

makeButton("Change Room", "scbtn", 3, 0, e => {
    var room = prompt("Room Name");
    setroom(room);
});
makeButton("Change Name", "wtf", 4, 0, e => {
    var name = prompt("Proxy Name");
    cname(name);
});
var plchldr = "\u4493\u5968\u2223"; //random characters n shit
var chars = [ /*["~", "style=\"text-decoration: line-through;\""], ["\\*", "style=\"font-weight: bold;\""], ["_", "style=\"font-style: italic;\""], ["\\|", "style=\"text-decoration: underline;\""]*/ ];
var config = { //TODO: add key listeners
    blockNotes: false,
    hideMouse: false,
    incognito: false,
    greentext: true,
    histLen: 250,
    names: ["potato", "potato.exe", "anon64"],
    seeOwnCursor: true,
    version: "0.0.2"
};
var transLvl = 0;
config.nameReg = new RegExp(config.names.join("|"), "gi");

/*$.getJSON("http://scripts.meowbin.com/scripts/mpp/update?version=" + config.version, function(x) { //check for updates
    //TODO
});*/

var images = {
    black: new Image(),
    white: new Image()
};
images.black.src = localStorage.blackKey || "http://not.here/";
images.white.src = localStorage.whiteKey || "http://not.here/";

window.reqAnimFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(cb) {
    setTimeout(cb, 1000 / 30);
};

var DEFAULT_VELOCITY = 0.5;
var TIMING_TARGET = 1000;


// Utility

////////////////////////////////////////////////////////////////

var Rect = function(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.x2 = x + w;
    this.y2 = y + h;
};
Rect.prototype.contains = function(x, y) {
    return (x >= this.x && x <= this.x2 && y >= this.y && y <= this.y2);
};


// performing translation

////////////////////////////////////////////////////////////////

var Translation = (function() {
    var strings = {
        "people are playing": {
            "pt": "pessoas estÃ£o jogando",
            "es": "personas estÃ¡n jugando",
            "ru": "Ñ‡ÐµÐ»Ð¾Ð²ÐµÐº Ð¸Ð³Ñ€Ð°ÐµÑ‚",
            "fr": "personnes jouent",
            "ja": "äººãŒéŠã‚“ã§ã„ã‚‹",
            "de": "Leute spielen",
            "zh": "äººè¢«æ‰“",
            "nl": "mensen spelen",
            "pl": "osÃ³b grajÄ…",
            "hu": "ember jÃ¡tszik"
        },
        "New Room...": {
            "pt": "Nova Sala ...",
            "es": "Nueva sala de...",
            "ru": "ÐÐ¾Ð²Ñ‹Ð¹ Ð½Ð¾Ð¼ÐµÑ€...",
            "ja": "æ–°ã—ã„éƒ¨å±‹",
            "zh": "æ–°æˆ¿é—´",
            "nl": "nieuwe Kamer",
            "hu": "Ãºj szoba"
        },
        "room name": {
            "pt": "nome da sala",
            "es": "sala de nombre",
            "ru": "Ð½Ð°Ð·Ð²Ð°Ð½Ð¸Ðµ ÐºÐ¾Ð¼Ð½Ð°Ñ‚Ñ‹",
            "fr": "nom de la chambre",
            "ja": "ãƒ«ãƒ¼ãƒ å",
            "de": "Raumnamen",
            "zh": "æˆ¿é—´åç§°",
            "nl": "kamernaam",
            "pl": "nazwa pokÃ³j",
            "hu": "szoba neve"
        },
        "Visible (open to everyone)": {
            "pt": "VisÃ­vel (aberto a todos)",
            "es": "Visible (abierto a todo el mundo)",
            "ru": "Visible (Ð¾Ñ‚ÐºÑ€Ñ‹Ñ‚Ñ‹Ð¹ Ð´Ð»Ñ Ð²ÑÐµÑ…)",
            "fr": "Visible (ouvert Ã  tous)",
            "ja": "ç›®ã«è¦‹ãˆã‚‹ï¼ˆèª°ã«ã§ã‚‚é–‹ã„ã¦ã„ã‚‹ï¼‰",
            "de": "Sichtbar (offen fÃ¼r alle)",
            "zh": "å¯è§ï¼ˆå‘æ‰€æœ‰äººå¼€æ”¾ï¼‰",
            "nl": "Zichtbaar (open voor iedereen)",
            "pl": "Widoczne (otwarte dla wszystkich)",
            "hu": "LÃ¡thatÃ³ (nyitott mindenki szÃ¡mÃ¡ra)"
        },
        "Enable Chat": {
            "pt": "Ativar bate-papo",
            "es": "Habilitar chat",
            "ru": "Ð’ÐºÐ»ÑŽÑ‡Ð¸Ñ‚ÑŒ Ñ‡Ð°Ñ‚",
            "fr": "Activer discuter",
            "ja": "ãƒãƒ£ãƒƒãƒˆã‚’æœ‰åŠ¹ã«ã™ã‚‹",
            "de": "aktivieren Sie chatten",
            "zh": "å¯ç”¨èŠå¤©",
            "nl": "Chat inschakelen",
            "pl": "WÅ‚Ä…cz czat",
            "hu": "a csevegÃ©st"
        },
        "Play Alone": {
            "pt": "Jogar Sozinho",
            "es": "Jugar Solo",
            "ru": "Ð˜Ð³Ñ€Ð°Ñ‚ÑŒ Ð² Ð¾Ð´Ð¸Ð½Ð¾Ñ‡ÐºÑƒ",
            "fr": "Jouez Seul",
            "ja": "ä¸€äººã§ãƒ—ãƒ¬ã‚¤",
            "de": "Alleine Spielen",
            "zh": "ç‹¬è‡ªçŽ©è€",
            "nl": "Speel Alleen",
            "pl": "Zagraj sam",
            "hu": "JÃ¡tssz egyedÃ¼l"
        }
        // todo: it, tr, th, sv, ar, fi, nb, da, sv, he, cs, ko, ro, vi, id, nb, el, sk, bg, lt, sl, hr
        // todo: Connecting, Offline mode, input placeholder, MPPNotifications
    };

    var setLanguage = function(lang) {
        language = lang;
    };

    var getLanguage = function() {
        if (window.navigator && navigator.language && navigator.language.length >= 2) {
            return navigator.language.substr(0, 2).toLowerCase();
        } else {
            return "en";
        }
    };

    var get = function(text, lang) {
        if (typeof lang === "undefined") lang = language;
        var row = strings[text];
        if (row == undefined) return text;
        var string = row[lang];
        if (string == undefined) return text;
        return string;
    };

    var perform = function(lang) {
        if (typeof lang === "undefined") lang = language;
        $(".translate").each(function(i, ele) {
            var th = $(this);
            if (ele.tagName && ele.tagName.toLowerCase() == "input") {
                if (typeof ele.placeholder != "undefined") {
                    th.attr("placeholder", get(th.attr("placeholder"), lang));
                }
            } else {
                th.text(get(th.text(), lang));
            }
        });
    };

    var language = getLanguage();
    return {
        setLanguage: setLanguage,
        getLanguage: getLanguage,
        get: get,
        perform: perform
    };
})();

Translation.perform();


// AudioEngine classes

////////////////////////////////////////////////////////////////

var AudioEngine = function() {};
AudioEngine.prototype.init = function(cb) {
    this.volume = 0.6;
    this.sounds = {};
    return this;
};

AudioEngine.prototype.load = function(id, url, cb) {};
AudioEngine.prototype.play = function() {};
AudioEngine.prototype.stop = function() {};
AudioEngine.prototype.setVolume = function(vol) {
    this.volume = vol;
};

AudioEngineWeb = function() {
    this.threshold = 1000;
    this.worker = new Worker("/workerTimer.js");
    var self = this;
    this.worker.onmessage = function(event) {
        if (event.data.args)
            if (event.data.args.action == 0) {
                self.actualPlay(event.data.args.id, event.data.args.vol, event.data.args.time, event.data.args.part_id);
            } else {
                self.actualStop(event.data.args.id, event.data.args.time, event.data.args.part_id);
            }
    }
};

AudioEngineWeb.prototype = new AudioEngine();
AudioEngineWeb.prototype.init = function(cb) {
    AudioEngine.prototype.init.call(this);
    this.context = new AudioContext();
    this.masterGain = this.context.createGain();
    this.masterGain.connect(this.context.destination);
    this.masterGain.gain.value = this.volume;
    this.limiterNode = this.context.createDynamicsCompressor();
    this.limiterNode.threshold.value = -10;
    this.limiterNode.knee.value = 0;
    this.limiterNode.ratio.value = 20;
    this.limiterNode.attack.value = 0;
    this.limiterNode.release.value = 0.1;
    this.limiterNode.connect(this.masterGain);
    // for synth mix
    this.pianoGain = this.context.createGain();
    this.pianoGain.gain.value = 0.5;
    this.pianoGain.connect(this.limiterNode);
    this.synthGain = this.context.createGain();
    this.synthGain.gain.value = 0.5;
    this.synthGain.connect(this.limiterNode);
    this.playings = {};

    if (cb) setTimeout(cb, 0);
    return this;
};

AudioEngineWeb.prototype.load = function(id, url, cb) {
    var audio = this;
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.responseType = "arraybuffer";
    req.addEventListener("readystatechange", function(evt) {
        if (req.readyState !== 4) return;
        try {
            audio.context.decodeAudioData(req.response, function(buffer) {
                audio.sounds[id] = buffer;
                if (cb) cb();
            });
        } catch (e) {
            new MPPNotification({
                id: "audio-download-error",
                title: "Problem",
                text: "For some reason, an audio download failed with a status of " + req.status + ". ",
                target: "#piano",
                duration: 10000
            });
        }
    });
    req.send();
};

AudioEngineWeb.prototype.actualPlay = function(id, vol, time, part_id) { //the old play(), but with time insted of delay_ms.
    if (!this.sounds.hasOwnProperty(id)) return;
    var source = this.context.createBufferSource();
    source.buffer = this.sounds[id];
    var gain = this.context.createGain();
    gain.gain.value = vol;
    source.connect(gain);
    gain.connect(this.pianoGain);
    source.start(time);
    // Patch from ste-art remedies stuttering under heavy load
    if (this.playings[id]) {
        var playing = this.playings[id];
        playing.gain.gain.setValueAtTime(playing.gain.gain.value, time);
        playing.gain.gain.linearRampToValueAtTime(0.0, time + 0.2);
        playing.source.stop(time + 0.21);
        if (enableSynth && playing.voice) {
            playing.voice.stop(time);
        }
    }
    this.playings[id] = {
        "source": source,
        "gain": gain,
        "part_id": part_id
    };
    if (enableSynth) {
        this.playings[id].voice = new synthVoice(id, time);
    }
}

AudioEngineWeb.prototype.play = function(id, vol, delay_ms, part_id) {
    if (!this.sounds.hasOwnProperty(id)) return;
    var time = this.context.currentTime + (delay_ms / 1000); //calculate time on note receive.
    var delay = delay_ms - this.threshold;
    if (delay <= 0) this.actualPlay(id, vol, time, part_id);
    else {
        this.worker.postMessage({
            delay: delay,
            args: {
                action: 0 /*play*/ ,
                id: id,
                vol: vol,
                time: time,
                part_id: part_id
            }
        }); // but start scheduling right before play.
    }
}

AudioEngineWeb.prototype.actualStop = function(id, time, part_id) {
    if (this.playings.hasOwnProperty(id) && this.playings[id] && this.playings[id].part_id === part_id) {
        var gain = this.playings[id].gain.gain;
        gain.setValueAtTime(gain.value, time);
        gain.linearRampToValueAtTime(gain.value * 0.1, time + 0.16);
        gain.linearRampToValueAtTime(0.0, time + 0.4);
        this.playings[id].source.stop(time + 0.41);
        if (this.playings[id].voice) {
            this.playings[id].voice.stop(time);
        }
        this.playings[id] = null;
    }
};

AudioEngineWeb.prototype.stop = function(id, delay_ms, part_id) {
    var time = this.context.currentTime + (delay_ms / 1000);
    var delay = delay_ms - this.threshold;
    if (delay <= 0) this.actualStop(id, time, part_id);
    else {
        this.worker.postMessage({
            delay: delay,
            args: {
                action: 1 /*stop*/ ,
                id: id,
                time: time,
                part_id: part_id
            }
        });
    }
};

AudioEngineWeb.prototype.setVolume = function(vol) {
    AudioEngine.prototype.setVolume.call(this, vol);
    this.masterGain.gain.value = this.volume;
};


// VolumeSlider inst

////////////////////////////////////////////////////////////////

var VolumeSlider = function(ele, cb) {
    this.rootElement = ele;
    this.cb = cb;
    var range = document.createElement("input");
    try {
        range.type = "range";
    } catch (e) {
        // hello, IE9
    }
    if (range.min !== undefined) {
        this.range = range;
        this.rootElement.appendChild(range);
        range.className = "volume-slider";
        range.min = "0.0";
        range.max = "1.0";
        range.step = "0.01";
        $(range).on("change", function(evt) {
            cb(range.value);
        });
    } else {
        if (window.console) console.log("warn: no slider");
        // todo
    }
};

VolumeSlider.prototype.set = function(v) {
    if (this.range !== undefined) {
        this.range.value = v;
    } else {
        // todo
    }
};


// Renderer classes

////////////////////////////////////////////////////////////////

var Renderer = function() {};
Renderer.prototype.init = function(piano) {
    this.piano = piano;
    this.resize();
    return this;
};

Renderer.prototype.resize = function(width, height) {
    if (typeof width == "undefined") width = $(this.piano.rootElement).width();
    if (typeof height == "undefined") height = Math.floor(width * 0.2);
    $(this.piano.rootElement).css({
        "height": height + "px",
        marginTop: Math.floor($(window).height() / 2 - height / 2) + "px"
    });
    this.width = width;
    this.height = height;
};

Renderer.prototype.visualize = function(key, color) {};

var DOMRenderer = function() {
    Renderer.call(this);
};

DOMRenderer.prototype = new Renderer();
DOMRenderer.prototype.init = function(piano) {
    // create keys in dom
    for (var i in piano.keys) {
        if (!piano.keys.hasOwnProperty(i)) continue;
        var key = piano.keys[i];
        var ele = document.createElement("div");
        key.domElement = ele;
        piano.rootElement.appendChild(ele);
        // "key sharp cs cs2"
        ele.note = key.note;
        ele.id = key.note;
        ele.className = "key " + (key.sharp ? "sharp " : " ") + key.baseNote + " " + key.note + " loading";
        var table = $('<table width="100%" height="100%" style="pointer-events:none"></table>');
        var td = $('<td valign="bottom"></td>');
        table.append(td);
        td.valign = "bottom";
        $(ele).append(table);
    }
    // add event listeners
    var mouse_down = false;
    $(piano.rootElement).mousedown(function(event) {
        // todo: IE10 doesn't support the pointer-events css rule on the "blips"
        var ele = event.target;
        if ($(ele).hasClass("key") && piano.keys.hasOwnProperty(ele.note)) {
            var key = piano.keys[ele.note];
            press(key.note);
            mouse_down = true;
            event.stopPropagation();
        };
        //event.preventDefault();
    });
    piano.rootElement.addEventListener("touchstart", function(event) {
        for (var i in event.changedTouches) {
            var ele = event.changedTouches[i].target;
            if ($(ele).hasClass("key") && piano.keys.hasOwnProperty(ele.note)) {
                var key = piano.keys[ele.note];
                press(key.note);
                mouse_down = true;
                event.stopPropagation();
            }
        }
        //event.preventDefault();
    }, false);
    $(window).mouseup(function(event) {
        mouse_down = false;
    });
    /*$(piano.rootElement).mouseover(function(event) {
    	if(!mouse_down) return;
    	var ele = event.target;
    	if($(ele).hasClass("key") && piano.keys.hasOwnProperty(ele.note)) {
    		var key = piano.keys[ele.note];
    		press(key.note);
    	}
    });*/

    Renderer.prototype.init.call(this, piano);
    return this;
};

DOMRenderer.prototype.resize = function(width, height) {
    Renderer.prototype.resize.call(this, width, height);
};

DOMRenderer.prototype.visualize = function(key, color) {
    var k = $(key.domElement);
    k.addClass("play");
    setTimeout(function() {
        k.removeClass("play");
    }, 100);
    // "blips"
    var d = $('<div style="width:100%;height:10%;margin:0;padding:0">&nbsp;</div>');
    d.css("background", color);
    k.find("td").append(d);
    d.fadeOut(1000, function() {
        d.remove();
    });
};


var CanvasRenderer = function() {
    Renderer.call(this);
};

CanvasRenderer.prototype = new Renderer();
CanvasRenderer.prototype.init = function(piano) {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    piano.rootElement.appendChild(this.canvas);
    Renderer.prototype.init.call(this, piano); // calls resize()

    // create render loop
    var self = this;
    var render = function() {
        self.redraw();
        reqAnimFrame(render);
    };
    reqAnimFrame(render);

    // add event listeners
    var mouse_down = false;
    var last_key = null;
    $(piano.rootElement).mousedown(function(event) {
        mouse_down = true;
        //event.stopPropagation();
        event.preventDefault();

        var pos = CanvasRenderer.translateMouseEvent(event);
        var hit = self.getHit(pos.x, pos.y);
        if (hit) {
            press(hit.key.note, hit.v);
            last_key = hit.key;
        }
    });
    piano.rootElement.addEventListener("touchstart", function(event) {
        mouse_down = true;
        //event.stopPropagation();
        event.preventDefault();
        for (var i in event.changedTouches) {
            var pos = CanvasRenderer.translateMouseEvent(event.changedTouches[i]);
            var hit = self.getHit(pos.x, pos.y);
            if (hit) {
                press(hit.key.note, hit.v);
                last_key = hit.key;
            }
        }
    }, false);
    $(window).mouseup(function(event) {
        if (last_key) {
            release(last_key.note);
        }
        mouse_down = false;
        last_key = null;
    });
    /*$(piano.rootElement).mousemove(function(event) {
    	if(!mouse_down) return;
    	var pos = CanvasRenderer.translateMouseEvent(event);
    	var hit = self.getHit(pos.x, pos.y);
    	if(hit && hit.key != last_key) {
    		press(hit.key.note, hit.v);
    		last_key = hit.key;
    	}
    });*/
    return this;
};

CanvasRenderer.prototype.resize = function(width, height) {
    Renderer.prototype.resize.call(this, width, height);
    if (this.width < 52 * 2) this.width = 52 * 2;
    if (this.height < this.width * 0.2) this.height = Math.floor(this.width * 0.18);
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    // calculate key sizes
    this.whiteKeyWidth = Math.floor(this.width / 52);
    this.whiteKeyHeight = Math.floor(this.height * 0.9);
    this.blackKeyWidth = Math.floor(this.whiteKeyWidth * 0.75);
    this.blackKeyHeight = Math.floor(this.height * 0.5);

    this.blackKeyOffset = Math.floor(this.whiteKeyWidth - (this.blackKeyWidth / 2));
    this.keyMovement = Math.floor(this.whiteKeyHeight * 0.015);

    this.whiteBlipWidth = Math.floor(this.whiteKeyWidth * 0.7);
    this.whiteBlipHeight = Math.floor(this.whiteBlipWidth * 0.8);
    this.whiteBlipX = Math.floor((this.whiteKeyWidth - this.whiteBlipWidth) / 2);
    this.whiteBlipY = Math.floor(this.whiteKeyHeight - this.whiteBlipHeight * 1.2);
    this.blackBlipWidth = Math.floor(this.blackKeyWidth * 0.7);
    this.blackBlipHeight = Math.floor(this.blackBlipWidth * 0.8);
    this.blackBlipY = Math.floor(this.blackKeyHeight - this.blackBlipHeight * 1.2);
    this.blackBlipX = Math.floor((this.blackKeyWidth - this.blackBlipWidth) / 2);

    // prerender white key
    this.whiteKeyRender = document.createElement("canvas");
    this.whiteKeyRender.width = this.whiteKeyWidth;
    this.whiteKeyRender.height = this.height + 10;
    var self = this;

    function renderWhiteKeys() {
        var tempWhite = document.createElement("canvas");
        tempWhite.width = self.whiteKeyWidth;
        tempWhite.height = self.whiteKeyHeight;
        var tCtx = tempWhite.getContext("2d");
        tCtx.drawImage(images.white, 0, 0, images.white.width, images.white.height, 0, 0, tempWhite.width, tempWhite.height);
        var ctx = self.whiteKeyRender.getContext("2d");
        ctx.clearRect(0, 0, tempWhite.width, tempWhite.height);
        ctx.fillStyle = ctx.createPattern(tempWhite, "repeat");
        ctx.beginPath();
        ctx.rect(0, 0, tempWhite.width, tempWhite.height);
        ctx.fill();
    }
    if (images.white.src == "http://not.here/") $.get("http://files.meowbin.com/piano_textures/normal/white.base64", function(x) {
        localStorage.whiteKey = images.white.src = x;
        renderWhiteKeys(); //will it need a slight delay? idek
    });
    else renderWhiteKeys();

    // prerender black key
    this.blackKeyRender = document.createElement("canvas");
    this.blackKeyRender.width = this.blackKeyWidth + 10;
    this.blackKeyRender.height = this.blackKeyHeight + 10;

    function renderBlackKeys() {
        var tempBlack = document.createElement("canvas");
        tempBlack.width = self.blackKeyWidth;
        tempBlack.height = self.blackKeyHeight;
        var tCtx = tempBlack.getContext("2d");
        tCtx.drawImage(images.black, 0, 0, images.black.width, images.black.height, 0, 0, tempBlack.width, tempBlack.height);
        var ctx = self.blackKeyRender.getContext("2d");
        ctx.clearRect(0, 0, tempBlack.width, tempBlack.height);
        ctx.fillStyle = ctx.createPattern(tempBlack, "repeat");
        ctx.beginPath();
        ctx.rect(0, 0, tempBlack.width, tempBlack.height);
        ctx.fill();
    }
    if (images.black.src == "http://not.here/") $.get("http://files.meowbin.com/piano_textures/normal/black.base64", function(x) {
        localStorage.blackKey = images.black.src = x;
        renderBlackKeys(); //will it need a slight delay? idek
    });
    else renderBlackKeys();

    // prerender shadows
    this.shadowRender = [];
    var y = -this.canvas.height * 2;
    for (var j = 0; j < 2; j++) {
        var canvas = document.createElement("canvas");
        this.shadowRender[j] = canvas;
        canvas.width = this.canvas.width;
        canvas.height = this.canvas.height;
        var ctx = canvas.getContext("2d");
        var sharp = j ? true : false;
        ctx.lineJoin = "round";
        ctx.lineCap = "round";
        ctx.lineWidth = 4;
        ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
        ctx.shadowBlur = this.keyMovement * 3;
        ctx.shadowOffsetY = -y + this.keyMovement;
        if (sharp) {
            ctx.shadowOffsetX = this.keyMovement;
        } else {
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = -y + this.keyMovement;
        }
        for (var i in this.piano.keys) {
            if (!this.piano.keys.hasOwnProperty(i)) continue;
            var key = this.piano.keys[i];
            if (key.sharp != sharp) continue;

            if (key.sharp) {
                ctx.fillRect(this.blackKeyOffset + this.whiteKeyWidth * key.spatial + ctx.lineWidth / 2,
                             y + ctx.lineWidth / 2,
                             this.blackKeyWidth - ctx.lineWidth, this.blackKeyHeight - ctx.lineWidth);
            } else {
                ctx.fillRect(this.whiteKeyWidth * key.spatial + ctx.lineWidth / 2,
                             y + ctx.lineWidth / 2,
                             this.whiteKeyWidth - ctx.lineWidth, this.whiteKeyHeight - ctx.lineWidth);
            }
        }
    }

    // update key rects
    for (var i in this.piano.keys) {
        if (!this.piano.keys.hasOwnProperty(i)) continue;
        var key = this.piano.keys[i];
        if (key.sharp) {
            key.rect = new Rect(this.blackKeyOffset + this.whiteKeyWidth * key.spatial, 0,
                                this.blackKeyWidth, this.blackKeyHeight);
        } else {
            key.rect = new Rect(this.whiteKeyWidth * key.spatial, 0,
                                this.whiteKeyWidth, this.whiteKeyHeight);
        }
    }
};

CanvasRenderer.prototype.visualize = function(key, color) {
    key.timePlayed = Date.now();
    key.blips.push({
        "time": key.timePlayed,
        "color": color
    });
};

CanvasRenderer.prototype.redraw = function() {
    var now = Date.now();
    var timeLoadedEnd = now - 1000;
    var timePlayedEnd = now - 100;
    var timeBlipEnd = now - 1000;
    this.ctx.save();
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // draw all keys
    for (var j = 0; j < 2; j++) {
        this.ctx.globalAlpha = 1.0;
        this.ctx.drawImage(this.shadowRender[j], 0, 0);
        var sharp = j ? true : false;
        for (var i in this.piano.keys) {
            if (!this.piano.keys.hasOwnProperty(i)) continue;
            var key = this.piano.keys[i];
            if (key.sharp != sharp) continue;

            if (!key.loaded) {
                this.ctx.globalAlpha = 0.2;
            } else if (key.timeLoaded > timeLoadedEnd) {
                this.ctx.globalAlpha = ((now - key.timeLoaded) / 1000) * 0.8 + 0.2;
            } else {
                this.ctx.globalAlpha = 1.0;
            }
            var y = 0;
            if (key.timePlayed > timePlayedEnd) {
                y = Math.floor(this.keyMovement - (((now - key.timePlayed) / 100) * this.keyMovement));
            }
            var x = Math.floor(key.sharp ? this.blackKeyOffset + this.whiteKeyWidth * key.spatial :
                               this.whiteKeyWidth * key.spatial);
            var image = key.sharp ? this.blackKeyRender : this.whiteKeyRender;
            this.ctx.drawImage(image, x, y);
            // render blips
            if (key.blips.length) {
                var alpha = this.ctx.globalAlpha;
                var w, h;
                if (key.sharp) {
                    x += this.blackBlipX;
                    y = this.blackBlipY;
                    w = this.blackBlipWidth;
                    h = this.blackBlipHeight;
                } else {
                    x += this.whiteBlipX;
                    y = this.whiteBlipY;
                    w = this.whiteBlipWidth;
                    h = this.whiteBlipHeight;
                }
                for (var b = 0; b < key.blips.length; b++) {
                    var blip = key.blips[b];
                    if (blip.time > timeBlipEnd) {
                        this.ctx.fillStyle = blip.color;
                        this.ctx.globalAlpha = alpha - ((now - blip.time) / 1000);
                        this.ctx.fillRect(x, y, w, h);
                    } else {
                        key.blips.splice(b, 1);
                        --b;
                    }
                    y -= Math.floor(h * 1.1);
                }
            }
        }
    }
    this.ctx.restore();
};

CanvasRenderer.prototype.getHit = function(x, y) {
    for (var j = 0; j < 2; j++) {
        var sharp = j ? false : true; // black keys first
        for (var i in this.piano.keys) {
            if (!this.piano.keys.hasOwnProperty(i)) continue;
            var key = this.piano.keys[i];
            if (key.sharp != sharp) continue;
            if (key.rect.contains(x, y)) {
                var v = y / (key.sharp ? this.blackKeyHeight : this.whiteKeyHeight);
                v += 0.25;
                v *= DEFAULT_VELOCITY;
                if (v > 1.0) v = 1.0;
                return {
                    "key": key,
                    "v": v
                };
            }
        }
    }
    return null;
};


CanvasRenderer.isSupported = function() {
    var canvas = document.createElement("canvas");
    return !!(canvas.getContext && canvas.getContext("2d"));
};

CanvasRenderer.translateMouseEvent = function(evt) {
    var element = evt.target;
    var offx = 0;
    var offy = 0;
    do {
        if (!element) break; // wtf, wtf?
        offx += element.offsetLeft;
        offy += element.offsetTop;
    } while (element = element.offsetParent);
    return {
        x: evt.pageX - offx,
        y: evt.pageY - offy
    }
};


// Pianoctor

////////////////////////////////////////////////////////////////

var PianoKey = function(note, octave) {
    this.note = note + octave;
    this.baseNote = note;
    this.octave = octave;
    this.sharp = note.indexOf("s") != -1;
    this.loaded = false;
    this.timeLoaded = 0;
    this.domElement = null;
    this.timePlayed = 0;
    this.blips = [];
};

var Piano = function(rootElement) {
    var piano = this;
    piano.rootElement = rootElement;
    piano.keys = {};

    var white_spatial = 0;
    var black_spatial = 0;
    var black_it = 0;
    var black_lut = [2, 1, 2, 1, 1];
    var addKey = function(note, octave) {
        var key = new PianoKey(note, octave);
        piano.keys[key.note] = key;
        if (key.sharp) {
            key.spatial = black_spatial;
            black_spatial += black_lut[black_it % 5];
            ++black_it;
        } else {
            key.spatial = white_spatial;
            ++white_spatial;
        }
    }
    addKey("a", -1);
    addKey("as", -1);
    addKey("b", -1);
    var notes = ["c", "cs", "d", "ds", "e", "f", "fs", "g", "gs", "a", "as", "b"];
    for (var oct = 0; oct < 7; oct++) {
        for (var i in notes) {
            addKey(notes[i], oct);
        }
    }
    addKey("c", 7);

    var render_engine = CanvasRenderer.isSupported() ? CanvasRenderer : DOMRenderer;
    this.renderer = new render_engine().init(this);

    window.addEventListener("resize", function() {
        piano.renderer.resize();
    });

    window.AudioContext = window.AudioContext || window.webkitAudioContext || undefined;
    var audio_engine = AudioEngineWeb;
    this.audio = new audio_engine().init(function() { //old code, replaced by sound selector
        for (var i in piano.keys) {
            if (!piano.keys.hasOwnProperty(i)) continue;
            (function() {
                var key = piano.keys[i];
                piano.audio.load(key.note, gSoundPath + key.note + gSoundExt, function() {
                    key.loaded = true;
                    key.timeLoaded = Date.now();
                    if (key.domElement) // todo: move this to renderer somehow
                        $(key.domElement).removeClass("loading");
                });
            })();
        }
    });
    this.audio = new audio_engine().init();
};

Piano.prototype.play = function(note, vol, participant, delay_ms) {
    if (!this.keys.hasOwnProperty(note)) return;
    var key = this.keys[note];
    if (key.loaded) this.audio.play(key.note, vol, delay_ms, participant.id);
    if (typeof gMidiOutTest === "function") gMidiOutTest(key.note, vol * 100, delay_ms);
    var self = this;
    var jq_namediv = $(typeof participant == "undefined" ? null : participant.nameDiv);
    if (jq_namediv) {
        setTimeout(function() {
            self.renderer.visualize(key, typeof participant == "undefined" ? "yellow" : (participant.color || "#777"));
            jq_namediv.addClass("play");
            setTimeout(function() {
                jq_namediv.removeClass("play");
            }, 30);
        }, delay_ms);
    }
};

Piano.prototype.stop = function(note, participant, delay_ms) {
    if (!this.keys.hasOwnProperty(note)) return;
    var key = this.keys[note];
    if (key.loaded) this.audio.stop(key.note, delay_ms, participant.id);
    if (typeof gMidiOutTest === "function") gMidiOutTest(key.note, 0, delay_ms);
};

var gPiano = new Piano(document.getElementById("piano"));
var gAutoSustain = true;
var toggler = true;
var gSustain = false;
var lol = false;
var inRoom = true;
var gHeldNotes = {};
var gSustainedNotes = {};
/*var checker = setInterval(()=>{
    if(gNoteQuota.history[0] < 200||gNoteQuota.history[1] < 200||gNoteQuota.history[2] < 200) {
        var channel = MPP.client.channel._id
        setroom(channel == "lobby" ? "lolwutsecretlobbybackdoor" : channel);
        toggler = !toggler
    }
        if(gNoteQuota.points>450&&!toggler) setTimeout(()=>{setroom("Proxy Storage");toggler = !toggler},10000)
},1000)*/
function objK(thing) {
    return Object.keys(thing)
}

function summon_proxy(num,hidden = false) {
    if (typeof num !== "number" || !num || num < 0) {
        return "Not a valid number!";
    }
    if (num > objK(proxies).length) {
        return "Not enough Proxies!";
    }
    prx = 0;
    objK(proxies).forEach(function(proxy) {
        if (proxies[proxy].desiredChannelId == gClient.channel._id) prx++
    })
    if (prx > num) {
        //console.log(prx, num)
        for (wut = prx; wut > num; wut--) proxies[wut - 1].setChannel("test/proxyStorage")
    }
    var room = "";
    gClient.channel._id == "lobby" ? room = "lolwutsecretlobbybackdoor" : room = gClient.channel._id
    for (what = 0; what < num; what++) {
        proxies[what].setChannel(room)
    }
    var nums = num == 1 ? nums = num + " proxy." : num + " proxies.";
    if(!hidden) MPP.chat.send("Summoning " + nums)
}
pressable = true
var prev = "";
var notetes = [];
function mode(array)
{
    if(array.length == 0)
        return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}
function press(id, vol,time = Date.now() + MPP.client.serverTimeOffset,Buzz=0,SUST=Psust) {
    //notetes.push(id)
    //if(!pressable&&prev==id) return;
//if(pressable) {
    //if(prev==id) {
     //   pressable = false;
//setTimeout(function(){pressable = true;notetes = [];},30)}
//}
 //   if(mode(notetes)===null||undefined) {
  //  prev = prev
   // }else {
  //  prev = mode(notetes)
  //  }
        if (toggler) {
        try {
            if (lol) {
                num = Math.random();
                if (Math.random() > 0.5) {
                    num2 = 1
                } else {
                    num2 = 2
                };
                if (num < L.mVal) {
                    if (Math.random() > 0.5) {
                        if (Math.random() < L.mMiss) {
                            gPiano.play(MPP.piano.keys[Object.keys(MPP.piano.keys)[Object.keys(MPP.piano.keys).indexOf(id) + transLvl]].note, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), lol ? randNum(0, L.mDel) : 0);
                        };
                        id = MPP.piano.keys[Object.keys(MPP.piano.keys)[Object.keys(MPP.piano.keys).indexOf(id) + transLvl - num2]].note;
                    } else {
                        if (Math.random() < L.mMiss) {
                            gPiano.play(MPP.piano.keys[Object.keys(MPP.piano.keys)[Object.keys(MPP.piano.keys).indexOf(id) + transLvl]].note, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), lol ? randNum(0, L.mDel) : 0);
                        };
                        id = MPP.piano.keys[Object.keys(MPP.piano.keys)[Object.keys(MPP.piano.keys).indexOf(id) + transLvl + 1]].note;
                    }
                }
            } else {
                id = MPP.piano.keys[Object.keys(MPP.piano.keys)[Object.keys(MPP.piano.keys).indexOf(id) + transLvl]].note;
            }
        } catch (e) {
            console.log(e);
            return;
        }
        if (!gClient.preventsPlaying() && gNoteQuota.spend(1)) {
                                                                try {
                                                                    gHeldNotes[id] = true;
                                                                    gSustainedNotes[id] = true;
                                                                    gPiano.play(id, vol !== undefined ? vol : DEFAULT_VELOCITY, gClient.getOwnParticipant(), lol ? randNum(0, L.mDel) : 0);
                                                                    /*gClient.sendArray([{
                    m: "n",
                    t: time,
                   2342342343 n: [{
                        n: id,
                        v: L.vel
                    }]
                }]);
                */
                                                                    //gClient.startNote(id, vol);
                                                                    if (testing) console.log(id);
                                                                    //gClient.startNote(id, vol);
                                                                    gClient.sendArray([{ m: "n", t: (lol ? (randNum(0,L.mDel)) : 0) + time, n: [{ n: id, v: vol }] }]);
                                                                } catch (e) {
                                                                    console.log(e)
                                                                }
                                                               }
    } else {
        try {
            prxC = 0;
            objK(proxies).forEach(function(proxy) {
                if (proxies[proxy].desiredChannelId == gClient.channel._id) prxC++
            })
            var time = time;
            var tp = transLvl;
            var vel = vol;
            var turn = inRoom ? prxC : Object.keys(proxies).length;
            try {
                id = MPP.piano.keys[Object.keys(MPP.piano.keys)[Object.keys(MPP.piano.keys).indexOf(id) + transLvl]].note;
            } catch (e) {
                return;
            }
            if (proxyturn >= turn) {
                proxyturn = 0;
            }
            try {
                if (!proxies[proxyturn].isConnected()) {
                    proxyturn++
                }
                if (!proxies[proxyturn].channel._id == gClient.channel._id) {
                    proxyturn++
                }
            } catch (e) {
                throw new Error(e)
            }
            for (var i = 0; i < L.echos; i++) {
                if(effect) vel = vel - (2/L.echos)
                var time2 = time + (L.time * i);
                //if(effect) time2 = time + (L.time * i) + randNum(0,L.lag)

                //proxies[proxyturn].startNote(id,2)
                notecounter++;
                proxyturn++;
                if (proxyturn >= turn) {
                    proxyturn = 0;
                }
                //proxyturn = (proxyturn += 1) % Object.keys(proxies).length;

                proxies[proxyturn].sendArray([{
                    m: "n",
                    t: time2,
                    n: [{
                        n: id,
                        d: Buzz*i,
                        v: vel
                    }]
                }]);
                if(SUST)proxies[proxyturn].stopNote(id)
                //notecounter2++;
                if (octtoggle) {
                    if (L.octval == 1) {
                        try {
                            var id2 = MPP.piano.keys[Object.keys(MPP.piano.keys)[Object.keys(MPP.piano.keys).indexOf(id) + tp + 12]].note;
                        } catch (e) {
                            return;
                        }
                        proxyturn++;
                        if (proxyturn >= turn) {
                            proxyturn = 0;
                        }
                        notecounter++;
                        proxies[proxyturn].sendArray([{
                            m: "n",
                            t: time + (L.time * i),
                            n: [{
                                n: id2,
                                v: vel
                            }]
                        }]);
                        if(SUST)proxies[proxyturn].stopNote(id)
                    } else if (L.octval == 2) {
                        try {
                            var id3 = MPP.piano.keys[Object.keys(MPP.piano.keys)[Object.keys(MPP.piano.keys).indexOf(id) + tp - 12]].note;
                            var id2 = MPP.piano.keys[Object.keys(MPP.piano.keys)[Object.keys(MPP.piano.keys).indexOf(id) + tp + 12]].note;
                        } catch (e) {
                            return;
                        }
                        proxyturn++;
                        if (proxyturn >= turn) {
                            proxyturn = 0;
                        }
                        notecounter++;
                        proxies[proxyturn].sendArray([{
                            m: "n",
                            t: time + (L.time * i),
                            n: [{
                                n: id2,
                                v: vel
                            }]
                        }]);
                        if(SUST)proxies[proxyturn].stopNote(id)
                        proxyturn++;
                        if (proxyturn >= turn) {
                            proxyturn = 0;
                        }
                        notecounter++;
                        proxies[proxyturn].sendArray([{
                            m: "n",
                            t: time + (L.time * i),
                            n: [{
                                n: id3,
                                v: vel
                            }]
                        }]);
                        if(SUST)proxies[proxyturn].stopNote(id)
                    }
                }
            }
        }catch(e) {console.error(e)}
    }
}
var proxyturn = 0;
function release(id) {
    id = MPP.piano.keys[Object.keys(MPP.piano.keys)[Object.keys(MPP.piano.keys).indexOf(id) + transLvl]].note;

    if (gHeldNotes[id]) {
        gHeldNotes[id] = false;
        if ((gAutoSustain || gSustain) && !enableSynth) {
            gSustainedNotes[id] = true;
        } else {
            if (gNoteQuota.spend(1)) {
                gPiano.stop(id, gClient.getOwnParticipant(), 0);
                gClient.stopNote(id);
                gSustainedNotes[id] = false;
            }
        }
    }
}

function pressSustain() {
    gSustain = true;
}

function releaseSustain() {
    gSustain = false;
    if (!gAutoSustain) {
        for (var id in gSustainedNotes) {
            if (gSustainedNotes.hasOwnProperty(id) && gSustainedNotes[id] && !gHeldNotes[id]) {
                gSustainedNotes[id] = false;
                if (gNoteQuota.spend(1)) {
                    gPiano.stop(id, gClient.getOwnParticipant(), 0);
                    gClient.stopNote(id);
                }
            }
        }
    }
}


// internet science

////////////////////////////////////////////////////////////////

var channel_id = decodeURIComponent(window.location.pathname);
if (channel_id[0] == "/") channel_id = channel_id.substr(1);
if (channel_id == "" || channel_id == "lobby") channel_id = "lolwutsecretlobbybackdoor";

var wssport = window.location.hostname == "www.multiplayerpiano.com" ? 443 : 8080;
var gClient = new Client("ws://" + window.location.hostname + ":" + wssport);
gClient.setChannel(channel_id);
gClient.start();


// Setting status
(function() {
    gClient.on("status", function(status) {
        $("#status").text(status);
    });
    gClient.on("count", function(count) {
        if (count > 0) {
            $("#status").html('<span class="number">' + count + '</span> ' + (count == 1 ? 'person is' : 'people are') + ' playing');
            document.title = "Piano (" + count + ")";
        } else {
            document.title = "Multiplayer Piano";
        }
    });
})();

// Handle changes to participants
(function() {
    gClient.on("participant added", function(part) {
        part.displayX = 150;
        part.displayY = 50;

        // add nameDiv
        var div = document.createElement("div");
        div.className = "name";
        div.participantId = part.id;
        div.textContent = part.name || "";
        div.style.backgroundColor = part.color || "#777";
        if (gClient.participantId === part.id) {
            $(div).addClass("me");
        }
        if (gClient.channel && gClient.channel.crown && gClient.channel.crown.participantId === part.id) {
            $(div).addClass("owner");
        }
        if (gPianoMutes.indexOf(part._id) !== -1) {
            $(part.nameDiv).addClass("muted-notes");
        }
        if (gChatMutes.indexOf(part._id) !== -1) {
            $(part.nameDiv).addClass("muted-chat");
        }
        div.style.display = "none";
        part.nameDiv = $("#names")[0].appendChild(div);
        $(part.nameDiv).fadeIn(2000);

        // sort names
        var arr = $("#names .name");
        arr.sort(function(a, b) {
            a = a.style.backgroundColor; // todo: sort based on user id instead
            b = b.style.backgroundColor;
            if (a > b) return 1;
            else if (a < b) return -1;
            else return 0;
        });
        $("#names").html(arr);

        // add cursorDiv
        if (gClient.participantId !== part.id || config.seeOwnCursor) {
            var div = document.createElement("div");
            div.className = "cursor";
            div.style.display = "none";
            part.cursorDiv = $("#cursors")[0].appendChild(div);
            $(part.cursorDiv).fadeIn(2000);

            var div = document.createElement("div");
            div.className = "name";
            div.style.backgroundColor = part.color || "#777"
            div.textContent = part.name || "";
            part.cursorDiv.appendChild(div);

        } else {
            part.cursorDiv = undefined;
        }
    });
    gClient.on("participant removed", function(part) {
        // remove nameDiv
        var nd = $(part.nameDiv);
        var cd = $(part.cursorDiv);
        cd.fadeOut(2000);
        nd.fadeOut(2000, function() {
            nd.remove();
            cd.remove();
            part.nameDiv = undefined;
            part.cursorDiv = undefined;
        });
    });
    gClient.on("participant update", function(part) {
        var name = part.name || "";
        var color = part.color || "#777";
        part.nameDiv.style.backgroundColor = color;
        part.nameDiv.textContent = name;
        $(part.cursorDiv)
            .find(".name")
            .text(name)
            .css("background-color", color);
    });
    gClient.on("ch", function(msg) {
        for (var id in gClient.ppl) {
            if (gClient.ppl.hasOwnProperty(id)) {
                var part = gClient.ppl[id];
                if (part.id === gClient.participantId) {
                    $(part.nameDiv).addClass("me");
                } else {
                    $(part.nameDiv).removeClass("me");
                }
                if (msg.ch.crown && msg.ch.crown.participantId === part.id) {
                    $(part.nameDiv).addClass("owner");
                    $(part.cursorDiv).addClass("owner");
                } else {
                    $(part.nameDiv).removeClass("owner");
                    $(part.cursorDiv).removeClass("owner");
                }
                if (gPianoMutes.indexOf(part._id) !== -1) {
                    $(part.nameDiv).addClass("muted-notes");
                } else {
                    $(part.nameDiv).removeClass("muted-notes");
                }
                if (gChatMutes.indexOf(part._id) !== -1) {
                    $(part.nameDiv).addClass("muted-chat");
                } else {
                    $(part.nameDiv).removeClass("muted-chat");
                }
            }
        }
    });
})();

// Handle changes to crown
(function() {
    var jqcrown = $('<div id="crown"></div>').appendTo(document.body).hide();
    var jqcountdown = $('<span></span>').appendTo(jqcrown);
    var countdown_interval;
    jqcrown.click(function() {
        gClient.sendArray([{
            m: "chown",
            id: gClient.participantId
        }]);
    });
    gClient.on("ch", function(msg) {
        if (msg.ch.crown) {
            var crown = msg.ch.crown;
            if (!crown.participantId || !gClient.ppl[crown.participantId]) {
                var land_time = crown.time + 2000 - gClient.serverTimeOffset;
                var avail_time = crown.time + 15000 - gClient.serverTimeOffset;
                jqcountdown.text("");
                jqcrown.show();
                if (land_time - Date.now() <= 0) {
                    jqcrown.css({
                        "left": crown.endPos.x + "%",
                        "top": crown.endPos.y + "%"
                    });
                } else {
                    jqcrown.css({
                        "left": crown.startPos.x + "%",
                        "top": crown.startPos.y + "%"
                    });
                    jqcrown.addClass("spin");
                    jqcrown.animate({
                        "left": crown.endPos.x + "%",
                        "top": crown.endPos.y + "%"
                    }, 2000, "linear", function() {
                        jqcrown.removeClass("spin");
                    });
                }
                clearInterval(countdown_interval);
                countdown_interval = setInterval(function() {
                    var time = Date.now();
                    if (time >= land_time) {
                        var ms = avail_time - time;
                        if (ms > 0) {
                            jqcountdown.text(Math.ceil(ms / 1000) + "s");
                        } else {
                            jqcountdown.text("");
                            clearInterval(countdown_interval);
                        }
                    }
                }, 1000);
            } else {
                jqcrown.hide();
            }
        } else {
            jqcrown.hide();
        }
    });
    gClient.on("disconnect", function() {
        jqcrown.fadeOut(2000);
    });
})();

// Playing notes
gClient.on("n", function(msg) {
    if (config.blockNotes || config.incognito) return;
    var t = msg.t - gClient.serverTimeOffset + TIMING_TARGET - Date.now();
    var participant = gClient.findParticipantById(msg.p);
    if (gPianoMutes.indexOf(participant._id) !== -1) return;
    for (var i = msg.n.length; i--;) {
        var note = msg.n[(msg.n.length - 1) - i];
        var ms = t + (note.d || 0);
        ms = ms < 0 ? 0 : ms;
        if (ms > 10000) continue;
        if (note.s) {
            gPiano.stop(note.n, participant, ms);
        } else {
            var vel = (typeof note.v !== "undefined") ? parseFloat(note.v) : DEFAULT_VELOCITY;
            if (vel < 0) vel = 0;
            else if (vel > 1) vel = 1;
            gPiano.play(note.n, vel, participant, ms);
            if (enableSynth) {
                gPiano.stop(note.n, participant, ms + 1000);
            }
        }
    }
});

// Send cursor updates
var mx = 0,
    last_mx = -10,
    my = 0,
    last_my = -10;
(function() {
    reqAnimFrame(function animCur() {
        if (Math.abs(mx - last_mx) > 0.1 || Math.abs(my - last_my) > 0.1) {
            last_mx = mx;
            last_my = my;
            gClient.sendArray([{
                m: "m",
                x: mx,
                y: my
            }]);
            var part = gClient.getOwnParticipant();
            if (part) {
                part.x = mx;
                part.y = my;
            }
        }
        setTimeout(reqAnimFrame, 10, animCur);
    });
})();
$(document).mousemove(function(event) {
    if (!document.hasFocus()) return;
    mx = ((event.pageX / $(window).width()) * 100).toFixed(2);
    my = ((event.pageY / $(window).height()) * 100).toFixed(2);
});
(function() {
    reqAnimFrame(function animCur() {
        var ids = Object.keys(gClient.ppl);
        for (var i = ids.length; i--;) {
            var part = gClient.ppl[ids[i]];
            if (part.cursorDiv && (Math.abs(part.x - part.displayX) > 0.1 || Math.abs(part.y - part.displayY) > 0.1)) {
                part.displayX += (part.x - part.displayX) * 0.75;
                part.displayY += (part.y - part.displayY) * 0.75;
                part.cursorDiv.style.left = part.displayX + "%";
                part.cursorDiv.style.top = part.displayY + "%";
            }
        }
        setTimeout(reqAnimFrame, 25, animCur);
    });
})();

// Room settings button
(function() {
    gClient.on("ch", function(msg) {
        if (gClient.isOwner()) {
            $("#room-settings-btn").show();
        } else {
            $("#room-settings-btn").hide();
        }
    });
    $("#room-settings-btn").click(function(evt) {
        if (gClient.channel && gClient.isOwner()) {
            var settings = gClient.channel.settings;
            openModal("#room-settings");
            setTimeout(function() {
                $("#room-settings .checkbox[name=visible]").prop("checked", settings.visible);
                $("#room-settings .checkbox[name=chat]").prop("checked", settings.chat);
                $("#room-settings .checkbox[name=crownsolo]").prop("checked", settings.crownsolo);
                $("#room-settings input[name=color]").val(settings.color);
            }, 100);
        }
    });
    $("#room-settings .submit").click(function() {
        var settings = {
            visible: $("#room-settings .checkbox[name=visible]").is(":checked"),
            chat: $("#room-settings .checkbox[name=chat]").is(":checked"),
            crownsolo: $("#room-settings .checkbox[name=crownsolo]").is(":checked"),
            color: $("#room-settings input[name=color]").val()
        };
        gClient.sendArray([{
            m: "chset",
            set: settings
        }]);
        closeModal();
    });
    $("#room-settings .drop-crown").click(function() {
        gClient.sendArray([{
            m: "chown"
        }]);
        closeModal();
    });
})();

// Handle notifications
gClient.on("notification", function(msg) {
    new MPPNotification(msg);
});

// Don't foget spin
gClient.on("ch", function(msg) {
    var chidlo = msg.ch._id.toLowerCase();
    if (chidlo === "spin" || chidlo.substr(-5) === "/spin") {
        $("#piano").addClass("spin");
    } else {
        $("#piano").removeClass("spin");
    }
});

// Crownsolo notice
gClient.on("ch", function(msg) {
    if (msg.ch.settings.crownsolo) {
        if ($("#crownsolo-notice").length == 0) {
            $('<div id="crownsolo-notice">').text('This room is set to "only the owner can play."').appendTo("body").fadeIn(1000);
        }
    } else {
        $("#crownsolo-notice").remove();
    }
});
gClient.on("disconnect", function() {
    $("#crownsolo-notice").remove();
});

// Background color
var old_color1 = new Color("#3b5054");
var old_color2 = new Color("#3b5054");

function setColor(hex) {
    var color1 = new Color(hex);
    var color2 = new Color(hex);
    color2.add(-0x40, -0x40, -0x40);

    var bottom = document.getElementById("bottom");
    var duration = 500;
    var step = 0;
    var steps = 30;
    var step_ms = duration / steps;
    var difference = new Color(color1.r, color1.g, color1.b);
    difference.r -= old_color1.r;
    difference.g -= old_color1.g;
    difference.b -= old_color1.b;
    var inc = new Color(difference.r / steps, difference.g / steps, difference.b / steps);
    var iv;
    iv = setInterval(function() {
        old_color1.add(inc.r, inc.g, inc.b);
        old_color2.add(inc.r, inc.g, inc.b);
        document.body.style.background = "radial-gradient(ellipse at center, " + old_color1.toHexa() + " 0%," + old_color2.toHexa() + " 100%)";
        bottom.style.background = old_color2.toHexa();
        if (++step >= steps) {
            clearInterval(iv);
            old_color1 = color1;
            old_color2 = color2;
            document.body.style.background = "radial-gradient(ellipse at center, " + color1.toHexa() + " 0%," + color2.toHexa() + " 100%)";
            bottom.style.background = color2.toHexa();
        }
    }, step_ms);
}

setColor("#3b5054");

gClient.on("ch", function(ch) {
    if (ch.ch.settings) {
        if (ch.ch.settings.color) {
            setColor(ch.ch.settings.color);
        } else {
            setColor("#3b5054");
        }
    }
});


var gPianoMutes = JSON.parse(localStorage.gPianoMutes || "[]");
var gChatMutes = JSON.parse(localStorage.gChatMutes || "[]");

var volume_slider = new VolumeSlider(document.getElementById("volume"), function(v) {
    gPiano.audio.setVolume(v);
    if (window.localStorage) localStorage.volume = v;
});
volume_slider.set(gPiano.audio.volume);


var Note = function(note, octave) {
    this.note = note;
    this.octave = octave || 0;
};

var n = function(a, b) {
    return {
        note: new Note(a, b),
        held: false
    };
};

var key_binding = {
    65: n("gs"),
    90: n("a"),
    83: n("as"),
    88: n("b"),
    67: n("c", 1),
    70: n("cs", 1),
    86: n("d", 1),
    71: n("ds", 1),
    66: n("e", 1),
    78: n("f", 1),
    74: n("fs", 1),
    77: n("g", 1),
    75: n("gs", 1),
    188: n("a", 1),
    76: n("as", 1),
    190: n("b", 1),
    191: n("c", 2),
    222: n("cs", 2),
    49: n("gs", 1),
    81: n("a", 1),
    50: n("as", 1),
    87: n("b", 1),
    69: n("c", 2),
    52: n("cs", 2),
    82: n("d", 2),
    53: n("ds", 2),
    84: n("e", 2),
    89: n("f", 2),
    55: n("fs", 2),
    85: n("g", 2),
    56: n("gs", 2),
    73: n("a", 2),
    57: n("as", 2),
    79: n("b", 2),
    80: n("c", 3),
    189: n("cs", 3),
    219: n("d", 3),
    187: n("ds", 3),
    221: n("e", 3)
};

var capsLockKey = false;
var transpose_octave = 0;
var captureKeys = true;
var num =1;

function handleKeyDown(evt) {
    if (captureKeys) {
        //console.log(evt);
        var code = parseInt(evt.keyCode);
        if (code == 37 || code == 39) {
            code == 37 ? num-- : num++;
            if (typeof num !== "number" || !num || num < 0) {
                num = 1;
                throw new Error("Not a valid number!");
            }
            if (num > objK(proxies).length) {
                num=objK(proxies).length
                throw new Error("Not enough Proxies!");
            }
            summon_proxy(num,true);

            new MPPNotification({
                title: "Connecting Proxies...",
                html: "Proxies: " + num,
                target: "#midi-btn",
                duration: 1500
            });
            //new MPPNotification({
            //    title: "Transposing",
            //    html: "Transpose level: " + transLvl,
            //    target: "#midi-btn",
            //    duration: 1500
            //});
        }
        if (key_binding[code] !== undefined) {
            var binding = key_binding[code];
            if (!binding.held) {
                binding.held = true;

                var note = binding.note;
                var octave = 1 + note.octave + transpose_octave;
                if (evt.shiftKey) ++octave;
                else if (capsLockKey || evt.ctrlKey) --octave;
                note = note.note + octave;
                var vol = velocityFromMouseY();
                press(note, vol);
            }
            if (++gKeyboardSeq == 3) {
                gKnowsYouCanUseKeyboard = true;
                if (window.gKnowsYouCanUseKeyboardTimeout) clearTimeout(gKnowsYouCanUseKeyboardTimeout);
                if (localStorage) localStorage.knowsYouCanUseKeyboard = true;
                if (window.gKnowsYouCanUseKeyboardMPPNotification) gKnowsYouCanUseKeyboardMPPNotification.close();
            }
            evt.preventDefault();
            evt.stopPropagation();
            return false;
        } else if (code == 20) { // Caps Lock
            capsLockKey = true;
            evt.preventDefault();
        } else if (code === 0x20) { // Space Bar
            pressSustain();
            evt.preventDefault();
        } else if ((code === 38 || code === 39) && transpose_octave < 3) {
            //++transpose_octave;
        } else if ((code === 40 || code === 37) && transpose_octave > -2) {
            //--transpose_octave;
        } else if (code == 9) { // Tab (don't tab away from the piano)
            evt.preventDefault();
        } else if (code == 8) { // Backspace (don't navigate Back)
            gAutoSustain = !gAutoSustain;
            evt.preventDefault();
        }
    }
};

function handleKeyUp(evt) {
    if (captureKeys) {
        var code = parseInt(evt.keyCode);
        if (key_binding[code] !== undefined) {
            var binding = key_binding[code];
            if (binding.held) {
                binding.held = false;

                var note = binding.note;
                var octave = 1 + note.octave + transpose_octave;
                if (evt.shiftKey) ++octave;
                else if (capsLockKey || evt.ctrlKey) --octave;
                note = note.note + octave;
                release(note);
            }
            evt.preventDefault();
            evt.stopPropagation();
            return false;
        } else if (code == 20) { // Caps Lock
            capsLockKey = false;
            evt.preventDefault();
        } else if (code === 0x20) { // Space Bar
            releaseSustain();
            evt.preventDefault();
        }
    }
};

function handleKeyPress(evt) {
    if (captureKeys) {
        evt.preventDefault();
        evt.stopPropagation();
        if (evt.keyCode == 27 || evt.keyCode == 13) {
            //$("#chat input").focus();
        }
        return false;
    }
};
$(document).on("keydown", handleKeyDown);
$(document).on("keyup", handleKeyUp);
$(window).on("keypress", handleKeyPress);
var recapListener = function(evt) {
    captureKeyboard();
};

function captureKeyboard() {
    captureKeys = true;
    return;
    //$("#piano").off("mousedown", recapListener);
    //$("#piano").off("touchstart", recapListener);
    $(document).on("keydown", handleKeyDown);
    $(document).on("keyup", handleKeyUp);
    $(window).on("keypress", handleKeyPress);
};

function releaseKeyboard() {
    captureKeys = false;
    return;
    $(document).off("keydown", handleKeyDown);
    $(document).off("keyup", handleKeyUp);
    $(window).off("keypress", handleKeyPress);
    //$("#piano").on("mousedown", recapListener);
    //$("#piano").on("touchstart", recapListener);
};

captureKeyboard();

var velocityFromMouseY = function() {
    return 0.1 + (my / 100) * 0.6;
};


// NoteQuota
var gNoteQuota = (function() {
    var last_rat = 0;
    var nqjq = $("#quota .value");
    setInterval(function() {
        gNoteQuota.tick();
    }, 2000);
    return new NoteQuota(function(points) {
        // update UI
        var rat = (points / this.max) * 100;
        if (rat <= last_rat)
            nqjq.stop(true, true).css("width", rat.toFixed(0) + "%");
        else
            nqjq.stop(true, true).animate({
                "width": rat.toFixed(0) + "%"
            }, 2000, "linear");
        last_rat = rat;
    });
})();
gClient.on("nq", function(nq_params) {
    gNoteQuota.setParams(nq_params);
});
gClient.on("disconnect", function() {
    gNoteQuota.setParams(NoteQuota.PARAMS_OFFLINE);
});


// click participant names
(function() {
    var ele = document.getElementById("names");
    var touchhandler = function(e) {
        var target_jq = $(e.target);
        if (target_jq.hasClass("name")) {
            target_jq.addClass("play");
            if (e.target.participantId == gClient.participantId) {
                openModal("#rename", "input[name=name]");
                setTimeout(function() {
                    $("#rename input[name=name]").val(gClient.ppl[gClient.participantId].name);
                    $("#rename input[name=color]").val(gClient.ppl[gClient.participantId].color);
                }, 100);
            } else if (e.target.participantId) {
                var id = e.target.participantId;
                var part = gClient.ppl[id] || null;
                if (part) {
                    participantMenu(part);
                    e.stopPropagation();
                }
            }
        }
    };
    ele.addEventListener("mousedown", touchhandler);
    ele.addEventListener("touchstart", touchhandler);
    var releasehandler = function(e) {
        $("#names .name").removeClass("play");
    };
    document.body.addEventListener("mouseup", releasehandler);
    document.body.addEventListener("touchend", releasehandler);

    var removeParticipantMenus = function() {
        $(".participant-menu").remove();
        $(".participantSpotlight").hide();
        document.removeEventListener("mousedown", removeParticipantMenus);
        document.removeEventListener("touchstart", removeParticipantMenus);
    };

    var participantMenu = function(part) {
        if (!part) return;
        removeParticipantMenus();
        document.addEventListener("mousedown", removeParticipantMenus);
        document.addEventListener("touchstart", removeParticipantMenus);
        $("#" + part.id).find(".enemySpotlight").show();
        var menu = $('<div class="participant-menu"></div>');
        $("body").append(menu);
        // move menu to name position
        var jq_nd = $(part.nameDiv);
        var pos = jq_nd.position();
        menu.css({
            "top": pos.top + jq_nd.height() + 15,
            "left": pos.left + 6,
            "background": part.color || "black"
        });
        menu.on("mousedown touchstart", function(evt) {
            evt.stopPropagation();
            var target = $(evt.target);
            if (target.hasClass("menu-item")) {
                target.addClass("clicked");
                menu.fadeOut(200, function() {
                    removeParticipantMenus();
                });
            }
        });
        // this spaces stuff out but also can be used for informational
        $('<div class="info"></div>').appendTo(menu).text(part._id);
        // add menu items
        if (gPianoMutes.indexOf(part._id) == -1) {
            $('<div class="menu-item">Mute Notes</div>').appendTo(menu)
                .on("mousedown touchstart", function(evt) {
                gPianoMutes.push(part._id);
                localStorage.gPianoMutes = JSON.stringify(gPianoMutes);
                $(part.nameDiv).addClass("muted-notes");
            });
        } else {
            $('<div class="menu-item">Unmute Notes</div>').appendTo(menu)
                .on("mousedown touchstart", function(evt) {
                var i;
                while ((i = gPianoMutes.indexOf(part._id)) != -1)
                    gPianoMutes.splice(i, 1);
                localStorage.gPianoMutes = JSON.stringify(gPianoMutes);
                $(part.nameDiv).removeClass("muted-notes");
            });
        }
        if (gChatMutes.indexOf(part._id) == -1) {
            $('<div class="menu-item">Mute Chat</div>').appendTo(menu)
                .on("mousedown touchstart", function(evt) {
                gChatMutes.push(part._id);
                localStorage.gChatMutes = JSON.stringify(gChatMutes);
                $(part.nameDiv).addClass("muted-chat");
            });
        } else {
            $('<div class="menu-item">Unmute Chat</div>').appendTo(menu)
                .on("mousedown touchstart", function(evt) {
                var i;
                while ((i = gChatMutes.indexOf(part._id)) != -1)
                    gChatMutes.splice(i, 1);
                localStorage.gChatMutes = JSON.stringify(gChatMutes);
                $(part.nameDiv).removeClass("muted-chat");
            });
        }
        if (!(gPianoMutes.indexOf(part._id) >= 0) || !(gChatMutes.indexOf(part._id) >= 0)) {
            $('<div class="menu-item">Mute Completely</div>').appendTo(menu)
                .on("mousedown touchstart", function(evt) {
                gPianoMutes.push(part._id);
                gChatMutes.push(part._id);
                localStorage.gPianoMutes = JSON.stringify(gPianoMutes);
                localStorage.gChatMutes = JSON.stringify(gChatMutes);
                $(part.nameDiv).addClass("muted-notes");
                $(part.nameDiv).addClass("muted-chat");
            });
        }
        if ((gPianoMutes.indexOf(part._id) >= 0) || (gChatMutes.indexOf(part._id) >= 0)) {
            $('<div class="menu-item">Unmute Completely</div>').appendTo(menu)
                .on("mousedown touchstart", function(evt) {
                var i;
                while ((i = gPianoMutes.indexOf(part._id)) != -1)
                    gPianoMutes.splice(i, 1);
                while ((i = gChatMutes.indexOf(part._id)) != -1)
                    gChatMutes.splice(i, 1);
                localStorage.gPianoMutes = JSON.stringify(gPianoMutes);
                localStorage.gChatMutes = JSON.stringify(gChatMutes);
                $(part.nameDiv).removeClass("muted-notes");
                $(part.nameDiv).removeClass("muted-chat");
            });
        }
        $('<div class="menu-item">Remove Chat</div>').appendTo(menu).on("mousedown touchstart", function(evt) {
            var msgs = document.getElementsByClassName(part._id + "_chat");
            while (msgs[0]) msgs[0].parentNode.removeChild(msgs[0]);
        });
        if (gClient.isOwner()) {
            $('<div class="menu-item give-crown">Give Crown</div>').appendTo(menu)
                .on("mousedown touchstart", function(evt) {
                gClient.sendArray([{
                    m: "chown",
                    id: part.id
                }]);
            });
            $('<div class="menu-item kickban">Kickban</div>').appendTo(menu)
                .on("mousedown touchstart", function(evt) {
                var minutes = prompt("How many minutes? (0-60)", "30");
                if (minutes === null) return;
                minutes = parseFloat(minutes) || 0;
                var ms = minutes * 60 * 1000;
                gClient.sendArray([{
                    m: "kickban",
                    _id: part._id,
                    ms: ms
                }]);
            });
        }
        menu.fadeIn(100);
    };
})();


// MPPNotification class

////////////////////////////////////////////////////////////////

var MPPNotification = function(par) {
    EventEmitter.call(this);
    var par = par || {};

    this.id = "MPPNotification-" + (par.id || Math.random());
    this.title = par.title || "";
    this.text = par.text || "";
    this.html = par.html || "";
    this.target = $(par.target || "#piano");
    this.duration = par.duration || 30000;
    this["class"] = par["class"] || "classic";

    var self = this;
    var eles = $("#" + this.id);
    if (eles.length > 0) {
        eles.remove();
    }
    this.domElement = $('<div class="notification"><div class="notification-body"><div class="title"></div>' +
                        '<div class="text"></div></div><div class="x">x</div></div>');
    this.domElement[0].id = this.id;
    this.domElement.addClass(this["class"]);
    this.domElement.find(".title").text(this.title);
    if (this.text.length > 0) {
        this.domElement.find(".text").text(this.text);
    } else if (this.html instanceof HTMLElement) {
        this.domElement.find(".text")[0].appendChild(this.html);
    } else if (this.html.length > 0) {
        this.domElement.find(".text").html(this.html);
    }
    document.body.appendChild(this.domElement.get(0));

    this.position();
    this.onresize = function() {
        self.position();
    };
    window.addEventListener("resize", this.onresize);

    this.domElement.find(".x").click(function() {
        self.close();
    });
    if (this.duration > 0) {
        setTimeout(function() {
            self.close();
        }, this.duration);
    }
    return this;
}

mixin(MPPNotification.prototype, EventEmitter.prototype);
MPPNotification.prototype.constructor = MPPNotification;

MPPNotification.prototype.position = function() {
    var pos = this.target.offset();
    var x = pos.left - (this.domElement.width() / 2) + (this.target.width() / 4);
    var y = pos.top - this.domElement.height() - 8;
    var width = this.domElement.width();
    if (x + width > $("body").width()) {
        x -= ((x + width) - $("body").width());
    }
    if (x < 0) x = 0;
    this.domElement.offset({
        left: x,
        top: y
    });
};

MPPNotification.prototype.close = function() {
    var self = this;
    window.removeEventListener("resize", this.onresize);
    this.domElement.fadeOut(500, function() {
        self.domElement.remove();
        self.emit("close");
    });
};


// set variables from settings or set settings

////////////////////////////////////////////////////////////////

var gKeyboardSeq = 0;
var gKnowsYouCanUseKeyboard = false;
if (localStorage && localStorage.knowsYouCanUseKeyboard) gKnowsYouCanUseKeyboard = true;
if (!gKnowsYouCanUseKeyboard) {
    window.gKnowsYouCanUseKeyboardTimeout = setTimeout(function() {
        window.gKnowsYouCanUseKeyboardMPPNotification = new MPPNotification({
            title: "Did you know!?!",
            text: "You can play the piano with your keyboard, too.  Try it!",
            target: "#piano",
            duration: 10000
        });
    }, 30000);
}


if (window.localStorage) {
    if (localStorage.volume) {
        volume_slider.set(localStorage.volume);
        gPiano.audio.setVolume(localStorage.volume);
    } else localStorage.volume = gPiano.audio.volume;
    window.gHasBeenHereBefore = (localStorage.gHasBeenHereBefore || false);
    if (gHasBeenHereBefore) {}
    localStorage.gHasBeenHereBefore = true;
}


// New room, change room

////////////////////////////////////////////////////////////////

$("#room > .info").text("--");
gClient.on("ch", function(msg) {
    var channel = msg.ch;
    var info = $("#room > .info");
    info.text(channel._id);
    if (channel.settings.lobby) info.addClass("lobby");
    else info.removeClass("lobby");
    if (!channel.settings.chat) info.addClass("no-chat");
    else info.removeClass("no-chat");
    if (channel.settings.crownsolo) info.addClass("crownsolo");
    else info.removeClass("crownsolo");
    if (!channel.settings.visible) info.addClass("not-visible");
    else info.removeClass("not-visible");
});
gClient.on("ls", function(ls) {
    for (var i in ls.u) {
        if (!ls.u.hasOwnProperty(i)) continue;
        var room = ls.u[i];
        var info = $("#room .info[roomname=\"" + (room._id + '').replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0') + "\"]");
        if (info.length == 0) {
            info = $("<div class=\"info\"></div>");
            info.attr("roomname", room._id);
            $("#room .more").append(info);
        }
        info.text(room._id + " (" + room.count + ")");
        if (room.settings.lobby) info.addClass("lobby");
        else info.removeClass("lobby");
        if (!room.settings.chat) info.addClass("no-chat");
        else info.removeClass("no-chat");
        if (room.settings.crownsolo) info.addClass("crownsolo");
        else info.removeClass("crownsolo");
        if (!room.settings.visible) info.addClass("not-visible");
        else info.removeClass("not-visible");
    }
});
$("#room").on("click", function(evt) {
    evt.stopPropagation();
    // clicks on a new room
    if ($(evt.target).hasClass("info") && $(evt.target).parents(".more").length) {
        $("#room .more").fadeOut(250);
        var selected_name = $(evt.target).attr("roomname");
        if (typeof selected_name != "undefined") {
            changeRoom(selected_name, "right");
        }
        return false;
    }
    // clicks on "New Room..."
    else if ($(evt.target).hasClass("new")) {
        openModal("#new-room", "input[name=name]");
    }
    // all other clicks
    var doc_click = function(evt) {
        if ($(evt.target).is("#room .more")) return;
        $(document).off("mousedown", doc_click);
        $("#room .more").fadeOut(250);
        gClient.sendArray([{
            m: "-ls"
        }]);
    }
    $(document).on("mousedown", doc_click);
    $("#room .more .info").remove();
    $("#room .more").show();
    gClient.sendArray([{
        m: "+ls"
    }]);
});
$("#new-room-btn").on("click", function(evt) {
    evt.stopPropagation();
    openModal("#new-room", "input[name=name]");
});


$("#play-alone-btn").on("click", function(evt) {
    evt.stopPropagation();
    var room_name = "Room" + Math.floor(Math.random() * 1000000000000);
    changeRoom(room_name, "right", {
        "visible": false,
        "chat": true,
        "crownsolo": false
    });
    setTimeout(function() {
        new MPPNotification({
            id: "share",
            title: "Playing alone",
            html: 'You are playing alone in a room by yourself, but you can always invite \
friends by sending them the link.<br/><br/>\
<a href="#" onclick="window.open(\'https://www.facebook.com/sharer/sharer.php?u=\'+encodeURIComponent(location.href),\'facebook-share-dialog\',\'width=626,height=436\');return false;">Share on Facebook</a><br/><br/>\
<a href="http://twitter.com/home?status=' + encodeURIComponent(location.href) + '" target="_blank">Tweet</a>',
            duration: 25000
        });
    }, 1000);
});


var gModal;

function modalHandleEsc(evt) {
    if (evt.keyCode == 27) {
        closeModal();
        evt.preventDefault();
        evt.stopPropagation();
    }
};

function openModal(selector, focus) {
    chat.blur();
    releaseKeyboard();
    $(document).on("keydown", modalHandleEsc);
    $("#modal #modals > *").hide();
    $("#modal").fadeIn(250);
    $(selector).show();
    setTimeout(function() {
        $(selector).find(focus).focus();
    }, 100);
    gModal = selector;
};

function closeModal() {
    $(document).off("keydown", modalHandleEsc);
    $("#modal").fadeOut(100);
    $("#modal #modals > *").hide();
    captureKeyboard();
    gModal = null;
};

var modal_bg = $("#modal .bg")[0];
$(modal_bg).on("click", function(evt) {
    if (evt.target != modal_bg) return;
    closeModal();
});

(function() {
    function submit() {
        var name = $("#new-room .text[name=name]").val();
        var settings = {
            visible: $("#new-room .checkbox[name=visible]").is(":checked"),
            chat: true,
            crownsolo: false
        };
        $("#new-room .text[name=name]").val("");
        closeModal();
        changeRoom(name, "right", settings);
        setTimeout(function() {
            new MPPNotification({
                id: "share",
                title: "Created a Room",
                html: 'You can invite friends to your room by sending them the link.<br/><br/>\
<a href="#" onclick="window.open(\'https://www.facebook.com/sharer/sharer.php?u=\'+encodeURIComponent(location.href),\'facebook-share-dialog\',\'width=626,height=436\');return false;">Share on Facebook</a><br/><br/>\
<a href="http://twitter.com/home?status=' + encodeURIComponent(location.href) + '" target="_blank">Tweet</a>',
                duration: 25000
            });
        }, 1000);
    };
    $("#new-room .submit").click(function(evt) {
        submit();
    });
    $("#new-room .text[name=name]").keypress(function(evt) {
        if (evt.keyCode == 13) {
            submit();
        } else if (evt.keyCode == 27) {
            closeModal();
        } else {
            return;
        }
        evt.preventDefault();
        evt.stopPropagation();
        return false;
    });
})();


function changeRoom(name, direction, settings, push) {
    if (!settings) settings = {};
    if (!direction) direction = "right";
    if (typeof push == "undefined") push = true;
    var opposite = direction == "left" ? "right" : "left";

    if (name == "" || name == "lobby") name = "lolwutsecretlobbybackdoor";
    if (gClient.channel && gClient.channel._id === name) return;
    if (push) {
        var url = "/" + encodeURIComponent(name).replace("'", "%27");
        if (window.history && history.pushState) {
            history.pushState({
                "depth": gHistoryDepth += 1,
                "name": name
            }, "Piano > " + name, url);
        } else {
            window.location = url;
            return;
        }
    }
    gClient.setChannel(name, settings);

    var t = 0,
        d = 100;
    $("#piano").addClass("ease-out").addClass("slide-" + opposite);
    setTimeout(function() {
        $("#piano").removeClass("ease-out").removeClass("slide-" + opposite).addClass("slide-" + direction);
    }, t += d);
    setTimeout(function() {
        $("#piano").addClass("ease-in").removeClass("slide-" + direction);
    }, t += d);
    setTimeout(function() {
        $("#piano").removeClass("ease-in");
    }, t += d);
};

var gHistoryDepth = 0;
$(window).on("popstate", function(evt) {
    var depth = evt.state ? evt.state.depth : 0;
    if (depth == gHistoryDepth) return; // <-- forgot why I did that though...

    var direction = depth <= gHistoryDepth ? "left" : "right";
    gHistoryDepth = depth;

    var name = decodeURIComponent(window.location.pathname);
    if (name.substr(0, 1) == "/") name = name.substr(1);
    changeRoom(name, direction, null, false);
});


// Rename

////////////////////////////////////////////////////////////////

(function() {
    function submit() {
        var set = {
            name: $("#rename input[name=name]").val(),
            color: $("#rename input[name=color]").val()
        };
        //$("#rename .text[name=name]").val("");
        closeModal();
        gClient.sendArray([{
            m: "userset",
            set: set
        }]);
    };
    $("#rename .submit").click(function(evt) {
        submit();
    });
    $("#rename .text[name=name]").keypress(function(evt) {
        if (evt.keyCode == 13) {
            submit();
        } else if (evt.keyCode == 27) {
            closeModal();
        } else {
            return;
        }
        evt.preventDefault();
        evt.stopPropagation();
        return false;
    });
})();


// chatctor

////////////////////////////////////////////////////////////////

var chat = (function() {
    gClient.on("ch", function(msg) {
        if (msg.ch.settings.chat) {
            chat.show();
        } else {
            chat.hide();
        }
    });
    gClient.on("disconnect", function(msg) {
        chat.hide();
    });
    gClient.on("c", function(msg) {
        chat.clear();
        if (msg.c) {
            for (var i = 0; i < msg.c.length; i++) {
                chat.receive(msg.c[i], !0);
            }
        }
    });
    gClient.on("a", function(msg) {
        chat.receive(msg);
    });

    $("#chat input").on("focus", function(evt) {
        releaseKeyboard();
        $("#chat").addClass("chatting");
        chat.scrollToBottom();
    });
    /*$("#chat input").on("blur", function(evt) {
    	captureKeyboard();
    	$("#chat").removeClass("chatting");
    	chat.scrollToBottom();
    });*/
    $(document).mousedown(function(evt) {
        if (!$("#chat").has(evt.target).length > 0) {
            chat.blur();
        }
    });
    document.addEventListener("touchstart", function(event) {
        for (var i in event.changedTouches) {
            var touch = event.changedTouches[i];
            if (!$("#chat").has(touch.target).length > 0) {
                chat.blur();
            }
        }
    });
    $(document).on("keydown", function(evt) {
        if ($("#chat").hasClass("chatting")) {
            if (evt.keyCode == 27) {
                chat.blur();
                evt.preventDefault();
                evt.stopPropagation();
            } else if (evt.keyCode == 13) {
                $("#chat input").focus();
            }
        } else if (!gModal && (evt.keyCode == 27 || evt.keyCode == 13)) {
            $("#chat input").focus();
        }
    });
    $("#chat input").on("keydown", function(evt) {
        if (evt.keyCode == 13) {
            var message = $(this).val();
            if (message.length == 0) {
                setTimeout(function() {
                    chat.blur();
                }, 100);
            } else if (message.length <= 512) {
                chat.send(message);
                if (chat.history.length > config.histLen) chat.history.shift();
                chat.history.push(message);
                chat.index = -1;
                chat.placeholder = "";
                $(this).val("");
                setTimeout(function() {
                    chat.blur();
                }, 100);
            }
            evt.preventDefault();
            evt.stopPropagation();
        } else if (evt.keyCode == 38) { //up arrow
            if (chat.index == -1) placeholder = $(this).val();
            chat.index++;
            if (chat.index > chat.history.length - 1) chat.index = chat.history.length - 1;
            $(this).val(chat.history[(chat.history.length - 1) - chat.index]);
        } else if (evt.keyCode == 40) { //down arrow
            chat.index--;
            if (chat.index < -1) chat.index = -1;
            $(this).val(chat.index > -1 ? chat.history[(chat.history.length - 1) - chat.index] : chat.placeholder);
        } else if (evt.keyCode == 27) {
            chat.blur();
            evt.preventDefault();
            evt.stopPropagation();
        } else if (evt.keyCode == 9) {
            evt.preventDefault();
            evt.stopPropagation();
        }
    });

    return {
        history: [],
        index: -1,
        placeholder: "",
        show: function() {
            $("#chat").fadeIn();
        },
        hide: function() {
            $("#chat").fadeOut();
        },
        clear: function() {
            $("#chat li").remove();
        },
        scrollToBottom: function() {
            var ele = $("#chat ul").get(0);
            ele.scrollTop = ele.scrollHeight;
        },
        blur: function() {
            if ($("#chat").hasClass("chatting")) {
                $("#chat input").get(0).blur();
                $("#chat").removeClass("chatting");
                chat.scrollToBottom();
                captureKeyboard();
            }
        },
        send: function(message) {
            gClient.sendArray([{
                m: "a",
                message: message
            }]);
        },
        receive: function(msg, c) {
            config.nameReg = new RegExp(config.names.join("|"), "gi");
            if (!c) { //if is not "c" event message
                if (config.nameReg.test(msg.a)) console.log("someone said yo name", msg.p._id, msg.p.name, msg.a);
            }
            if (gChatMutes.indexOf(msg.p._id) != -1) return;
            var li = $('<li class="' + msg.p._id + '_chat"><span class="name"/><span class="message"/>');
            var final = msg.a.replace(/</g, "&lt;").replace(/#[0-9a-f]{6}/gi, function(x) {
                return `<font color="${x}">${x}</font>`;
            }).replace(config.nameReg, function(x) {
                return `<font color="${MPP.client.getOwnParticipant().color}">${x}</font>`;
            }).replace(/[a-z0-9]{24}/g, function(x) {
                var part = MPP.client.ppl[x];
                if (!part) {
                    var ids = Object.keys(MPP.client.ppl);
                    for (var i = ids.length; i--;) {
                        var tmp = MPP.client.ppl[ids[i]];
                        if (x == tmp._id) {
                            part = tmp;
                            break;
                        }
                    }
                }
                return part ? `<font color="${part.color}">${x}</font>` : x;
            }).replace(/(http|ftp|https):\/\/([\w-]+(\.[\w-]+)|(localhost))([\w.,@?^=%&amp;:/~+#-]*[\w@?^=%&amp;/~+#-])?/gi, function(x) { //TODO: make images only show if clicked
                //if (/iplogger|2no|yip|fuglekos|grabify\.link|bvog\.com|hondachat|youramonkey|blasze/gi.test(x)) return `<font color="#ff0000">Warning: likely an ip grabber, visit at your own risk</font> ${x}`;
                //if (/goo\.gl|tinyurl\.com|bit\.ly|ow\.ly|is\.gd|adf\.ly|bit\.do|mcaf\.ee/gi.test(x)) html = `<font color="#ffcccc">Open shortened urls at your own risk</font> ${x}`;
                var url = x,
                    html;
                if (/.png$|.jpg$|.jpeg$|.gif$|.bmp$/.test(x)) html = `<img style="max-height: 120px; max-width: 600px;" src="${x}" />`;
                if (/imgur.com\/\w{5,7}/.test(x) && !/gallery/.test(x)) url = `https://i.imgur.com/${x.match(/imgur.com\/(\w{5,7})/)[1]}.jpg`, html = `<img style="max-height: 120px; max-width: 600px;" src="${url}" />`;
                if (/gyazo.com\/[a-f0-9]{32}/.test(x)) url = `https://i.gyazo.com/${x.match(/[a-f0-9]{32}/)[0]}.png`, html = `<img style="max-height: 120px; max-width: 600px;" src="${url}" />`;
                return `<a target="_blank" style="text-decoration: none;" href="${url}" onclick="return confirm('Open link?\\n${url}')">${html ? html : url}</a>`;
            });

            if (config.greentext && final[0] == ">" && final[1] != ":") final = `<font color="#789922">${final}</font>`;
            for (var i = chars.length; i--;) {
                var char = chars[i][0];
                var safeChar = char.replace(/\\/g, "");
                final = final.replace(new RegExp(char + char, "g"), safeChar + plchldr).replace(new RegExp(char + ".*?" + char, "g"), function(x) {
                    return `<span ${chars[i][1]}>${x.substr(1, x.length - 2)}</span>`;
                }).replace(new RegExp(plchldr, "g"), safeChar);
            }

            li.find(".name").text(msg.p.name + ":");
            li.find(".message").html(" " + final);
            li.css("color", msg.p.color || "white");

            $("#chat ul").append(li);

            var eles = $("#chat ul li").get();
            for (var i = 1; i <= 50 && i <= eles.length; i++) {
                eles[eles.length - i].style.opacity = 1.0 - (i * 0.03);
            }
            if (eles.length > 50) {
                eles[0].style.display = "none";
            }
            if (eles.length > 256) {
                $(eles[0]).remove();
            }
            // scroll to bottom if not "chatting" or if not scrolled up
            if (!$("#chat").hasClass("chatting")) {
                chat.scrollToBottom();
            } else {
                var ele = $("#chat ul").get(0);
                if (ele.scrollTop > ele.scrollHeight - ele.offsetHeight - 50)
                    chat.scrollToBottom();
            }
        }
    };
})();



// MIDI

////////////////////////////////////////////////////////////////

var MIDI_TRANSPOSE = -12;
var MIDI_KEY_NAMES = ["a-1", "as-1", "b-1"];
var bare_notes = "c cs d ds e f fs g gs a as b".split(" ");
for (var oct = 0; oct < 7; oct++) {
    for (var i in bare_notes) {
        MIDI_KEY_NAMES.push(bare_notes[i] + oct);
    }
}
MIDI_KEY_NAMES.push("c7");

(function() {
    if (navigator.requestMIDIAccess) {
        navigator.requestMIDIAccess().then(
            function(midi) {
                //console.log(midi);
                function midimessagehandler(evt) {
                    if (!evt.target.enabled) return;
                    //console.log(evt);
                    var channel = evt.data[0] & 0xf;
                    var cmd = evt.data[0] >> 4;
                    var note_number = evt.data[1];
                    var vel = evt.data[2];
                    //console.log(channel, cmd, note_number, vel);
                    if (cmd == 8 || (cmd == 9 && vel == 0)) {
                        // NOTE_OFF
                        release(MIDI_KEY_NAMES[note_number - 9 + MIDI_TRANSPOSE]);
                    } else if (cmd == 9) {
                        // NOTE_ON
                        press(MIDI_KEY_NAMES[note_number - 9 + MIDI_TRANSPOSE], vel / 100);
                    } else if (cmd == 11) {
                        // CONTROL_CHANGE
                        if (!gAutoSustain) {
                            if (note_number == 64) {
                                if (vel > 0) {
                                    pressSustain();
                                } else {
                                    releaseSustain();
                                }
                            }
                        }
                    }
                }

                function plug() {
                    if (midi.inputs.size > 0) {
                        var inputs = midi.inputs.values();
                        for (var input_it = inputs.next(); input_it && !input_it.done; input_it = inputs.next()) {
                            var input = input_it.value;
                            //input.removeEventListener("midimessage", midimessagehandler);
                            //input.addEventListener("midimessage", midimessagehandler);
                            input.onmidimessage = midimessagehandler;
                            if (input.enabled !== false) {
                                input.enabled = true;
                            }
                            //console.log("input", input);
                        }
                    }
                    if (midi.outputs.size > 0) {
                        var outputs = midi.outputs.values();
                        for (var output_it = outputs.next(); output_it && !output_it.done; output_it = outputs.next()) {
                            var output = output_it.value;
                            //output.enabled = false; // edit: don't touch
                            //console.log("output", output);
                        }
                        gMidiOutTest = function(note_name, vel, delay_ms) {
                            var note_number = MIDI_KEY_NAMES.indexOf(note_name);
                            if (note_number == -1) return;
                            note_number = note_number + 9 - MIDI_TRANSPOSE;

                            var outputs = midi.outputs.values();
                            for (var output_it = outputs.next(); output_it && !output_it.done; output_it = outputs.next()) {
                                var output = output_it.value;
                                if (output.enabled) {
                                    output.send([0x90, note_number, vel], window.performance.now() + delay_ms);
                                }
                            }
                        }
                    }
                    //showConnections(false);
                }

                midi.addEventListener("statechange", function(evt) {
                    if (evt instanceof MIDIConnectionEvent) {
                        plug();
                    }
                });
                plug();

                var connectionsMPPNotification;

                function showConnections(sticky) {
                    //if(document.getElementById("MPPNotification-MIDI-Connections"))
                    //sticky = 1; // todo: instead,
                    var inputs_ul = document.createElement("ul");
                    if (midi.inputs.size > 0) {
                        var inputs = midi.inputs.values();
                        for (var input_it = inputs.next(); input_it && !input_it.done; input_it = inputs.next()) {
                            var input = input_it.value;
                            var li = document.createElement("li");
                            li.connectionId = input.id;
                            li.classList.add("connection");
                            if (input.enabled) li.classList.add("enabled");
                            li.textContent = input.name;
                            li.addEventListener("click", function(evt) {
                                var inputs = midi.inputs.values();
                                for (var input_it = inputs.next(); input_it && !input_it.done; input_it = inputs.next()) {
                                    var input = input_it.value;
                                    if (input.id === evt.target.connectionId) {
                                        input.enabled = !input.enabled;
                                        evt.target.classList.toggle("enabled");
                                        console.log("click", input);
                                        return;
                                    }
                                }
                            });
                            inputs_ul.appendChild(li);
                        }
                    } else {
                        inputs_ul.textContent = "(none)";
                    }
                    var outputs_ul = document.createElement("ul");
                    if (midi.outputs.size > 0) {
                        var outputs = midi.outputs.values();
                        for (var output_it = outputs.next(); output_it && !output_it.done; output_it = outputs.next()) {
                            var output = output_it.value;
                            var li = document.createElement("li");
                            li.connectionId = output.id;
                            li.classList.add("connection");
                            if (output.enabled) li.classList.add("enabled");
                            li.textContent = output.name;
                            li.addEventListener("click", function(evt) {
                                var outputs = midi.outputs.values();
                                for (var output_it = outputs.next(); output_it && !output_it.done; output_it = outputs.next()) {
                                    var output = output_it.value;
                                    if (output.id === evt.target.connectionId) {
                                        output.enabled = !output.enabled;
                                        evt.target.classList.toggle("enabled");
                                        console.log("click", output);
                                        return;
                                    }
                                }
                            });
                            outputs_ul.appendChild(li);
                        }
                    } else {
                        outputs_ul.textContent = "(none)";
                    }
                    var div = document.createElement("div");
                    var h1 = document.createElement("h1");
                    h1.textContent = "Inputs";
                    div.appendChild(h1);
                    div.appendChild(inputs_ul);
                    h1 = document.createElement("h1");
                    h1.textContent = "Outputs";
                    div.appendChild(h1);
                    div.appendChild(outputs_ul);
                    connectionsMPPNotification = new MPPNotification({
                        "id": "MIDI-Connections",
                        "title": "MIDI Connections",
                        "duration": sticky ? "-1" : "4500",
                        "html": div,
                        "target": "#midi-btn"
                    });
                }

                document.getElementById("midi-btn").addEventListener("click", function(evt) {
                    if (!document.getElementById("MPPNotification-MIDI-Connections"))
                        showConnections(true);
                    else {
                        connectionsMPPNotification.close();
                    }
                });
            },
            function(err) {
                console.log(err);
            });
    }
})();




// bug supply

////////////////////////////////////////////////////////////////

window.onerror = function(message, url, line) {
    var enc = "/bugreport/" +
        (message ? encodeURIComponent(message) : "") + "/" +
        (url ? encodeURIComponent(url) : "") + "/" +
        (line ? encodeURIComponent(line) : ""); //todo: send bugs to my server
    var img = new Image();
    //img.src = enc;
};

// API
window.MPP = {
    press: press,
    release: release,
    piano: gPiano,
    client: gClient,
    chat: chat
};



// record mp3
(function() {
    var button = document.querySelector("#record-btn");
    var audio = MPP.piano.audio;
    var context = audio.context;
    var encoder_sample_rate = 44100;
    var encoder_kbps = 128;
    var encoder = null;
    var scriptProcessorNode = context.createScriptProcessor(4096, 2, 2);
    var recording = false;
    var recording_start_time = 0;
    var mp3_buffer = [];
    button.addEventListener("click", function(evt) {
        if (!recording) {
            // start recording
            mp3_buffer = [];
            encoder = new lamejs.Mp3Encoder(2, encoder_sample_rate, encoder_kbps);
            scriptProcessorNode.onaudioprocess = onAudioProcess;
            audio.masterGain.connect(scriptProcessorNode);
            scriptProcessorNode.connect(context.destination);
            recording_start_time = Date.now();
            recording = true;
            button.textContent = "Stop Recording";
            button.classList.add("stuck");
            new MPPNotification({
                "id": "mp3",
                "title": "Recording MP3...",
                "html": "It's recording now.  This could make things slow, maybe.  Maybe give it a moment to settle before playing.<br><br>This feature is experimental.<br>Send complaints to <a href=\"mailto:multiplayerpiano.com@gmail.com\">multiplayerpiano.com@gmail.com</a>.",
                "duration": 10000
            });
        } else {
            // stop recording
            var mp3buf = encoder.flush();
            mp3_buffer.push(mp3buf);
            var blob = new Blob(mp3_buffer, {
                type: "audio/mp3"
            });
            var url = URL.createObjectURL(blob);
            scriptProcessorNode.onaudioprocess = null;
            audio.masterGain.disconnect(scriptProcessorNode);
            scriptProcessorNode.disconnect(context.destination);
            recording = false;
            button.textContent = "Record MP3";
            button.classList.remove("stuck");
            new MPPNotification({
                "id": "mp3",
                "title": "MP3 recording finished",
                "html": "<a href=\"" + url + "\" target=\"blank\">And here it is!</a> (open or save as)<br><br>This feature is experimental.<br>Send complaints to <a href=\"mailto:multiplayerpiano.com@gmail.com\">multiplayerpiano.com@gmail.com</a>.",
                "duration": 0
            });
        }
    });

    function onAudioProcess(evt) {
        var inputL = evt.inputBuffer.getChannelData(0);
        var inputR = evt.inputBuffer.getChannelData(1);
        var mp3buf = encoder.encodeBuffer(convert16(inputL), convert16(inputR));
        mp3_buffer.push(mp3buf);
    }

    function convert16(samples) {
        var len = samples.length;
        var result = new Int16Array(len);
        for (var i = 0; i < len; i++) {
            result[i] = 0x8000 * samples[i];
        }
        return (result);
    }
})();


// synth
var enableSynth = false;
var audio = gPiano.audio;
var context = gPiano.audio.context;
var synth_gain = context.createGain();
synth_gain.gain.value = 0.05;
synth_gain.connect(audio.synthGain);

var osc_types = ["sine", "square", "sawtooth", "triangle"];
var osc_type_index = 1;
var osc1_type = "square";
var osc1_attack = 0;
var osc1_decay = 0.2;
var osc1_sustain = 0.5;
var osc1_release = 2.0;

function synthVoice(note_name, time) {
    var note_number = MIDI_KEY_NAMES.indexOf(note_name);
    note_number = note_number + 9 - MIDI_TRANSPOSE;
    var freq = Math.pow(2, (note_number - 69) / 12) * 440.0;
    this.osc = context.createOscillator();
    this.osc.type = osc1_type;
    this.osc.frequency.value = freq;
    this.gain = context.createGain();
    this.gain.gain.value = 0;
    this.osc.connect(this.gain);
    this.gain.connect(synth_gain);
    this.osc.start(time);
    this.gain.gain.setValueAtTime(0, time);
    this.gain.gain.linearRampToValueAtTime(1, time + osc1_attack);
    this.gain.gain.linearRampToValueAtTime(osc1_sustain, time + osc1_attack + osc1_decay);
}

synthVoice.prototype.stop = function(time) {
    //this.gain.gain.setValueAtTime(osc1_sustain, time);
    this.gain.gain.linearRampToValueAtTime(0, time + osc1_release);
    this.osc.stop(time + osc1_release);
};

(function() {
    var button = document.getElementById("synth-btn");
    var notification;
    button.addEventListener("click", function() {
        if (notification) {
            notification.close();
        } else {
            showSynth();
        }
    });
    3

    function showSynth() {
        var html = document.createElement("div");
        // on/off button
        (function() {
            var button = document.createElement("input");
            mixin(button, {
                type: "button",
                value: "ON/OFF",
                className: enableSynth ? "switched-on" : "switched-off"
            });
            button.addEventListener("click", function(evt) {
                enableSynth = !enableSynth;
                button.className = enableSynth ? "switched-on" : "switched-off";
                if (!enableSynth) {
                    // stop all
                    for (var i in audio.playings) {
                        if (!audio.playings.hasOwnProperty(i)) continue;
                        var playing = audio.playings[i];
                        if (playing && playing.voice) {
                            playing.voice.osc.stop();
                            playing.voice = undefined;
                        }
                    }
                }
            });
            html.appendChild(button);
        })();

        // mix
        var knob = document.createElement("canvas");
        mixin(knob, {
            width: 32,
            height: 32,
            className: "knob"
        });
        html.appendChild(knob);
        knob = new Knob(knob, 0, 100, 0.1, 50, "mix", "%");
        knob.on("change", function(k) {
            var mix = k.value / 100;
            audio.pianoGain.gain.value = 1 - mix;
            audio.synthGain.gain.value = mix;
        });
        knob.emit("change", knob);

        // osc1 type
        (function() {
            osc1_type = osc_types[osc_type_index];
            var button = document.createElement("input");
            mixin(button, {
                type: "button",
                value: osc_types[osc_type_index]
            });
            button.addEventListener("click", function(evt) {
                if (++osc_type_index >= osc_types.length) osc_type_index = 0;
                osc1_type = osc_types[osc_type_index];
                button.value = osc1_type;
            });
            html.appendChild(button);
        })();

        // osc1 attack
        var knob = document.createElement("canvas");
        mixin(knob, {
            width: 32,
            height: 32,
            className: "knob"
        });
        html.appendChild(knob);
        knob = new Knob(knob, 0, 1, 0.001, osc1_attack, "osc1 attack", "s");
        knob.on("change", function(k) {
            osc1_attack = k.value;
        });
        knob.emit("change", knob);

        // osc1 decay
        var knob = document.createElement("canvas");
        mixin(knob, {
            width: 32,
            height: 32,
            className: "knob"
        });
        html.appendChild(knob);
        knob = new Knob(knob, 0, 2, 0.001, osc1_decay, "osc1 decay", "s");
        knob.on("change", function(k) {
            osc1_decay = k.value;
        });
        knob.emit("change", knob);
        var knob = document.createElement("canvas");
        mixin(knob, {
            width: 32,
            height: 32,
            className: "knob"
        });
        html.appendChild(knob);
        knob = new Knob(knob, 0, 1, 0.001, osc1_sustain, "osc1 sustain", "x");
        knob.on("change", function(k) {
            osc1_sustain = k.value;
        });
        knob.emit("change", knob);

        // osc1 release
        var knob = document.createElement("canvas");
        mixin(knob, {
            width: 32,
            height: 32,
            className: "knob"
        });
        html.appendChild(knob);
        knob = new Knob(knob, 0, 2, 0.001, osc1_release, "osc1 release", "s");
        knob.on("change", function(k) {
            osc1_release = k.value;
        });
        knob.emit("change", knob);
        var div = document.createElement("div");
        div.innerHTML = "<br><br><br><br><center>this space intentionally left blank</center><br><br><br><br>";
        html.appendChild(div);

        // notification
        notification = new MPPNotification({
            title: "Synthesize",
            html: html,
            duration: -1,
            target: "#synth-btn"
        });
        notification.on("close", function() {
            var tip = document.getElementById("tooltip");
            if (tip) tip.parentNode.removeChild(tip);
            notification = null;
        });
    }
})();


// non script.js mods

////////////////////////////////////////////////////////////////

/*var ops = [];
var operator = "/";
gClient.on("a", function(msg) {
    var args = msg.a.split(" ");
    var cmd = args[0].toLowerCase();
    var text = msg.a.substr(cmd.length).trim();
    if (cmd == operator + "js" && (ops.includes(msg.p._id) || msg.p._id == gClient.getOwnParticipant()._id)) {
        try {
            window.msg = msg;
            var out = window.eval(text);
            MPP.chat.send("Console: " + JSON.stringify(out));
        } catch (e) {
            MPP.chat.send("Console: " + e);
        }
    }
});
*/

// Sound Selector
//TODO: Make sure it's optimized, find a good spot for the button
////////////////////////////////////////////////////////////////

/*function SoundSelector(piano) {
    this.btn_pos = {};
    Object.defineProperties(this.btn_pos, {
        bottom: {
            configurable: true,
            get: function() {
                return $("#sound-btn").css("bottom") || "22px";
            },
            set: function(px) {
                $("#sound-btn").css("bottom", px);
            }
        },
        right: {
            configurable: true,
            get: function() {
                return $("#sound-btn").css("right") || "250px";
            },
            set: function(px) {
                $("#sound-btn").css("right", px);
            }
        }
    });
    this.initialized = false;
    this.loadingPacks = {};
    this.keys = piano.keys;
    this.notification;
    this.piano = piano;
    this.selected = localStorage.selected || "MPP Default";
    this.soundpacks = [];
    this.addPack({name: "MPP Default", keys: Object.keys(this.piano.keys), ext: ".wav.mp3", url: "/mp3/"}, false, true);
}

SoundSelector.prototype.addPack = function(url, autoLoad, isObj) {
    var self = this;
    self.loadingPacks[url] = true;
    if (!autoLoad) autoLoad = false;
    if (!isObj) isObj = false;
    function handleInfo(info, obj) {
        if (obj != true) info.url = url;
        if (self.soundpacks.indexOf(info)  != -1) return;
        info.html = document.createElement("li");
        info.html.className = "pack";
        info.html.innerText = info.name + " (" + info.keys.length + " keys)";
        info.html.onclick = function() {
            self.loadPack(info.name);
            self.notification.close();
            self.notification = undefined;
        };
        self.soundpacks.push(info);
        delete self.loadingPacks[url];
        self.soundpacks.sort(function(a, b) {
            if(a.name < b.name) return -1;
            if(a.name > b.name) return 1;
            return 0;
        });
        if (autoLoad) self.loadPack(info.name);
    }
    if (!isObj) {
        try {
            $.get(url + "/info.json").done(handleInfo);
        } catch(e) {
            delete self.loadingPacks[url];
        }
    } else handleInfo(url, true);
};
SoundSelector.prototype.addPacks = function(arr) {
    for (var i = 0; arr.length > i; i++) this.addPack(arr[i]);
};
SoundSelector.prototype.init = function() {
    var self = this;
    var loading = false;
    for (var i in self.loadingPacks) {
        if (self.loadingPacks[i] == true) {
            loading = true;
            break;
        }
    }
    if (loading) return setTimeout(function() {
        self.init();
    }, 250);
    if (self.initialized) return console.warn("Sound selector already initialized!");
    $("head").append(`<style>
.notification .pack {
padding: 0px;
margin: 2px;
background: #fdd;
border: 1px solid #f84;
border-radius: 4px;
cursor: pointer;
}
.notification .pack.enabled { background: #dfd; cursor: not-allowed; }
.notification .pack:after { content: ""; font-size: 10px; color: #a44; float: right; }
.notification .pack.enabled:after { content: "Selected"; font-size: 10px; color: #4a4; float: right; }
</style>`);
    $("body").append(`<div id="sound-btn" class="ugly-button sound-btn" style="position: fixed; bottom: ${self.btn_pos.bottom}; right: ${self.btn_pos.right}; width: 100px; z-index: 500;">Sound Select</div>`);
    $("#sound-btn").on("click", function() {
        if (document.getElementById("Notification-Sound-Selector") != null) return;
        var html = document.createElement("ul");
        $(html).append("<h1>Current Sound: " + self.selected + "</h1>");
        for (var i = 0; self.soundpacks.length > i; i++) {
            var pack = self.soundpacks[i];
            if (pack.name == self.selected) pack.html.classList = "pack enabled";
            else pack.html.classList = "pack";
            html.appendChild(pack.html);
        }
        self.notification = new MPPNotification({title: "Sound Selector:", html: html, id: "Sound-Selector", duration: -1, target: "#sound-btn"});//TODO:
    });
    self.loadPack(self.selected, true);
    self.initialized = true;
};
SoundSelector.prototype.loadPack = function(name, forced) {
    var pack;
    if (name) pack = this.soundpacks.filter(function(x) {
        return x.name == name;
    })[0];
    if (!pack) {
        console.warn("Sound pack does not exist! Loading default pack...");
        pack = this.soundpacks[0];
    }
    if (pack.name == this.selected && !forced) return console.warn("Sound pack already selected! To force it to load add true to the second argument.");
    this.piano.keys = {};
    for (var i = 0; pack.keys.length > i; i++) this.piano.keys[pack.keys[i]] = this.keys[pack.keys[i]]
    this.piano.renderer.resize();
    var self = this;
    for (var i in this.piano.keys) {
        if (!this.piano.keys.hasOwnProperty(i)) continue;
        (function() {
            var key = self.piano.keys[i];
            key.loaded = false;
            self.piano.audio.load(key.note, pack.url + key.note + pack.ext, function() {
                key.loaded = true;
                key.timeLoaded = Date.now();
            });
        })();
    }
    localStorage.selected = name;
    this.selected = name;
};
SoundSelector.prototype.removePack = function(name) {
    var found = false;
    for (var i = 0; this.soundpacks.length > i; i++) {
        var pack = this.soundpacks[i];
        if (pack.name == name) {
            this.soundpacks.splice(i, 1);
            if (pack.name == this.selected) this.loadPack("MPP Default");
            found = true;
            break;
        }
    }
    if (!found) console.warn("Sound pack not found!");
};
var selector = new SoundSelector(MPP.piano);
selector.addPacks(["http://files.meowbin.com/Sounds/Emotional/", "http://files.meowbin.com/Sounds/HardPiano/", "http://files.meowbin.com/Sounds/Music_Box/", "http://files.meowbin.com/Sounds/NewPiano/", "http://files.meowbin.com/Sounds/PianoSounds/", "http://files.meowbin.com/Sounds/Rhodes_MK1/", "http://files.meowbin.com/Sounds/SoftPiano/", "http://files.meowbin.com/Sounds/Vintage_Upright/", "http://files.meowbin.com/Sounds/Steinway_Grand/"]);
selector.init();
*/
//-Kermit Volume v1.2
//-electrashave
$("head").append('<style>.volume-slider:focus{outline:0}.volume-slider::-webkit-slider-thumb{-webkit-appearance:none;border:none;height:24px;width:20px;border-radius:50%;margin-top:-10px}.kermit{background-color:transparent;background-image:url(https://cdn.sstatic.net/Sites/stackoverflow/img/polyglot-404.png);background-repeat:no-repeat;width:100px}.frame-0{background-position:0 0}.frame-1{background-position:-100px 0}.frame-2{background-position:-200px 0}.frame-3{background-position:-300px 0}.frame-4{background-position:-400px 0}.frame-5{background-position:-500px 0}.frame-6{background-position:-600px 0}.frame-7{background-position:-700px 0}.frame-8{background-position:-800px 0}.frame-9{background-position:-900px 0}.frame-10{background-position:-1000px 0}.frame-11{background-position:-1100px 0}.frame-12{background-position:-1200px 0}.frame-13{background-position:-1300px 0}.frame-14{background-position:-1400px 0}.frame-15{background-position:-1500px 0}</style>');
$(".volume-slider")[0].classList = `volume-slider kermit frame-${($(".volume-slider").val() / 1 * 15).toFixed()}`;
$("#volume-label").text("Volume: " + (MPP.piano.audio.volume * 100 | 0) + "%");
$(".volume-slider").on("input", function(evt) {
    $(this)[0].classList = `volume-slider kermit frame-${($(this).val() / 1 * 15 | 0)}`;
    var v = +evt.target.value;
    MPP.piano.audio.setVolume(v);
    if (window.localStorage) localStorage.volume = v;
    $("#volume-label").text("Volume: " + (v * 100 | 0) + "%");
});

// On Startup

////////////////////////////////////////////////////////////////

eval(localStorage.startUpCode);

// Custom prototypes

////////////////////////////////////////////////////////////////

//Client.js
Client.prototype.findByIds = function(x) {
    var part = MPP.client.ppl[x];
    if (!part) {
        var ids = Object.keys(MPP.client.ppl);
        for (var i = ids.length; i--;) {
            var tmp = MPP.client.ppl[ids[i]];
            if (x == tmp._id) {
                part = tmp;
                break;
            }
        }
    }
    return part;
};
Client.prototype.search = function(x) {
    var part = MPP.client.ppl[x];
    if (!part) {
        var ids = Object.keys(MPP.client.ppl);
        for (var i = ids.length; i--;) {
            var tmp = MPP.client.ppl[ids[i]];
            if (x == tmp._id || tmp.name.toLowerCase().indexOf(x.toLowerCase()) != -1) {
                part = tmp;
                break;
            }
        }
    }
    return part;
};
Client.prototype.caseSensitiveSearch = function(x) {
    var part = MPP.client.ppl[x];
    if (!part) {
        var ids = Object.keys(MPP.client.ppl);
        for (var i = ids.length; i--;) {
            var tmp = MPP.client.ppl[ids[i]];
            if (x == tmp._id || tmp.name.indexOf(x) != -1) {
                part = tmp;
                break;
            }
        }
    }
    return part;
};

//Color.js
Color.prototype.toHsl = function() {
    var r = this.r / 255,
        g = this.g / 255,
        b = this.b / 255;
    var cMax = Math.max(r, g, b),
        cMin = Math.min(r, g, b);
    var delta = cMax - cMin;
    var l = (cMax + cMin) / 2;
    return {
        h: delta == 0 ? 0 : cMax == r ? 60 * (((g - b) / delta) % 6) : cMax == g ? 60 * (((b - r) / delta) + 2) : 60 * (((r - g) / delta) + 4),
        s: delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1)),
        l: l
    };
};
Color.prototype.lighten = function(percent, mod) {
    if (percent > 100) return Error("Cannot go above 100%");
    if (percent < 0) return Error("Cannot go below 0%");
    var color = new Color(this.toHexa());
    if (mod) color = this;
    var shade = Math.floor(255 / (100 / percent));
    color.r += shade;
    color.g += shade;
    color.b += shade;
    if (color.r > 255) color.r = 255;
    if (color.g > 255) color.g = 255;
    if (color.b > 255) color.b = 255;
    return color;
};
Color.prototype.darken = function(percent, mod) {
    if (percent > 100) return Error("Cannot go above 100%");
    if (percent < 0) return Error("Cannot go below 0%");
    var color = new Color(this.toHexa());
    if (mod) color = this;
    var shade = Math.floor(255 / (100 / percent));
    color.r -= shade;
    color.g -= shade;
    color.b -= shade;
    if (color.r < 0) color.r = 0;
    if (color.g < 0) color.g = 0;
    if (color.b < 0) color.b = 0;
    return color;
};
Color.prototype.add = function(r, g, b, mod) {
    var color = new Color(this.toHexa());
    if (mod) color = this;
    color.r += r;
    color.g += g;
    color.b += b;
    if (color.r > 255) color.r = 255;
    if (color.g > 255) color.g = 255;
    if (color.b > 255) color.b = 255;
    return color;
};
Color.prototype.remove = function(r, g, b, mod) {
    var color = new Color(this.toHexa());
    if (mod) color = this;
    color.r -= r;
    color.g -= g;
    color.b -= b;
    if (color.r < 0) color.r = 0;
    if (color.g < 0) color.g = 0;
    if (color.b < 0) color.b = 0;
    return color;
};
Color.prototype.hue = function(degree, mod) {
    var color = new Color(this.toHexa());
    if (mod) color = this;
    var hsl = color.toHsl();
    degree = degree > 360 ? 360 : degree < 0 ? 0 : degree;
    hsl.h += degree;
    hsl.h = hsl.h > 360 ? hsl.h - 360 : hsl.h < 0 ? hsl.h + 360 : hsl.h;
    var h = hsl.h,
        c = (1 - Math.abs(2 * hsl.l - 1)) * hsl.s,
        x = c * (1 - Math.abs((h / 60) % 2 - 1));
    var rgb = h < 60 ? {
        r: c,
        g: x,
        b: 0
    } : h < 120 ? {
        r: x,
        g: c,
        b: 0
    } : h < 180 ? {
        r: 0,
        g: c,
        b: x
    } : h < 240 ? {
        r: 0,
        g: x,
        b: c
    } : h < 300 ? {
        r: x,
        g: 0,
        b: c
    } : {
        r: c,
        g: 0,
        b: x
    };

    function n(color) {
        color = Math.floor((color + (hsl.l - c / 2)) * 255);
        color = color < 0 ? 0 : color;
        return color;
    }
    color.r = n(rgb.r);
    color.g = n(rgb.g);
    color.b = n(rgb.b);
    return color;
};
Color.prototype.invert = function(mod) {
    var color = new Color(this.toHexa());
    if (mod) color = this;
    color.r = 255 - color.r, color.g = 255 - color.g, color.b = 255 - color.b;
    return color;
};
Color.prototype.random = function() {
    return new Color("#xxxxxx".replace(/x/g, function() {
        return (~~(Math.random() * 16)).toString(16);
    }));
};
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};
String.prototype.space = function() {return this.split("").join(" ").toUpperCase()}
MPP.chateval = function(code) {
    try {
        localMsg(code + " >> " + JSON.stringify(eval(code)), "JS EVAL", 'rgb(11, 242, 127)')
    } catch (err) {
        localMsg(code + ' | ' + err, "JS EVAL", 'rgb(194, 34, 11)')
    }
};
var ocfr = MPP.chat.send;
var on = false;

function cname(name) {
    Object.keys(proxies).forEach(function(client) {
        proxies[client].sendArray([{
            m: "userset",
            set: {
                name: name
            }
        }]);
    });
}

function cnamewn(name) {
    Object.keys(proxies).forEach(function(client, num) {
        proxies[client].sendArray([{
            m: "userset",
            set: {
                name: name + "_" + num
            }
        }]);
    });
}

function makeButton(name, id, row, column, func) {
    var midiDiv = document.getElementById("midi-btn");
    var btncln = midiDiv.cloneNode(true);
    btncln.textContent = name;
    btncln.id = id;
    btncln.onclick = func;
    var style = document.createElement('style');
    style.type = 'text/css';
    var rowpx = 300 + 120 * row;
    var colpx = 4 + 28 * column;
    style.innerHTML = '#' + id + ' { position: absolute; left: ' + rowpx + 'px; top: ' + colpx + 'px; }';
    document.getElementsByTagName('head')[0].appendChild(style);
    document.getElementById("bottom").children[0].appendChild(btncln);
}

function isDisabled(thing) {
    if (thing) {
        return "enabled.";
    } else {
        return "disabled.";
    }
}
var chatInt = setInterval(function() {
    var msg = chat_buffer.shift();
    if (msg) MPP.proxychat(msg)
}, 2050);
Array.prototype.has = function(query) {
    try {
        return this.filter(function(el,thing,arr) {
            if(!arr[thing].startsWith(query.toLowerCase())) return;
            return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
        })
    } catch(e) {console.error(e)}
}
var mouseMove = 0;
theroom = false;
function doMouse(off) {
    if(off) {
        clearInterval(mouseMove);
        return;
    }
    clearInterval(mouseMove);
    var angle=0;
    var things = 0;
    mouseMove=setInterval(()=>{
        own=gClient.getOwnParticipant();
        if(theroom) {
            objK(proxies).forEach(function(proxy) {
                if (proxies[proxy].desiredChannelId == gClient.channel._id) things++
            })
            PNUM = things;
        }else {
            PNUM=Object.keys(proxies).length;
        }

        Object.keys(proxies).forEach(function(proxy){
            var x=Math.sin(angle)*L.radius+parseInt(me?own.x:participant.x);
            var y=Math.cos(angle)*L.radius+parseInt(me?own.y:participant.y);
            proxies[proxy].sendArray([{m:"m",x,y}]);
            move?reverse?angle-=(((2*Math.PI)/ PNUM)+(0.025*L.speed)):
            angle+=(((2*Math.PI)/ PNUM)+(0.025*L.speed)):
            angle+=(((2*Math.PI)/ PNUM))});},100)
}
var mouseThing = 0;
var mouseTurn = 0;
function doMouseThing(off,delay=100) {
    if(off) {
        clearInterval(mouseThing);
        return;
    }
    clearInterval(mouseThing);
    mouseThing=setInterval(()=>{
        own=gClient.getOwnParticipant();
        PNUM=Object.keys(proxies).length;
        var x=parseInt(me?own.x:participant.x);
        var y=parseInt(me?own.y:participant.y);
        proxies[mouseTurn].sendArray([{m:"m",x,y}]);
        mouseTurn = Math.floor((mouseTurn+delay/100)%objK(proxies).length)
    })
}
function nmpbclCheck() {

    if(!cl.isConnected()) {
        MPP.proxychat("Restarting NMPB Client.")
        cl.start()
    }
}
var thing = 0;
var nmpbturns = 0;
function auto(turn_off) {
    if(turn_off) {
        clearInterval(thing)
        return;
    }
    clearInterval(thing)
    thing = setInterval(function() {
        var nmpbNames = {0:"Note count: " + notecounter,1:`Players: ${proxies[0].channel.count}. Proxies: ${objK(proxies).length}`,2:`NMPB "link" by Anon64. V ${L.nmpblinkv}`,3:`Time connected: ${sectoform(Math.round(performance.now()/1000))}`}
        for (var wat = 1; wat < Object.keys(proxies).length-1; wat++) {
            proxies[wat].sendArray([{
                m: "userset",
                set: {
                    name: "ProxyPlayer_" + wat
                }
            }]);
        }
        proxies[0].sendArray([{
            m: "userset",
            set: {
                name: `${L.nmpbname} [${L.nmpbchar}help]`
            }
        }]);
        proxies[(Object.keys(proxies).length) - 1].sendArray([{
            m: "userset",
            set: {
                name: nmpbNames[nmpbturns++]
            }
        }]);
        if(nmpbturns>=Object.keys(nmpbNames).length) nmpbturns = 0;
    }, 2100);
}
var giftArray = ['a cute kitten!', 'a cute puppy!', 'a potato!', 'a pikachu!', 'a brand new Xbox One!', 'a brand new PS4!', '1 million cows!', 'a slice of bacon!', 'a boating license!', 'a bunch of money!', 'some cake!', 'a box inside of a... BOX!', 'a new phone!', 'a new piano!', 'some chicken nuggets!', 'a brand new Wii U!', 'an evil gerbil!', 'a captains ship!', 'some sfoof! (Semolina Turmeric Cake)', 'some pizza!', 'a new laptop!', 'a piece of cotton', 'a spoon', 'a dribbling cat', 'a ham sandwhich?', 'nothing!', 'a jet plane!', 'an island', 'an original Xbox!', 'a brandnew house!', 'a big mac!', 'a 4k flat screen tv!', 'a hover board!'];
var giftStuff = Math.floor(Math.random() * giftArray.length); //seconds
var cmdChar = "!";
var reverse = false;
var public = true;
var echo = false;
var banned = [];
var blist = [];
var octave = false;
var counter = -1;
var Recdata = [];
var lolchat = [];
var timeouts = [];
var chat_buffer = [];
var timeup = 0;
var do_not_follow = [];
var banned = [];
var temp = [];
var move = true;
var me = false;
var currentsong;
var nmpbchar = "/";
var admins = ["3d1ff6c7004d69c308fefcd2", "d55bf273f64f37c5691f3bbb", "0e4d093fbef24578b9246446"];
var pings = [];
var modeInt = 0;
var pianoturn = 0;
L.mode = "0";
function randhex() {
    var rand = Math.floor(Math.random() * 16777215).toString(16);
    rand = "#" + ("000000" + rand).slice(-6);
    return rand;
}
function check(id) {
    var temp = false;
    Object.keys(miningDB).forEach((user)=>{if(user==id) temp = true;});
    return temp;
}
function mgive(user,item,amount=1) {
    for(give=0;give<amount;give++) {
        miningDB[user].inv.push(item);
    }
    //miningDB[user].inv
}
function minv(user) {
    var output;
    var temp = [];
    var inv = miningDB[user].inv.sort();
    var curr = null;
    var count = 0;
    for(var cnt=0;cnt<inv.length;cnt++) {
        if(inv[cnt]!=curr) {
            if(count > 0) {
                temp.push(curr+" x"+count);
            }
            curr = inv[cnt];
            count=1;
        } else {
            count++;
        }
    }
    if(count > 0) {
        temp.push(curr+" x"+count);
    }
    output = temp.join(", ");
    if(output==="") {
        return true;
    }
    return output;
}
function muser(name) {
    var output;
    var temps = [];
    objK(miningDB).forEach(function(user){
        var use = miningDB[user].name.toLowerCase();
        if(use.startsWith(name)) {
            temps.push(user)
        } });
    var output = temps;
    return output;
}
function minfo(name) {
    var output;
    var id = muser(name);
    if(id.length!=1) return "Multiple people with that name detected! "+id.join(", ");
    var user = miningDB[id];
    var amn = 10;
    var inventory = minv(id);
    if(minv(id)) inventory = "Nothing."
    if(user.inv.length<10) amn = user.inv.length;
    var output = `Info about ${user.name}: Money: ${user.money}, Inventory contents (first ${amn}): ${inventory}`;
    return output;
}
function msearch(name) {
    var output;
    var tempS = [];
    objK(miningDB).forEach(function(user){
        var use = miningDB[user].name.toLowerCase();
        if(use.startsWith(name)) {
            tempS.push(`${user} (${miningDB[user].name})`)
        } });
    var output = tempS;
    return output;
}
function mineObject() {
    if (Math.random() * 2 > 1) {
        if (Math.random() * 2 > 1) {
            if (Math.random() * 2 > 1) {
                if (Math.random() * 2 > 1) {
                    if (Math.random() * 2 > 1) {
                        if (Math.random() * 2 > 1) {
                            if (Math.random() * 2 > 1) {
                                if (Math.random() * 2 > 1) {
                                    if (Math.random() * 2 > 1) {
                                        return "diamond ore";
                                    } else {
                                        return "stone";
                                    }
                                } else {
                                    return "platinum ore";
                                }
                            } else {
                                return "gold ore";
                            }
                        } else {
                            return "silver ore";
                        }
                    } else {
                        return "iron ore";
                    }
                } else {
                    return "copper ore";
                }
            } else {
                return "tin ore";
            }
        } else {
            return "coal";
        }
    } else {
        return "stone";
    }
}
function fpart(id) {
    for(user in gClient.ppl) {if(gClient.ppl[user]._id==id) return gClient.ppl[user]}
}
function madd(user="") {
    var part = getUser(user);
    if(part === undefined) {
        return `User not found: ${user}`;
    }else
        if(!user) {
            return `Enter a name to add to the MiningDataBase`;
        } else
            if(check(part._id)) {
                return `User is already in the database: ${part.name} (${part._id})`;
            } else {
                miningDB[part._id] = {name:part.name,money:0,isMining:false,inv:[]};
                return `Successfully added new user as user ${objK(miningDB).length} to MiningDataBase! | ${part.name} (${part._id})`;
            }
}
function mine(user) {
    var element = mineObject();
    var client = miningDB[user];
    var amn = randNum(1,3)
    if(!check(user)) {
        setTimeout(function(){MPP.proxychat(madd(fpart(user).name))},5000)
        MPP.proxychat(`You will be added to the MiningDataBase soon ${fpart(user).name}!`);
        return;
    }


    if(client.isMining) {
        MPP.proxychat(`${client.name}, you have to wait until you are done mining before you can mine again!`)
        return;
    }
    client.isMining = true;
    MPP.proxychat(`${client.name} enters a cave and starts to mine.`)
    setTimeout(()=>{MPP.proxychat(`${client.name} mined some ${element} x${amn}`);client.isMining=false;mgive(user,element,amn)},randNum(3,14)*1000)
}
function smelt(user,item,amount=1) {
    var output;
    var smeltables = ['diamond ore','gold ore','silver ore','platinum ore','copper ore','tin ore','iron ore','stone'];
    if(!miningDB[user].inv.includes("coal")) return `You don't have any coal to use for smelting!`;
    if(!smeltables.includes(item)) return `You cannot smelt ${item}!`
    if(amount>5) return `You cannot smelt more than 5 items at once`;
    var take = miningDB[user].inv.indexOf('coal');
    if(take != -1) {miningDB[user].inv.splice(take, amount);}
    output = smeltables.has(item).join("").split(" ")[0];
    if(item=="stone") output = "bricks";
    return output;
}
//freegeoip.net/json/
//colorz = setInterval(function(){setColor(randhex())},5000)W
MPP.client.on("a", function(m) {
    var args = m.a.split(' ');
    var cmd = args[0].toLowerCase();
    var input = m.a.substring(cmd.length).trim();
    if (input.startsWith("|")) return;
    Object.keys(proxies).forEach(function(proxy) {
        if (!BOT_IDS.includes(proxies[proxy].participantId)) BOT_IDS.push(proxies[proxy].participantId);
    });
    if (BOT_IDS.includes(m.p.id)) return;
    if (do_not_follow.includes(m.p.id)) return;
    participant = MPP.client.findParticipantById(m.p.id);
});
MPP.client.on("a", function(wot) {
    function pchat(msg, proxy = 0) {
        proxies[proxy].sendArray([{
            m: "a",
            message: msg
        }]);
    }
    var L = localStorage;
    var isAdmin = false;
    var owner = false;
    var name = wot.p.name;
    if (wot.p._id == MPP.client.getOwnParticipant()._id) owner = true;
    if (admins.indexOf(wot.p._id) !== -1) isAdmin = true;
    var isBanned = false;
    if (banned.indexOf(wot.p._id) !== -1) isBanned = true;
    if (isBanned) {
        return;
    }
    var args = wot.a.split(' ');
    var cmd = args[0].toLowerCase();
    var input = wot.a.substring(cmd.length).trim();
    var part = getUser(input.toLowerCase());
    var commands = ["report","echo", "delay", "octave", "oct", "to", "help", "pos", "ip", "unicode", "aboutme", "iptrack", "weather", "speed", "s", "radius", "r", "reverse", "rv", "move", "mode","urlsh","ping","rps","rps7","rps101"];
    var miningcom = ["inv","inventory","user","search","bank","mine"];
    var opcmds = ["record", "recall", "stoprec", "p", "stop", "rename", "piano", "dnf", "blist", "summon","mouse","add","sust","sustain"];
    //MAKE COMMANDS BELOW//
    //IF ANY ERRORS CHECK CONSOLE//
    var blacklist = blist;

    function checkName(name) {
        var listed = false;
        for (var i = 0; blacklist.length > i; i++) {
            if (name.toLowerCase().includes(blacklist[i])) {
                listed = true;
                break;
            }
        }
        return listed;
    }
    if (checkName(wot.p.name.toLowerCase())) {
        var part4 = getUser(wot.p.name.toLowerCase());
        if (banned.indexOf(part4._id) !== -1) {
            return;
        }
        banned.push(part4._id);
        MPP.chat.send(`\u034f ${part4.name} has been banned automatically as his/her name contains part of the blacklisted name. (${banned.length == 1 ? "user":"users"}  banned.)`);
    } else
        if (cmd == cmdChar + "help" || cmd == cmdChar + "h") {
            var cmds2 = cmdChar + commands[0];
            var adminstring2 = cmdChar + opcmds[0];
            var miningcom2 = cmdChar+miningcom[0];
            for (d = 1; d < commands.length; d++) {
                cmds2 += ", " + cmdChar + commands[d];
            }
            for (d = 1; d < opcmds.length; d++) {
                adminstring2 += ", " + cmdChar + opcmds[d];
            }
            for (d = 1; d < miningcom.length; d++) {
                miningcom2 += ", " + cmdChar + miningcom[d];
            }
            if (isAdmin) { //help commands
                MPP.proxychat("Main Commands: " + cmds2);
                MPP.proxychat("Operator Commands: " + adminstring2);
                MPP.proxychat("Mining Commands: "+miningcom2);
            } else {
                MPP.proxychat("Main Commands: " + cmds2);
                MPP.proxychat("Mining Commands: "+miningcom2);
            }
        } else
            if(cmd==cmdChar+"report"){
                var names = getUser(input).name;
                if(getUser(input) == true) names = "nobody";
MPP.proxychat(`Thanks! ${wot.p.name} for reporting ${names}! A screenshot has been submitted the to FBI, They will investigate shortly.`)
               }

               else
            //MINING COMMANDS
            if(cmd == cmdChar+"add") {
                if(!isAdmin) {
                    MPP.proxychat(`Not Admin! (${wot.p.name})`);
                } else
                    MPP.proxychat(madd(input))

            }else
                if(cmd == cmdChar+"inv"||cmd==cmdChar+"inventory") {
                    if(args[1]=="add") {
                        if(!isAdmin) {
                            MPP.proxychat(`Not Admin! (${wot.p.name})`);
                            return;
                        }
                        if(getUser(args[2]) === undefined) {
                            MPP.proxychat(`User not found: ${args[2]}`);
                        }else
                            if(!args[2]||!args[3]) {
                                MPP.proxychat(`How to use this command: ${cmdChar}[inv/inventory] [add] [name] [item] [amount]`);
                                return;
                            }
                        var mineObj = ['stone','coal','diamonds','gold','silver','platinum','copper','tin','iron'];
                        var given = mineObj.has(args[3]);
                        var gave = given.join(", ");
                        var amn = (args[4]||1);
                        var client = getUser(args[2]);
                        if(!check(client._id)) {
                            MPP.proxychat(`Automatically adding user ${client.name} to the MiningDataBase! || Successfully added new user as user ${objK(miningDB).length} to MiningDataBase! | ${client.name} (${client._id})`);
                            miningDB[client._id] = {name:client.name,money:0,inv:[]};
                        }
                        if(given==="") gave = "None.";
                        if(gave == "None."||given.length>1) {
                            MPP.proxychat(`Could not add item: ${args[3]} | Matches: ${gave}`);
                        } else {
                            mgive(client._id,gave,amn);
                            MPP.proxychat(`Added ${gave} x${amn} to ${client.name}'s inventory`);
                        }
                    } else {
                        var client = wot.p;
                        var invent = minv(client._id);
                        if(minv(client._id)===true) invent = "nothing."
                        MPP.proxychat(`Your inventory, ${client.name} contains ${invent}`)
                    }
                }else
                    if(cmd == cmdChar+"user") {
                        if(!input) {
                            MPP.proxychat(`Usage: ${cmdChar}user [any users name.. almost]`)
                            return;
                        }
                        MPP.proxychat(minfo(input))
                    }else
                        if(cmd == cmdChar+"search") {
                            if(!input) {
                                MPP.proxychat(`Usage: ${cmdChar}search [any users name.. CLOSE!]`)
                                return;
                            }
                            var users = msearch(input).slice(0,5).join(", ");
                            if(users.length==0) users = `None.`;
                            MPP.proxychat(`Users found with that name (up to 5 users shown): ${users}`)
                        }else
                            if(cmd == cmdChar+"bank") {
                                if(!input) {
                                    MPP.proxychat(`You currently have ${miningDB[wot.p._id].money} dollars in your account.`)
                                    return;
                                }
                                var user = muser(input);
                                if(user.length>1) {
                                    MPP.proxychat(`More than one user with that name in the MiningDataBase. Please enter a more specific name.`)
                                    return;
                                }
                                MPP.proxychat(`\u034f${miningDB[user].name} currently has ${miningDB[user].money} dollars in their account.`)
                            }else
                                if(cmd == cmdChar+"mine") {
                                    mine(wot.p._id)
                                }else
                                    //MINING COMMANDS
                                    if(cmd==cmdChar+"mouse"&&isAdmin) {
                                        doMouse()
                                    }else if(cmd == cmdChar+"sust"||cmd == cmdChar+"sustain"){
                                             MPP.proxychat(`Sustain is now ${isDisabled(Psust)}`)
                                        Psust=!Psust
                                             }

                                             else if(cmd==cmdChar+"mode") {
                                        var modes = {};
                                        var moden = objK(modes).length
                                        if(!input) {MPP.proxychat(`Changes the way the bots "move". Current mode: ${L.mode} number of modes: ${moden}. You can say ${cmdChar}mode modes to view all modes.`);return;}
                                        switch(input) {
                                            default:
                                                MPP.proxychat("Invalid mode. ("+input+")")
                                                break;
                                            case "modes":
                                                MPP.proxychat(`Available modes: 0 - default, 1 - "imploding", 2 - "figure 8"`)
                                                break;
                                            case "0":
                                                if(L.mode=="0") {MPP.proxychat(`That mode is already selected.`);return;}
                                                L.mode = "0";
                                                MPP.proxychat(`Setting mode to 0 - default mode.`)
                                                clearInterval(modeInt);
                                                L.radius = DEFAULT_RADIUS;
                                                break;
                                            case "1":
                                                if(L.mode=="1") {MPP.proxychat(`That mode is already selected.`);return;}
                                                L.mode = "1";
                                                MPP.proxychat(`Setting mode to 1 - "imploding" mode.`)
                                                clearInterval(modeInt);
                                                var num = 0;
                                                modeInt = setInterval(()=>{L.radius=Math.sin(num+=0.1)*10},100)
                                                break;
                                            case "2":
                                                var scale = 2 / (3 - Math.cos(2*angle));
                                                L.mode = "1";
                                                MPP.proxychat(`Setting mode to 2 - "figure 8" mode.`)
                                                clearInterval(modeInt);
                                                var angle=0;
                                                var things = 0;
                                                modeInt=setInterval(()=>{
                                                    own=gClient.getOwnParticipant();
                                                    if(theroom) {
                                                        objK(proxies).forEach(function(proxy) {
                                                            if (proxies[proxy].desiredChannelId == gClient.channel._id) things++
                                                        })
                                                        PNUM = things;
                                                    }else {
                                                        PNUM=Object.keys(proxies).length;
                                                    }

                                                    Object.keys(proxies).forEach(function(proxy){

                                                        var x = scale * Math.cos(angle)+L.radius+parseInt(me?own.x:participant.x);
                                                        var y = scale * Math.sin(2*angle)+L.radius+parseInt(me?own.x:participant.x) / 2;
                                                        proxies[proxy].sendArray([{m:"m",x,y}]);
                                                        angle+=1//(((2*Math.PI)/ PNUM))
                                                    });},100)
                                                break;
                                        }
                                    }else
                                        if (cmd == cmdChar + 'rps') {
  var RPS = input.charAt(0).toLowerCase();
  var choice = ['r', 'p', 's'];
  var rand = choice.random();
  var names = { r: 'rock', p: 'paper', s: 'scissors' };
  if (!input || !choice.includes(RPS)) {
    MPP.proxychat(`Pick: your choices are: ${choice.join(', ')}`);
  }
  var win = `You Won! You chose ${names[RPS]}, Computer chose ${names[
    rand
  ]}. Confidence: ${(won / games * 100).toFixed(2)}%`;
  var lost = `You Lost! You chose ${names[RPS]}, Computer chose ${names[
    rand
  ]}. Confidence: ${(won / games * 100).toFixed(2)}%`;
  ++games;
  if (RPS == rand) {
    MPP.proxychat(
      `Tie! You both chose ${names[RPS]}. Confidence: ${(won /
        games *
        100).toFixed(2)}%`
    );
    --games;
  } else
    try {
      if (RPS == 'r') {
        if (rand == 'p') {
          MPP.proxychat(lost);
        } else if (rand == 's') {
          MPP.proxychat(win);
          ++won;
        }
      } else if (RPS == 'p') {
        if (rand == 's') {
          MPP.proxychat(lost);
        } else if (rand == 'r') {
          MPP.proxychat(win);
          ++won;
        }
      } else if (RPS == 's') {
        if (rand == 'r') {
          MPP.proxychat(lost);
        } else if (rand == 'p') {
          MPP.proxychat(win);
          ++won;
        }
      }
    } catch (e) {
      console.log(e);
    }
}else             if(cmd==cmdChar+"rps7") {
                                            var RPS="";
                                            if(!input.length==1) {
                                                RPS  = input.substring(0,2);
                                            }else {RPS  = input.charAt(0).toLowerCase();}
                                            var choice = ["r","p","sc","f","w","a","sp"];
                                            var rand = choice.random();
                                            if(RPS=="s") {if(Math.random()>0.5) {RPS = "sc"}else{RPS="sp"};MPP.proxychat(`Only s detected picking random: ${RPS}.`)}
                                            var names = {r:"rock",p:"paper",sc:"scissors",f:"fire",w:"water",a:"air",sp:"sponge"};
                                            if(!input||!choice.includes(RPS)) {MPP.proxychat(`Pick: your choices are: ${choice.join(", ")}. rock, paper, scissors, fire, water, air, and sponge.`);}
                                            var win = `You Won! You chose ${names[RPS]}, Computer chose ${names[rand]}. Confidence: ${((won7/games7)*100).toFixed(2)}%`;
                                            var lost = `You Lost! You chose ${names[RPS]}, Computer chose ${names[rand]}. Confidence: ${((won7/games7)*100).toFixed(2)}%`;
                                            if(RPS==rand) {
                                                MPP.proxychat(`Tie! You both chose ${names[RPS]}. Confidence: ${((won7/games7)*100).toFixed(2)}%`);
                                            }else try {
                                                games7++;
                                                if(RPS == "r") {
                                                    if(rand=="sc"||rand=="f"||rand=="sp") {
                                                        MPP.proxychat(win);
                                                        won7++;
                                                    }else {
                                                        MPP.proxychat(lost)
                                                    }
                                                } else                     if(RPS == "p") {
                                                    if(rand=="r"||rand=="w"||rand=="a") {
                                                        MPP.proxychat(win);
                                                        won7++;
                                                    }else {
                                                        MPP.proxychat(lost)
                                                    }
                                                } else                     if(RPS == "sc") {
                                                    if(rand=="a"||rand=="p"||rand=="sp") {
                                                        MPP.proxychat(win);
                                                        won7++;
                                                    }else {
                                                        MPP.proxychat(lost)
                                                    }
                                                } else                     if(RPS == "f") {
                                                    if(rand=="sc"||rand=="p"||rand=="sp") {
                                                        MPP.proxychat(win);
                                                        won7++;
                                                    }else {
                                                        MPP.proxychat(lost)
                                                    }
                                                } else                     if(RPS == "w") {
                                                    if(rand=="r"||rand=="f"||rand=="sc") {
                                                        MPP.proxychat(win);
                                                        won7++;
                                                    }else {
                                                        MPP.proxychat(lost)
                                                    }
                                                } else                     if(RPS == "a") {
                                                    if(rand=="r"||rand=="f"||rand=="w") {
                                                        MPP.proxychat(win);
                                                        won7++;
                                                    }else {
                                                        MPP.proxychat(lost)
                                                    }
                                                } else                     if(RPS == "sp") {
                                                    if(rand=="p"||rand=="w"||rand=="a") {
                                                        MPP.proxychat(win);
                                                        won7++;
                                                    }else {
                                                        MPP.proxychat(lost)
                                                    }
                                                }
                                            } catch(e) {
                                                console.log(e)
                                            }
                                        }else if(cmd==cmdChar+"rps101") {
                                            var elements = ['Dynamite','Tornado','Quicksand','Pit','Chain','Gun','Law','Whip','Sword','Rock','Death','Wall','Sun','Camera','Fire','Chainsaw','School','Scissors','Poison','Cage','Axe','Peace','Computer','Castle','Snake','Blood','Porcupine','Vulture','Monkey','King','Queen','Prince','Princess','Police','Woman','Woman','Baby','Man','Home','Train','Car','Noise','Bicycle','Tree','Turnip','Duck','Wolf','Cat','Bird','Fish','Spider','Cockroach','Brain','Community','Cross','Money','Vampire','Sponge','Church','Butter','Book','Paper','Cloud','Airplane','Moon','Grass','Film','Toilet','Air','Planet','Guitar','Bowl','Cup','Beer','Rain','Water','Tv','Rainbow','Ufo','Alien','Prayer','Mountain','Satan','Dragon','Diamond','Platinum','Gold','Devil','Fence','Video Game','Math','Robot','Heart','Electricity','Lightning','Medusa','Power','Laser','Nuke','Sky','Tank','Helicopter'].join(" ").toLowerCase().split(" ");

                                            if(!input) {sendChat2("Your choices are: "+elements.join(", "));sendChat2("Heres the chart: http://umop.com/rps101/rps101chart.html");return;}
                                            if(!isNaN(input)) {
                                                var RPS101 = parseInt(input);
                                                var myChoice = RPS101-1;
                                            }else{
                                                var RPS101 = elements.join(" ").toLowerCase().split(" ").has(input).toLowerCase();
                                                var RPS101rand = RPS101.random();
                                                if(RPS101=="") {MPP.proxychat("That is not a valid choice!");return;}
                                                if(RPS101.length>1) {MPP.proxychat("More than one choice with that letter detected randomizing element: "+RPS101rand)}
                                                var myChoice = elements.indexOf(RPS101rand);
                                            }
                                            //if(myChoice>101||myChoice<1) {
                                            //    MPP.proxychat("Numbers need to  be in between 1 and 101!")
                                            //} else if(isNaN(myChoice)) {MPP.proxychat("Invalid number!");return;}
                                            var myDefeating = myChoice + 52;
                                            if (myDefeating >= 101) {
                                                myDefeating -= 101;
                                            }
                                            var comChoice = Math.floor(Math.random()*101);
                                            var comDefeating = comChoice + 52;
                                            if (comDefeating >= 101) {
                                                comDefeating -= 101;
                                            }
                                            var win = `You Won! You chose ${elements[myChoice]}, Computer chose ${elements[comChoice]}. Confidence: ${((won101/games101)*100).toFixed(2)}%`;
                                            var lost = `You Lost! You chose ${elements[myChoice]}, Computer chose ${elements[comChoice]}. Confidence: ${((won101/games101)*100).toFixed(2)}%`;
                                            if (myChoice == comChoice){
                                                MPP.proxychat(`Tie! You both chose ${elements[comChoice]}. Confidence: ${((won101/games101)*100).toFixed(2)}%`);
                                            } else if (comChoice > myChoice && comChoice <= myDefeating){
                                                MPP.proxychat(win);
                                                games101++
                                                won101++
                                            } else if (myChoice > comChoice && myChoice <= comDefeating){
                                                MPP.proxychat(lost);
                                                games101++
                                            } else {
                                                games101++
                                                won101++
                                                MPP.proxychat(win);
                                            }
                                        }else
                                            if (cmd == cmdChar + "ip") {
                                                MPP.proxychat(randNum(0, 255) + '.' + randNum(0, 255) + '.' + randNum(0, 255) + '.' + randNum(0, 255) + ":" + randNum(0, 32000) + " <= Valid Ports.");
                                            } else
                                                if (cmd == cmdChar + "unicode" || cmd == cmdChar + "u") { //unicode command
                                                    MPP.proxychat("Put some of these in your name: ᴥ◕☀☁☂☃☄★☆☇☈☉☊☋☌☍ﾂ¢￠☍☎☏☐☑☒☓☔☕☖☗☘☙☚☛☜☝☞☟☠␀☡☢☣☤☥☦☧☨☩☪☫☬☭☮☯─━│┃┎┒┝┫┳┻╋╭╮╯╰╱╲╳╴╵╶╷╸╹╺╻╼╽╾╿☰☱☲☳☴☵☶☷░▒▓▔▁▂▃▄▅▆▇█▉▊▋▌▐ ▍▎▏◘☸☹☺☻☼☽☾☿ ♀♁♂♃♄♅♆♇♈♉♊♋♌♍♎♏♐♑♒♓♔♕♖♗♘♙♚♛♜♝♞♟♠♢♣♤♥♡♦♧♨♩♪♫♬♭♮♯ ๖ۣۜ  ∥～∼˜≀π∏ℍℂℕℙℚℝℤℬℰℱℋℐℒℳ℘ℛℓℴℯɨℊℎ√∑∮‖⌊⌉⋕⊤✀✁✂✃✄✆✇✈✉✌✍✎✏✐✑✒✓✔✕✖✗✘✙✚✛✜✝✞✟✠✡✢✣✤✥✦✧✩✪✫✬✭✮✯✰✱✲✳✴✵✶✷✸✹✺✻✼✽✾✿❀❁❂❃❄❅❆❇❈❉❊❋❍❏❐❑❒❖❡❤❥❦❧❶❷❸❹❺❻❼❽❾❿➀➁➂➃➄➅➆➇➈➉➔➘➙➚");
                                                } else
                                                    if (cmd == cmdChar + "aboutme") {
                                                        MPP.proxychat("Your name is: " + wot.p.name + ". Your _id is: " + wot.p._id + " Your id is: " + wot.p.id + ". Your color is: " + wot.p.color + " and finnaly your color name is: " + new Color(wot.p.color).getName());
                                                    } else
                                                        if (cmd == cmdChar + "iptrack") {
                                                            if (!input) {
                                                                MPP.proxychat("No input detected");
                                                                return;
                                                            }
                                                            $.getJSON('//ip-api.com/json/' + input, function(data) {
                                                                if (data.status == "success") {
                                                                    var as = data.as === "" ? "N/A" : data.as;
                                                                    var org = data.org === "" ? "N/A" : data.org;
                                                                    var isp = data.isp === "" ? "N/A" : data.isp
                                                                    var rName = data.regionName == "" ? "N/A" : data.regionName
                                                                    MPP.proxychat("[IP INFO] Company: " + as + " || Organization: " + org + " || ISP: " + isp + " || Country Name/Code: " + data.country + "/" + data.countryCode + " || City: " + data.city + " || [Region] Region Name: " + rName + ", Timezone: " + data.timezone + " || Longitude and Latitude: " + data.lon + ", " + data.lat);
                                                                } else {
                                                                    MPP.proxychat("[IP INFO] FAILED || Error: " + data.message + " || IP used: " + data.query);
                                                                }
                                                            });
                                                        } else
                                                            if (cmd == cmdChar + "gift") {


                                                                if (input === "") {
                                                                    MPP.proxychat("Usage " + cmdChar + "gift name_here.");
                                                                    return;
                                                                }
                                                                if (part) {
                                                                    if (part.name == name) {
                                                                        MPP.proxychat("You cannot gift yourself, that would be greedy.");
                                                                        return;
                                                                    }
                                                                    MPP.proxychat(name + " gave " + part.name + " " + giftArray[giftStuff]);
                                                                } else {
                                                                    MPP.proxychat(userNotFound);
                                                                }
                                                            }
    if (cmd == cmdChar + "weather") {
        if (!input) {
            MPP.proxychat("Usage: " + cmdChar + "weather [city],[country code]");
            return;
        }
        $.getJSON("//api.openweathermap.org/data/2.5/weather?q=" + input + "&units=imperial&appid=3c036817627a4dfbf2634e456510d9e0", function(weather) {
            MPP.proxychat("Weather for " + weather.name + ", " + weather.sys.country + " || [Sun] Sunrise: " + new Date(weather.sys.sunrise * 1000).toUTCString() + ", Sunset: " + new Date(weather.sys.sunset * 1000).toUTCString() + " || [Time] Current Time: " + new Date(weather.dt * 1000).toUTCString() + " || [Weather] Main: " + weather.weather[0].main + ", Description: " + weather.weather[0].description + " || [Wind] Speed: " + weather.wind.speed + "MPH , Direction: " + weather.wind.deg + "° || Humidity: " + weather.main.humidity + "%");
            MPP.proxychat("[Temp] (AVG/max/min): " + weather.main.temp + "°F/" + weather.main.temp_max + "°F/" + weather.main.temp_min + "°F || " + ((parseInt(weather.main.temp) - 32) * 0.5556).toFixed(3) + "°C/" + ((parseInt(weather.main.temp_max) - 32) * 0.5556).toFixed(3) + "°C/" + ((parseInt(weather.main.temp_min) - 32) * 0.5556).toFixed(3) + "C || " + (((parseInt(weather.main.temp) - 32) * 0.5556) + 273.15).toFixed(3) + "K/" + (((parseInt(weather.main.temp_max) - 32) * 0.5556) + 273.15).toFixed(3) + "K/" + (((parseInt(weather.main.temp_min) - 32) * 0.5556) + 273.15).toFixed(3) + "K")
        });
    } else if (cmd == cmdChar + "radius" || cmd == cmdChar + "r") {
        if(me&&wot.p._id!==this.user._id){return;}
        if (public || owner) {
            var radius = input;
            if (radius === "") {
                MPP.proxychat(`Sets the "radius" for the bots. Max: 50. Min: 1. Current radius: ${L.radius}`);
                return;
            } else
                if (!Number.isInteger(parseInt(radius))) {
                    MPP.proxychat("Only type in numbers.");
                    return;
                } else
                    if (radius < 1) radius = 1;
            if (radius > 50) radius = 50;
            MPP.proxychat("The radius was set to: " + radius);
            L.radius = radius;
        }
    } else if (cmd == cmdChar + "speed" || cmd == cmdChar + "s") {
        if(me&&wot.p._id!==this.user._id){return;}
        if (public || owner) {
            var speed = input;
            if (speed === "") {
                MPP.proxychat(`Sets the "speed" for the bots. Max: 10. Min: 0.1. Current speed: ${L.speed}`);
                return;
            } else
                if (!Number.isInteger(parseInt(speed))) {
                    MPP.proxychat("Only type in numbers.");
                    return;
                } else
                    if (speed < 0.1) speed = 0.1;
            if (speed > 10) speed = 10;
            MPP.proxychat("The speed was set to: " + speed);
            L.speed = speed;
        }
    } else if (cmd == cmdChar + "reverse" || cmd == cmdChar + "rv") {
        if(me&&wot.p._id!==this.user._id){return;}
        if (public || owner) {
            MPP.proxychat(`Reverse: ${isDisabled(!reverse)}`);
            reverse = !reverse
        }
    } else if (cmd == cmdChar + "move" || cmd == cmdChar + "mv") {
        if(me&&wot.p._id!==this.user._id){return;}
        if (public || owner) {
            MPP.proxychat(`Moving: ${isDisabled(!move)}`);
            move = !move
        }
    } else if (cmd == cmdChar + "dnf") {
        if (!isAdmin) {
            MPP.proxychat(`Prevents bots from following players. You are not admin (${wot.p.name})`);
            return;
        }
        if (!input) {
            MPP.proxychat(`Prevents bots from following players.`);
            return;
        }
        var user = getUser(input);
        if (user === true || user === undefined) {
            MPP.proxychat(`User not found.`);
            return;
        }
        if (do_not_follow.includes(user.id)) {
            MPP.proxychat(`Bots can now follow: ${user.id} (${user.name})`)
            var index = do_not_follow.indexOf(user.id)
            if (index > -1) {
                do_not_follow.splice(index, 1)
            }
        } else {
            MPP.proxychat(`Bots will no longer follow: ${user.id} (${user.name})`)
            do_not_follow.push(user.id)
        }
    } else if (cmd == cmdChar + "urlsh") {
        if (!input) {
            MPP.proxychat("No Input!");
            return;
        }
        $.ajax({
            url: 'https://www.googleapis.com/urlshortener/v1/url?shortUrl=http://goo.gl/fbsS&key=AIzaSyC9LIfNyEPZ1muq2a5MNQQ3WF3A2GxKQtA',
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            data: '{ longUrl: "' + input + '"}',
            dataType: 'json',
            success: function(response) {
                MPP.proxychat("Shortened URL: " + response.id + " || Query: " + response.longUrl); // Evaluate the J-Son response object.
            }
        });
    } else if (cmd == cmdChar + "blist") {
        var name2 = input.replace(args[1] + " ", "").toLowerCase();
        if (!name2) {
            MPP.chat.send("No name detected.");
            return;
        }
        switch (args[1]) {
            case "add":
                if (blist.includes(name2)) {
                    MPP.chat.send("Name already in array.");
                    return;
                }
                MPP.chat.send("Added " + name2 + " to blacklisted names.");
                blist.push(name2);
                break;
            case "remove":
                var index = blist.indexOf(name2);
                if (index > -1) {
                    blist.splice(index, 1);
                    MPP.chat.send("The name " + name2 + " has been removed from the blacklist array.");
                } else {
                    MPP.chat.send("\u034f" + name2 + " was not found in the blacklist array.");
                }
                break;
            default:
                MPP.chat.send("Use " + cmdChar + "blist [add/remove] [name]");
        }
    } else if (cmd == cmdChar + "summon" && isAdmin) {
        if (summon_proxy(parseInt(input))) {
            MPP.chat.send(summon_proxy(parseInt(input)))
        }
    } else if(cmd == cmdChar+"ping") {
        var startTime = new Date();
        var img = new Image();
        let target = input.toLowerCase();
        if(!target.startsWith("http://")||target.startsWith("https://")) {
            target = "http://"+args[1]
        }
        if(pings.length>5) {pings.shift()}
        img.src = input ? target : "http://www.multiplayerpiano.com/";
        img.onerror = function() {
            var endTime = new Date();
            var ping = endTime. getTime() - startTime.getTime()
            if(input) {
                MPP.proxychat(`[Ping] Ping: ${ping} ms. (${img.src})`)
                return;
            }
            if(ping>L.max) {
                L.max = ping;
            }
            if(ping<L.min) {
                L.min = ping
            }
            pings.push(ping);
            var tempcnt = 0;
            pings.forEach(function(num){tempcnt+=num});
            var avg = (tempcnt/pings.length).toFixed(0);
            MPP.proxychat(`[Ping] (MAX,AVG,MIN) ${L.max} ms/${avg} ms/${L.min} ms. (${img.src})`)
        }
    }




    if (cmd == cmdChar + "bot" && isAdmin) {
        cl = new Client("ws://multiplayerpiano.com:8080");
        cl.setChannel("NMPBplay");
        cl.start();
        setInterval(nmpbclCheck,2000);
        cl.on("n", function(msg){
            //time = msg.t;
            //EOS.client.startNote(msg.n[]);
            var time = msg.t;
            for (var i = 0; i < msg.n.length; i++) {
                var note=msg.n[i];
                var del = (note.d||0)
                var time2 = msg.t + del;
                if(testing) console.log(msg.t,time,note.n)
                pianoturn++;
                if (pianoturn >= objK(proxies).length) {
                    pianoturn = 0;
                }
                var veloc = NMPBvel ? L.vel : note.v
                var buzz=0;
                if(notecounter%2) {buzz=veloc-L.num} else {buzz=veloc}
                var truevel = lolwat ? veloc : buzz

                MPP.press(note.n,truevel,time2,L.buzz,Psust)
                /*proxies[pianoturn].sendArray([{
                        m: "n",
                        t: time2,
                        n: [{
                            n: note.n,
                            v: L.vel
                        }]
                    }]);
                    */
            }
        });
        proxies[0].on('a', m => {
            if (m.a.startsWith(L.nmpbchar)) {
                if(m.a)
                    cl.sendArray([{
                        m: "a",
                        message: m.a.replaceAll(L.nmpbchar, "/")
                    }])
            };
        });
        cl.on('a', m => {
            if(m.a.startsWith("/")) {return;}
            if(m.a == "Not found.") {
                lolchat.push(L.nmpbmsg)
                setTimeout(function() {
                    MPP.proxychat(lolchat.join(" | "))
                    lolchat = [];
                }, 500);
            }else
                if (m.p._id==gClient.getOwnParticipant()._id) {
                    lolchat.push(m.a.replaceAll("/", L.nmpbchar));
                    setTimeout(function() {
                        MPP.proxychat(lolchat.join(" | "))
                        lolchat = [];
                    }, 500);
                }
        })
        setInterval(function() {
            for (var pl in cl.ppl) {
                if (!cl.ppl.hasOwnProperty(pl)) continue;
                var part = cl.ppl[pl];
                if (part.name.toLowerCase().indexOf(gClient) !== -1 || similar(part.name.toLowerCase(), gClient.user.name, 1) >= 60) {

                    proxies[0].sendArray([{
                        m: "m",
                        x: part.x,
                        y: part.y
                    }]);
                    var y = 15;
                    var x1 = 8
                    var x2 = 88
                    if(part.x&&part.y==-100) {
                        proxies[1].sendArray([{
                            m: "m",
                            x: -100,
                            y: -100
                        }]);
                        proxies[2].sendArray([{
                            m: "m",
                            x: -100,
                            y: -100
                        }]);
                    }else{
                        proxies[1].sendArray([{
                            m: "m",
                            x: x1,
                            y: y
                        }]);
                        proxies[2].sendArray([{
                            m: "m",
                            x: x2,
                            y: y
                        }]);
                    }
                }
            }
        }, 50);
        /*cl.on("n", m => {
                        gClient.sendArray([{
                    m: "n",
                    t: msg.t,
                    d:del,
                    n: note.n
                }]);
            try{
                //pianoturn = (pianoturn+1)%objK(proxies).length
                //proxies[pianoturn].serverTimeOffset
                //proxies[pianoturn].sendArray([{ m: "n", t: Date.now() + proxies[pianoturn].serverTimeOffset , n: m.n}]);
                //if(pianoturn>=objK(proxies).length) pianoturn=0;

                //Date.now()+cl.serverTimeOffset

                // - cl.serverTimeOffset + TIMING_TARGET - Date.now()
                //var time = m.t //- cl.serverTimeOffset + TIMING_TARGET - Date.now();
                //for (var i = 0; i < m.n.length; i++) {
                ////   notesnm = [];
                //   notesnm.push(m.n[i]);
                //   MPP.press(m.n[i].n, L.vel,parseInt(time));
                //MPP.client.sendArray([{m: "n", t: time, n: notesnm , v: 1}]);
                //MPP.press(u.n,L.vel,m.t);
                var time = m.t;
                objK(m.n).forEach(function(note){
                    console.log(m.n[note].n)
                    MPP.press(m.n[note].n,L.vel,time)
                })
                /*for (var ns = 0; ns<m.n.length; ns++){
                    for (var i = 0; i<L.echos; i++){
                        notes = [];
                        notes.push(m.n[ns]);
                        MPP.press(m.n[ns].n,L.vel,time+(L.delay*i))
                        //gClient.sendArray([{m: "n", t: time+(30*i), n: notes , v: 1}]);
                    }
                }
                */
        /*try{
            pianoturn = (pianoturn+1)%objK(proxies).length;
            if(pianoturn>=objK(proxies).length) pianoturn=0;
var t = msg.t - gClient.serverTimeOffset + TIMING_TARGET + Date.now();
    for (var ns = 0; ns<msg.n.length; ns++){
            notes = [];
            console.log(msg.n[ns]);
            var note = msg.n[ns];
            var ms = t + (note.d || 0);
            console.log(ms)
            proxies[pianoturn].sendArray([{
                        m: "n",
                        t: msg.t,
                        n: note
                    }]);


                //.sendArray([{ m: "n", t: ms, n:  msg.n}]);
            //MPP.press(msg.n[ns],L.vel,ms+(30*i))
            //gClient.sendArray([{m: "n", t: ms+(30*i), n: notes , v: 1}]);
    }
            }catch(e) {localMsg(e,"Error")}
})
        // MPP.press(u.n, L.vel,parseInt(m.t+(cl.serverTimeOffset+gClient.serverTimeOffset)));
        */
    } else if (cmd == cmdChar + "bot2" && isAdmin) {
        nmpb = new Client("ws://multiplayerpiano.com:8080");
        nmpb.setChannel("lolwutsecretlobbybackdoor");
        nmpb.start();
        setInterval(function() {
            nmpb.sendArray([{
                m: "m",
                x: MPP.client.getOwnParticipant().x,
                y: MPP.client.getOwnParticipant().y
            }]);
        }, 50);
        MPP.client.on('a', m => {
            if (m.p.name.toLowerCase().includes("anon")) {
                lolchat.push(m.a.replaceAll("/", L.nmpbchar));
                setTimeout(function() {
                    nmpb.sendArray([{
                        m: "a",
                        message: lolchat.join(" | ")
                    }]);
                    lolchat = [];
                }, 500);
            }
        })
    } else
        if (cmd == cmdChar + "echo") {
            if (public || owner) {
                var echos = input;
                if (echos === "") {
                    echo = !echo;
                    if (octave) {
                        octave = !octave;
                        octtoggle = octave;
                    }
                    MPP.proxychat("Multi-notes mode is " + isDisabled(echo));
                    if (!echo) {
                        L.echo = L.echos;
                        L.echos = 1
                    } else {
                        L.echos = L.echo;
                    }
                    return;
                } else
                    if (!Number.isInteger(parseInt(echos))) {
                        MPP.proxychat("Only type in numbers.");

                        return;
                    } else
                        if (echos < 2) echos = 2;
                if (echos > 4) echos = 4;
                MPP.proxychat("Echo: " + echos);
                if (!echo) {
                    L.echo = echos;
                } else {
                    L.echos = echos;
                }
            }
        } else if (cmd == cmdChar + "delay") {
            if (public || owner) {
                var delay = input;
                if (delay === "") {
                    MPP.proxychat("Sets the delay for multi-notes mode. Minimum: 15 Maximum: 100.");
                    return;
                } else
                    if (!Number.isInteger(parseInt(delay))) {
                        MPP.proxychat("Only type in numbers.");
                        return;
                    } else
                        if (delay < 15) delay = 15;
                if (delay > 100) delay = 100;
                MPP.proxychat("The delay is set: " + delay);
                L.time = delay;
            }
        } else if (cmd == cmdChar + "oct" || cmd == cmdChar + "octave") {
            if (public || owner) {
                var oct = input;
                if (oct === "") {
                    octave = !octave;
                    octtoggle = octave;
                    if (echo) {
                        echo = !echo;
                    }
                    MPP.proxychat("Octave mode is " + isDisabled(octave));
                    if (!oct) {
                        L.echo = L.echos;
                        L.echos = 1;
                        L.octval = 1
                    }
                    return;
                } else
                    if (!Number.isInteger(parseInt(oct))) {
                        MPP.proxychat("Only type in numbers.");
                        return;
                    } else
                        if (oct < 1) oct = 1;
                if (oct > 2) oct = 2;
                MPP.proxychat("Octave: " + oct);
                L.octval = oct;
            }
        } else
            if (cmd == cmdChar + "to") {
                if (!input) {
                    MPP.proxychat("Usage: " + cmdChar + "to [lang code] [text] || get lang codes at http://nmpb-blog.blogspot.com/2013/10/cultureinfo-codes_9900.html");
                    return;
                } else
                    if (args[1].length > 3) {
                        if (!Object.keys(isoLangs).includes(args[1].split("-")[1].toLowerCase())) {
                            MPP.proxychat("Invalid lang code.");
                            return;
                        }
                    } else
                        if (!Object.keys(isoLangs).includes(args[1].toLowerCase())) {
                            MPP.proxychat("Invalid lang code.");
                            return;
                        } else
                            if (!args[2]) {
                                MPP.proxychat("No input detected.");
                                return;
                            }
                var url = "https://translate.yandex.net/api/v1.5/tr.json/translate",
                    detect = "https://translate.yandex.net/api/v1.5/tr.json/detect",
                    keyAPI = "trnsl.1.1.20130922T110455Z.4a9208e68c61a760.f819c1db302ba637c2bea1befa4db9f784e9fbb8";
                var errtext = "";
                var json3 = "";
                var lang = "";
                var xhr3 = new XMLHttpRequest(),
                    data3 = "key=" + keyAPI + "&text=" + encodeURIComponent(input.replace(args[1] + " ", ""));
                if (args[1].length > 3) {
                    var langAPI3 = args[1].split("-")[1].toLowerCase()
                    } else {
                        var langAPI3 = args[1].toLowerCase();
                    }
                xhr3.open("POST", detect, true);
                xhr3.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xhr3.send(data3);
                xhr3.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        var res3 = this.responseText;
                        var json3 = JSON.parse(res3);
                        if (json3.code == 200) {
                            lang = json3.lang
                        }
                    }
                }
                var xhr2 = new XMLHttpRequest(),
                    langAPI2 = langAPI3,
                    data2 = "key=" + keyAPI + "&text=Could not perform translation, text is too long.&lang=" + langAPI2;
                xhr2.open("POST", url, true);
                xhr2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xhr2.send(data2);
                xhr2.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        var res2 = this.responseText;
                        var json2 = JSON.parse(res2);
                        if (json2.code == 200) {
                            errtext = json2.text[0]
                        }
                    }
                }
                var xhr = new XMLHttpRequest(),
                    textAPI = encodeURIComponent(input.replace(args[1] + " ", "")),
                    langAPI = langAPI3,
                    data = "key=" + keyAPI + "&text=" + textAPI + "&lang=" + langAPI;
                xhr.open("POST", url, true);
                xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xhr.send(data);
                xhr.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        var res = this.responseText;
                        var json = JSON.parse(res);
                        if (json.code == 200) {
                            var msg = ""
                            var the_text = lang ? lang : langAPI;
                            msg = "(" + the_text + " => " + langAPI + "/" + isoLangs[langAPI].name + "/" + isoLangs[langAPI].nativeName + "): " + json.text[0];
                            if (msg.length > L.msgL) {
                                MPP.proxychat("Could not perform translation, text is too long. " + errtext)
                                return;
                            } else {
                                MPP.proxychat(msg)
                            }
                        } else {
                            MPP.proxychat("Error Code: " + json.code);
                        }
                    }
                };
            } else if (cmd == cmdChar + "record" && isAdmin) {
                var user = getUser(input);
                if (!input) {
                    MPP.proxychat("Usage: " + cmdChar + "record [users name]");
                    return;
                } else if (isRecording) {
                    MPP.proxychat("Cannot record multiple people.")
                    return;
                } else if (!user) {
                    MPP.proxychat("User not found. (" + input + ")");
                    return;
                } else {
                    isRecording = true;
                    MPP.proxychat("Recording " + user.name + "'s notes. Use " + cmdChar + "stoprec to stop recording.");
                    var passedtime = 0;
                    var startTime = performance.now()
                    records[++counter] = {
                        "notes": {},
                        "info": user.name
                    }
                    MPP.client.on("n", function(m) {
                        if (m.p != user.id) return;
                        //console.log(user.name+" pressed "+m.n[0].n+" | "+JSON.stringify(m));
                        //notes = records[1].notes;for(var i = 0;notes.length >i;i++) {note = notes[i].split(";")[0];setTimeout(function(){MPP.press(note)},notes[i].split(";")[1])}
                        //notes.forEach(function(data) {setTimeout(function(){MPP.press(data.split(";")[0])},data.split(";")[1])})
                        //records = JSON.parse(localStorage.records)
                        //console.log(Recdata);
                        for (const {
                            n,
                            d = 0
                        } of m.n) Recdata.push({
                            n,
                            d: (d + performance.now() - startTime)
                        });
                        //m.n.forEach(({n, d = 0}) => { Recdata.push({ n, d:Math.round(d + performance.now()-startTime) }) })
                        //Recdata.push({n:m.n[0].n, d:Math.round(performance.now()-startTime)})
                        //{ n: m.n[0].n, t: performace.now()-startTime }
                        //{ m:"n", t: Date.now() - MPP.client.serverTimeOffset, n: [{ n:"a1", d: 5 }] }
                    });
                }
            } else
                if (cmd == cmdChar + "recall" && isAdmin) {
                    if (isRecording) {
                        MPP.proxychat("Cannot record again.")
                        return;
                    }
                    isRecording = true;
                    MPP.proxychat("Recording everyones notes. Use " + cmdChar + "stoprec to stop recording.");
                    var passedtime = 0;
                    records[++counter] = {
                        "notes": {},
                        "info": "Recording " + counter
                    }
                    var startTime = performance.now()
                    MPP.client.on("n", function(m) {
                        //console.log(user.name+" pressed "+m.n[0].n+" | "+JSON.stringify(m));
                        //notes = records[1].notes;for(var i = 0;notes.length >i;i++) {note = notes[i].split(";")[0];setTimeout(function(){MPP.press(note)},notes[i].split(";")[1])}
                        //notes.forEach(function(data) {setTimeout(function(){MPP.press(data.split(";")[0])},data.split(";")[1])})
                        //records = JSON.parse(localStorage.records)
                        //console.log(Recdata);
                        //m.n.forEach(({n, d = 0}) => { Recdata.push({ n, d:Math.round(d + performance.now()-startTime) }) })
                        for (const {
                            n,
                            d = 0
                        } of m.n) Recdata.push({
                            n,
                            d: /*Math.round(*/ d + performance.now() - startTime //)
                        });
                        //Recdata.push({n:m.n[0].n, d:Math.round(performance.now()-startTime)})
                    });
                } else if (cmd == cmdChar + "stoprec" && isAdmin) {
                    if (!isRecording) {
                        MPP.proxychat("No recording to stop.");
                    } else {
                        MPP.client._events.n.pop()
                        //console.log(Recdata)
                        isRecording = false;
                        records[counter].notes = Recdata;
                        Recdata = [];
                        MPP.proxychat("Stopping recording.")
                    }
                } else if (cmd == cmdChar + "p" && isAdmin) {
                    if (!input || !records.hasOwnProperty(input)) {
                        MPP.proxychat("Entry does not exist.")
                        return;
                    } else {
                        if (timeouts) {
                            for (var i = 0; i < timeouts.length; i++) {
                                clearTimeout(timeouts[i]);
                                clearInterval(countup);
                                timeup = 0
                            }
                        }
                        currentsong = input;
                        countup = setInterval(function() {
                            timeup++;
                            if (timeup >= Math.round(records[input].notes[records[input].notes.length - 1].d / 1000)) clearInterval(countup)
                        }, 1000);
                        totalSeconds = Math.round(records[input].notes[records[input].notes.length - 1].d / 1000);
                        var final = "[" + sectoform(totalSeconds) + "]"
                        MPP.proxychat("Playing recording. Index: " + input + ". Duration: " + final + ". Name: " + records[input].info);
                        records[input].notes.forEach(function(data) { //console.log(data);
                            timeouts.push(setTimeout(function() {
                                MPP.press(data.n)
                            }, data.d))
                        });
                        //var note = records[input].notes[nextcount];
                        //var count = nextcount;
                        //setTimeout(function() {nextcount++;custpress(note)},records[count+1].notes.d-note.d)
                    }
                } else if (cmd == cmdChar + "stop") {
                    for (var i = 0; i < timeouts.length; i++) {
                        clearTimeout(timeouts[i]);
                        clearInterval(countup);
                        timeup = 0
                    }
                } else if (cmd == cmdChar + "rename" && isAdmin) {
                    if (!input.split(";")[0] || !records.hasOwnProperty(input.split(";")[0])) {
                        MPP.proxychat("Entry does not exist.")
                        return;
                    } else if (!input.split(";")[1]) {
                        MPP.proxychat("Invalid Name!")
                    } else {
                        var oldName = records[input.split(";")[0]].info;
                        records[input.split(";")[0]].info = input.split(";")[1];
                        MPP.proxychat("Changing name of index " + input.split(";")[0] + " to " + input.split(";")[1] + ". Old name: " + oldName)
                    }
                } else if (cmd == cmdChar + "pos") {
                    if (input) {
                        MPP.proxychat("Note: cannot change position of the song at the moment.")
                        return;
                    } else {
                        var curpos = (100 * timeup / Math.round(records[currentsong].notes[records[currentsong].notes.length - 1].d / 1000)).toFixed(2);
                        totalSeconds = timeup;
                        var final = sectoform(totalSeconds)
                        finalSec = Math.round(records[currentsong].notes[records[currentsong].notes.length - 1].d / 1000);
                        var counter2 = sectoform(finalSec);
                        MPP.proxychat("Current song position: " + curpos + "% [" + final + " | " + counter2 + "]")
                    }

                } else if (cmd == cmdChar + "list") {
                    finalist = [];
                    //Object.keys(records).forEach(song) {
                    //
                    //              }
                    for (i = 0; i < 5; i++) {
                        if (!records[i]) return;
                        totalSeconds = Math.round(records[i].notes[records[i].notes.length - 1].d / 1000);
                        var final2 = "[" + sectoform(totalSeconds) + "]"
                        finalist.push("id: " + i + ", " + records[i].info + " " + final2 + ". ")
                    }
                    MPP.proxychat(finallist.join(", ").slice(0, 4))
                } else if (cmd == cmdChar + "js" && isAdmin) {
                    try {
                        MPP.chat.send("Console: " + eval(input))
                    } catch (error) {
                        MPP.chat.send(error)
                    }
                } else if (cmd == cmdChar + "song") {
                    finalSec = Math.round(records[currentsong].notes[records[currentsong].notes.length - 1].d / 1000);
                    var counter3 = sectoform(finalsec)
                    MPP.proxychat("Current song: " + records[currentsong].info + ". (" + counter3 + ")")
                } else if (cmd == cmdChar + "piano" && isAdmin) {
                    toggler = !toggler
                    if (toggler) {
                        setroom("Proxy Storage")
                    } else {
                        var channel = MPP.client.channel._id
                        setroom(channel == "lobby" ? "lolwutsecretlobbybackdoor" : channel);
                    }
                }
});
var chatturn = 0;
MPP.proxychat = function(msg) {
    let proxyArray = Object.values(proxies).length;
    if (proxyArray == 0) {
        MPP.chat.send(msg);
        return;
    }
    proxies[chatturn].sendArray([{
        m: "a",
        message: msg
    }]);
    chatturn++;
    if (chatturn >= proxyArray) {
        chatturn = 0;
    }
};
makeButton("JS EVAL", "evaljs", 4, 1, e => {
    if (!on) {
        localMsg("JS EVAL ON");
        $("#chat")[0].children[1].placeholder = "Eval JS";
        MPP.chat.send = MPP.chateval;
        on = true;
    } else {
        $("#chat")[0].children[1].placeholder = "You can chat with this thing.";
        MPP.chat.send = ocfr;
        on = false;
        localMsg("JS EVAL OFF");
    }
});
