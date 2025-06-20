"use client"

import { APIProvider } from "@vis.gl/react-google-maps";
import React, { FC } from "react";

const GoogleMapsProvider: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <APIProvider
      apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API as string}
    >
      {children}
    </APIProvider>
  );
};

export default GoogleMapsProvider;
