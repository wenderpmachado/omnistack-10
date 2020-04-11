export class StringUtils {
  public static asArray(pString: string) {
    return pString.split(',').map(tech => tech.trim());
  }
}
