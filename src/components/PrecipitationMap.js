import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Circle,
  Popup,
  Marker,
  Rectangle,
} from "react-leaflet";
import { Button, Paper, Typography, Box } from "@mui/material";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Configuration des icônes Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl:
    "httpshttps://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});
// Création des icônes personnalisées
const sunIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/869/869869.png",
  iconSize: [70, 70],
});

const cloudySunIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/1146/1146869.png",
  iconSize: [50, 50],
});

const rainIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/4150/4150904.png",
  iconSize: [50, 50],
});
const PrecipitationMap = () => {
  const [activeLayers, setActiveLayers] = useState({
    precipitationHigh: false,
    precipitationMedium: false,
    precipitationLow: false,
    temperatureJuly: false,
    temperatureJanuary: false,
  });
  const weatherMarkers = {
    low: [
      // التساقطات أقل من 200مم
      { position: [25.5, 22.5], icon: sunIcon, country: "Libya" },
      { position: [29.0, 12.0], icon: sunIcon, country: "Libya" },
      { position: [24.0, 4.0], icon: sunIcon, country: "Algerie" },
      { position: [30.5, 0.5], icon: sunIcon, country: "Algerie" },
      { position: [27.5, -11.0], icon: sunIcon, country: "Maroc" },
      { position: [23.5, -9.5], icon: sunIcon, country: "Mauritanie" },
    ],
    medium: [
      // التساقطات بين 400 و200مم
      { position: [36.0, 9.5], icon: cloudySunIcon, country: "Tunisie" },
      { position: [35.0, 2.0], icon: cloudySunIcon, country: "Algerie" },
      { position: [32.5, -7.0], icon: cloudySunIcon, country: "Maroc" },
    ],
    high: [
      // التساقطات أكثر من 400 مم
      { position: [33.5, 20.0], icon: rainIcon, country: "Libya" },
      { position: [38.0, 10.0], icon: rainIcon, country: "Tunisie" },
      { position: [37.5, 3.0], icon: rainIcon, country: "Algerie" },
      { position: [35.0, -5.0], icon: rainIcon, country: "Maroc" },
      { position: [16.0, -12.5], icon: rainIcon, country: "Mauritanie" },
    ],
  };
  // Modifier les données de précipitations dans countryData
  const countryData = {
    maroc: {
      high: [
        {
          center: [35.25, -3.9333],
          radius: 20000,
          value: ">400 مم",
          city: "الحسيمة",
        },
        {
          center: [35.5667, -5.3667],
          radius: 20000,
          value: ">400 مم",
          city: "تطوان",
        },
        {
          center: [35.8883, -5.3167],
          radius: 20000,
          value: ">400 مم",
          city: "سبتة",
        },
        {
          center: [35.7667, -5.8],
          radius: 20000,
          value: ">400 مم",
          city: "طنجة",
        },
        {
          center: [35.1833, -6.15],
          radius: 20000,
          value: ">400 مم",
          city: "العرائش",
        },
        {
          center: [34.0333, -5.0],
          radius: 20000,
          value: ">400 مم",
          city: "فاس",
        },
        {
          center: [33.8833, -5.55],
          radius: 20000,
          value: ">400 مم",
          city: "مكناس",
        },
        {
          center: [34.2167, -4.0167],
          radius: 20000,
          value: ">400 مم",
          city: "تازة",
        },
        {
          center: [34.0253, -6.8361],
          radius: 20000,
          value: ">400 مم",
          city: "الرباط",
        },
        {
          center: [34.0333, -6.8167],
          radius: 20000,
          value: ">400 مم",
          city: "سلا",
        },
        {
          center: [34.25, -6.5833],
          radius: 20000,
          value: ">400 مم",
          city: "القنيطرة",
        },
        {
          center: [33.5992, -7.62],
          radius: 20000,
          value: ">400 مم",
          city: "الدار البيضاء",
        },
        {
          center: [32.3333, -6.3667],
          radius: 20000,
          value: ">400 مم",
          city: "بني ملال",
        },
        {
          center: [32.9333, -5.6667],
          radius: 20000,
          value: ">400 مم",
          city: "خنيفرة",
        },
      ],
      medium: [
        {
          center: [35.3167, -2.9333],
          radius: 20000,
          value: "200-400 مم",
          city: "مليلية",
        },
        {
          center: [35.1667, -2.9333],
          radius: 20000,
          value: "200-400 مم",
          city: "الناضور",
        },
        {
          center: [34.6833, -1.9167],
          radius: 20000,
          value: "200-400 مم",
          city: "وجدة",
        },
        {
          center: [34.9167, -2.3167],
          radius: 20000,
          value: "200-400 مم",
          city: "بوعرفة",
        },
        {
          center: [31.9333, -4.4333],
          radius: 20000,
          value: "200-400 مم",
          city: "الراشدية",
        },
        {
          center: [30.9167, -6.9167],
          radius: 20000,
          value: "200-400 مم",
          city: "ورزازات",
        },
        {
          center: [30.4167, -9.5833],
          radius: 20000,
          value: "200-400 مم",
          city: "أكادير",
        },
        {
          center: [29.7167, -9.7333],
          radius: 20000,
          value: "200-400 مم",
          city: "تيزنيت",
        },
        {
          center: [29.3833, -10.1667],
          radius: 20000,
          value: "200-400 مم",
          city: "سيدي إفني",
        },
        {
          center: [31.5167, -9.7667],
          radius: 20000,
          value: "200-400 مم",
          city: "الصويرة",
        },
        {
          center: [32.2833, -9.2333],
          radius: 20000,
          value: "200-400 مم",
          city: "أسفي",
        },
        {
          center: [33.0, -7.4167],
          radius: 20000,
          value: "200-400 مم",
          city: "سطات",
        },
        {
          center: [31.63, -8.0],
          radius: 20000,
          value: "200-400 مم",
          city: "مراكش",
        },
        {
          center: [30.4167, -5.8333],
          radius: 20000,
          value: "200-400 مم",
          city: "درعة",
        },
        {
          center: [31.25, -4.25],
          radius: 20000,
          value: "200-400 مم",
          city: "تافيلالت",
        },
        {
          center: [30.5, -8.0],
          radius: 20000,
          value: "200-400 مم",
          city: "سوس",
        },
        {
          center: [30.0, -9.5],
          radius: 20000,
          value: "200-400 مم",
          city: "ماسة",
        },
        {
          center: [28.9833, -10.0667],
          radius: 20000,
          value: "200-400 مم",
          city: "كلميم",
        },
      ],
      low: [
        {
          center: [32.1167, -1.2167],
          radius: 50000,
          value: "<200 مم",
          city: "فجيج",
        },
        {
          center: [30.3333, -5.8333],
          radius: 50000,
          value: "<200 مم",
          city: "زاكورة",
        },
        {
          center: [29.75, -7.9667],
          radius: 50000,
          value: "<200 مم",
          city: "طاطا",
        },
        {
          center: [28.4333, -11.1],
          radius: 50000,
          value: "<200 مم",
          city: "طانطان",
        },
        {
          center: [27.75, -12.0],
          radius: 50000,
          value: "<200 مم",
          city: "المحبس",
        },
        {
          center: [27.15, -13.2],
          radius: 50000,
          value: "<200 مم",
          city: "الجديرية",
        },
        {
          center: [26.75, -11.6833],
          radius: 50000,
          value: "<200 مم",
          city: "السمارة",
        },
        {
          center: [25.4667, -12.8667],
          radius: 50000,
          value: "<200 مم",
          city: "تفاريتي",
        },
        {
          center: [27.9333, -12.9167],
          radius: 50000,
          value: "<200 مم",
          city: "طرفاية",
        },
        {
          center: [27.15, -13.2],
          radius: 50000,
          value: "<200 مم",
          city: "العيون",
        },
        {
          center: [26.1167, -14.4833],
          radius: 50000,
          value: "<200 مم",
          city: "بوجدور",
        },
        {
          center: [25.1667, -12.0],
          radius: 50000,
          value: "<200 مم",
          city: "كتلة زمور",
        },
        {
          center: [24.9667, -12.0667],
          radius: 50000,
          value: "<200 مم",
          city: "جريفية",
        },
        {
          center: [23.5, -15.9333],
          radius: 50000,
          value: "<200 مم",
          city: "بئر انزران",
        },
        {
          center: [22.5, -14.5],
          radius: 50000,
          value: "<200 مم",
          city: "ميجيك",
        },
        {
          center: [23.7167, -15.9333],
          radius: 50000,
          value: "<200 مم",
          city: "الداخلة",
        },
        {
          center: [22.0, -16.0],
          radius: 50000,
          value: "<200 مم",
          city: "أوسرد",
        },
        {
          center: [21.5, -16.5],
          radius: 50000,
          value: "<200 مم",
          city: "تشلا",
        },
        {
          center: [21.0, -16.0],
          radius: 50000,
          value: "<200 مم",
          city: "بئر كندوز",
        },
        {
          center: [21.0, -16.0],
          radius: 50000,
          value: "<200 مم",
          city: "وادي الذهب",
        },
        {
          center: [27.6667, -8.1667],
          radius: 50000,
          value: "<200 مم",
          city: "الساقية الحمراء",
        },
      ],
      tempJuly: [{ center: [32.0, -6.8], value: "38°C" }],
      tempJanuary: [{ center: [34.0, -5.5], value: "12°C" }],
    },
    algerie: {
      high: [
        {
          center: [36.9, 7.7667],
          radius: 20000,
          value: ">400 مم",
          city: "عنابة",
        },
        {
          center: [36.365, 6.6147],
          radius: 20000,
          value: ">400 مم",
          city: "قسنطينة",
        },
        {
          center: [36.8211, 5.7667],
          radius: 20000,
          value: ">400 مم",
          city: "جيجل",
        },
        {
          center: [36.7167, 4.05],
          radius: 20000,
          value: ">400 مم",
          city: "تيزي وزو",
        },
        {
          center: [36.7764, 3.0586],
          radius: 20000,
          value: ">400 مم",
          city: "الجزائر",
        },
        {
          center: [36.1667, 1.3333],
          radius: 20000,
          value: ">400 مم",
          city: "تيبارة",
        },
        {
          center: [36.1667, 1.3167],
          radius: 20000,
          value: ">400 مم",
          city: "الشلف",
        },
        {
          center: [35.4, 0.1333],
          radius: 20000,
          value: ">400 مم",
          city: "معسكر",
        },
        {
          center: [35.6911, -0.6417],
          radius: 20000,
          value: ">400 مم",
          city: "وهران",
        },
        {
          center: [34.8783, -1.315],
          radius: 20000,
          value: ">400 مم",
          city: "تلمسان",
        },
      ],
      medium: [
        {
          center: [35.4, 8.1167],
          radius: 20000,
          value: "200-400 مم",
          city: "تبسة",
        },
        {
          center: [35.8667, 7.1167],
          radius: 20000,
          value: "200-400 مم",
          city: "أم البواقي",
        },
        {
          center: [35.4167, 7.1333],
          radius: 20000,
          value: "200-400 مم",
          city: "خنشلة",
        },
        {
          center: [35.55, 6.1667],
          radius: 20000,
          value: "200-400 مم",
          city: "باتنة",
        },
        {
          center: [36.19, 5.41],
          radius: 20000,
          value: "200-400 مم",
          city: "سطيف",
        },
        {
          center: [35.9667, 5.0333],
          radius: 20000,
          value: "200-400 مم",
          city: "بريكة",
        },
        {
          center: [36.0667, 4.7667],
          radius: 20000,
          value: "200-400 مم",
          city: "برج بوعريريج",
        },
        {
          center: [35.7, 4.5333],
          radius: 20000,
          value: "200-400 مم",
          city: "المسيلة",
        },
        {
          center: [34.6667, 3.25],
          radius: 20000,
          value: "200-400 مم",
          city: "الجلفة",
        },
        {
          center: [33.8, 2.8833],
          radius: 20000,
          value: "200-400 مم",
          city: "الأغواط",
        },
        {
          center: [35.6, 1.8167],
          radius: 20000,
          value: "200-400 مم",
          city: "تيسمسيلت",
        },
        {
          center: [35.3667, 1.3167],
          radius: 20000,
          value: "200-400 مم",
          city: "تيارت",
        },
        {
          center: [34.8333, 0.15],
          radius: 20000,
          value: "200-400 مم",
          city: "سعيدة",
        },
        {
          center: [33.6833, 1.0167],
          radius: 20000,
          value: "200-400 مم",
          city: "البيض",
        },
        {
          center: [33.2667, -0.3167],
          radius: 20000,
          value: "200-400 مم",
          city: "النعامة",
        },
      ],
      low: [
        {
          center: [34.8667, 5.7333],
          radius: 50000,
          value: "<200 مم",
          city: "سكرة",
        },
        {
          center: [34.4167, 5.5],
          radius: 50000,
          value: "<200 مم",
          city: "أولاد جلال",
        },
        {
          center: [33.3667, 6.8667],
          radius: 50000,
          value: "<200 مم",
          city: "الوادي",
        },
        {
          center: [33.95, 5.9167],
          radius: 50000,
          value: "<200 مم",
          city: "المغير",
        },
        {
          center: [33.1167, 6.0833],
          radius: 50000,
          value: "<200 مم",
          city: "تقرت",
        },
        {
          center: [32.4833, 3.6667],
          radius: 50000,
          value: "<200 مم",
          city: "غرداية",
        },
        {
          center: [31.6167, -2.2167],
          radius: 50000,
          value: "<200 مم",
          city: "بشار",
        },
        {
          center: [31.95, 5.3167],
          radius: 50000,
          value: "<200 مم",
          city: "ورقلة",
        },
        {
          center: [30.5833, 2.8833],
          radius: 50000,
          value: "<200 مم",
          city: "المنيعة",
        },
        {
          center: [30.1333, -2.1667],
          radius: 50000,
          value: "<200 مم",
          city: "بني عباس",
        },
        {
          center: [29.25, 0.25],
          radius: 50000,
          value: "<200 مم",
          city: "تيميمون",
        },
        {
          center: [27.88, -0.28],
          radius: 50000,
          value: "<200 مم",
          city: "أدرار",
        },
        {
          center: [27.2, 2.4667],
          radius: 50000,
          value: "<200 مم",
          city: "عين صالح",
        },
        {
          center: [26.5, 8.4667],
          radius: 50000,
          value: "<200 مم",
          city: "إيليزي",
        },
        {
          center: [24.55, 9.4833],
          radius: 50000,
          value: "<200 مم",
          city: "جانت",
        },
        {
          center: [22.7833, 5.5167],
          radius: 50000,
          value: "<200 مم",
          city: "تمنراست",
        },
        {
          center: [19.5667, 5.75],
          radius: 50000,
          value: "<200 مم",
          city: "عين قزام",
        },
        {
          center: [21.3167, 1.3833],
          radius: 50000,
          value: "<200 مم",
          city: "برج باجي مختار",
        },
      ],
      tempJuly: [{ center: [31.6, 2.2], value: "42°C" }],
      tempJanuary: [{ center: [36.5, 1.5], value: "10°C" }],
    },
    tunisie: {
      high: [
        {
          center: [36.8625, 10.1956],
          radius: 20000,
          value: ">400 مم",
          city: "أريانة",
        },
        {
          center: [36.8, 10.1833],
          radius: 20000,
          value: ">400 مم",
          city: "تونس",
        },
        {
          center: [36.7333, 10.2167],
          radius: 20000,
          value: ">400 مم",
          city: "بن عروس",
        },
        {
          center: [36.9, 10.6],
          radius: 20000,
          value: ">400 مم",
          city: "شمال نابل",
        },
        {
          center: [36.45, 10.7333],
          radius: 20000,
          value: ">400 مم",
          city: "وسط نابل",
        },
        {
          center: [36.4, 10.15],
          radius: 20000,
          value: ">400 مم",
          city: "زغوان",
        },
        {
          center: [36.7333, 9.1833],
          radius: 20000,
          value: ">400 مم",
          city: "باجة",
        },
        {
          center: [36.5, 8.7833],
          radius: 20000,
          value: ">400 مم",
          city: "جندوبة",
        },
        {
          center: [36.0833, 9.3667],
          radius: 20000,
          value: ">400 مم",
          city: "سليانة",
        },
        {
          center: [36.1833, 8.7167],
          radius: 20000,
          value: ">400 مم",
          city: "الكاف",
        },
        {
          center: [35.9167, 8.8333],
          radius: 20000,
          value: ">400 مم",
          city: "شمال القصرين",
        },
        {
          center: [35.8333, 8.75],
          radius: 20000,
          value: ">400 مم",
          city: "وسط القصرين",
        },
      ],
      medium: [
        {
          center: [36.3, 10.5],
          radius: 20000,
          value: "200-400 مم",
          city: "جنوب نابل",
        },
        {
          center: [35.8333, 10.6333],
          radius: 20000,
          value: "200-400 مم",
          city: "سوسة",
        },
        {
          center: [35.7667, 10.8],
          radius: 20000,
          value: "200-400 مم",
          city: "المنستير",
        },
        {
          center: [35.5, 11.0667],
          radius: 20000,
          value: "200-400 مم",
          city: "المهدية",
        },
        {
          center: [34.7333, 10.7667],
          radius: 20000,
          value: "200-400 مم",
          city: "صفاقس",
        },
        {
          center: [35.6833, 10.1],
          radius: 20000,
          value: "200-400 مم",
          city: "القيروان",
        },
        {
          center: [35.0333, 9.5],
          radius: 20000,
          value: "200-400 مم",
          city: "سيدي بوزيد",
        },
        {
          center: [35.25, 8.75],
          radius: 20000,
          value: "200-400 مم",
          city: "جنوب القصرين",
        },
      ],
      low: [
        {
          center: [34.4167, 8.7833],
          radius: 50000,
          value: "<200 مم",
          city: "قفصة",
        },
        {
          center: [33.9167, 8.1333],
          radius: 50000,
          value: "<200 مم",
          city: "توزر",
        },
        {
          center: [33.8833, 10.1167],
          radius: 50000,
          value: "<200 مم",
          city: "قابس",
        },
        {
          center: [33.7, 8.9667],
          radius: 50000,
          value: "<200 مم",
          city: "قبلي",
        },
        {
          center: [33.35, 10.4833],
          radius: 50000,
          value: "<200 مم",
          city: "مدنين",
        },
        {
          center: [33.0, 10.45],
          radius: 50000,
          value: "<200 مم",
          city: "تطاوين",
        },
        {
          center: [32.3833, 9.8],
          radius: 50000,
          value: "<200 مم",
          city: "رمادة",
        },
        {
          center: [32.0, 10.5],
          radius: 50000,
          value: "<200 مم",
          city: "البرمة",
        },
      ],
      tempJuly: [{ center: [34.0, 8.8], value: "40°C" }],
      tempJanuary: [{ center: [36.5, 9.4], value: "11°C" }],
    },
    libye: {
      high: [
        {
          center: [32.7667, 21.7417],
          radius: 20000,
          value: ">400 مم",
          city: "شمال البيضاء",
        },
        {
          center: [32.5, 20.8333],
          radius: 20000,
          value: ">400 مم",
          city: "شمال المرج",
        },
        {
          center: [32.1167, 20.0667],
          radius: 20000,
          value: ">400 مم",
          city: "شمال بنغازي",
        },
        {
          center: [32.1833, 20.6],
          radius: 20000,
          value: ">400 مم",
          city: "الأبيار",
        },
      ],
      medium: [
        {
          center: [32.6333, 14.2667],
          radius: 20000,
          value: "200-400 مم",
          city: "نوكرات الخمس",
        },
        {
          center: [32.7572, 12.7278],
          radius: 20000,
          value: "200-400 مم",
          city: "الزاوية",
        },
        {
          center: [32.5333, 13.0167],
          radius: 20000,
          value: "200-400 مم",
          city: "العزيزية",
        },
        {
          center: [32.8872, 13.1913],
          radius: 20000,
          value: "200-400 مم",
          city: "طرابلس",
        },
        {
          center: [32.65, 14.2667],
          radius: 20000,
          value: "200-400 مم",
          city: "نادي الخمس",
        },
        {
          center: [32.4333, 13.6333],
          radius: 20000,
          value: "200-400 مم",
          city: "ترهونة",
        },
        {
          center: [32.95, 12.0833],
          radius: 20000,
          value: "200-400 مم",
          city: "زليتان",
        },
        {
          center: [32.3783, 15.0906],
          radius: 20000,
          value: "200-400 مم",
          city: "مصراتة",
        },
        {
          center: [32.75, 21.6167],
          radius: 20000,
          value: "200-400 مم",
          city: "شركة الجبل الأخضر",
        },
      ],
      low: [
        {
          center: [32.7667, 22.6333],
          radius: 50000,
          value: "<200 مم",
          city: "درنة",
        },
        {
          center: [32.0833, 23.95],
          radius: 50000,
          value: "<200 مم",
          city: "طبرق",
        },
        {
          center: [31.7667, 25.1],
          radius: 50000,
          value: "<200 مم",
          city: "بارديا",
        },
        {
          center: [30.7167, 24.0167],
          radius: 50000,
          value: "<200 مم",
          city: "أبو جاغبوب",
        },
        {
          center: [29.8167, 21.9333],
          radius: 50000,
          value: "<200 مم",
          city: "بوتنان",
        },
        {
          center: [30.75, 20.2167],
          radius: 50000,
          value: "<200 مم",
          city: "إجدابيا",
        },
        {
          center: [30.4167, 19.5667],
          radius: 50000,
          value: "<200 مم",
          city: "مرسى بن يورايقة",
        },
        {
          center: [29.0167, 21.5333],
          radius: 50000,
          value: "<200 مم",
          city: "جلو",
        },
        {
          center: [25.9333, 21.0833],
          radius: 50000,
          value: "<200 مم",
          city: "تازيربو",
        },
        {
          center: [24.1667, 23.2833],
          radius: 50000,
          value: "<200 مم",
          city: "أبو كوفرة",
        },
        {
          center: [24.2, 23.3],
          radius: 50000,
          value: "<200 مم",
          city: "الجوف",
        },
        {
          center: [25.15, 17.0667],
          radius: 50000,
          value: "<200 مم",
          city: "على أوواينات",
        },
        {
          center: [26.6167, 12.7667],
          radius: 50000,
          value: "<200 مم",
          city: "ميتان سارة",
        },
        {
          center: [31.2, 16.5833],
          radius: 50000,
          value: "<200 مم",
          city: "سرت",
        },
        {
          center: [26.1333, 15.7833],
          radius: 50000,
          value: "<200 مم",
          city: "دان",
        },
        {
          center: [29.1167, 15.9333],
          radius: 50000,
          value: "<200 مم",
          city: "هون",
        },
        {
          center: [27.5, 14.4333],
          radius: 50000,
          value: "<200 مم",
          city: "الجفرة",
        },
        {
          center: [27.0333, 14.4333],
          radius: 50000,
          value: "<200 مم",
          city: "سبها",
        },
        {
          center: [26.1667, 15.1167],
          radius: 50000,
          value: "<200 مم",
          city: "زويلة",
        },
        { center: [25.9, 13.9], radius: 50000, value: "<200 مم", city: "مرزق" },
        {
          center: [24.9667, 10.1833],
          radius: 50000,
          value: "<200 مم",
          city: "القطران",
        },
        {
          center: [31.7667, 13.9833],
          radius: 50000,
          value: "<200 مم",
          city: "بني وليد",
        },
        {
          center: [26.5833, 12.7667],
          radius: 50000,
          value: "<200 مم",
          city: "ساوفاجين",
        },
        {
          center: [26.6833, 12.95],
          radius: 50000,
          value: "<200 مم",
          city: "بيراك",
        },
        {
          center: [27.5333, 14.2833],
          radius: 50000,
          value: "<200 مم",
          city: "أدري",
        },
        {
          center: [30.4167, 18.5667],
          radius: 50000,
          value: "<200 مم",
          city: "الشاطئ الرماد",
        },
        {
          center: [26.5833, 12.7667],
          radius: 50000,
          value: "<200 مم",
          city: "أوباري",
        },
        {
          center: [24.9667, 10.1833],
          radius: 50000,
          value: "<200 مم",
          city: "غات",
        },
        {
          center: [32.1667, 13.0167],
          radius: 50000,
          value: "<200 مم",
          city: "غريان",
        },
        {
          center: [31.6667, 12.1833],
          radius: 50000,
          value: "<200 مم",
          city: "يفرن",
        },
        {
          center: [32.1667, 13.0167],
          radius: 50000,
          value: "<200 مم",
          city: "الحرشة",
        },
      ],
      tempJuly: [{ center: [29.0, 16.5], value: "45°C" }],
      tempJanuary: [{ center: [32.5, 13.0], value: "15°C" }],
    },
    mauritanie: {
      high: [
        {
          center: [16.6667, -12.5],
          radius: 20000,
          value: ">400 مم",
          city: "جويديماكا",
        },
        {
          center: [16.25, -13.5],
          radius: 20000,
          value: ">400 مم",
          city: "وغورغول",
        },
        {
          center: [15.75, -12.5],
          radius: 20000,
          value: ">400 مم",
          city: "مبوت",
        },
        {
          center: [15.16, -12.18],
          radius: 20000,
          value: ">400 مم",
          city: "سيليبابي",
        },
        {
          center: [16.15, -13.5],
          radius: 20000,
          value: ">400 مم",
          city: "كايدي",
        },
        {
          center: [16.5, -13.75],
          radius: 20000,
          value: ">400 مم",
          city: "اليغ بوجا",
        },
        {
          center: [16.6167, -15.95],
          radius: 20000,
          value: ">400 مم",
          city: "روسو",
        },
        {
          center: [16.1667, -13.6167],
          radius: 20000,
          value: ">400 مم",
          city: "المذرذرة",
        },
      ],
      medium: [
        {
          center: [15.1833, -12.7333],
          radius: 20000,
          value: "200-400 مم",
          city: "كالاتا",
        },
        {
          center: [17.0333, -13.9167],
          radius: 20000,
          value: "200-400 مم",
          city: "اتروس بن عيون",
        },
        {
          center: [16.3333, -9.5],
          radius: 20000,
          value: "200-400 مم",
          city: "هوده",
        },
        {
          center: [15.1667, -12.2],
          radius: 20000,
          value: "200-400 مم",
          city: "كانكوسا",
        },
        {
          center: [16.6167, -11.4],
          radius: 20000,
          value: "200-400 مم",
          city: "كيفة",
        },
        {
          center: [16.6, -13.6],
          radius: 20000,
          value: "200-400 مم",
          city: "أسابا",
        },
        {
          center: [17.6833, -14.2667],
          radius: 20000,
          value: "200-400 مم",
          city: "براكنة",
        },
        {
          center: [17.9333, -15.9667],
          radius: 20000,
          value: "200-400 مم",
          city: "وترارزة",
        },
        {
          center: [17.5333, -14.8],
          radius: 20000,
          value: "200-400 مم",
          city: "بوتيليميت",
        },
        {
          center: [18.0858, -15.9785],
          radius: 20000,
          value: "200-400 مم",
          city: "نواكشوط",
        },
      ],
      low: [
        {
          center: [20.5, -12.5],
          radius: 50000,
          value: "<200 مم",
          city: "ير موغرين",
        },
        {
          center: [21.0, -13.5],
          radius: 50000,
          value: "<200 مم",
          city: "زيمور زمور",
        },
        {
          center: [22.6833, -12.7167],
          radius: 50000,
          value: "<200 مم",
          city: "زويرات",
        },
        {
          center: [22.6667, -12.7],
          radius: 50000,
          value: "<200 مم",
          city: "فدريك",
        },
        {
          center: [20.5, -12.5],
          radius: 50000,
          value: "<200 مم",
          city: "إدرار",
        },
        {
          center: [20.9333, -11.6167],
          radius: 50000,
          value: "<200 مم",
          city: "وادان",
        },
        {
          center: [20.4667, -12.35],
          radius: 50000,
          value: "<200 مم",
          city: "شنقيط",
        },
        { center: [18.7, -9.6], radius: 50000, value: "<200 مم", city: "كوم" },
        {
          center: [20.5167, -13.05],
          radius: 50000,
          value: "<200 مم",
          city: "عطار",
        },
        {
          center: [20.2, -15.95],
          radius: 50000,
          value: "<200 مم",
          city: "إنشيري",
        },
        {
          center: [19.75, -14.3833],
          radius: 50000,
          value: "<200 مم",
          city: "اكجوجت",
        },
        {
          center: [20.9333, -17.0333],
          radius: 50000,
          value: "<200 مم",
          city: "نواذيبو",
        },
        {
          center: [20.95, -17.03],
          radius: 50000,
          value: "<200 مم",
          city: "داخلة نواذيبو",
        },
        {
          center: [16.6667, -7.25],
          radius: 50000,
          value: "<200 مم",
          city: "الحوض الشرقي",
        },
        {
          center: [18.55, -10.0667],
          radius: 50000,
          value: "<200 مم",
          city: "تكانت",
        },
        {
          center: [23.7167, -15.9333],
          radius: 50000,
          value: "<200 مم",
          city: "الداخلة",
        },
      ],
      tempJuly: [{ center: [18.5, -10.5], value: "43°C" }],
      tempJanuary: [{ center: [20.8, -12.0], value: "20°C" }],
    },
  };
  const TemperatureBar = ({
    position,
    julyTemp,
    januaryTemp,
    city,
    showJuly,
    showJanuary,
  }) => {
      if (!position || isNaN(position[0]) || isNaN(position[1])) {
        console.error("Position invalide :", position);
        return null; // N'affiche rien si la position est invalide
      }
    const barWidth = 0.2;
    const maxBarHeight = 2; // Hauteur maximale en degrés

    // Normalisation des hauteurs (entre 0 et 1)
    const julyHeight = maxBarHeight;
    const januaryHeight = maxBarHeight * (januaryTemp.value / julyTemp.value);

    return (
      <>
        {showJuly && (
          <Rectangle
            bounds={[
              [position[0] - julyHeight / 2, position[1] - barWidth],
              [position[0] + julyHeight / 2, position[1]],
            ]}
            pathOptions={{ color: "#E53935", fillOpacity: 0.7 }}
          >
            <Popup>
              <div style={{ textAlign: "center", direction: "rtl" }}>
                <strong>{city}</strong>
                <br />
                <strong>جويلية:</strong> {julyTemp.value}°C ({julyTemp.percent})
              </div>
            </Popup>
          </Rectangle>
        )}

        {showJanuary && (
          <Rectangle
            bounds={[
              [position[0] - januaryHeight / 2, position[1]],
              [position[0] + januaryHeight / 2, position[1] + barWidth],
            ]}
            pathOptions={{ color: "#1E88E5", fillOpacity: 0.7 }}
          >
            <Popup>
              <div style={{ textAlign: "center", direction: "rtl" }}>
                <strong>{city}</strong>
                <br />
                <strong>جانفي:</strong> {januaryTemp.value}°C (
                {januaryTemp.percent})
              </div>
            </Popup>
          </Rectangle>
        )}
      </>
    );
  };

const temperatureData = [
  {
    position: [31.6, 2.2],
    city: "بسكرة",
    julyTemp: { value: "42°C", percent: "100%" },
    januaryTemp: { value: "10°C", percent: "25%" },
  },
  {
    position: [36.2, 1.5],
    city: "الجزائر",
    julyTemp: { value: "38°C", percent: "90%" },
    januaryTemp: { value: "12°C", percent: "30%" },
  },
  {
    position: [32.0, -6.8],
    city: "الرباط",
    julyTemp: { value: "38°C", percent: "90%" },
    januaryTemp: { value: "12°C", percent: "30%" },
  },
  {
    position: [36.5, 9.4],
    city: "تونس",
    julyTemp: { value: "35°C", percent: "85%" },
    januaryTemp: { value: "15°C", percent: "35%" },
  },
  {
    position: [29.0, -8.0],
    city: "ورزازات",
    julyTemp: { value: "40°C", percent: "95%" },
    januaryTemp: { value: "11°C", percent: "28%" },
  },
];
  const toggleLayer = (layer) => {
    setActiveLayers((prev) => ({ ...prev, [layer]: !prev[layer] }));
  };

  const resetMap = () => {
    setActiveLayers({
      precipitationHigh: false,
      precipitationMedium: false,
      precipitationLow: false,
      temperatureJuly: false,
      temperatureJanuary: false,
    });
  };

  // Style des gouttes d'eau
  const dropStyle = (type) => {
    switch (type) {
      case "high":
        return { fillColor: "#1565C0", color: "#0D47A1", fillOpacity: 0.7 };
      case "medium":
        return { fillColor: "#90CAF9", color: "#64B5F6", fillOpacity: 0.7 };
      case "low":
        return { fillColor: "#F5DF4D", color: "##FFEB69", fillOpacity: 0.7 };
      case "tempJuly":
        return { fillColor: "#E53935", color: "#C62828", fillOpacity: 0.7 };
      case "tempJanuary":
        return { fillColor: "#1E88E5", color: "#1565C0", fillOpacity: 0.7 };
      default:
        return {};
    }
  };

  return (
    <div
      style={{
        direction: "rtl",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Paper elevation={3} style={{ padding: "16px", marginBottom: "10px" }}>
        <Typography variant="h5" align="center" gutterBottom>
          خريطة المناخ لدول المغرب العربي
        </Typography>

        <Box display="flex" justifyContent="center" flexWrap="wrap" gap={2}>
          <Button
            variant={activeLayers.precipitationHigh ? "contained" : "outlined"}
            style={{
              backgroundColor: activeLayers.precipitationHigh
                ? "#1565C0"
                : "white",
            }}
            onClick={() => toggleLayer("precipitationHigh")}
          >
            التساقطات أكثر من 400 مم
          </Button>

          <Button
            variant={
              activeLayers.precipitationMedium ? "contained" : "outlined"
            }
            style={{
              backgroundColor: activeLayers.precipitationMedium
                ? "#90CAF9"
                : "white",
            }}
            onClick={() => toggleLayer("precipitationMedium")}
          >
            التساقطات بين 400 و200 مم
          </Button>

          <Button
            variant={activeLayers.precipitationLow ? "contained" : "outlined"}
            style={{
              backgroundColor: activeLayers.precipitationLow
                ? "#F5DF4D"
                : "white",
            }}
            onClick={() => toggleLayer("precipitationLow")}
          >
            التساقطات أقل من 200 مم
          </Button>

          <Button
            variant={activeLayers.temperatureJuly ? "contained" : "outlined"}
            style={{
              backgroundColor: activeLayers.temperatureJuly
                ? "#E53935"
                : "white",
            }}
            onClick={() => toggleLayer("temperatureJuly")}
          >
            معدل الحرارة في جويلية
          </Button>

          <Button
            variant={activeLayers.temperatureJanuary ? "contained" : "outlined"}
            style={{
              backgroundColor: activeLayers.temperatureJanuary
                ? "#1E88E5"
                : "white",
            }}
            onClick={() => toggleLayer("temperatureJanuary")}
          >
            معدل الحرارة في جانفي
          </Button>

          <Button variant="outlined" color="error" onClick={resetMap}>
            إعادة تعيين
          </Button>
        </Box>
      </Paper>

      <div style={{ flex: 1 }}>
        <MapContainer
          center={[27, 5]}
          zoom={5}
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* Ajout des nouveaux marqueurs météo */}
          {activeLayers.precipitationLow &&
            weatherMarkers.low.map((marker, i) => (
              <Marker
                key={`weather-low-${i}`}
                position={marker.position}
                icon={marker.icon}
              ></Marker>
            ))}

          {activeLayers.precipitationMedium &&
            weatherMarkers.medium.map((marker, i) => (
              <Marker
                key={`weather-medium-${i}`}
                position={marker.position}
                icon={marker.icon}
              ></Marker>
            ))}

          {activeLayers.precipitationHigh &&
            weatherMarkers.high.map((marker, i) => (
              <Marker
                key={`weather-high-${i}`}
                position={marker.position}
                icon={marker.icon}
              ></Marker>
            ))}

          {/* Affichage par pays */}
          {activeLayers.precipitationHigh &&
            Object.values(countryData).map((country) =>
              country.high?.map((drop, i) => (
                <Circle
                  key={`high-${i}`}
                  center={drop.center}
                  radius={drop.radius}
                  pathOptions={dropStyle("high")}
                >
                  <Popup>
                    <h3>المدينة: {drop.city}</h3>

                    <p>
                      تتميز هذه المناطق بمناخ رطب حيث تتلقى كميات سنوية هامة من
                      الأمطار أكثر من 400 مم ويكون ذلك خاصة بالشمال الذي يحتوي
                      مناطق ممطرة جدا يمكن أن تفوق كميات الأمطار بها 1000 مم
                      سنويا مثل جبال مقعد وخمير في الشمال الغربي التونسي{" "}
                    </p>
                    <p>المعدل: {drop.value}</p>
                  </Popup>
                </Circle>
              ))
            )}

          {activeLayers.precipitationMedium &&
            Object.values(countryData).map((country) =>
              country.medium?.map((drop, i) => (
                <Circle
                  key={`medium-${i}`}
                  center={drop.center}
                  radius={drop.radius}
                  pathOptions={dropStyle("medium")}
                >
                  <Popup>
                    <h3>المدينة: {drop.city}</h3>
                    <p>المعدل: {drop.value}</p>

                    <p>
                      {" "}
                      تتميز هذه المناطق بمناخ شبه جاف اذ تتراوح كميات الامطار
                      بين 200 و 400 مم. وتشمل أساسا مناطق الوسط. ومن المؤكد أن
                      كميات الأمطار تتناقص كلما اتجهنا نحو الجنوب (فالمنطقة
                      السباسبية تتراوح بين 200 و400 مم)
                    </p>
                  </Popup>
                </Circle>
              ))
            )}

          {activeLayers.precipitationLow &&
            Object.values(countryData).map((country) =>
              country.low?.map((drop, i) => (
                <Circle
                  key={`low-${i}`}
                  center={drop.center}
                  radius={drop.radius}
                  pathOptions={{
                    ...dropStyle("low"),
                    zIndex: 1000, // Pour s'assurer que les grands cercles sont au-dessus
                  }}
                >
                  <Popup>
                    <h3>المدينة: {drop.city}</h3>
                    <p>المعدل: {drop.value}</p>

                    <p>
                      تشهد هذه المناطق الصحراوية قلة وندرة التساقطات اذ تتميز
                      بمناخ جاف وقاحل: تكون فيه كميات الأمطار أقل من 200 مم
                    </p>
                  </Popup>
                </Circle>
              ))
            )}

          {activeLayers.temperatureJuly &&
            temperatureData.map((temp, i) => (
              <TemperatureBar
                key={`july-${i}`}
                position={temp.position}
                julyTemp={temp.julyTemp}
                januaryTemp={temp.januaryTemp}
                city={temp.city}
                showJuly={true}
                showJanuary={false}
              />
            ))}

          {activeLayers.temperatureJanuary &&
            temperatureData.map((temp, i) => (
              <TemperatureBar
                key={`jan-${i}`}
                position={temp.position}
                julyTemp={temp.julyTemp}
                januaryTemp={temp.januaryTemp}
                city={temp.city}
                showJuly={false}
                showJanuary={true}
              />
            ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default PrecipitationMap;
