import { Carousel } from "@mantine/carousel";
import {
  Button,
  Container,
  Grid,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import { useTranslations } from "use-intl";

const blogs = [
  {
    image:
      "https://www.hotelchick.com/upload/Blog/ace7aad1d4449195409b0991b4a0907d.jpg",
    title: "Yurt Dışına İlk Defa Çıkanlar İçin Öneriler",
    content:
      "Yurt dışına çıkmak heyecan verici bir deneyim olabilir, ancak ilk kez uluslararası seyahate çıkanlar için bazı hazırlıklar yapmanız gerekebilir. İşte yurt dışına ilk defa çıkanlar için eğlenceli ve bilgilendirici öneriler:",
  },
  {
    image:
      "https://www.hotelchick.com/upload/Blog/35ca9cb607153262f079646e208706c0.jpg",
    title: "Valiz Hazırlarken Mutlaka Dikkat Edilmesi Gerekenler",
    content:
      "Valiz hazırlığı, bir seyahatin en heyecanlı ama aynı zamanda en stresli kısımlarından biridir. Yanınıza neler almanız gerektiğini planlamak ve eşyalarınızı düzenli bir şekilde yerleştirmek, tatilinizin daha rahat ve keyifli geçmesini sağlar. İşte valiz hazırlarken dikkat etmeniz gereken bazı önemli noktalar:",
  },
  {
    image:
      "https://www.hotelchick.com/upload/Blog/9fb15dc344d62325f6657adc0a6cebc3.jpg",
    title:
      "Dünyanın En Ünlü Alışveriş Merkezleri: Alışverişin Kalbinin Attığı Yerler",
    content:
      "Alışveriş merkezleri, sadece alışveriş yapmak için değil, aynı zamanda sosyal hayatın bir parçası haline gelen, kültürel ve eğlence aktiviteleri sunan mekânlar olarak karşımıza çıkıyor. Dünyanın dört bir yanında, mimarisiyle, büyüklüğüyle ve sunduğu imkanlarla dikkat çeken bazı alışveriş merkezleri var ki, bu yerler adeta alışveriş dünyasının kalbinin attığı noktalar olarak biliniyor. İşte, alışveriş tutkunlarının mutlaka görmesi gereken dünyanın en ünlü alışveriş merkezleri.",
  },
];

const Blogs = () => {
  const t = useTranslations();

  const matchesSm = useMediaQuery("(max-width: 48em)");

  return (
    <Container size="xl" w="100%" py={20}>
      <Stack gap={0}>
        <Text size="xl" fw={500}>
          {t("Blog")}
        </Text>
        <Text size="sm" c="gray.7">
          {t(
            "The world is huge! Don't know where to go? Check out recommendations on destinations, the best time to travel, and what to do there"
          )}
        </Text>

        <Grid mt="lg">
          <Grid.Col
            span={{
              base: 12,
              md: 8,
            }}
          >
            <Carousel withIndicators height={316}>
              {blogs.map((blog, i) => (
                <Carousel.Slide key={`blog-${i}`}>
                  <Paper
                    bg="blue.5"
                    h="100%"
                    radius="lg"
                    withBorder
                    style={{ overflow: "hidden" }}
                  >
                    <SimpleGrid h="100%" cols={2} spacing={0}>
                      <Image h="100%" w="100%" src={blog.image} />
                      <Stack
                        gap="sm"
                        justify="space-between"
                        align="flex-start"
                        px={36}
                        py={60}
                      >
                        <Stack gap={4}>
                          <Text
                            size="xl"
                            c="white"
                            fw={500}
                            lineClamp={matchesSm ? 2 : undefined}
                          >
                            {blog.title}
                          </Text>
                          <Text c="gray.2" lineClamp={2}>
                            {blog.content}
                          </Text>
                        </Stack>
                        <Button
                          variant="white"
                          size="compact-lg"
                          radius="xl"
                          px="md"
                        >
                          {t("Review")}
                        </Button>
                      </Stack>
                    </SimpleGrid>
                  </Paper>
                </Carousel.Slide>
              ))}
            </Carousel>
          </Grid.Col>
          <Grid.Col
            span={{
              base: 12,
              md: 4,
            }}
          >
            <SimpleGrid
              cols={{
                base: 1,
                sm: 2,
                md: 1,
              }}
            >
              <Paper
                h={150}
                withBorder
                radius="lg"
                style={{ overflow: "hidden" }}
              >
                <SimpleGrid h="100%" cols={2} spacing={0}>
                  <Image h="100%" w="100%" src={blogs[0].image} />
                  <Stack
                    gap={0}
                    justify="space-between"
                    align="flex-start"
                    px="sm"
                    py="md"
                  >
                    <Stack gap={4}>
                      <Text size="sm" fw={500}>
                        {blogs[0].title}
                      </Text>
                      <Text size="xs" c="gray.7" lineClamp={2}>
                        {blogs[0].content}
                      </Text>
                    </Stack>
                    <Button size="compact-xs" radius="xl" px="md" h={26}>
                      {t("Review")}
                    </Button>
                  </Stack>
                </SimpleGrid>
              </Paper>
              <Paper
                h={150}
                withBorder
                radius="lg"
                style={{ overflow: "hidden" }}
              >
                <SimpleGrid h="100%" cols={2} spacing={0}>
                  <Image h="100%" w="100%" src={blogs[1].image} />
                  <Stack
                    gap={0}
                    justify="space-between"
                    align="flex-start"
                    px="sm"
                    py="md"
                  >
                    <Stack gap={4}>
                      <Text size="sm" fw={500}>
                        {blogs[1].title}
                      </Text>
                      <Text size="xs" c="gray.7" lineClamp={2}>
                        {blogs[1].content}
                      </Text>
                    </Stack>
                    <Button size="compact-xs" radius="xl" px="md" h={26}>
                      {t("Review")}
                    </Button>
                  </Stack>
                </SimpleGrid>
              </Paper>
            </SimpleGrid>
          </Grid.Col>
        </Grid>
      </Stack>
    </Container>
  );
};

export default Blogs;
