import { useDrawerManager } from "@/store/managers/drawer";
import { Drawer, Stack } from "@mantine/core";
import React from "react";

const MobileHeader = () => {
  const { drawers, closeDrawer } = useDrawerManager();

  return (
    <Drawer
      opened={drawers.mobileHeader.opened}
      onClose={() => closeDrawer("mobileHeader")}
    >
      <Stack>
        
      </Stack>
    </Drawer>
  );
};

export default MobileHeader;
