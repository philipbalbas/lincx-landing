// example base theme from @theme-ui/presets
const heading = {
  fontFamily: "heading",
  lineHeight: "heading",
  fontWeight: "heading",
}

export const base = {
  breakpoints: ["40em", "52em", "64em", "80em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "Open Sans, sans-serif",
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    light: 300,
    body: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#0564fe",
    lightBlue: "#399cee",
    secondary: "#282c47",
    muted: "#f0f6ff",
    black: "#212121",
    gray: "#757575",
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      ...heading,
      fontSize: 5,
    },
    h2: {
      ...heading,
      fontSize: 4,
    },
    h3: {
      ...heading,
      fontSize: 3,
    },
    h4: {
      ...heading,
      fontSize: 2,
    },
    h5: {
      ...heading,
      fontSize: 1,
    },
    h6: {
      ...heading,
      fontSize: 0,
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
  },
  buttons: {
    primary: {
      color: "primary",
      bg: "muted",
      transition: "all 0.2s",
      ":hover": {
        bg: "primary",
        color: "secondary",
      },
    },
    secondary: {
      variant: "buttons.primary",
      bg: "primary",
      color: "white",
      ":hover": {
        bg: "secondary",
        color: "white",
      },
    },
    outline: {
      border: "1px solid white",
      color: "white",
      bg: "none",
      ":hover": {
        bg: "muted",
        color: "primary",
      },
      "&:first-of-type": {
        marginRight: "20px",
      },
    },
  },
  cards: {
    primary: {
      backgroundColor: "#282c47",
      color: "white",
      padding: "116px 36px 36px 36px",
      borderRadius: "13px",
    },
    inverse: {
      backgroundColor: "#238fea",
      color: "white",
      padding: "116px 36px 36px 36px",
      borderRadius: "13px",
    },
  },
  text: {
    heading: {
      fontFamily: "heading",
      fontSize: [5, null, 6],
      mb: 4,
    },
    subheading: {
      fontSize: [3, null, 4],
      mb: 3,
    },
    subheadingCaps: {
      variant: "text.subheading",
      textTransform: "uppercase",
    },
    quote: {
      fontSize: 4,
      color: "black",
      fontStyle: "italic",
    },
    label: {
      color: "black",
      letterSpacing: "1px",
      marginBottom: 2,
      fontSize: 2,
    },
    caps: {
      textTransform: "uppercase",
    },
    capsLabel: {
      variant: "text.caps",
      mb: 3,
    },
    header: {
      textAlign: "center",
      mb: 5,
    },
    body: {
      color: "gray",
      fontSize: 2,
      letterSpacing: "0.5px",
      lineHeight: 2,
    },
  },
  container: {
    // px: [2, 6],
    maxWidth: "1170px",
  },
}

export default {
  ...base,
  layout: {
    header: {
      color: "white",
      backgroundColor: "black",
    },
    footer: {
      color: "white",
      backgroundColor: "black",
    },
  },
}
