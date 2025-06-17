"use client"

import React, { FC } from "react";
import { ModalsProvider } from "@mantine/modals";

const CustomModalsProvider: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <ModalsProvider>{children}</ModalsProvider>;
};

export default CustomModalsProvider;
