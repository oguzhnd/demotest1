import { useGeneralStore } from "@/store/general";
import { Button, Menu } from "@mantine/core";
import {
  IconBrandWhatsapp,
  IconChevronDown,
  IconPhone,
} from "@tabler/icons-react";
import { useLocale, useTranslations } from "next-intl";

const HelpMenu = () => {
  const t = useTranslations();
  const locale = useLocale();

  const { help } = useGeneralStore();

  return (
    <Menu width={150}>
      <Menu.Target>
        <Button
          size="compact-sm"
          variant="transparent"
          color="dark"
          fw={500}
          rightSection={<IconChevronDown size={14} />}
          styles={{
            section: {
              margin: 0,
            },
            label: {
              margin: "0px 4px",
            },
          }}
        >
          {t("Help")}
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item leftSection={<IconPhone size={16} />}>
          {help.number}
        </Menu.Item>
        <Menu.Item leftSection={<IconBrandWhatsapp size={16} />}>
          {t("Whatsapp")}
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default HelpMenu;
