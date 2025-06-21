"use client";

import { useLocale } from "next-intl";
import React, { FC, useEffect } from "react";
import { setAcceptLanguage, setAccessToken } from "../xior";
import { useGlobalStore } from "@/store/global";

const AppGuardProvider: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const locale = useLocale();

  const { isLogin, token } = useGlobalStore();

  useEffect(() => {
    setAcceptLanguage(locale);
  }, [locale]);

  useEffect(() => {
    if (isLogin && token) {
      setAccessToken(token);
    }
  }, [token]);

  return children;
};

export default AppGuardProvider;
