export class DomListener {
  constructor($root) {
    if (!$root) {
      throw new Error('ERROR')
    }
    this.root = $root
  }
}
