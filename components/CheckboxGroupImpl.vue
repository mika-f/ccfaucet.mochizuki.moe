<template lang="pug">
  b-form-group(:label="label" :label-for="id")
    b-form-checkbox(v-model="allSelected" :indeterminate="indeterminate" @change="toggleAll")
      | 全て
    b-form-checkbox-group(:id="id" :name="id" v-model="selected" :options="options" :text-field="fieldText" :value-field="fieldValue")
</template>

<script>
/* eslint-disable space-before-function-paren */
export default {
  data: function() {
    return {
      allSelected: false,
      indeterminate: false,
      selected: []
    };
  },
  computed: {
    id() {
      return `${this.options[0][this.fieldValue].toString()}-cgi`;
    }
  },
  methods: {
    toggleAll(checked) {
      this.selected = checked ? this.options.slice().map(w => w[this.fieldValue]) : [];
    }
  },
  mounted: function() {
    this.toggleAll(true);
  },
  model: {
    prop: "selectedOptions",
    event: "input"
  },
  props: ["selectedOptions", "fieldText", "fieldValue", "options", "label"],
  watch: {
    selectedOptions(newValue, oldValue) {
      this.selected = newValue;
    },
    selected(newValue, oldValue) {
      if (newValue.length === 0) {
        this.indeterminate = false;
        this.allSelected = false;
      } else if (newValue.length === this.options.length) {
        this.indeterminate = false;
        this.allSelected = true;
      } else {
        this.indeterminate = true;
        this.allSelected = false;
      }
      this.$emit("input", newValue);
    }
  }
};
</script>
