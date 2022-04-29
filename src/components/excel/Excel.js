import {$} from '@core/dom'
export class Excel {
  constructor(selector, options) {
    // this.$el = document.querySelector(selector)
    this.$el = $(selector)
    this.components = options.components || []
  }

  getRoot() {
    // const $root = document.createElement('div');
    // $root.classList.add('excel')
    const $root = $.create('div', 'exel')
    this.components.forEach(Component => {
      // const $el = document.createElement('div')
      // $el.classList.add(Component.className)
      const $el = $.create('div', Component.className)
      const component = new Component($el)
      // debugger
      // $el.innerHTML = component.toHTML()
      // $root.insertAdjacentHTML('beforeend', component.toHTML())
      // $root.insertAdjacentHTML('beforeend', $el.innerHTML);
      $el.html(component.toHTML());
      $root.append($el)
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
