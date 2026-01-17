(function () {
  const InteractionField = {
    listeners: [],

    emit(event) {
      this.listeners.forEach(fn => fn(event));
    },

    on(fn) {
      this.listeners.push(fn);
    },

    attach() {
      document.addEventListener("click", e => {
        this.emit({ type: "click", ts: Date.now() });
      });

      document.addEventListener("keydown", e => {
        this.emit({ type: "key", key: e.key, ts: Date.now() });
      });
    }
  };

  window.HCM_INTERACTION_FIELD = InteractionField;
})();
