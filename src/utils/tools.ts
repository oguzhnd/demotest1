import { isDate, isNull, isUndefined } from "lodash";

export const hexToRgb = (hex: string) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

export const formatDistance = (metre: number): string => {
  if (metre <= 100) {
    return "< 100m";
  } else if (metre < 1000) {
    return `${metre}m`;
  } else {
    return `${(metre / 1000).toFixed(1)}km`;
  }
};

export const getValidDate = (
  value: Date | string | number | null | undefined
): Date | null => {
  return isNull(value) || isUndefined(value)
    ? null
    : isDate(value)
    ? value
    : new Date(value);
};

export const localeDateFormat = (
  date: Date | string | number | null | undefined,
  locale = "tr-TR",
  withTime?: boolean
): string => {
  const validatedDate = getValidDate(date);

  return isUndefined(validatedDate) || isNull(validatedDate)
    ? "-"
    : validatedDate.toLocaleDateString(locale, {
        day: "2-digit",
        month: "short",
        year: "numeric",
        weekday: "short",
        hour: withTime ? "2-digit" : undefined,
        minute: withTime ? "2-digit" : undefined,
      });
};

export const localeDateRangeFormat = (
  date1: Date | string | number | null | undefined,
  date2: Date | string | number | null | undefined,
  locale = "tr-TR"
): string => {
  const validatedDate1 = getValidDate(date1);
  const validatedDate2 = getValidDate(date2);

  if (
    isUndefined(validatedDate1) ||
    isNull(validatedDate1) ||
    isUndefined(validatedDate2) ||
    isNull(validatedDate2)
  ) {
    return "";
  } else {
    let monthDiff = validatedDate1.getMonth() !== validatedDate2.getMonth();
    let yearDiff =
      validatedDate1.getFullYear() !== validatedDate2.getFullYear();

    if (yearDiff) {
      return `${validatedDate1.toLocaleDateString(locale, {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })} - ${validatedDate2.toLocaleDateString(locale, {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })}`;
    } else {
      if (monthDiff) {
        return `${validatedDate1.toLocaleDateString(locale, {
          day: "2-digit",
          month: "short",
        })} - ${validatedDate2.toLocaleDateString(locale, {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}`;
      } else {
        return `${validatedDate1.toLocaleDateString(locale, {
          day: "2-digit",
        })} - ${validatedDate2.toLocaleDateString(locale, {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}`;
      }
    }
  }
};

export const turkishEnglishConverter = (value: string) => {
  const transformations = {
    ç: "c",
    ğ: "g",
    ı: "i",
    ö: "o",
    ü: "u",
    ş: "s",
    Ç: "C",
    Ğ: "G",
    İ: "I",
    Ş: "S",
    Ü: "U",
    Ö: "O",
  };

  return value
    .split("")
    .map(
      (char) => transformations[char as keyof typeof transformations] || char
    )
    .join("");
};

export const getStartOfWeek = (date = new Date()) => {
  const day = date.getDay();
  const diff = day === 0 ? -6 : 1 - day;

  const startOfWeek = new Date(date);

  startOfWeek.setDate(date.getDate() + diff);
  startOfWeek.setHours(0, 0, 0, 0);

  return startOfWeek;
};
