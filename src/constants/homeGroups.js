import {Form} from "../components/common";

const homeGroups = [
  {
    name: 'title',
    label: 'Title',
    Component: Form.Input,
    message: 'Title can\'t contain more 40 symbols'
  },
  {
    name: 'description',
    label: 'Description',
    Component: Form.Textarea,
    message: 'Description can\'t contain more 500 symbols',
    notRequired: true
  }
];

export default homeGroups;