class Utils {
  toFirstUpperCase(aString: string) {
    return (aString.slice(0,1).toUpperCase() + aString.slice(1).toLowerCase());
  }
}

export let utils = new Utils();
