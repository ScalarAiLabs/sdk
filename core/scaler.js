export class Scaler {
  static amplify(data) {
    return {
      amplified: data.output.toUpperCase(),
      scaleFactor: 10
    };
  }
}
