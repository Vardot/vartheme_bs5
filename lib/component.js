// The name of the global variable where all component objects will be stashed.
const namespace = 'varthemeComponents';

/**
 * A class to be instantiated once per unique component. Automatically loops
 * over all instances matching the appropriate selector.
 */
export class ComponentType {
  /**
   *
   * @param {function} ComponentInstanceClass Class containing code to run for
   * each individual element being operated on by the behavior.
   * @param {HTMLElement} context The parent HTML element to search for new
   * instances to instantiate.
   * @param {string} id The unique ID for the Drupal behavior and for the
   * `once()` function. Must be in camel case.
   * @param {string} selector CSS selector with which to query the document for
   * component instances.
   */
  constructor(ComponentInstanceClass, id, selector) {
    // Check that the ID is in camel case.
    if (!id.match(/^[a-z][a-zA-Z0-9]*$/)) {
      throw new Error(
        'Component ID must contain only letters and numerals and must be in camel case.',
      );
    }

    this.ComponentInstanceClass = ComponentInstanceClass;
    this.id = id;
    this.selector = selector;

    if (typeof window[namespace] === 'undefined') {
      window[namespace] = {};
    }

    window[namespace][this.id] = this;

    // If we're in Drupal, add a behavior initializing the component.
    if (typeof window.Drupal !== 'undefined') {
      window.Drupal.behaviors[this.id] = {
        attach: (context) => {
          this.initComponent(context);
        },
        detach: (context) => {
          this.removeComponent(context);
        },
      };
    } else {
      // Otherwise, just init when the page is ready.
      if (['interactive', 'complete'].indexOf(document.readyState) !== -1) {
        this.initComponent();
      } else {
        window.addEventListener('DOMContentLoaded', () => {
          this.initComponent();
        });
      }
    }
  }

  /**
   * Find all instances of the component and run the `init()` method of the
   * ComponentInstance subclass on each of them.
   *
   * @param {HTMLElement} context The container to search for instances of this
   * component.
   */
  initComponent(context = document) {
    if (typeof this.instances === 'undefined') {
      this.instances = [];
      this.elements = [];
    }

    let newElements;

    if (typeof once === 'function') {
      // If `once` is available, we use it to prevent double-application of scripts.
      newElements = Array.from(once(this.id, this.selector, context));
    } else {
      // Otherwise, we just use querySelectorAll.
      newElements = Array.from(context.querySelectorAll(this.selector));
    }

    const newInstances = newElements.map(
      (el) => new this.ComponentInstanceClass(el),
    );

    newInstances.forEach((instance) => {
      instance.init();
    });

    this.instances.push(...newInstances);
    this.updateElements();
  }

  /**
   * Clean up before a chunk of the document is removed. Runs the `remove()`
   * method (if it exists) of all ComponentInstance objects to be removed.
   *
   * @param {HTMLElement} context The container to search for instances of the
   * component.
   * @returns
   */
  removeComponent(context = document) {
    const elementsToDelete = Array.from(
      context.querySelectorAll(this.selector),
    );
    const instancesToDelete = this.instances.filter(
      (instance) => elementsToDelete.indexOf(instance.el) !== -1,
    );

    if (!instancesToDelete.length) {
      return;
    }

    if (typeof instancesToDelete[0].remove !== 'undefined') {
      instancesToDelete.forEach((instance) => instance.remove());
    }

    this.instances = this.instances.filter(
      (oldInstance) => instancesToDelete.indexOf(oldInstance) === -1,
    );
    this.updateElements();
  }

  updateElements() {
    this.elements = this.instances.map((instance) => instance.el);
  }
}

/**
 * A class to extend once for each component type. There will be a separate
 * instance of this class for every instance of a component on each page.
 *
 * For example, if you have a Carousel component, there will be one
 * ComponentType instance for the whole page, but a separate ComponentInstance
 * instance for each carousel on the page.
 *
 * A subclass must have an `init` method that initiates each component instance.
 * This method should use `this.el` to get the element currently being worked
 * on.
 */
export class ComponentInstance {
  /**
   *
   * @param {HTMLElement} el The component container.
   */
  constructor(el) {
    this.el = el;
  }
}
