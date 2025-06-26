import {
  ActionIcon,
  Anchor,
  Button,
  Container,
  Divider,
  Group,
  Image,
  Stack,
} from "@mantine/core";
import React from "react";
import NavLinks from "./NavLinks";
import LanguageSelector from "./LanguageSelector";
import CurrencySelector from "./CurrencySelector";
import { useTranslations } from "next-intl";
import { useDrawerManager } from "@/store/managers/drawer";
import {
  IconFileDescription,
  IconMenu,
  IconMenu2,
  IconUser,
} from "@tabler/icons-react";

import classes from "./Header.module.css";
import HelpMenu from "./HelpMenu";
import { useModalManager } from "@/store/managers/modal";
import { useMediaQuery } from "@mantine/hooks";
import MobileDrawer from "./Drawer";
import { useGlobalStore } from "@/store/global";
import { Link, useRouter } from "@/i18n/navigation";
import QueryTransactionModal from "./QueryTransaction";

const Header = () => {
  const t = useTranslations();

  const { push } = useRouter();

  const { isLogin } = useGlobalStore();

  const { openDrawer } = useDrawerManager();
  const { openModal } = useModalManager();

  const matchesSm = useMediaQuery("(max-width: 48em)");

  return (
    <Container size="xl" w="100%" h="100%">
      <Group h="100%" justify="space-between">
        <Link href="/">
          <Image src="/ntt_logo_dark.png" h={matchesSm ? 40 : 48} />
        </Link>

        {!matchesSm && <NavLinks />}

        <MobileDrawer />
        <ActionIcon
          size="lg"
          hiddenFrom="md"
          variant="subtle"
          color="dark"
          onClick={() => openDrawer("mobileDrawer")}
        >
          <IconMenu2 size={20} />
        </ActionIcon>

        <QueryTransactionModal />

        <Stack visibleFrom="md" h="100%" gap={6} align="center">
          <Group gap={0} wrap="nowrap">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.8592 22.5C14.4956 6.9 5.12189 1 0.980469 0H40.9805V40H35.5259C31.8896 40 23.2229 38.1 18.8592 22.5Z"
                fill="#E7F5FE"
              />
            </svg>

            <Group h={40} bg="blue.0" gap={0}>
              <Button
                className={classes.headerRightButton}
                variant="transparent"
                size="compact-sm"
                fw={400}
                leftSection={<IconUser size={16} />}
                onClick={() =>
                  isLogin ? push("/account") : openModal("accountModal")
                }
              >
                {t("My Account")}
              </Button>
              <Button
                className={classes.headerRightButton}
                variant="transparent"
                size="compact-sm"
                fw={400}
                leftSection={<IconFileDescription size={16} />}
                onClick={() => openModal("queryTransaction")}
              >
                {t(isLogin ? "My Reservations" : "Query Transaction")}
              </Button>
            </Group>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.1212 22.5C26.4849 6.9 35.8586 1 40 0H0V40H5.45455C9.09088 40 17.7576 38.1 22.1212 22.5Z"
                fill="#E7F5FE"
              />
            </svg>
          </Group>

          <Group gap={4}>
            <LanguageSelector />
            <CurrencySelector />
            <HelpMenu />
          </Group>
        </Stack>

        {/* <ActionIcon
          color="dark"
          variant="subtle"
          hiddenFrom="md"
          onClick={() => openDrawer("mobileHeader")}
        >
          <IconMenu2 size={20} />
        </ActionIcon>
        <Group gap={4} visibleFrom="md">
          <LanguageSelector />
          <CurrencySelector />
          <Divider orientation="vertical" variant="dashed" />
          <Button color="dark" size="compact-sm" variant="subtle">
            {t("Sign In")}
          </Button>
          <Button color="dark" size="compact-sm" variant="subtle">
            {t("Sign Up")}
          </Button>
        </Group> */}
      </Group>
    </Container>
  );
};

export default Header;
