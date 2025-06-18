import {
  Button,
  Checkbox,
  Grid,
  Group,
  Image,
  Input,
  Paper,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { IMaskInput } from "react-imask";

const Payment = () => {
  const t = useTranslations();
  const locale = useLocale();

  const [saveCard, setSaveCard] = useState<boolean>(false);

  return (
    <Paper withBorder p="md">
      <Stack>
        <Group>
          <Text size="sm" fw={500}>
            {t("Payment")}
          </Text>
        </Group>
        <Grid gutter="xs">
          <Grid.Col span={3}>
            <Input.Wrapper label={t("Card Number")}>
              <Input component={IMaskInput} mask="0000 0000 0000 0000" />
            </Input.Wrapper>
          </Grid.Col>
          <Grid.Col span={2}>
            <DatePickerInput label={t("Expiration Date")} />
          </Grid.Col>
          <Grid.Col span={1}>
            <Input.Wrapper label={t("CVV")}>
              <Input component={IMaskInput} mask="0000" />
            </Input.Wrapper>
          </Grid.Col>
        </Grid>
        <Checkbox
          checked={saveCard}
          onChange={(e) => setSaveCard(e.currentTarget.checked)}
          label={t(
            "I consent to the registration of my shopping profile under the Masterpass Terms of Use"
          )}
        />
        {saveCard && (
          <Grid>
            <Grid.Col span={3}>
              <TextInput label={t("Name The Card")} />
            </Grid.Col>
          </Grid>
        )}
        <Group justify="space-between">
          <Stack gap={0}>
            <Text size="xs">{t("Total Price")}</Text>
            <Text size="lg" fw={600}>
              {(1706.99).toLocaleString(locale)} TRY
            </Text>
          </Stack>

          <Button color="green">{t("Make Payment")}</Button>
        </Group>
        <Text size="sm">
          Kişisel verileriniz Aydınlatma Metni kapsamında işleniyor. Butona
          tıkladığınızda Enuygun Kullanım Koşulları’nı kabul ettiğinizi
          onaylamış olursunuz.
        </Text>
        <Group>
          <Image w={65} h={40} src="https://cdn.enuygun.com/otobus-bileti/build/images/payment-troy.10fa69f0.png" />
          <Image w={65} h={40} src="https://cdn.enuygun.com/otobus-bileti/build/images/payment-mastercard.de04295d.png" />
          <Image w={65} h={40} src="https://cdn.enuygun.com/otobus-bileti/build/images/payment-digicert.400452eb.png" />
          <Image w={65} h={40} src="https://cdn.enuygun.com/otobus-bileti/build/images/payment-safe-trade.7697087c.png" />
          <Image w={65} h={40} src="https://cdn.enuygun.com/otobus-bileti/build/images/payment-visa.d9a751f1.png" />
        </Group>
        <Text size="sm">Tüm ödeme işlemleriniz, dünyanın önde gelen güvenlik sertifikası şirketi DigiCert koruması altındadır.</Text>
      </Stack>
    </Paper>
  );
};

export default Payment;
