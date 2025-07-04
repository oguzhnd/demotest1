"use client";

import { useLocale } from "next-intl";
import React, { FC, useCallback, useEffect, useState } from "react";
import { setAcceptLanguage, setAccessToken } from "../xior";
import { useGlobalStore } from "@/store/global";
import { Center, Loader } from "@mantine/core";

const AppGuardProvider: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const locale = useLocale();

  const { token, makeSignin } = useGlobalStore();

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
  }, [token,]);

  return initialized ? (
    children
  ) : (
    <Center h="100vh">
      <Loader />
    </Center>
  );
};

export default AppGuardProvider;
