import {Form} from "../components/common";

const homeGroups = [
  {
    name: 'title',
    label: 'Title',
    Component: Form.Input,
    validations: [
      {
        required: true,
        message: 'Title is required',
      },
      {
        max: 40,
        message: 'Title can\'t contain more 40 symbols',
      },
    ],
    required: true,
  },
  {
    name: 'description',
    label: 'Description',
    Component: Form.Textarea,
    validations: [
      {
        max: 500,
        message: 'Description can\'t contain more 500 symbols',
      },
    ],
    required: false,
  }
];

export default homeGroups;