"use client";

import AccountModal from "@/components/AccountModal";
import LoginWarning from "@/components/CommonElements/LoginWarning";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MobileHeader from "@/components/Header/Drawer";
import PromoBanner from "@/components/Header/PromoBanner";
import { useGeneralStore } from "@/store/general";
import { useGlobalStore } from "@/store/global";
import { setAccessToken } from "@/utils/xior";
import { ActionIcon, Affix, AppShell, Stack, Transition } from "@mantine/core";
import { useHeadroom, useWindowScroll } from "@mantine/hooks";
import { IconBrandWhatsapp, IconChevronUp } from "@tabler/icons-react";
import React, { FC, useEffect } from "react";

const MainLayout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { setHeaderPinned } = useGeneralStore();

  const [scroll, scrollTo] = useWindowScroll();

  const pinned = useHeadroom({
    fixedAt: 120,
  });

  useEffect(() => {
    setHeaderPinned(pinned);
  }, [pinned]);

  return (
    <AppShell header={{ height: 80 + 46, collapsed: !pinned, offset: false }}>
      <AppShell.Header withBorder={false}>
        <MobileHeader />
        <Stack gap={0} w="100%" h="100%">
          <PromoBanner />
          <Header />
        </Stack>
      </AppShell.Header>

      <AppShell.Main pt={126}>
        <Stack>
          {children}

          <AccountModal />

          <LoginWarning />
          <Footer />

          <Affix position={{ bottom: 20, right: 20 }}>
            <Stack gap="xs">
              <Transition transition="slide-up" mounted={scroll.y > 0}>
              {(transitionStyles) => (
                <ActionIcon
                color="dark"
                  size="xl"
                  radius="xl"
                  style={transitionStyles}
                  onClick={() => scrollTo({ y: 0 })}
                >
                  <IconChevronUp />
                </ActionIcon>
              )}
            </Transition>

            <ActionIcon size="xl" radius="xl" color="green">
              <IconBrandWhatsapp />
            </ActionIcon>
            </Stack>
          </Affix>
        </Stack>
      </AppShell.Main>
    </AppShell>
  );
};

export default MainLayout;
