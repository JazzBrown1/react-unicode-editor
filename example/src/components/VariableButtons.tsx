import React from 'react';
import {
  DropdownButton, Dropdown, ButtonGroup,
} from 'react-bootstrap';

interface props {
  onVariableClick: Function;
}

const userVariablesBGColor = '#1ce600';
const productVariablesBGColor = '#29aaff';

const VariableButtons = ({ onVariableClick }: props) => (
  <>
    <span className="mr-1 text-secondary font-weight-light pl-1 d-none d-lg-inline-block">Variables: </span>
    <DropdownButton
      as={ButtonGroup}
      key="user-vars"
      id="dropdown-variants-user-vars"
      variant="outline-secondary"
      title="User"
      onMouseDown={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <Dropdown.Item
        eventKey="title"
        onSelect={() => {
          onVariableClick({
            inputText: 'Title',
            code: '<<user.title>>',
            previewText: 'Mr',
            style: { color: 'white', backgroundColor: userVariablesBGColor },
          });
        }}
      >
        Title
      </Dropdown.Item>
      <Dropdown.Item
        eventKey="first-name"
        onSelect={() => {
          onVariableClick({
            inputText: 'First Name',
            code: '<<user.firstName>>',
            previewText: 'John',
            style: { color: 'white', backgroundColor: userVariablesBGColor },
          });
        }}
      >
        First Name
      </Dropdown.Item>
      <Dropdown.Item
        eventKey="last-name"
        onSelect={() => {
          onVariableClick({
            inputText: 'Last Name',
            code: '<<user.lastName>>',
            previewText: 'Smith',
            style: { color: 'white', backgroundColor: userVariablesBGColor },
          });
        }}
      >
        Last Name
      </Dropdown.Item>
    </DropdownButton>
    {' '}
    <DropdownButton
      as={ButtonGroup}
      key="product-vars"
      id="dropdown-variants-product-vars"
      variant="outline-secondary"
      title="Product"
      onMouseDown={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <Dropdown.Item
        eventKey="product-title"
        onSelect={() => {
          onVariableClick({
            inputText: 'Product Name',
            code: '<<product.title>>',
            previewText: 'Deluxe Vacuum Cleaner',
            style: { color: 'white', backgroundColor: productVariablesBGColor },
          });
        }}
      >
        Name
      </Dropdown.Item>
      <Dropdown.Item
        eventKey="product-price"
        onSelect={() => {
          onVariableClick({
            inputText: 'Product Price',
            code: '<<product.price>>',
            previewText: '49.99',
            style: { color: 'white', backgroundColor: productVariablesBGColor },
          });
        }}
      >
        Price
      </Dropdown.Item>
      <Dropdown.Item
        eventKey="product-price"
        onSelect={() => {
          onVariableClick({
            inputText: 'Product Category',
            code: '<<product.category>>',
            previewText: 'Home & Appliances',
            style: { color: 'white', backgroundColor: productVariablesBGColor },
          });
        }}
      >
        Category
      </Dropdown.Item>
    </DropdownButton>
  </>
);

export default VariableButtons;
