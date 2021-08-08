// import React from "react";
// import {
//   Modal,
//   ModalHeader,
//   ModalBody,
//   Button,
//   Form,
//   Input,
//   FormGroup,
//   Label,
// } from "reactstrap";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { useForm, Controller } from "react-hook-form";

// const signUpSchema = yup.object().shape({
//   email: yup.string().required("Email is a required field."),
//   amount: yup.string().required("Amount is a required field."),
//   state: yup.string().required("State is a required field."),
//   school: yup.string().required("School is a required field."),
// });

// const Student = ({ modal, setModal, toggle }) => {
//   const { control, register, handleSubmit, errors } = useForm({
//     resolver: yupResolver(signUpSchema),
//   });

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <div>
//       <Modal size="lg" isOpen={modal}>
//         <ModalHeader toggle={toggle} className="how-to-header"></ModalHeader>

//         <ModalBody>
//           <Form className="form__padder" onSubmit={handleSubmit(onSubmit)}>
//             <div>
//               <FormGroup>
//                 <Label className="property-from-label">Email</Label>
//                 <Controller
//                   as={Input}
//                   control={control}
//                   name="email"
//                   type="email"
//                   placeholder="Email"
//                   ref={register}
//                   className="form-control login-inputs"
//                 />
//                 {errors && errors.email && (
//                   <span className="text-danger">{errors.email.message}</span>
//                 )}
//               </FormGroup>
//             </div>

//             <div>
//               <FormGroup>
//                 <Label className="property-from-label">Amount</Label>
//                 <Controller
//                   as={Input}
//                   control={control}
//                   name="amount"
//                   type="text"
//                   placeholder="Amount"
//                   ref={register}
//                   className="form-control login-inputs"
//                 />
//                 {errors && errors.amount && (
//                   <span className="text-danger">{errors.amount.message}</span>
//                 )}
//               </FormGroup>
//             </div>

//             <div>
//               <FormGroup>
//                 <Label className="property-from-label">State</Label>
//                 <Controller
//                   as={Input}
//                   control={control}
//                   name="state"
//                   type="text"
//                   placeholder="State"
//                   ref={register}
//                   className="form-control login-inputs"
//                 />
//                 {errors && errors.state && (
//                   <span className="text-danger">{errors.state.message}</span>
//                 )}
//               </FormGroup>
//             </div>

//             <div>
//               <FormGroup>
//                 <Label className="property-from-label">School</Label>
//                 <Controller
//                   as={Input}
//                   control={control}
//                   name="school"
//                   type="text"
//                   placeholder="School"
//                   ref={register}
//                   className="form-control login-inputs"
//                 />
//                 {errors && errors.school && (
//                   <span className="text-danger">{errors.school.message}</span>
//                 )}
//               </FormGroup>
//             </div>

//             <div className="pb-1 mt-3">
//               <Button type="submit" className="modal-btn mb-5">
//                 SIGN UP
//               </Button>
//             </div>
//           </Form>
//         </ModalBody>
//       </Modal>
//     </div>
//   );
// };

// export default Student;

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

import { RegisterAs } from "../components";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";

const signUpSchema = yup.object().shape({
  name: yup.string().required("Name is a required field."),
  email: yup.string().required("Email is a required field."),
  password: yup.string().required("Password is a required field."),
  location: yup.string().required("location is a required field."),
});

const SignUp = ({ modal, setModal, toggle }) => {
  const { control, register, handleSubmit, errors } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Modal size="lg" isOpen={modal}>
        <ModalHeader toggle={toggle} className="how-to-header">
          <span className="log-in-title">SIGN UP</span>
        </ModalHeader>

        <ModalBody>
          <Form className="form__padder" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <FormGroup>
                <Label className="property-from-label">Name</Label>
                <Controller
                  as={Input}
                  control={control}
                  name="name"
                  type="text"
                  placeholder="Name"
                  ref={register}
                  className="form-control login-inputs"
                />
                {errors && errors.name && (
                  <span className="text-danger">{errors.name.message}</span>
                )}
              </FormGroup>
            </div>

            <div>
              <FormGroup>
                <Label className="property-from-label">Email</Label>
                <Controller
                  as={Input}
                  control={control}
                  name="email"
                  type="text"
                  placeholder="Email Id"
                  ref={register}
                  className="form-control login-inputs"
                />
                {errors && errors.email && (
                  <span className="text-danger">{errors.email.message}</span>
                )}
              </FormGroup>
            </div>

            <div>
              <FormGroup>
                <Label className="property-from-label">Password</Label>
                <Controller
                  as={Input}
                  control={control}
                  name="password"
                  type="password"
                  placeholder="Password"
                  ref={register}
                  className="form-control login-inputs"
                />
                {errors && errors.password && (
                  <span className="text-danger">{errors.password.message}</span>
                )}
              </FormGroup>
            </div>

            <div>
              <FormGroup>
                <Label className="property-from-label">Location</Label>
                <Controller
                  as={Input}
                  control={control}
                  name="location"
                  type="text"
                  placeholder="Location"
                  ref={register}
                  className="form-control login-inputs"
                />
                {errors && errors.location && (
                  <span className="text-danger">{errors.location.message}</span>
                )}
              </FormGroup>
            </div>

            <div className="pb-1 mt-3">
              <Button type="submit" className="modal-btn">
                NEXT
              </Button>
            </div>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default SignUp;
