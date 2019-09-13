class Utils {
  // Formats a constant-style string to a human intended string,
  //  like "HELLO_WORLD!" => "Hello world!"
  toFirstUpperCase(aString: string): string {
    aString = aString.replace(/_/g, ' ');
    return (aString.slice(0,1).toUpperCase() + aString.slice(1).toLowerCase());
  }

  range(size: number, startAt: number = 0) {
    return [...Array(size).keys()].map((integer) => integer + startAt);
  }

  shuffle(array: any[]) {
  let currentIndex: number = array.length;
  let temporaryValue: any;
  let randomIndex: number;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
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
