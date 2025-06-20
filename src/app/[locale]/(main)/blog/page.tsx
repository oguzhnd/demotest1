import BlogCard from "@/components/BlogPageElements/BlogCard";
import { Container, SimpleGrid, Stack, Text } from "@mantine/core";
import { useTranslations } from "next-intl";

const Blog = () => {
  const t = useTranslations();

  return (
    <Container size="xl" w="100%" py={20}>
      <Stack>
        <Stack gap={0}>
          <Text size="xl" fw={500}>
            {t("Blog")}
          </Text>
          <Text size="sm" c="gray.7">
            {t(
              "The world is huge! Don't know where to go? Check out recommendations on destinations, the best time to travel, and what to do there"
            )}
          </Text>
        </Stack>

        <SimpleGrid
          cols={{
            base: 1,
            xs: 2,
            sm: 3,
            md: 4,
          }}
        >
          {Array(5)
            .fill("")
            .map((blog, i) => (
              <BlogCard key={`blog-${i}`} />
            ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
};

export default Blog;
