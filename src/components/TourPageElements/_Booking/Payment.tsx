import { Link } from "@/i18n/navigation";
import { useFlightStore } from "@/store/products/flight";
import {
  Anchor,
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
import { FC, useMemo, useState } from "react";
import { IMaskInput } from "react-imask";

const Payment: FC<{
  onSubmit?: () => void;
}> = ({ onSubmit }) => {
  const t = useTranslations();
  const locale = useLocale();

  const [saveCard, setSaveCard] = useState<boolean>(false);

  const [clarification, setClarification] = useState(false);
  const [explicitConsent, setExplicitConsent] = useState(false);

  const { bookingFlight, returnFlight } = useFlightStore();

  const totalPrice = useMemo(() => {
    return (
      (bookingFlight?.AlternativePrices[bookingFlight.packetIndex].totalPrice ||
        0) +
      (returnFlight?.AlternativePrices[returnFlight.packetIndex].totalPrice ||
        0)
    );
  }, [bookingFlight, returnFlight]);

  return (
    <Paper withBorder p="md">
      <Stack>
        <Group>
          <Text size="sm" fw={500}>
            {t("Payment")}
          </Text>
        </Group>
        <Grid gutter="xs">
          <Grid.Col
            span={{
              base: 12,
              xs: 6,
              sm: 3,
            }}
          >
            <Input.Wrapper label={t("Card Number")}>
              <Input component={IMaskInput} mask="0000 0000 0000 0000" />
            </Input.Wrapper>
          </Grid.Col>
          <Grid.Col
            span={{
              base: 12,
              xs: 4,
              sm: 3,
            }}
          >
            <DatePickerInput label={t("Expiration Date")} minDate={new Date()} />
          </Grid.Col>
          <Grid.Col
            span={{
              base: 12,
              xs: 2,
              sm: 2,
            }}
          >
            <Input.Wrapper label={t("CVV")}>
              <Input component={IMaskInput} mask="0000" />
            </Input.Wrapper>
          </Grid.Col>
        </Grid>
        {/* <Checkbox
          checked={saveCard}
          onChange={(e) => setSaveCard(e.currentTarget.checked)}
          label={t(
            "I consent to the registration of my shopping profile under the Masterpass Terms of Use"
          )}
        />
        {saveCard && (
          <Group>
            <TextInput label={t("Name The Card")} />
          </Group>
        )} */}

        <Stack gap="xs">
          <Checkbox
            label={t.rich("I approve the Clarification Text", {
              link: (text) => (
                <Link href="/clarification" style={{ textDecoration: "none" }}>
                  {text}
                </Link>
              ),
            })}
            checked={clarification}
            onChange={(e) => setClarification(e.currentTarget.checked)}
          />
          <Checkbox
            label={t.rich("I approve the text of Explicit Consent", {
              link: (text) => (
                <Link
                  href="/explicitConsent"
                  style={{ textDecoration: "none" }}
                >
                  {text}
                </Link>
              ),
            })}
            checked={explicitConsent}
            onChange={(e) => setExplicitConsent(e.currentTarget.checked)}
          />
        </Stack>

        <Group>
          <Button
            color="green"
            onClick={onSubmit}
            disabled={!clarification || !explicitConsent}
          >
            {t("Make Payment")}
          </Button>
          <Stack gap={0}>
            <Text size="xs">{t("Total Price")}</Text>
            <Text size="lg" fw={600}>
              {totalPrice.toLocaleString(locale)} TRY
            </Text>
          </Stack>
        </Group>
        <Text size="sm">
          Kişisel verileriniz Aydınlatma Metni kapsamında işleniyor. Butona
          tıkladığınızda Enuygun Kullanım Koşulları’nı kabul ettiğinizi
          onaylamış olursunuz.
        </Text>
        <Group>
          <Image
            w={65}
            h={40}
            src="https://cdn.enuygun.com/otobus-bileti/build/images/payment-troy.10fa69f0.png"
          />
          <Image
            w={65}
            h={40}
            src="https://cdn.enuygun.com/otobus-bileti/build/images/payment-mastercard.de04295d.png"
          />
          <Image
            w={65}
            h={40}
            src="https://cdn.enuygun.com/otobus-bileti/build/images/payment-digicert.400452eb.png"
          />
          <Image
            w={65}
            h={40}
            src="https://cdn.enuygun.com/otobus-bileti/build/images/payment-safe-trade.7697087c.png"
          />
          <Image
            w={65}
            h={40}
            src="https://cdn.enuygun.com/otobus-bileti/build/images/payment-visa.d9a751f1.png"
          />
        </Group>
        <Text size="sm">
          Tüm ödeme işlemleriniz, dünyanın önde gelen güvenlik sertifikası
          şirketi DigiCert koruması altındadır.
        </Text>
      </Stack>
    </Paper>
  );
};

export default Payment;
