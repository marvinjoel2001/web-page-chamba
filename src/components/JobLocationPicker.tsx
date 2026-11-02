'use client';
import {useEffect,useRef,useState} from 'react';
import type {Map as LeafletMap, CircleMarker} from 'leaflet';
import 'leaflet/dist/leaflet.css';

export type JobPoint={latitude:number;longitude:number};
export default function JobLocationPicker({value,onChange,disabled=false}:{value:JobPoint|null;onChange:(point:JobPoint)=>void;disabled?:boolean}) {
  const container=useRef<HTMLDivElement>(null),map=useRef<LeafletMap|null>(null),marker=useRef<CircleMarker|null>(null);
  const callback=useRef(onChange),blocked=useRef(disabled);
  const [error,setError]=useState(''),[locating,setLocating]=useState(false);
  const [ready,setReady]=useState(false);
  useEffect(()=>{callback.current=onChange;blocked.current=disabled;},[onChange,disabled]);
  useEffect(()=>{
    let alive=true;
    void import('leaflet').then(L=>{
      if(!alive||!container.current)return;
      const m=L.map(container.current,{scrollWheelZoom:false}).setView([-17.7833,-63.1821],12);
      map.current=m;
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(m);
      m.on('click',e=>{if(!blocked.current)callback.current({latitude:e.latlng.lat,longitude:e.latlng.lng});});
      m.invalidateSize();
      setReady(true);
    }).catch(()=>setError('No se pudo cargar el mapa. Usa tu ubicación o las coordenadas.'));
    return()=>{alive=false;map.current?.remove();map.current=null;marker.current=null;};
  },[]);
  useEffect(()=>{
    if(!map.current)return;
    if(!value){marker.current?.remove();marker.current=null;return;}
    let alive=true;
    void import('leaflet').then(L=>{
      if(!alive||!map.current)return;
      if(marker.current)marker.current.setLatLng([value.latitude,value.longitude]);
      else marker.current=L.circleMarker([value.latitude,value.longitude],{radius:10,color:'#fff',weight:3,fillColor:'#7c3aed',fillOpacity:1}).addTo(map.current);
      map.current.panTo([value.latitude,value.longitude]);
    });
    return()=>{alive=false;};
  },[value,ready]);
  const locate=()=>{
    if(!navigator.geolocation){setError('Tu navegador no permite consultar la ubicación. Márcala en el mapa.');return;}
    setError('');setLocating(true);
    navigator.geolocation.getCurrentPosition(p=>{onChange({latitude:p.coords.latitude,longitude:p.coords.longitude});setLocating(false);},()=>{setError('No pudimos obtener tu ubicación. Puedes marcarla en el mapa.');setLocating(false);},{enableHighAccuracy:true,timeout:15000,maximumAge:30000});
  };
  return <div className="space-y-3"><div className="flex flex-wrap items-center justify-between gap-2"><p className="text-sm font-bold">¿Dónde se hará el trabajo?</p><button type="button" onClick={locate} disabled={disabled||locating} className="btn btn-secondary !min-h-10 !px-3 !text-sm">{locating?'Buscando ubicación…':'Usar mi ubicación'}</button></div>
    <div ref={container} role="region" aria-label="Mapa para marcar la ubicación del trabajo" className="relative z-0 h-72 overflow-hidden rounded-xl border border-line"/>
    <p className="text-xs text-ink-soft">{value?'Ubicación seleccionada. Haz clic en otro punto para cambiarla.':'Haz clic en el mapa para marcar el lugar exacto.'}</p>
    <details className="text-sm"><summary className="cursor-pointer text-ink-soft">Ajustar coordenadas</summary><div className="mt-2 grid grid-cols-2 gap-3">{(['latitude','longitude'] as const).map(key=><label key={key}>{key==='latitude'?'Latitud':'Longitud'}<input type="number" step="any" min={key==='latitude'?-85:-180} max={key==='latitude'?85:180} value={value?.[key]??''} disabled={disabled} onChange={e=>{const n=Number(e.target.value);if(e.target.value&&Number.isFinite(n))onChange({...value,latitude:value?.latitude??-17.7833,longitude:value?.longitude??-63.1821,[key]:n});}} className="mt-1 w-full rounded-lg border border-line p-2"/></label>)}</div></details>
    {error&&<p role="alert" className="text-sm text-red-700">{error}</p>}
  </div>;
}
