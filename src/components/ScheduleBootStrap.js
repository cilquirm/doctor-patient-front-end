import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'


var Modal = require('react-bootstrap-modal')
 
class ScheduleBootStrap extends React.Component {
 
  render(){
    let closeModal = () => this.setState({ open: false })
 
    let saveAndClose = () => {
      api.saveData()
        .then(() => this.setState({ open: false }))
    }
 
    return (
      <div>
        <button type='button'>Launch modal</button>
 
        <Modal
          show={this.state.open}
          onHide={closeModal}
          aria-labelledby="ModalHeader"
        >
          <Modal.Header closeButton>
            <Modal.Title id='ModalHeader'>A Title Goes here</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Some Content here</p>
          </Modal.Body>
          <Modal.Footer>
            // If you don't have anything fancy to do you can use
            // the convenient `Dismiss` component, it will
            // trigger `onHide` when clicked
            <Modal.Dismiss className='btn btn-default'>Cancel</Modal.Dismiss>
 
            // Or you can create your own dismiss buttons
            <button className='btn btn-primary' onClick={saveAndClose}>
              Save
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}


// class ScheduleBootStrap extends React.Component {
//   constructor(props, context) {
//     super(props, context);

//     this.handleShow = this.handleShow.bind(this);
//     this.handleClose = this.handleClose.bind(this);

//     this.state = {
//       show: false,
//     };
//   }

//   handleClose() {
//     this.setState({ show: false });
//   }

//   handleShow() {
//     this.setState({ show: true });
//   }

//   render() {
//     return (
//       <div>
//         <Button variant="primary" onClick={this.handleShow}>
//           Launch demo modal
//         </Button>

//         <Modal show={this.state.show} onHide={this.handleClose}>
//           <Modal.Header closeButton>
//             <Modal.Title>Modal heading</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={this.handleClose}>
//               Close
//             </Button>
//             <Button variant="primary" onClick={this.handleClose}>
//               Save Changes
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </div>
//     );
//   }
// }

export default ScheduleBootStrap