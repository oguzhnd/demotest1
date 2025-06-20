"use client";

import { Anchor, createTheme, Select } from "@mantine/core";

import classes from "./Global.module.css";

export const theme = createTheme({
  fontFamily: "Geist",

  components: {
    Anchor: {
      defaultProps: {
        td: "none",
      },
    },
    Button: {
      defaultProps: {
        fw: 500
      },
      classNames: {
        root: classes.buttonRoot,
        section: classes.buttonSection,
      },
    },
    Radio: {
      classNames: {
        label: classes.radioLabel
      }
    },
    Checkbox: {
      classNames: {
        label: classes.checkboxLabel
      }
    },
    Menu: {
      defaultProps: {
        offset: 6,
        transitionProps: {
          transition: "pop-top-left",
        },
      },
    },
    Popover: {
      defaultProps: {
        offset: 6,
        transitionProps: {
          transition: "pop-top-left",
        },
      },
    },
    Select: {
      defaultProps: {
        checkIconPosition: "right"
      }
    },
    Drawer: {
      defaultProps: {
        position: "right"
      }
    },
    List: {
      classNames: {
        item: classes.listItem
      }
    },
    Loader: {
      defaultProps: {
        type: "dots"
      }
    }
  },
});
