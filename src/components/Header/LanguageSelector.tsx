import { Button, Image, Menu } from "@mantine/core";
import React, { useMemo } from "react";
import { IconCheck, IconChevronDown } from "@tabler/icons-react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

const langs = [
  {
    code: "tr",
    label: "Turkish",
    flag: "tr",
  },
  {
    code: "en",
    label: "English",
    flag: "us",
  },
];

const LanguageSelector = () => {
  const t = useTranslations();
  const locale = useLocale();

  const pathname = usePathname();
  const { push } = useRouter();

  const selectedLang = useMemo(
    () => langs.find((e) => e.code === locale),
    [locale]
  );

  return (
    <Menu width={160}>
      <Menu.Target>
        <Button
          size="compact-sm"
          variant="transparent"
          color="dark"
          fw={500}
          leftSection={
            <Image
              src={`https://flagcdn.com/${selectedLang?.flag}.svg`}
              w={20}
              h={14}
              radius="sm"
            />
          }
          rightSection={<IconChevronDown size={14} />}
          styles={{
            section: {
              margin: 0,
            },
            label: {
              marginLeft: 8,
              marginRight: 4,
            },
          }}
        >
          {selectedLang?.code.toLocaleUpperCase(locale)}
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        {langs.map((lang, i) => (
          <Menu.Item
            key={`lang-${i}`}
            leftSection={
              <Image
                src={`https://flagcdn.com/${lang.flag}.svg`}
                w={22}
                h={16}
                radius="sm"
              />
            }
            rightSection={lang.code === locale && <IconCheck size={14} />}
            onClick={() => push(pathname, { locale: lang.code })}
          >
            {t(lang.label)}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
};

export default LanguageSelector;
