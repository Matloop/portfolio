"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

// --- CORREÇÃO DE ÍCONES DO LEAFLET NO NEXT.JS ---
// Por padrão, o Leaflet perde os ícones ao passar pelo bundler do Next.js.
// Isso aqui corrige as imagens dos marcadores.
const iconFix = () => {
  // @ts-ignore
  delete L.Icon.Default.prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  });
};

export default function Map() {
  useEffect(() => {
    iconFix();
  }, []);

  // Coordenadas (Exemplo: São Paulo, Brasil). 
  // Troque pelos números da sua cidade. Você pode pegar no Google Maps.
  const position: [number, number] = [-26.8747306, -49.0518216]; 

  return (
    <MapContainer 
      center={position} 
      zoom={13} 
      scrollWheelZoom={false} 
      className="h-full w-full rounded-xl z-0"
    >
      {/* TileLayer Escuro (Combina com o site) */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      
      <Marker position={position}>
        <Popup>
          Estou por aqui! <br /> Disponível para remoto.
        </Popup>
      </Marker>
    </MapContainer>
  );
}