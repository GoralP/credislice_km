import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  Form,
  Input,
  FormGroup,
  Label,
} from "reactstrap";

import { useDispatch } from "react-redux";
import { signUp } from "../redux/SignUpAction";

const SignUp = ({ modal, setModal, toggle }) => {
  const dispatch = useDispatch();

  const [formData, updateFormData] = useState("");

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(formData, toggle));
    e.target.reset();
  };

  return (
    <div>
      <Modal size="lg" isOpen={modal}>
        <ModalHeader toggle={toggle} className="how-to-header">
          <span className="log-in-title">Student Loan Refinance</span>
        </ModalHeader>

        <ModalBody>
          <Form className="form__padder" onSubmit={handleSubmit}>
            <div>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="form-control"
                  required
                  onChange={handleChange}
                />
              </FormGroup>
            </div>

            <div>
              <FormGroup>
                <Label>Amount</Label>
                <Input
                  name="amount"
                  type="number"
                  placeholder="Amount"
                  className="form-control"
                  required
                  onChange={handleChange}
                />
              </FormGroup>
            </div>

            <div>
              <FormGroup>
                <Label>State</Label>
                <Input
                  name="state"
                  type="text"
                  placeholder="State"
                  className="form-control"
                  required
                  onChange={handleChange}
                />
              </FormGroup>
            </div>

            <div>
              <FormGroup>
                <Label>School</Label>
                <Input
                  name="school"
                  type="text"
                  placeholder="School"
                  className="form-control"
                  required
                  onChange={handleChange}
                />
              </FormGroup>
            </div>

            <div className="pb-1 mt-3">
              <Button type="submit" className="modal-btn">
                Sign Up
              </Button>
            </div>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default SignUp;
