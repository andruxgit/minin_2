export class Excel {
  constructor(selector, options) {
    this.$el = document.querySelector(selector)
    this.components = options.components || []
  }

  getRoot(callbackfn, thisArg) {
    const $root = document.createElement('div');
    this.components.forEach(Component => {
      const component = new Component()
      // console.log(component.toHTML())
      $root.insertAdjacentHTML('beforeend', component.toHTML())
    })
    return $root;
  }

  render() {
    // const node1 = document.createElement('h1');
    // node1.textContent = 'TEST123'
    this.$el.append(this.getRoot())
    // console.log(this.$el)
  }
}
