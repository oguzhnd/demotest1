"use client";

import {
  Container,
  Divider,
  Group,
  ScrollArea,
  Stack,
  Tabs,
} from "@mantine/core";
import {
  IconLogout,
  IconLuggage,
  IconUser,
  IconUsers,
} from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import React, { FC, useEffect, useState } from "react";

import classes from "@/components/AccountPageElements/Account.module.css";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useGlobalStore } from "@/store/global";
import { useMediaQuery } from "@mantine/hooks";

const AccountLayout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const t = useTranslations();

  const { makeSignout } = useGlobalStore();

  const matchesSm = useMediaQuery("(max-width: 48em)");

  const pathname = usePathname();
  const { push } = useRouter();

  const [activeTab, setActiveTab] = useState<string | null>(null);

  useEffect(() => {
    const sp = pathname.split("/");
    setActiveTab(sp[2] ? sp[2] : "profile");
  }, [pathname]);

  const Parent = matchesSm ? Group : Stack;

  return (
    <Container size="xl" w="100%" py={20}>
      <Tabs
        value={activeTab}
        onChange={(value) => {
          if (value === "signout") {
            makeSignout();
            push("/");
          } else {
            push(value === "profile" ? `/account` : `/account/${value}`);
          }
        }}
        variant="pills"
        orientation={matchesSm ? "horizontal" : "vertical"}
        classNames={{
          tab: classes.tab,
          tabLabel: classes.tabLabel,
        }}
      >
        <ScrollArea miw={matchesSm ? undefined : 200} offsetScrollbars scrollbarSize={7}>
          <Tabs.List w={matchesSm ? undefined : 200}>
            <Parent wrap="nowrap" gap="xs">
              <Tabs.Tab
                w={matchesSm ? "auto" : 200}
                value="profile"
                leftSection={<IconUser size={20} />}
              >
                {t("My Profile")}
              </Tabs.Tab>
              <Tabs.Tab
                w={matchesSm ? "auto" : 200}
                value="travels"
                leftSection={<IconLuggage size={20} />}
              >
                {t("My Travels")}
              </Tabs.Tab>
              <Tabs.Tab
                w={matchesSm ? "auto" : 200}
                value="passengers"
                leftSection={<IconUsers size={20} />}
              >
                {t("My Passengers")}
              </Tabs.Tab>
              <Divider />

              <Tabs.Tab
                value="signout"
                leftSection={<IconLogout size={20} />}
                c="red"
              >
                {t("Sign Out")}
              </Tabs.Tab>
            </Parent>
          </Tabs.List>
        </ScrollArea>
        <Divider orientation="vertical" ml="xs" mr="lg" />

        <Tabs.Panel value={activeTab || "loading"}>{children}</Tabs.Panel>
      </Tabs>
    </Container>
  );
};

export default AccountLayout;
