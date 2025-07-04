import { isTcIdentity } from "@/utils/tools";
import {
  Button,
  Checkbox,
  Divider,
  Grid,
  Group,
  Input,
  Paper,
  Select,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { IconInfoCircle } from "@tabler/icons-react";
import moment from "moment";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { IMaskInput } from "react-imask";

const DriverInformations = () => {
  const t = useTranslations();

  const form = useForm({
    validateInputOnBlur: true,

    initialValues: {
      name: "",
      surname: "",
      birthDate: null,
      identityInformation: "tcIdentity",
      identityNumber: "",
    },
    validate: {
      identityNumber: (v, r) =>
        r.identityInformation === "tcIdentity"
          ? isTcIdentity(v)
            ? null
            : true
          : null,
    },
  });

  return (
    <Stack>
      <Paper withBorder p="md">
        <Stack>
          <Group>
            <Text size="sm" fw={500}>
              {t("Driver Informations")}
            </Text>
          </Group>
          <Grid gutter="xs">
            <Grid.Col
              span={{
                base: 12,
                md: 3,
              }}
            >
              <TextInput label={t("Name")} {...form.getInputProps("name")} />
            </Grid.Col>
            <Grid.Col
              span={{
                base: 12,
                md: 3,
              }}
            >
              <TextInput
                label={t("Surname")}
                {...form.getInputProps("surname")}
              />
            </Grid.Col>
            <Grid.Col
              span={{
                base: 12,
                md: 2,
              }}
            >
              <DatePickerInput
                label={t("Birth Date")}
                maxDate={moment(new Date()).subtract(18, "y").toDate()}
                {...form.getInputProps("birthDate")}
              />
            </Grid.Col>
            <Grid.Col
              span={{
                base: 12,
                md: 4,
              }}
            >
              <Group wrap="nowrap" align="flex-end" gap={4}>
                <Select
                  w={140}
                  {...form.getInputProps("identityInformation")}
                  data={[
                    {
                      value: "tcIdentity",
                      label: t("TC Identity"),
                    },
                    {
                      value: "passport",
                      label: t("Passport"),
                    },
                  ]}
                  label={t("Identity Information")}
                />
                <TextInput {...form.getInputProps("identityNumber")} />
              </Group>
            </Grid.Col>
          </Grid>
        </Stack>
      </Paper>
      {form.getValues().identityInformation === "tcIdentity" && (
        <Paper withBorder p="md" bg="green.0">
          <Stack>
            <Text size="sm" fw={500}>
              {t("Rental Evaluation Analysis")}
            </Text>
            <Grid gutter="xs">
              <Grid.Col
                span={{
                  base: 12,
                  md: 3,
                }}
              >
                <TextInput
                  label={t("Identity Information")}
                  {...form.getInputProps("identityNumber")}
                />
              </Grid.Col>
              <Grid.Col
                span={{
                  base: 12,
                  md: 3,
                }}
              >
                <DatePickerInput
                  label={t("Birth Date")}
                  maxDate={moment(new Date()).subtract(18, "y").toDate()}
                  {...form.getInputProps("birthDate")}
                />
              </Grid.Col>
              <Grid.Col
                span={{
                  base: 12,
                  md: 3,
                }}
              >
                <DatePickerInput label={t("Driver's License Issuance Date")} maxDate={new Date()} />
              </Grid.Col>
            </Grid>
            <Text size="sm" c="gray">
              Araç Kiralama Değerlendirme Analizi, (Sadece Avis/Budget
              firmalarına özel) KKB Kredi Kayıt Bürosu A.Ş üzerinden T.C. Kimlik
              numaranız ve T.C. Bankalarında kayıtlı olan GSM numaranız ile
              yapılmaktadır. Sorgulamada bu bilgiler alındıktan sonra T.C.
              bankalarında kayıtlı olan GSM numaranıza gönderilen mesajı
              onaylamanız gerekmektedir. İşbu sorgunun bilginiz ve açık rızanız
              dahilinde yapıldığını ve
              https://www.kkb.com.tr/gizlilik-politikasi adresindeki
              bilgilendirmeyi okuyup anladığınızı kabul ve beyan etmektesiniz.
              KKB tarafından işbu sorgulama neticesinde işlenen üye bilgilerinin
              gizliliğini sağlanması hususunda Yolcu360 Bilişim A.Ş. `&apos;nin
              herhangi bir sorumluluğu bulunmamaktadır. Bu bölümdeki Analiz
              süreci Yolcu360 Bilişim A.Ş.`&apos;nin inisiyatifinde
              hazırlanmamış/ zorunlu tutulmamış olup Analiz sürecinde işlenecek
              kişisel verilerinize ilişkin işleme amaç, yöntem ve hukuki
              sebepleri Yolcu360 tarafından belirlenmediği gibi bu bölümde
              toplanan veriler de Yolcu360 nezdinde saklanmayacaktır.
            </Text>
          </Stack>
        </Paper>
      )}
    </Stack>
  );
};

export default DriverInformations;
