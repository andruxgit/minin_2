export class Excel {
  constructor(selector, options) {
    this.$el = document.querySelector(selector)
    this.components = options.components || []
  }

  getRoot() {
    const $root = document.createElement('div')
    $root.classList.add('excel')
    this.components.forEach(Component => {
      const $el = document.createElement('div')
      $el.classList.add(Component.className)
      const component = new Component($el)
      // console.log($root)
      // console.log(component.toHTML())
      $el.insertAdjacentHTML('beforeend', component.toHTML())
      $root.append($el)
      // $root.innerHTML = $el
    })

    return $root
  }


  render() {
    this.$el.append(this.getRoot())
  }
}

