"use client"

import { DatesProvider } from "@mantine/dates";
import { useLocale } from "next-intl";
import React, { FC } from "react";

import 'dayjs/locale/tr';
import 'dayjs/locale/en';

const CustomDatesProvider: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const locale = useLocale();

  return (
    <DatesProvider settings={{ locale }}>
      {children}
    </DatesProvider>
  );
};

export default CustomDatesProvider;
