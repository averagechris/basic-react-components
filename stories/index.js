import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "../src/components/button.js";
import CloseIcon from "../src/components/closeIcon.js";
import Code from "../src/components/inlineCode.js";
import Form from "../src/components/form/form.js";
import FormInput from "../src/components/form/formInput.js";
import Gallery from "../src/components/modal/gallery.js";
import Modal from "../src/components/modal/modal.js";
import Select from "../src/components/form/select.js";
import TagItem from "../src/components/tagItem.js";

storiesOf("Button", module).add("default", () => (
  <Button text="Click Me" onClick={action("click")} />
));

storiesOf("Code", module).add("inline code", () => (
  <p>
    here is some text and <Code>this.isCode()</Code> and this is some more text
  </p>
));

storiesOf("Form", module)
  .add("form", () => {
    return (
      <div className="vh-100 w-40 helvetica dark-gray dt center">
        <Form
          onChange={action("change")}
          onSubmit={action("submit")}
          containerClasses={"v-mid center dtc".split(" ")}
        >
          <FormInput name="First Name" />
          <FormInput name="Last Name" />
          <Button text="SUBMIT" onClick={action("button-click")} />
        </Form>
      </div>
    );
  })
  .add("uncontrolled password", () => {
    return (
      <Form onChange={action("change")} onSubmit={action("submit")}>
        <FormInput name="password" type="password" uncontrolled={true} />
      </Form>
    );
  })
  .add("disabled, error state", () => (
    <Form onChange={action("change")} onSubmit={action("submit")}>
      <FormInput name="disabled" disabled={true} />
      <FormInput name="Some Invalid Input" error={true} required={true} />
    </Form>
  ));

storiesOf("Modal", module)
  .add("basic", () => (
    <Modal handleClose={action("close")}>
      <p>hello</p>
    </Modal>
  ))
  .add("picture", () => (
    <Modal
      handleClose={action("close")}
      closeIconColor="white"
      bodyColorClass="bg-black-0"
    >
      <div className="tc">
        <img
          className="mw6 w-100"
          src="https://i.imgur.com/bBU9y5O.jpg"
          alt="flower"
        />
      </div>
    </Modal>
  ));

storiesOf("Gallery", module).add("basic", () => {
  let images = [
    "https://i.imgur.com/bBU9y5O.jpg",
    "https://i.imgur.com/8dnlgEn.jpg",
    "https://i.imgur.com/IGwARTF.jpg",
    "https://i.imgur.com/DFY8ZCo.jpg"
  ];
  return <Gallery images={images} handleClose={action("close")} />;
});

storiesOf("TagItem", module).add("defualt", () => (
  <div className="flex justify-center pv3">
    <TagItem label="?" value="thing" onClick={action("?-thing")} />
    <TagItem
      label="id"
      value="stuff stuff stuff"
      onClick={action("id-stuff-stuff-stuff")}
    />
    <TagItem
      label="email"
      value="super@email.com"
      name="important"
      onClick={action("email")}
    />
    <TagItem
      additionalContainerClasses={["b blue"]}
      additionalValueClasses={["dib"]}
      name="someKey"
      value="some deleteable property"
      onClick={action("click-some-deleteable-property")}
    >
      <CloseIcon
        onClick={action("x-some-deleteable-property")}
        additionalContainerClasses={["dim z1"]}
        color="red"
        size="small"
      />
    </TagItem>
  </div>
));

storiesOf("Select", module).add("default", () => {
  return (
    <div className="measure ma2 center">
      <Select
        options={[{ text: "hello" }, { text: "world" }, { text: "fuck you" }]}
      />
    </div>
  );
});
