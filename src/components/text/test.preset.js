import { Colors } from "react-native/Libraries/NewAppScreen";
import { colors } from "../../theme/colors";
import { typography } from "../../theme/typography";

const BASE = {
    fontFamily: typography.primary,
    fontSize: 15,
    color: Colors.black,
}

const BOLD = {
    fontSize: 15,
    color: colors.black,
    fontFamily: typography.primary,
}

export const presets = {
    default: BASE,
    bold: BOLD,
    h1: {
        ...BOLD,
        fontSize: 56,
    },
    h2: {
        ...BOLD,
        fontSize: 40,
    },
    h3: {
        ...BOLD,
        fontSize: 36,
    },
    h4: {
        ...BOLD,
        fontSize: 28,
    },
    h5: {
        ...BOLD,
        fontSize: 24,
    },
    h6: {
        ...BOLD,
        fontSize: 18,
    },
    overline: {
        fontFamily: typography.regualr,
        fontSize: 14,
    },
    subtitle: {
        ...BOLD,
        fontSize: 12,
    },
    title: {
        ...BOLD,
        fontSize: 14,
    }
};
