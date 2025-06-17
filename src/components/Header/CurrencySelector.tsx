import { Button, Image, Menu } from "@mantine/core";
import React, { useMemo } from "react";
import {
  IconCheck,
  IconChevronDown,
  IconCurrencyDollar,
  IconCurrencyEuro,
  IconCurrencyLira,
} from "@tabler/icons-react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useGlobalStore } from "@/store/global";

const currencies = [
  {
    code: "TRY",
    label: "TRY",
    symbol: "₺",
    icon: IconCurrencyLira,
  },
  {
    code: "USD",
    label: "USD",
    symbol: "$",
    icon: IconCurrencyDollar,
  },
  {
    code: "EUR",
    label: "EUR",
    symbol: "€",
    icon: IconCurrencyEuro,
  },
];

const CurrencySelector = () => {
  const t = useTranslations();
  const locale = useLocale();

  const { currency, setCurrency } = useGlobalStore();

  const selectedCurrency = useMemo(
    () => currencies.find((e) => currency === e.code),
    [currency]
  );

  const Icon = selectedCurrency?.icon;

  return (
    <Menu width={130}>
      <Menu.Target>
        <Button
          size="compact-sm"
          variant="transparent"
          color="dark"
          fw={500}
          leftSection={Icon && <Icon size={16} />}
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
          {selectedCurrency?.label}
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        {currencies.map(({ icon: Icon, code, label }, i) => (
          <Menu.Item
            key={`lang-${i}`}
            leftSection={<Icon size={16} />}
            rightSection={currency === code && <IconCheck size={14} />}
            onClick={() => setCurrency(code)}
          >
            {label}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
};

export default CurrencySelector;
