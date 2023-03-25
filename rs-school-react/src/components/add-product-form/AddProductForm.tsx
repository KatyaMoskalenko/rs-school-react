import React from 'react';

class CreateProductForm extends React.Component {
  private selectRef = React.createRef<HTMLSelectElement>();
  private dateInputRef = React.createRef<HTMLInputElement>();
  private checkboxRef = React.createRef<HTMLInputElement>();
  private radioRef = React.createRef<HTMLInputElement>();
  render(): React.ReactNode {
    return (
      <>
        <form>
          <label>
            Title <input type="text" />
          </label>
          <textarea defaultValue="76"></textarea>
          <select ref={this.selectRef}>
            <option>80</option>
            <option>250</option>
          </select>
          <input type="date" ref={this.dateInputRef} />
          <label>
            Vegan:
            <input type="checkbox" ref={this.checkboxRef} />
            Lactose Free:
            <input type="checkbox" ref={this.checkboxRef} />
            Gluten Free:
            <input type="checkbox" ref={this.checkboxRef} />
          </label>
          <label>
            <input type="radio" value="available" ref={this.radioRef} />
            Male
          </label>
        </form>
      </>
    );
  }
}

export default CreateProductForm;
