import { useEffect, useRef } from 'react';
import useMap from '../../../hooks/use-map';
import { Icon, layerGroup, Marker } from 'leaflet';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../../consts';
import 'leaflet/dist/leaflet.css';

import type { CityT } from '../../app/app';

export type PointT = {
  id: string;
  title: string;
  lat: number;
  lng: number;
}

type MapProps = {
  city: CityT;
  points: PointT[];
  selectedPointId?: string;
  className?: string;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

export const Map = ({ city, points, selectedPointId, className }: MapProps) => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng
        });

        marker
          .setIcon(
            selectedPointId !== undefined && point.id === selectedPointId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedPointId]);

  return (
    <section
      className={`${className} map`}
      ref={mapRef}
    />
  );
};
