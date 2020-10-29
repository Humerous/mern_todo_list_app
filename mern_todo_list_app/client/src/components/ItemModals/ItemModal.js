import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
// <--- CSS SCRIPT --->
import './ItemModal.css';
import { connect } from 'react-redux';
import { addItem } from '../../actions/itemActions';
import PropTypes from 'prop-types';

class ItemModal extends Component {
  state = {
    modal: false,
    name: ' ',
  };

  // <--- CHECK IF AUTHENTICATED  --->
  static propTypes = {
    isAuthenticated: PropTypes.bool,
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // <--- CREATE NEW ITEM --->
  onSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      name: this.state.name,
    };
    // <--- ADD NEW ITEM --->
    this.props.addItem(newItem);

    this.toggle();
  };

  render() {
    return (
      <div>
        {this.props.isAuthenticated ? (
          <Button
            color='info'
            style={{ marginBottom: '2rem' }}
            onClick={this.toggle}
          >
            Add New Item
          </Button>
        ) : (
          <h5 className='mb-3 ml-4'>Please log in to manage items</h5>
        )}
        <Modal
          className='my-modal'
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle} charCode='&times;'>
            Add To ToDo List
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='item'>Item</Label>
                <Input
                  type='text'
                  name='name'
                  id='item'
                  placeholder='Add to do item'
                  onChange={this.onChange}
                />
                <Button color='light' style={{ marginTop: '2rem' }} block>
                  Add Item
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

// <--- MAP STATE TO PROPS --->
const mapStateToProps = (state) => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated,
});
// <--- EXPORT --->
export default connect(mapStateToProps, { addItem })(ItemModal);
