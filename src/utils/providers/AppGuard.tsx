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

  const { isLogin, token, makeSignin } = useGlobalStore();

  const [initialized, setInitialized] = useState(false);

  const handleLogin = useCallback(async () => {
    try {
      await makeSignin({
        agentKey: "I8IZ01IP",
        username: "TEST",
        password: "b4c7j%3h9YFZ",
      });
    } finally {
      setInitialized(true);
    }
  }, [makeSignin]);

  useEffect(() => {
    setAcceptLanguage(locale);
  }, [locale]);

  useEffect(() => {
    handleLogin();
  }, [token]);

  return initialized ? (
    children
  ) : (
    <Center h="100vh">
      <Loader />
    </Center>
  );
};

export default AppGuardProvider;
