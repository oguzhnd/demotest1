"use client";

import { useLocale } from "next-intl";
import React, { FC, useCallback, useEffect, useState } from "react";
import { setAcceptLanguage, setAccessToken } from "../xior";
import { useGlobalStore } from "@/store/global";
import { Center, Loader } from "@mantine/core";
import Navigate from "@/components/Navigate";
import { usePathname } from "next/navigation";
import Maintenance from "@/app/[locale]/maintenance/page";

const AppGuardProvider: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const locale = useLocale();

  const { isAuthenticated, token, makeSignin } = useGlobalStore();

  const pathname = usePathname();

  const [initialized, setInitialized] = useState(false);

  const handleLogin = useCallback(async () => {
    try {
      await makeSignin({
        agentKey: process.env.NEXT_PUBLIC_AGENT_KEY || "",
        username: process.env.NEXT_PUBLIC_USERNAME || "",
        password: process.env.NEXT_PUBLIC_PASSWORD || "",
      });
    } finally {
      setInitialized(true);
    }
  }, [makeSignin, process.env]);

  useEffect(() => {
    setAcceptLanguage(locale);
  }, [locale]);

  useEffect(() => {
    handleLogin();
  }, [token]);

  return initialized ? (
    isAuthenticated ? (
      children
    ) : (
      <Maintenance />
    )
  ) : (
    <Center h="100vh">
      <Loader />
    </Center>
  );
};

export default AppGuardProvider;
