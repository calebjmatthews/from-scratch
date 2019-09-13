class Utils {
  // Formats a string to a leading uppercase, like "HELLO" => "Hello"
  toFirstUpperCase(aString: string): string {
    return (aString.slice(0,1).toUpperCase() + aString.slice(1).toLowerCase());
  }

  range(size: number, startAt: number = 0) {
    return [...Array(size).keys()].map((integer) => integer + startAt);
  }

  // Returns a maximum of two units of time, e.g. '1d 4h ' or '3m 45s ', with
  //  seconds being the smallest unit
  formatDuration(milliseconds: number, units: number = 0): string {
    if (units < 2) {
      if (milliseconds > (1000 * 60 * 60 * 24)) {
        let days: number = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
        units++;
        return ((days + 'd ' +
          this.formatDuration(milliseconds % (1000 * 60 * 60 * 24), units)));
      }
      if (milliseconds > (1000 * 60 * 60)) {
        let days: number  = Math.floor(milliseconds / (1000 * 60 * 60));
        units++;
        return ((days + 'h ' +
          this.formatDuration(milliseconds % (1000 * 60 * 60), units)));
      }
      if (milliseconds > (1000 * 60)) {
        let days: number  = Math.floor(milliseconds / (1000 * 60));
        units++;
        return ((days + 'm ' +
          this.formatDuration(milliseconds % (1000 * 60), units)));
      }
      else if (milliseconds > (1000)) {
        let days: number  = Math.floor(milliseconds / (1000));
        units++;
        return ((days + 's ' +
          this.formatDuration(milliseconds % (1000), units)));
      }
      if (units == 0) {
        return '0s';
      }
    }
    return '';
  }
}

export let utils = new Utils();
