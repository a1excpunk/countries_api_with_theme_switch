import { Component } from '@angular/core';

@Component({
  selector: 'app-country-card',
  standalone: true,
  imports: [],
  templateUrl: './country-card.component.html',
  styleUrl: './country-card.component.scss'
})
export class CountryCardComponent {
  data: any = {
    "name": "Belgium",
    "topLevelDomain": [
      ".be"
    ],
    "alpha2Code": "BE",
    "alpha3Code": "BEL",
    "callingCodes": [
      "32"
    ],
    "capital": "Brussels",
    "altSpellings": [
      "BE",
      "België",
      "Belgie",
      "Belgien",
      "Belgique",
      "Kingdom of Belgium",
      "Koninkrijk België",
      "Royaume de Belgique",
      "Königreich Belgien"
    ],
    "subregion": "Western Europe",
    "region": "Europe",
    "population": 11555997,
    "latlng": [
      50.83333333,
      4
    ],
    "demonym": "Belgian",
    "area": 30528,
    "gini": 27.2,
    "timezones": [
      "UTC+01:00"
    ],
    "borders": [
      "FRA",
      "DEU",
      "LUX",
      "NLD"
    ],
    "nativeName": "België",
    "numericCode": "056",
    "flags": {
      "svg": "https://flagcdn.com/be.svg",
      "png": "https://flagcdn.com/w320/be.png"
    },
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      {
        "iso639_1": "nl",
        "iso639_2": "nld",
        "name": "Dutch",
        "nativeName": "Nederlands"
      },
      {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      },
      {
        "iso639_1": "de",
        "iso639_2": "deu",
        "name": "German",
        "nativeName": "Deutsch"
      }
    ],
    "translations": {
      "br": "Belgia",
      "pt": "Bélgica",
      "nl": "België",
      "hr": "Belgija",
      "fa": "بلژیک",
      "de": "Belgien",
      "es": "Bélgica",
      "fr": "Belgique",
      "ja": "ベルギー",
      "it": "Belgio",
      "hu": "Belgium"
    },
    "flag": "https://flagcdn.com/be.svg",
    "regionalBlocs": [
      {
        "acronym": "EU",
        "name": "European Union"
      }
    ],
    "cioc": "BEL",
    "independent": true
  }
}
