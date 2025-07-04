import { useDrawerManager } from "@/store/managers/drawer";
import { useModalManager } from "@/store/managers/modal";
import {
  Anchor,
  Button,
  Divider,
  Drawer,
  Group,
  Image,
  Stack,
  Text,
} from "@mantine/core";
import { IconFileDescription, IconUser } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import React, { useCallback } from "react";
import { navLinks } from "../NavLinks";
import { useRouter } from "@/i18n/navigation";
import LanguageSelector from "../LanguageSelector";
import CurrencySelector from "../CurrencySelector";
import HelpMenu from "../HelpMenu";
import { useMediaQuery } from "@mantine/hooks";

const MobileDrawer = () => {
  const t = useTranslations();

  const { drawers, closeDrawer } = useDrawerManager();
  const { openModal } = useModalManager();

  const { push } = useRouter();

  const matchesSm = useMediaQuery("(max-width: 48em)");

  const handleClose = useCallback(() => {
    closeDrawer("mobileDrawer");
  }, []);

  return (
    <Drawer
      opened={drawers.mobileDrawer.opened}
      onClose={handleClose}
      position="left"
      size="sm"
      title={
        <Anchor c="dark" size="xl" fw={600}>
          <Image src="/ntt_logo_dark.png" h={matchesSm ? 40 : 48} w="auto" />
        </Anchor>
      }
    >
      <Stack gap={4}>
        <Button
          variant="light"
          size="sm"
          fw={400}
          leftSection={<IconUser size={16} />}
          onClick={() => openModal("accountModal")}
        >
          {t("My Account")}
        </Button>
        <Button
          variant="light"
          size="sm"
          fw={400}
          leftSection={<IconFileDescription size={16} />}
          onClick={() => openModal("queryTransaction")}
        >
          {t("My Reservations")}
        </Button>
        <Divider my="xs" />
        {navLinks.map((navLink, i) => (
          <Button
            key={`navLink-${i}`}
            color="dark"
            variant="light"
            size="sm"
            fw={500}
            onClick={() => {
              handleClose();
              push(navLink.path);
            }}
          >
            {t(navLink.label)}
          </Button>
        ))}
        <Divider my="xs" />
        <Group gap={4} justify="center">
          <LanguageSelector />
          <CurrencySelector />
          <HelpMenu />
        </Group>
      </Stack>
    </Drawer>
  );
};

export default MobileDrawer;
