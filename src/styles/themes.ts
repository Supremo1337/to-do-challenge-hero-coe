type ColorTheme = {
  white: {
    white_300: string;
    white_200: string;
    white_100: string;
  };
  purple: {
    purple_900: string;
    purple_300: string;
  };
  gray: {
    gray_700: string;
    gray_300: string;
  };
  black: string;
  red: string;
  green: string;
  yellow: string;
};

type FontTheme = {
  K2D: string;
  libre_Franklin: Record<string, string>;
};

type Theme = {
  colors: ColorTheme;
  fonts: FontTheme;
};

export const theme: Theme = {
  colors: {
    white: {
      white_300: "#F2F2F2",
      white_200: "#F1F0FF",
      white_100: "#FFFFFF",
    },
    purple: {
      purple_900: "#48409E",
      purple_300: "#BFB9FF",
    },
    gray: {
      gray_700: "#6F6F6F",
      gray_300: "#C4C4C4",
    },
    black: "#000000D9",
    red: "#FF7979",
    green: "#2BA700",
    yellow: "#FFBA53",
  },
  fonts: {
    K2D: "700 36px 'K2D'",
    libre_Franklin: {
      title_1: "700 20px 'Libre Franklin', sans-serif;",
      title_2: "600 26px 'Libre Franklin', sans-serif;",
      title_3: "600 20px 'Libre Franklin', sans-serif;",
      title_4: "600 14px 'Libre Franklin', sans-serif;",
      title_5: "600 12px 'Libre Franklin', sans-serif;",
      title_6: "500 18px 'Libre Franklin', sans-serif;",
      title_7: "500 14px 'Libre Franklin', sans-serif;",
      title_8: "400 20px 'Libre Franklin', sans-serif;",
      title_9: "400 11px 'Libre Franklin', sans-serif;",
    },
  },
};
