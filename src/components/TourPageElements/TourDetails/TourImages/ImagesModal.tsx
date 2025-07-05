import { Group, Image, Modal, Paper, ScrollArea, Stack } from "@mantine/core";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import React, { FC, useCallback, useRef, useState } from "react";

const ImagesModal: FC<{
  opened: boolean;
  setOpened: (value: boolean) => void;
  images: string[];
}> = ({ opened, setOpened, images = [] }) => {
  const [active, setActive] = useState(0);

  const viewport = useRef<HTMLDivElement>(null);

  const scrollToLeft = () =>
    viewport.current!.scrollTo({
      left: viewport.current!.scrollLeft - 400,
      behavior: "smooth",
    });
  const scrollToRight = () =>
    viewport.current!.scrollTo({
      left: viewport.current!.scrollLeft + 400,
      behavior: "smooth",
    });

  const handleClose = useCallback(() => {
    setOpened(false);
  }, []);

  return (
    <Modal size="xl" opened={opened} onClose={handleClose}>
      {images.length > 0 && (
        <Stack>
          <Image src={images[active].replace("{size}", "x500")} />
          <ScrollArea
            pos="relative"
            offsetScrollbars
            scrollbarSize={7}
            viewportRef={viewport}
          >
            <Group wrap="nowrap" gap="xs" px={42}>
              <Stack
                justify="center"
                px={8}
                h={64}
                bg="gray.1"
                style={{ cursor: "pointer", zIndex: 10 }}
                pos="absolute"
                left={0}
                top={0}
                onClick={scrollToLeft}
              >
                <IconChevronLeft size={16} />
              </Stack>
              {images.map((img, i) => (
                <Image
                  miw={96}
                  w={96}
                  h={64}
                  key={`img-${i}`}
                  src={img.replace("{size}", "x500")}
                  opacity={active === i ? 1 : 0.5}
                  style={{ cursor: "pointer" }}
                  onClick={() => setActive(i)}
                />
              ))}
              <Stack
                justify="center"
                px={8}
                h={64}
                bg="gray.1"
                style={{ cursor: "pointer", zIndex: 10 }}
                pos="absolute"
                right={0}
                top={0}
                onClick={scrollToRight}
              >
                <IconChevronRight size={16} />
              </Stack>
            </Group>
          </ScrollArea>
        </Stack>
      )}
    </Modal>
  );
};

export default ImagesModal;
