"use client"

import { useRouter } from "@/i18n/navigation";
import { Image, Paper, Stack, Text } from "@mantine/core";
import React from "react";

import classes from "../Blog.module.css";

const BlogCard = () => {
  const { push } = useRouter();

  return (
    <Paper
      withBorder
      radius="md"
      className={classes.blogCard}
      style={{ overflow: "hidden" }}
      onClick={() => push("/blog/1")}
    >
      <Stack gap={0}>
        <Image h={200} src="https://www.hotelchick.com/upload/Blog/ac0daa25c49382bc86eb109d6b0f9ee9.jpg" />

        <Stack gap="xs" p="md">
          <Text fw={600} lh={1.2}>
            Dünyanın En Dikkat Çekici 10 Mimari Yapısı
          </Text>
          <Text size="sm" c="gray">
            Dünyanın En Dikkat Çekici 10 Mimari YapısıDünya, sadece muhteşem
            manzaraları, lezzetli yemekleri ve
          </Text>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default BlogCard;
